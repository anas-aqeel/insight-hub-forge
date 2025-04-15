
import { ChevronDown } from "lucide-react"
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion-custom"

const faqs = [
  {
    question: "What is InsightHub?",
    answer: "InsightHub is an AI-powered platform designed to help students learn more efficiently with personalized tools, content discovery, and productivity features. Our platform combines cutting-edge AI technology with proven learning methodologies to create a comprehensive learning ecosystem."
  },
  {
    question: "Who can use InsightHub?",
    answer: "InsightHub is perfect for university/college students, high school students, self-learners, and STEM professionals. Anyone looking to enhance their learning experience with AI-powered tools can benefit from our platform."
  },
  {
    question: "Is there a free trial?",
    answer: "Yes, we offer a free plan with limited features for new users to explore. You can upgrade to a paid plan anytime to access more advanced features and remove usage limitations."
  },
  {
    question: "How does the AI tutor work?",
    answer: "The AI tutor provides personalized study plans, generates summaries, flashcards, and helps with answering questions based on your current study material. It learns from your interactions to provide increasingly relevant assistance tailored to your learning style."
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer: "Yes, you can cancel your subscription at any time. Your access will continue until the end of your current billing period, and you won't be charged again."
  },
  {
    question: "Is my data secure?",
    answer: "Yes, we take data security very seriously. We use industry-standard encryption and security practices to protect your personal information and learning data. We never sell your data to third parties."
  }
]

export function FAQSection() {
  return (
    <section id="faq" className="py-20 relative">
      <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-vibrant-pink/10 rounded-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-slide-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Frequently Asked Questions</h2>
          <p className="text-lg text-light-gray">
            Got questions? We've got answers. If you don't see what you're looking for, reach out to our support team.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto animate-slide-in-delay-1">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-white/10 rounded-lg overflow-hidden bg-black/20 backdrop-blur-sm"
              >
                <AccordionTrigger className="px-6 py-4 text-white hover:text-bright-orange transition-colors text-left">
                  <div className="flex justify-between items-center w-full">
                    <span>{faq.question}</span>
                    <ChevronDown className="h-5 w-5 shrink-0 transition-transform duration-200" />
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-light-gray">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
