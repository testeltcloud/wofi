import { z } from "zod";

/** Lead capture schema — shared by the client form and the Server Action. */
export const leadSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Informe seu nome completo.")
    .max(120, "Nome muito longo."),
  whatsapp: z
    .string()
    .trim()
    .min(10, "Informe um WhatsApp válido com DDD.")
    .max(20, "WhatsApp inválido.")
    .regex(/^[0-9()+\-\s]+$/, "Use apenas números e DDD."),
  agency: z
    .string()
    .trim()
    .min(2, "Informe o nome da agência.")
    .max(120, "Nome muito longo."),
  // Honeypot: must stay empty. Bots tend to fill every field.
  company: z.string().max(0).optional().default(""),
});

export type LeadInput = z.infer<typeof leadSchema>;

export type LeadState = {
  status: "idle" | "success" | "error";
  message?: string;
  errors?: Partial<Record<keyof LeadInput, string>>;
};
