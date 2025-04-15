
import { Button } from "@/components/ui/button-custom"
import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"

export function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-dark-gray/80 to-vibrant-pink/30 backdrop-blur-md"></div>
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-bright-orange/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-vibrant-pink/20 rounded-full blur-3xl"></div>
      
      <div className="container relative z-10 mx-auto px-4 max-w-5xl">
        <div className="text-center space-y-8 animate-slide-in">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            Ready to Transform Your Learning Experience?
          </h2>
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto">
            Join thousands of students who are already using InsightHub to learn smarter, not harder.
          </p>
          
          <div className="bg-gradient-to-r from-dark-gray/50 to-black/30 border border-white/10 rounded-2xl p-8 max-w-3xl mx-auto mt-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
              <div className="border-r border-white/10 md:pr-4">
                <div className="text-3xl font-bold text-bright-orange">10k+</div>
                <div className="text-sm text-light-gray">Students</div>
              </div>
              <div className="border-r border-white/10 md:pr-4">
                <div className="text-3xl font-bold text-bright-orange">500+</div>
                <div className="text-sm text-light-gray">Universities</div>
              </div>
              <div className="border-r border-white/10 md:pr-4">
                <div className="text-3xl font-bold text-bright-orange">30M+</div>
                <div className="text-sm text-light-gray">Questions Answered</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-bright-orange">4.9/5</div>
                <div className="text-sm text-light-gray">User Rating</div>
              </div>
            </div>
          </div>
          
          <div className="pt-8 flex flex-col sm:flex-row gap-6 justify-center">
            <Button asChild size="lg" className="text-lg px-8 py-6">
              <Link to="/signup">
                Get Started Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6">
              <Link to="/demo">Watch Demo</Link>
            </Button>
          </div>
          
          <p className="text-light-gray/70 text-sm pt-4">
            No credit card required. Start with our free plan and upgrade anytime.
          </p>
        </div>
      </div>
    </section>
  )
}
