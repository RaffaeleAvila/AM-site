import { useState } from 'react';
import logo from '../assets/images/logo-am.png';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const navItems = [
    { name: 'La Dottoressa', href: '#la-dottoressa' },
    { name: 'Trattamenti', href: '#trattamenti' },
    { name: 'Dove Riceve', href: '#dove-riceve' }
  ];

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50 transition-all duration-300">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <img src={logo} alt="Logo Dottoressa Miegge" className="h-10 w-auto" />
            <div className="ml-3 hidden sm:block">
              <h1 className="text-brand-blue font-serif text-lg font-semibold">Dott.ssa Alice Miegge</h1>
              <p className="text-xs text-gray-600">Medicina e Chirurgia Estetica</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map(item => (
              <a 
                key={item.name} 
                href={item.href} 
                className="text-text-dark hover:text-brand-gold transition-colors duration-300 font-medium relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-gold transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <a 
              href="#contatti" 
              className="bg-brand-blue text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 font-medium shadow-md"
            >
              Contatti
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-brand-blue p-2 rounded-md hover:bg-brand-gray transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-6">
              <span className={`absolute h-0.5 w-6 bg-current transform transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-0' : 'translate-y-2'}`}></span>
              <span className={`absolute h-0.5 w-6 bg-current transform transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'translate-y-0'}`}></span>
              <span className={`absolute h-0.5 w-6 bg-current transform transition-all duration-300 ${isMenuOpen ? '-rotate-45 translate-y-0' : '-translate-y-2'}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}>
          <nav className="py-4 space-y-2">
            {navItems.map(item => (
              <a 
                key={item.name}
                href={item.href} 
                className="block px-4 py-3 text-text-dark hover:text-brand-gold hover:bg-brand-gray rounded-md transition-all duration-300"
                onClick={handleLinkClick}
              >
                {item.name}
              </a>
            ))}
            <a 
              href="#contatti" 
              className="block mx-4 mt-4 bg-brand-blue text-white px-6 py-3 rounded-full text-center hover:bg-opacity-90 transition-all duration-300"
              onClick={handleLinkClick}
            >
              Contatti
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
