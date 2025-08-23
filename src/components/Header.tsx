import { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import maxlinEagleLogo from '/lovable-uploads/2df46450-9fad-4f9b-8b1e-ece0c3c70869.png';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Products', href: '#products' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
    { label: 'Blog', href: '#blog' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-primary text-primary-foreground py-2 text-sm">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>+260979927525</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <span>sales@maxlinenterprise.com</span>
            </div>
          </div>
          <div className="hidden md:block">
            <span className="font-medium">Today's Hygiene For Tomorrow's Health</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header 
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled 
            ? 'bg-background/95 backdrop-blur-sm border-b shadow-md' 
            : 'bg-background border-b'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex h-20 items-center justify-between lg:justify-start">
            {/* Logo */}
            <div className="flex items-center justify-center lg:justify-start space-x-3 flex-1 lg:flex-none">
              <img src={maxlinEagleLogo} alt="Maxlin Enterprise Eagle Logo" className="h-14 w-auto" />
              <div className="block">
                <h1 className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-[#0101ff] via-primary to-[#0101ff] bg-clip-text text-transparent">
                  Maxlin Enterprise Limited
                </h1>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8 ml-auto">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="text-foreground hover:text-primary transition-colors font-medium"
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center space-x-4 ml-6">
              <Button 
                onClick={() => scrollToSection('#contact')}
                className="btn-hero-primary"
              >
                Get Quote
              </Button>
            </div>

            {/* Mobile Menu */}
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
                  {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col space-y-6 mt-6">
                  {navItems.map((item) => (
                    <button
                      key={item.label}
                      onClick={() => scrollToSection(item.href)}
                      className="text-left text-lg font-medium text-foreground hover:text-primary transition-colors"
                    >
                      {item.label}
                    </button>
                  ))}
                  <div className="pt-6 border-t">
                    <Button 
                      onClick={() => scrollToSection('#contact')}
                      className="btn-hero-primary w-full"
                    >
                      Get Quote
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </>
  );
};