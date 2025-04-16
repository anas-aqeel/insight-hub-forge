
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { PricingSection } from "@/components/PricingSection";
import { CTASection } from "@/components/CTASection";
import { FAQSection } from "@/components/FAQSection";
import { CheckCircle, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button-custom";
import { PageLayout } from "@/components/PageLayout";

export default function Pricing() {
  return (
    <PageLayout>

      <section className="py-20 relative">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-vibrant-pink/10 rounded-full blur-3xl -z-10"></div>

        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-slide-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Simple, Transparent Pricing</h1>
            <p className="text-xl text-light-gray">
              Choose the plan that fits your learning needs. All plans include access to our core platform.
            </p>
          </div>
        </div>
      </section>

      <PricingSection />

      <section className="py-20 relative">
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-bright-orange/10 rounded-full blur-3xl -z-10"></div>

        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 animate-slide-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Compare Plans</h2>
              <p className="text-lg text-light-gray">
                Find the perfect plan for your learning journey
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse animate-slide-in-delay-1">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left p-4 text-white">Features</th>
                    <th className="p-4 text-white">Free</th>
                    <th className="p-4 text-white">Student+</th>
                    <th className="p-4 text-white">Pro Dev</th>
                    <th className="p-4 text-white">Scholar</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  <tr>
                    <td className="p-4 text-light-gray">AI Tutor</td>
                    <td className="p-4 text-center">10 queries/day</td>
                    <td className="p-4 text-center">Unlimited</td>
                    <td className="p-4 text-center">Unlimited</td>
                    <td className="p-4 text-center">Unlimited</td>
                  </tr>
                  <tr>
                    <td className="p-4 text-light-gray">Subjects</td>
                    <td className="p-4 text-center">1</td>
                    <td className="p-4 text-center">5</td>
                    <td className="p-4 text-center">10</td>
                    <td className="p-4 text-center">Unlimited</td>
                  </tr>
                  <tr>
                    <td className="p-4 text-light-gray">Knowledge Feed</td>
                    <td className="p-4 text-center">Basic</td>
                    <td className="p-4 text-center">Advanced</td>
                    <td className="p-4 text-center">Advanced</td>
                    <td className="p-4 text-center">Premium</td>
                  </tr>
                  <tr>
                    <td className="p-4 text-light-gray">Study Analytics</td>
                    <td className="p-4 text-center"><CheckCircle className="h-5 w-5 text-bright-orange/50 mx-auto" /></td>
                    <td className="p-4 text-center"><CheckCircle className="h-5 w-5 text-bright-orange mx-auto" /></td>
                    <td className="p-4 text-center"><CheckCircle className="h-5 w-5 text-bright-orange mx-auto" /></td>
                    <td className="p-4 text-center"><CheckCircle className="h-5 w-5 text-bright-orange mx-auto" /></td>
                  </tr>
                  <tr>
                    <td className="p-4 text-light-gray">Dev Tools</td>
                    <td className="p-4 text-center">-</td>
                    <td className="p-4 text-center">-</td>
                    <td className="p-4 text-center"><CheckCircle className="h-5 w-5 text-bright-orange mx-auto" /></td>
                    <td className="p-4 text-center"><CheckCircle className="h-5 w-5 text-bright-orange mx-auto" /></td>
                  </tr>
                  <tr>
                    <td className="p-4 text-light-gray">Research Mode</td>
                    <td className="p-4 text-center">-</td>
                    <td className="p-4 text-center">-</td>
                    <td className="p-4 text-center">-</td>
                    <td className="p-4 text-center"><CheckCircle className="h-5 w-5 text-bright-orange mx-auto" /></td>
                  </tr>
                  <tr>
                    <td className="p-4 text-light-gray">Support</td>
                    <td className="p-4 text-center">Community</td>
                    <td className="p-4 text-center">Email</td>
                    <td className="p-4 text-center">Priority</td>
                    <td className="p-4 text-center">Dedicated</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-8 text-center">
              <Button className="mt-4" variant="default">
                <HelpCircle className="mr-2 h-4 w-4" />
                Need help choosing?
              </Button>
            </div>
          </div>
        </div>
      </section>

      <FAQSection />
      <CTASection />
    </PageLayout>

  );
}
