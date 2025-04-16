
import { PageLayout } from "@/components/PageLayout";
import { PageHeader } from "@/components/PageHeader";
import { MessageSquare, Mail, Phone, MapPin, Clock, Send, CheckCircle, Linkedin, Twitter, Github, Users, Building, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card-custom";
import { Button } from "@/components/ui/button-custom";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export default function ContactUs() {
  const [submitted, setSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // In a real app, you would send the form data to your server here
  };

  return (
    <PageLayout>
      <PageHeader 
        icon={MessageSquare}
        title="Get in Touch"
        description="Have questions about InsightHub? We're here to help! Reach out to our team for support, feedback, or partnership inquiries."
      />
      
      <section className="py-12 relative">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-vibrant-pink/10 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-bright-orange/10 rounded-full blur-3xl -z-10"></div>
        
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-7 flex flex-col gap-8">
              <Card className="bg-gradient-to-br from-dark-gray/70 to-dark-gray/30 border border-vibrant-pink/30 p-1 hover:border-bright-orange animate-slide-in h-full flex flex-col">
                <CardContent className="p-8 flex-1 flex flex-col">
                  {submitted ? (
                    <div className="flex flex-col items-center justify-center py-8 flex-1">
                      <div className="w-16 h-16 rounded-full bg-[#ff2100]/20 flex items-center justify-center mb-4">
                        <CheckCircle size={32} className="text-[#ff2100]" />
                      </div>
                      <h3 className="text-2xl font-bold mb-2 text-white">Message Sent!</h3>
                      <p className="text-light-gray text-center max-w-md mb-6">
                        Thank you for reaching out. Our team will get back to you within 24 hours.
                      </p>
                      <Button onClick={() => setSubmitted(false)} 
                        className="bg-gradient-to-r from-[#6e0415] to-[#ff2100] text-white hover:opacity-90">
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    <>
                      <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-2">
                        <Send size={20} className="text-[#ff2100]" />
                        Send Us a Message
                      </h3>
                      <form className="space-y-6 flex-1 flex flex-col" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <label htmlFor="name" className="text-white font-medium">Name</label>
                            <Input 
                              id="name" 
                              type="text" 
                              placeholder="Your name" 
                              className="bg-white/5 border-[#6e0415]/50 text-white placeholder:text-white/50 focus:border-[#ff2100]/50"
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <label htmlFor="email" className="text-white font-medium">Email</label>
                            <Input 
                              id="email" 
                              type="email" 
                              placeholder="Your email" 
                              className="bg-white/5 border-[#6e0415]/50 text-white placeholder:text-white/50 focus:border-[#ff2100]/50"
                              required
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="subject" className="text-white font-medium">Subject</label>
                          <Input 
                            id="subject" 
                            type="text" 
                            placeholder="Subject" 
                            className="bg-white/5 border-[#6e0415]/50 text-white placeholder:text-white/50 focus:border-[#ff2100]/50"
                            required
                          />
                        </div>
                        <div className="space-y-2 flex-1">
                          <label htmlFor="message" className="text-white font-medium">Message</label>
                          <Textarea 
                            id="message" 
                            placeholder="Your message" 
                            className="bg-white/5 border-[#6e0415]/50 text-white placeholder:text-white/50 min-h-[150px] flex-1"
                            required
                          />
                        </div>
                        <Button 
                          type="submit" 
                          className="w-full bg-gradient-to-r from-[#6e0415] to-[#ff2100] text-white hover:opacity-90">
                          Send Message
                        </Button>
                      </form>
                    </>
                  )}
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-dark-gray/70 to-dark-gray/30 border border-vibrant-pink/30 p-1 hover:border-bright-orange animate-slide-in-delay-1">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-2">
                    <Users size={20} className="text-[#ff2100]" />
                    Why Connect With Us?
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-gradient-to-br from-[#6e0415]/10 to-[#ff2100]/10 border border-[#6e0415]/30 rounded-lg p-4">
                      <CheckCircle size={20} className="text-[#ff2100] mb-2" />
                      <h4 className="text-white font-medium mb-1">24/7 Support</h4>
                      <p className="text-sm text-light-gray">Our dedicated team is always available to assist you.</p>
                    </div>
                    <div className="bg-gradient-to-br from-[#6e0415]/10 to-[#ff2100]/10 border border-[#6e0415]/30 rounded-lg p-4">
                      <CheckCircle size={20} className="text-[#ff2100] mb-2" />
                      <h4 className="text-white font-medium mb-1">Personalized Solutions</h4>
                      <p className="text-sm text-light-gray">We tailor our services to meet your specific needs.</p>
                    </div>
                    <div className="bg-gradient-to-br from-[#6e0415]/10 to-[#ff2100]/10 border border-[#6e0415]/30 rounded-lg p-4">
                      <CheckCircle size={20} className="text-[#ff2100] mb-2" />
                      <h4 className="text-white font-medium mb-1">Expert Team</h4>
                      <p className="text-sm text-light-gray">Our professionals bring years of industry experience.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="lg:col-span-5 flex flex-col gap-8">
              <Card className="h-full bg-gradient-to-br from-dark-gray/70 to-dark-gray/30 border border-vibrant-pink/30 p-1 hover:border-bright-orange animate-slide-in-delay-2">
                <CardContent className="p-8 h-full flex flex-col">
                  <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-2">
                    <MessageSquare size={20} className="text-[#ff2100]" />
                    Contact Information
                  </h3>
                  <div className="space-y-6 flex-1">
                    <div className="flex items-start gap-4 p-4 bg-gradient-to-br from-[#6e0415]/10 to-[#ff2100]/10 rounded-lg border border-[#6e0415]/30">
                      <div className="inline-flex items-center justify-center p-3 rounded-full bg-gradient-to-br from-[#6e0415]/20 to-[#ff2100]/20 border border-[#6e0415]/30">
                        <Mail className="h-6 w-6 text-[#ff2100]" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white">Email</h4>
                        <p className="text-light-gray">hello@insighthub.com</p>
                        <p className="text-light-gray">support@insighthub.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4 p-4 bg-gradient-to-br from-[#6e0415]/10 to-[#ff2100]/10 rounded-lg border border-[#6e0415]/30">
                      <div className="inline-flex items-center justify-center p-3 rounded-full bg-gradient-to-br from-[#6e0415]/20 to-[#ff2100]/20 border border-[#6e0415]/30">
                        <Phone className="h-6 w-6 text-[#ff2100]" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white">Phone</h4>
                        <p className="text-light-gray">+1 (800) 123-4567</p>
                        <p className="text-light-gray">Mon-Fri 9AM to 6PM EST</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4 p-4 bg-gradient-to-br from-[#6e0415]/10 to-[#ff2100]/10 rounded-lg border border-[#6e0415]/30">
                      <div className="inline-flex items-center justify-center p-3 rounded-full bg-gradient-to-br from-[#6e0415]/20 to-[#ff2100]/20 border border-[#6e0415]/30">
                        <MapPin className="h-6 w-6 text-[#ff2100]" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white">Address</h4>
                        <p className="text-light-gray">123 Innovation Way</p>
                        <p className="text-light-gray">San Francisco, CA 94107</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4 p-4 bg-gradient-to-br from-[#6e0415]/10 to-[#ff2100]/10 rounded-lg border border-[#6e0415]/30">
                      <div className="inline-flex items-center justify-center p-3 rounded-full bg-gradient-to-br from-[#6e0415]/20 to-[#ff2100]/20 border border-[#6e0415]/30">
                        <Clock className="h-6 w-6 text-[#ff2100]" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white">Hours</h4>
                        <p className="text-light-gray">Monday - Friday: 9AM - 6PM EST</p>
                        <p className="text-light-gray">Saturday - Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <h4 className="text-lg font-semibold text-white mb-4">Connect With Us</h4>
                    <div className="flex space-x-3">
                      <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1d0c0c]/80 border border-[#6e0415]/50 text-[#ff2100] hover:bg-[#ff2100]/20 hover:border-[#ff2100]/50 transition-colors">
                        <Twitter size={18} />
                      </a>
                      <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1d0c0c]/80 border border-[#6e0415]/50 text-[#ff2100] hover:bg-[#ff2100]/20 hover:border-[#ff2100]/50 transition-colors">
                        <Linkedin size={18} />
                      </a>
                      <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1d0c0c]/80 border border-[#6e0415]/50 text-[#ff2100] hover:bg-[#ff2100]/20 hover:border-[#ff2100]/50 transition-colors">
                        <Github size={18} />
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-dark-gray/70 to-dark-gray/30 border border-vibrant-pink/30 p-1 hover:border-bright-orange animate-slide-in-delay-3">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-4 text-white flex items-center gap-2">
                    <Building size={20} className="text-[#ff2100]" />
                    Enterprise Solutions
                  </h3>
                  <p className="text-light-gray mb-4">
                    Looking for enterprise-grade solutions for your organization? Our dedicated team is ready to help.
                  </p>
                  <Button variant="outline" className="w-full flex justify-center items-center border-[#6e0415] text-[#ff2100] hover:bg-[#ff2100]/10">
                    Contact Enterprise Sales <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="mt-16 animate-slide-in-delay-4">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12615.196342306962!2d-122.4194!3d37.7749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858092a4904f9f%3A0xbae1a55d969a3d7a!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2s!4v1635184106028!5m2!1sen!2s" 
              width="100%" 
              height="400" 
              style={{ border: 0, borderRadius: '0.75rem' }} 
              allowFullScreen 
              loading="lazy"
              className="border border-[#6e0415]/30 rounded-xl"
            ></iframe>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
