
import { Brain, Target, Zap } from "lucide-react"
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
            InsightHub is a platform designed to provide students with an AI-powered learning ecosystem. 
            From personalized study tools to trending content in your field, InsightHub enables you to learn smarter, 
            stay ahead, and achieve your academic goals faster.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <Card className="animate-slide-in-delay-1">
            <CardContent className="p-8 flex flex-col items-start">
              <div className="inline-flex items-center justify-center p-2 bg-gradient-to-br from-vibrant-pink/20 to-bright-orange/20 rounded-full mb-4">
                <Target size={24} className="text-bright-orange" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Our Mission</h3>
              <p className="text-light-gray">
                "To empower students worldwide with a personalized, AI-powered learning ecosystem that combines 
                smart study tools, trend-based content, and productivity-enhancing intelligence—all in one 
                streamlined platform."
              </p>
            </CardContent>
          </Card>
          
          <Card className="animate-slide-in-delay-2">
            <CardContent className="p-8 flex flex-col items-start">
              <div className="inline-flex items-center justify-center p-2 bg-gradient-to-br from-vibrant-pink/20 to-bright-orange/20 rounded-full mb-4">
                <Zap size={24} className="text-bright-orange" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Why InsightHub?</h3>
              <ul className="text-light-gray space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-bright-orange">•</span>
                  <span>All-in-one AI productivity + learning hub</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-bright-orange">•</span>
                  <span>Trend-aware content feed (news, code, lectures)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-bright-orange">•</span>
                  <span>Developer-friendly tools (repos, code helper)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-bright-orange">•</span>
                  <span>Auto-prioritization and personalized study paths</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
