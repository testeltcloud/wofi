import Image from "next/image";
import type { ReactNode } from "react";
import family from "@/public/images/familyMobileTravel.png";
import { CheckIcon } from "@/components/ui/Icons";
import { V2CtaButton } from "./cta-button";

function ClockIcon({ className }: { className?: string }) {
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
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

function Badge({
  children,
  className,
  dot,
}: {
  children: ReactNode;
  className: string;
  dot: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-2.5 rounded-full bg-white px-4 py-3.5 text-sm font-semibold text-[#0b1020] shadow-[0_12px_34px_-8px_rgba(11,16,32,0.28)] ring-1 ring-black/5 ${className}`}
    >
      <span
        className="h-2.5 w-2.5 shrink-0 rounded-full"
        style={{ background: dot }}
        aria-hidden
      />
      {children}
    </span>
  );
}

export function V2Hero() {
  return (
    <section id="top" className="overflow-x-clip bg-white">
      <div className="mx-auto grid max-w-[1600px] items-center gap-14 px-5 py-16 sm:px-8 lg:grid-cols-[1.3fr_0.9fr] lg:gap-12 lg:px-12 lg:py-28">
        {/* Coluna esquerda */}
        <div>
          <span className="anim-up [animation-delay:0.05s] inline-flex items-center gap-2.5 text-[0.95rem] font-bold uppercase tracking-wider text-[#2563eb]">
            <ClockIcon className="h-5 w-5" />
            Plataforma para Agências
          </span>

          <h1 className="anim-up-lcp [animation-delay:0.12s] mt-6 font-[family-name:var(--font-poppins)] text-[2.15rem] font-extrabold leading-[1.06] tracking-[-0.03em] text-[#0b1020] sm:text-[3rem] sm:leading-[1.03] lg:text-[3.5rem] lg:leading-[1.02] lg:tracking-[-0.035em] xl:text-[3.7rem] 2xl:text-[3.95rem]">
            A viagem é do cliente.{" "}
            {/* quebra forçada só no desktop; no mobile o texto flui */}
            <br className="hidden lg:block" />
            A <span className="text-[#2f6bff]">conectividade</span> também.
          </h1>

          <p className="anim-up [animation-delay:0.2s] mt-7 max-w-[34rem] text-[1.1875rem] leading-[1.6] tracking-[-0.005em] text-[#5b647b]">
            Com a Woo-fi, sua agência vende eSIM internacional, conecta
            viajantes no mundo todo e ainda gera comissão em cada ativação.
          </p>

          <div className="anim-up [animation-delay:0.28s] mt-9">
            <V2CtaButton className="inline-flex items-center justify-center rounded-full bg-[#157f3c] px-9 py-[1.15rem] text-lg font-bold text-white shadow-[0_16px_32px_-12px_rgba(21,127,60,0.75)] transition hover:-translate-y-0.5 hover:brightness-105 active:translate-y-0">
              Quero distribuir conectividade
            </V2CtaButton>
          </div>

          <p className="anim-up [animation-delay:0.34s] mt-5 inline-flex items-center gap-2 text-[0.95rem] font-medium text-[#5b647b]">
            <CheckIcon className="h-4 w-4 text-[#157f3c]" />
            Cadastro gratuito. Sem burocracia.
          </p>
        </div>

        {/* Coluna direita — imagem + badges flutuantes */}
        <div className="relative">
          <div className="anim-right-lcp [animation-delay:0.12s] relative aspect-[8/7] w-full overflow-hidden rounded-[2rem] shadow-[0_30px_60px_-20px_rgba(11,16,32,0.35)]">
            <Image
              src={family}
              alt="Família conectada usando o celular durante uma viagem de trem"
              fill
              priority
              placeholder="blur"
              quality={55}
              sizes="(max-width: 1224px) 100vw, 60vw"
              // clareia e tira um pouco do amarelo (luz quente do trem)
              className="object-cover brightness-[1.06] saturate-[0.9]"
            />
            {/* wash frio bem sutil pra neutralizar o tom amarelado */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-[#eaf1ff] mix-blend-soft-light opacity-40"
            />
          </div>

          <Badge
            className="anim-fade [animation-delay:0.5s] absolute top-[8%] -left-3 sm:-left-6"
            dot="#157f3c"
          >
            Conecte seus clientes em qualquer lugar
          </Badge>
          <Badge
            className="anim-fade [animation-delay:0.62s] absolute top-[52%] -left-3 sm:-left-6"
            dot="#2f6bff"
          >
            +165 países
          </Badge>
          <span
            className="anim-fade absolute bottom-6 left-1/2 inline-flex -translate-x-1/2 items-center gap-1.5 whitespace-nowrap rounded-full bg-white px-2.5 py-2.5 font-semibold text-[#0b1020] shadow-[0_12px_34px_-8px_rgba(11,16,32,0.28)] ring-1 ring-black/5 sm:left-auto sm:-right-6 sm:translate-x-0 sm:gap-2.5 sm:px-4 sm:py-3.5"
            style={{ fontSize: "clamp(0.62rem, 1.9vw, 0.875rem)", animationDelay: "0.74s" }}
          >
            <span
              className="h-2.5 w-2.5 shrink-0 rounded-full"
              style={{ background: "#2f6bff" }}
              aria-hidden
            />
            Pacotes de viagem com uma experiência ainda mais completa.
          </span>
        </div>
      </div>
    </section>
  );
}
