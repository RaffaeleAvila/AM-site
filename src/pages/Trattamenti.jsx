// src/pages/Trattamenti.jsx
import { useState, useEffect, useRef } from 'react';
import OptimizedImage from '../components/OptimizedImage';
import assets, { generatePlaceholder } from '../config/assets';

// Premium Treatment Card Component
const TreatmentCard = ({ treatment, index, isVisible }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div
      className={`relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 delay-${index * 100} transform hover:-translate-y-2 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
        <OptimizedImage
          src={treatment.image || generatePlaceholder(treatment.title, 400)}
          alt={treatment.title}
          className="w-full h-full object-cover"
        />
        
        {/* Overlay Gradient */}
        <div className={`absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-70'
        }`} />
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-xs font-medium backdrop-blur-md ${
            treatment.category === 'chirurgia' 
              ? 'bg-purple-500/20 text-purple-100 border border-purple-300/30' 
              : 'bg-blue-500/20 text-blue-100 border border-blue-300/30'
          }`}>
            {treatment.category === 'chirurgia' ? 'Chirurgia Rigenerativa' : 'Medicina Estetica'}
          </span>
        </div>

        {/* Title Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="text-2xl font-['Playfair_Display'] text-white font-bold mb-2">
            {treatment.title}
          </h3>
          <p className="text-white/80 text-sm line-clamp-2">
            {treatment.shortDescription}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Features */}
        <div className="space-y-3 mb-6">
          {treatment.features.slice(0, 3).map((feature, idx) => (
            <div key={idx} className="flex items-start">
              <svg className="w-5 h-5 text-[#d4af37] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-600 text-sm">{feature}</span>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="flex-1 bg-gradient-to-r from-[#1a365d] to-[#2c5282] text-white font-medium py-3 px-4 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            Scopri di più
          </button>
          <button className="bg-gray-100 text-[#1a365d] font-medium py-3 px-4 rounded-xl hover:bg-gray-200 transition-colors duration-300">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Expanded Details Modal */}
      {showDetails && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
             onClick={() => setShowDetails(false)}>
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
               onClick={(e) => e.stopPropagation()}>
            <div className="relative h-64">
              <OptimizedImage
                src={treatment.image || generatePlaceholder(treatment.title, 800)}
                alt={treatment.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setShowDetails(false)}
                className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-8">
              <h3 className="text-3xl font-['Playfair_Display'] text-[#1a365d] font-bold mb-4">
                {treatment.title}
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                {treatment.fullDescription}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h4 className="font-semibold text-[#1a365d] mb-3">Benefici</h4>
                  <ul className="space-y-2">
                    {treatment.benefits?.map((benefit, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-[#d4af37] mr-2">✓</span>
                        <span className="text-gray-600 text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-[#1a365d] mb-3">Informazioni</h4>
                  <dl className="space-y-2">
                    <div>
                      <dt className="text-gray-500 text-sm">Durata</dt>
                      <dd className="text-gray-700 font-medium">{treatment.duration}</dd>
                    </div>
                    <div>
                      <dt className="text-gray-500 text-sm">Recupero</dt>
                      <dd className="text-gray-700 font-medium">{treatment.recovery}</dd>
                    </div>
                    <div>
                      <dt className="text-gray-500 text-sm">Risultati</dt>
                      <dd className="text-gray-700 font-medium">{treatment.results}</dd>
                    </div>
                  </dl>
                </div>
              </div>
              
              <button className="w-full bg-gradient-to-r from-[#d4af37] to-[#f4e4c1] text-[#1a365d] font-semibold py-4 rounded-xl hover:shadow-lg transition-all duration-300">
                Prenota Consulenza
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default function Trattamenti() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedTreatment, setSelectedTreatment] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
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

  const treatments = {
    medicinaEstetica: [
      {
        title: 'Filler con Acido Ialuronico',
        category: 'medicina',
        image: assets.images.treatments?.filler,
        shortDescription: 'Ripristino dei volumi e idratazione profonda con risultati naturali.',
        fullDescription: 'I filler a base di acido ialuronico rappresentano il gold standard per il ripristino dei volumi del viso e la correzione delle rughe. Utilizzo esclusivamente prodotti di ultima generazione, certificati e biocompatibili, per garantire risultati naturali e armoniosi.',
        features: [
          'Risultati immediati e naturali',
          'Trattamento personalizzato',
          'Minimo disagio post-trattamento'
        ],
        benefits: [
          'Ripristino dei volumi persi',
          'Correzione rughe profonde',
          'Idratazione profonda della pelle',
          'Definizione contorni del viso',
          'Stimolazione del collagene'
        ],
        duration: '30-45 minuti',
        recovery: 'Immediato',
        results: 'Fino a 18 mesi'
      },
      {
        title: 'Tossina Botulinica',
        category: 'medicina',
        image: assets.images.treatments?.botox,
        shortDescription: 'Riduzione delle rughe di espressione per un aspetto fresco e riposato.',
        fullDescription: 'Il trattamento con tossina botulinica è ideale per attenuare le rughe di espressione nella parte superiore del viso. La mia tecnica prevede micro-iniezioni precise per ottenere un risultato naturale che preserva la mimica facciale.',
        features: [
          'Tecnica micro-dosing',
          'Risultati graduali e naturali',
          'Preservazione espressività'
        ],
        benefits: [
          'Riduzione rughe frontali',
          'Attenuazione zampe di gallina',
          'Correzione rughe glabellari',
          'Lifting sopracciglio',
          'Prevenzione invecchiamento'
        ],
        duration: '15-20 minuti',
        recovery: 'Immediato',
        results: '4-6 mesi'
      },
      {
        title: 'Biorivitalizzazione',
        category: 'medicina',
        image: assets.images.treatments?.biorivitalizzazione,
        shortDescription: 'Rigenerazione cellulare per una pelle luminosa e compatta.',
        fullDescription: 'La biorivitalizzazione è un trattamento rigenerativo che stimola il rinnovamento cellulare attraverso l\'iniezione di sostanze biocompatibili e vitamine. Ideale per migliorare la qualità della pelle, l\'elasticità e la luminosità.',
        features: [
          'Cocktail vitaminici personalizzati',
          'Stimolazione naturale del collagene',
          'Trattamento preventivo anti-aging'
        ],
        benefits: [
          'Pelle più luminosa e idratata',
          'Miglioramento texture cutanea',
          'Riduzione macchie e discromie',
          'Aumento elasticità',
          'Effetto anti-ossidante'
        ],
        duration: '30 minuti',
        recovery: '24-48 ore',
        results: '3-6 mesi'
      }
    ],
    chirurgia: [
      {
        title: 'Blefaroplastica',
        category: 'chirurgia',
        image: assets.images.treatments?.blefaroplastica,
        shortDescription: 'Ringiovanimento dello sguardo con tecnica mini-invasiva.',
        fullDescription: 'La blefaroplastica è l\'intervento di chirurgia estetica delle palpebre che permette di eliminare l\'eccesso di pelle e le borse adipose, restituendo freschezza e luminosità allo sguardo. Utilizzo tecniche mini-invasive per risultati naturali.',
        features: [
          'Tecnica mini-invasiva',
          'Cicatrici invisibili',
          'Anestesia locale con sedazione'
        ],
        benefits: [
          'Eliminazione borse e occhiaie',
          'Correzione palpebre cadenti',
          'Sguardo più giovane e riposato',
          'Miglioramento campo visivo',
          'Risultati permanenti'
        ],
        duration: '60-90 minuti',
        recovery: '7-10 giorni',
        results: 'Permanenti'
      },
      {
        title: 'Liposcultura',
        category: 'chirurgia',
        image: assets.images.treatments?.liposcultura,
        shortDescription: 'Rimodellamento corporeo con tecnica VASER ad ultrasuoni.',
        fullDescription: 'La liposcultura con tecnologia VASER rappresenta l\'evoluzione della liposuzione tradizionale. Gli ultrasuoni permettono di sciogliere selettivamente il grasso preservando i tessuti circostanti, con risultati più precisi e un recupero più rapido.',
        features: [
          'Tecnologia VASER ad ultrasuoni',
          'Rimodellamento 3D del corpo',
          'Minimo traumatismo tissutale'
        ],
        benefits: [
          'Eliminazione grasso localizzato',
          'Definizione muscolare',
          'Retrazione cutanea ottimale',
          'Risultati naturali e armoniosi',
          'Possibilità di lipofilling'
        ],
        duration: '2-3 ore',
        recovery: '7-14 giorni',
        results: 'Permanenti con stile di vita sano'
      },
      {
        title: 'Lipogems®',
        category: 'chirurgia',
        image: assets.images.treatments?.lipogems,
        shortDescription: 'Medicina rigenerativa con cellule staminali del tessuto adiposo.',
        fullDescription: 'Lipogems® è una tecnologia innovativa che permette di utilizzare il proprio tessuto adiposo come fonte di cellule rigenerative. Il grasso viene prelevato, processato e reiniettato per stimolare la rigenerazione tissutale in modo completamente naturale.',
        features: [
          'Tecnologia brevettata Lipogems®',
          'Utilizzo cellule staminali proprie',
          'Procedura ambulatoriale'
        ],
        benefits: [
          'Rigenerazione tissutale naturale',
          'Ringiovanimento cutaneo',
          'Miglioramento cicatrici',
          'Trattamento articolazioni',
          'Biocompatibilità totale'
        ],
        duration: '90-120 minuti',
        recovery: '3-5 giorni',
        results: 'Progressivi per 6-12 mesi'
      }
    ]
  };

  const allTreatments = [...treatments.medicinaEstetica, ...treatments.chirurgia];
  
  const getFilteredTreatments = () => {
    if (activeCategory === 'all') return allTreatments;
    if (activeCategory === 'medicina') return treatments.medicinaEstetica;
    if (activeCategory === 'chirurgia') return treatments.chirurgia;
    return allTreatments;
  };

  const categories = [
    { id: 'all', name: 'Tutti i Trattamenti', icon: '🌟', count: allTreatments.length },
    { id: 'medicina', name: 'Medicina Estetica', icon: '💉', count: treatments.medicinaEstetica.length },
    { id: 'chirurgia', name: 'Chirurgia Rigenerativa', icon: '⚕️', count: treatments.chirurgia.length }
  ];

  return (
    <section id="trattamenti" ref={sectionRef} className="py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-3xl -translate-x-48 -translate-y-48" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#1a365d]/5 rounded-full blur-3xl translate-x-48 translate-y-48" />
      
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <span className="inline-block bg-gradient-to-r from-[#d4af37]/20 to-[#f4e4c1]/20 text-[#1a365d] px-4 py-2 rounded-full text-sm font-medium mb-4 uppercase tracking-wider">
            Eccellenza Medica
          </span>
          <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl lg:text-6xl text-[#1a365d] font-bold mb-6">
            I Nostri <span className="text-[#d4af37]">Trattamenti</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Soluzioni personalizzate all'avanguardia per viso e corpo, 
            unite da un approccio rigenerativo che rispetta e valorizza la tua bellezza naturale
          </p>
        </div>

        {/* Category Filter - Premium Style */}
        <div className={`flex flex-wrap justify-center gap-4 mb-16 transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`group relative px-8 py-4 rounded-2xl font-medium transition-all duration-300 transform hover:scale-105 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-[#1a365d] to-[#2c5282] text-white shadow-xl'
                  : 'bg-white text-[#1a365d] hover:shadow-lg border border-gray-200'
              }`}
            >
              <span className="flex items-center">
                <span className="text-2xl mr-3">{category.icon}</span>
                <span>
                  {category.name}
                  <span className="ml-2 text-xs opacity-75">({category.count})</span>
                </span>
              </span>
              {activeCategory === category.id && (
                <div className="absolute inset-0 bg-white/20 rounded-2xl animate-pulse" />
              )}
            </button>
          ))}
        </div>

        {/* Treatments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {getFilteredTreatments().map((treatment, index) => (
            <TreatmentCard
              key={treatment.title}
              treatment={treatment}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>

        {/* CTA Section - Luxurious Design */}
        <div className={`transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="relative bg-gradient-to-br from-[#1a365d] via-[#2c5282] to-[#1a365d] rounded-3xl overflow-hidden">
            {/* Pattern Overlay */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-32 -translate-y-32" />
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#d4af37] rounded-full translate-x-48 translate-y-48" />
            </div>
            
            <div className="relative z-10 p-12 md:p-16 text-center">
              <h3 className="font-['Playfair_Display'] text-3xl md:text-4xl text-white font-bold mb-6">
                Inizia il Tuo Percorso di Bellezza
              </h3>
              <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
                Ogni trattamento inizia con una consulenza personalizzata gratuita 
                per comprendere le tue esigenze e definire insieme il percorso più adatto
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a 
                  href="#contatti"
                  className="group bg-gradient-to-r from-[#d4af37] to-[#f4e4c1] text-[#1a365d] font-bold py-5 px-10 rounded-full hover:shadow-2xl transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
                >
                  <span>Prenota Consulenza Gratuita</span>
                  <svg className="ml-3 w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                
                <a 
                  href="tel:+393401234567"
                  className="group border-2 border-white/30 backdrop-blur-sm text-white font-medium py-5 px-10 rounded-full hover:bg-white hover:text-[#1a365d] transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
                >
                  <svg className="mr-3 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>Chiama Ora</span>
                </a>
              </div>
              
              {/* Trust Badge */}
              <div className="mt-10 flex items-center justify-center text-white/60 text-sm">
                <svg className="w-5 h-5 mr-2 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Consulenza senza impegno • Privacy garantita • Pagamenti flessibili</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
