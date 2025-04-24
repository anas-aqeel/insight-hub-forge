
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button-custom"
import { Logo } from "./Logo"
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react"
import { useState, useEffect, useRef } from "react"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null)
  const [openMenu, setOpenMenu] = useState<string | null>(null)
  const menuRef = useRef<HTMLDivElement>(null);

  // Handle click outside to close open menus
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpenMenu(null);
      }
    }
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

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

  const toggleSubmenu = (menu: string) => {
    setActiveSubmenu(activeSubmenu === menu ? null : menu)
  }

  const handleMenuClick = (menuName: string) => {
    setOpenMenu(openMenu === menuName ? null : menuName);
  };

  return (
    <header
      className={`py-4 md:py-5 px-4 fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#0a0a0a]/90 backdrop-blur-lg border-b border-vibrant-pink/20' : 'bg-transparent border-b border-transparent'
        }`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <Logo />

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8" ref={menuRef}>
          <div className="hidden lg:flex gap-x-8">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link to="/" className="text-white hover:text-bright-orange transition-colors">
                    Home
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem className="relative">
                  <div 
                    onClick={() => handleMenuClick('features')} 
                    className={`flex items-center cursor-pointer px-4 py-2 rounded-md ${openMenu === 'features' ? 'border-b-2 border-[#ff3f00]' : 'hover:text-bright-orange'} transition-colors duration-300`}
                  >
                    <span className="text-white">Features</span>
                    {openMenu === 'features' ? (
                      <ChevronUp size={16} className="ml-1" />
                    ) : (
                      <ChevronDown size={16} className="ml-1" />
                    )}
                  </div>
                  
                  {openMenu === 'features' && (
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 z-50">
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-[#1d0c0c] border border-bright-orange/50 rounded-xl shadow-lg">
                        <FeatureNavItem
                          title="AI Tutor"
                          href="/features"
                          description="Get personalized explanations for any subject"
                        />
                        <FeatureNavItem
                          title="Study Planner"
                          href="/features"
                          description="Organize your study sessions efficiently"
                        />
                        <FeatureNavItem
                          title="Knowledge Feed"
                          href="/features"
                          description="Discover trending content in your field"
                        />
                        <FeatureNavItem
                          title="Analytics"
                          href="/features"
                          description="Track progress and identify areas for improvement"
                        />
                        <FeatureNavItem
                          title="Developer Tools"
                          href="/features"
                          description="Special features for CS and STEM students"
                        />
                        <FeatureNavItem
                          title="Community"
                          href="/features"
                          description="Connect with peers and experts"
                        />
                        <li className="col-span-2 mt-2">
                          <Link
                            to="/features"
                            className="w-full inline-block text-center p-2 px-4 rounded-md bg-gradient-to-r from-[#6e0415]/50 to-[#ff2100]/50 border border-[#6e0415] text-white hover:bg-gradient-to-r hover:from-[#6e0415]/70 hover:to-[#ff2100]/70 transition-colors"
                          >
                            View All Features
                          </Link>
                        </li>
                      </ul>
                    </div>
                  )}
                </NavigationMenuItem>

                <NavigationMenuItem className="mr-4">
                  <Link to="/pricing" className="text-white hover:text-bright-orange transition-colors">
                    Pricing
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="/about" className="text-white hover:text-bright-orange transition-colors">
                    About
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem className="relative">
                  <div 
                    onClick={() => handleMenuClick('resources')} 
                    className={`flex items-center cursor-pointer px-4 py-2 rounded-md ${openMenu === 'resources' ? 'border-b-2 border-[#ff3f00]' : 'hover:text-bright-orange'} transition-colors duration-300`}
                  >
                    <span className="text-white">Resources</span>
                    {openMenu === 'resources' ? (
                      <ChevronUp size={16} className="ml-1" />
                    ) : (
                      <ChevronDown size={16} className="ml-1" />
                    )}
                  </div>
                  
                  {openMenu === 'resources' && (
                    <div className="absolute top-full right-0 mt-2 z-50">
                      <ul className="grid w-[200px] gap-3 p-4 bg-[#1d0c0c] border border-bright-orange/50 rounded-xl shadow-lg">
                        <ResourceNavItem
                          title="Help Center"
                          href="/help-center"
                        />
                        <ResourceNavItem
                          title="Documentation"
                          href="/documentation"
                        />
                        <ResourceNavItem
                          title="Tutorials"
                          href="/tutorials"
                        />
                        <ResourceNavItem
                          title="Webinars"
                          href="/webinars"
                        />
                        <ResourceNavItem
                          title="Blog"
                          href="/blog"
                        />
                      </ul>
                    </div>
                  )}
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="/contact" className="text-white hover:text-bright-orange transition-colors">
                    Contact
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="flex items-center space-x-4">
            <Button asChild variant="outline">
              <Link to="/signup">Sign Up</Link>
            </Button>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-bright-orange p-2"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0a0a0a]/95 backdrop-blur-lg border-t border-vibrant-pink/20 absolute top-full left-0 right-0 z-50 p-4 animate-fade-in max-h-[80vh] overflow-y-auto">
          <nav className="flex flex-col space-y-1">
            <Link
              to="/"
              className="py-2 px-4 text-lg text-white hover:text-bright-orange transition-colors border-b border-vibrant-pink/10"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>

            <div>
              <button
                className="w-full flex justify-between items-center py-2 px-4 text-lg text-white hover:text-bright-orange transition-colors border-b border-vibrant-pink/10"
                onClick={() => toggleSubmenu('features')}
              >
                Features
                {activeSubmenu === 'features' ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
              </button>
              {activeSubmenu === 'features' && (
                <div className="py-2 px-6 space-y-2 bg-dark-gray/20 rounded-md my-1">
                  <Link
                    to="/features"
                    className="block py-1 text-light-gray hover:text-bright-orange"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    AI Tutor
                  </Link>
                  <Link
                    to="/features"
                    className="block py-1 text-light-gray hover:text-bright-orange"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Study Planner
                  </Link>
                  <Link
                    to="/features"
                    className="block py-1 text-light-gray hover:text-bright-orange"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Knowledge Feed
                  </Link>
                  <Link
                    to="/features"
                    className="block py-1 text-light-gray hover:text-bright-orange"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    View All Features
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/pricing"
              className="py-2 px-4 text-lg text-white hover:text-bright-orange transition-colors border-b border-vibrant-pink/10"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </Link>

            <Link
              to="/about"
              className="py-2 px-4 text-lg text-white hover:text-bright-orange transition-colors border-b border-vibrant-pink/10"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>

            <div>
              <button
                className="w-full flex justify-between items-center py-2 px-4 text-lg text-white hover:text-bright-orange transition-colors border-b border-vibrant-pink/10"
                onClick={() => toggleSubmenu('resources')}
              >
                Resources
                {activeSubmenu === 'resources' ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
              </button>
              {activeSubmenu === 'resources' && (
                <div className="py-2 px-6 space-y-2 bg-dark-gray/20 rounded-md my-1">
                  <Link
                    to="/help-center"
                    className="block py-1 text-light-gray hover:text-bright-orange"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Help Center
                  </Link>
                  <Link
                    to="/documentation"
                    className="block py-1 text-light-gray hover:text-bright-orange"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Documentation
                  </Link>
                  <Link
                    to="/tutorials"
                    className="block py-1 text-light-gray hover:text-bright-orange"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Tutorials
                  </Link>
                  <Link
                    to="/webinars"
                    className="block py-1 text-light-gray hover:text-bright-orange"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Webinars
                  </Link>
                  <Link
                    to="/blog"
                    className="block py-1 text-light-gray hover:text-bright-orange"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Blog
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/contact"
              className="py-2 px-4 text-lg text-white hover:text-bright-orange transition-colors border-b border-vibrant-pink/10"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>

            <div className="flex flex-col space-y-3 pt-4 border-t border-vibrant-pink/20">
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

const FeatureNavItem = ({ title, href, description }: { title: string; href: string; description: string }) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          to={href}
          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gradient-to-r hover:from-[#6e0415]/20 hover:to-[#ff2100]/20 hover:text-[#ff2100]"
        >
          <div className="text-sm font-medium leading-none text-white">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-light-gray">
            {description}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}

const ResourceNavItem = ({ title, href }: { title: string; href: string }) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          to={href}
          className="block select-none rounded-md p-2 text-sm leading-none no-underline outline-none transition-colors hover:bg-gradient-to-r hover:from-[#6e0415]/20 hover:to-[#ff2100]/20 hover:text-[#ff2100] text-white"
        >
          {title}
        </Link>
      </NavigationMenuLink>
    </li>
  )
}
