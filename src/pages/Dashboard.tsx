
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Logo } from "@/components/Logo";
import { 
  CheckCircle2, Lightbulb, MoreVertical, Send, Bell, User, ChevronDown, 
  BookOpen, Zap, Calendar, Users, Search, Bookmark, TrendingUp, Star,
  MessageSquare, Award, BarChart3, FileText, Heart, Eye, Target, FlameIcon, Coffee
} from "lucide-react";
import { useState, useEffect } from "react";

export default function Dashboard() {
  const [inputValue, setInputValue] = useState("");
  const [notifications, setNotifications] = useState(3);
  const [currentStreak, setCurrentStreak] = useState(7);
  
  return (
    <div className="min-h-screen flex flex-col bg-[#070707]">
      <header className="border-b border-white/10 bg-black/30 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <Logo />
          
          <div className="hidden md:flex items-center space-x-1">
            <Button variant="ghost" className="text-white/70 hover:text-white">Dashboard</Button>
            <Button variant="ghost" className="text-white/70 hover:text-white">Courses</Button>
            <Button variant="ghost" className="text-white/70 hover:text-white">Knowledge</Button>
            <Button variant="ghost" className="text-white/70 hover:text-white">Community</Button>
          </div>
          
          <div className="flex items-center gap-2">
            <div className="relative">
              <Button variant="ghost" className="rounded-full w-9 h-9 p-0 relative">
                <Bell size={20} className="text-white/70" />
                {notifications > 0 && (
                  <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-bright-orange flex items-center justify-center text-[10px] text-white">
                    {notifications}
                  </div>
                )}
              </Button>
            </div>
            
            <Button variant="ghost" className="hidden md:flex items-center gap-2 text-white">
              <div className="w-8 h-8 rounded-full bg-bright-orange flex items-center justify-center text-white">
                U
              </div>
              <span>User</span>
              <ChevronDown size={14} />
            </Button>
            
            <Button variant="ghost" className="md:hidden rounded-full w-9 h-9 p-0">
              <User size={20} className="text-white/70" />
            </Button>
          </div>
        </div>
      </header>
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold text-white">Welcome back, User!</h1>
            <p className="text-light-gray">Continue your learning journey where you left off.</p>
          </div>
          <div className="mt-4 md:mt-0">
            <Button className="bg-gradient-to-r from-vibrant-pink to-bright-orange text-white hover:opacity-90 transition-opacity">
              Today's Plan
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-8 space-y-6">
            {/* Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <DashboardStat 
                icon={<BookOpen className="h-5 w-5 text-bright-orange" />}
                value="12"
                label="Courses"
                bgColor="from-vibrant-pink/10 to-bright-orange/10"
              />
              <DashboardStat 
                icon={<Target className="h-5 w-5 text-bright-orange" />}
                value="86%"
                label="Goal Progress"
                bgColor="from-vibrant-pink/10 to-bright-orange/10"
              />
              <DashboardStat 
                icon={<FlameIcon className="h-5 w-5 text-bright-orange" />}
                value={`${currentStreak} days`}
                label="Current Streak"
                bgColor="from-vibrant-pink/10 to-bright-orange/10"
              />
              <DashboardStat 
                icon={<Coffee className="h-5 w-5 text-bright-orange" />}
                value="4.5 hrs"
                label="Study Time"
                bgColor="from-vibrant-pink/10 to-bright-orange/10"
              />
            </div>
            
            {/* AI Tutor Card */}
            <Card className="bg-gradient-to-br from-dark-gray/70 to-dark-gray/30 border border-vibrant-pink/30 min-h-[500px] flex flex-col">
              <CardHeader className="border-b border-white/10">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-white flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-bright-orange/20 flex items-center justify-center">
                      <MessageSquare size={18} className="text-bright-orange" />
                    </div>
                    AI-Powered Tutor
                  </CardTitle>
                  <Button variant="ghost" size="icon">
                    <MoreVertical className="h-5 w-5 text-white/70" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <div className="flex-1 space-y-4 py-4 overflow-y-auto">
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-vibrant-pink/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-vibrant-pink text-sm">You</span>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3 text-light-gray">
                      What is thermodynamics?
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-bright-orange/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-bright-orange text-sm">AI</span>
                    </div>
                    <div className="bg-white/10 rounded-lg p-3 text-white">
                      <p>Thermodynamics is the branch of physics that deals with the relationships between heat and other forms of energy. It describes how thermal energy is converted to and from other forms of energy and how it affects matter.</p>
                      <p className="mt-2">The first law of thermodynamics states that energy cannot be created or destroyed, only transformed from one form to another.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-vibrant-pink/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-vibrant-pink text-sm">You</span>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3 text-light-gray">
                      The first law of thermodynamics?
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-bright-orange/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-bright-orange text-sm">AI</span>
                    </div>
                    <div className="bg-white/10 rounded-lg p-3 text-white">
                      The first law of thermodynamics states that energy cannot be created or destroyed, only transformed from one form to another. It's also known as the Law of Conservation of Energy.
                    </div>
                  </div>
                </div>
                
                <div className="border-t border-white/10 pt-4">
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      placeholder="Ask something..."
                      className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-2 text-white placeholder:text-white/50 focus:outline-none focus:ring-1 focus:ring-bright-orange"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                    />
                    <Button size="icon" className="shrink-0 bg-gradient-to-r from-vibrant-pink to-bright-orange">
                      <Send className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Recent Activity */}
            <Card className="bg-gradient-to-br from-dark-gray/70 to-dark-gray/30 border border-vibrant-pink/30">
              <CardHeader className="border-b border-white/10">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-white flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-bright-orange/20 flex items-center justify-center">
                      <BarChart3 size={18} className="text-bright-orange" />
                    </div>
                    Recent Activity
                  </CardTitle>
                  <Button variant="ghost" size="icon">
                    <MoreVertical className="h-5 w-5 text-white/70" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="space-y-4">
                  <ActivityItem 
                    icon={<BookOpen size={16} className="text-bright-orange" />}
                    title="Completed Lesson"
                    description="Introduction to Neural Networks"
                    time="2 hours ago"
                  />
                  <ActivityItem 
                    icon={<FileText size={16} className="text-bright-orange" />}
                    title="Created Notes"
                    description="Thermodynamics Principles"
                    time="Yesterday"
                  />
                  <ActivityItem 
                    icon={<CheckCircle2 size={16} className="text-bright-orange" />}
                    title="Completed Quiz"
                    description="Physics: Forces and Motion"
                    time="Yesterday"
                  />
                  <ActivityItem 
                    icon={<Award size={16} className="text-bright-orange" />}
                    title="Earned Badge"
                    description="Consistent Learner"
                    time="3 days ago"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Right Column */}
          <div className="lg:col-span-4 space-y-6">
            {/* Study Planner */}
            <Card className="bg-gradient-to-br from-dark-gray/70 to-dark-gray/30 border border-vibrant-pink/30">
              <CardHeader className="border-b border-white/10">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-white flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-bright-orange/20 flex items-center justify-center">
                      <Calendar size={18} className="text-bright-orange" />
                    </div>
                    Study Planner
                  </CardTitle>
                  <Button variant="ghost" size="icon">
                    <MoreVertical className="h-5 w-5 text-white/70" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="mb-3 text-white">Monday: April 22</div>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 mt-0.5 rounded-full bg-bright-orange/20 flex items-center justify-center">
                      <CheckCircle2 className="h-4 w-4 text-bright-orange" />
                    </div>
                    <div>
                      <div className="text-white">Review Chapter 6 Notes</div>
                      <div className="text-sm text-light-gray">Physics - 45 minutes</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 mt-0.5 rounded-full bg-bright-orange/20 flex items-center justify-center">
                      <CheckCircle2 className="h-4 w-4 text-bright-orange" />
                    </div>
                    <div>
                      <div className="text-white">Complete math assignment</div>
                      <div className="text-sm text-light-gray">Calculus - 1 hour</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 mt-0.5 rounded border border-white/30"></div>
                    <div>
                      <div className="text-white">Read AI ethics paper</div>
                      <div className="text-sm text-light-gray">Computer Science - 2 hours</div>
                    </div>
                  </div>
                </div>
                
                <Button className="w-full mt-6 bg-gradient-to-r from-vibrant-pink/90 to-bright-orange/90 hover:opacity-90">View Schedule</Button>
              </CardContent>
            </Card>
            
            {/* Knowledge Feed */}
            <Card className="bg-gradient-to-br from-dark-gray/70 to-dark-gray/30 border border-vibrant-pink/30">
              <CardHeader className="border-b border-white/10">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-white flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-bright-orange/20 flex items-center justify-center">
                      <Lightbulb size={18} className="text-bright-orange" />
                    </div>
                    Knowledge Feed
                  </CardTitle>
                  <Button variant="ghost" size="icon">
                    <MoreVertical className="h-5 w-5 text-white/70" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="pt-4 space-y-4">
                <KnowledgeItem 
                  tag="Trending GitHub repos"
                  title="Awesome LLMs"
                  description="A curated list of Large Language Models resources: tools, papers, and tutorials."
                />
                <KnowledgeItem 
                  tag="Lecture by DeepMind"
                  title="Introduction to Neural Networks"
                  description="A comprehensive overview of neural network architectures and applications."
                />
                <KnowledgeItem 
                  tag="V.S. Ow, Paper and Kv"
                  title="An Efficient Note Taking Mode for Computer Science Students"
                  description="Research on optimized note-taking methods for technical subjects."
                />
                
                <Button variant="outline" className="w-full mt-2">Explore More</Button>
              </CardContent>
            </Card>
            
            {/* Hot Topics */}
            <Card className="bg-gradient-to-br from-dark-gray/70 to-dark-gray/30 border border-vibrant-pink/30">
              <CardHeader className="border-b border-white/10">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-white flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-bright-orange/20 flex items-center justify-center">
                      <TrendingUp size={18} className="text-bright-orange" />
                    </div>
                    Today's Hot Topics
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="flex flex-wrap gap-2">
                  <Button variant="outline" className="bg-vibrant-pink/10 hover:bg-vibrant-pink/20 border-vibrant-pink/30 text-white">
                    AI
                  </Button>
                  <Button variant="outline" className="bg-white/5 hover:bg-white/10 border-white/20 text-white">
                    Data Science
                  </Button>
                  <Button variant="outline" className="bg-white/5 hover:bg-white/10 border-white/20 text-white">
                    Blockchain
                  </Button>
                  <Button variant="outline" className="bg-white/5 hover:bg-white/10 border-white/20 text-white">
                    Machine Learning
                  </Button>
                  <Button variant="outline" className="bg-white/5 hover:bg-white/10 border-white/20 text-white">
                    Web Development
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            {/* Community */}
            <Card className="bg-gradient-to-br from-dark-gray/70 to-dark-gray/30 border border-vibrant-pink/30">
              <CardHeader className="border-b border-white/10">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-white flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-bright-orange/20 flex items-center justify-center">
                      <Users size={18} className="text-bright-orange" />
                    </div>
                    Study Groups
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="space-y-3">
                  <CommunityGroup 
                    name="Advanced AI Study Group"
                    members="24 members"
                    active={true}
                  />
                  <CommunityGroup 
                    name="Data Science Projects"
                    members="36 members"
                    active={false}
                  />
                  <CommunityGroup 
                    name="Web Development Mentors"
                    members="18 members"
                    active={true}
                  />
                </div>
                <Button variant="outline" className="w-full mt-4">Find More Groups</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}

