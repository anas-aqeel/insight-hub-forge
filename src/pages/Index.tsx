
import { AboutSection } from "@/components/AboutSection";
import { CTASection } from "@/components/CTASection";
import { ChallengesSection } from "@/components/ChallengesSection";
import { FAQSection } from "@/components/FAQSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { Navbar } from "@/components/Navbar";
import { PricingSection } from "@/components/PricingSection";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1">
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <ChallengesSection />
          <FeaturesSection />
          <PricingSection />
          <FAQSection />
          <CTASection />
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Index;
