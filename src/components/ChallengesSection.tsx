
import { AlertTriangle, Clock, PieChart, Layers, BookX } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card-custom"

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
            Overcoming Modern Learning Challenges
          </h2>
          <p className="text-xl text-light-gray">
            Today's students face unprecedented challenges in their educational journey. 
            InsightHub addresses these key pain points with innovative AI-powered solutions.
          </p>
        </div>
        
        <div className="flex flex-col gap-10 animate-slide-in-delay-1">
          {challenges.map((challenge, index) => (
            <Card 
              key={index}
              className="backdrop-blur-md border-vibrant-pink/30 hover:border-bright-orange/50 transition-all duration-300"
            >
              <CardContent className="p-0">
                <div className={`flex flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
                  <div className="w-full md:w-1/2 p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="inline-flex items-center justify-center p-3 rounded-full bg-gradient-to-br from-vibrant-pink/20 to-bright-orange/20 border border-vibrant-pink/30">
                        <challenge.icon className="h-7 w-7 text-bright-orange" />
                      </div>
                      <h3 className="text-2xl font-bold text-white">{challenge.title}</h3>
                    </div>
                    <p className="text-light-gray mb-5">{challenge.description}</p>
                    <div className="space-y-3 mt-4">
                      <h4 className="text-lg font-semibold text-white mb-2">How InsightHub Helps:</h4>
                      <ul className="space-y-2 pl-2">
                        {challenge.solutions.map((solution, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <span className="text-bright-orange font-bold">•</span>
                            <span className="text-light-gray">{solution}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="w-full md:w-1/2 h-64 md:h-auto">
                    <img 
                      src={challenge.imageSrc} 
                      alt={challenge.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

const challenges = [
  {
    title: "Information Overload",
    description: "Students today are overwhelmed by the sheer volume of content available across different platforms, making it difficult to find, organize, and process relevant information effectively.",
    icon: Layers,
    imageSrc: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    solutions: [
      "AI-powered content filtering and prioritization",
      "Smart summarization of key information",
      "Personalized knowledge feeds based on your learning goals"
    ]
  },
  {
    title: "Time Management Struggles",
    description: "Balancing coursework, personal projects, and self-study is increasingly difficult in today's fast-paced academic environment, leading to stress and reduced learning effectiveness.",
    icon: Clock,
    imageSrc: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    solutions: [
      "Smart scheduling with AI prioritization",
      "Focus time tracking with productivity insights",
      "Automated study plans based on your goals and deadlines"
    ]
  },
  {
    title: "Ineffective Study Methods",
    description: "One-size-fits-all approaches fail to address individual learning styles and needs, resulting in wasted time and suboptimal knowledge retention for many students.",
    icon: BookX,
    imageSrc: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    solutions: [
      "Personalized learning paths based on your learning style",
      "AI tutor that adapts to your strengths and weaknesses",
      "Custom flashcards and concept maps for better retention"
    ]
  },
  {
    title: "Lack of Learning Insights",
    description: "Students rarely get meaningful feedback on their learning progress and knowledge gaps, making it difficult to improve study habits and focus on areas that need attention.",
    icon: PieChart,
    imageSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    solutions: [
      "Detailed analytics on learning progress and patterns",
      "AI-identified knowledge gaps and remediation",
      "Weekly reports with actionable improvement suggestions"
    ]
  }
]
