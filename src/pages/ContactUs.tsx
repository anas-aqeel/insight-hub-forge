
import { PageLayout } from "@/components/PageLayout";
import { PageHeader } from "@/components/PageHeader";
import { Mail, MessageSquare, Phone, MapPin, Clock, Building, Send } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card-custom";
import { Button } from "@/components/ui/button-custom";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "sonner";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    role: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRoleChange = (value: string) => {
    setFormData((prev) => ({ ...prev, role: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success("Thank you for your message! We'll get back to you soon.");
      setFormData({
        name: "",
        email: "",
        subject: "",
        role: "",
        message: ""
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <PageLayout>
      <PageHeader 
        icon={Mail}
        title="Contact Us"
        description="Have questions or need assistance? We're here to help."
      />
      
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 mb-16 max-w-5xl mx-auto">
            <Card className="overflow-hidden bg-gradient-to-br from-[#1d0c0c]/90 to-[#230606]/80 border-[#6e0415]/70 h-full">
              <CardContent className="p-0 h-full">
                <div className="p-8 flex flex-col h-full">
                  <h3 className="text-2xl font-bold mb-6 text-white">Get In Touch</h3>
                  <p className="text-light-gray mb-8">
                    Fill out the form and our team will get back to you within 24 hours.
                  </p>
                  
                  <form onSubmit={handleSubmit} className="space-y-6 flex-grow">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-white">Full Name</label>
                      <Input 
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                        className="bg-[#070707] border-[#520a1d] text-white placeholder:text-white/50 focus:ring-[#ff2100]/30 focus:border-[#ff2100]/50"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-white">Email Address</label>
                      <Input 
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your email"
                        required
                        className="bg-[#070707] border-[#520a1d] text-white placeholder:text-white/50 focus:ring-[#ff2100]/30 focus:border-[#ff2100]/50"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-white">Subject</label>
                      <Input 
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="What's this about?"
                        required
                        className="bg-[#070707] border-[#520a1d] text-white placeholder:text-white/50 focus:ring-[#ff2100]/30 focus:border-[#ff2100]/50"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="role" className="text-white">Your Role</label>
                      <Select onValueChange={handleRoleChange} value={formData.role}>
                        <SelectTrigger id="role" className="bg-[#070707] border-[#520a1d] text-white placeholder:text-white/50 focus:ring-[#ff2100]/30 focus:border-[#ff2100]/50">
                          <SelectValue placeholder="Select your role" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="student">Student</SelectItem>
                          <SelectItem value="teacher">Teacher</SelectItem>
                          <SelectItem value="developer">Developer</SelectItem>
                          <SelectItem value="researcher">Researcher</SelectItem>
                          <SelectItem value="parent">Parent</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-white">Message</label>
                      <Textarea 
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us how we can help you"
                        rows={5}
                        required
                        className="bg-[#070707] border-[#520a1d] text-white placeholder:text-white/50 focus:ring-[#ff2100]/30 focus:border-[#ff2100]/50 resize-none"
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-[#6e0415] to-[#ff2100] text-white hover:opacity-90 transition-opacity"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"} <Send className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-[#1d0c0c]/90 to-[#230606]/80 border-[#6e0415]/70 h-full">
              <CardContent className="p-8 flex flex-col h-full">
                <h3 className="text-2xl font-bold mb-6 text-white">Contact Information</h3>
                <p className="text-light-gray mb-8">
                  Have questions about InsightHub? Our team is here to help. You can reach out to us through any of the channels below.
                </p>
                
                <div className="space-y-6 flex-grow">
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-br from-vibrant-pink/20 to-bright-orange/20 p-3 rounded-full">
                      <Mail className="h-6 w-6 text-bright-orange" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Email Us</h4>
                      <p className="text-light-gray">support@insighthub.com</p>
                      <p className="text-light-gray">partnerships@insighthub.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-br from-vibrant-pink/20 to-bright-orange/20 p-3 rounded-full">
                      <Phone className="h-6 w-6 text-bright-orange" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Call Us</h4>
                      <p className="text-light-gray">+1 (800) 123-4567</p>
                      <p className="text-light-gray">Monday to Friday, 9am - 6pm EST</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-br from-vibrant-pink/20 to-bright-orange/20 p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-bright-orange" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Visit Us</h4>
                      <p className="text-light-gray">
                        123 Innovation Drive<br />
                        Suite 456<br />
                        San Francisco, CA 94103
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="border-t border-vibrant-pink/20 pt-6 mt-8">
                  <h4 className="font-semibold text-white mb-4">Business Hours</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-bright-orange" />
                      <span className="text-light-gray">Monday - Friday</span>
                    </div>
                    <span className="text-light-gray">9:00 AM - 6:00 PM EST</span>
                    
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-bright-orange" />
                      <span className="text-light-gray">Saturday</span>
                    </div>
                    <span className="text-light-gray">10:00 AM - 4:00 PM EST</span>
                    
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-bright-orange" />
                      <span className="text-light-gray">Sunday</span>
                    </div>
                    <span className="text-light-gray">Closed</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="max-w-5xl mx-auto mt-20">
            <h2 className="text-3xl font-bold mb-12 text-center text-white">Frequently Asked Questions</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-gradient-to-br from-[#1d0c0c]/50 to-[#230606]/40 border border-vibrant-pink/20 rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-4 text-white">{faq.question}</h3>
                  <p className="text-light-gray">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

const faqs = [
  {
    question: "How quickly can I expect a response?",
    answer: "We aim to respond to all inquiries within 24 hours during business days. For urgent matters, we recommend calling our support line."
  },
  {
    question: "Do you offer technical support?",
    answer: "Yes, our technical support team is available Monday through Friday from 9am to 6pm EST. You can reach them via email at tech@insighthub.com."
  },
  {
    question: "Can I schedule a demo of InsightHub?",
    answer: "Absolutely! Fill out the contact form and select 'Demo Request' as the subject, or email us directly at demos@insighthub.com."
  },
  {
    question: "How do I report a bug or suggest a feature?",
    answer: "We welcome your feedback! Please use the contact form and select 'Bug Report' or 'Feature Suggestion' as the subject, or email feedback@insighthub.com."
  }
];
