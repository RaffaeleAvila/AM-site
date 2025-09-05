import { useState, useEffect } from 'react';
import logo from '../assets/images/logo-am.png';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const navItems = [
    { name: 'La Dottoressa', href: '#la-dottoressa' },
    { name: 'Trattamenti', href: '#trattamenti' },
    { name: 'Dove Riceve', href: '#dove-riceve' },
    { name: 'Contatti', href: '#contatti' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white/95'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            
            {/* Logo Section */}
            <div className="flex items-center">
              <img 
                src={logo} 
                alt="Logo Dottoressa Miegge" 
                className="h-10 w-auto" 
              />
              <div className="ml-3 hidden sm:block">
                <h1 className="font-serif text-lg font-bold text-brand-blue">
                  Dott.ssa Alice Miegge
                </h1>
                <p className="text-xs text-text-light">
                  Medicina Estetica
                </p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map(item => (
                <a 
                  key={item.name} 
                  href={item.href} 
                  className="text-text-dark hover:text-brand-blue transition-colors duration-300 font-medium"
                >
                  {item.name}
                </a>
              ))}
              <a 
                href="#contatti" 
                className="btn-primary"
              >
                Prenota
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 relative">
                <span className={`absolute h-0.5 w-6 bg-brand-blue transform transition-all duration-300 ${
                  isMenuOpen ? 'rotate-45 top-3' : 'top-1'
                }`}></span>
                <span className={`absolute h-0.5 w-6 bg-brand-blue transform transition-all duration-300 top-3 ${
                  isMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}></span>
                <span className={`absolute h-0.5 w-6 bg-brand-blue transform transition-all duration-300 ${
                  isMenuOpen ? '-rotate-45 top-3' : 'top-5'
                }`}></span>
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="absolute inset-0 bg-black bg-opacity-50" onClick={handleLinkClick}></div>
          <div className="absolute top-0 right-0 h-full w-80 max-w-full bg-white shadow-xl">
            <div className="p-6 pt-24">
              <nav className="space-y-6">
                {navItems.map(item => (
                  <a 
                    key={item.name}
                    href={item.href} 
                    className="block text-lg font-medium text-text-dark hover:text-brand-blue transition-colors duration-300"
                    onClick={handleLinkClick}
                  >
                    {item.name}
                  </a>
                ))}
                <a 
                  href="#contatti" 
                  className="btn-primary block text-center mt-8"
                  onClick={handleLinkClick}
                >
                  Prenota Consulenza
                </a>
              </nav>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
