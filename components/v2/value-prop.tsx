import Image from "next/image";
import amigos from "@/public/images/amigos.jpeg";
import { CheckIcon } from "@/components/ui/Icons";
import { V2SectionLight } from "./section-light";

const items = [
  { label: "Passagem", highlight: false },
  { label: "Hospedagem", highlight: false },
  { label: "Seguro e Transfer", highlight: false },
  { label: "Conectividade", highlight: true },
] as const;

export function V2ValueProp() {
  return (
    <V2SectionLight>
      <div className="mx-auto max-w-6xl">
        {/* fancy-corners desenha as duas "pontas" verdes atrás do card
            (canto superior-esquerdo + inferior-direito). reveal anima a
            entrada e cria o contexto de empilhamento p/ as pontas ficarem
            atrás do card. */}
        <div className="fancy-corners reveal">
          <div className="relative overflow-hidden rounded-[1.75rem] bg-white shadow-[0_30px_80px_-44px_rgba(11,16,32,0.4)] ring-1 ring-black/[0.04] lg:flex lg:items-stretch">
            {/* Imagem à esquerda — agora quadrada, preenchendo a altura */}
            <div className="relative aspect-[4/3] w-full lg:aspect-auto lg:w-[44%] lg:flex-none lg:self-stretch">
              <Image
                src={amigos}
                alt="Três amigos com malas em um aeroporto"
                fill
                placeholder="blur"
                sizes="(max-width: 1024px) 100vw, 44vw"
                className="object-cover"
              />
            </div>

            {/* Conteúdo à direita */}
            <div className="flex-1 p-8 sm:p-10 lg:p-12 xl:p-14">
              <span className="inline-flex items-center gap-2 rounded-full bg-[#eaf7ee] px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-[#15803d] ring-1 ring-[#15803d]/15">
                <span className="h-1.5 w-1.5 rounded-full bg-[#15803d]" />
                Portfólio completo
              </span>

              <h2 className="mt-5 font-[family-name:var(--font-poppins)] text-[2.1rem] font-extrabold leading-[1.05] tracking-[-0.03em] text-[#0b1020] sm:text-[2.6rem] lg:text-[2.9rem]">
                O detalhe que <span className="text-[#15803d]">faltava</span> na
                sua entrega
              </h2>

              <p className="mt-5 max-w-xl text-[1.0625rem] leading-[1.65] text-[#5b647b]">
                Você entrega a experiência completa, exceto por um detalhe. A
                Woofi acrescenta conectividade internacional ao portfólio da sua
                agência de forma simples, sem operação complexa, sem estoque e
                sem depender de operadoras.
              </p>

              <ul className="mt-8 grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                {items.map((it) => (
                  <li
                    key={it.label}
                    className={
                      it.highlight
                        ? "flex items-center gap-3 rounded-2xl bg-[#15803d] px-5 py-4 shadow-[0_18px_36px_-16px_rgba(21,128,61,0.7)]"
                        : "flex items-center gap-3 rounded-2xl bg-[#f6f8fb] px-5 py-4 ring-1 ring-black/[0.05]"
                    }
                  >
                    <span
                      className={`grid h-9 w-9 shrink-0 place-items-center rounded-full ${
                        it.highlight
                          ? "bg-white/20 text-white"
                          : "bg-[#e7f7ee] text-[#15803d]"
                      }`}
                    >
                      <CheckIcon className="h-5 w-5" />
                    </span>
                    <span className="flex flex-col">
                      <span
                        className={`text-[1.0625rem] font-semibold ${
                          it.highlight ? "text-white" : "text-[#0b1020]"
                        }`}
                      >
                        {it.label}
                      </span>
                      {it.highlight && (
                        <span className="text-xs font-medium text-white/85">
                          com a Woofi
                        </span>
                      )}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </V2SectionLight>
  );
}
