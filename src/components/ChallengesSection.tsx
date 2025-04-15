import { AlertTriangle, Clock, PieChart, Layers, BookX } from "lucide-react"
import { ChallengeCard } from "./feature-cards/ChallengeCard"

export function ChallengesSection() {
  return (
    <section id="challenges" className="py-24 relative">
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-bright-orange/10 rounded-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-slide-in">
          <div className="inline-flex items-center justify-center p-3 bg-gradient-to-br from-vibrant-pink/20 to-bright-orange/20 rounded-full mb-2 border border-vibrant-pink/30">
            <AlertTriangle size={28} className="text-bright-orange" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            The Challenges Students Face Today
          </h2>
          <p className="text-xl text-light-gray">
            Traditional learning methods are outdated and inefficient. Students often struggle to find 
            personalized study material, stay productive, and manage the overwhelming amount of information 
            in today's fast-paced academic world.
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-8 animate-slide-in-delay-1">
          {challenges.map((challenge, index) => (
            <ChallengeCard 
              key={index}
              title={challenge.title}
              description={challenge.description}
              icon={challenge.icon}
              imageSrc={challenge.imageSrc}
              reverse={index % 2 !== 0}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

const challenges = [
  {
    title: "Information Overload",
    description: "Students are overwhelmed by the sheer volume of content available across different platforms.",
    icon: Layers,
    imageSrc: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Time Management",
    description: "Balancing coursework, personal projects, and self-study is increasingly difficult.",
    icon: Clock,
    imageSrc: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Ineffective Study Methods",
    description: "One-size-fits-all approaches fail to address individual learning styles and needs.",
    icon: BookX,
    imageSrc: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Lack of Insights",
    description: "Students rarely get meaningful feedback on their learning progress and knowledge gaps.",
    icon: PieChart,
    imageSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  }
]
