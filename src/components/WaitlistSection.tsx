
import { Button } from "@/components/ui/button-custom"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card-custom"
import { ArrowRight } from "lucide-react"
import { useState } from "react"

export function WaitlistSection() {
  const [email, setEmail] = useState("")
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle waitlist signup logic
    console.log("Waitlist signup:", email)
    // Reset form
    setEmail("")
  }
  
  return (
    <section id="waitlist" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-dark-gray/80 to-vibrant-pink/20 backdrop-blur-sm"></div>
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-bright-orange/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-vibrant-pink/10 rounded-full blur-3xl"></div>
      
      <div className="container relative z-10 mx-auto px-4 max-w-4xl">
        <Card className="backdrop-blur-md border-white/10">
          <CardContent className="p-8">
            <div className="text-center space-y-6 animate-slide-in">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Join the Waitlist Today
              </h2>
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                Be among the first to experience InsightHub's revolutionary AI-powered learning platform.
              </p>
              
              <form onSubmit={handleSubmit} className="max-w-md mx-auto pt-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/50 h-12"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <Button type="submit" variant="default" size="lg" className="sm:w-auto">
                    Join Waitlist
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </form>
              
              <p className="text-sm text-light-gray/70">
                We'll notify you when we're ready to launch. No spam, promise.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
