import Image from "next/image";
import conect from "@/public/images/conect.png";

/**
 * Variante lado a lado: texto à esquerda sobre um azul bem clarinho,
 * imagem de conectividade destacada (full color, arredondada) à direita.
 */
export function V2Quote() {
  return (
    <section id="essencial" className="scroll-mt-24 bg-white">
      <div className="mx-auto max-w-[1600px] px-5 py-12 sm:px-8 lg:px-12 lg:py-16">
        <div className="grid items-center gap-10 rounded-[2.5rem] bg-gradient-to-br from-[#eff3ff] to-[#e7eeff] p-8 ring-1 ring-[#e2e8fb] sm:p-10 lg:grid-cols-2 lg:gap-14 lg:p-14">
          {/* Texto */}
          <div className="reveal">
            <h2 className="font-[family-name:var(--font-poppins)] text-[1.8rem] font-extrabold leading-[1.14] tracking-[-0.02em] text-[#0b1020] sm:text-[2.2rem] lg:text-[2.7rem]">
              A <span className="text-[#2563eb]">conectividade</span> deixou de
              ser um detalhe da viagem. Hoje, ela faz parte essencial da
              experiência do viajante.
            </h2>
            <p className="mt-6 max-w-xl text-[1.0625rem] leading-[1.6] text-[#5b647b] lg:text-[1.125rem]">
              A Woofi consolida soluções de conectividade em uma única
              plataforma, permitindo que sua agência entregue uma experiência de
              turismo mais completa, moderna e integrada.
            </p>
          </div>

          {/* Imagem destacada */}
          <div
            className="reveal relative"
            style={{ "--i": 1 } as React.CSSProperties}
          >
            <div
              aria-hidden
              className="absolute -inset-4 -z-10 rounded-[2.25rem] bg-gradient-to-br from-[#c7d6ff] to-[#e7d8ff] opacity-60 blur-2xl"
            />
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[1.75rem] shadow-[0_34px_70px_-30px_rgba(20,32,90,0.55)] ring-1 ring-black/5">
              <Image
                src={conect}
                alt="Viajante conectada em uma plataforma de trem, com um mapa-múndi de conexões"
                fill
                placeholder="blur"
                quality={78}
                sizes="(max-width: 1024px) 90vw, 720px"
                className="object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
