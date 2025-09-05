import { useState, useEffect } from 'react';
import logo from '../assets/images/logo-am.png';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const navItems = [
    { name: 'La Dottoressa', href: '#la-dottoressa' },
    { name: 'Trattamenti', href: '#trattamenti' },
    { name: 'Dove Riceve', href: '#dove-riceve' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-xl shadow-xl border-b border-slate-200/50' 
        : 'bg-white/80 backdrop-blur-lg shadow-lg'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          
          {/* Premium Logo Section */}
          <div className="flex items-center group cursor-pointer">
            <div className="relative">
              <img 
                src={logo} 
                alt="Logo Dottoressa Miegge" 
                className="h-12 w-auto transition-transform duration-300 group-hover:scale-105" 
              />
              <div className="absolute -inset-2 bg-gradient-to-r from-brand-blue to-brand-gold rounded-lg opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            </div>
            <div className="ml-4 hidden sm:block">
              <h1 className="font-serif text-xl text-slate-900 font-bold leading-tight">
                Dott.ssa Alice Miegge
              </h1>
              <p className="text-xs text-slate-600 tracking-wide font-medium">
                MEDICINA ESTETICA • CHIRURGIA RIGENERATIVA
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map(item => (
              <a 
                key={item.name} 
                href={item.href} 
                className="relative group text-slate-700 hover:text-brand-blue transition-all duration-300 font-medium py-2"
              >
                <span className="relative z-10">{item.name}</span>
                <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-brand-blue to-brand-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                <div className="absolute inset-0 bg-brand-blue/5 rounded-lg transform scale-0 group-hover:scale-100 transition-transform duration-300"></div>
              </a>
            ))}
            
            {/* Premium CTA Button */}
            <a 
              href="#contatti" 
              className="group relative bg-gradient-to-r from-brand-blue to-brand-gold text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl overflow-hidden"
            >
              <span className="relative z-10">Prenota Consulenza</span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden relative w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center hover:bg-brand-blue/10 transition-all duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-6">
              <span className={`absolute h-0.5 w-6 bg-slate-600 transform transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-0 top-1/2' : 'top-1'}`}></span>
              <span className={`absolute h-0.5 w-6 bg-slate-600 transform transition-all duration-300 top-1/2 ${isMenuOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'}`}></span>
              <span className={`absolute h-0.5 w-6 bg-slate-600 transform transition-all duration-300 ${isMenuOpen ? '-rotate-45 translate-y-0 top-1/2' : 'top-5'}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden overflow-hidden transition-all duration-500 ${
          isMenuOpen ? 'max-h-80 opacity-100 mt-6' : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-slate-200/50 p-6">
            <nav className="space-y-1">
              {navItems.map(item => (
                <a 
                  key={item.name}
                  href={item.href} 
                  className="block group relative px-4 py-4 text-slate-700 hover:text-brand-blue rounded-xl transition-all duration-300 hover:bg-brand-blue/5"
                  onClick={handleLinkClick}
                >
                  <span className="font-medium">{item.name}</span>
                  <div className="absolute left-4 bottom-2 w-0 h-0.5 bg-brand-gold group-hover:w-8 transition-all duration-300"></div>
                </a>
              ))}
              
              {/* Mobile CTA */}
              <div className="pt-4 border-t border-slate-200/50">
                <a 
                  href="#contatti" 
                  className="block w-full bg-gradient-to-r from-brand-blue to-brand-gold text-white text-center py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                  onClick={handleLinkClick}
                >
                  Prenota Consulenza
                </a>
              </div>
            </nav>
          </div>
        </div>
      </div>

      {/* Emergency Contact Bar */}
      {isScrolled && (
        <div className="bg-brand-blue text-white py-2 px-6 text-center transition-all duration-300">
          <div className="flex items-center justify-center space-x-6 text-sm">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
              <span className="font-medium">Disponibile per consulenze</span>
            </div>
            <a href="tel:+393401234567" className="hover:text-brand-gold transition-colors duration-300 font-medium">
              +39 340 123 4567
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
