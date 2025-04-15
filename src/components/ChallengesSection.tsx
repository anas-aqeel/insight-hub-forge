
import { AlertTriangle, Clock, PieChart, Layers, BookX } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card-custom"

export function ChallengesSection() {
  return (
    <section id="challenges" className="py-24 relative">
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-bright-orange/10 rounded-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-5 gap-12 items-center">
          <div className="md:col-span-2 space-y-6 animate-slide-in">
            <div className="inline-flex items-center justify-center p-3 bg-gradient-to-br from-vibrant-pink/20 to-bright-orange/20 rounded-full mb-2">
              <AlertTriangle size={28} className="text-bright-orange" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              The Challenges Students Face Today
            </h2>
            <p className="text-xl text-light-gray">
              Traditional learning methods are outdated and inefficient. Students often struggle to find 
              personalized study material, stay productive, and manage the overwhelming amount of information 
              in today's fast-paced academic world.
            </p>
          </div>
          
          <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-6 animate-slide-in-delay-1">
            {challenges.map((challenge, index) => (
              <Card key={index} className="backdrop-blur-md">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="inline-flex items-center justify-center p-2 rounded-full bg-gradient-to-br from-vibrant-pink/20 to-bright-orange/20">
                      <challenge.icon className="h-6 w-6 text-bright-orange" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">{challenge.title}</h3>
                      <p className="text-light-gray text-sm">{challenge.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

const challenges = [
  {
    title: "Information Overload",
    description: "Students are overwhelmed by the sheer volume of content available across different platforms.",
    icon: Layers
  },
  {
    title: "Time Management",
    description: "Balancing coursework, personal projects, and self-study is increasingly difficult.",
    icon: Clock
  },
  {
    title: "Ineffective Study Methods",
    description: "One-size-fits-all approaches fail to address individual learning styles and needs.",
    icon: BookX
  },
  {
    title: "Lack of Insights",
    description: "Students rarely get meaningful feedback on their learning progress and knowledge gaps.",
    icon: PieChart
  }
]
