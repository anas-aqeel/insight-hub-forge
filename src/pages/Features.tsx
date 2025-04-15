
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { FeaturesSection } from "@/components/FeaturesSection";
import { CTASection } from "@/components/CTASection";
import { Brain, Code, BookOpen, BarChart3, Users, Lightbulb } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Features() {
  const detailedFeatures = [
    {
      icon: Brain,
      title: "AI Tutor",
      description: "Get personalized explanations, summaries, and answers to your questions. Our AI tutor adapts to your learning style and helps you master difficult concepts.",
      items: [
        "24/7 study assistance",
        "Personalized explanations",
        "Concept clarification",
        "Smart flashcard generation",
        "Practice question generation"
      ]
    },
    {
      icon: BookOpen,
      title: "Study Planner",
      description: "Stay organized with our AI-powered study planner that helps you manage your time effectively and prioritize your learning goals.",
      items: [
        "Smart scheduling algorithms",
        "Deadline management",
        "Spaced repetition reminders",
        "Progress tracking",
        "Study habit analytics"
      ]
    },
    {
      icon: Lightbulb,
      title: "Knowledge Feed",
      description: "Discover relevant content tailored to your interests and learning goals. Our algorithm curates articles, videos, and resources that enhance your understanding.",
      items: [
        "Personalized content recommendations",
        "Latest research updates",
        "Academic paper summaries",
        "Trending topics in your field",
        "Resource bookmarking"
      ]
    },
    {
      icon: BarChart3,
      title: "Learning Analytics",
      description: "Gain insights into your learning patterns and progress with detailed analytics that help you optimize your study habits.",
      items: [
        "Learning pace tracking",
        "Knowledge gap identification",
        "Retention analysis",
        "Performance predictions",
        "Study efficiency metrics"
      ]
    },
    {
      icon: Code,
      title: "Developer Tools",
      description: "Specialized features for computer science and STEM students, including code explanations, algorithm visualizations, and GitHub integration.",
      items: [
        "Code explanation",
        "Algorithm visualization",
        "GitHub integration",
        "Programming challenges",
        "Technical documentation helper"
      ]
    },
    {
      icon: Users,
      title: "Community",
      description: "Connect with peers, join study groups, and collaborate on projects. Learn together and expand your network.",
      items: [
        "Study groups",
        "Peer-to-peer learning",
        "Expert Q&A forums",
        "Collaborative projects",
        "Knowledge sharing"
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="py-20 relative">
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-vibrant-pink/10 rounded-full blur-3xl -z-10"></div>
          
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16 animate-slide-in">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Powerful Features for Modern Learning</h1>
              <p className="text-xl text-light-gray">
                Discover how InsightHub transforms your learning experience with AI-powered tools and intelligent features.
              </p>
            </div>
          </div>
        </section>
        
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 mb-20">
              {detailedFeatures.map((feature, index) => (
                <div key={index} className="animate-slide-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <Card className="h-full">
                    <CardContent className="p-8">
                      <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-lg bg-gradient-to-br from-vibrant-pink/20 to-bright-orange/20">
                        <feature.icon className="h-7 w-7 text-bright-orange" />
                      </div>
                      <h3 className="text-2xl font-semibold mb-4 text-white">{feature.title}</h3>
                      <p className="text-light-gray mb-6">{feature.description}</p>
                      <ul className="space-y-2">
                        {feature.items.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-bright-orange mt-1">•</span>
                            <span className="text-light-gray">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
