// src/components/Header.jsx
import { useState, useEffect } from 'react';
import assets, { generatePlaceholder } from '../config/assets';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  
  const navItems = [
    { name: 'Home', href: '#home', icon: '🏠' },
    { name: 'La Dottoressa', href: '#la-dottoressa', icon: '👩‍⚕️' },
    { name: 'Trattamenti', href: '#trattamenti', icon: '💉' },
    { name: 'Dove Riceve', href: '#dove-riceve', icon: '📍' },
    { name: 'Contatti', href: '#contatti', icon: '📞' }
  ];

  useEffect(() => {
    // Handle scroll for header transparency
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'la-dottoressa', 'trattamenti', 'dove-riceve', 'contatti'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setIsMenuOpen(false);
    
    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      const offset = 80; // Height of fixed header
      const targetPosition = targetElement.offsetTop - offset;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      {/* Main Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' 
          : 'bg-transparent py-5'
      }`}>
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center">
            
            {/* Logo Section - Enhanced */}
            <a href="#home" className="flex items-center group">
              <div className="relative">
                {/* Logo Image or Placeholder */}
                <div className="w-12 h-12 bg-gradient-to-br from-brand-gold to-brand-gold-light rounded-full flex items-center justify-center shadow-lg group-hover:shadow-gold transition-all duration-300">
                  <span className="text-brand-navy font-display font-bold text-xl">AM</span>
                </div>
                {/* Pulse Effect */}
                <div className="absolute inset-0 bg-brand-gold rounded-full animate-ping opacity-20"></div>
              </div>
              
              {/* Text Logo */}
              <div className="ml-3 hidden sm:block">
                <h1 className={`font-display text-lg font-bold transition-colors duration-300 ${
                  isScrolled ? 'text-brand-navy' : 'text-white'
                }`}>
                  Dott.ssa Alice Miegge
                </h1>
                <p className={`text-xs transition-colors duration-300 ${
                  isScrolled ? 'text-gray-600' : 'text-white/80'
                }`}>
                  Medicina Estetica & Chirurgia Plastica
                </p>
              </div>
            </a>

            {/* Desktop Navigation - Premium Style */}
            <nav className="hidden lg:flex items-center">
              <ul className="flex items-center space-x-1">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      onClick={(e) => handleLinkClick(e, item.href)}
                      className={`relative px-4 py-2 font-medium transition-all duration-300 group ${
                        activeSection === item.href.replace('#', '')
                          ? isScrolled 
                            ? 'text-brand-gold' 
                            : 'text-white'
                          : isScrolled 
                            ? 'text-gray-700 hover:text-brand-gold' 
                            : 'text-white/80 hover:text-white'
                      }`}
                    >
                      <span className="relative z-10">{item.name}</span>
                      
                      {/* Active Indicator */}
                      {activeSection === item.href.replace('#', '') && (
                        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-gold to-brand-gold-light"></div>
                      )}
                      
                      {/* Hover Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-brand-gold/10 to-brand-gold-light/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                    </a>
                  </li>
                ))}
              </ul>
              
              {/* CTA Button */}
              <div className="ml-8 flex items-center space-x-4">
                {/* Phone Number */}
                <a
                  href="tel:+393401234567"
                  className={`flex items-center font-medium transition-colors duration-300 ${
                    isScrolled ? 'text-gray-600 hover:text-brand-gold' : 'text-white/80 hover:text-white'
                  }`}
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="hidden xl:inline">+39 340 123 4567</span>
                </a>
                
                {/* Book Button */}
                <a
                  href="#contatti"
                  onClick={(e) => handleLinkClick(e, '#contatti')}
                  className="bg-gradient-to-r from-brand-gold to-brand-gold-light text-brand-navy font-bold px-6 py-3 rounded-full hover:shadow-gold transition-all duration-300 transform hover:scale-105"
                >
                  Prenota Consulenza
                </a>
              </div>
            </nav>

            {/* Mobile Menu Toggle - Animated */}
            <button
              className="lg:hidden relative w-10 h-10 flex items-center justify-center group"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-5">
                <span className={`absolute h-0.5 w-full bg-current transform transition-all duration-300 ${
                  isMenuOpen ? 'rotate-45 top-2' : 'top-0'
                } ${isScrolled ? 'bg-brand-navy' : 'bg-white'}`}></span>
                <span className={`absolute h-0.5 w-full bg-current transform transition-all duration-300 top-2 ${
                  isMenuOpen ? 'opacity-0' : 'opacity-100'
                } ${isScrolled ? 'bg-brand-navy' : 'bg-white'}`}></span>
                <span className={`absolute h-0.5 w-full bg-current transform transition-all duration-300 ${
                  isMenuOpen ? '-rotate-45 top-2' : 'top-4'
                } ${isScrolled ? 'bg-brand-navy' : 'bg-white'}`}></span>
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu - Full Screen Premium */}
      <div className={`fixed inset-0 z-40 transition-all duration-500 lg:hidden ${
        isMenuOpen ? 'visible' : 'invisible'
      }`}>
        {/* Backdrop */}
        <div 
          className={`absolute inset-0 bg-black transition-opacity duration-500 ${
            isMenuOpen ? 'opacity-50' : 'opacity-0'
          }`}
          onClick={() => setIsMenuOpen(false)}
        />
        
        {/* Menu Panel */}
        <div className={`absolute right-0 top-0 h-full w-full sm:w-96 bg-white shadow-2xl transform transition-transform duration-500 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          {/* Menu Header */}
          <div className="bg-gradient-to-br from-brand-navy to-brand-navy-light p-6">
            <div className="flex justify-between items-center mb-8">
              <div className="text-white">
                <h2 className="font-display text-2xl font-bold">Menu</h2>
                <p className="text-white/70 text-sm">Navigazione</p>
              </div>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-300"
              >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
          
          {/* Menu Items */}
          <nav className="p-6">
            <ul className="space-y-2">
              {navItems.map((item, index) => (
                <li 
                  key={item.name}
                  className={`transform transition-all duration-500 ${
                    isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <a
                    href={item.href}
                    onClick={(e) => handleLinkClick(e, item.href)}
                    className={`flex items-center p-4 rounded-xl hover:bg-gray-50 transition-colors duration-300 group ${
                      activeSection === item.href.replace('#', '') ? 'bg-brand-gold/10 text-brand-gold' : 'text-gray-700'
                    }`}
                  >
                    <span className="text-2xl mr-4 group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </span>
                    <span className="font-medium text-lg">{item.name}</span>
                    <svg className="w-5 h-5 ml-auto text-gray-400 group-hover:text-brand-gold transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
            
            {/* Mobile CTA */}
            <div className="mt-8 space-y-4">
              <a
                href="#contatti"
                onClick={(e) => handleLinkClick(e, '#contatti')}
                className="block w-full bg-gradient-to-r from-brand-gold to-brand-gold-light text-brand-navy font-bold py-4 rounded-full text-center hover:shadow-gold transition-all duration-300"
              >
                Prenota Consulenza
              </a>
              
              <a
                href="tel:+393401234567"
                className="flex items-center justify-center w-full border-2 border-brand-navy text-brand-navy font-medium py-4 rounded-full hover:bg-brand-navy hover:text-white transition-all duration-300"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Chiama Ora
              </a>
            </div>
            
            {/* Social Links */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <p className="text-gray-500 text-sm mb-4">Seguici sui social</p>
              <div className="flex space-x-4">
                {['instagram', 'facebook', 'linkedin'].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-brand-gold hover:text-white transition-all duration-300"
                  >
                    <span className="text-xs font-bold uppercase">{social[0]}</span>
                  </a>
                ))}
              </div>
            </div>
          </nav>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/393401234567?text=Buongiorno, vorrei informazioni sui trattamenti"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-40 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 hover:scale-110 transition-all duration-300 group"
        aria-label="Contatta su WhatsApp"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
        </svg>
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
          1
        </span>
      </a>
    </>
  );
}
