
import { AboutSection } from "@/components/AboutSection";
import { CTASection } from "@/components/CTASection";
import { ChallengesSection } from "@/components/ChallengesSection";
import { FAQSection } from "@/components/FAQSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { Navbar } from "@/components/Navbar";
import { PricingSection } from "@/components/PricingSection";
import { WhatWeOfferSection } from "@/components/WhatWeOfferSection";
import { PageLayout } from "@/components/PageLayout";

const Index = () => {
  return (
    <PageLayout noPadding={true}>
      <HeroSection />
      <AboutSection />
      <ChallengesSection />
      <FeaturesSection />
      <WhatWeOfferSection />
      <PricingSection />
      <FAQSection />
      <CTASection />
    </PageLayout>
  );
};

export default Index;
