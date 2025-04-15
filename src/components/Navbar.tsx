
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button-custom"
import { Logo } from "./Logo"
import { Menu, X } from "lucide-react"
import { useState, useEffect } from "react"

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [scrolled])
  
  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }
  
  return (
    <header 
      className={`py-4 md:py-5 px-4 fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-dark-gray/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <Logo />
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLinks />
          <div className="flex items-center space-x-4">
            <Button asChild variant="ghost">
              <Link to="/login">Log In</Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/signup">Sign Up</Link>
            </Button>
          </div>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white p-2"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-dark-gray/95 backdrop-blur-lg border-t border-white/10 absolute top-full left-0 right-0 z-50 p-4 animate-fade-in">
          <nav className="flex flex-col space-y-4">
            <NavLinks mobile onClick={() => setMobileMenuOpen(false)} />
            <div className="flex flex-col space-y-3 pt-4 border-t border-white/10">
              <Button asChild variant="ghost" className="w-full justify-start">
                <Link to="/login" onClick={() => setMobileMenuOpen(false)}>Log In</Link>
              </Button>
              <Button asChild variant="outline" className="w-full">
                <Link to="/signup" onClick={() => setMobileMenuOpen(false)}>Sign Up</Link>
              </Button>
            </div>
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
    { label: "Contact", href: "/contact" },
  ]
  
  return (
    <>
      {links.map((link) => (
        <Link
          key={link.label}
          to={link.href}
          className={`text-light-gray hover:text-white transition-colors ${
            mobile ? 'py-2 px-4 text-lg border-b border-white/5' : ''
          }`}
          onClick={onClick}
        >
          {link.label}
        </Link>
      ))}
    </>
  )
}
