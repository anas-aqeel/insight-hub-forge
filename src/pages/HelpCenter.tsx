
import { PageLayout } from "@/components/PageLayout";
import { PageHeader } from "@/components/PageHeader";
import { HelpCircle, Search, MessageSquare, FileText, Mail, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card-custom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button-custom";

export default function HelpCenter() {
  return (
    <PageLayout>
      <PageHeader 
        icon={HelpCircle}
        title="Help Center"
        description="Find answers to your questions and get the support you need."
      />
      
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-center mb-12 animate-slide-in">
            <div className="relative w-full max-w-2xl">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-light-gray" />
              <Input 
                type="text" 
                placeholder="Search for help..." 
                className="bg-white/5 border-white/10 text-white placeholder:text-white/50 pl-12 py-6"
              />
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {supportCategories.map((category, index) => (
              <Card key={index} className="h-full animate-slide-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center p-4">
                    <div className="inline-flex items-center justify-center p-3 rounded-full bg-gradient-to-br from-vibrant-pink/20 to-bright-orange/20 border border-vibrant-pink/30 mb-4">
                      <category.icon className="h-6 w-6 text-bright-orange" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-white">{category.title}</h3>
                    <p className="text-light-gray mb-4">{category.description}</p>
                    <Button variant="outline" className="w-full">Explore</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-white">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <Card key={index} className="animate-slide-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-white">{faq.question}</h3>
                    <p className="text-light-gray">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <Button>View All FAQs</Button>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

const supportCategories = [
  {
    icon: MessageSquare,
    title: "Live Chat Support",
    description: "Chat with our support team for immediate assistance with your questions."
  },
  {
    icon: FileText,
    title: "Knowledge Base",
    description: "Browse our extensive collection of articles, guides, and tutorials."
  },
  {
    icon: Mail,
    title: "Email Support",
    description: "Contact our support team via email for more complex issues."
  },
  {
    icon: Phone,
    title: "Phone Support",
    description: "Speak directly with a support representative for personalized help."
  },
  {
    icon: FileText,
    title: "Tutorials",
    description: "Step-by-step tutorials to help you get the most out of InsightHub."
  },
  {
    icon: HelpCircle,
    title: "Community Forums",
    description: "Connect with other users to find solutions and share experiences."
  }
];

const faqs = [
  {
    question: "How do I get started with InsightHub?",
    answer: "To get started, create an account, complete your profile, and set your learning goals. Our AI will then personalize your experience based on your preferences and objectives."
  },
  {
    question: "What makes InsightHub different from other learning platforms?",
    answer: "InsightHub combines AI-powered personalization, real-time content discovery, productivity tools, and community features in one integrated platform, adapting to your unique learning style."
  },
  {
    question: "Can I use InsightHub for any subject?",
    answer: "Yes! InsightHub supports learning across all subjects, from STEM fields to humanities, languages, and more. Our AI adapts to provide relevant content and support for any discipline."
  },
  {
    question: "How does the subscription billing work?",
    answer: "Subscriptions are billed monthly or annually, depending on your chosen plan. You can upgrade, downgrade, or cancel your subscription at any time through your account settings."
  },
  {
    question: "Is my data secure on InsightHub?",
    answer: "Absolutely. We implement industry-standard encryption and security practices to protect your data. We never share your personal information with third parties without your consent."
  }
];
