
import { PageLayout } from "@/components/PageLayout";
import { PageHeader } from "@/components/PageHeader";
import { Video, Calendar, Clock, User, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card-custom";
import { Button } from "@/components/ui/button-custom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Webinars() {
  return (
    <PageLayout>
      <PageHeader 
        icon={Video}
        title="Webinars"
        description="Join our live and on-demand webinars to learn more about AI-powered learning and how to get the most out of InsightHub."
      />
      
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="upcoming" className="animate-slide-in">
            <div className="flex justify-center mb-8">
              <TabsList className="bg-white/5 border border-white/10">
                <TabsTrigger value="upcoming" className="text-white data-[state=active]:bg-bright-orange data-[state=active]:text-white">Upcoming Webinars</TabsTrigger>
                <TabsTrigger value="ondemand" className="text-white data-[state=active]:bg-bright-orange data-[state=active]:text-white">On-Demand Webinars</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="upcoming">
              <div className="grid md:grid-cols-2 gap-8">
                {upcomingWebinars.map((webinar, index) => (
                  <Card key={index} className="h-full animate-slide-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <CardContent className="p-0 flex flex-col h-full">
                      <div className="h-48 relative">
                        <img 
                          src={webinar.image} 
                          alt={webinar.title} 
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-4 right-4 bg-bright-orange text-white px-3 py-1 rounded-full text-sm font-medium">
                          {webinar.category}
                        </div>
                      </div>
                      <div className="p-6 flex flex-col flex-grow">
                        <h3 className="text-xl font-bold mb-4 text-white">{webinar.title}</h3>
                        <div className="flex flex-col gap-3 mb-6">
                          <div className="flex items-center gap-2 text-light-gray">
                            <Calendar size={16} className="text-bright-orange" />
                            <span>{webinar.date}</span>
                          </div>
                          <div className="flex items-center gap-2 text-light-gray">
                            <Clock size={16} className="text-bright-orange" />
                            <span>{webinar.time}</span>
                          </div>
                          <div className="flex items-center gap-2 text-light-gray">
                            <User size={16} className="text-bright-orange" />
                            <span>{webinar.presenter}</span>
                          </div>
                        </div>
                        <p className="text-light-gray mb-6 flex-grow">{webinar.description}</p>
                        <Button className="w-full">Register Now</Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="ondemand">
              <div className="grid md:grid-cols-3 gap-8">
                {onDemandWebinars.map((webinar, index) => (
                  <Card key={index} className="h-full animate-slide-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <CardContent className="p-0 flex flex-col h-full">
                      <div className="h-48 relative">
                        <img 
                          src={webinar.image} 
                          alt={webinar.title} 
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-4 right-4 bg-bright-orange text-white px-3 py-1 rounded-full text-sm font-medium">
                          {webinar.category}
                        </div>
                      </div>
                      <div className="p-6 flex flex-col flex-grow">
                        <h3 className="text-lg font-bold mb-3 text-white">{webinar.title}</h3>
                        <div className="flex items-center gap-2 text-light-gray mb-3">
                          <Clock size={16} className="text-bright-orange" />
                          <span>{webinar.duration}</span>
                        </div>
                        <p className="text-light-gray mb-6 flex-grow">{webinar.description}</p>
                        <Button variant="outline" className="w-full flex items-center justify-center gap-2">
                          <ExternalLink size={16} />
                          Watch Now
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </PageLayout>
  );
}

const upcomingWebinars = [
  {
    title: "Mastering AI-Powered Learning: A Deep Dive into InsightHub",
    date: "April 25, 2025",
    time: "2:00 PM - 3:30 PM EST",
    presenter: "Dr. Emma Thompson, Chief Education Officer",
    description: "Join our CEO for an in-depth look at how InsightHub's AI technology adapts to your learning style and helps you master complex subjects with ease.",
    category: "Product Tour",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Effective Study Techniques for the Digital Age",
    date: "May 3, 2025",
    time: "1:00 PM - 2:00 PM EST",
    presenter: "Sarah Johnson, Learning Specialist",
    description: "Discover evidence-based study techniques that leverage technology to maximize retention and understanding in today's fast-paced academic environment.",
    category: "Educational",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "The Future of Educational Technology",
    date: "May 10, 2025",
    time: "3:00 PM - 4:00 PM EST",
    presenter: "Alex Chen, Director of Research",
    description: "Explore emerging trends in educational technology and how AI, machine learning, and data analytics are shaping the future of learning.",
    category: "Thought Leadership",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "InsightHub for Educators: Empowering Teachers with AI",
    date: "May 17, 2025",
    time: "2:00 PM - 3:00 PM EST",
    presenter: "Michael Brown, Education Solutions Lead",
    description: "Learn how educators can leverage InsightHub to enhance teaching, provide personalized support, and track student progress more effectively.",
    category: "Product Tour",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
  }
];

const onDemandWebinars = [
  {
    title: "Getting Started with InsightHub",
    duration: "45 minutes",
    description: "A comprehensive overview of InsightHub's core features and how to set up your personalized learning environment.",
    category: "Tutorial",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Advanced AI Tutoring Features",
    duration: "60 minutes",
    description: "Deep dive into the advanced capabilities of our AI tutor and how to maximize its effectiveness for your studies.",
    category: "Product Deep Dive",
    image: "https://images.unsplash.com/photo-1581092160607-ee22731c552f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Optimizing Your Study Schedule",
    duration: "30 minutes",
    description: "Learn how to leverage InsightHub's smart scheduling features to create an optimal study plan based on your goals.",
    category: "Best Practices",
    image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Mastering Knowledge Discovery",
    duration: "50 minutes",
    description: "Discover how to use our content discovery engine to find the most relevant resources for your learning needs.",
    category: "Product Deep Dive",
    image: "https://images.unsplash.com/photo-1553484771-047a44eee27a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Collaborative Learning Tools",
    duration: "40 minutes",
    description: "Explore the community and collaboration features that help you connect with peers and learn together.",
    category: "Tutorial",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "STEM Tools and Resources",
    duration: "55 minutes",
    description: "A specialized webinar for STEM students on using the developer toolkit and subject-specific features.",
    category: "Best Practices",
    image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  }
];
