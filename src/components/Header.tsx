import React, { useState } from 'react';
import { Menu as MenuIcon, X, Phone } from 'lucide-react';
import { RESTAURANT_INFO } from '../constants';
import logo from "../../public/logo.png"

interface HeaderProps {
  currentPath: string;
}

const Header: React.FC<HeaderProps> = ({ currentPath }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Menu', href: '#menu' },
    { name: 'Order', href: '#order' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-brand-black border-b border-brand-orange/30 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#home" className="flex items-center space-x-4 group">
              <div className="w-16 h-16 bg-brand-black rounded-full flex items-center justify-center p-0.5 border-4 border-brand-orange shadow-[0_0_15px_rgba(247,147,30,0.4)] transition-transform group-hover:scale-110 group-hover:rotate-12 duration-300 overflow-hidden">
                <img 
                  src={logo} 
                  alt="Halal Pizza Express Logo" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black uppercase tracking-tighter leading-none text-brand-white">
                  HALAL <span className="text-brand-red">PIZZA</span>
                </span>
                <span className="text-brand-orange text-xl font-bold uppercase tracking-[0.2em] leading-none">
                  EXPRESS
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`nav-font text-lg font-bold uppercase tracking-widest transition-all duration-300 relative group ${
                  currentPath === link.href ? 'text-brand-orange' : 'text-brand-white hover:text-brand-orange'
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 w-full h-1 bg-brand-red transition-transform duration-300 origin-left ${
                  currentPath === link.href ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`}></span>
              </a>
            ))}
          </nav>

          {/* Call CTA Desktop */}
          <div className="hidden lg:flex items-center">
             <a 
              href={`tel:${RESTAURANT_INFO.phone.replace(/\D/g, '')}`} 
              className="flex items-center space-x-3 bg-brand-orange text-brand-black px-6 py-3 rounded-md font-black hover:bg-brand-red hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(247,147,30,0.3)] active:scale-95"
            >
              <Phone size={20} fill="currentColor" />
              <span className="tracking-tighter text-lg">{RESTAURANT_INFO.phone}</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-brand-orange hover:text-brand-white p-2 focus:outline-none transition-colors"
            >
              {isMenuOpen ? <X size={36} /> : <MenuIcon size={36} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-brand-black border-t-2 border-brand-orange animate-in slide-in-from-top-4 duration-300">
          <div className="px-6 pt-6 pb-10 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-3 rounded-lg text-2xl font-black uppercase tracking-widest border-l-4 ${
                  currentPath === link.href 
                    ? 'border-brand-red text-brand-orange bg-brand-gray/50' 
                    : 'border-transparent text-brand-white hover:bg-brand-gray hover:text-brand-orange'
                }`}
              >
                {link.name}
              </a>
            ))}
             <a 
              href={`tel:${RESTAURANT_INFO.phone.replace(/\D/g, '')}`}
              className="block w-full text-center bg-brand-red text-white px-4 py-5 rounded-lg text-xl font-black mt-10 shadow-xl"
            >
              CALL TO ORDER
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;