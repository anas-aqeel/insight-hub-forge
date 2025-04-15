
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Logo } from "./Logo"
import { Menu } from "lucide-react"
import { useState } from "react"

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }
  
  return (
    <header className="py-4 md:py-6 px-4 md:px-8 relative z-30">
      <div className="container mx-auto flex items-center justify-between">
        <Logo />
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLinks />
          <Button asChild>
            <Link to="/signup">Get Started</Link>
          </Button>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <Menu size={24} />
        </button>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-gradient-card backdrop-blur-lg border-t border-white/10 absolute top-full left-0 right-0 z-50 p-4 animate-fade-in">
          <nav className="flex flex-col space-y-4">
            <NavLinks mobile onClick={() => setMobileMenuOpen(false)} />
            <Button asChild className="w-full">
              <Link to="/signup" onClick={() => setMobileMenuOpen(false)}>Get Started</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}

function NavLinks({ mobile = false, onClick = () => {} }: { mobile?: boolean, onClick?: () => void }) {
  const links = [
    { label: "Features", href: "/features" },
    { label: "Pricing", href: "/pricing" },
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
  ]
  
  return (
    <>
      {links.map((link) => (
        <Link
          key={link.label}
          to={link.href}
          className={`text-light-gray hover:text-white transition-colors ${
            mobile ? 'py-2 px-4 text-lg' : ''
          }`}
          onClick={onClick}
        >
          {link.label}
        </Link>
      ))}
    </>
  )
}
