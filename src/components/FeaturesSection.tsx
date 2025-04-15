
import { Lightbulb, BookOpen, LightbulbIcon, CheckSquare, PieChart, Code, Users, ListTodo, Timer, FileText, Brain, Github, Terminal, Zap, Presentation, Database, Search, BookMarked, MessageSquare, UserPlus, Share2 } from "lucide-react"
import { FeatureCard } from "./feature-cards/FeatureCard"

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 relative">
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-vibrant-pink/10 rounded-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-slide-in">
          <div className="inline-flex items-center justify-center p-3 bg-gradient-to-br from-vibrant-pink/20 to-bright-orange/20 rounded-full mb-4 border border-vibrant-pink/30">
            <Lightbulb size={32} className="text-bright-orange" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Features that Make a Difference</h2>
          <p className="text-xl text-light-gray">
            InsightHub combines cutting-edge AI technology with proven learning methodologies
            to create a comprehensive learning ecosystem tailored to your needs.
          </p>
        </div>
        
        <div className="grid md:grid-cols-1 gap-8">
          <FeatureCard
            title="Smart Learning Environment"
            description="Our AI-powered learning environment adapts to your study habits and preferences to optimize your learning experience."
            icon={BookOpen}
            imageSrc="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            features={[
              {
                title: "AI Tutor",
                description: "Get personalized help with any subject",
                icon: Brain
              },
              {
                title: "Study Planner",
                description: "Smart scheduling based on your learning patterns",
                icon: PieChart
              },
              {
                title: "Smart Summaries",
                description: "AI-generated notes and concept maps",
                icon: BookMarked
              }
            ]}
          />
          
          <FeatureCard
            title="Knowledge Discovery & Feed AI"
            description="Stay updated with personalized content recommendations and discover the most relevant learning resources."
            icon={LightbulbIcon}
            imageSrc="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            reverse={true}
            features={[
              {
                title: "Trending Topics",
                description: "Daily updates on what's hot in your field",
                icon: Zap
              },
              {
                title: "Web Search",
                description: "AI-powered search with auto-summarization",
                icon: Search
              },
              {
                title: "Knowledge Digest",
                description: "5-minute daily insights in your chosen fields",
                icon: Database
              }
            ]}
          />
          
          <FeatureCard
            title="Productivity & Workflow Tools"
            description="Enhance your study efficiency with our suite of productivity tools designed to help you focus and accomplish more."
            icon={CheckSquare}
            imageSrc="https://images.unsplash.com/photo-1506784983877-45594efa4cbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            features={[
              {
                title: "AI To-Do List",
                description: "Smart task prioritization and scheduling",
                icon: ListTodo
              },
              {
                title: "Pomodoro Timer",
                description: "Focused work sessions with break reminders",
                icon: Timer
              },
              {
                title: "Smart Notes",
                description: "AI-powered note-taking with auto-organization",
                icon: FileText
              }
            ]}
          />
          
          <FeatureCard
            title="Intelligence Layer & Analytics"
            description="Gain valuable insights into your learning patterns and progress with our advanced analytics."
            icon={PieChart}
            imageSrc="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            reverse={true}
            features={[
              {
                title: "Learning Analytics",
                description: "Visual dashboard of your progress",
                icon: Presentation
              },
              {
                title: "AI Insights",
                description: "Personalized recommendations for improvement",
                icon: Brain
              },
              {
                title: "Feedback System",
                description: "AI-powered feedback on your assignments",
                icon: MessageSquare
              }
            ]}
          />
          
          <FeatureCard
            title="Developer & STEM Toolkit"
            description="Tools specifically designed for developers and STEM students to enhance their learning and development experience."
            icon={Code}
            imageSrc="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            features={[
              {
                title: "GitHub Integration",
                description: "Repository discovery and code explanation",
                icon: Github
              },
              {
                title: "Project Scaffolder",
                description: "Quick project setup templates",
                icon: Terminal
              },
              {
                title: "Code Optimizer",
                description: "AI suggestions to improve your code",
                icon: Zap
              }
            ]}
          />
          
          <FeatureCard
            title="Community & Collaboration"
            description="Connect with peers, form study groups, and collaborate on projects to enhance your learning experience."
            icon={Users}
            imageSrc="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            reverse={true}
            features={[
              {
                title: "Peer Forums",
                description: "Smart matching by course or topic",
                icon: MessageSquare
              },
              {
                title: "Study Groups",
                description: "Find and create study groups",
                icon: UserPlus
              },
              {
                title: "Collaborative Projects",
                description: "Work together with smart role assignment",
                icon: Share2
              }
            ]}
          />
        </div>
      </div>
    </section>
  )
}
