
import { Award, Clock, Sparkles, Layers, Check } from "lucide-react"
import { Button } from "@/components/ui/button-custom"

export function WhatWeOfferSection() {
  return (
    <section id="what-we-offer" className="py-24 relative bg-gradient-to-br from-[#0a0a0a] to-[#151515] border-y border-vibrant-pink/20">
      <div className="absolute top-0 right-1/4 w-72 h-72 bg-bright-orange/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-vibrant-pink/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-slide-in">
          <div className="inline-flex items-center justify-center p-3 bg-gradient-to-br from-vibrant-pink/20 to-bright-orange/20 rounded-full mb-4 border border-vibrant-pink/30">
            <Sparkles size={32} className="text-bright-orange" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">What We Offer</h2>
          <p className="text-xl text-light-gray">
            InsightHub delivers a unique combination of AI-powered tools and features designed specifically for modern students.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {offerItems.map((item, index) => (
            <div 
              key={index} 
              className={`p-8 border border-vibrant-pink/30 rounded-xl bg-dark-gray/30 backdrop-blur-md hover:border-vibrant-pink/50 transition-all duration-300 animate-slide-in-delay-${index % 2 + 1}`}
            >
              <div className="flex items-start gap-6">
                <div className="inline-flex items-center justify-center p-3 bg-gradient-to-br from-vibrant-pink/20 to-bright-orange/20 rounded-lg border border-vibrant-pink/30 shrink-0">
                  <item.icon className="h-8 w-8 text-bright-orange" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-light-gray mb-4">{item.description}</p>
                  
                  <ul className="space-y-2 mt-4">
                    {item.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-bright-orange shrink-0 mt-0.5" />
                        <span className="text-white">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button variant="outline" className="mt-6">
                    Learn more
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className={`text-center p-8 border border-vibrant-pink/30 rounded-xl backdrop-blur-sm bg-dark-gray/30 hover:border-vibrant-pink/50 transition-all duration-300 animate-slide-in-delay-${index + 1}`}
            >
              <div className="text-4xl font-bold text-bright-orange mb-2">{stat.value}</div>
              <div className="text-white font-medium mb-1">{stat.label}</div>
              <div className="text-sm text-light-gray">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const offerItems = [
  {
    title: "Personalized Learning Experience",
    description: "Our AI analyzes your learning style, strengths, and weaknesses to create a completely personalized learning journey that adapts as you progress.",
    icon: Award,
    features: [
      "Custom study plans tailored to your goals",
      "Adaptive content recommendations",
      "Learning style assessment",
      "Progress tracking with actionable insights",
      "Personalized study materials"
    ]
  },
  {
    title: "Time-Saving Tools",
    description: "Streamline your study process with tools that help you focus on what matters most, eliminating wasted time and maximizing productivity.",
    icon: Clock,
    features: [
      "Smart task prioritization",
      "Focus time optimization",
      "Quick resource discovery",
      "Automated scheduling assistant",
      "Deadline management"
    ]
  },
  {
    title: "Cutting-Edge AI Technology",
    description: "Leverage the power of advanced artificial intelligence to enhance your learning, with features that understand context and provide intelligent assistance.",
    icon: Sparkles,
    features: [
      "GPT-powered tutoring",
      "Neural network knowledge analysis",
      "AI feedback systems",
      "Voice-to-text note taking",
      "Smart content summarization"
    ]
  },
  {
    title: "All-in-One Platform",
    description: "Combine all your learning needs in one integrated system, eliminating the need to juggle multiple apps and services for different aspects of your education.",
    icon: Layers,
    features: [
      "Unified dashboard for all tools",
      "Synchronized learning data",
      "Seamless workflow integration",
      "Cross-platform accessibility",
      "Integrated resource management"
    ]
  }
]

const stats = [
  {
    value: "93%",
    label: "Improved Grades",
    description: "Students report better academic performance"
  },
  {
    value: "78%",
    label: "Time Saved",
    description: "Average reduction in study preparation time"
  },
  {
    value: "4.8/5",
    label: "User Satisfaction",
    description: "Average rating from our beta testers"
  }
]
