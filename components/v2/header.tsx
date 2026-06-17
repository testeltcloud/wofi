"use client";

import { useEffect, useState } from "react";
import { V2Logo } from "./logo";
import { V2CtaButton } from "./cta-button";

const navItems = [
  { label: "A Solução", href: "#solucao" },
  { label: "Como Funciona", href: "#como-funciona" },
  { label: "Benefícios", href: "#beneficios" },
  { label: "FAQs", href: "#faq" },
];

export function V2Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 border-b transition-colors duration-300 ${
        scrolled
          ? "border-white/30 bg-white/10 shadow-[0_8px_30px_-12px_rgba(11,16,32,0.18)] backdrop-blur-md"
          : "border-gray-100 bg-white"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <a href="#top" aria-label="Woofi — início" className="shrink-0">
          <V2Logo />
        </a>

        <nav
          aria-label="Principal"
          className="hidden items-center gap-8 lg:flex xl:gap-10"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[15px] font-semibold text-[#1b2236] transition hover:text-[#2563eb]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <V2CtaButton className="inline-flex items-center justify-center rounded-full bg-[#2563eb] font-semibold text-white shadow-[0_12px_24px_-10px_rgba(37,99,235,0.7)] transition hover:-translate-y-0.5 hover:brightness-110 active:translate-y-0
                                h-9 px-4 text-[13px]
                                sm:h-10 sm:px-5 sm:text-[14px]
                                lg:h-12 lg:px-6 lg:text-[15px]">
          Cadastre sua Agência
        </V2CtaButton>
      </div>
    </header>
  );
}
