
import { Brain, BookOpen, Calendar, Map } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card-custom"

export function SmartLearningFeature() {
  return (
    <Card className="h-full animate-slide-in-delay-1">
      <CardContent className="p-8 flex flex-col h-full">
        <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-lg bg-gradient-to-br from-vibrant-pink/20 to-bright-orange/20">
          <Brain className="h-8 w-8 text-bright-orange" />
        </div>
        <h3 className="text-2xl font-bold mb-4 text-white">Smart Learning Environment</h3>
        <p className="text-light-gray mb-6">
          Our AI-powered learning environment adapts to your unique learning style and needs, providing personalized guidance and resources.
        </p>
        
        <ul className="space-y-4 mt-auto">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <div className="bg-bright-orange/20 p-1.5 rounded-full shrink-0 mt-0.5">
                <feature.icon className="h-4 w-4 text-bright-orange" />
              </div>
              <div>
                <p className="font-medium text-white">{feature.title}</p>
                <p className="text-sm text-light-gray">{feature.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

const features = [
  {
    title: "AI Tutor",
    description: "Get personalized help with specific subjects and topics",
    icon: BookOpen
  },
  {
    title: "Smart Study Planner",
    description: "AI-generated study schedules based on your learning patterns",
    icon: Calendar
  },
  {
    title: "Concept Maps",
    description: "Visualize connections between topics to enhance understanding",
    icon: Map
  }
]
