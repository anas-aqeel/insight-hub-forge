
import { Card, CardContent } from "@/components/ui/card-custom"
import { LucideIcon } from "lucide-react"

interface ChallengeCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  imageSrc: string;
  reverse?: boolean;
}

export function ChallengeCard({ title, description, icon: Icon, imageSrc, reverse = false }: ChallengeCardProps) {
  return (
    <Card className="overflow-hidden h-full backdrop-blur-md">
      <CardContent className="p-0 flex flex-col md:flex-row">
        {reverse ? (
          <>
            <div className="w-full md:w-1/2 h-64 md:h-auto">
              <img 
                src={imageSrc} 
                alt={title} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full md:w-1/2 p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="inline-flex items-center justify-center p-2 rounded-full bg-gradient-to-br from-vibrant-pink/20 to-bright-orange/20 border border-vibrant-pink/30">
                  <Icon className="h-6 w-6 text-bright-orange" />
                </div>
                <h3 className="text-xl font-semibold text-white">{title}</h3>
              </div>
              <p className="text-light-gray">{description}</p>
            </div>
          </>
        ) : (
          <>
            <div className="w-full md:w-1/2 p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="inline-flex items-center justify-center p-2 rounded-full bg-gradient-to-br from-vibrant-pink/20 to-bright-orange/20 border border-vibrant-pink/30">
                  <Icon className="h-6 w-6 text-bright-orange" />
                </div>
                <h3 className="text-xl font-semibold text-white">{title}</h3>
              </div>
              <p className="text-light-gray">{description}</p>
            </div>
            <div className="w-full md:w-1/2 h-64 md:h-auto">
              <img 
                src={imageSrc} 
                alt={title} 
                className="w-full h-full object-cover"
              />
            </div>
          </>
        )}
      </CardContent>
    </Card>
  )
}
