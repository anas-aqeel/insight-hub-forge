import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Logo } from "@/components/Logo";
import { 
  CheckCircle2, Lightbulb, MoreVertical, Send, Bell, User, ChevronDown, 
  BookOpen, Zap, Calendar, Users, Search, Bookmark, TrendingUp, Star,
  MessageSquare, Award, BarChart3, FileText, Heart, Eye, Target, FlameIcon, Coffee
} from "lucide-react";
import { useState, useEffect } from "react";
import { 
  Popover, 
  PopoverContent, 
  PopoverTrigger 
} from "@/components/ui/popover";

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
            <Button 
              variant="ghost" 
              className="text-white/70 hover:text-white hover:bg-[#23060a] hover:border hover:border-[#6e0415]"
            >
              Dashboard
            </Button>
            <Button 
              variant="ghost" 
              className="text-white/70 hover:text-white hover:bg-[#23060a] hover:border hover:border-[#6e0415]"
            >
              Courses
            </Button>
            <Button 
              variant="ghost" 
              className="text-white/70 hover:text-white hover:bg-[#23060a] hover:border hover:border-[#6e0415]"
            >
              Knowledge
            </Button>
            <Button 
              variant="ghost" 
              className="text-white/70 hover:text-white hover:bg-[#23060a] hover:border hover:border-[#6e0415]"
            >
              Community
            </Button>
          </div>
          
          <div className="flex items-center gap-2">
            <div className="relative">
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="ghost" className="rounded-full w-9 h-9 p-0 relative">
                    <Bell size={20} className="text-white/70" />
                    {notifications > 0 && (
                      <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-bright-orange flex items-center justify-center text-[10px] text-white">
                        {notifications}
                      </div>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-80 bg-[#1d0c0c] border border-[#6e0415] p-0">
                  <div className="p-4 border-b border-white/10">
                    <h3 className="font-semibold text-white flex items-center justify-between">
                      Notifications
                      <span className="text-xs bg-[#ff2100]/20 text-[#ff2100] px-2 py-1 rounded-full">
                        {notifications} New
                      </span>
                    </h3>
                  </div>
                  <div className="p-2 max-h-80 overflow-y-auto">
                    <div className="p-3 hover:bg-white/5 rounded-lg transition-colors border-l-2 border-[#ff2100] bg-[#ff2100]/5 mb-2">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-[#6e0415]/30 rounded-full flex items-center justify-center flex-shrink-0">
                          <MessageSquare size={14} className="text-[#ff2100]" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-white">New message from tutor</p>
                          <p className="text-xs text-white/70">Your question about thermodynamics has been answered</p>
                          <p className="text-xs text-white/50 mt-1">10 minutes ago</p>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 hover:bg-white/5 rounded-lg transition-colors border-l-2 border-[#ff2100] bg-[#ff2100]/5 mb-2">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-[#6e0415]/30 rounded-full flex items-center justify-center flex-shrink-0">
                          <Target size={14} className="text-[#ff2100]" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-white">Study goal achieved</p>
                          <p className="text-xs text-white/70">You've completed your daily study goal</p>
                          <p className="text-xs text-white/50 mt-1">3 hours ago</p>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 hover:bg-white/5 rounded-lg transition-colors border-l-2 border-[#ff2100] bg-[#ff2100]/5">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-[#6e0415]/30 rounded-full flex items-center justify-center flex-shrink-0">
                          <BookOpen size={14} className="text-[#ff2100]" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-white">New course available</p>
                          <p className="text-xs text-white/70">Advanced Thermodynamics is now available</p>
                          <p className="text-xs text-white/50 mt-1">Yesterday</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-2 border-t border-white/10">
                    <Button variant="ghost" className="w-full text-white/70 hover:text-[#ff2100] hover:bg-[#ff2100]/10">
                      View all notifications
                    </Button>
                  </div>
                </PopoverContent>
              </Popover>
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
            <Button className="bg-gradient-to-r from-[#6e0415] to-[#ff2100] text-white hover:opacity-90 transition-opacity">
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
                icon={<BookOpen className="h-5 w-5 text-[#ff2100]" />}
                value="12"
                label="Courses"
                bgColor="from-[#6e0415]/10 to-[#ff2100]/10"
                borderColor="border-[#6e0415]"
                image={null}
              />
              <DashboardStat 
                icon={<Target className="h-5 w-5 text-[#ff2100]" />}
                value="86%"
                label="Goal Progress"
                bgColor="from-[#6e0415]/10 to-[#ff2100]/10"
                borderColor="border-[#6e0415]"
                image={null}
              />
              <DashboardStat 
                icon={<FlameIcon className="h-5 w-5 text-[#ff2100]" />}
                value={`${currentStreak} days`}
                label="Current Streak"
                bgColor="from-[#6e0415]/10 to-[#ff2100]/10"
                borderColor="border-[#6e0415]"
                image={null}
              />
              <DashboardStat 
                icon={<Coffee className="h-5 w-5 text-[#ff2100]" />}
                value="4.5 hrs"
                label="Study Time"
                bgColor="from-[#6e0415]/10 to-[#ff2100]/10"
                borderColor="border-[#6e0415]"
                image="/lovable-uploads/6db06a49-2687-4c19-a787-f58b34f9b9a9.png"
              />
            </div>
            
            {/* AI Tutor Card */}
            <Card className="bg-gradient-to-br from-[#230606]/70 to-[#1d0c0c]/90 border border-[#6e0415]/50 min-h-[500px] flex flex-col">
              <CardHeader className="border-b border-white/10">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-white flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-[#ff2100]/20 flex items-center justify-center">
                      <MessageSquare size={18} className="text-[#ff2100]" />
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
                    <div className="w-8 h-8 rounded-full bg-[#6e0415]/40 flex items-center justify-center flex-shrink-0">
                      <span className="text-[#ff2100] text-sm">You</span>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3 text-light-gray">
                      What is thermodynamics?
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#ff2100]/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-[#ff2100] text-sm">AI</span>
                    </div>
                    <div className="bg-white/10 rounded-lg p-3 text-white">
                      <p>Thermodynamics is the branch of physics that deals with the relationships between heat and other forms of energy. It describes how thermal energy is converted to and from other forms of energy and how it affects matter.</p>
                      <p className="mt-2">The first law of thermodynamics states that energy cannot be created or destroyed, only transformed from one form to another.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#6e0415]/40 flex items-center justify-center flex-shrink-0">
                      <span className="text-[#ff2100] text-sm">You</span>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3 text-light-gray">
                      The first law of thermodynamics?
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#ff2100]/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-[#ff2100] text-sm">AI</span>
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
                      className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-2 text-white placeholder:text-white/50 focus:outline-none focus:ring-1 focus:ring-[#ff2100]"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                    />
                    <Button size="icon" className="shrink-0 bg-gradient-to-r from-[#6e0415] to-[#ff2100]">
                      <Send className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Recent Activity */}
            <Card className="bg-gradient-to-br from-[#230606]/70 to-[#1d0c0c]/90 border border-[#6e0415]/50">
              <CardHeader className="border-b border-white/10">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-white flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-[#ff2100]/20 flex items-center justify-center">
                      <BarChart3 size={18} className="text-[#ff2100]" />
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
                    icon={<BookOpen size={16} className="text-[#ff2100]" />}
                    title="Completed Lesson"
                    description="Introduction to Neural Networks"
                    time="2 hours ago"
                  />
                  <ActivityItem 
                    icon={<FileText size={16} className="text-[#ff2100]" />}
                    title="Created Notes"
                    description="Thermodynamics Principles"
                    time="Yesterday"
                  />
                  <ActivityItem 
                    icon={<CheckCircle2 size={16} className="text-[#ff2100]" />}
                    title="Completed Quiz"
                    description="Physics: Forces and Motion"
                    time="Yesterday"
                  />
                  <ActivityItem 
                    icon={<Award size={16} className="text-[#ff2100]" />}
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
            <Card className="bg-gradient-to-br from-[#230606]/70 to-[#1d0c0c]/90 border border-[#6e0415]/50">
              <CardHeader className="border-b border-white/10">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-white flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-[#ff2100]/20 flex items-center justify-center">
                      <Calendar size={18} className="text-[#ff2100]" />
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
                    <div className="w-5 h-5 mt-0.5 rounded-full bg-[#ff2100]/20 flex items-center justify-center">
                      <CheckCircle2 className="h-4 w-4 text-[#ff2100]" />
                    </div>
                    <div>
                      <div className="text-white">Review Chapter 6 Notes</div>
                      <div className="text-sm text-light-gray">Physics - 45 minutes</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 mt-0.5 rounded-full bg-[#ff2100]/20 flex items-center justify-center">
                      <CheckCircle2 className="h-4 w-4 text-[#ff2100]" />
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
                
                <Button className="w-full mt-6 bg-gradient-to-r from-[#6e0415] to-[#ff2100] hover:opacity-90">View Schedule</Button>
              </CardContent>
            </Card>
            
            {/* Knowledge Feed */}
            <Card className="bg-gradient-to-br from-[#230606]/70 to-[#1d0c0c]/90 border border-[#6e0415]/50">
              <CardHeader className="border-b border-white/10">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-white flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-[#ff2100]/20 flex items-center justify-center">
                      <Lightbulb size={18} className="text-[#ff2100]" />
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
                
                <Button variant="outline" className="w-full mt-2 border-[#6e0415] text-[#ff2100] hover:bg-[#ff2100]/10">Explore More</Button>
              </CardContent>
            </Card>
            
            {/* Hot Topics */}
            <Card className="bg-gradient-to-br from-[#230606]/70 to-[#1d0c0c]/90 border border-[#6e0415]/50">
              <CardHeader className="border-b border-white/10">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-white flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-[#ff2100]/20 flex items-center justify-center">
                      <TrendingUp size={18} className="text-[#ff2100]" />
                    </div>
                    Today's Hot Topics
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="flex flex-wrap gap-2">
                  <Button variant="outline" className="bg-[#ff2100]/10 hover:bg-[#ff2100]/20 border-[#6e0415] text-white">
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
            <Card className="bg-gradient-to-br from-[#230606]/70 to-[#1d0c0c]/90 border border-[#6e0415]/50">
              <CardHeader className="border-b border-white/10">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-white flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-[#ff2100]/20 flex items-center justify-center">
                      <Users size={18} className="text-[#ff2100]" />
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
                <Button variant="outline" className="w-full mt-4 border-[#6e0415] text-[#ff2100] hover:bg-[#ff2100]/10">Find More Groups</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}

// Dashboard stat component
function DashboardStat({ icon, value, label, bgColor, borderColor, image }) {
  if (image) {
    return (
      <div className={`bg-[#1d0c0c] border ${borderColor} rounded-lg overflow-hidden`}>
        <img src={image} alt={label} className="w-full h-auto" />
      </div>
    );
  }
  
  return (
    <div className={`bg-gradient-to-br ${bgColor} border ${borderColor} rounded-lg p-4`}>
      <div className="flex items-center gap-3">
        <div className="p-2 bg-[#1d0c0c]/80 rounded-full">
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
    <div className="flex items-start gap-3 p-3 rounded-lg bg-white/5 border border-white/10 hover:border-[#ff2100]/30 transition-colors">
      <div className="mt-0.5 w-8 h-8 rounded-full bg-[#ff2100]/10 flex items-center justify-center">
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
    <div className="border border-white/10 rounded-lg p-4 hover:border-[#ff2100]/30 transition-colors">
      <div className="text-sm text-[#ff2100] mb-1">{tag}</div>
      <h4 className="text-white font-medium text-lg">{title}</h4>
      <p className="text-light-gray text-sm mt-1">{description}</p>
    </div>
  );
}

// Community group component
function CommunityGroup({ name, members, active }) {
  return (
    <div className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/10 hover:border-[#ff2100]/30 transition-colors">
      <div>
        <div className="text-white font-medium">{name}</div>
        <div className="text-sm text-light-gray">{members}</div>
      </div>
      <div className="flex items-center gap-2">
        {active && (
          <div className="w-2 h-2 rounded-full bg-green-500"></div>
        )}
        <Button variant="ghost" size="sm" className="text-[#ff2100] hover:text-[#ff2100]/80 hover:bg-[#ff2100]/10">
          Join
        </Button>
      </div>
    </div>
  );
}
