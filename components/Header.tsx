import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Button } from './Button';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#solutions' },
    { name: 'Methodology', href: '#process' },
    { name: 'Tech Stack', href: '#tech' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled 
          ? 'bg-[#050505]/90 backdrop-blur-md border-white/10 py-3' 
          : 'bg-transparent border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#" className="flex items-center gap-3 group">
              <div className="w-8 h-8 bg-white text-black rounded flex items-center justify-center font-bold text-xl group-hover:bg-orange-500 transition-colors">
                Z
              </div>
              <span className="text-xl font-bold text-white tracking-widest uppercase">ZELVA</span>
            </a>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-sm font-medium text-zinc-400 hover:text-white transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-orange-500 transition-all group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* CTAs */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#contact" className="text-sm font-medium text-white hover:text-orange-500 transition-colors">
              Client Portal
            </a>
            <Button size="sm" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth'})}>
              Book Consultation
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-zinc-400 hover:text-white p-2"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#0a0a0a] border-t border-white/10 absolute w-full h-screen shadow-2xl">
          <div className="px-6 pt-8 space-y-6">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="block text-2xl font-bold text-white hover:text-orange-500"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-8 border-t border-white/10">
              <Button fullWidth onClick={() => setIsMobileMenuOpen(false)}>
                Book Consultation
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};