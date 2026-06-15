"use client";

import { useId, useState } from "react";

const faqs = [
  {
    q: "O que é a Woofi?",
    a: "A Woofi é uma plataforma consolidadora de conectividade global. Reunimos soluções de conexão para centenas de destinos ao redor do mundo.",
  },
  {
    q: "A Woofi é uma operadora de telefonia?",
    a: "Não. A Woofi atua centralizando soluções de conectividade global para que sua agência encontre o que precisa em um só lugar.",
  },
  {
    q: "O que minha agência passa a oferecer?",
    a: "Sua agência passa a ter acesso a planos internacionais de conectividade via eSIM, com cobertura em mais de 165 países.",
  },
  {
    q: "Preciso ter estoque ou logística?",
    a: "Não. Toda a estrutura é digital. A logística de conectividade, datas e suporte é gerenciada pela Woofi.",
  },
  {
    q: "Quais destinos estão disponíveis?",
    a: "A Woofi está presente em mais de 165 países na Europa, América do Norte, Ásia, Oriente Médio e América do Sul.",
  },
  {
    q: "Existe algum custo para minha agência?",
    a: "O cadastro é gratuito e não há taxa de adesão.",
  },
  {
    q: "Preciso assinar contrato de exclusividade?",
    a: "Não. Não há exclusividade nem fidelidade obrigatória. Você usa a plataforma no ritmo da sua operação, sem nenhum vínculo que limite o seu trabalho.",
  },
] as const;

function Chevron({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M9 6l6 6-6 6" />
    </svg>
  );
}

export function V2Faq() {
  const [open, setOpen] = useState(0);
  const base = useId();

  return (
    <section id="faq" className="bg-white">
      <div className="mx-auto max-w-[880px] px-5 py-20 sm:px-8 lg:py-28">
        <div className="reveal text-center">
          <h2 className=" font-[family-name:var(--font-poppins)] text-[2.3rem] font-extrabold leading-[1.06] tracking-[-0.03em] text-[#0b1020] sm:text-[2.9rem] lg:text-[3.1rem]">
            Perguntas frequentes
          </h2>
        </div>

        <ul className="mt-12 space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            const btnId = `${base}-q-${i}`;
            const panelId = `${base}-a-${i}`;
            return (
              <li
                key={f.q}
                className={`reveal overflow-hidden rounded-2xl transition-colors duration-300 ${
                  isOpen
                    ? "bg-[#234d86] shadow-[0_24px_48px_-24px_rgba(35,77,134,0.7)]"
                    : "bg-[#f5f6fb] ring-1 ring-[#e9ecf5] hover:bg-[#eef1f8]"
                }`}
              >
                <button
                  id={btnId}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left sm:px-7 sm:py-6"
                >
                  <span
                    className={`text-[1.05rem] font-bold sm:text-[1.15rem] ${
                      isOpen ? "text-white" : "text-[#234d86]"
                    }`}
                  >
                    {f.q}
                  </span>
                  <Chevron
                    className={`h-5 w-5 shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? "rotate-90 text-white/80"
                        : "text-[#9aa6c2]"
                    }`}
                  />
                </button>

                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={btnId}
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    {/* divider entre pergunta e resposta (só visível aberto) */}
                    <div className="mx-6 border-t border-white/15 sm:mx-7" />
                    <p className="px-6 pb-6 pt-5 text-[0.975rem] leading-relaxed text-white/80 sm:px-7 sm:text-base">
                      {f.a}
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
