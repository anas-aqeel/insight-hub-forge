
import { Logo } from "./Logo"
import { Link } from "react-router-dom"
import { Facebook, Twitter, Linkedin, Instagram, Github, Mail, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button-custom"
import { Input } from "@/components/ui/input"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-16 md:py-20 border-t border-vibrant-pink/20 bg-[#0a0a0a]/80 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-12">
          <div className="md:col-span-5 lg:col-span-4">
            <Logo size="medium" />
            <p className="mt-4 text-light-gray max-w-md">
              InsightHub is an AI-powered learning ecosystem that helps students learn smarter, stay ahead, and achieve their academic goals faster.
            </p>

            <div className="mt-8">
              <p className="text-white font-medium mb-4">Subscribe to our newsletter</p>
              <div className="flex flex-col sm:flex-row gap-2">
                <Input
                  type="email"
                  placeholder="Your email"
                  className="bg-dark-gray/50 border-vibrant-pink/30 text-white placeholder:text-white/50"
                />
                <Button variant="default" className="bg-gradient-to-r from-vibrant-pink to-bright-orange text-white hover:opacity-90 transition-opacity">Subscribe</Button>
              </div>
            </div>

            <div className="flex space-x-4 mt-8">
              <SocialLink href="#" icon={Twitter} label="Twitter" />
              <SocialLink href="#" icon={Linkedin} label="LinkedIn" />
              <SocialLink href="#" icon={Facebook} label="Facebook" />
              <SocialLink href="#" icon={Instagram} label="Instagram" />
              <SocialLink href="#" icon={Github} label="GitHub" />
            </div>
          </div>

          <div className="md:col-span-7 lg:col-span-8">
            <div className="grid grid-cols-1  lg:grid-cols-5 gap-8">
              <div className="grid grid-cols-3  sm:grid-cols-3  gap-2 col-span-1 lg:col-span-3">
                <FooterLinkGroup title="Quick Links">
                  <FooterLink href="/">Home</FooterLink>
                  <FooterLink href="/about">About</FooterLink>
                  <FooterLink href="/features">Features</FooterLink>
                  <FooterLink href="/pricing">Pricing</FooterLink>
                  <FooterLink href="/contact">Contact</FooterLink>
                </FooterLinkGroup>

                <FooterLinkGroup title="Resources">
                  <FooterLink href="/help-center">Help Center</FooterLink>
                  <FooterLink href="/tutorials">Tutorials</FooterLink>
                  <FooterLink href="/documentation">Documentation</FooterLink>
                  <FooterLink href="/webinars">Webinars</FooterLink>
                  <FooterLink href="/blog">Blog</FooterLink>
                </FooterLinkGroup>

                <FooterLinkGroup title="Company">
                  <FooterLink href="/about">About Us</FooterLink>
                  <FooterLink href="/careers">Careers</FooterLink>
                  <FooterLink href="/contact">Contact Us</FooterLink>
                  <FooterLink href="/press">Press</FooterLink>
                  <FooterLink href="/demo">Demo</FooterLink>
                </FooterLinkGroup>
              </div>
              <div className="col-span-1 lg:col-span-2">
                <FooterLinkGroup title="Contact" >
                  <li className="flex items-start gap-2 text-light-gray hover:text-bright-orange transition-colors">
                    <Mail size={16} className="shrink-0 mt-1 text-bright-orange" />
                    <a href="mailto:info@insighthub.com">info@insighthub.com</a>
                  </li>
                  <li className="flex items-start gap-2 text-light-gray hover:text-bright-orange transition-colors">
                    <Phone size={16} className="shrink-0 mt-1 text-bright-orange" />
                    <a href="tel:+12345678900">+1 (234) 567-8900</a>
                  </li>
                  <li className="flex items-start gap-2 text-light-gray">
                    <MapPin size={16} className="shrink-0 mt-1 text-bright-orange" />
                    <span>123 AI Street, Silicon Valley, CA 94043</span>
                  </li>
                </FooterLinkGroup>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-vibrant-pink/20 flex flex-col md:flex-row justify-between items-center text-light-gray text-sm">
          <p>© {currentYear} InsightHub. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 mt-4 md:mt-0">
            <Link to="/terms-of-service" className="hover:text-bright-orange transition-colors">Terms of Service</Link>
            <Link to="/privacy-policy" className="hover:text-bright-orange transition-colors">Privacy Policy</Link>
            <Link to="/cookie-policy" className="hover:text-bright-orange transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

function SocialLink({ href, icon: Icon, label }: { href: string; icon: React.ComponentType<any>; label: string }) {
  return (
    <a
      href={href}
      className="w-10 h-10 flex items-center justify-center rounded-full bg-dark-gray/50 border border-vibrant-pink/30 text-bright-orange hover:bg-bright-orange/20 hover:border-bright-orange/50 transition-colors"
      aria-label={label}
    >
      <Icon size={18} />
    </a>
  )
}

function FooterLinkGroup({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="font-semibold text-white mb-4">{title}</h4>
      <ul className="space-y-2">
        {children}
      </ul>
    </div>
  )
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  // For external links, use regular <a>, for internal, use <Link>
  if (href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:')) {
    return (
      <li>
        <a
          href={href}
          className="text-light-gray hover:text-bright-orange transition-colors"
        >
          {children}
        </a>
      </li>
    );
  }

  return (
    <li>
      <Link
        to={href}
        className="text-light-gray hover:text-bright-orange transition-colors"
      >
        {children}
      </Link>
    </li>
  );
}