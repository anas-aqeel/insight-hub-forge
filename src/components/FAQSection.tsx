
import { HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion-custom";

export function FAQSection() {
  return (
    <section id="faq" className="py-24 bg-gradient-to-br from-[#0a0a0a] to-[#151515] border-t border-vibrant-pink/20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-slide-in">
          <div className="inline-flex items-center justify-center p-3 bg-gradient-to-br from-vibrant-pink/20 to-bright-orange/20 rounded-full mb-4 border border-vibrant-pink/30">
            <HelpCircle size={32} className="text-bright-orange" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Frequently Asked Questions</h2>
          <p className="text-xl text-light-gray">
            Find answers to common questions about InsightHub and how it can transform your learning experience.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`} 
                className="border border-vibrant-pink/30 rounded-lg backdrop-blur-sm bg-dark-gray/30 px-6 overflow-hidden animate-slide-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <AccordionTrigger className="text-white hover:text-bright-orange py-4">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-light-gray pb-4">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

const faqItems = [
  {
    question: "What is InsightHub?",
    answer: "InsightHub is an AI-powered learning platform designed to help students maximize their learning potential through personalized study plans, adaptive recommendations, and cutting-edge technology. Our platform combines smart learning tools with analytics to provide an optimal learning experience."
  },
  {
    question: "How does the AI tutor work?",
    answer: "Our AI tutor uses advanced natural language processing to understand your questions and provide personalized explanations. It adapts to your learning style and knowledge gaps, offering clear, concise answers and suggesting additional resources to deepen your understanding."
  },
  {
    question: "Is InsightHub suitable for all subjects?",
    answer: "Yes! InsightHub supports learning across various disciplines including STEM (Science, Technology, Engineering, Mathematics), Humanities, Business, Languages, and more. Our AI system is trained on diverse academic content to provide assistance regardless of your field of study."
  },
  {
    question: "How much does InsightHub cost?",
    answer: "InsightHub offers flexible pricing plans designed to accommodate different needs and budgets. We have student plans, educator plans, and institutional licenses. Visit our Pricing page for detailed information on our current rates and special offers."
  },
  {
    question: "Can I access InsightHub on mobile devices?",
    answer: "Absolutely! InsightHub is fully responsive and accessible across all devices including smartphones and tablets. We also offer dedicated mobile apps for iOS and Android that provide an optimized mobile experience with offline capabilities."
  },
  {
    question: "How is my data protected on InsightHub?",
    answer: "We take data privacy seriously. InsightHub employs industry-standard encryption protocols to secure your information. We never share your personal data with third parties without your consent, and all study data is securely stored. For complete details, please review our Privacy Policy."
  }
];
