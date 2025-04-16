
import { PageLayout } from "@/components/PageLayout";
import { PageHeader } from "@/components/PageHeader";
import { FileText, Search, BookOpen, Code, Terminal, BookMarked, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card-custom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button-custom";

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
              <div key={index} className="animate-slide-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <Card className="h-full bg-gradient-to-br from-dark-gray/70 to-dark-gray/30 border-vibrant-pink/30 hover:border-bright-orange transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="inline-flex items-center justify-center p-3 rounded-full bg-gradient-to-br from-vibrant-pink/20 to-bright-orange/20 border border-vibrant-pink/30">
                        <category.icon className="h-6 w-6 text-bright-orange" />
                      </div>
                      <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                    </div>
                    
                    <p className="text-light-gray mb-4 border-b border-vibrant-pink/10 pb-4">{category.description}</p>
                    
                    <ul className="space-y-3 mt-6">
                      {category.topics.map((topic, idx) => (
                        <li key={idx} className="flex items-center gap-2 group">
                          <div className="w-1 h-1 rounded-full bg-bright-orange group-hover:w-2 transition-all duration-200"></div>
                          <a href="#" className="text-bright-orange hover:text-white transition-colors duration-200 flex items-center">
                            {topic} 
                            {topic.includes("View All") && <ArrowRight className="ml-1 h-3 w-3" />}
                          </a>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="mt-6 flex justify-between items-center">
                      <div className="text-xs text-light-gray">Updated 2 days ago</div>
                      <Button variant="outline" size="sm" className="text-sm">
                        Browse
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
          
          <div className="mt-20">
            <div className="bg-gradient-to-br from-vibrant-pink/10 to-bright-orange/10 border border-vibrant-pink/20 rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-4 text-white">Need more help?</h3>
              <p className="text-light-gray mb-6 max-w-2xl mx-auto">
                Our documentation may not cover everything. If you're still having issues or have specific questions, our support team is here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button>Contact Support</Button>
                <Button variant="outline">Join Community Forum</Button>
              </div>
            </div>
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
    description: "Everything you need to know to start using InsightHub effectively. Learn the basics and set up your account for success.",
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
    description: "Comprehensive guides for using all features of InsightHub. Master every tool and capability in our platform.",
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
    description: "Documentation for developers and STEM students. Learn how to use our coding and technical tools effectively.",
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
    description: "Technical documentation for integrating with InsightHub. Explore our API endpoints and implementation guides.",
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
    description: "Tips and recommendations for getting the most out of InsightHub. Optimize your learning experience with expert advice.",
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
    description: "Step-by-step tutorials for specific use cases. Follow along with detailed instructions for various features.",
    topics: [
      "Creating Study Plans",
      "Building Knowledge Maps",
      "Setting Up Collaborations",
      "Analytics Dashboard",
      "View All →"
    ]
  }
];
