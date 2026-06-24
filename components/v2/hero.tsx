import Image from "next/image";
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

export function V2Hero() {
  return (
    <section id="top" className="overflow-x-clip bg-white">
      <div
        className="mx-auto grid max-w-[1600px] items-center px-5 py-14
                   sm:px-8
                   lg:grid-cols-[1.1fr_0.9fr] lg:px-12 lg:py-24
                   xl:grid-cols-[1.3fr_0.9fr] xl:py-28"
        style={{ gap: "clamp(2rem, 4vw, 3.5rem)" }}
      >
        {/* ── Coluna esquerda ── */}
        <div>
          <span className="anim-up [animation-delay:0.05s] inline-flex items-center gap-2 text-[0.875rem] font-bold uppercase tracking-wider text-[#2563eb]">
            <ClockIcon className="h-4 w-4" />
            Plataforma para Agências
          </span>

          {/*
            Título completamente fluído com clamp():
              375px → ~1.8rem  (tela pequena, coluna única)
              768px → ~2.0rem
              1024px → ~2.7rem (2 colunas começa aqui)
              1280px → ~3.1rem
              1536px → cap 3.7rem
            Assim o texto encolhe sozinho sem "saltos" entre breakpoints.
          */}
          <h1
            className="anim-up-lcp [animation-delay:0.12s] mt-5 font-[family-name:var(--font-poppins)] font-extrabold leading-[1.06] tracking-[-0.03em] text-[#0b1020] lg:mt-6"
            style={{ fontSize: "clamp(1.75rem, 2.8vw + 0.85rem, 3.7rem)" }}
          >
            A viagem é do passageiro.{" "}
            <br className="hidden xl:block" />
            A <span className="text-[#2f6bff]">conectividade</span> é nossa.
          </h1>

          {/*
            Parágrafo também fluído e sempre proporcional ao título:
              375px → ~0.95rem
              1024px → ~1.0rem
              1536px → cap 1.1875rem
          */}
          <p
            className="anim-up [animation-delay:0.2s] mt-5 max-w-[34rem] leading-[1.6] tracking-[-0.005em] text-[#5b647b] lg:mt-7"
            style={{ fontSize: "clamp(0.95rem, 0.4vw + 0.8rem, 1.1875rem)" }}
          >
            Com a Woo-fi, sua agência vende eSIM internacional, conecta
            viajantes no mundo todo e ainda gera comissão em cada ativação.
          </p>

          <div className="anim-up [animation-delay:0.28s] mt-8">
            <V2CtaButton className="inline-flex items-center justify-center rounded-full bg-[#157f3c] px-7 py-[1rem] text-base font-bold text-white shadow-[0_16px_32px_-12px_rgba(21,127,60,0.75)] transition hover:-translate-y-0.5 hover:brightness-105 active:translate-y-0 lg:px-9 lg:py-[1.15rem] lg:text-lg">
              Quero distribuir conectividade
            </V2CtaButton>
          </div>

          <p className="anim-up [animation-delay:0.34s] mt-4 inline-flex items-center gap-2 text-[0.875rem] font-medium text-[#5b647b]">
            <CheckIcon className="h-4 w-4 text-[#157f3c]" />
            Cadastro gratuito. Sem burocracia.
          </p>
        </div>

        {/* ── Coluna direita — imagem + badges ── */}
        {/*
          Posicionamento dos badges:
          < lg (coluna única, imagem full-width):
            → todos DENTRO da imagem (left-4 / centrado) — nunca vaza
          ≥ lg (2 colunas, gap ≥ 40px):
            → badges 1 e 2 vazam à esquerda (-left-5)
            → badge 3 vaza à direita (-right-5)
        */}
        <div className="relative">
          {/*
            aspect-ratio por breakpoint (coluna única até lg):
              base  → 4/3  (375px → 281px alto) ✓
              sm    → 16/9 (640px → 360px alto)  ✓
              md    → 16/9 (768px → 432px alto)  ✓
              ~1007px→ 16/9 (→ 566px alto)       ✓  era 824px com 8/7 ❌
              lg+   → 8/7  (coluna ~400px wide → 350px alto) ✓
          */}
          <div className="anim-right-lcp [animation-delay:0.12s] relative w-full overflow-hidden rounded-[2rem] shadow-[0_30px_60px_-20px_rgba(11,16,32,0.35)]
                          aspect-[4/3] sm:aspect-[16/9] lg:aspect-[8/7]">
            <Image
              src={family}
              alt="Família conectada usando o celular durante uma viagem de trem"
              fill
              priority
              placeholder="blur"
              quality={55}
              sizes="(max-width: 1024px) 100vw, (max-width: 1280px) 45vw, 50vw"
              className="object-cover brightness-[1.06] saturate-[0.9]"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-[#eaf1ff] mix-blend-soft-light opacity-40"
            />
          </div>

          {/* Badge 1 — verde */}
          <span
            className="anim-fade [animation-delay:0.5s] absolute top-[9%] inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-white font-semibold text-[#0b1020] shadow-[0_12px_34px_-8px_rgba(11,16,32,0.28)] ring-1 ring-black/5
                        left-4 px-3 py-2.5
                        lg:-left-5 lg:px-4 lg:py-3.5"
            style={{ fontSize: "clamp(0.72rem, 0.8vw, 0.875rem)" }}
          >
            <span className="h-2 w-2 shrink-0 rounded-full bg-[#157f3c] lg:h-2.5 lg:w-2.5" aria-hidden />
            Conecte seus clientes em qualquer lugar
          </span>

          {/* Badge 2 — azul */}
          <span
            className="anim-fade [animation-delay:0.62s] absolute top-[52%] inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-white font-semibold text-[#0b1020] shadow-[0_12px_34px_-8px_rgba(11,16,32,0.28)] ring-1 ring-black/5
                        left-4 px-3 py-2.5
                        lg:-left-5 lg:px-4 lg:py-3.5"
            style={{ fontSize: "clamp(0.72rem, 0.8vw, 0.875rem)" }}
          >
            <span className="h-2 w-2 shrink-0 rounded-full bg-[#2f6bff] lg:h-2.5 lg:w-2.5" aria-hidden />
            Cobertura em mais de 165 países
          </span>

          {/*
            Badge 3 — texto longo.
            < lg: centralizado, whitespace-nowrap com font fluída que
                  encolhe conforme a imagem encolhe. rounded-full sempre.
            ≥ lg: vaza à direita, font-size controlado por clamp.
          */}
          <span
            className="anim-fade [animation-delay:0.74s] absolute bottom-5 inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-white font-semibold text-[#0b1020] shadow-[0_12px_34px_-8px_rgba(11,16,32,0.28)] ring-1 ring-black/5
                        left-1/2 -translate-x-1/2 px-3 py-2.5
                        lg:left-auto lg:-right-5 lg:translate-x-0 lg:px-4 lg:py-3.5"
            style={{ fontSize: "clamp(0.62rem, 1.5vw, 0.875rem)" }}
          >
            <span className="h-2 w-2 shrink-0 rounded-full bg-[#2f6bff] lg:h-2.5 lg:w-2.5" aria-hidden />
            Pacotes de viagem com uma experiência ainda mais completa.
          </span>
        </div>
      </div>
    </section>
  );
}
