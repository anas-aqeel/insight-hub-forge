
import { PageLayout } from "@/components/PageLayout";
import { PageHeader } from "@/components/PageHeader";
import { BookOpen, Clock, Calendar, Star, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card-custom";
import { Button } from "@/components/ui/button-custom";

export default function Tutorials() {
  return (
    <PageLayout>
      <PageHeader 
        icon={BookOpen}
        title="Tutorials"
        description="Step-by-step guides to help you master InsightHub and enhance your learning experience."
      />
      
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {tutorials.map((tutorial, index) => (
              <Card key={index} className="overflow-hidden h-full animate-slide-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-0 flex flex-col h-full">
                  <div className="h-48 relative">
                    <img 
                      src={tutorial.image} 
                      alt={tutorial.title} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-bright-orange text-white px-3 py-1 rounded-full text-sm font-medium">
                      {tutorial.category}
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2 text-light-gray">
                        <Clock size={16} className="text-bright-orange" />
                        <span>{tutorial.duration}</span>
                      </div>
                      <div className="flex items-center gap-1 text-bright-orange">
                        {Array(5).fill(0).map((_, i) => (
                          <Star 
                            key={i}
                            size={14} 
                            className={i < tutorial.rating ? "fill-bright-orange" : ""}
                          />
                        ))}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white">{tutorial.title}</h3>
                    <p className="text-light-gray mb-6 flex-grow">{tutorial.description}</p>
                    <Button variant="outline" className="flex items-center justify-center gap-2 w-full">
                      Start Tutorial <ArrowRight size={16} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

const tutorials = [
  {
    title: "Getting Started with InsightHub",
    description: "Learn the basics of InsightHub and set up your personalized learning environment.",
    duration: "15 min",
    category: "Beginner",
    rating: 5,
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Mastering the AI Tutor",
    description: "Discover advanced techniques for getting the most out of your AI tutor sessions.",
    duration: "25 min",
    category: "Intermediate",
    rating: 4,
    image: "https://images.unsplash.com/photo-1581092160607-ee22731c552f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Creating Effective Study Plans",
    description: "Learn how to create and optimize your study schedule for maximum productivity.",
    duration: "20 min",
    category: "Beginner",
    rating: 5,
    image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Advanced Knowledge Discovery",
    description: "Master the tools for finding and organizing relevant learning resources.",
    duration: "30 min",
    category: "Advanced",
    rating: 4,
    image: "https://images.unsplash.com/photo-1553484771-047a44eee27a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Collaboration and Study Groups",
    description: "Learn how to effectively collaborate with peers and form productive study groups.",
    duration: "22 min",
    category: "Intermediate",
    rating: 5,
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "STEM Tools and Resources",
    description: "Explore specialized tools for science, technology, engineering, and mathematics.",
    duration: "35 min",
    category: "Advanced",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Note-Taking Strategies",
    description: "Discover effective techniques for taking and organizing notes with InsightHub.",
    duration: "18 min",
    category: "Beginner",
    rating: 4,
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Analytics and Progress Tracking",
    description: "Learn how to interpret your learning analytics and track your progress effectively.",
    duration: "23 min",
    category: "Intermediate",
    rating: 4,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Integrating External Resources",
    description: "Connect InsightHub with your favorite tools and platforms for a seamless experience.",
    duration: "27 min",
    category: "Advanced",
    rating: 4,
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  }
];
