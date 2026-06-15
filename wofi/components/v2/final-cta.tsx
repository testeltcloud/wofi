import { V2CtaButton } from "./cta-button";
import { whatsappLink } from "@/lib/site";

export function V2FinalCta() {
  return (
    <section
      id="cadastrar"
      className="relative isolate overflow-hidden bg-gradient-to-b from-white to-[#eef2fc] text-[#0b1020]"
    >
      {/* glows ambiente (degradê) */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 left-1/4 h-96 w-96 rounded-full bg-[#bcd0ff] opacity-50 blur-[130px]" />
        <div className="absolute -bottom-32 right-1/4 h-96 w-96 rounded-full bg-[#cfe0ff] opacity-60 blur-[130px]" />
      </div>

      <div className="reveal relative mx-auto max-w-3xl px-5 py-24 text-center sm:px-8 lg:py-32">
        {/* Bloco A — CTA principal */}
        <h2 className="mx-auto max-w-2xl font-[family-name:var(--font-poppins)] text-[2.1rem] font-extrabold leading-[1.1] tracking-[-0.025em] text-[#0b1020] sm:text-[2.7rem] lg:text-[3.2rem]">
          Está na hora de entregar a experiência completa.
        </h2>
        <div className="mt-9 flex justify-center">
          <V2CtaButton className="inline-flex items-center justify-center rounded-full bg-[#157f3c] px-9 py-4 text-base font-bold text-white shadow-[0_16px_36px_-12px_rgba(21,127,60,0.7)] transition hover:-translate-y-0.5 hover:brightness-105 active:translate-y-0">
            Quero distribuir conectividade
          </V2CtaButton>
        </div>
        <p className="mt-5 text-[0.95rem] text-[#5b647b]">
          Cadastro gratuito. Sem burocracia. Comece hoje.
        </p>

        {/* Divider */}
        <div className="mx-auto my-14 h-px max-w-md bg-gradient-to-r from-transparent via-[#0b1020]/12 to-transparent" />

        {/* Bloco B — falar com especialista */}
        <h3 className="font-[family-name:var(--font-poppins)] text-[1.4rem] font-bold tracking-[-0.01em] text-[#0b1020] sm:text-[1.7rem]">
          Quer entender como funciona antes de se cadastrar?
        </h3>
        <p className="mt-3 text-[#5b647b]">
          Fale com a nossa equipe e veja a plataforma na prática.
        </p>
        <div className="mt-7 flex justify-center">
          <a
            href={whatsappLink(
              "Olá! Quero entender como a Woofi funciona antes de cadastrar minha agência.",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-[#2563eb]/35 bg-white px-8 py-3.5 text-[0.95rem] font-semibold text-[#2563eb] shadow-sm transition hover:-translate-y-0.5 hover:bg-[#eef3ff]"
          >
            Falar com um especialista
          </a>
        </div>
      </div>
    </section>
  );
}
