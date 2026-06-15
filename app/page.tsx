import { Poppins } from "next/font/google";
import { LeadModalProvider } from "@/components/interactive/lead-modal";
import { AnnouncementBar } from "@/components/v2/announcement-bar";
import { V2Header } from "@/components/v2/header";
import { V2Hero } from "@/components/v2/hero";
import { V2ValueProp } from "@/components/v2/value-prop";
import { V2HowItWorks } from "@/components/v2/how-it-works";
import { V2Benefits } from "@/components/v2/benefits";
import { V2Quote } from "@/components/v2/quote";
import { V2Faq } from "@/components/v2/faq";
import { V2FinalCta } from "@/components/v2/final-cta";
import { V2Footer } from "@/components/v2/footer";

// Poppins (rounded) — aproxima o logotipo/headline do design.
// display:"optional" + fallback métrico: o texto pinta no fallback de
// imediato e NÃO re-renderiza (não atrasa o LCP). A Poppins entra via
// cache nas próximas visitas.
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  // optional + fallback métrico: o título pinta no fallback de imediato e
  // não re-renderiza (não atrasa o LCP); a Poppins entra via cache depois.
  display: "optional",
  adjustFontFallback: true,
});

// Metadata principal (title/description/canonical "/") vem do app/layout.tsx.
export default function Page() {
  return (
    <div
      className={`${poppins.variable} min-h-screen bg-white font-[family-name:var(--font-poppins)] text-[#0b1020]`}
    >
      <LeadModalProvider>
        <AnnouncementBar />
        <V2Header />
        <main id="main">
          <V2Hero />
          <V2ValueProp />
          <V2HowItWorks />
          <V2Benefits />
          <V2Quote />
          <V2Faq />
          <V2FinalCta />
        </main>
        <V2Footer />
      </LeadModalProvider>
    </div>
  );
}
