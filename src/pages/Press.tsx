
import { PageLayout } from "@/components/PageLayout";
import { PageHeader } from "@/components/PageHeader";
import { Newspaper, Calendar, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card-custom";
import { Button } from "@/components/ui/button-custom";

export default function Press() {
  return (
    <PageLayout>
      <PageHeader 
        icon={Newspaper}
        title="Press and Media"
        description="News, press releases, and media resources for InsightHub."
      />
      
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="animate-slide-in">
              <h2 className="text-3xl font-bold mb-6 text-white">Latest News</h2>
              <div className="space-y-6">
                {pressReleases.map((release, index) => (
                  <Card key={index} className="overflow-hidden">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 text-light-gray mb-2">
                        <Calendar size={16} className="text-bright-orange" />
                        <span>{release.date}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-white">{release.title}</h3>
                      <p className="text-light-gray mb-4">{release.excerpt}</p>
                      <Button variant="outline" className="flex items-center gap-2">
                        Read More <ExternalLink size={16} />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            
            <div className="animate-slide-in-delay-1">
              <h2 className="text-3xl font-bold mb-6 text-white">Media Coverage</h2>
              <div className="space-y-6">
                {mediaCoverage.map((coverage, index) => (
                  <Card key={index} className="overflow-hidden">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-bright-orange font-medium">{coverage.source}</span>
                        <span className="text-light-gray text-sm">{coverage.date}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-white">{coverage.title}</h3>
                      <p className="text-light-gray mb-4">{coverage.excerpt}</p>
                      <Button variant="outline" className="flex items-center gap-2">
                        Read Article <ExternalLink size={16} />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
          
          <div className="mb-16 animate-slide-in">
            <h2 className="text-3xl font-bold mb-8 text-center text-white">Media Kit</h2>
            <Card>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <h3 className="text-xl font-bold mb-4 text-white">Logo Files</h3>
                    <div className="h-40 bg-white/5 rounded-lg flex items-center justify-center mb-4">
                      <img src="https://via.placeholder.com/150" alt="Logo" className="h-20" />
                    </div>
                    <Button variant="outline" className="w-full">Download</Button>
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-bold mb-4 text-white">Product Screenshots</h3>
                    <div className="h-40 bg-white/5 rounded-lg flex items-center justify-center mb-4">
                      <img src="https://via.placeholder.com/300x200" alt="Screenshots" className="h-32 w-auto" />
                    </div>
                    <Button variant="outline" className="w-full">Download</Button>
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-bold mb-4 text-white">Brand Guidelines</h3>
                    <div className="h-40 bg-white/5 rounded-lg flex items-center justify-center mb-4">
                      <Newspaper size={48} className="text-light-gray" />
                    </div>
                    <Button variant="outline" className="w-full">Download</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="animate-slide-in">
            <h2 className="text-3xl font-bold mb-6 text-white">Media Contact</h2>
            <Card>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-white">Press Inquiries</h3>
                    <p className="text-light-gray mb-2">For press and media inquiries, please contact:</p>
                    <p className="text-white mb-1">Sarah Mitchell</p>
                    <p className="text-white mb-1">Director of Communications</p>
                    <p className="text-bright-orange mb-4">press@insighthub.com</p>
                    <Button>Contact Press Team</Button>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-white">Interview Requests</h3>
                    <p className="text-light-gray mb-2">For interview requests with our leadership team, please contact:</p>
                    <p className="text-white mb-1">Michael Johnson</p>
                    <p className="text-white mb-1">Media Relations Manager</p>
                    <p className="text-bright-orange mb-4">media@insighthub.com</p>
                    <Button>Request Interview</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

const pressReleases = [
  {
    title: "InsightHub Raises $30M Series B to Transform AI-Powered Education",
    date: "April 12, 2025",
    excerpt: "Funding will accelerate product development and international expansion of the AI-powered learning platform that's revolutionizing how students learn."
  },
  {
    title: "InsightHub Launches New STEM Toolkit for Engineering Students",
    date: "March 28, 2025",
    excerpt: "New specialized tools help engineering students master complex concepts and improve project-based learning outcomes."
  },
  {
    title: "InsightHub Partners with Top 50 Universities Worldwide",
    date: "February 15, 2025",
    excerpt: "Strategic partnerships will bring InsightHub's AI-powered learning tools to over 2 million students at leading academic institutions."
  }
];

const mediaCoverage = [
  {
    source: "TechCrunch",
    title: "InsightHub Is Changing How Students Learn with AI",
    date: "April 10, 2025",
    excerpt: "This EdTech startup is using advanced AI to create personalized learning experiences that adapt to individual students' needs."
  },
  {
    source: "Forbes",
    title: "EdTech Disruptors: InsightHub Named to Forbes Next Billion-Dollar Startups List",
    date: "March 22, 2025",
    excerpt: "Forbes recognizes InsightHub among the most promising startups likely to reach billion-dollar valuations."
  },
  {
    source: "Education Weekly",
    title: "AI in Education: How InsightHub Is Leading the Revolution",
    date: "March 5, 2025",
    excerpt: "In-depth look at how InsightHub's technology is addressing long-standing challenges in education through personalization."
  }
];
