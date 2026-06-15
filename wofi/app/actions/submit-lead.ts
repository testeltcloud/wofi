"use server";

import { leadSchema, type LeadState } from "@/lib/schema";

/**
 * Single point where a lead leaves the app. Swap the destination here
 * (Google Sheets via Apps Script today, CRM/email tomorrow) without
 * touching any UI. Set GOOGLE_SCRIPT_URL to an Apps Script Web App that
 * appends a row to a Sheet. If unset, the lead is logged server-side so
 * the form still works in development.
 */
async function deliverLead(lead: {
  name: string;
  whatsapp: string;
  agency: string;
}): Promise<boolean> {
  const endpoint = process.env.GOOGLE_SCRIPT_URL;

  if (!endpoint) {
    console.info("[lead] (no GOOGLE_SCRIPT_URL set) ->", lead);
    return true;
  }

  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...lead, source: "lp-seja-parceiro", at: new Date().toISOString() }),
      // Apps Script web apps respond fast; fail loud if it hangs.
      signal: AbortSignal.timeout(8000),
    });
    return res.ok;
  } catch (err) {
    console.error("[lead] delivery failed", err);
    return false;
  }
}

export async function submitLead(
  _prev: LeadState,
  formData: FormData,
): Promise<LeadState> {
  const parsed = leadSchema.safeParse({
    name: formData.get("name"),
    whatsapp: formData.get("whatsapp"),
    agency: formData.get("agency"),
    company: formData.get("company") ?? "",
  });

  if (!parsed.success) {
    const errors: LeadState["errors"] = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0] as keyof typeof errors;
      if (key && !errors[key]) errors[key] = issue.message;
    }
    return { status: "error", message: "Confira os campos destacados.", errors };
  }

  // Honeypot tripped — pretend success, drop silently.
  if (parsed.data.company) {
    return { status: "success", message: "Recebemos seu cadastro!" };
  }

  const ok = await deliverLead({
    name: parsed.data.name,
    whatsapp: parsed.data.whatsapp,
    agency: parsed.data.agency,
  });

  if (!ok) {
    return {
      status: "error",
      message: "Não conseguimos enviar agora. Tente novamente em instantes.",
    };
  }

  return {
    status: "success",
    message: "Cadastro recebido! Nossa equipe entra em contato pelo WhatsApp.",
  };
}
