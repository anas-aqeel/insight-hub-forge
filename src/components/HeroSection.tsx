
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import heroImage from "/lovable-uploads/4fefe4c3-2ea0-4b6a-b688-09aa21513645.png"

export function HeroSection() {
  return (
    <section className="pt-8 pb-16 md:py-20 lg:py-28 overflow-hidden">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 md:space-y-8 animate-slide-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
            Empowering Students with Personalized AI-Powered Learning
          </h1>
          <p className="text-lg md:text-xl text-light-gray">
            Unlock the future of learning with InsightHub—AI-driven tools, smart study environments, and personalized content at your fingertips.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button asChild size="lg" className="text-base font-medium">
              <Link to="/signup">Get Started Now</Link>
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
            alt="InsightHub interface showing students using AI-powered learning tools" 
            className="relative z-10 w-full h-full object-cover rounded-xl shadow-xl"
          />
          <div className="absolute -bottom-4 -right-4 w-64 h-64 bg-bright-orange/20 rounded-full blur-3xl"></div>
        </div>
      </div>
    </section>
  )
}
