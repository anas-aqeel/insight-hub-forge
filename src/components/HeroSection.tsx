
import { Button } from "@/components/ui/button-custom"
import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import heroImage from "/lovable-uploads/d85f8c02-851f-4ec8-8793-3cfb10cb9d16.png"

export function HeroSection() {
  return (
    <section className="pt-16 pb-20 md:py-20 lg:py-28 overflow-hidden">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 md:space-y-8 animate-slide-in">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-tight">
            AI-Powered Learning & Productivity
          </h1>
          <p className="text-xl md:text-2xl text-light-gray">
            Personalized learning tools, curated trends, and productivity intelligence—all in one platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button asChild size="lg" className="text-base font-medium">
              <Link to="/signup">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-base font-medium">
              <Link to="/demo">Watch Demo</Link>
            </Button>
          </div>
        </div>
        
        <div className="relative w-full h-full min-h-[300px] md:min-h-[400px] animate-slide-in-delay-2">
          <div className="absolute inset-0 bg-gradient-to-br from-vibrant-pink/20 to-bright-orange/20 rounded-xl blur-xl opacity-70"></div>
          <img 
            src={heroImage} 
            alt="InsightHub interface showing AI-powered learning tools" 
            className="relative z-10 w-full h-full object-cover rounded-xl shadow-xl"
          />
          <div className="absolute -bottom-4 -right-4 w-64 h-64 bg-bright-orange/20 rounded-full blur-3xl"></div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 mt-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {heroFeatures.map((feature, index) => (
            <div 
              key={feature.title}
              className={`border border-white/10 rounded-xl p-6 bg-dark-gray/30 backdrop-blur-sm animate-slide-in-delay-${index + 1}`}
            >
              <div className="flex justify-center mb-4">
                <feature.icon className="h-12 w-12 text-bright-orange" />
              </div>
              <h3 className="text-xl font-bold text-white text-center mb-2">{feature.title}</h3>
              <p className="text-light-gray text-center text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Hero features icons
import { BookOpen, LightbulbIcon, CheckSquare } from "lucide-react"

const heroFeatures = [
  {
    title: "Smart Learning Environment",
    description: "AI tutor, study planner and summaries",
    icon: BookOpen
  },
  {
    title: "Knowledge Discovery & Feed AI",
    description: "Personalized recommendations & trending topics",
    icon: LightbulbIcon
  },
  {
    title: "Productivity & Workflow Tools",
    description: "Check lists, timer, note-taking",
    icon: CheckSquare
  }
]
