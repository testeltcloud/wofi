import type { ReactNode } from "react";


export function V2SectionLight({ children }: { children?: ReactNode }) {
  return (
    <section className="border-t border-[#e8ebf2] bg-[#f6f7f9]">
      <div className="mx-auto max-w-[1600px] px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
        {children ?? (
          <div className="mx-auto max-w-6xl">
            <div className="fancy-corners reveal">
              <div className="min-h-[320px] overflow-hidden bg-white shadow-[0_30px_80px_-44px_rgba(11,16,32,0.4)] ring-1 ring-black/[0.04] sm:min-h-[400px] lg:min-h-[480px]" />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
