
import { Button } from "@/components/ui/button-custom"
import { Link } from "react-router-dom"
import { ArrowRight, Mail } from "lucide-react"
import heroImage from "/lovable-uploads/d85f8c02-851f-4ec8-8793-3cfb10cb9d16.png"
import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"

export function HeroSection() {
  const [email, setEmail] = useState("")
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  function calculateTimeLeft() {
    // Set the launch date to 7 days from now
    const targetDate = new Date();
    // Add 7 days to current date
    targetDate.setDate(targetDate.getDate() + 7);
    
    const difference = targetDate.getTime() - new Date().getTime();
    
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60)
    }
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle the email submission
    console.log("Email submitted:", email);
    // Reset the form
    setEmail("");
  }

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
          
          <div className="mt-8 py-4 px-5 bg-gradient-to-br from-vibrant-pink/10 to-bright-orange/10 border border-vibrant-pink/20 rounded-xl">
            <p className="text-lg font-medium text-white mb-2">Launch Countdown:</p>
            <div className="grid grid-cols-4 gap-2 text-center">
              <div className="bg-dark-gray/50 border border-vibrant-pink/30 rounded-lg p-3">
                <div className="text-3xl font-bold text-bright-orange">{timeLeft.days}</div>
                <div className="text-xs text-light-gray">Days</div>
              </div>
              <div className="bg-dark-gray/50 border border-vibrant-pink/30 rounded-lg p-3">
                <div className="text-3xl font-bold text-bright-orange">{timeLeft.hours}</div>
                <div className="text-xs text-light-gray">Hours</div>
              </div>
              <div className="bg-dark-gray/50 border border-vibrant-pink/30 rounded-lg p-3">
                <div className="text-3xl font-bold text-bright-orange">{timeLeft.minutes}</div>
                <div className="text-xs text-light-gray">Minutes</div>
              </div>
              <div className="bg-dark-gray/50 border border-vibrant-pink/30 rounded-lg p-3">
                <div className="text-3xl font-bold text-bright-orange">{timeLeft.seconds}</div>
                <div className="text-xs text-light-gray">Seconds</div>
              </div>
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="pt-2">
            <div className="flex flex-col sm:flex-row gap-2 w-full">
              <div className="relative flex-grow">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-bright-orange" />
                <Input 
                  type="email" 
                  placeholder="Enter your email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10 h-12 bg-dark-gray/50 border-vibrant-pink/30 text-white focus:border-bright-orange"
                  required
                />
              </div>
              <Button type="submit" size="lg" className="text-base font-medium bg-gradient-to-r from-vibrant-pink to-bright-orange text-white hover:opacity-90 transition-opacity">
                Join Waitlist
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </form>
          
          <div className="flex flex-row gap-4 pt-4">
            <Button asChild size="lg" className="w-full text-base font-medium bg-gradient-to-r from-vibrant-pink to-bright-orange text-white hover:opacity-90 transition-opacity">
              <Link to="/signup">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full text-base font-medium">
              <Link to="/demo">Watch Demo</Link>
            </Button>
          </div>
        </div>
        
        <div className="relative w-full h-full  aspect-square  animate-slide-in-delay-2">
          <div className="absolute inset-0 bg-gradient-to-br from-vibrant-pink/20 to-bright-orange/20 rounded-xl blur-xl opacity-70"></div>
          <img 
            src={'https://sdmntprnorthcentralus.oaiusercontent.com/files/00000000-dec4-622f-8890-b083de5c2ef1/raw?se=2025-04-16T21%3A58%3A11Z&sp=r&sv=2024-08-04&sr=b&scid=e3a20f41-6180-5e8e-8279-eea86523eb71&skoid=e872f19f-7b7f-4feb-9998-20052dec61d6&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-04-16T19%3A45%3A41Z&ske=2025-04-17T19%3A45%3A41Z&sks=b&skv=2024-08-04&sig=lXhPzg%2B8xtvZTQW%2BHqUHz1uiKMoUlB3l2DqSJNuLdN8%3D'} 
            alt="InsightHub interface showing AI-powered learning tools" 
            className="relative z-10 w-full h-full object-cover rounded-xl border border-vibrant-pink/30"
          />
          <div className="absolute -bottom-4 -right-4 w-64 h-64 bg-bright-orange/20 rounded-full blur-3xl"></div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 mt-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {heroFeatures.map((feature, index) => (
            <div 
              key={feature.title}
              className={`border border-vibrant-pink/30 rounded-xl p-6 bg-dark-gray/30 backdrop-blur-sm animate-slide-in-delay-${index + 1}`}
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
