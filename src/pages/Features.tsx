
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { FeaturesSection } from "@/components/FeaturesSection";
import { CTASection } from "@/components/CTASection";
import { PageLayout } from "@/components/PageLayout";
import { Brain, Code, BookOpen, BarChart3, Users, Lightbulb, Check, Star, TrendingUp, Rocket, Zap, ThumbsUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card-custom";
import { Button } from "@/components/ui/button-custom";

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
    <PageLayout>
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
      
      <section className="py-12 relative overflow-hidden">
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-bright-orange/10 rounded-full blur-3xl -z-10"></div>
        
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            {detailedFeatures.map((feature, index) => (
              <div key={index} className="animate-slide-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <Card className="h-full bg-gradient-to-br from-dark-gray/70 to-dark-gray/30 border-vibrant-pink/30 hover:border-bright-orange/40 transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-lg bg-gradient-to-br from-vibrant-pink/20 to-bright-orange/20 border border-vibrant-pink/30">
                      <feature.icon className="h-7 w-7 text-bright-orange" />
                    </div>
                    <h3 className="text-2xl font-semibold mb-4 text-white">{feature.title}</h3>
                    <p className="text-light-gray mb-6">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check className="text-bright-orange mt-1 shrink-0" size={16} />
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

      <section className="py-16 bg-gradient-to-br from-dark-gray/90 to-dark-gray/70 border-y border-vibrant-pink/20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-white">Why Our Features Matter</h2>
            <p className="text-light-gray">
              InsightHub's features are designed to address the real challenges students face, providing effective solutions that enhance learning outcomes.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-dark-gray/70 to-dark-gray/30 border-vibrant-pink/30 animate-slide-in">
              <CardContent className="p-6">
                <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-vibrant-pink/20 to-bright-orange/20 border border-vibrant-pink/30">
                  <TrendingUp className="h-6 w-6 text-bright-orange" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">Better Learning Outcomes</h3>
                <p className="text-light-gray">
                  Students using InsightHub show a 43% improvement in understanding complex concepts and 57% better retention of information.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-dark-gray/70 to-dark-gray/30 border-vibrant-pink/30 animate-slide-in-delay-1">
              <CardContent className="p-6">
                <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-vibrant-pink/20 to-bright-orange/20 border border-vibrant-pink/30">
                  <Star className="h-6 w-6 text-bright-orange" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">Personalized Experience</h3>
                <p className="text-light-gray">
                  92% of students report that InsightHub's personalized approach helps them engage more deeply with their subjects of interest.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-dark-gray/70 to-dark-gray/30 border-vibrant-pink/30 animate-slide-in-delay-2">
              <CardContent className="p-6">
                <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-vibrant-pink/20 to-bright-orange/20 border border-vibrant-pink/30">
                  <Rocket className="h-6 w-6 text-bright-orange" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">Time Efficiency</h3>
                <p className="text-light-gray">
                  Students save an average of 12 hours per week on research and study preparation when using our comprehensive suite of tools.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      <section className="py-16 relative">
        <div className="absolute top-0 right-1/4 w-72 h-72 bg-vibrant-pink/10 rounded-full blur-3xl -z-10"></div>
        
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-white">What Our Users Are Saying</h2>
            <p className="text-light-gray">
              Hear from students who have transformed their learning experience with InsightHub.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-gradient-to-br from-dark-gray/70 to-dark-gray/30 border-vibrant-pink/30 animate-slide-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className="text-bright-orange mr-1" fill="#F59E0B" />
                    ))}
                  </div>
                  <p className="text-light-gray mb-4 italic">"{testimonial.quote}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-vibrant-pink/30 to-bright-orange/30 flex items-center justify-center text-white font-medium">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-white font-medium">{testimonial.name}</p>
                      <p className="text-sm text-light-gray">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button>Read More Success Stories</Button>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gradient-to-br from-vibrant-pink/10 to-bright-orange/10 border-y border-vibrant-pink/20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-white">Ready to Transform Your Learning Experience?</h2>
            <p className="text-xl text-light-gray mb-8">
              Join thousands of students who are already benefiting from InsightHub's powerful features.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">Get Started Today</Button>
              <Button variant="outline" size="lg">Book a Demo</Button>
            </div>
          </div>
        </div>
      </section>
      
      <CTASection />
    </PageLayout>
  );
}

const testimonials = [
  {
    quote: "InsightHub's AI Tutor helped me understand complex calculus concepts that I was struggling with for months. It's like having a personal tutor available 24/7.",
    name: "Alex Johnson",
    role: "Computer Science Student"
  },
  {
    quote: "The Study Planner feature has completely transformed how I prepare for exams. I'm more organized and less stressed, which has improved my grades significantly.",
    name: "Sophia Chen",
    role: "Medical Student"
  },
  {
    quote: "As a research student, the Knowledge Feed keeps me updated with the latest papers in my field. It's saved me countless hours of searching through journals.",
    name: "Marcus Williams",
    role: "PhD Candidate"
  }
];
