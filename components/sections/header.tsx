import { nav } from "@/lib/content";
import { Logo } from "@/components/ui/Icons";
import { Container } from "@/components/ui/Section";
import { OpenModalButton } from "@/components/interactive/lead-modal";
import { MobileNav } from "@/components/interactive/mobile-nav";

/**
 * Floating, transparent "glass" header that sits over the hero photo.
 * White text + outline pill CTA. It is absolutely positioned so the hero
 * image fills the very top of the viewport behind it.
 */
export function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-40 text-white">
      <Container>
        <div className="flex h-20 items-center justify-between gap-4">
          <a href="#top" aria-label="Woofi — início" className="shrink-0">
            <Logo />
          </a>

          <nav
            aria-label="Principal"
            className="hidden items-center gap-1 lg:flex"
          >
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-2 text-sm font-medium tracking-wide text-white/85 transition hover:bg-white/10 hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <OpenModalButton variant="ghost">
              Cadastre sua agência
            </OpenModalButton>
          </div>

          <MobileNav />
        </div>
      </Container>
    </header>
  );
}
