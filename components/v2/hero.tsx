import type { ComponentType } from "react";
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

function WifiIcon({ className }: { className?: string }) {
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
      <path d="M5 13a10 10 0 0 1 14 0" />
      <path d="M8.5 16.5a5 5 0 0 1 7 0" />
      <circle cx="12" cy="20" r="1" fill="currentColor" />
    </svg>
  );
}

function GlobeIcon({ className }: { className?: string }) {
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
      <path d="M3.6 9h16.8M3.6 15h16.8M12 3a14.5 14.5 0 0 1 0 18M12 3a14.5 14.5 0 0 0 0 18" />
    </svg>
  );
}

function StarIcon({ className }: { className?: string }) {
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
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

function FloatingCard({
  className,
  icon: Icon,
  title,
  value,
  delay,
  accent = "green",
}: {
  className?: string;
  icon: ComponentType<{ className?: string }>;
  title: string;
  value: string;
  delay: string;
  accent?: "green" | "blue";
}) {
  const iconCls =
    accent === "green"
      ? "bg-[#e8f7ed] text-[#157f3c]"
      : "bg-[#e8eeff] text-[#2f6bff]";

  return (
    <div
      className={`anim-fade absolute flex items-center gap-1.5 rounded-xl border border-white/50 bg-white/50 px-2 py-1.5 shadow-[0_10px_30px_-10px_rgba(14,23,38,0.4),inset_0_1px_0_0_rgba(255,255,255,0.65)] backdrop-blur-xl sm:gap-2.5 sm:rounded-2xl sm:px-3.5 sm:py-2.5 ${className}`}
      style={{ animationDelay: delay }}
    >
      <span
        className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-md shadow-sm sm:h-8 sm:w-8 sm:rounded-lg ${iconCls}`}
      >
        <Icon className="h-2.5 w-2.5 sm:h-4 sm:w-4" />
      </span>
      <div className="leading-tight">
        <p className="whitespace-nowrap text-[0.42rem] font-semibold uppercase tracking-wide text-muted sm:text-[0.58rem]">
          {title}
        </p>
        <p className="whitespace-nowrap text-[0.58rem] font-bold text-ink sm:text-[0.78rem]">
          {value}
        </p>
      </div>
    </div>
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

          <h1
            className="anim-up-lcp [animation-delay:0.12s] mt-5 font-(family-name:--font-poppins) font-extrabold leading-[1.06] tracking-[-0.03em] text-ink lg:mt-6"
            style={{ fontSize: "clamp(1.75rem, 2.8vw + 0.85rem, 3.7rem)" }}
          >
            A viagem é do passageiro.{" "}
            <br className="hidden xl:block" />
            A <span className="text-[#2f6bff]">conectividade</span> é nossa.
          </h1>

          <p
            className="anim-up [animation-delay:0.2s] mt-5 max-w-136 leading-[1.6] tracking-[-0.005em] text-muted lg:mt-7"
            style={{ fontSize: "clamp(0.95rem, 0.4vw + 0.8rem, 1.1875rem)" }}
          >
            Com a Woo-fi, sua agência vende eSIM internacional, conecta
            viajantes no mundo todo e ainda gera comissão em cada ativação.
          </p>

          <div className="anim-up [animation-delay:0.28s] mt-8">
            <V2CtaButton className="inline-flex items-center justify-center rounded-full bg-[#157f3c] px-7 py-4 text-base font-bold text-white shadow-[0_16px_32px_-12px_rgba(21,127,60,0.75)] transition hover:-translate-y-0.5 hover:brightness-105 active:translate-y-0 lg:px-9 lg:py-[1.15rem] lg:text-lg">
              Quero distribuir conectividade
            </V2CtaButton>
          </div>

          <p className="anim-up [animation-delay:0.34s] mt-4 inline-flex items-center gap-2 text-[0.875rem] font-medium text-muted">
            <CheckIcon className="h-4 w-4 text-[#157f3c]" />
            Cadastro gratuito. Sem burocracia.
          </p>
        </div>

        {/* ── Coluna direita — imagem + floating cards ── */}
        <div className="relative">
          <div className="anim-right-lcp [animation-delay:0.12s] relative w-full overflow-hidden rounded-4xl shadow-[0_30px_60px_-20px_rgba(11,16,32,0.35)]
                          aspect-4/3 sm:aspect-video lg:aspect-8/7">
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

          {/* Card 1 — verde */}
          <FloatingCard
            icon={WifiIcon}
            title="Conecte clientes"
            value="Em qualquer lugar do mundo"
            delay="0.5s"
            accent="green"
            className="top-[9%] left-3 sm:left-4 lg:-left-5"
          />

          {/* Card 2 — azul */}
          <FloatingCard
            icon={GlobeIcon}
            title="Cobertura global"
            value="Mais de 165 países"
            delay="0.62s"
            accent="blue"
            className="top-[52%] left-3 sm:left-4 lg:-left-5"
          />

          {/* Card 3 — centrado no mobile, vaza à direita no lg+ */}
          <FloatingCard
            icon={StarIcon}
            title="Pacotes de viagem"
            value="Experiência completa"
            delay="0.74s"
            accent="blue"
            className="bottom-5 left-1/2 -translate-x-1/2 lg:left-auto lg:-right-5 lg:translate-x-0"
          />
        </div>
      </div>
    </section>
  );
}
