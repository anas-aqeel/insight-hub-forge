import { Button } from "@/components/ui/button-custom"
import { Link } from "react-router-dom"
import { ArrowRight, Mail, Sparkles } from "lucide-react"
import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"

// Set your fixed launch date here (e.g., April 24, 2025, 12:00:00)
const LAUNCH_DATE = new Date("2025-04-24T12:00:00");

export function HeroSection() {
  const [email, setEmail] = useState("")
  const [timeLeft, setTimeLeft] = useState(getTimeLeft())

  function getTimeLeft() {
    const now = new Date();
    const difference = LAUNCH_DATE.getTime() - now.getTime();

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 }
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60)
    }
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle the email submission
    console.log("Email submitted:", email);
    setEmail("");
  }

  return (
    <section className="relative overflow-hidden pt-20 pb-24 md:py-32 bg-gradient-to-tl to-[#070707]  from-[#ff400000]">
      {/* Decorative Glow */}
      <div className="pointer-events-none absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full bg-vibrant-pink/10 blur-3xl opacity-60 z-0"></div>
      <div className="pointer-events-none absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full bg-bright-orange/10 blur-3xl opacity-60 z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-16">
          {/* Left: Headline, Description, Features */}
          <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left space-y-8 animate-slide-in">
            <div className="flex items-center gap-3 mb-2">
              <Sparkles className="text-bright-orange h-7 w-7 animate-pulse" />
              <span className="uppercase tracking-widest text-xs font-semibold text-bright-orange bg-[#18181c] px-3 py-1 rounded-full shadow">
                New in 2025
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight drop-shadow-lg">
              AI-Powered Learning <br className="hidden md:block" />
              <span className="bg-gradient-to-r from-vibrant-pink to-bright-orange bg-clip-text text-transparent">
                & Productivity
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-light-gray max-w-xl mx-auto md:mx-0">
              Personalized learning tools, curated trends, and productivity intelligence—all in one platform.
            </p>
            {/* Mini Features Row */}
            <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-2">
              {heroFeatures.map((feature, idx) => (
                <div key={feature.title} className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#18181c] border border-vibrant-pink/20 shadow-sm">
                  <feature.icon className="h-6 w-6 text-bright-orange" />
                  <span className="text-sm text-white font-medium">{feature.title}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Countdown, Email Form, CTA */}
          <div className="flex-1 flex flex-col items-center w-full max-w-md gap-8 animate-slide-in-delay-2">
            {/* Countdown */}
            <div className="w-full bg-gradient-to-br from-dark-gray/70 to-dark-gray/30 border border-vibrant-pink/30 rounded-2xl shadow-lg py-6 px-7">
              <p className="text-lg font-semibold text-white mb-3 text-center tracking-wide">🚀 Launching In:</p>
              <div className="grid grid-cols-4 gap-3 text-center">
                <div className="bg-[#070707] border border-vibrant-pink/30 rounded-lg p-4">
                  <div className="text-4xl font-extrabold text-bright-orange tabular-nums">{timeLeft.days}</div>
                  <div className="text-xs text-light-gray uppercase tracking-wider">Days</div>
                </div>
                <div className="bg-[#070707] border border-vibrant-pink/30 rounded-lg p-4">
                  <div className="text-4xl font-extrabold text-bright-orange tabular-nums">{timeLeft.hours}</div>
                  <div className="text-xs text-light-gray uppercase tracking-wider">Hours</div>
                </div>
                <div className="bg-[#070707] border border-vibrant-pink/30 rounded-lg p-4">
                  <div className="text-4xl font-extrabold text-bright-orange tabular-nums">{timeLeft.minutes}</div>
                  <div className="text-xs text-light-gray uppercase tracking-wider">Minutes</div>
                </div>
                <div className="bg-[#070707] border border-vibrant-pink/30 rounded-lg p-4">
                  <div className="text-4xl font-extrabold text-bright-orange tabular-nums">{timeLeft.seconds}</div>
                  <div className="text-xs text-light-gray uppercase tracking-wider">Seconds</div>
                </div>
              </div>
            </div>

            {/* Email Form */}
            <form onSubmit={handleSubmit} className="w-full">
              <div className="flex flex-col sm:flex-row gap-2 w-full">
                <div className="relative flex-grow">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-bright-orange" />
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10 h-12 bg-[#070707] border-vibrant-pink/30 text-white focus:border-bright-orange"
                    required
                  />
                </div>
                <Button type="submit" size="lg" className="text-base font-semibold bg-gradient-to-r from-vibrant-pink to-bright-orange text-white hover:opacity-90 transition-opacity shadow">
                  Join Waitlist
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </form>

            {/* CTA Buttons */}
            <div className="flex flex-row gap-4 pt-2 w-full">
              <Button asChild size="lg" className="w-full text-base font-semibold bg-gradient-to-r from-vibrant-pink to-bright-orange text-white hover:opacity-90 transition-opacity shadow">
                <Link to="/signup">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full text-base font-semibold border-vibrant-pink/40 shadow">
                <Link to="/demo">Watch Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 mt-20 md:mt-28">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {heroFeatures.map((feature, index) => (
            <div
              key={feature.title}
              className={`border border-vibrant-pink/30 rounded-2xl p-8 bg-gradient-to-br from-dark-gray/70 to-dark-gray/30 shadow-lg animate-slide-in-delay-${index + 1}`}
            >
              <div className="flex justify-center mb-5">
                <feature.icon className="h-14 w-14 text-bright-orange" />
              </div>
              <h3 className="text-2xl font-bold text-white text-center mb-3">{feature.title}</h3>
              <p className="text-light-gray text-center text-base">{feature.description}</p>
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
