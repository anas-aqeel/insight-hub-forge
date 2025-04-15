
import { Award, Clock, Sparkles, Layers } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card-custom"

export function WhatWeOfferSection() {
  return (
    <section id="what-we-offer" className="py-24 relative bg-gradient-to-br from-dark-gray/80 to-vibrant-pink/20 backdrop-blur-md">
      <div className="absolute inset-0 bg-[url('/lovable-uploads/d85f8c02-851f-4ec8-8793-3cfb10cb9d16.png')] bg-cover bg-center opacity-10"></div>
      <div className="absolute top-0 right-1/4 w-72 h-72 bg-bright-orange/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-vibrant-pink/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-slide-in">
          <div className="inline-flex items-center justify-center p-3 bg-gradient-to-br from-vibrant-pink/20 to-bright-orange/20 rounded-full mb-4">
            <Sparkles size={32} className="text-bright-orange" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">What We Offer</h2>
          <p className="text-xl text-light-gray">
            InsightHub delivers a unique combination of AI-powered tools and features designed specifically for modern students.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {offerItems.map((item, index) => (
            <Card key={index} className={`animate-slide-in-delay-${index % 2 + 1}`}>
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="inline-flex items-center justify-center p-3 bg-gradient-to-br from-vibrant-pink/20 to-bright-orange/20 rounded-lg">
                    <item.icon className="h-8 w-8 text-bright-orange" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                    <p className="text-light-gray">{item.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className={`text-center p-8 border border-white/10 rounded-xl backdrop-blur-sm bg-dark-gray/30 animate-slide-in-delay-${index + 1}`}
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
    icon: Award
  },
  {
    title: "Time-Saving Tools",
    description: "Streamline your study process with tools that help you focus on what matters most, eliminating wasted time and maximizing productivity.",
    icon: Clock
  },
  {
    title: "Cutting-Edge AI Technology",
    description: "Leverage the power of advanced artificial intelligence to enhance your learning, with features that understand context and provide intelligent assistance.",
    icon: Sparkles
  },
  {
    title: "All-in-One Platform",
    description: "Combine all your learning needs in one integrated system, eliminating the need to juggle multiple apps and services for different aspects of your education.",
    icon: Layers
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
