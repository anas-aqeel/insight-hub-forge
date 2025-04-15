
import { CheckSquare, Timer, FileText, ListTodo } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card-custom"

export function ProductivityToolsFeature() {
  return (
    <Card className="h-full animate-slide-in-delay-3">
      <CardContent className="p-8 flex flex-col h-full">
        <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-lg bg-gradient-to-br from-vibrant-pink/20 to-bright-orange/20">
          <CheckSquare className="h-8 w-8 text-bright-orange" />
        </div>
        <h3 className="text-2xl font-bold mb-4 text-white">Productivity & Workflow Tools</h3>
        <p className="text-light-gray mb-6">
          Enhance your study efficiency with our suite of productivity tools designed to help you focus and accomplish more.
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
    title: "AI To-Do List",
    description: "Smart task prioritization and scheduling",
    icon: ListTodo
  },
  {
    title: "Pomodoro Timer",
    description: "Focused work sessions with break reminders",
    icon: Timer
  },
  {
    title: "Smart Notes",
    description: "AI-powered note-taking with auto-organization",
    icon: FileText
  }
]
