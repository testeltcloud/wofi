"use client";

import { useActionState, useId } from "react";
import { submitLead } from "@/app/actions/submit-lead";
import type { LeadState } from "@/lib/schema";
import { whatsappLink, site } from "@/lib/site";
import { Button, ButtonLink } from "@/components/ui/Button";
import { CheckIcon, WhatsAppIcon } from "@/components/ui/Icons";

const initial: LeadState = { status: "idle" };

const fieldClass =
  "h-12 w-full rounded-xl border border-[var(--color-line)] bg-white px-4 text-[var(--color-ink)] outline-none transition focus:border-[var(--color-brand)] focus:ring-2 focus:ring-[color-mix(in_oklab,var(--color-brand)_30%,white)]";

export function RegistrationForm() {
  const [state, formAction, pending] = useActionState(submitLead, initial);
  const uid = useId();

  if (state.status === "success") {
    return (
      <div className="flex flex-col items-center gap-4 py-4 text-center">
        <span className="grid h-14 w-14 place-items-center rounded-full bg-aurora text-white">
          <CheckIcon className="h-7 w-7" />
        </span>
        <div>
          <p className="text-lg font-semibold text-[var(--color-ink)]">
            Cadastro recebido!
          </p>
          <p className="mt-1 text-sm text-[var(--color-muted)]">{state.message}</p>
        </div>
        <ButtonLink
          href={whatsappLink(
            "Olá! Acabei de cadastrar minha agência na Woofi e quero falar com um especialista.",
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-1"
        >
          <WhatsAppIcon className="h-5 w-5" />
          Falar agora no WhatsApp
        </ButtonLink>
      </div>
    );
  }

  const err = state.errors;

  return (
    <form action={formAction} className="flex flex-col gap-4" noValidate>
      <Field
        id={`${uid}-name`}
        name="name"
        label="Nome completo"
        autoComplete="name"
        placeholder="Como você se chama?"
        error={err?.name}
      />
      <Field
        id={`${uid}-whatsapp`}
        name="whatsapp"
        label="WhatsApp"
        type="tel"
        inputMode="tel"
        autoComplete="tel"
        placeholder="(11) 99999-9999"
        error={err?.whatsapp}
      />
      <Field
        id={`${uid}-agency`}
        name="agency"
        label="Nome da agência"
        autoComplete="organization"
        placeholder="Sua agência de viagens"
        error={err?.agency}
      />

      {/* Honeypot — visually hidden, off-screen, not announced. */}
      <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label>
          Não preencha
          <input name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      {state.status === "error" && state.message && (
        <p role="alert" className="text-sm font-medium text-rose-600">
          {state.message}
        </p>
      )}

      <Button type="submit" size="lg" disabled={pending} className="mt-1 w-full">
        {pending ? "Enviando…" : "Enviar solicitação"}
      </Button>
      <p className="text-center text-xs text-[var(--color-muted)]">
        Ao enviar você concorda em ser contatado pela {site.name}. Sem spam.
      </p>
    </form>
  );
}

function Field({
  id,
  name,
  label,
  error,
  ...rest
}: {
  id: string;
  name: string;
  label: string;
  error?: string;
} & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="flex flex-col gap-1.5 text-left">
      <label htmlFor={id} className="text-sm font-medium text-[var(--color-ink-soft)]">
        {label}
      </label>
      <input
        id={id}
        name={name}
        required
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-err` : undefined}
        className={fieldClass}
        {...rest}
      />
      {error && (
        <span id={`${id}-err`} className="text-xs font-medium text-rose-600">
          {error}
        </span>
      )}
    </div>
  );
}
