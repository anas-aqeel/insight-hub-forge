
import { 
  Brain, 
  BarChartBig, 
  Users, 
  Lightbulb, 
  ListChecks, 
  Code
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const features = [
  {
    id: 1,
    icon: Brain,
    title: "Smart Learning Environment",
    description: "AI tutor, study planners, and concept maps to enhance your learning experience.",
    delay: "animate-slide-in-delay-1"
  },
  {
    id: 2,
    icon: Lightbulb,
    title: "Knowledge Discovery & Feed",
    description: "Personalized learning feed with trending content tailored to your interests.",
    delay: "animate-slide-in-delay-2"
  },
  {
    id: 3,
    icon: ListChecks,
    title: "Productivity & Workflow Tools",
    description: "Pomodoro mode, AI to-do list, and project trackers to boost your productivity.",
    delay: "animate-slide-in-delay-3"
  },
  {
    id: 4,
    icon: BarChartBig,
    title: "Intelligence Layer",
    description: "Learning analytics, AI insights, and GPT-powered feedback on your progress.",
    delay: "animate-slide-in-delay-1"
  },
  {
    id: 5,
    icon: Code,
    title: "Developer & STEM Toolkit",
    description: "GitHub repo discovery, code explainer, and STEM problem solver for technical students.",
    delay: "animate-slide-in-delay-2"
  },
  {
    id: 6,
    icon: Users,
    title: "Community & Collaboration",
    description: "Peer forums, study groups, and collaborative projects to learn together.",
    delay: "animate-slide-in-delay-3"
  }
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 relative">
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-vibrant-pink/10 rounded-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-slide-in">
          <div className="inline-flex items-center justify-center p-2 bg-gradient-to-br from-vibrant-pink/20 to-bright-orange/20 rounded-full mb-4">
            <Lightbulb size={28} className="text-bright-orange" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Features that Make a Difference</h2>
          <p className="text-lg text-light-gray">
            InsightHub combines cutting-edge AI technology with proven learning methodologies
            to create a comprehensive learning ecosystem.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature) => (
            <Card key={feature.id} className={`h-full ${feature.delay}`}>
              <CardContent className="p-6 h-full">
                <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-vibrant-pink/20 to-bright-orange/20">
                  <feature.icon className="h-6 w-6 text-bright-orange" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                <p className="text-light-gray">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
