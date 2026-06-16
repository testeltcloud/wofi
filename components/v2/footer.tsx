import { V2Logo } from "./logo";

const links = [
  { label: "Sobre", href: "#essencial" },
  { label: "Privacidade", href: "#" },
  { label: "Termos", href: "#" },
];

export function V2Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[#e8ebf2] bg-white">
      <div className="mx-auto max-w-[1600px] px-5 py-8 sm:px-8 lg:px-12">
        <div className="reveal flex flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
          {/* logo dessaturada */}
          <span className="inline-flex opacity-50 grayscale">
            <V2Logo />
          </span>

          {/* links */}
          <nav aria-label="Rodapé" className="flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-sm font-medium text-[#5b647b] transition hover:text-[#0b1020]"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* copyright */}
          <p className="text-sm text-[#6b7280]">
            © {year} Woofi. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
