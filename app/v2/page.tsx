import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import { LeadModalProvider } from "@/components/interactive/lead-modal";
import { Header } from "@/components/sections/header";
import { Hero } from "@/components/sections/hero";
import { V2MapSection } from "@/components/v2/map-section-wrapper";
import { V2SectionLight } from "@/components/v2/section-light";
import { V2VideoSection } from "@/components/v2/video-section";

// Fontes escopadas a esta página (a home camping usa Sora + Inter).
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["600", "700", "800"],
  display: "optional",
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  title: "Woofi — versão alternativa",
  alternates: { canonical: "/v2" },
};

export default function V2Page() {
  return (
    <div
      className={`${inter.variable} ${sora.variable} font-[family-name:var(--font-sans)]`}
    >
      <LeadModalProvider>
        <Header />
        <main id="main">
          <Hero />
          <V2MapSection />
          <V2SectionLight />
          <V2VideoSection />
        </main>
      </LeadModalProvider>
    </div>
  );
}
