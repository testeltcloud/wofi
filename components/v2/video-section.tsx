"use client";

import { useEffect, useRef } from "react";
import { V2CtaButton } from "./cta-button";

const stats = [
  {
    value: "165+",
    label: "países cobertos",
    sub: "Europa, Ásia, Américas e Oriente Médio",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c2.5 2.5 2.5 15 0 18M12 3c-2.5 2.5-2.5 15 0 18" />
      </svg>
    ),
  },
  {
    value: "0",
    label: "risco operacional",
    sub: "Sem estoque, sem logística",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    value: "24h",
    label: "ativação do eSIM",
    sub: "100% digital, direto no celular",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden>
        <rect x="7" y="3" width="10" height="18" rx="2.5" />
        <path d="M10.5 18h3" />
        <path d="M12 7v3l1.5 1.5" />
      </svg>
    ),
  },
  {
    value: "R$0",
    label: "custo de entrada",
    sub: "Cadastro gratuito, comece hoje",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden>
        <path d="M12 3v18" />
        <path d="M16.5 7c0-1.7-2-3-4.5-3S7.5 5.3 7.5 7s2 2.8 4.5 3 4.5 1.3 4.5 3-2 3-4.5 3-4.5-1.3-4.5-3" />
      </svg>
    ),
  },
] as const;

export function V2VideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (video.readyState === 0) video.load();
          video.play().catch(() => {});
          io.disconnect();
        }
      },
      { rootMargin: "200px" },
    );

    io.observe(video);
    return () => io.disconnect();
  }, []);

  return (
    <section
      className="relative isolate min-h-[90vh] overflow-hidden bg-[#04060f]"
      aria-label="Conectividade global"
    >
      {/* ── Vídeo de fundo ── */}
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover opacity-50"
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        aria-hidden
      >
        <source src="/video/hero-bg.webm" type="video/webm" />
        <source src="/video/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* ── Overlays ── */}
      {/* Gradiente principal: escuro em cima e em baixo, vidro no meio */}
      <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-[#04060f]/80 via-[#04060f]/40 to-[#04060f]/85" />
      {/* Vinheta lateral: escurece as bordas p/ texto ficar centrado */}
      <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-[#04060f]/70 via-transparent to-[#04060f]/50" />
      {/* Brilho verde radial da marca — vem de baixo */}
      <div aria-hidden className="absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_20%_85%,rgba(21,128,61,0.22),transparent)]" />
      {/* Brilho azul sutil no canto oposto — dá profundidade */}
      <div aria-hidden className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_80%_20%,rgba(37,99,235,0.12),transparent)]" />

      {/* ── Conteúdo ── */}
      <div className="relative mx-auto flex max-w-[1280px] flex-col items-center gap-16 px-5 py-24 sm:px-8 lg:flex-row lg:items-center lg:gap-12 lg:px-12 lg:py-32 xl:gap-20">

        {/* Coluna esquerda — texto */}
        <div className="reveal flex-1 text-center lg:text-left">
          {/* Eyebrow */}
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.07] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-white/70 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#4ade80]" />
            Conectividade global · Woofi
          </span>

          {/* Headline emocional */}
          <h2
            className="mt-7 font-[family-name:var(--font-poppins)] font-extrabold leading-[1.03] tracking-[-0.03em] text-white [text-shadow:0_4px_32px_rgba(0,0,0,0.6)]"
            style={{ fontSize: "clamp(2.1rem, 4.5vw + 0.5rem, 3.8rem)" }}
          >
            Não deixe seu cliente
            <br />
            perder os{" "}
            <span
              className="relative inline-block"
              style={{
                background: "linear-gradient(135deg, #4ade80 0%, #22c55e 50%, #16a34a 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              melhores momentos.
            </span>
          </h2>

          {/* Subtexto */}
          <p className="mx-auto mt-6 max-w-lg text-[1.0625rem] leading-[1.7] text-white/70 lg:mx-0 lg:text-[1.125rem]">
            Enquanto ele atravessa fronteiras, a Woofi garante que o celular
            nunca perca sinal. Sua agência fecha o pacote completo —
            passagem, hospedagem, seguro, transfer{" "}
            <span className="font-semibold text-white/90">e conectividade.</span>
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col items-center gap-3.5 sm:flex-row sm:justify-center lg:justify-start">
            <V2CtaButton className="inline-flex items-center justify-center rounded-full bg-[#15803d] px-8 py-[1.1rem] text-[1rem] font-bold text-white shadow-[0_0_0_1px_rgba(21,128,61,0.4),0_16px_40px_-12px_rgba(21,128,61,0.9)] transition hover:-translate-y-0.5 hover:brightness-110 active:translate-y-0">
              Quero distribuir conectividade
            </V2CtaButton>
            <a
              href="#como-funciona"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.07] px-7 py-[1.05rem] text-[0.95rem] font-semibold text-white/90 backdrop-blur-sm transition hover:bg-white/[0.14]"
            >
              Ver como funciona
              <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 opacity-70" aria-hidden>
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>

        {/* Coluna direita — cards glass com stats */}
        <div className="grid w-full max-w-sm grid-cols-2 gap-3 sm:max-w-md sm:gap-4 lg:max-w-[400px]">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="reveal group relative overflow-hidden rounded-2xl border border-white/[0.12] bg-white/[0.06] p-5 backdrop-blur-md transition duration-300 hover:bg-white/[0.11] hover:border-white/20"
              style={{ "--i": i + 1 } as React.CSSProperties}
            >
              {/* Brilho de canto ao hover */}
              <div aria-hidden className="absolute -right-6 -top-6 h-16 w-16 rounded-full bg-[#4ade80]/0 blur-2xl transition duration-500 group-hover:bg-[#4ade80]/20" />

              {/* Ícone */}
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[#15803d]/25 text-[#4ade80] ring-1 ring-[#4ade80]/20">
                {s.icon}
              </span>

              {/* Número destaque */}
              <p
                className="mt-3 font-[family-name:var(--font-poppins)] font-extrabold leading-none tracking-tight text-white"
                style={{ fontSize: "clamp(1.6rem, 3vw, 2rem)" }}
              >
                {s.value}
              </p>

              {/* Label */}
              <p className="mt-1 text-[0.8rem] font-semibold uppercase tracking-[0.1em] text-white/60">
                {s.label}
              </p>

              {/* Detalhe */}
              <p className="mt-1.5 text-[0.78rem] leading-snug text-white/45">
                {s.sub}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Separador inferior suave ── */}
      <div aria-hidden className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
