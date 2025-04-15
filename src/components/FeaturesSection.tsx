
import { Lightbulb } from "lucide-react"
import { SmartLearningFeature } from "./feature-components/SmartLearningFeature"
import { KnowledgeDiscoveryFeature } from "./feature-components/KnowledgeDiscoveryFeature"
import { ProductivityToolsFeature } from "./feature-components/ProductivityToolsFeature"
import { IntelligenceLayerFeature } from "./feature-components/IntelligenceLayerFeature"
import { DeveloperToolkitFeature } from "./feature-components/DeveloperToolkitFeature"
import { CommunityFeature } from "./feature-components/CommunityFeature"

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 relative">
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-vibrant-pink/10 rounded-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-slide-in">
          <div className="inline-flex items-center justify-center p-3 bg-gradient-to-br from-vibrant-pink/20 to-bright-orange/20 rounded-full mb-4">
            <Lightbulb size={32} className="text-bright-orange" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Features that Make a Difference</h2>
          <p className="text-xl text-light-gray">
            InsightHub combines cutting-edge AI technology with proven learning methodologies
            to create a comprehensive learning ecosystem tailored to your needs.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <SmartLearningFeature />
          <KnowledgeDiscoveryFeature />
          <ProductivityToolsFeature />
          <IntelligenceLayerFeature />
          <DeveloperToolkitFeature />
          <CommunityFeature />
        </div>
      </div>
    </section>
  )
}
