import type { ComponentPropsWithoutRef, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

const sizes: Record<Size, string> = {
  md: "h-11 px-5 text-sm",
  lg: "h-13 px-7 text-base",
};

const variants: Record<Variant, string> = {
  primary:
    "bg-aurora text-white shadow-[var(--shadow-lift)] hover:brightness-105 active:brightness-95",
  secondary:
    "bg-[var(--color-surface)] text-[var(--color-ink)] ring-1 ring-[var(--color-line)] hover:ring-[var(--color-brand)] shadow-[var(--shadow-soft)]",
  ghost:
    "bg-white/10 text-white ring-1 ring-white/25 hover:bg-white/20 backdrop-blur-sm",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-tight transition duration-200 will-change-transform hover:-translate-y-0.5 focus-visible:outline-2 disabled:pointer-events-none disabled:opacity-60";

function classes(variant: Variant, size: Size, className?: string) {
  return [base, sizes[size], variants[variant], className]
    .filter(Boolean)
    .join(" ");
}

type CommonProps = {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
};

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...rest
}: CommonProps & ComponentPropsWithoutRef<"button">) {
  return (
    <button className={classes(variant, size, className)} {...rest}>
      {children}
    </button>
  );
}

export function ButtonLink({
  variant = "primary",
  size = "md",
  className,
  children,
  ...rest
}: CommonProps & ComponentPropsWithoutRef<"a">) {
  return (
    <a className={classes(variant, size, className)} {...rest}>
      {children}
    </a>
  );
}
