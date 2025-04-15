
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"

export function CTASection() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-vibrant-pink/20 to-bright-orange/20 backdrop-blur-md"></div>
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-bright-orange/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-vibrant-pink/20 rounded-full blur-3xl"></div>
      
      <div className="container relative z-10 mx-auto px-4 max-w-4xl">
        <div className="text-center space-y-6 animate-slide-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Ready to Transform Your Learning Experience?
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Join thousands of students who are already using InsightHub to learn smarter, not harder.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg">
              <Link to="/signup">
                Get Started Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg">
              <Link to="/demo">Request Demo</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
