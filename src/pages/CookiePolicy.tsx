
import { PageLayout } from "@/components/PageLayout";
import { PageHeader } from "@/components/PageHeader";
import { Cookie } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card-custom";

export default function CookiePolicy() {
  return (
    <PageLayout>
      <PageHeader 
        icon={Cookie}
        title="Cookie Policy"
        description="Learn about how we use cookies and similar technologies on our platform."
      />
      
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Card className="animate-slide-in">
            <CardContent className="p-8">
              <div className="prose prose-invert max-w-none">
                <p className="text-light-gray">Last Updated: April 15, 2025</p>
                
                <h2 className="text-2xl font-bold mt-8 mb-4 text-white">1. Introduction</h2>
                <p className="text-light-gray">This Cookie Policy explains how InsightHub ("we", "our", or "us") uses cookies and similar technologies on our website and platform. It explains what these technologies are and why we use them, as well as your rights to control our use of them.</p>
                
                <h2 className="text-2xl font-bold mt-8 mb-4 text-white">2. What Are Cookies?</h2>
                <p className="text-light-gray">Cookies are small text files that are placed on your device when you visit a website. They are widely used to make websites work more efficiently and provide information to the owners of the site.</p>
                <p className="text-light-gray">Cookies set by the website owner (in this case, InsightHub) are called "first-party cookies". Cookies set by parties other than the website owner are called "third-party cookies". Third-party cookies enable features or functionality to be provided on or through the website.</p>
                
                <h2 className="text-2xl font-bold mt-8 mb-4 text-white">3. Types of Cookies We Use</h2>
                <p className="text-light-gray">We use the following types of cookies:</p>
                <ul className="list-disc pl-5 mt-4 mb-6 text-light-gray">
                  <li><strong>Essential Cookies:</strong> These cookies are necessary for the website to function properly. They enable core functionality such as security, network management, and account access.</li>
                  <li><strong>Preference Cookies:</strong> These cookies enable us to remember information that changes the way the website behaves or looks, like your preferred language or the region you are in.</li>
                  <li><strong>Analytics Cookies:</strong> These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.</li>
                  <li><strong>Marketing Cookies:</strong> These cookies are used to track visitors across websites. The intention is to display ads that are relevant and engaging for the individual user.</li>
                </ul>
                
                <h2 className="text-2xl font-bold mt-8 mb-4 text-white">4. How to Control Cookies</h2>
                <p className="text-light-gray">You can set or amend your web browser controls to accept or refuse cookies. If you choose to reject cookies, you may still use our website though your access to some functionality and areas of our website may be restricted.</p>
                <p className="text-light-gray">Most web browsers allow some control of most cookies through the browser settings. To find out more about cookies, including how to see what cookies have been set and how to manage and delete them, visit <a href="http://www.allaboutcookies.org" className="text-bright-orange hover:underline">www.allaboutcookies.org</a>.</p>
                
                <h2 className="text-2xl font-bold mt-8 mb-4 text-white">5. Updates to This Cookie Policy</h2>
                <p className="text-light-gray">We may update this Cookie Policy from time to time in order to reflect changes to the cookies we use or for other operational, legal or regulatory reasons. Please therefore re-visit this Cookie Policy regularly to stay informed about our use of cookies and related technologies.</p>
                
                <h2 className="text-2xl font-bold mt-8 mb-4 text-white">6. Contact Us</h2>
                <p className="text-light-gray">If you have any questions about our use of cookies or other technologies, please email us at privacy@insighthub.com.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </PageLayout>
  );
}
