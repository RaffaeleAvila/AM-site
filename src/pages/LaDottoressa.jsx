// src/pages/LaDottoressa.jsx
import { useState, useEffect, useRef } from 'react';
import OptimizedImage from '../components/OptimizedImage';
import assets, { generatePlaceholder } from '../config/assets';

// Timeline Component per la formazione
const Timeline = ({ items, isVisible }) => {
  return (
    <div className="relative">
      {/* Linea verticale */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#d4af37] to-[#1a365d]" />
      
      {items.map((item, index) => (
        <div
          key={index}
          className={`relative flex items-start mb-8 transition-all duration-700 delay-${index * 100} ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}
        >
          {/* Dot */}
          <div className="absolute left-8 w-4 h-4 bg-[#d4af37] rounded-full -translate-x-1/2 ring-4 ring-white shadow-lg" />
          
          {/* Content */}
          <div className="ml-20 bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h4 className="font-semibold text-[#1a365d] text-lg mb-1">{item.titolo}</h4>
                <p className="text-[#d4af37] font-medium mb-2">{item.universita}</p>
                {item.voto && (
                  <span className="inline-block bg-gradient-to-r from-[#d4af37]/10 to-[#f4e4c1]/10 text-[#1a365d] px-3 py-1 rounded-full text-sm font-medium">
                    {item.voto}
                  </span>
                )}
              </div>
              {item.anno && (
                <span className="text-gray-400 text-sm font-light">{item.anno}</span>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

// Stats Counter Component
const StatsCounter = ({ end, label, suffix = '', isVisible }) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    if (!isVisible) return;
    
    const duration = 2000;
    const steps = 60;
    const increment = end / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    
    return () => clearInterval(timer);
  }, [end, isVisible]);
  
  return (
    <div className="text-center">
      <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#d4af37] to-[#f4e4c1] bg-clip-text text-transparent">
        {count}{suffix}
      </div>
      <div className="text-gray-600 text-sm mt-2 uppercase tracking-wider">{label}</div>
    </div>
  );
};

export default function LaDottoressa() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('filosofia');
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const formazione = [
    {
      titolo: "Laurea in Medicina e Chirurgia",
      universita: "Università degli Studi di Torino",
      voto: "110/110 e Lode",
      anno: "2008"
    },
    {
      titolo: "Specializzazione in Chirurgia Generale",
      universita: "Università degli Studi di Torino",
      voto: "110/110 e Lode",
      anno: "2014"
    },
    {
      titolo: "Master II Livello in Medicina Estetica",
      universita: "Università degli Studi di Pavia",
      voto: "110/110 e Lode",
      anno: "2016"
    },
    {
      titolo: "Certificazione Lipogems®",
      universita: "Prof. Carlo Tremolada - Milano",
      anno: "2018"
    },
    {
      titolo: "Advanced Training in Laser Therapy",
      universita: "European Academy of Aesthetic Medicine",
      anno: "2020"
    }
  ];

  const expertise = [
    {
      icon: "🧬",
      title: "Medicina Rigenerativa",
      description: "Tecniche avanzate con Lipogems® per la rigenerazione tissutale naturale"
    },
    {
      icon: "✨",
      title: "Chirurgia Mini-Invasiva",
      description: "Interventi di precisione con tempi di recupero ridotti"
    },
    {
      icon: "💎",
      title: "Laser Terapia",
      description: "Trattamenti laser di ultima generazione per viso e corpo"
    },
    {
      icon: "🎯",
      title: "Approccio Personalizzato",
      description: "Protocolli su misura per ogni paziente"
    }
  ];

  const stats = [
    { value: 15, suffix: '+', label: 'Anni di Esperienza' },
    { value: 1000, suffix: '+', label: 'Pazienti Soddisfatti' },
    { value: 5000, suffix: '+', label: 'Trattamenti Eseguiti' },
    { value: 98, suffix: '%', label: 'Tasso di Soddisfazione' }
  ];

  return (
    <section id="la-dottoressa" ref={sectionRef} className="py-20 md:py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <span className="inline-block bg-gradient-to-r from-[#d4af37]/20 to-[#f4e4c1]/20 text-[#1a365d] px-4 py-2 rounded-full text-sm font-medium mb-4 uppercase tracking-wider">
            Chi Sono
          </span>
          <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl lg:text-6xl text-[#1a365d] font-bold mb-6">
            Dott.ssa Alice Miegge
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Esperienza, passione e dedizione alla tua bellezza naturale
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
          
          {/* Left Column - Image & Stats */}
          <div className={`transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}>
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative">
                {/* Decorative Frame */}
                <div className="absolute -inset-4 bg-gradient-to-br from-[#d4af37]/20 to-[#1a365d]/20 rounded-3xl blur-2xl" />
                
                <div className="relative bg-white rounded-2xl p-3 shadow-2xl">
                  <OptimizedImage
                    src={assets.images.profiloDottoressa || generatePlaceholder('Dr. AM', 600)}
                    alt="Dottoressa Alice Miegge - Profilo Professionale"
                    className="w-full h-[600px] rounded-xl"
                    aspectRatio="3/4"
                  />
                  
                  {/* Overlay Quote */}
                  <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-xl">
                    <blockquote className="text-[#1a365d] italic font-['Playfair_Display']">
                      "Il mio obiettivo è accompagnare ogni persona in un percorso di rigenerazione 
                      e valorizzazione per ritrovare il proprio equilibrio estetico e benessere interiore."
                    </blockquote>
                  </div>
                </div>
              </div>
              
              {/* Floating Badges */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-br from-[#d4af37] to-[#f4e4c1] text-white rounded-2xl p-4 shadow-xl animate-float">
                <div className="text-center">
                  <div className="text-2xl font-bold">Top</div>
                  <div className="text-xs">Doctor 2024</div>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6 mt-12">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <StatsCounter 
                    end={stat.value} 
                    suffix={stat.suffix} 
                    label={stat.label} 
                    isVisible={isVisible}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Content */}
          <div className={`transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}>
            
            {/* Tab Navigation */}
            <div className="flex space-x-4 mb-8 border-b border-gray-200">
              {['filosofia', 'formazione', 'expertise'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-4 px-2 font-medium capitalize transition-all duration-300 ${
                    activeTab === tab
                      ? 'text-[#d4af37] border-b-2 border-[#d4af37]'
                      : 'text-gray-500 hover:text-[#1a365d]'
                  }`}
                >
                  {tab === 'filosofia' ? 'La Mia Filosofia' : 
                   tab === 'formazione' ? 'Formazione' : 'Expertise'}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="min-h-[400px]">
              {/* Filosofia Tab */}
              {activeTab === 'filosofia' && (
                <div className="space-y-6 animate-fadeIn">
                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700 leading-relaxed">
                      La mia visione della medicina estetica e della chirurgia plastica va oltre il 
                      semplice trattamento degli inestetismi. Al centro del mio lavoro c'è la profonda 
                      convinzione che la vera bellezza risieda nell'<span className="font-semibold text-[#d4af37]">armonia</span> e 
                      nell'<span className="font-semibold text-[#d4af37]">autenticità</span> di ogni persona.
                    </p>
                    
                    <p className="text-gray-700 leading-relaxed">
                      Si tratta di esaltare la tua unicità, donandoti un'immagine più fresca, riposata 
                      e in linea con il tuo benessere interiore. Ogni percorso inizia con un ascolto 
                      attento e profondo delle tue esigenze, dei tuoi desideri e delle tue aspettative.
                    </p>
                    
                    <div className="bg-gradient-to-r from-[#d4af37]/10 to-[#f4e4c1]/10 border-l-4 border-[#d4af37] p-6 rounded-r-xl my-6">
                      <p className="text-[#1a365d] font-medium italic">
                        "Credo fermamente che solo attraverso una consulenza personalizzata e un dialogo 
                        trasparente sia possibile definire il trattamento più adatto a te."
                      </p>
                    </div>
                    
                    <p className="text-gray-700 leading-relaxed">
                      La mia esperienza pluriennale in chirurgia generale, unita alla specializzazione 
                      in medicina estetica e laser terapia, mi permette di adottare un approccio a 360°, 
                      orientato alla <span className="font-semibold text-[#d4af37]">rigenerazione</span> e 
                      al ripristino della naturalità dei tessuti, per risultati che durano nel tempo e 
                      che ti rispecchiano davvero.
                    </p>
                    
                    <p className="text-gray-700 leading-relaxed">
                      La <span className="font-semibold text-[#1a365d]">sicurezza</span> è la mia priorità 
                      assoluta. Per questo motivo, mi avvalgo solo delle tecniche più innovative e validate 
                      scientificamente, utilizzando strumentazioni all'avanguardia e protocolli rigorosi.
                    </p>
                  </div>
                </div>
              )}

              {/* Formazione Tab */}
              {activeTab === 'formazione' && (
                <div className="animate-fadeIn">
                  <Timeline items={formazione} isVisible={isVisible} />
                </div>
              )}

              {/* Expertise Tab */}
              {activeTab === 'expertise' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fadeIn">
                  {expertise.map((item, index) => (
                    <div
                      key={index}
                      className={`bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 delay-${index * 100}`}
                    >
                      <div className="text-4xl mb-4">{item.icon}</div>
                      <h4 className="font-semibold text-[#1a365d] text-lg mb-2">{item.title}</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* CTA */}
            <div className="mt-12">
              <a 
                href="#contatti" 
                className="inline-flex items-center bg-gradient-to-r from-[#1a365d] to-[#2c5282] text-white font-semibold py-4 px-8 rounded-full hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                Prenota una Consulenza Personalizzata
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Certificazioni Section */}
        <div className={`mt-20 transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h3 className="text-center text-2xl font-['Playfair_Display'] text-[#1a365d] mb-8">
            Affiliazioni e Certificazioni
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: 'Ordine dei Medici', subtitle: 'Torino - N° 12345' },
              { name: 'AICPE', subtitle: 'Associazione Italiana Chirurgia Plastica Estetica' },
              { name: 'SIME', subtitle: 'Società Italiana Medicina Estetica' },
              { name: 'Lipogems® Certified', subtitle: 'Regenerative Medicine' }
            ].map((cert, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[#d4af37]/20 to-[#f4e4c1]/20 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-[#d4af37]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h4 className="font-semibold text-[#1a365d] mb-1">{cert.name}</h4>
                <p className="text-xs text-gray-500">{cert.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
