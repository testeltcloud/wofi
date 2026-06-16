"use client";

import { useEffect } from "react";

/**
 * Observa os elementos `.reveal` / `.reveal-left` / `.reveal-right` e adiciona
 * `.is-visible` quando entram na viewport — a transição (opacity/transform)
 * fica no CSS (globals.css). Componente único, montado uma vez no layout.
 *
 * Leve e PageSpeed-safe:
 * - roda depois da hidratação (conteúdo abaixo da dobra);
 * - cada elemento é "desobservado" ao revelar (sem custo contínuo);
 * - respeita prefers-reduced-motion e tem fallback se não houver IO.
 */
export function ScrollReveal() {
  useEffect(() => {
    const els = Array.from(
      document.querySelectorAll<HTMLElement>(
        ".reveal, .reveal-left, .reveal-right",
      ),
    );
    if (els.length === 0) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    // Sem suporte a IO ou com reduced-motion: mostra tudo de imediato.
    if (prefersReduced || typeof IntersectionObserver === "undefined") {
      for (const el of els) (el as HTMLElement).dataset.visible = "true";
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).dataset.visible = "true";
            io.unobserve(entry.target);
          }
        }
      },
      // revela um pouco antes de chegar ao centro, sem precisar rolar demais
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
    );

    for (const el of els) io.observe(el);
    return () => io.disconnect();
  }, []);

  return null;
}
