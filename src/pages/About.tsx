
import { PageLayout } from "@/components/PageLayout";
import { PageHeader } from "@/components/PageHeader";
import { Info, Clock, Target, Zap, Users, Award, CheckCircle, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card-custom";

export default function About() {
  return (
    <PageLayout>
      <PageHeader
        icon={Info}
        title="About InsightHub"
        description="Our mission, vision, and story"
      />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto mb-20">
          <p className="text-light-gray text-lg mb-8 animate-slide-in">
            InsightHub is an AI-powered learning platform designed to transform how students learn, 
            discover knowledge, and stay productive. Our mission is to make education more personalized, 
            efficient, and effective through cutting-edge artificial intelligence.
          </p>
          
          {/* Vision Section */}
          <div className="flex flex-col md:flex-row items-center gap-8 mb-20 animate-slide-in-delay-1">
            <div className="md:w-1/2">
              <div className="rounded-xl overflow-hidden border border-vibrant-pink/30 bg-gradient-to-br from-dark-gray/70 to-dark-gray/30">
                <div className="w-full h-64 bg-gradient-to-br from-vibrant-pink/20 to-bright-orange/20 flex items-center justify-center">
                  <Target size={120} className="text-bright-orange opacity-30" />
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4 text-white flex items-center gap-2">
                <Target size={24} className="text-bright-orange" />
                Our Vision
              </h2>
              <p className="text-light-gray mb-4">
                We envision a world where every student has access to personalized, AI-powered learning tools that adapt to their unique needs, learning styles, and goals.
              </p>
              <p className="text-light-gray">
                InsightHub is building technology that makes education more accessible, engaging, and effective for students around the globe, breaking down barriers to learning and unlocking human potential.
              </p>
            </div>
          </div>
          
          {/* Our Story */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-8 mb-20 animate-slide-in-delay-2">
            <div className="md:w-1/2">
              <div className="rounded-xl overflow-hidden border border-vibrant-pink/30 bg-gradient-to-br from-dark-gray/70 to-dark-gray/30">
                <div className="w-full h-64 bg-gradient-to-br from-vibrant-pink/20 to-bright-orange/20 flex items-center justify-center">
                  <Clock size={120} className="text-bright-orange opacity-30" />
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4 text-white flex items-center gap-2">
                <Clock size={24} className="text-bright-orange" />
                Our Story
              </h2>
              <p className="text-light-gray mb-4">
                Founded in 2025 by a team of education experts and AI engineers, InsightHub was born from 
                a simple observation: traditional learning methods aren't keeping pace with today's 
                information-rich world.
              </p>
              <p className="text-light-gray">
                We set out to build a platform that helps students navigate the overwhelming amount of content 
                available and focus on what matters most for their learning journey. Today, we're a growing team 
                of technologists, educators, and innovators dedicated to transforming education through AI.
              </p>
            </div>
          </div>
          
          {/* Mission and Values */}
          <div className="mb-20 animate-slide-in-delay-3">
            <h2 className="text-3xl font-bold mb-8 text-white text-center flex items-center justify-center gap-2">
              <Star size={24} className="text-bright-orange" />
              Our Core Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {coreValues.map((value, index) => (
                <Card key={index} className="h-full bg-gradient-to-br from-dark-gray/70 to-dark-gray/30 border-vibrant-pink/30">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="inline-flex items-center justify-center p-3 rounded-full bg-gradient-to-br from-vibrant-pink/20 to-bright-orange/20 border border-vibrant-pink/30 mb-4">
                      <value.icon size={24} className="text-bright-orange" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                    <p className="text-light-gray">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          {/* Timeline */}
          <div className="animate-slide-in-delay-4">
            <h2 className="text-3xl font-bold mb-8 text-white text-center flex items-center justify-center gap-2">
              <Clock size={24} className="text-bright-orange" />
              Our Journey
            </h2>
            <div className="relative border-l-2 border-vibrant-pink/30 pl-8 ml-4 space-y-12">
              {journey.map((milestone, index) => (
                <div key={index} className="relative">
                  <div className="absolute -left-12 top-0 w-6 h-6 rounded-full bg-gradient-to-br from-vibrant-pink to-bright-orange"></div>
                  <div className="mb-2 text-bright-orange font-bold">{milestone.year}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{milestone.title}</h3>
                  <p className="text-light-gray">{milestone.description}</p>
                </div>
              ))}
              <div className="relative">
                <div className="absolute -left-12 top-0 w-6 h-6 rounded-full bg-gradient-to-br from-vibrant-pink to-bright-orange"></div>
                <div className="mb-2 text-bright-orange font-bold">Today</div>
                <h3 className="text-xl font-bold text-white mb-2">Continuing Our Mission</h3>
                <p className="text-light-gray">InsightHub continues to grow, innovate, and transform the learning experience for students worldwide.</p>
              </div>
            </div>
          </div>
          
          {/* Team Section */}
          <div className="mt-20 animate-slide-in-delay-5">
            <h2 className="text-3xl font-bold mb-8 text-white text-center flex items-center justify-center gap-2">
              <Users size={24} className="text-bright-orange" />
              Our Team
            </h2>
            <p className="text-light-gray text-center mb-12">
              InsightHub is built by a diverse team of educators, AI researchers, software engineers, and 
              learning scientists who are passionate about transforming education through technology.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {teamMembers.map((member, index) => (
                <Card key={index} className="bg-gradient-to-br from-dark-gray/70 to-dark-gray/30 border-vibrant-pink/30">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="w-24 h-24 rounded-full mb-4 border-2 border-bright-orange bg-gradient-to-br from-vibrant-pink/20 to-bright-orange/20 flex items-center justify-center">
                      <span className="text-4xl text-bright-orange">{member.initials}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                    <p className="text-bright-orange mb-3">{member.title}</p>
                    <p className="text-light-gray text-sm">{member.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

const coreValues = [
  {
    icon: CheckCircle,
    title: "Accessibility",
    description: "Making quality education accessible to every student, regardless of background or location."
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "Constantly pushing the boundaries of what's possible in educational technology."
  },
  {
    icon: Users,
    title: "Community",
    description: "Building a supportive community where students can learn, share, and grow together."
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Striving for excellence in everything we do, from our technology to our user experience."
  }
];

const journey = [
  {
    year: "2023",
    title: "The Idea Takes Shape",
    description: "The concept for InsightHub was born when our founders recognized the gap between AI capabilities and educational tools."
  },
  {
    year: "2024",
    title: "Research & Development",
    description: "Intensive R&D period focusing on AI algorithms, learning science, and user experience design."
  },
  {
    year: "Early 2025",
    title: "InsightHub Beta Launch",
    description: "Limited beta release to select universities and educational institutions for testing and feedback."
  },
  {
    year: "Mid 2025",
    title: "Public Launch",
    description: "InsightHub opens to the public with our core learning, discovery, and productivity features."
  }
];

const teamMembers = [
  {
    name: "Alex Chen",
    initials: "AC",
    title: "CEO & Co-Founder",
    bio: "Former education technology executive with 15+ years experience in AI and machine learning applications."
  },
  {
    name: "Maya Patel",
    initials: "MP",
    title: "CTO & Co-Founder",
    bio: "AI researcher with background in natural language processing and adaptive learning systems."
  },
  {
    name: "James Wilson",
    initials: "JW",
    title: "Chief Learning Officer",
    bio: "Former university professor with expertise in educational psychology and learning science."
  }
];
