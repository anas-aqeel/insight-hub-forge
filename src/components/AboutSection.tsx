
import { Brain, Target, Zap, RocketLaunch, Star } from "lucide-react"
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
            InsightHub is a revolutionary platform designed to provide students with an AI-powered learning ecosystem. 
            We combine advanced artificial intelligence with intuitive design to transform how students learn, 
            discover content, and stay productive in today's fast-paced academic world.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="hover:border-bright-orange transition-all duration-300 transform hover:-translate-y-2 animate-slide-in-delay-1 backdrop-blur-md">
            <CardContent className="p-6 flex flex-col items-center text-center h-full">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-vibrant-pink/30 to-bright-orange/30 flex items-center justify-center mb-4 border border-bright-orange/40">
                <Target size={30} className="text-bright-orange" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Our Mission</h3>
              <p className="text-light-gray flex-grow">
                "To empower students worldwide with a personalized, AI-powered learning ecosystem that combines 
                smart study tools, trend-based content, and productivity-enhancing intelligence—all in one 
                streamlined platform."
              </p>
            </CardContent>
          </Card>
          
          <Card className="hover:border-bright-orange transition-all duration-300 transform hover:-translate-y-2 animate-slide-in-delay-2 backdrop-blur-md">
            <CardContent className="p-6 flex flex-col items-center text-center h-full">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-vibrant-pink/30 to-bright-orange/30 flex items-center justify-center mb-4 border border-bright-orange/40">
                <Zap size={30} className="text-bright-orange" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Our Vision</h3>
              <p className="text-light-gray flex-grow">
                "To revolutionize education by creating an AI-powered platform where every student can access 
                personalized learning tools, discover relevant content, and build productive habits that will 
                serve them throughout their academic and professional careers."
              </p>
            </CardContent>
          </Card>
          
          <Card className="hover:border-bright-orange transition-all duration-300 transform hover:-translate-y-2 animate-slide-in-delay-3 backdrop-blur-md">
            <CardContent className="p-6 flex flex-col items-center text-center h-full">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-vibrant-pink/30 to-bright-orange/30 flex items-center justify-center mb-4 border border-bright-orange/40">
                <RocketLaunch size={30} className="text-bright-orange" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Why InsightHub?</h3>
              <p className="text-light-gray mb-4 flex-grow">
                InsightHub stands out by combining cutting-edge AI technology with intuitive design to create 
                a seamless learning experience for students across all disciplines. Our platform adapts to 
                your unique learning style and needs.
              </p>
              <ul className="text-light-gray space-y-2 mt-auto text-left">
                <li className="flex items-start gap-2">
                  <Star size={16} className="text-bright-orange mt-1 shrink-0" />
                  <span>All-in-one AI productivity + learning hub</span>
                </li>
                <li className="flex items-start gap-2">
                  <Star size={16} className="text-bright-orange mt-1 shrink-0" />
                  <span>Personalized study paths and content recommendations</span>
                </li>
                <li className="flex items-start gap-2">
                  <Star size={16} className="text-bright-orange mt-1 shrink-0" />
                  <span>Integrated workflow tools with AI assistance</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
