
import { AlertTriangle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function ChallengesSection() {
  return (
    <section id="challenges" className="py-20 relative">
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-bright-orange/10 rounded-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-5 gap-12 items-center">
          <div className="md:col-span-3 space-y-6 animate-slide-in">
            <div className="inline-flex items-center justify-center p-2 bg-gradient-to-br from-vibrant-pink/20 to-bright-orange/20 rounded-full mb-2">
              <AlertTriangle size={28} className="text-bright-orange" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              The Challenges Students Face Today
            </h2>
            <p className="text-lg text-light-gray">
              Traditional learning methods are outdated and inefficient. Students often struggle to find 
              personalized study material, stay productive, and manage the overwhelming amount of information 
              in today's fast-paced academic world.
            </p>
          </div>
          
          <div className="md:col-span-2 animate-slide-in-delay-1">
            <Card className="bg-gradient-to-br from-black/40 to-black/20 border border-white/5">
              <CardContent className="p-6">
                <ul className="space-y-4 text-light-gray">
                  <li className="flex items-start gap-3">
                    <span className="text-bright-orange font-bold">01</span>
                    <p>Finding relevant study materials takes too much time</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-bright-orange font-bold">02</span>
                    <p>One-size-fits-all education doesn't work for everyone</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-bright-orange font-bold">03</span>
                    <p>Information overload makes focusing difficult</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-bright-orange font-bold">04</span>
                    <p>Staying motivated without personalized feedback is challenging</p>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
