import Image from "next/image";
import fundo from "@/public/images/fundo.png";
import { hero } from "@/lib/content";
import { Container } from "@/components/ui/Section";
import { OpenModalButton } from "@/components/interactive/lead-modal";
import { ArrowRightIcon, CheckIcon } from "@/components/ui/Icons";

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-[100svh] flex-col overflow-hidden text-white"
    >
      {/* Background photo — static import gives blur placeholder + no CLS.
          priority because it is the LCP element. */}
      <Image
        src={fundo}
        alt=""
        fill
        priority
        placeholder="blur"
        quality={72}
        sizes="100vw"
        className="-z-20 object-cover object-center"
      />

      {/* Legibility scrims — leves, só o suficiente para o texto ler bem
          sem apagar a foto. */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-b from-black/30 via-transparent to-black/45"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-r from-black/25 to-transparent"
      />

      <Container className="relative flex flex-1 flex-col justify-end pb-20 pt-36 sm:pb-28">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-aurora" aria-hidden />
            {hero.eyebrow}
          </span>

          <h1 className="mt-6 font-[family-name:var(--font-display)] text-4xl font-bold leading-[1.05] tracking-[-0.03em] drop-shadow-sm sm:text-5xl lg:text-6xl">
            {hero.title}
            <br />
            <span className="text-white/95">{hero.titleAccent}</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/85 drop-shadow-sm">
            {hero.subtitle}
          </p>

          <div className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <OpenModalButton size="lg">
              {hero.ctaPrimary}
              <ArrowRightIcon className="h-5 w-5" />
            </OpenModalButton>
            <p className="inline-flex items-center gap-2 text-sm text-white/80">
              <CheckIcon className="h-4 w-4 text-[var(--color-aqua)]" />
              {hero.note}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
