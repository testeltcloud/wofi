import type { Metadata, Viewport } from "next";
import { site } from "@/lib/site";
import { ScrollReveal } from "@/components/interactive/scroll-reveal";
import "./globals.css";

const title = "Woofi — Conectividade internacional para sua agência de viagem";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: title,
    template: "%s | Woofi",
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "eSIM internacional",
    "conectividade para agências de viagem",
    "revender eSIM",
    "parceiro Woofi",
    "internet no exterior",
    "chip internacional",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: site.name,
    title,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  category: "business",
  icons: { icon: "/logobrowser.svg", shortcut: "/logobrowser.svg" },
};

export const viewport: Viewport = {
  themeColor: "#070a18",
  colorScheme: "light",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.legalName,
  alternateName: site.name,
  url: site.url,
  description: site.description,
  areaServed: "Worldwide",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    availableLanguage: ["Portuguese"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className="h-full antialiased" suppressHydrationWarning>
      <body className="min-h-full">
        {/* Ativa o estado inicial do scroll-reveal só quando há JS (evita
            FOUC e mantém o conteúdo visível sem JS). Roda antes do paint. */}
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('reveal-js')",
          }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-[var(--color-ink)] focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-white"
        >
          Pular para o conteúdo
        </a>
        {children}
        <ScrollReveal />
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
      </body>
    </html>
  );
}
