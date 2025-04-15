
import { PageLayout } from "@/components/PageLayout";
import { PageHeader } from "@/components/PageHeader";
import { MessageSquare, Mail, Phone, MapPin, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card-custom";
import { Button } from "@/components/ui/button-custom";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactUs() {
  return (
    <PageLayout>
      <PageHeader 
        icon={MessageSquare}
        title="Get in Touch"
        description="Have questions about InsightHub? We're here to help! Reach out to our team for support, feedback, or partnership inquiries."
      />
      
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="animate-slide-in">
              <Card className="h-full">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-white">Send Us a Message</h3>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-white font-medium">Name</label>
                        <Input 
                          id="name" 
                          type="text" 
                          placeholder="Your name" 
                          className="bg-white/5 border-white/10 text-white placeholder:text-white/50"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-white font-medium">Email</label>
                        <Input 
                          id="email" 
                          type="email" 
                          placeholder="Your email" 
                          className="bg-white/5 border-white/10 text-white placeholder:text-white/50"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-white font-medium">Subject</label>
                      <Input 
                        id="subject" 
                        type="text" 
                        placeholder="Subject" 
                        className="bg-white/5 border-white/10 text-white placeholder:text-white/50"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-white font-medium">Message</label>
                      <Textarea 
                        id="message" 
                        placeholder="Your message" 
                        className="bg-white/5 border-white/10 text-white placeholder:text-white/50 min-h-[150px]"
                      />
                    </div>
                    <Button type="submit" className="w-full">Send Message</Button>
                  </form>
                </CardContent>
              </Card>
            </div>
            
            <div className="animate-slide-in-delay-1">
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-6 text-white">Contact Information</h3>
                <div className="space-y-6">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="inline-flex items-center justify-center p-3 rounded-full bg-gradient-to-br from-vibrant-pink/20 to-bright-orange/20 border border-vibrant-pink/30">
                          <Mail className="h-6 w-6 text-bright-orange" />
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-white">Email</h4>
                          <p className="text-light-gray">hello@insighthub.com</p>
                          <p className="text-light-gray">support@insighthub.com</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="inline-flex items-center justify-center p-3 rounded-full bg-gradient-to-br from-vibrant-pink/20 to-bright-orange/20 border border-vibrant-pink/30">
                          <Phone className="h-6 w-6 text-bright-orange" />
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-white">Phone</h4>
                          <p className="text-light-gray">+1 (800) 123-4567</p>
                          <p className="text-light-gray">Mon-Fri 9AM to 6PM EST</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="inline-flex items-center justify-center p-3 rounded-full bg-gradient-to-br from-vibrant-pink/20 to-bright-orange/20 border border-vibrant-pink/30">
                          <MapPin className="h-6 w-6 text-bright-orange" />
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-white">Address</h4>
                          <p className="text-light-gray">123 Innovation Way</p>
                          <p className="text-light-gray">San Francisco, CA 94107</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="inline-flex items-center justify-center p-3 rounded-full bg-gradient-to-br from-vibrant-pink/20 to-bright-orange/20 border border-vibrant-pink/30">
                          <Clock className="h-6 w-6 text-bright-orange" />
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-white">Hours</h4>
                          <p className="text-light-gray">Monday - Friday: 9AM - 6PM EST</p>
                          <p className="text-light-gray">Saturday - Sunday: Closed</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
