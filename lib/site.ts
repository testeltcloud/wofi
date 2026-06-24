/**
 * Central site configuration. Keep brand-level constants here so copy,
 * SEO and the lead pipeline all read from one place.
 */
export const site = {
  name: "Woofi",
  legalName: "Woofi Conectividade",
  // Used for canonical URLs / OG. Override with NEXT_PUBLIC_SITE_URL in prod.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://woofi.com.br",
  description:
    "Plataforma que conecta agências de viagem a planos de eSIM internacional com cobertura em mais de 165 países. Cadastro gratuito, sem estoque e sem burocracia.",
  locale: "pt-BR",
  // Digits only, country code first (no +, spaces or symbols).
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "5511999999999",
  whatsappMessage:
    "Olá! Quero saber como minha agência pode distribuir conectividade com a Woofi.",
  email: "parceiros@woofi.com.br",
} as const;

/** Builds a wa.me link with a pre-filled message. */
export function whatsappLink(message: string = site.whatsappMessage): string {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}
