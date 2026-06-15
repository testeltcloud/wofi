const steps = [
  {
    title: "Sua agência acessa a plataforma",
    body: "Cadastro gratuito e acesso imediato ao painel com todos os destinos e planos disponíveis.",
  },
  {
    title: "Você oferece ao cliente no fechamento",
    body: "Antes do embarque — junto ao seguro e ao briefing final — a conectividade entra como parte natural do pacote.",
  },
  {
    title: "Cliente ativa, agência lucra",
    body: "O cliente ativa o eSIM direto pelo celular. Você recebe sua margem. Sem estoque. Sem logística.",
  },
] as const;

const label = (i: number) => String(i + 1).padStart(2, "0");

function ArrowLine() {
  return (
    <svg width="56" height="12" viewBox="0 0 56 12" fill="none" aria-hidden>
      <path d="M0 6h48" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path
        d="M46 1.5 52 6l-6 4.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function V2HowItWorks() {
  return (
    <section
      id="como-funciona"
      className="bg-gradient-to-b from-[#f5f8ff] to-white"
    >
      <div className="mx-auto max-w-[1280px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        {/* Cabeçalho */}
        <div className="reveal text-center">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#2563eb]">
            Como Funciona
          </p>
          <h2 className="mx-auto mt-5 max-w-3xl font-[family-name:var(--font-poppins)] text-[2.3rem] font-extrabold leading-[1.06] tracking-[-0.03em] text-[#0b1020] sm:text-[2.9rem] lg:text-[3.3rem]">
            Três passos.
            <br />
            Nenhuma complexidade.
          </h2>
        </div>

        {/* Stepper (apenas md+) */}
        <ol className="reveal mt-16 hidden grid-cols-3 gap-6 md:grid">
          {steps.map((_, i) => (
            <li key={i} className="relative flex justify-center">
              <span className="grid h-14 w-14 place-items-center rounded-full bg-white text-sm font-bold text-[#2563eb] ring-1 ring-[#c3d2f5] shadow-[0_0_0_7px_rgba(37,99,235,0.05),0_10px_24px_-10px_rgba(37,99,235,0.4)]">
                {label(i)}
              </span>
              {i < steps.length - 1 && (
                <span className="absolute left-full top-1/2 ml-3 -translate-x-1/2 -translate-y-1/2 text-[#9db8f5]">
                  <ArrowLine />
                </span>
              )}
            </li>
          ))}
        </ol>

        {/* Cards */}
        <div className="mt-8 grid grid-cols-1 gap-6 md:mt-10 md:grid-cols-3">
          {steps.map((s, i) => (
            <article
              key={s.title}
              className="reveal rounded-3xl bg-white p-8 shadow-[0_24px_50px_-28px_rgba(11,16,32,0.3)] ring-1 ring-black/[0.03]"
            >
              <span className="font-[family-name:var(--font-poppins)] text-5xl font-extrabold leading-none text-[#cdd9f7]">
                {label(i)}
              </span>
              <h3 className="mt-5 text-xl font-bold leading-snug text-[#0b1020]">
                {s.title}
              </h3>
              <p className="mt-3 leading-relaxed text-[#5b647b]">{s.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
