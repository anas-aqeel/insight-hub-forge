
import { PageLayout } from "@/components/PageLayout";
import { PageHeader } from "@/components/PageHeader";
import { FileText, Search, BookOpen, Code, Terminal, BookMarked } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card-custom";
import { Input } from "@/components/ui/input";

export default function Documentation() {
  return (
    <PageLayout>
      <PageHeader 
        icon={FileText}
        title="Documentation"
        description="Comprehensive guides and references to help you get the most out of InsightHub."
      />
      
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-center mb-12 animate-slide-in">
            <div className="relative w-full max-w-2xl">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-light-gray" />
              <Input 
                type="text" 
                placeholder="Search documentation..." 
                className="bg-white/5 border-white/10 text-white placeholder:text-white/50 pl-12 py-6"
              />
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {docCategories.map((category, index) => (
              <Card key={index} className="h-full animate-slide-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="inline-flex items-center justify-center p-3 rounded-full bg-gradient-to-br from-vibrant-pink/20 to-bright-orange/20 border border-vibrant-pink/30">
                      <category.icon className="h-6 w-6 text-bright-orange" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-white">{category.title}</h3>
                      <p className="text-light-gray mb-4">{category.description}</p>
                      <ul className="space-y-2">
                        {category.topics.map((topic, idx) => (
                          <li key={idx}>
                            <a href="#" className="text-bright-orange hover:underline">{topic}</a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

const docCategories = [
  {
    icon: BookOpen,
    title: "Getting Started",
    description: "Everything you need to know to start using InsightHub.",
    topics: [
      "Platform Overview",
      "Creating Your Account",
      "Setting Up Your Profile",
      "Quick Start Guide",
      "View All →"
    ]
  },
  {
    icon: BookMarked,
    title: "User Guides",
    description: "Detailed guides for using all features of InsightHub.",
    topics: [
      "AI Tutor Guide",
      "Study Planner",
      "Knowledge Feed",
      "Productivity Tools",
      "View All →"
    ]
  },
  {
    icon: Code,
    title: "Developer Tools",
    description: "Documentation for developers and STEM students.",
    topics: [
      "GitHub Integration",
      "Code Explainer",
      "Project Scaffolder",
      "STEM Formula Tool",
      "View All →"
    ]
  },
  {
    icon: Terminal,
    title: "API Reference",
    description: "Technical documentation for integrating with InsightHub.",
    topics: [
      "Authentication",
      "Endpoints",
      "Rate Limits",
      "Webhooks",
      "View All →"
    ]
  },
  {
    icon: FileText,
    title: "Best Practices",
    description: "Tips and recommendations for getting the most out of InsightHub.",
    topics: [
      "Study Optimization",
      "Content Organization",
      "Collaboration",
      "AI Interaction",
      "View All →"
    ]
  },
  {
    icon: BookOpen,
    title: "Tutorials",
    description: "Step-by-step tutorials for specific use cases.",
    topics: [
      "Creating Study Plans",
      "Building Knowledge Maps",
      "Setting Up Collaborations",
      "Analytics Dashboard",
      "View All →"
    ]
  }
];
