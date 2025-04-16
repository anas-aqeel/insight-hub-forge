
import { Logo } from "./Logo";
import { Button } from "@/components/ui/button-custom";
import { Facebook, Instagram, Twitter, Linkedin, Github, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-vibrant-pink/20 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-4">
            <Logo />
            <p className="text-light-gray">
              The AI-powered learning platform that personalizes your educational journey and maximizes your potential.
            </p>
            <div className="flex space-x-3">
              <SocialLink href="#" icon={<Facebook size={18} />} />
              <SocialLink href="#" icon={<Instagram size={18} />} />
              <SocialLink href="#" icon={<Twitter size={18} />} />
              <SocialLink href="#" icon={<Linkedin size={18} />} />
              <SocialLink href="#" icon={<Github size={18} />} />
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">Pages</h3>
            <ul className="space-y-2">
              <li>
                <FooterLink href="/" text="Home" />
              </li>
              <li>
                <FooterLink href="/features" text="Features" />
              </li>
              <li>
                <FooterLink href="/pricing" text="Pricing" />
              </li>
              <li>
                <FooterLink href="/about" text="About" />
              </li>
              <li>
                <FooterLink href="/contact" text="Contact" />
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">Resources</h3>
            <ul className="space-y-2">
              <li>
                <FooterLink href="/blog" text="Blog" />
              </li>
              <li>
                <FooterLink href="/help-center" text="Help Center" />
              </li>
              <li>
                <FooterLink href="/documentation" text="Documentation" />
              </li>
              <li>
                <FooterLink href="/tutorials" text="Tutorials" />
              </li>
              <li>
                <FooterLink href="/webinars" text="Webinars" />
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">Subscribe</h3>
            <p className="text-light-gray">
              Subscribe to our newsletter to get the latest updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-4 py-2 rounded-lg bg-dark-gray/50 border border-vibrant-pink/30 text-white placeholder:text-white/50 focus:outline-none focus:ring-1 focus:ring-vibrant-pink w-full"
              />
              <Button className="shrink-0 bg-gradient-to-r from-vibrant-pink to-bright-orange">
                <ArrowRight size={18} />
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 mt-8 flex flex-col sm:flex-row justify-between items-center">
          <div className="text-light-gray text-sm mb-4 sm:mb-0 text-center sm:text-left">
            © {new Date().getFullYear()} InsightHub. All rights reserved.
          </div>
          <div className="flex flex-wrap justify-center sm:justify-end gap-4 sm:gap-8">
            <FooterLink href="/privacy-policy" text="Privacy Policy" small />
            <FooterLink href="/terms-of-service" text="Terms of Service" small />
            <FooterLink href="/cookie-policy" text="Cookie Policy" small />
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      className="w-8 h-8 flex items-center justify-center rounded-full bg-dark-gray/50 border border-vibrant-pink/30 text-vibrant-pink hover:bg-vibrant-pink/20 hover:border-vibrant-pink/50 transition-colors"
    >
      {icon}
    </a>
  );
}

function FooterLink({ href, text, small = false }: { href: string; text: string; small?: boolean }) {
  return (
    <Link
      to={href}
      className={`text-light-gray hover:text-vibrant-pink transition-colors ${small ? 'text-sm' : ''}`}
    >
      {text}
    </Link>
  );
}
