
import { Check, HelpCircle } from "lucide-react"
import { Button } from "@/components/ui/button-custom"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card-custom"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

const pricingPlans = [
  {
    name: "Free",
    price: "$0",
    description: "Basic features for students getting started",
    features: [
      "Basic AI tools",
      "1 subject",
      "10 queries/day",
      "Community access",
      "Limited analytics"
    ],
    limitations: [
      "Limited AI capabilities",
      "No advanced features",
      "Basic analytics only"
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
      "5 subjects",
      "Topic tracking",
      "Custom feeds"
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
      "Dedicated support"
    ],
    buttonText: "Get Scholar Tier",
    buttonVariant: "outline" as const,
    delay: "animate-slide-in-delay-3"
  }
]

export function PricingSection() {
  return (
    <section id="pricing" className="py-24 relative">
      <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-bright-orange/10 rounded-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-slide-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Pricing Plans</h2>
          <p className="text-xl text-light-gray">
            Choose the plan that fits your learning needs. All plans include access to our core platform.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pricingPlans.map((plan) => (
            <Card 
              key={plan.name} 
              className={`${plan.delay} ${plan.popular ? 'border-bright-orange/50 shadow-glow' : ''} h-full flex flex-col`}
            >
              <CardHeader className="pb-8">
                <div className="space-y-2">
                  {plan.popular && (
                    <div className="py-1 px-3 text-xs bg-bright-orange/20 text-bright-orange rounded-full w-fit">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold text-white">{plan.price}</span>
                    {plan.price !== "$0" && <span className="text-light-gray">/month</span>}
                  </div>
                  <p className="text-sm text-light-gray">{plan.description}</p>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 flex-grow">
                <h4 className="text-sm font-medium text-white/80">What's included:</h4>
                <ul className="space-y-2">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-bright-orange shrink-0 mt-0.5" />
                      <span className="text-sm text-light-gray">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                {plan.limitations && (
                  <div className="pt-4">
                    <div className="flex items-center gap-1">
                      <h4 className="text-sm font-medium text-white/80">Limitations:</h4>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <HelpCircle className="h-4 w-4 text-light-gray/60" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="text-xs">Upgrade to remove these limitations</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                    <ul className="space-y-2 mt-2">
                      {plan.limitations.map((limitation) => (
                        <li key={limitation} className="flex items-start gap-2">
                          <span className="text-sm text-light-gray/60">•</span>
                          <span className="text-sm text-light-gray/60">{limitation}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </CardContent>
              <CardFooter className="pt-6">
                <Button className="w-full" variant={plan.buttonVariant}>
                  {plan.buttonText}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 p-8 border border-white/10 rounded-xl bg-gradient-to-br from-dark-gray/40 to-dark-gray/20 backdrop-blur-md animate-slide-in">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold text-white mb-2">Need a custom solution for your institution?</h3>
              <p className="text-light-gray">
                We offer special pricing and features for universities, schools, and educational organizations. 
                Contact our sales team to learn more about our institution licenses and how we can help your students succeed.
              </p>
            </div>
            <div className="flex justify-center md:justify-end">
              <Button variant="outline" size="lg">
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
