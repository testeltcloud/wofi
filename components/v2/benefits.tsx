import Image from "next/image";
import margem from "@/public/images/itensCrds/Margem garantida.png";
import cobertura from "@/public/images/itensCrds/amplaCobertura.jpeg";
import esim from "@/public/images/itensCrds/eSim.jpeg";
import risco from "@/public/images/itensCrds/riscoZero.jpeg";
import plataforma from "@/public/images/itensCrds/pataformaInteligente.png";
import suporte from "@/public/images/itensCrds/suporte24h.png";

const benefits = [
  {
    img: margem,
    title: "Margem garantida",
    body: "Margem atrativa em cada plano de conectividade vendido.",
    // card-destaque: ocupa 2x2 no bento
    span: "sm:col-span-2 lg:col-span-2 lg:row-span-2",
    wide: true,
    feature: true,
  },
  {
    img: cobertura,
    title: "Ampla Cobertura",
    body: "Cobertura consolidada em mais de 165 países.",
    span: "lg:col-span-2",
    wide: true,
    feature: false,
  },
  {
    img: esim,
    title: "eSIM prático",
    body: "Ativado pelo próprio cliente, direto no celular, sem entrega física.",
    span: "",
    wide: false,
    feature: false,
  },
  {
    img: risco,
    title: "Risco zero",
    body: "Zero estoque, zero risco operacional e zero custo de entrada.",
    span: "",
    wide: false,
    feature: false,
  },
  {
    img: plataforma,
    title: "Plataforma Inteligente",
    body: "Gestão de vendas e acompanhamento em tempo real.",
    span: "lg:col-span-2",
    wide: true,
    feature: false,
  },
  {
    img: suporte,
    title: "Suporte 24h",
    body: "Sua agência não precisa intermediar atendimentos técnicos.",
    span: "sm:col-span-2 lg:col-span-2",
    wide: true,
    feature: false,
  },
] as const;

export function V2Benefits() {
  return (
    <section id="beneficios" className="bg-white">
      <div className="mx-auto max-w-[1280px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        {/* Cabeçalho */}
        <div className="reveal text-center">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#15803d]">
            Vantagens
          </p>
          <h2 className="mx-auto mt-5 max-w-3xl font-[family-name:var(--font-poppins)] text-[2.3rem] font-extrabold leading-[1.06] tracking-[-0.03em] text-[#0b1020] sm:text-[2.9rem] lg:text-[3.3rem]">
            O que muda para
            <br />
            sua agência?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-[1.1875rem] font-medium leading-[1.5] text-[#2a3344]">
            Mais praticidade para o cliente. Mais recorrência e rentabilidade
            para sua agência.
          </p>
        </div>

        {/* Bento de cards com imagem — layout assimétrico */}
        <ul className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:auto-rows-[220px]">
          {benefits.map(({ img, title, body, span, wide, feature }, i) => (
            <li
              key={title}
              style={{ "--i": i } as React.CSSProperties}
              className={`reveal ${span}`}
            >
              {/* wrapper interno cuida do hover/visual; o <li> cuida da
                  entrada (reveal) — assim os dois transforms não brigam */}
              <div className="group relative isolate h-full min-h-[260px] overflow-hidden rounded-3xl shadow-[0_18px_40px_-26px_rgba(11,16,32,0.5)] ring-1 ring-black/5 transition-transform duration-500 ease-out hover:-translate-y-1.5 lg:min-h-0">
              <Image
                src={img}
                alt={title}
                fill
                placeholder="blur"
                sizes={
                  wide
                    ? "(max-width: 1024px) 100vw, 50vw"
                    : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                }
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
              />

              {/* Véu escuro para legibilidade do texto — mais denso na base,
                  onde fica o título/descrição */}
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-[#04060f]/95 via-[#04060f]/60 via-35% to-transparent"
              />
              {/* Brilho verde da marca no hover */}
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-[#15803d]/55 via-[#15803d]/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              />
              {/* Borda de realce no hover */}
              <div
                aria-hidden
                className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/0 transition duration-500 group-hover:ring-white/25"
              />

              <div className="relative flex h-full flex-col justify-end p-6 lg:p-7">
                <h3
                  className={`font-[family-name:var(--font-poppins)] font-extrabold tracking-tight text-white [text-shadow:0_2px_12px_rgba(0,0,0,0.7),0_1px_2px_rgba(0,0,0,0.6)] ${
                    feature
                      ? "text-[1.5rem] lg:text-[1.85rem]"
                      : "text-[1.15rem] lg:text-[1.3rem]"
                  }`}
                >
                  {title}
                </h3>
                <p className="mt-2 max-w-md text-[0.92rem] leading-relaxed text-white/95 [text-shadow:0_1px_8px_rgba(0,0,0,0.65)]">
                  {body}
                </p>
              </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
