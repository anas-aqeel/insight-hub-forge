
import { Logo } from "./Logo"
import { Link } from "react-router-dom"
import { Facebook, Twitter, Linkedin, Instagram, Github } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="py-12 md:py-16 border-t border-white/10 bg-black/30 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          <div className="md:col-span-5 lg:col-span-4">
            <Logo size="medium" />
            <p className="mt-4 text-light-gray max-w-md">
              InsightHub is an AI-powered learning ecosystem that helps students learn smarter, stay ahead, and achieve their academic goals faster.
            </p>
            <div className="flex space-x-4 mt-6">
              <SocialLink href="#" icon={Twitter} label="Twitter" />
              <SocialLink href="#" icon={Linkedin} label="LinkedIn" />
              <SocialLink href="#" icon={Facebook} label="Facebook" />
              <SocialLink href="#" icon={Instagram} label="Instagram" />
              <SocialLink href="#" icon={Github} label="GitHub" />
            </div>
          </div>
          
          <div className="md:col-span-7 lg:col-span-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <FooterLinkGroup title="Quick Links">
                <FooterLink href="/">Home</FooterLink>
                <FooterLink href="/about">About</FooterLink>
                <FooterLink href="/features">Features</FooterLink>
                <FooterLink href="/pricing">Pricing</FooterLink>
                <FooterLink href="/blog">Blog</FooterLink>
              </FooterLinkGroup>
              
              <FooterLinkGroup title="Resources">
                <FooterLink href="/help">Help Center</FooterLink>
                <FooterLink href="/tutorials">Tutorials</FooterLink>
                <FooterLink href="/documentation">Documentation</FooterLink>
                <FooterLink href="/webinars">Webinars</FooterLink>
              </FooterLinkGroup>
              
              <FooterLinkGroup title="Company">
                <FooterLink href="/about">About Us</FooterLink>
                <FooterLink href="/careers">Careers</FooterLink>
                <FooterLink href="/contact">Contact Us</FooterLink>
                <FooterLink href="/press">Press</FooterLink>
              </FooterLinkGroup>
              
              <FooterLinkGroup title="Legal">
                <FooterLink href="/terms">Terms of Service</FooterLink>
                <FooterLink href="/privacy">Privacy Policy</FooterLink>
                <FooterLink href="/security">Security</FooterLink>
                <FooterLink href="/cookies">Cookie Policy</FooterLink>
              </FooterLinkGroup>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-light-gray/70 text-sm">
          <p>© {currentYear} InsightHub. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            Made with ❤️ for learners worldwide
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
      className="w-8 h-8 flex items-center justify-center rounded-full bg-white/5 text-light-gray hover:bg-bright-orange/20 hover:text-bright-orange transition-colors"
      aria-label={label}
    >
      <Icon size={16} />
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
  return (
    <li>
      <Link 
        to={href}
        className="text-light-gray/70 hover:text-bright-orange transition-colors"
      >
        {children}
      </Link>
    </li>
  )
}
