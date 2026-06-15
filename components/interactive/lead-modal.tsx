"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ComponentProps,
  type ReactNode,
} from "react";
import { Button, ButtonLink } from "@/components/ui/Button";
import { CloseIcon } from "@/components/ui/Icons";
import { RegistrationForm } from "./registration-form";

type Ctx = { open: () => void };
const LeadModalContext = createContext<Ctx | null>(null);

export function useLeadModal(): Ctx {
  const ctx = useContext(LeadModalContext);
  if (!ctx) throw new Error("useLeadModal must be used within LeadModalProvider");
  return ctx;
}

/**
 * Wraps the page. Uses the native <dialog> element via showModal() so we get
 * focus trapping, ESC-to-close, inert background and accessibility for free —
 * no focus-trap library, minimal JS. Server-rendered sections are passed as
 * children and stay RSC.
 */
export function LeadModalProvider({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);

  const open = useCallback(() => {
    setMounted(true);
    // Wait for the dialog to mount before showing it.
    requestAnimationFrame(() => {
      const el = dialogRef.current;
      if (el && !el.open) el.showModal();
    });
  }, []);

  const close = useCallback(() => {
    dialogRef.current?.close();
  }, []);

  // Lock background scroll while open; restore on close/unmount.
  useEffect(() => {
    if (!mounted) return;
    const el = dialogRef.current;
    if (!el) return;
    const onClose = () => {
      document.documentElement.style.overflow = "";
    };
    el.addEventListener("close", onClose);
    document.documentElement.style.overflow = "hidden";
    return () => {
      el.removeEventListener("close", onClose);
      document.documentElement.style.overflow = "";
    };
  }, [mounted]);

  return (
    <LeadModalContext.Provider value={{ open }}>
      {children}
      {mounted && (
        <dialog
          ref={dialogRef}
          aria-labelledby="lead-modal-title"
          className="m-auto w-[calc(100%-2rem)] max-w-md rounded-3xl border border-[var(--color-line)] bg-white p-6 shadow-2xl backdrop:bg-[rgba(7,10,24,0.55)] backdrop:backdrop-blur-sm sm:p-8"
          // Close when the backdrop (the dialog element itself) is clicked.
          onClick={(e) => {
            if (e.target === dialogRef.current) close();
          }}
        >
          <div className="mb-5 flex items-start justify-between gap-4">
            <div>
              <h2
                id="lead-modal-title"
                className="font-[family-name:var(--font-display)] text-xl font-bold tracking-tight text-[var(--color-ink)]"
              >
                Cadastre sua agência
              </h2>
              <p className="mt-1 text-sm text-[var(--color-muted)]">
                Gratuito e sem compromisso. Levamos menos de 1 minuto.
              </p>
            </div>
            <button
              type="button"
              onClick={close}
              aria-label="Fechar"
              className="-mr-1 -mt-1 grid h-9 w-9 shrink-0 place-items-center rounded-full text-[var(--color-muted)] transition hover:bg-[var(--color-canvas)] hover:text-[var(--color-ink)]"
            >
              <CloseIcon className="h-5 w-5" />
            </button>
          </div>
          <RegistrationForm />
        </dialog>
      )}
    </LeadModalContext.Provider>
  );
}

/** A primary/secondary button that opens the lead modal. */
export function OpenModalButton({
  children,
  onClick,
  ...rest
}: ComponentProps<typeof Button>) {
  const { open } = useLeadModal();
  return (
    <Button
      onClick={(e) => {
        onClick?.(e);
        open();
      }}
      {...rest}
    >
      {children}
    </Button>
  );
}

/** Re-export so sections can render WhatsApp CTAs without another import. */
export { ButtonLink };
