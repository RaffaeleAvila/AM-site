import { useState, useEffect } from 'react';
import heroImage from '../assets/images/hero-dottoressa.jpeg';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="min-h-screen bg-white">
      <div className="container mx-auto px-4 pt-24 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          
          {/* Content Column */}
          <div className={`text-center lg:text-left transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            
            {/* Badge */}
            <div className="inline-flex items-center bg-brand-gray border border-brand-blue/20 rounded-full px-4 py-2 mb-8">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
              <span className="text-brand-blue font-medium text-sm">MEDICINA ESTETICA D'ECCELLENZA</span>
            </div>

            {/* Main Title */}
            <h1 className="text-display font-serif text-brand-blue mb-6">
              Dott.ssa <span className="text-brand-gold">Alice Miegge</span>
            </h1>
            
            {/* Subtitle */}
            <h2 className="text-subtitle mb-8">
              Medicina Estetica e Chirurgia Rigenerativa
            </h2>

            {/* Description */}
            <p className="text-lg text-text-light mb-12 max-w-2xl mx-auto lg:mx-0">
              Approccio personalizzato per una bellezza autentica. Trattamenti all'avanguardia 
              ispirati ai più alti standard di medicina rigenerativa.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <a href="#contatti" className="btn-primary">
                Prenota Consulenza
              </a>
              <a href="#trattamenti" className="btn-secondary">
                Scopri i Trattamenti
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-sm text-text-light">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-brand-gold rounded-full mr-2"></div>
                <span>15+ anni esperienza</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-brand-gold rounded-full mr-2"></div>
                <span>Milano & Seregno</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-brand-gold rounded-full mr-2"></div>
                <span>1000+ pazienti soddisfatti</span>
              </div>
            </div>
          </div>

          {/* Image Column */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="relative max-w-md mx-auto">
              
              {/* Main Image */}
              <div className="relative bg-white rounded-2xl p-4 shadow-xl">
                <img 
                  src={heroImage} 
                  alt="Dottoressa Alice Miegge" 
                  className="w-full h-auto rounded-xl object-cover"
                />
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl p-4 shadow-lg border border-gray-100">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                  <div>
                    <div className="font-semibold text-brand-blue text-sm">Medico Chirurgo</div>
                    <div className="text-xs text-text-light">Specialista in Chirurgia Generale</div>
                  </div>
                </div>
              </div>

              {/* Experience Badge */}
              <div className="absolute -top-4 -right-4 bg-brand-gold text-white rounded-xl p-3 shadow-lg">
                <div className="text-center">
                  <div className="text-xl font-bold">15+</div>
                  <div className="text-xs">Anni</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-col items-center">
            <span className="text-text-light text-sm mb-2">Scopri di più</span>
            <div className="w-6 h-10 border-2 border-brand-blue rounded-full flex justify-center">
              <div className="w-1 h-3 bg-brand-blue rounded-full mt-2 animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
