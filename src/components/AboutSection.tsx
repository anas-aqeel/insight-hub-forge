
import { Brain } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-20 relative">
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-vibrant-pink/10 rounded-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-slide-in">
          <div className="inline-flex items-center justify-center p-2 bg-gradient-to-br from-vibrant-pink/20 to-bright-orange/20 rounded-full mb-4">
            <Brain size={32} className="text-bright-orange" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">About InsightHub</h2>
          <p className="text-lg text-light-gray">
            InsightHub is a platform designed to provide students with an AI-powered learning ecosystem. 
            From personalized study tools to trending content in your field, InsightHub enables you to learn smarter, 
            stay ahead, and achieve your academic goals faster.
          </p>
        </div>
      </div>
    </section>
  )
}
