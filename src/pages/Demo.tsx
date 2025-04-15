
import { PageLayout } from "@/components/PageLayout";
import { PageHeader } from "@/components/PageHeader";
import { Play, Download, Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card-custom";
import { Button } from "@/components/ui/button-custom";

export default function Demo() {
  return (
    <PageLayout>
      <PageHeader 
        icon={Play}
        title="Watch InsightHub in Action"
        description="See how our AI-powered learning platform transforms the way students study and learn."
      />
      
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Card className="mb-16 animate-slide-in overflow-hidden">
            <CardContent className="p-0">
              <div className="aspect-w-16 aspect-h-9 w-full">
                <iframe 
                  width="100%" 
                  height="100%" 
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                  title="InsightHub Demo" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full"
                ></iframe>
              </div>
            </CardContent>
          </Card>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="animate-slide-in">
              <h2 className="text-3xl font-bold mb-6 text-white">Experience the Future of Learning</h2>
              <p className="text-light-gray mb-6">
                InsightHub combines cutting-edge AI technology with proven learning methodologies to create a comprehensive learning ecosystem tailored to your needs.
              </p>
              <p className="text-light-gray mb-6">
                Our platform adapts to your learning style, provides personalized study plans, and helps you master complex subjects with ease.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-bright-orange/20 p-1.5 rounded-full shrink-0 mt-0.5 border border-bright-orange/30">
                    <Check className="h-4 w-4 text-bright-orange" />
                  </div>
                  <div>
                    <p className="font-medium text-white">Personalized Learning Experience</p>
                    <p className="text-sm text-light-gray">Tailored study plans based on your learning style and goals</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="bg-bright-orange/20 p-1.5 rounded-full shrink-0 mt-0.5 border border-bright-orange/30">
                    <Check className="h-4 w-4 text-bright-orange" />
                  </div>
                  <div>
                    <p className="font-medium text-white">AI-Powered Tutoring</p>
                    <p className="text-sm text-light-gray">Get help with any subject, anytime</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="bg-bright-orange/20 p-1.5 rounded-full shrink-0 mt-0.5 border border-bright-orange/30">
                    <Check className="h-4 w-4 text-bright-orange" />
                  </div>
                  <div>
                    <p className="font-medium text-white">Smart Content Discovery</p>
                    <p className="text-sm text-light-gray">Always stay updated with the most relevant learning resources</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Button className="flex items-center gap-2">
                  <Download size={18} />
                  Download Product Brochure
                </Button>
              </div>
            </div>
            
            <div className="animate-slide-in-delay-1">
              <Card className="h-full">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-white">Schedule a Live Demo</h3>
                  <p className="text-light-gray mb-6">
                    Want to see InsightHub in action with a personalized walkthrough? Schedule a live demo with our team.
                  </p>
                  <form className="space-y-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-white font-medium">Name</label>
                      <input 
                        id="name" 
                        type="text" 
                        placeholder="Your name" 
                        className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/50"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-white font-medium">Email</label>
                      <input 
                        id="email" 
                        type="email" 
                        placeholder="Your email" 
                        className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/50"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="organization" className="text-white font-medium">Organization</label>
                      <input 
                        id="organization" 
                        type="text" 
                        placeholder="Your organization" 
                        className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/50"
                      />
                    </div>
                    <Button type="submit" className="w-full">Schedule Now</Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
