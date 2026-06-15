"use client";

import { useEffect, useState } from "react";
import { nav } from "@/lib/content";
import { MenuIcon, CloseIcon } from "@/components/ui/Icons";
import { OpenModalButton } from "./lead-modal";

/** Mobile navigation drawer. Hidden on lg+ where the inline nav is shown. */
export function MobileNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  // Close on Escape.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-label="Abrir menu"
        aria-expanded={open}
        onClick={() => setOpen(true)}
        className="grid h-11 w-11 place-items-center rounded-full border border-white/25 bg-white/10 text-white backdrop-blur-sm transition hover:bg-white/20"
      >
        <MenuIcon className="h-6 w-6" />
      </button>

      {open && (
        <div className="fixed inset-0 z-50">
          <button
            aria-label="Fechar menu"
            tabIndex={-1}
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-[rgba(7,10,24,0.5)] backdrop-blur-sm"
          />
          <nav className="absolute right-0 top-0 flex h-full w-[82%] max-w-xs flex-col gap-2 bg-white p-6 shadow-2xl">
            <div className="mb-4 flex justify-end">
              <button
                type="button"
                aria-label="Fechar menu"
                onClick={() => setOpen(false)}
                className="grid h-11 w-11 place-items-center rounded-full text-[var(--color-ink)] transition hover:bg-[var(--color-canvas)]"
              >
                <CloseIcon className="h-6 w-6" />
              </button>
            </div>
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-lg font-medium text-[var(--color-ink)] transition hover:bg-[var(--color-canvas)]"
              >
                {item.label}
              </a>
            ))}
            <OpenModalButton
              size="lg"
              className="mt-4"
              onClick={() => setOpen(false)}
            >
              Cadastre sua agência
            </OpenModalButton>
          </nav>
        </div>
      )}
    </div>
  );
}
