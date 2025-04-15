
import { PageLayout } from "@/components/PageLayout";
import { PageHeader } from "@/components/PageHeader";
import { Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card-custom";

export default function PrivacyPolicy() {
  return (
    <PageLayout>
      <PageHeader 
        icon={Shield}
        title="Privacy Policy"
        description="We take your privacy seriously. Learn how we collect, use, and protect your information."
      />
      
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Card className="animate-slide-in">
            <CardContent className="p-8">
              <div className="prose prose-invert max-w-none">
                <p className="text-light-gray">Last Updated: April 15, 2025</p>
                
                <h2 className="text-2xl font-bold mt-8 mb-4 text-white">1. Introduction</h2>
                <p className="text-light-gray">InsightHub ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform.</p>
                <p className="text-light-gray">Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy, please do not access our platform.</p>
                
                <h2 className="text-2xl font-bold mt-8 mb-4 text-white">2. Information We Collect</h2>
                <p className="text-light-gray">We may collect personal information that you voluntarily provide to us when you register on our platform, express an interest in obtaining information about us or our products and services, participate in activities on our platform, or otherwise contact us.</p>
                <p className="text-light-gray">The personal information that we collect depends on the context of your interactions with us and our platform, the choices you make, and the features you use. The personal information we collect may include:</p>
                <ul className="list-disc pl-5 mt-4 mb-6 text-light-gray">
                  <li>Name and contact data (email address, phone number)</li>
                  <li>Credentials (password and similar security information)</li>
                  <li>Educational information (courses, progress, performance)</li>
                  <li>Payment information (when you upgrade your plan)</li>
                </ul>
                
                <h2 className="text-2xl font-bold mt-8 mb-4 text-white">3. How We Use Your Information</h2>
                <p className="text-light-gray">We use personal information collected via our platform for a variety of business purposes including:</p>
                <ul className="list-disc pl-5 mt-4 mb-6 text-light-gray">
                  <li>To provide and maintain our platform</li>
                  <li>To personalize your experience</li>
                  <li>To respond to your inquiries and provide customer support</li>
                  <li>To process payments and prevent fraud</li>
                  <li>To improve our platform and develop new features</li>
                  <li>To comply with legal obligations</li>
                </ul>
                
                <h2 className="text-2xl font-bold mt-8 mb-4 text-white">4. Sharing Your Information</h2>
                <p className="text-light-gray">We may share your information with third-party service providers who perform services on our behalf, such as payment processing, data analysis, email delivery, hosting services, customer service, and marketing assistance.</p>
                <p className="text-light-gray">We may also share your information if required by law or to protect our rights and the safety of our users.</p>
                
                <h2 className="text-2xl font-bold mt-8 mb-4 text-white">5. Your Data Protection Rights</h2>
                <p className="text-light-gray">Depending on your location, you may have certain rights regarding your personal information, such as:</p>
                <ul className="list-disc pl-5 mt-4 mb-6 text-light-gray">
                  <li>The right to access your personal information</li>
                  <li>The right to rectify inaccurate personal information</li>
                  <li>The right to request deletion of your personal information</li>
                  <li>The right to object to processing of your personal information</li>
                  <li>The right to data portability</li>
                </ul>
                
                <h2 className="text-2xl font-bold mt-8 mb-4 text-white">6. Security of Your Information</h2>
                <p className="text-light-gray">We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.</p>
                
                <h2 className="text-2xl font-bold mt-8 mb-4 text-white">7. Changes to This Privacy Policy</h2>
                <p className="text-light-gray">We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date at the top of this Privacy Policy.</p>
                
                <h2 className="text-2xl font-bold mt-8 mb-4 text-white">8. Contact Us</h2>
                <p className="text-light-gray">If you have questions or concerns about this Privacy Policy, please contact us at privacy@insighthub.com.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </PageLayout>
  );
}
