
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Logo } from "@/components/Logo";
import { CheckCircle2, Lightbulb, MoreVertical, Send } from "lucide-react";
import { useState } from "react";

export default function Dashboard() {
  const [inputValue, setInputValue] = useState("");
  
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b border-white/10 bg-black/30 backdrop-blur-md">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <Logo />
          <nav className="flex items-center gap-4">
            <Button variant="ghost" className="text-white/70 hover:text-white">Dashboard</Button>
            <Button variant="ghost" className="text-white/70 hover:text-white">Courses</Button>
            <Button variant="ghost" className="text-white/70 hover:text-white">Knowledge</Button>
            <Button variant="ghost" className="text-white/70 hover:text-white">Community</Button>
            <div className="w-8 h-8 rounded-full bg-bright-orange flex items-center justify-center text-white">
              U
            </div>
          </nav>
        </div>
      </header>
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* AI Tutor Section */}
          <div className="lg:col-span-5 space-y-6">
            <Card className="min-h-[600px] flex flex-col">
              <CardHeader className="border-b border-white/10">
                <div className="flex items-center justify-between">
                  <CardTitle>AI-Powered Tutor</CardTitle>
                  <Button variant="ghost" size="icon">
                    <MoreVertical className="h-5 w-5" />
                  </Button>
                </div>
                <div className="text-sm text-light-gray">History</div>
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
                    <Button size="icon" className="shrink-0">
                      <Send className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Study Planner and Knowledge Feed */}
          <div className="lg:col-span-7 space-y-6">
            <Card>
              <CardHeader className="border-b border-white/10">
                <CardTitle>Study Planner</CardTitle>
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
                
                <Button className="w-full mt-6">View Schedule</Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="border-b border-white/10">
                <div className="flex items-center justify-between">
                  <CardTitle>Knowledge Feed</CardTitle>
                  <Button variant="ghost" size="icon">
                    <MoreVertical className="h-5 w-5" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="pt-4 space-y-4">
                <div className="border border-white/10 rounded-lg p-4 hover:border-bright-orange/30 transition-colors">
                  <div className="text-sm text-bright-orange mb-1">Trending GitHub repos</div>
                  <h4 className="text-white font-medium text-lg">Awesome LLMs</h4>
                  <p className="text-light-gray text-sm mt-1">A curated list of Large Language Models resources: tools, papers, and tutorials.</p>
                </div>
                
                <div className="border border-white/10 rounded-lg p-4 hover:border-bright-orange/30 transition-colors">
                  <div className="text-sm text-bright-orange mb-1">Lecture by DeepMind</div>
                  <h4 className="text-white font-medium text-lg">Introduction to Neural Networks</h4>
                  <p className="text-light-gray text-sm mt-1">A comprehensive overview of neural network architectures and applications.</p>
                </div>
                
                <div className="border border-white/10 rounded-lg p-4 hover:border-bright-orange/30 transition-colors">
                  <div className="text-sm text-bright-orange mb-1">V.S. Ow, Paper and Kv</div>
                  <h4 className="text-white font-medium text-lg">An Efficient Note Taking Mode for Computer Science Students</h4>
                  <p className="text-light-gray text-sm mt-1">Research on optimized note-taking methods for technical subjects.</p>
                </div>
                
                <Button variant="outline" className="w-full mt-2">Explore More</Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="border-b border-white/10">
                <CardTitle>Today's Hot Topics</CardTitle>
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
          </div>
        </div>
      </main>
    </div>
  );
}
