
import { PageLayout } from "@/components/PageLayout";
import { PageHeader } from "@/components/PageHeader";
import { 
  HelpCircle, Search, MessageSquare, FileText, Mail, 
  Phone, Users, Settings, ArrowRight, Check, Clock,
  Shield, CreditCard, ThumbsUp, ChevronDown, ChevronUp
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card-custom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button-custom";
import { useState } from "react";

export default function HelpCenter() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

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
          
          <div className="mb-16 animate-slide-in-delay-1">
            <h2 className="text-2xl font-bold mb-6 text-center text-white">Popular Help Topics</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {popularTopics.map((topic, index) => (
                <div 
                  key={index} 
                  className="bg-gradient-to-br from-dark-gray/70 to-dark-gray/30 border border-vibrant-pink/30 rounded-lg p-4 hover:border-bright-orange transition-all duration-300"
                >
                  <div className="flex items-center gap-3">
                    <topic.icon size={20} className="text-bright-orange" />
                    <span className="text-white font-medium">{topic.title}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <h2 className="text-2xl font-bold mb-6 text-center text-white animate-slide-in-delay-2">How Can We Help You?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {supportCategories.map((category, index) => (
              <Card key={index} className="flex flex-col h-full animate-slide-in bg-gradient-to-br from-dark-gray/70 to-dark-gray/30 border-vibrant-pink/30 hover:border-bright-orange transition-all duration-300" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="mb-4">
                    <div className="inline-flex items-center justify-center p-3 rounded-full bg-gradient-to-br from-vibrant-pink/20 to-bright-orange/20 border border-vibrant-pink/30">
                      <category.icon className="h-6 w-6 text-bright-orange" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">{category.title}</h3>
                  <p className="text-light-gray mb-4">{category.description}</p>
                  <ul className="space-y-2 mb-4 flex-grow">
                    {category.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check size={16} className="text-bright-orange mt-1 shrink-0" />
                        <span className="text-light-gray text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full flex items-center justify-center mt-auto">
                    Explore <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-white animate-slide-in-delay-3">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div 
                  key={index} 
                  className={`animate-slide-in bg-gradient-to-br from-dark-gray/70 to-dark-gray/30 border border-vibrant-pink/30 rounded-lg overflow-hidden transition-all duration-300 ${expandedFaq === index ? 'border-bright-orange/50' : ''}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div 
                    className="p-4 flex justify-between items-center cursor-pointer"
                    onClick={() => toggleFaq(index)}
                  >
                    <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-vibrant-pink/30 to-bright-orange/30 flex items-center justify-center text-bright-orange">Q</div>
                      {faq.question}
                    </h3>
                    <div className="text-bright-orange">
                      {expandedFaq === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </div>
                  </div>
                  <div 
                    className={`overflow-hidden transition-all duration-300 ${expandedFaq === index ? 'max-h-96' : 'max-h-0'}`}
                  >
                    <div className="p-4 pt-0 pl-8 ml-8 border-t border-vibrant-pink/20">
                      <p className="text-light-gray">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <Button>View All FAQs</Button>
            </div>
          </div>
          
          <div className="mt-20 bg-gradient-to-br from-vibrant-pink/10 to-bright-orange/10 border border-vibrant-pink/20 rounded-xl p-8 animate-slide-in-delay-4">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">Still Need Help?</h3>
              <p className="text-light-gray max-w-2xl mx-auto">Our support team is available to assist you with any questions or issues you may have.</p>
            </div>
            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <div className="flex items-center gap-3 bg-dark-gray/50 rounded-lg px-5 py-4 border border-vibrant-pink/20">
                <Mail size={20} className="text-bright-orange" />
                <div>
                  <div className="text-white font-medium">Email Support</div>
                  <div className="text-sm text-light-gray">support@insighthub.com</div>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-dark-gray/50 rounded-lg px-5 py-4 border border-vibrant-pink/20">
                <Phone size={20} className="text-bright-orange" />
                <div>
                  <div className="text-white font-medium">Phone Support</div>
                  <div className="text-sm text-light-gray">+1 (800) 123-4567</div>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-dark-gray/50 rounded-lg px-5 py-4 border border-vibrant-pink/20">
                <MessageSquare size={20} className="text-bright-orange" />
                <div>
                  <div className="text-white font-medium">Live Chat</div>
                  <div className="text-sm text-light-gray">Available 24/7</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

const popularTopics = [
  { icon: Settings, title: "Account Settings" },
  { icon: CreditCard, title: "Billing & Subscriptions" },
  { icon: Users, title: "Group Study" },
  { icon: Shield, title: "Privacy & Security" },
  { icon: ThumbsUp, title: "Getting Started" },
  { icon: MessageSquare, title: "AI Tutor Help" },
  { icon: Clock, title: "Study Timer" },
  { icon: FileText, title: "Content Creation" }
];

const supportCategories = [
  {
    icon: MessageSquare,
    title: "Live Chat Support",
    description: "Chat with our support team for immediate assistance with your questions.",
    features: [
      "24/7 availability",
      "Quick response times",
      "Screen sharing capability",
      "Chat transcript available"
    ]
  },
  {
    icon: FileText,
    title: "Knowledge Base",
    description: "Browse our extensive collection of articles, guides, and tutorials.",
    features: [
      "Searchable articles",
      "Step-by-step guides",
      "Video tutorials",
      "Regularly updated content"
    ]
  },
  {
    icon: Mail,
    title: "Email Support",
    description: "Contact our support team via email for more complex issues.",
    features: [
      "Detailed responses",
      "File attachment support",
      "Follow-up communications",
      "Case tracking system"
    ]
  },
  {
    icon: Phone,
    title: "Phone Support",
    description: "Speak directly with a support representative for personalized help.",
    features: [
      "Available 9AM-6PM EST",
      "Priority support for premium users",
      "Expert technical assistance",
      "Call-back option available"
    ]
  },
  {
    icon: FileText,
    title: "Tutorials",
    description: "Step-by-step tutorials to help you get the most out of InsightHub.",
    features: [
      "Video demonstrations",
      "Written guides with screenshots",
      "Interactive walkthroughs",
      "Beginner to advanced topics"
    ]
  },
  {
    icon: Users,
    title: "Community Forums",
    description: "Connect with other users to find solutions and share experiences.",
    features: [
      "User-to-user support",
      "Share tips and tricks",
      "Feature request discussions",
      "Moderated by InsightHub team"
    ]
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
