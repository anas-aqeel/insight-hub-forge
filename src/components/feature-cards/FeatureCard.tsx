
import { Card, CardContent } from "@/components/ui/card-custom"
import { LucideIcon } from "lucide-react"

interface FeatureCardProps {
  title: string;
  description: string;
  features: {
    title: string;
    description: string;
    icon: LucideIcon;
  }[];
  icon: LucideIcon;
  imageSrc: string;
  reverse?: boolean;
}

export function FeatureCard({ title, description, features, icon: Icon, imageSrc, reverse = false }: FeatureCardProps) {
  return (
    <Card className="h-full animate-slide-in-delay-3">
      <CardContent className="p-0 h-full">
        <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} h-full`}>
          <div className="p-8 w-full md:w-1/2 flex flex-col">
            <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-lg bg-gradient-to-br from-vibrant-pink/20 to-bright-orange/20 border border-vibrant-pink/30">
              <Icon className="h-8 w-8 text-bright-orange" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-white">{title}</h3>
            <p className="text-light-gray mb-6">
              {description}
            </p>
            
            <ul className="space-y-4 mt-auto">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="bg-bright-orange/20 p-1.5 rounded-full shrink-0 mt-0.5 border border-bright-orange/30">
                    <feature.icon className="h-4 w-4 text-bright-orange" />
                  </div>
                  <div>
                    <p className="font-medium text-white">{feature.title}</p>
                    <p className="text-sm text-light-gray">{feature.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full md:w-1/2 h-64 md:h-auto">
            <img 
              src={imageSrc} 
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
