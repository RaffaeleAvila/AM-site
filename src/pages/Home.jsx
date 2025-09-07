// src/pages/Home.jsx
import { useState, useEffect } from 'react';
import OptimizedImage, { HeroImage } from '../components/OptimizedImage';
import assets, { generatePlaceholder } from '../config/assets';

// Componente per animazione typewriter
const TypewriterEffect = ({ text, delay = 100 }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, delay);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, delay]);

  return (
    <span className="relative">
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

// Componente per badge animato
const AnimatedBadge = ({ children, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div className={`
      inline-flex items-center bg-white/10 backdrop-blur-md 
      border border-white/20 rounded-full px-4 py-2
      transition-all duration-700 transform
      ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
    `}>
      {children}
    </div>
  );
};

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
    
    // Effetto mouse parallax
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      {/* Hero Section Premium */}
      <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#1a365d] via-[#2c5282] to-[#1a365d]">
        
        {/* Background decorativo con animazione */}
        <div className="absolute inset-0">
          {/* Pattern geometrico animato */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-[#d4af37] to-transparent rounded-full blur-3xl animate-pulse" 
                 style={{ transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)` }} />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-white to-transparent rounded-full blur-3xl animate-pulse delay-1000" 
                 style={{ transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)` }} />
          </div>
          
          {/* Immagine di sfondo con overlay */}
          <div className="absolute inset-0 opacity-30">
            <HeroImage 
              src={assets.images.heroBackground || generatePlaceholder('Studio', 1920)}
              alt="Studio medico elegante"
              parallaxOffset={0.3}
            />
          </div>
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a365d]/80 via-[#1a365d]/60 to-[#1a365d]/90" />
        </div>

        {/* Contenuto principale */}
        <div className="relative z-10 container mx-auto px-6 min-h-screen flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20">
            
            {/* Colonna contenuto */}
            <div className={`text-center lg:text-left transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              
              {/* Badge premium */}
              <AnimatedBadge delay={200}>
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse mr-2" />
                <span className="text-white/90 font-medium text-xs uppercase tracking-wider">
                  Medicina Rigenerativa D'Eccellenza
                </span>
              </AnimatedBadge>

              {/* Titolo principale con effetto */}
              <h1 className="mt-8 mb-4">
                <span className="block font-['Playfair_Display'] text-5xl md:text-6xl lg:text-7xl text-white font-light leading-tight">
                  Dott.ssa
                </span>
                <span className="block font-['Playfair_Display'] text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-[#d4af37] to-[#f4e4c1] bg-clip-text text-transparent leading-tight">
                  Alice Miegge
                </span>
              </h1>
              
              {/* Sottotitolo elegante */}
              <div className="text-xl md:text-2xl text-white/80 font-light mb-8">
                <TypewriterEffect text="Medicina Estetica & Chirurgia Plastica Rigenerativa" delay={50} />
              </div>

              {/* Descrizione raffinata */}
              <p className="text-lg text-white/70 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
                Al centro del mio lavoro c'è la profonda convinzione che la vera bellezza 
                risieda nell'<span className="text-[#d4af37] font-medium">armonia</span> e 
                nell'<span className="text-[#d4af37] font-medium">autenticità</span> di ogni persona. 
                Un approccio a 360°, orientato alla rigenerazione e al ripristino della naturalità dei tessuti.
              </p>

              {/* CTA Buttons Premium */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
                <button className="group relative overflow-hidden bg-gradient-to-r from-[#d4af37] to-[#f4e4c1] text-[#1a365d] font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                  <span className="relative z-10">Prenota Consulenza Personalizzata</span>
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                </button>
                
                <button className="group border-2 border-white/30 text-white font-medium py-4 px-8 rounded-full transition-all duration-300 hover:bg-white hover:text-[#1a365d] transform hover:scale-105 backdrop-blur-sm">
                  <span className="flex items-center">
                    Scopri i Trattamenti
                    <svg className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </button>
              </div>

              {/* Trust Indicators Premium */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-8">
                {[
                  { icon: '✨', text: '15+ anni di esperienza' },
                  { icon: '📍', text: 'Milano & Seregno' },
                  { icon: '⭐', text: '1000+ pazienti soddisfatti' },
                ].map((item, index) => (
                  <div 
                    key={index}
                    className={`flex items-center text-white/60 transition-all duration-500 delay-${index * 100} ${
                      isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                    }`}
                  >
                    <span className="text-[#d4af37] mr-2">{item.icon}</span>
                    <span className="text-sm font-light">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Colonna immagine con card fluttuanti */}
            <div className={`relative transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}>
              <div className="relative max-w-md mx-auto">
                
                {/* Immagine principale con frame elegante */}
                <div className="relative">
                  {/* Frame decorativo */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-[#d4af37]/20 to-[#f4e4c1]/20 rounded-3xl blur-2xl" />
                  
                  <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-2 shadow-2xl">
                    <OptimizedImage
                      src={assets.images.heroDottoressa || generatePlaceholder('Dott.ssa AM', 600)}
                      alt="Dottoressa Alice Miegge"
                      className="w-full h-[500px] rounded-xl"
                      aspectRatio="3/4"
                      priority={true}
                    />
                  </div>
                </div>
                
                {/* Card fluttuante - Certificazione */}
                <div className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-2xl transform hover:scale-105 transition-all duration-300 animate-float">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-bold text-[#1a365d] text-sm">Medico Chirurgo</div>
                      <div className="text-xs text-gray-600">Specialista Certificata</div>
                    </div>
                  </div>
                </div>

                {/* Card fluttuante - Esperienza */}
                <div className="absolute -top-6 -right-6 bg-gradient-to-br from-[#d4af37] to-[#f4e4c1] text-[#1a365d] rounded-2xl p-4 shadow-2xl transform hover:scale-105 transition-all duration-300 animate-float-delayed">
                  <div className="text-center">
                    <div className="text-3xl font-bold">15+</div>
                    <div className="text-xs font-medium uppercase tracking-wider">Anni Esperienza</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator Elegante */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60">
          <div className="flex flex-col items-center space-y-2 animate-bounce">
            <span className="text-xs uppercase tracking-wider font-light">Scopri di più</span>
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-scroll" />
            </div>
          </div>
        </div>
      </section>

      {/* Sezione Trust & Credibility */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
            {[
              'Ordine dei Medici Torino',
              'AICPE',
              'SIME',
              'Lipogems® Certified'
            ].map((org, index) => (
              <div key={index} className="text-center">
                <div className="h-16 flex items-center justify-center">
                  <span className="text-gray-400 font-light text-sm uppercase tracking-wider">
                    {org}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
