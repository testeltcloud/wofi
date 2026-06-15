import type { ReactNode } from "react";


export function V2SectionLight({ children }: { children?: ReactNode }) {
  return (
    <section className="border-t border-[#e8ebf2] bg-[#f6f7f9]">
      <div className="mx-auto max-w-[1600px] px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
        {children ?? (
          <p className="text-center text-sm font-medium text-[#9aa3b2]">
            Próxima seção — conteúdo aqui
          </p>
        )}
      </div>
    </section>
  );
}
