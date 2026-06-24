/**
 * Copy da landing (home). Editar texto sem tocar nos componentes.
 */

export const nav = [
  { label: "Solução", href: "#solucao" },
  { label: "Como Funciona", href: "#como-funciona" },
  { label: "Benefícios", href: "#beneficios" },
  { label: "FAQ", href: "#faq" },
] as const;

export const hero = {
  eyebrow: "Para agências de viagem",
  title: "A viagem é do passageiro.",
  titleAccent: "A conectividade é nossa.",
  subtitle:
    "Ofereça eSIM internacional em mais de 165 países direto no seu fechamento. Sem estoque, sem operadora, sem burocracia — e com margem garantida em cada venda.",
  ctaPrimary: "Quero distribuir conectividade",
  note: "Cadastro gratuito. Sem burocracia.",
  stats: [
    { value: "165+", label: "países cobertos" },
    { value: "0", label: "estoque ou risco" },
    { value: "24h", label: "ativação do eSIM" },
  ],
} as const;
