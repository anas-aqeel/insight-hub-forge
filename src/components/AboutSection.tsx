
import { Brain, Target, Zap, Rocket, Star, Users, Globe } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card-custom"

export function AboutSection() {
  return (
    <section id="about" className="py-24 relative">
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-vibrant-pink/10 rounded-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-slide-in">
          <div className="inline-flex items-center justify-center p-3 bg-gradient-to-br from-vibrant-pink/20 to-bright-orange/20 rounded-full mb-4">
            <Brain size={32} className="text-bright-orange" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">About InsightHub</h2>
          <p className="text-xl text-light-gray">
            InsightHub is a revolutionary platform designed to provide students with an AI-powered learning ecosystem. 
            We combine advanced artificial intelligence with intuitive design to transform how students learn, 
            discover content, and stay productive in today's fast-paced academic world.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {aboutCards.map((card, index) => (
            <div 
              key={index}
              className={`rounded-xl bg-gradient-to-br from-dark-gray/70 to-dark-gray/30 border border-vibrant-pink/30 p-1 hover:border-bright-orange transition-all duration-300 transform hover:-translate-y-2 animate-slide-in-delay-${index + 1} backdrop-blur-md overflow-hidden`}
            >
              <Card className="h-full border-0 bg-transparent overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-vibrant-pink/50 to-bright-orange/50"></div>
                <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-gradient-to-br from-vibrant-pink/10 to-bright-orange/10 blur-xl"></div>
                
                <CardContent className="p-6 flex flex-col h-full relative z-10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-vibrant-pink/30 to-bright-orange/30 flex items-center justify-center border border-bright-orange/40">
                      <card.icon size={28} className="text-bright-orange" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">{card.title}</h3>
                  </div>
                  
                  <div className="space-y-4 flex-grow">
                    <p className="text-light-gray">{card.description}</p>
                    
                    {card.points && (
                      <ul className="space-y-2 mt-4">
                        {card.points.map((point, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <Star size={16} className="text-bright-orange mt-1 shrink-0" />
                            <span className="text-light-gray">{point}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const aboutCards = [
  {
    title: "Our Mission",
    icon: Target,
    description: "To empower students worldwide with a personalized, AI-powered learning ecosystem that combines smart study tools, trend-based content, and productivity-enhancing intelligence—all in one streamlined platform.",
    points: [
      "Help students learn more effectively",
      "Make education accessible to everyone",
      "Personalize learning experiences"
    ]
  },
  {
    title: "Our Vision",
    icon: Zap,
    description: "To revolutionize education by creating an AI-powered platform where every student can access personalized learning tools, discover relevant content, and build productive habits that will serve them throughout their academic and professional careers.",
    points: [
      "Transform traditional education models",
      "Build an AI ecosystem for lifelong learning",
      "Lead innovation in educational technology"
    ]
  },
  {
    title: "Why InsightHub?",
    icon: Rocket,
    description: "InsightHub stands out by combining cutting-edge AI technology with intuitive design to create a seamless learning experience for students across all disciplines. Our platform adapts to your unique learning style and needs.",
    points: [
      "All-in-one AI productivity + learning hub",
      "Personalized study paths and content recommendations",
      "Integrated workflow tools with AI assistance"
    ]
  }
]
