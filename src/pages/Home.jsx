import { useState, useEffect } from 'react';
import heroImage from '../assets/images/hero-dottoressa.jpeg';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentStat, setCurrentStat] = useState(0);

  const stats = [
    { number: "1000+", label: "Pazienti Soddisfatti", suffix: "" },
    { number: "15", label: "Anni di Esperienza", suffix: "+" },
    { number: "98", label: "Tasso di Soddisfazione", suffix: "%" },
    { number: "2", label: "Cliniche d'Eccellenza", suffix: "" }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentStat(prev => (prev + 1) % stats.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
      {/* Sophisticated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-20 w-96 h-96 bg-brand-blue opacity-[0.03] rounded-full blur-3xl"></div>
          <div className="absolute bottom-32 right-32 w-80 h-80 bg-brand-gold opacity-[0.04] rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-slate-200 opacity-[0.02] rounded-full blur-3xl"></div>
        </div>
        
        {/* Geometric Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#1e293b" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid)" />
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center min-h-screen">
          
          {/* Hero Content */}
          <div className={`lg:w-3/5 text-center lg:text-left transition-all duration-1500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            
            {/* Medical Badge */}
            <div className="inline-flex items-center bg-white/80 backdrop-blur-sm border border-brand-blue/20 rounded-full px-6 py-3 mb-8 shadow-lg">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></div>
              <span className="text-brand-blue font-medium text-sm tracking-wide">MEDICINA RIGENERATIVA D'ECCELLENZA</span>
            </div>

            {/* Main Headlines */}
            <h1 className="font-serif text-5xl lg:text-7xl text-slate-900 font-bold leading-[0.9] mb-8">
              <span className="block text-brand-blue">Dott.ssa</span>
              <span className="block text-brand-gold italic">Alice Miegge</span>
            </h1>
            
            <h2 className="text-2xl lg:text-3xl text-slate-700 font-light mb-8 leading-relaxed">
              Medicina Estetica e <br className="hidden lg:block"/>
              <span className="font-medium text-brand-blue">Chirurgia Rigenerativa</span>
            </h2>

            <p className="text-lg text-slate-600 mb-12 leading-relaxed max-w-2xl">
              <span className="font-medium">Eccellenza scientifica</span> e approccio personalizzato per una bellezza autentica. 
              Tratttamenti all'avanguardia ispirati ai più alti standard internazionali di medicina rigenerativa.
            </p>

            {/* Statistics Carousel */}
            <div className="bg-white/70 backdrop-blur-lg rounded-2xl p-8 mb-12 shadow-xl border border-white/40">
              <div className="text-center transition-all duration-500">
                <div className="text-4xl font-bold text-brand-blue mb-2">
                  {stats[currentStat].number}{stats[currentStat].suffix}
                </div>
                <div className="text-slate-600 font-medium">{stats[currentStat].label}</div>
              </div>
              
              {/* Progress Indicators */}
              <div className="flex justify-center mt-6 space-x-2">
                {stats.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentStat ? 'bg-brand-blue w-8' : 'bg-slate-300'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Premium CTAs */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
              <a 
                href="#contatti" 
                className="group relative bg-brand-blue text-white font-semibold py-5 px-10 rounded-full overflow-hidden transition-all duration-500 transform hover:scale-105 shadow-2xl hover:shadow-brand-blue/25"
              >
                <span className="relative z-10">Prenota Consulenza</span>
                <div className="absolute inset-0 bg-gradient-to-r from-brand-blue to-brand-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </a>
              
              <a 
                href="#trattamenti" 
                className="group bg-white/80 backdrop-blur-sm border-2 border-brand-blue text-brand-blue font-semibold py-5 px-10 rounded-full transition-all duration-500 transform hover:scale-105 hover:bg-brand-blue hover:text-white shadow-xl"
              >
                Scopri i Trattamenti
                <svg className="inline-block ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* Clinic Badges */}
            <div className="mt-12 flex flex-wrap justify-center lg:justify-start gap-8 opacity-60">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-brand-gold rounded-full mr-3"></div>
                <span className="text-sm font-medium text-slate-600">Image Regenerative Clinic</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-brand-gold rounded-full mr-3"></div>
                <span className="text-sm font-medium text-slate-600">YouMedical Seregno</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className={`lg:w-2/5 mt-12 lg:mt-0 transition-all duration-1500 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="relative max-w-lg mx-auto">
              
              {/* Premium Frame */}
              <div className="absolute -inset-4">
                <div className="w-full h-full bg-gradient-to-r from-brand-blue via-brand-gold to-brand-blue rounded-3xl blur-lg opacity-20"></div>
              </div>
              
              {/* Image Container */}
              <div className="relative bg-white rounded-3xl p-4 shadow-2xl">
                <div className="relative rounded-2xl overflow-hidden">
                  <img 
                    src={heroImage} 
                    alt="Dottoressa Alice Miegge - Medicina Estetica Milano" 
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700" 
                  />
                  
                  {/* Professional Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/20 via-transparent to-transparent"></div>
                </div>
              </div>
              
              {/* Floating Credentials */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-2xl border border-brand-blue/10">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-green-500 rounded-full mr-3 animate-pulse"></div>
                  <div>
                    <div className="font-bold text-brand-blue">Medico Chirurgo</div>
                    <div className="text-sm text-slate-600">Spec. Chirurgia Generale</div>
                  </div>
                </div>
              </div>

              {/* Medical Excellence Badge */}
              <div className="absolute -top-6 -right-6 bg-brand-gold text-white rounded-2xl p-4 shadow-2xl">
                <div className="text-center">
                  <div className="text-2xl font-bold">15+</div>
                  <div className="text-xs font-medium">Anni</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator Premium */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
          <div className="text-slate-500 text-sm mb-4 font-medium tracking-wide">SCOPRI DI PIÙ</div>
          <div className="w-6 h-10 border-2 border-brand-blue rounded-full flex justify-center animate-bounce">
            <div className="w-1 h-3 bg-brand-blue rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
