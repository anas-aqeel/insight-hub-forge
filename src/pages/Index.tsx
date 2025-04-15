
import { AboutSection } from "@/components/AboutSection";
import { CTASection } from "@/components/CTASection";
import { ChallengesSection } from "@/components/ChallengesSection";
import { FAQSection } from "@/components/FAQSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { Navbar } from "@/components/Navbar";
import { PricingSection } from "@/components/PricingSection";
import { WaitlistSection } from "@/components/WaitlistSection";
import { WhatWeOfferSection } from "@/components/WhatWeOfferSection";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1">
        <Navbar />
        <main className="pt-16">
          <HeroSection />
          <AboutSection />
          <ChallengesSection />
          <FeaturesSection />
          <WhatWeOfferSection />
          <PricingSection />
          <FAQSection />
          <WaitlistSection />
          <CTASection />
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Index;
