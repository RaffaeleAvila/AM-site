import { useState, useEffect } from 'react';
import heroImage from '../assets/images/hero-dottoressa.jpeg';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-white via-brand-gray to-white overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-brand-gold opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-brand-blue opacity-5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 py-16 md:py-24 relative z-10">
        <div className="flex flex-col lg:flex-row items-center min-h-[80vh]">
          
          {/* Blocco Testo */}
          <div className={`lg:w-1/2 mb-12 lg:mb-0 text-center lg:text-left transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="mb-6">
              <span className="inline-block bg-brand-gold bg-opacity-20 text-brand-blue px-4 py-2 rounded-full text-sm font-medium mb-6">
                Medicina e Chirurgia Rigenerativa
              </span>
            </div>
            
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-brand-blue font-bold leading-tight mb-6">
              Dott.ssa <span className="text-brand-gold">Alice Miegge</span>
            </h1>
            
            <h2 className="font-sans text-xl md:text-2xl text-text-dark mb-6 font-light">
              L'approccio rigenerativo per una bellezza autentica
            </h2>
            
            <p className="text-gray-600 mb-8 text-lg leading-relaxed max-w-2xl">
              Medicina estetica e chirurgia rigenerativa con un approccio personalizzato che unisce rigore scientifico, 
              tecniche innovative e attenzione all'unicità di ogni paziente.
            </p>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 mb-8 text-sm text-gray-600">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-brand-gold rounded-full mr-2"></div>
                Laureata UniTO
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-brand-gold rounded-full mr-2"></div>
                Master UniPV
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-brand-gold rounded-full mr-2"></div>
                Milano & Seregno
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href="#trattamenti" 
                className="bg-brand-blue text-white font-semibold py-4 px-8 rounded-full hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Scopri i Trattamenti
              </a>
              <a 
                href="#contatti" 
                className="border-2 border-brand-blue text-brand-blue font-semibold py-4 px-8 rounded-full hover:bg-brand-blue hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                Prenota Consulto
              </a>
            </div>
          </div>

          {/* Blocco Immagine */}
          <div className={`lg:w-1/2 flex justify-center lg:justify-end transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative">
              {/* Decorative Frame */}
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-brand-gold rounded-2xl opacity-30"></div>
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-brand-blue opacity-10 rounded-2xl"></div>
              
              {/* Main Image */}
              <div className="relative w-80 md:w-96 lg:w-full max-w-md rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={heroImage} 
                  alt="Dottoressa Alice Miegge" 
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700" 
                />
              </div>
              
              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg max-w-xs">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-700">Disponibile per Consulti</span>
                </div>
                <p className="text-xs text-gray-500 mt-1">Milano • Seregno</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-brand-blue rounded-full flex justify-center">
            <div className="w-1 h-3 bg-brand-blue rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