// Dashboard stat component
function DashboardStat({ icon, value, label, bgColor }) {
  return (
    <div className={`bg-gradient-to-br ${bgColor} border border-vibrant-pink/30 rounded-lg p-4`}>
      <div className="flex items-center gap-3">
        <div className="p-2 bg-dark-gray/40 rounded-full">
          {icon}
        </div>
        <div>
          <div className="text-xl font-bold text-white">{value}</div>
          <div className="text-xs text-light-gray">{label}</div>
        </div>
      </div>
    </div>
  );
}

// Activity item component
function ActivityItem({ icon, title, description, time }) {
  return (
    <div className="flex items-start gap-3 p-3 rounded-lg bg-white/5 border border-white/10 hover:border-bright-orange/30 transition-colors">
      <div className="mt-0.5 w-8 h-8 rounded-full bg-bright-orange/10 flex items-center justify-center">
        {icon}
      </div>
      <div className="flex-1">
        <div className="text-white font-medium">{title}</div>
        <div className="text-sm text-light-gray">{description}</div>
      </div>
      <div className="text-xs text-light-gray">{time}</div>
    </div>
  );
}

// Knowledge item component
function KnowledgeItem({ tag, title, description }) {
  return (
    <div className="border border-white/10 rounded-lg p-4 hover:border-bright-orange/30 transition-colors">
      <div className="text-sm text-bright-orange mb-1">{tag}</div>
      <h4 className="text-white font-medium text-lg">{title}</h4>
      <p className="text-light-gray text-sm mt-1">{description}</p>
    </div>
  );
}

// Community group component
function CommunityGroup({ name, members, active }) {
  return (
    <div className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/10 hover:border-bright-orange/30 transition-colors">
      <div>
        <div className="text-white font-medium">{name}</div>
        <div className="text-sm text-light-gray">{members}</div>
      </div>
      <div className="flex items-center gap-2">
        {active && (
          <div className="w-2 h-2 rounded-full bg-green-500"></div>
        )}
        <Button variant="ghost" size="sm" className="text-bright-orange hover:text-bright-orange/80">
          Join
        </Button>
      </div>
    </div>
  );
}
