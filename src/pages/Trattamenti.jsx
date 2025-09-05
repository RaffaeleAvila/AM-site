import { useState, useEffect, useRef } from 'react';
import TreatmentCard from '../components/TreatmentCard';

const treatmentsData = {
  medicinaEstetica: [
    { 
      title: 'Filler con Acido Ialuronico', 
      icon: 'filler.png', 
      description: 'Trattamenti personalizzati per ripristinare volumi, idratazione e definire i contorni del viso in modo naturale e armonioso.',
      category: 'medicina'
    },
    { 
      title: 'Tossina Botulinica', 
      icon: 'botox.png', 
      description: 'Per la riduzione delle rughe di espressione e il rilassamento muscolare, ottenendo un aspetto naturale e riposato.',
      category: 'medicina'
    },
    { 
      title: 'Biorivitalizzazione', 
      icon: 'biorivitalizzazione.png', 
      description: 'Iniezioni di sostanze bio-stimolanti per migliorare elasticità, turgore e luminosità della pelle del viso.',
      category: 'medicina'
    },
  ],
  chirurgia: [
    { 
      title: 'Blefaroplastica', 
      icon: 'blefaroplastica.png', 
      description: 'Intervento di chirurgia estetica per la correzione di palpebre superiori e inferiori, per uno sguardo più giovane.',
      category: 'chirurgia'
    },
    { 
      title: 'Liposcultura', 
      icon: 'liposuzione.png', 
      description: 'Rimodellamento della silhouette tramite aspirazione selettiva del grasso localizzato e riposizionamento.',
      category: 'chirurgia'
    },
    { 
      title: 'Lipogems®', 
      icon: 'lipogems.png', 
      description: 'Tecnica rigenerativa innovativa che utilizza il proprio tessuto adiposo per stimolare la rigenerazione naturale.',
      category: 'chirurgia'
    },
  ]
};

export default function Trattamenti() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
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

  const categories = [
    { id: 'all', name: 'Tutti i Trattamenti', count: 6 },
    { id: 'medicina', name: 'Medicina Estetica', count: 3 },
    { id: 'chirurgia', name: 'Chirurgia Rigenerativa', count: 3 }
  ];

  const getFilteredTreatments = () => {
    if (activeCategory === 'all') {
      return [...treatmentsData.medicinaEstetica, ...treatmentsData.chirurgia];
    }
    if (activeCategory === 'medicina') {
      return treatmentsData.medicinaEstetica;
    }
    if (activeCategory === 'chirurgia') {
      return treatmentsData.chirurgia;
    }
    return [];
  };

  return (
    <section id="trattamenti" ref={sectionRef} className="bg-white relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-brand-blue opacity-5 rounded-full -translate-x-36"></div>
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-brand-gold opacity-5 rounded-full translate-x-48"></div>
      
      <div className="container mx-auto px-6 py-20 md:py-32 relative z-10">
        
        {/* Header Section */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block bg-brand-gold bg-opacity-20 text-brand-blue px-4 py-2 rounded-full text-sm font-medium mb-4">
            Medicina e Chirurgia Estetica
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-brand-blue font-bold mb-6">
            I Nostri <span className="text-brand-gold">Trattamenti</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Soluzioni personalizzate per viso e corpo, unite da un approccio rigenerativo 
            che rispetta la bellezza naturale di ogni persona
          </p>
        </div>

        {/* Category Filter */}
        <div className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                activeCategory === category.id
                  ? 'bg-brand-blue text-white shadow-lg'
                  : 'bg-brand-gray text-brand-blue hover:bg-brand-blue hover:text-white'
              }`}
            >
              {category.name}
              <span className="ml-2 text-xs opacity-75">({category.count})</span>
            </button>
          ))}
        </div>

        {/* Treatments Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {getFilteredTreatments().map((trattamento, index) => (
            <div
              key={trattamento.title}
              className={`transition-all duration-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <TreatmentCard {...trattamento} />
            </div>
          ))}
        </div>

        {/* Call to Action Section */}
        <div className={`mt-20 text-center transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gradient-to-r from-brand-blue to-brand-gold p-8 md:p-12 rounded-3xl text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full -translate-x-16 -translate-y-16"></div>
              <div className="absolute bottom-0 right-0 w-48 h-48 bg-white rounded-full translate-x-24 translate-y-24"></div>
            </div>
            
            <div className="relative z-10">
              <h3 className="font-serif text-2xl md:text-3xl font-bold mb-4">
                Prenota la Tua Consulenza Personalizzata
              </h3>
              <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
                Ogni percorso inizia con un'analisi approfondita per creare il piano di trattamento più adatto alle tue esigenze
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="#contatti" 
                  className="bg-white text-brand-blue font-semibold py-4 px-8 rounded-full hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Prenota Consulenza
                </a>
                <a 
                  href="tel:+393401234567" 
                  className="border-2 border-white text-white font-semibold py-4 px-8 rounded-full hover:bg-white hover:text-brand-blue transition-all duration-300 transform hover:scale-105"
                >
                  Chiama Ora
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
