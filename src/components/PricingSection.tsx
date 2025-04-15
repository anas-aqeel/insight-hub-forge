
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

const pricingPlans = [
  {
    name: "Free",
    price: "$0",
    description: "Basic features for students getting started",
    features: [
      "Basic AI tools",
      "1 subject",
      "10 queries/day",
      "Community access"
    ],
    buttonText: "Get Started",
    buttonVariant: "outline" as const,
    delay: "animate-slide-in"
  },
  {
    name: "Student+",
    price: "$9.99/mo",
    description: "Everything you need for effective learning",
    features: [
      "All Free features",
      "Unlimited tutoring",
      "Topic tracking",
      "Custom feeds",
      "Priority support"
    ],
    popular: true,
    buttonText: "Start Free Trial",
    buttonVariant: "default" as const,
    delay: "animate-slide-in-delay-1"
  },
  {
    name: "Pro Dev",
    price: "$14.99/mo",
    description: "Advanced tools for developers and STEM students",
    features: [
      "All Student+ features",
      "GitHub tools",
      "Code insight",
      "Project assistant",
      "Advanced analytics"
    ],
    buttonText: "Get Pro Dev",
    buttonVariant: "outline" as const,
    delay: "animate-slide-in-delay-2"
  },
  {
    name: "Scholar Tier",
    price: "$24.99/mo",
    description: "Complete package for serious academics",
    features: [
      "All Pro Dev features",
      "Full AI stack",
      "Research mode",
      "Career mentor",
      "Early access to features",
      "Dedicated support"
    ],
    buttonText: "Get Scholar Tier",
    buttonVariant: "outline" as const,
    delay: "animate-slide-in-delay-3"
  }
]

export function PricingSection() {
  return (
    <section id="pricing" className="py-20 relative">
      <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-bright-orange/10 rounded-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-slide-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Pricing Plans</h2>
          <p className="text-lg text-light-gray">
            Choose the plan that fits your learning needs. All plans include access to our core platform.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pricingPlans.map((plan) => (
            <Card 
              key={plan.name} 
              className={`${plan.delay} ${plan.popular ? 'border-bright-orange/50 shadow-glow' : ''}`}
            >
              <CardHeader className="pb-8">
                <div className="space-y-2">
                  {plan.popular && (
                    <div className="py-1 px-3 text-xs bg-bright-orange/20 text-bright-orange rounded-full w-fit">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold text-white">{plan.price}</span>
                  </div>
                  <p className="text-sm text-light-gray">{plan.description}</p>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-bright-orange shrink-0" />
                      <span className="text-sm text-light-gray">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant={plan.buttonVariant}>
                  {plan.buttonText}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center animate-slide-in">
          <p className="text-light-gray mb-4">Need a custom solution for your institution?</p>
          <Button variant="outline">Contact Sales for Institution License</Button>
        </div>
      </div>
    </section>
  )
}
