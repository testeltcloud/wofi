import Image from "next/image";
import amigos from "@/public/images/amigos.jpeg";
import { CheckIcon, CloseIcon } from "@/components/ui/Icons";
import { V2SectionLight } from "./section-light";

const items = [
  { label: "Passagem", ok: true },
  { label: "Hospedagem", ok: true },
  { label: "Seguro e Transfer", ok: true },
  { label: "Conectividade", ok: false },
] as const;

export function V2ValueProp() {
  return (
    <V2SectionLight>
      <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        {/* Imagem em elipse, com glow suave atrás */}
        <div className="reveal relative mx-auto w-full max-w-sm lg:max-w-md">
          <div
            aria-hidden
            className="absolute -bottom-8 -left-8 -z-10 h-3/4 w-3/4 rounded-full bg-gradient-to-br from-[#bcd0ff] to-[#d9d2ff] opacity-60 blur-3xl"
          />
          <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[50%] shadow-[0_34px_70px_-30px_rgba(11,16,32,0.45)]">
            <Image
              src={amigos}
              alt="Três amigos com malas em um aeroporto"
              fill
              placeholder="blur"
              sizes="(max-width: 1024px) 80vw, 38vw"
              className="object-cover"
            />
          </div>
        </div>

        {/* Conteúdo à direita */}
        <div className="reveal">
          <h2 className="font-[family-name:var(--font-poppins)] text-[2.4rem] font-extrabold leading-[1.04] tracking-[-0.03em] text-[#0b1020] sm:text-[3rem] lg:text-[3.4rem]">
            O detalhe que{" "}
            <br className="hidden sm:block" />
            faltava na sua entrega
          </h2>

          <p className="mt-6 max-w-xl text-[1.1875rem] leading-[1.6] text-[#5b647b]">
            Você entrega a experiência completa, exceto por um detalhe. A Woofi
            acrescenta conectividade internacional ao portfólio da sua agência de
            forma simples, sem operação complexa, sem estoque e sem depender de
            operadoras.
          </p>

          <ul className="mt-9 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {items.map((it) => (
              <li
                key={it.label}
                className="flex items-center gap-3.5 rounded-2xl bg-white px-5 py-5 shadow-[0_12px_30px_-14px_rgba(11,16,32,0.2)] ring-1 ring-black/[0.04]"
              >
                <span
                  className={`grid h-9 w-9 shrink-0 place-items-center rounded-full ${
                    it.ok
                      ? "bg-[#e7f7ee] text-[#157f3c]"
                      : "bg-[#fdeae6] text-[#f15a3a]"
                  }`}
                >
                  {it.ok ? (
                    <CheckIcon className="h-5 w-5" />
                  ) : (
                    <CloseIcon className="h-5 w-5" />
                  )}
                </span>
                <span
                  className={`text-[1.0625rem] font-semibold ${
                    it.ok ? "text-[#0b1020]" : "text-[#f15a3a]"
                  }`}
                >
                  {it.label}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </V2SectionLight>
  );
}
