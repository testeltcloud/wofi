import type { SVGProps } from "react";

const base: SVGProps<SVGSVGElement> = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

const Dollar = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <path d="M12 3v18" />
    <path d="M16.5 7c0-1.7-2-3-4.5-3S7.5 5.3 7.5 7s2 2.8 4.5 3 4.5 1.3 4.5 3-2 3-4.5 3-4.5-1.3-4.5-3" />
  </svg>
);
const Globe = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18M12 3c2.5 2.5 2.5 15 0 18M12 3c-2.5 2.5-2.5 15 0 18" />
  </svg>
);
const Phone = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <rect x="7" y="3" width="10" height="18" rx="2.5" />
    <path d="M10.5 18h3" />
  </svg>
);
const Layers = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <path d="M12 3 21 8 12 13 3 8z" />
    <path d="M3 12l9 5 9-5" />
    <path d="M3 16l9 5 9-5" />
  </svg>
);
const Layout = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <rect x="3" y="4" width="18" height="16" rx="2.5" />
    <path d="M9 4v16M3 10h6" />
  </svg>
);
const Chat = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <path d="M4 5h16a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H9l-4 3v-3H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1z" />
    <path d="M8 9h8M8 12.5h5" />
  </svg>
);

const benefits = [
  { Icon: Dollar, title: "Margem garantida", body: "Margem atrativa em cada plano de conectividade vendido." },
  { Icon: Globe, title: "Ampla Cobertura", body: "Cobertura consolidada em mais de 165 países." },
  { Icon: Phone, title: "eSIM prático", body: "Ativado pelo próprio cliente, direto no celular, sem entrega física." },
  { Icon: Layers, title: "Risco zero", body: "Zero estoque, zero risco operacional e zero custo de entrada." },
  { Icon: Layout, title: "Plataforma Inteligente", body: "Gestão de vendas e acompanhamento em tempo real." },
  { Icon: Chat, title: "Suporte 24h", body: "Sua agência não precisa intermediar atendimentos técnicos." },
] as const;

export function V2Benefits() {
  return (
    <section id="beneficios" className="bg-white">
      <div className="mx-auto max-w-[1280px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        {/* Cabeçalho */}
        <div className="reveal text-center">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#2563eb]">
            Vantagens
          </p>
          <h2 className="mx-auto mt-5 max-w-3xl font-[family-name:var(--font-poppins)] text-[2.3rem] font-extrabold leading-[1.06] tracking-[-0.03em] text-[#0b1020] sm:text-[2.9rem] lg:text-[3.3rem]">
            O que muda para
            <br />
            sua agência?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-[1.1875rem] font-medium leading-[1.5] text-[#2a3344]">
            Mais praticidade para o cliente. Mais recorrência e rentabilidade
            para sua agência.
          </p>
        </div>

        {/* Cards */}
        <ul className="reveal mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map(({ Icon, title, body }) => (
            <li
              key={title}
              className="flex gap-4 rounded-2xl bg-[#f4f6fc] p-6 ring-1 ring-[#e8ecf7] transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_22px_44px_-24px_rgba(11,16,32,0.28)]"
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gradient-to-br from-[#e3ecff] to-[#d3e0fd] text-[#2563eb] shadow-[0_8px_18px_-8px_rgba(37,99,235,0.55)]">
                <Icon className="h-[22px] w-[22px]" />
              </span>
              <div>
                <h3 className="text-[1.0625rem] font-bold text-[#0b1020]">
                  {title}
                </h3>
                <p className="mt-1.5 text-[0.95rem] leading-relaxed text-[#5b647b]">
                  {body}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
