
import { PageLayout } from "@/components/PageLayout";
import { Calendar, User, ArrowLeft, ArrowRight, MessageSquare, Share2, Bookmark, ThumbsUp, Tag } from "lucide-react";
import { Button } from "@/components/ui/button-custom";
import { Card, CardContent } from "@/components/ui/card-custom";
import { Link } from "react-router-dom";

export default function BlogDetail() {
  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center mb-6 text-sm text-light-gray">
            <Link to="/" className="hover:text-bright-orange transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/blog" className="hover:text-bright-orange transition-colors">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-bright-orange">How AI is Transforming Education in 2025</span>
          </div>
          
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">How AI is Transforming Education in 2025</h1>
            <div className="flex items-center flex-wrap gap-4 text-light-gray">
              <div className="flex items-center gap-2">
                <Calendar size={18} className="text-bright-orange" />
                <span>April 10, 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <User size={18} className="text-bright-orange" />
                <span>Dr. Emma Thompson</span>
              </div>
              <div className="flex items-center gap-2">
                <Tag size={18} className="text-bright-orange" />
                <span>AI</span>
                <span>•</span>
                <span>Education</span>
                <span>•</span>
                <span>Technology</span>
              </div>
            </div>
          </div>
          
          {/* Featured Image */}
          <div className="relative w-full h-[400px] mb-10 rounded-xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
              alt="How AI is Transforming Education in 2025" 
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Social Share & Actions Bar */}
          <div className="flex justify-between items-center mb-8 border-y border-vibrant-pink/20 py-4">
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 hover:text-bright-orange transition-colors text-light-gray">
                <ThumbsUp size={18} />
                <span>245</span>
              </button>
              <button className="flex items-center gap-2 hover:text-bright-orange transition-colors text-light-gray">
                <MessageSquare size={18} />
                <span>56 Comments</span>
              </button>
            </div>
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 hover:text-bright-orange transition-colors text-light-gray">
                <Bookmark size={18} />
                <span>Save</span>
              </button>
              <button className="flex items-center gap-2 hover:text-bright-orange transition-colors text-light-gray">
                <Share2 size={18} />
                <span>Share</span>
              </button>
            </div>
          </div>
          
          {/* Article Content */}
          <article className="prose prose-invert prose-lg max-w-none mb-12">
            <p className="text-lg text-light-gray leading-relaxed">
              Artificial intelligence has been steadily reshaping various aspects of our lives, and education is no exception. In 2025, we're witnessing a revolutionary transformation in how students learn, teachers teach, and educational institutions operate. The integration of AI technologies into education has reached new heights, offering unprecedented opportunities and challenges.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4 text-white">Personalized Learning Experiences</h2>
            <p className="text-light-gray leading-relaxed">
              One of the most significant impacts of AI in education is the ability to provide truly personalized learning experiences. AI-powered platforms can now analyze students' learning patterns, strengths, weaknesses, and preferences to create customized learning paths. This level of personalization was unimaginable just a few years ago.
            </p>
            <p className="text-light-gray leading-relaxed">
              InsightHub's AI Tutor, for example, adapts in real-time to each student's progress, adjusting the difficulty level, providing targeted explanations, and suggesting relevant resources. This ensures that every student receives the support they need when they need it, making education more effective and engaging.
            </p>
            
            <div className="bg-gradient-to-br from-[#1d0c0c]/50 to-[#230606]/40 border border-vibrant-pink/20 rounded-xl p-6 my-8">
              <blockquote className="italic text-white">
                "The future of education lies in the perfect blend of human expertise and artificial intelligence. AI doesn't replace teachers; it amplifies their impact by handling routine tasks and providing data-driven insights, allowing educators to focus on what they do best: inspiring and mentoring students."
              </blockquote>
              <p className="text-right text-bright-orange mt-4">- Dr. Sarah Johnson, Education Futurist</p>
            </div>
            
            <h2 className="text-2xl font-bold mt-8 mb-4 text-white">Smart Content and Knowledge Discovery</h2>
            <p className="text-light-gray leading-relaxed">
              AI is revolutionizing how educational content is created, discovered, and consumed. Advanced natural language processing algorithms can now generate comprehensive study materials, summarize complex texts, and create interactive exercises tailored to different learning styles.
            </p>
            <p className="text-light-gray leading-relaxed">
              Knowledge discovery systems powered by AI can sift through vast amounts of information to identify the most relevant and credible resources for students. This helps address the challenge of information overload, allowing students to focus on quality content that aligns with their learning objectives.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4 text-white">Advanced Analytics and Progress Tracking</h2>
            <p className="text-light-gray leading-relaxed">
              Educational institutions are leveraging AI-driven analytics to gain deeper insights into student performance, engagement, and needs. These systems can identify patterns and trends that might be invisible to human observers, enabling early intervention for students who may be struggling.
            </p>
            <p className="text-light-gray leading-relaxed">
              For students, AI-powered dashboards provide clear visualizations of their progress, highlighting areas of mastery and areas that need attention. This transparency empowers students to take ownership of their learning journey and make informed decisions about where to focus their efforts.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4 text-white">Challenges and Considerations</h2>
            <p className="text-light-gray leading-relaxed">
              Despite the tremendous benefits, the integration of AI in education comes with important challenges and considerations. Privacy concerns, data security, algorithmic bias, and equitable access are all critical issues that need to be addressed as AI becomes more prevalent in educational settings.
            </p>
            <p className="text-light-gray leading-relaxed">
              It's crucial for educational institutions to implement AI systems ethically and transparently, with adequate safeguards to protect student data and ensure fairness. Additionally, we must ensure that AI tools are accessible to all students, regardless of socioeconomic status or geographic location.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4 text-white">Conclusion: The Future of Learning</h2>
            <p className="text-light-gray leading-relaxed">
              As we move further into 2025, the synergy between human educators and AI technologies will continue to redefine what's possible in education. The most successful approaches will leverage the strengths of both: AI's ability to process vast amounts of data and provide personalized experiences, combined with human educators' creativity, empathy, and critical thinking.
            </p>
            <p className="text-light-gray leading-relaxed">
              By embracing the transformative potential of AI while addressing its challenges thoughtfully, we can create educational experiences that are more engaging, effective, and equitable than ever before.
            </p>
          </article>
          
          {/* Author Bio */}
          <div className="bg-gradient-to-br from-[#1d0c0c]/90 to-[#230606]/80 border border-vibrant-pink/30 rounded-xl p-6 mb-12">
            <div className="flex items-center gap-6">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-vibrant-pink/20 to-bright-orange/20 flex items-center justify-center border-2 border-bright-orange">
                <span className="text-4xl text-bright-orange">ET</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-1">Dr. Emma Thompson</h3>
                <p className="text-bright-orange mb-2">Educational Technology Researcher</p>
                <p className="text-light-gray text-sm">
                  Dr. Thompson specializes in the intersection of artificial intelligence and education. With over 15 years of experience in educational research, she focuses on developing ethical and effective AI systems to enhance learning outcomes for students worldwide.
                </p>
              </div>
            </div>
          </div>
          
          {/* Related Articles */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-white">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((_, index) => (
                <Card key={index} className="overflow-hidden bg-gradient-to-br from-[#1d0c0c]/70 to-[#230606]/30 border-vibrant-pink/30 hover:border-bright-orange transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="h-40">
                      <img 
                        src={`https://images.unsplash.com/photo-${index === 0 ? '1581092160607-ee22731c552f' : index === 1 ? '1522202176988-66273c2fd55f' : '1506784983877-45594efa4cbe'}?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80`} 
                        alt="Related article" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <div className="flex items-center gap-2 text-xs text-light-gray mb-2">
                        <Calendar size={12} className="text-bright-orange" />
                        <span>April {index + 1}, 2025</span>
                      </div>
                      <h3 className="text-lg font-bold mb-2 text-white">
                        {index === 0 ? 'The Role of AI in Student Assessment' : index === 1 ? 'Virtual Reality Classrooms: The New Frontier' : 'Ethical Considerations for AI in Education'}
                      </h3>
                      <Link to="#" className="text-bright-orange text-sm flex items-center gap-1 hover:underline">
                        Read More <ArrowRight size={12} />
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          {/* Navigation */}
          <div className="flex justify-between items-center border-t border-vibrant-pink/20 pt-8">
            <Button variant="outline" className="flex items-center gap-2" asChild>
              <Link to="#">
                <ArrowLeft size={16} />
                Previous Article
              </Link>
            </Button>
            <Button variant="outline" className="flex items-center gap-2" asChild>
              <Link to="#">
                Next Article
                <ArrowRight size={16} />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
