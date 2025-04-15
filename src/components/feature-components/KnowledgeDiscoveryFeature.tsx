
import { LightbulbIcon, Globe, TrendingUp, YoutubeIcon } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card-custom"

export function KnowledgeDiscoveryFeature() {
  return (
    <Card className="h-full animate-slide-in-delay-2">
      <CardContent className="p-8 flex flex-col h-full">
        <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-lg bg-gradient-to-br from-vibrant-pink/20 to-bright-orange/20">
          <LightbulbIcon className="h-8 w-8 text-bright-orange" />
        </div>
        <h3 className="text-2xl font-bold mb-4 text-white">Knowledge Discovery & Feed AI</h3>
        <p className="text-light-gray mb-6">
          Stay ahead with our intelligent content discovery system that brings the most relevant learning resources directly to you.
        </p>
        
        <ul className="space-y-4 mt-auto">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <div className="bg-bright-orange/20 p-1.5 rounded-full shrink-0 mt-0.5">
                <feature.icon className="h-4 w-4 text-bright-orange" />
              </div>
              <div>
                <p className="font-medium text-white">{feature.title}</p>
                <p className="text-sm text-light-gray">{feature.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

const features = [
  {
    title: "Personalized Learning Feed",
    description: "Content tailored to your interests and learning goals",
    icon: Globe
  },
  {
    title: "Trending Topics",
    description: "Stay updated with the latest trends in your field of study",
    icon: TrendingUp
  },
  {
    title: "Curated Resources",
    description: "Hand-picked YouTube lectures, articles, and research papers",
    icon: YoutubeIcon
  }
]
