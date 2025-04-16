
import { PageLayout } from "@/components/PageLayout";
import { PageHeader } from "@/components/PageHeader";
import { Info } from "lucide-react";

export default function About() {
  return (
    <PageLayout>
      <PageHeader
        icon={Info}
        title="About InsightHub"
        description="Our mission, vision, and story"
      />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <p className="text-light-gray text-lg mb-6">
            InsightHub is an AI-powered learning platform designed to transform how students learn, 
            discover knowledge, and stay productive. Our mission is to make education more personalized, 
            efficient, and effective through cutting-edge artificial intelligence.
          </p>
          
          <h2 className="text-2xl font-bold mt-12 mb-4 text-white">Our Story</h2>
          <p className="text-light-gray mb-6">
            Founded in 2025 by a team of education experts and AI engineers, InsightHub was born from 
            a simple observation: traditional learning methods aren't keeping pace with today's 
            information-rich world. We set out to build a platform that helps students navigate the 
            overwhelming amount of content available and focus on what matters most for their learning journey.
          </p>
          
          <h2 className="text-2xl font-bold mt-12 mb-4 text-white">Our Mission</h2>
          <p className="text-light-gray mb-6">
            We believe that learning should be personalized, engaging, and effective. Our mission is to 
            empower students with AI-driven tools that adapt to their unique learning styles, help them 
            stay organized, and connect them with relevant resources and communities.
          </p>
          
          <h2 className="text-2xl font-bold mt-12 mb-4 text-white">Our Team</h2>
          <p className="text-light-gray mb-6">
            InsightHub is built by a diverse team of educators, AI researchers, software engineers, and 
            learning scientists who are passionate about transforming education through technology.
          </p>
          
          <h2 className="text-2xl font-bold mt-12 mb-4 text-white">Contact Us</h2>
          <p className="text-light-gray mb-6">
            Have questions or feedback? We'd love to hear from you!
          </p>
          <p className="text-light-gray mb-2">
            Email: support@insighthub.com
          </p>
          <p className="text-light-gray mb-2">
            Address: 123 Learning Lane, Knowledge City, 94105
          </p>
        </div>
      </div>
    </PageLayout>
  );
}
