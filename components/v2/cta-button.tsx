"use client";

import type { ReactNode } from "react";
import { useLeadModal } from "@/components/interactive/lead-modal";

/**
 * Botão da v2 que abre o modal de cadastro. Estilo 100% controlado via
 * className (sem herdar o Button da home) para casar com o print.
 */
export function V2CtaButton({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const { open } = useLeadModal();
  return (
    <button type="button" onClick={open} className={className}>
      {children}
    </button>
  );
}
