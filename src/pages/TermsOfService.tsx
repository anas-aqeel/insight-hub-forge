
import { PageLayout } from "@/components/PageLayout";
import { PageHeader } from "@/components/PageHeader";
import { FileText } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card-custom";

export default function TermsOfService() {
  return (
    <PageLayout>
      <PageHeader 
        icon={FileText}
        title="Terms of Service"
        description="Please read these terms carefully before using InsightHub."
      />
      
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Card className="animate-slide-in">
            <CardContent className="p-8">
              <div className="prose prose-invert max-w-none">
                <p className="text-light-gray">Last Updated: April 15, 2025</p>
                
                <h2 className="text-2xl font-bold mt-8 mb-4 text-white">1. Introduction</h2>
                <p className="text-light-gray">Welcome to InsightHub ("Company", "we", "our", "us")! These Terms of Service ("Terms", "Terms of Service") govern your use of our website and platform operated by InsightHub.</p>
                <p className="text-light-gray">By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the Service.</p>
                
                <h2 className="text-2xl font-bold mt-8 mb-4 text-white">2. Communications</h2>
                <p className="text-light-gray">By creating an Account on our service, you agree to subscribe to newsletters, marketing or promotional materials and other information we may send. However, you may opt out of receiving any, or all, of these communications from us by following the unsubscribe link or instructions provided in any email we send.</p>
                
                <h2 className="text-2xl font-bold mt-8 mb-4 text-white">3. Subscriptions</h2>
                <p className="text-light-gray">Some parts of the Service are billed on a subscription basis. You will be billed in advance on a recurring and periodic basis (such as daily, weekly, monthly or annually), depending on the type of subscription plan you select when purchasing the Subscription.</p>
                <p className="text-light-gray">At the end of each period, your Subscription will automatically renew under the exact same conditions unless you cancel it or InsightHub cancels it.</p>
                
                <h2 className="text-2xl font-bold mt-8 mb-4 text-white">4. Content</h2>
                <p className="text-light-gray">Our Service allows you to post, link, store, share and otherwise make available certain information, text, graphics, videos, or other material. You are responsible for the Content that you post on or through the Service, including its legality, reliability, and appropriateness.</p>
                
                <h2 className="text-2xl font-bold mt-8 mb-4 text-white">5. Intellectual Property</h2>
                <p className="text-light-gray">The Service and its original content (excluding Content provided by users), features and functionality are and will remain the exclusive property of InsightHub and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of InsightHub.</p>
                
                <h2 className="text-2xl font-bold mt-8 mb-4 text-white">6. Termination</h2>
                <p className="text-light-gray">We may terminate or suspend your account and bar access to the Service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms.</p>
                
                <h2 className="text-2xl font-bold mt-8 mb-4 text-white">7. Limitation Of Liability</h2>
                <p className="text-light-gray">In no event shall InsightHub, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.</p>
                
                <h2 className="text-2xl font-bold mt-8 mb-4 text-white">8. Changes</h2>
                <p className="text-light-gray">We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.</p>
                
                <h2 className="text-2xl font-bold mt-8 mb-4 text-white">9. Contact Us</h2>
                <p className="text-light-gray">If you have any questions about these Terms, please contact us at legal@insighthub.com.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </PageLayout>
  );
}
