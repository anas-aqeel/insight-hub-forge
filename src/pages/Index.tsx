
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
import { WaitlistCTA } from "@/components/WaitlistCTA";
import { CountdownTimer } from "@/components/CountdownTimer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1">
        <Navbar />
        <main className="pt-16">
          <section className="container mx-auto px-4 py-8 flex flex-col items-center">
            <h2 className="text-2xl font-bold text-white mb-2">Early Access Closing In</h2>
            <p className="text-light-gray mb-6">Secure your spot before the waitlist closes</p>
            <CountdownTimer />
            <div className="mt-8 w-full max-w-lg">
              <WaitlistCTA />
            </div>
          </section>
          <HeroSection />
          <AboutSection />
          <ChallengesSection />
          <FeaturesSection />
          <WhatWeOfferSection />
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
