import { ContactSection } from "@/src/components/ContactSection";
import { DemoSection } from "@/src/components/DemoSection";
import { FAQSection } from "@/src/components/FAQSection";
import { Footer } from "@/src/components/Footer";
import { HeroSection } from "@/src/components/HeroSection";
import { Navbar } from "@/src/components/Navbar";
import { PainPointsSection } from "@/src/components/PainPointsSection";
import { PreviewProtectionSection } from "@/src/components/PreviewProtectionSection";
import { PricingSection } from "@/src/components/PricingSection";
import { ProcessSection } from "@/src/components/ProcessSection";
import { SolutionSection } from "@/src/components/SolutionSection";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <PainPointsSection />
      <SolutionSection />
      <DemoSection />
      <PricingSection />
      <ProcessSection />
      <PreviewProtectionSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
