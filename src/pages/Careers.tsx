
import { PageLayout } from "@/components/PageLayout";
import { PageHeader } from "@/components/PageHeader";
import { Briefcase, MapPin, Calendar, Zap, Heart, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card-custom";
import { Button } from "@/components/ui/button-custom";

export default function Careers() {
  return (
    <PageLayout>
      <PageHeader 
        icon={Briefcase}
        title="Join Our Team"
        description="Help us transform education and build the future of learning. We're looking for passionate individuals to join our mission."
      />
      
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {jobOpenings.map((job, index) => (
              <Card key={index} className="h-full animate-slide-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-white">{job.title}</h3>
                  <div className="flex flex-wrap gap-4 mb-6">
                    <div className="flex items-center gap-2 text-light-gray">
                      <MapPin size={16} className="text-bright-orange" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-light-gray">
                      <Calendar size={16} className="text-bright-orange" />
                      <span>{job.type}</span>
                    </div>
                  </div>
                  <p className="text-light-gray mb-6">{job.description}</p>
                  <div className="mb-6">
                    <h4 className="font-semibold mb-2 text-white">Requirements:</h4>
                    <ul className="space-y-2">
                      {job.requirements.map((req, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-bright-orange mt-1">•</span>
                          <span className="text-light-gray">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button className="w-full">Apply Now</Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-white">Why Join Us?</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <Card key={index} className="animate-slide-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardContent className="p-6 text-center">
                    <div className="inline-flex items-center justify-center p-3 bg-gradient-to-br from-vibrant-pink/20 to-bright-orange/20 rounded-full mb-4 border border-vibrant-pink/30">
                      <benefit.icon size={24} className="text-bright-orange" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-white">{benefit.title}</h3>
                    <p className="text-light-gray">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

const jobOpenings = [
  {
    title: "Senior AI Engineer",
    location: "Remote",
    type: "Full-time",
    description: "Join our AI team to develop cutting-edge learning algorithms and natural language processing models that power our education platform.",
    requirements: [
      "5+ years experience in machine learning and AI",
      "Experience with NLP and transformer models",
      "Strong Python skills with libraries like PyTorch or TensorFlow",
      "Experience deploying AI models in production",
      "Passion for education technology"
    ]
  },
  {
    title: "Frontend Developer",
    location: "San Francisco, CA",
    type: "Full-time",
    description: "Help build our responsive user interface that delights students and educators with intuitive learning experiences.",
    requirements: [
      "3+ years experience with React",
      "Strong TypeScript skills",
      "Experience with modern CSS frameworks like Tailwind",
      "Knowledge of responsive design principles",
      "Eye for design and attention to detail"
    ]
  },
  {
    title: "Education Content Specialist",
    location: "New York, NY",
    type: "Full-time",
    description: "Develop high-quality educational content that will be used by students worldwide to enhance their learning experience.",
    requirements: [
      "Degree in Education or related field",
      "Experience creating educational content",
      "Understanding of different learning styles",
      "Excellent writing and communication skills",
      "Passion for making complex topics accessible"
    ]
  },
  {
    title: "Product Manager",
    location: "Remote",
    type: "Full-time",
    description: "Lead product development initiatives that transform how students learn and engage with educational content.",
    requirements: [
      "3+ years of product management experience",
      "Experience with education technology",
      "Strong analytical and problem-solving skills",
      "Excellent communication and leadership abilities",
      "User-centered design thinking"
    ]
  }
];

const benefits = [
  {
    icon: Zap,
    title: "Innovation",
    description: "Work on cutting-edge AI and education technology that's changing how people learn."
  },
  {
    icon: Heart,
    title: "Impact",
    description: "Directly contribute to improving education for millions of students worldwide."
  },
  {
    icon: Star,
    title: "Growth",
    description: "Continuous learning opportunities and career development in a fast-growing startup."
  }
];
