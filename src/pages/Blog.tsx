
import { PageLayout } from "@/components/PageLayout";
import { PageHeader } from "@/components/PageHeader";
import { BookOpen, Calendar, User, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card-custom";
import { Button } from "@/components/ui/button-custom";
import { Link } from "react-router-dom";

export default function Blog() {
  return (
    <PageLayout>
      <PageHeader 
        icon={BookOpen}
        title="InsightHub Blog"
        description="Stay updated with the latest insights, tips, and news about education, learning, and AI technology."
      />
      
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="md:col-span-2 animate-slide-in">
              <Card className="overflow-hidden h-full">
                <CardContent className="p-0 h-full">
                  <div className="h-64 md:h-72">
                    <img 
                      src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                      alt="Featured post" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8 flex flex-col h-full">
                    <div className="flex items-center gap-4 text-sm text-light-gray mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} className="text-bright-orange" />
                        <span>April 10, 2025</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <User size={14} className="text-bright-orange" />
                        <span>Dr. Emma Thompson</span>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-white">How AI is Transforming Education in 2025</h3>
                    <p className="text-light-gray mb-6">
                      Discover how artificial intelligence is revolutionizing the way students learn, teachers teach, and educational institutions operate. From personalized learning paths to advanced analytics, AI is making education more accessible and effective than ever before.
                    </p>
                    <Button variant="outline" className="flex items-center gap-2 self-start mt-auto">
                      <Link to="/blog/ai-transforming-education">Read More</Link> <ArrowRight size={16} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="space-y-8 animate-slide-in-delay-1">
              {latestPosts.map((post, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="h-40">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-4 text-xs text-light-gray mb-2">
                        <div className="flex items-center gap-1">
                          <Calendar size={12} className="text-bright-orange" />
                          <span>{post.date}</span>
                        </div>
                      </div>
                      <h3 className="text-lg font-bold mb-2 text-white">{post.title}</h3>
                      <Link to="#" className="text-bright-orange text-sm flex items-center gap-1 hover:underline">
                        Read More <ArrowRight size={12} />
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          <h2 className="text-3xl font-bold mb-8 text-white">Recent Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recentPosts.map((post, index) => (
              <Card key={index} className="overflow-hidden animate-slide-in flex flex-col" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-0 flex flex-col h-full">
                  <div className="h-48">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center gap-4 text-sm text-light-gray mb-2">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} className="text-bright-orange" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <User size={14} className="text-bright-orange" />
                        <span>{post.author}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white">{post.title}</h3>
                    <p className="text-light-gray mb-4">{post.excerpt}</p>
                    <Link to="#" className="text-bright-orange flex items-center gap-1 hover:underline mt-auto">
                      Read More <ArrowRight size={16} />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="flex justify-center mt-12">
            <Button variant="outline">View All Articles</Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

const latestPosts = [
  {
    title: "5 Study Techniques Backed by Neuroscience",
    date: "April 8, 2025",
    image: "https://images.unsplash.com/photo-1565073182887-6bcefbe225b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Using AI to Overcome Learning Challenges",
    date: "April 5, 2025",
    image: "https://images.unsplash.com/photo-1581092160607-ee22731c552f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "The Future of Remote Learning and Education",
    date: "April 1, 2025",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  }
];

const recentPosts = [
  {
    title: "How to Build Effective Study Habits",
    excerpt: "Learn how to develop and maintain effective study habits that can improve your learning experience and academic performance.",
    date: "March 28, 2025",
    author: "Jamie Rodriguez",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "The Role of AI in Personalized Education",
    excerpt: "Explore how artificial intelligence is enabling truly personalized learning experiences for students around the world.",
    date: "March 25, 2025",
    author: "Dr. Alex Chen",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Balancing Study, Work, and Life",
    excerpt: "Tips and strategies for maintaining a healthy balance between your academic pursuits, career goals, and personal life.",
    date: "March 22, 2025",
    author: "Sarah Johnson",
    image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "The Benefits of Collaborative Learning",
    excerpt: "Discover why studying with peers can enhance your understanding, retention, and enjoyment of complex subjects.",
    date: "March 19, 2025",
    author: "Michael Thompson",
    image: "https://images.unsplash.com/photo-1581092160607-ee22731c552f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Latest Trends in Educational Technology",
    excerpt: "Stay updated with the newest educational technologies that are shaping the future of learning and teaching.",
    date: "March 16, 2025",
    author: "Priya Patel",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Mastering the Art of Note-taking",
    excerpt: "Effective note-taking strategies that can help you retain information better and improve your study efficiency.",
    date: "March 13, 2025",
    author: "David Wilson",
    image: "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  }
];
