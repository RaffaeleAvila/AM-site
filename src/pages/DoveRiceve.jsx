// src/pages/DoveRiceve.jsx
import { useState, useEffect, useRef } from 'react';
import OptimizedImage from '../components/OptimizedImage';
import assets, { generatePlaceholder } from '../config/assets';

// Componente per Map Interattiva
const InteractiveMap = ({ clinic, isActive }) => {
  return (
    <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
      {/* Placeholder per Google Maps - In produzione usare API reale */}
      <div className="w-full h-full bg-gray-200 relative">
        <iframe
          src={`https://maps.google.com/maps?q=${encodeURIComponent(clinic.fullAddress)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
          className="w-full h-full border-0"
          loading="lazy"
          title={`Mappa ${clinic.name}`}
        />
        
        {/* Overlay con informazioni */}
        <div className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-6 transition-all duration-500 ${
          isActive ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
        }`}>
          <h4 className="text-white font-bold text-lg mb-2">{clinic.name}</h4>
          <p className="text-white/80 text-sm mb-3">{clinic.address}</p>
          <a
            href={`https://maps.google.com/?q=${encodeURIComponent(clinic.fullAddress)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full hover:bg-white/30 transition-colors duration-300"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Ottieni indicazioni
          </a>
        </div>
      </div>
    </div>
  );
};

// Componente per Clinic Card Premium
const ClinicCard = ({ clinic, index, isVisible, isSelected, onSelect }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-2 cursor-pointer delay-${index * 200} ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      } ${isSelected ? 'ring-2 ring-brand-gold' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onSelect(clinic)}
    >
      {/* Image Section */}
      <div className="relative h-64 overflow-hidden">
        <OptimizedImage
          src={clinic.image || generatePlaceholder(clinic.name, 600)}
          alt={clinic.name}
          className="w-full h-full object-cover"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        
        {/* Badge Premium */}
        {clinic.isPremium && (
          <div className="absolute top-4 right-4 bg-gradient-to-r from-brand-gold to-brand-gold-light text-brand-navy px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg">
            Premium Clinic
          </div>
        )}
        
        {/* Title Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="text-2xl font-['Playfair_Display'] text-white font-bold mb-2">
            {clinic.name}
          </h3>
          <div className="flex items-center text-white/80 text-sm">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {clinic.city}
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6">
        {/* Description */}
        <p className="text-gray-600 mb-6 leading-relaxed">
          {clinic.description}
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          {clinic.features.slice(0, 4).map((feature, idx) => (
            <div key={idx} className="flex items-center text-sm text-gray-600">
              <svg className="w-4 h-4 text-brand-gold mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              {feature}
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div className="border-t border-gray-100 pt-6 space-y-3">
          {/* Address */}
          <div className="flex items-start">
            <svg className="w-5 h-5 text-brand-navy mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <div>
              <p className="font-semibold text-gray-800">{clinic.address}</p>
              <p className="text-sm text-gray-500">{clinic.city}</p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-center">
            <svg className="w-5 h-5 text-brand-navy mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <a href={`tel:${clinic.phone}`} className="text-brand-navy hover:text-brand-gold transition-colors duration-300 font-medium">
              {clinic.phone}
            </a>
          </div>

          {/* Email */}
          <div className="flex items-center">
            <svg className="w-5 h-5 text-brand-navy mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <a href={`mailto:${clinic.email}`} className="text-brand-navy hover:text-brand-gold transition-colors duration-300">
              {clinic.email}
            </a>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 mt-6">
          <a
            href={clinic.website}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-gradient-to-r from-brand-navy to-brand-navy-light text-white text-center py-3 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105 font-medium"
          >
            Visita il Sito
          </a>
          <button
            onClick={() => onSelect(clinic)}
            className="flex-1 border-2 border-brand-navy text-brand-navy text-center py-3 rounded-xl hover:bg-brand-navy hover:text-white transition-all duration-300 font-medium"
          >
            Vedi Mappa
          </button>
        </div>
      </div>

      {/* Hover Effect Decoration */}
      <div className={`absolute top-0 right-0 w-32 h-32 bg-brand-gold/10 rounded-bl-full transition-all duration-500 ${
        isHovered ? 'scale-150' : 'scale-100'
      }`} />
    </div>
  );
};

export default function DoveRiceve() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedClinic, setSelectedClinic] = useState(null);
  const [activeTab, setActiveTab] = useState('milano');
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

  const clinics = [
    {
      id: 'image',
      name: 'Image Regenerative Clinic',
      address: 'Via Pietro Mascagni, 2',
      city: '20122 Milano MI',
      fullAddress: 'Via Pietro Mascagni 2, 20122 Milano MI',
      website: 'https://istitutoimage.com/',
      phone: '+39 02 8736 4593',
      email: 'info@istitutoimage.com',
      description: 'Centro di eccellenza per medicina rigenerativa e chirurgia estetica nel cuore di Milano. Tecnologie all\'avanguardia e protocolli personalizzati.',
      image: assets.images.imageClinic,
      isPremium: true,
      features: [
        'Lipogems® Center',
        'Laser di ultima generazione',
        'Sale operatorie certificate',
        'Team multidisciplinare'
      ],
      location: 'milano',
      coordinates: { lat: 45.4642, lng: 9.1900 }
    },
    {
      id: 'youmedical',
      name: 'YouMedical',
      address: 'Via Giuseppe Verdi, 91',
      city: '20831 Seregno MB',
      fullAddress: 'Via Giuseppe Verdi 91, 20831 Seregno MB',
      website: 'https://www.youmedical.it/',
      phone: '+39 0362 238 745',
      email: 'info@youmedical.it',
      description: 'Poliambulatorio specialistico con approccio integrato alla medicina estetica. Ambiente accogliente e tecnologie innovative.',
      image: assets.images.youMedical,
      isPremium: false,
      features: [
        'Ambulatori specialistici',
        'Diagnostica avanzata',
        'Trattamenti personalizzati',
        'Parcheggio privato'
      ],
      location: 'seregno',
      coordinates: { lat: 45.6495, lng: 9.2045 }
    }
  ];

  const filteredClinics = activeTab === 'all' 
    ? clinics 
    : clinics.filter(c => c.location === activeTab);

  return (
    <section id="dove-riceve" ref={sectionRef} className="py-20 md:py-32 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl translate-x-48" />
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-brand-navy/5 rounded-full blur-3xl -translate-x-36" />
      
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <span className="inline-block bg-gradient-to-r from-brand-gold/20 to-brand-gold-light/20 text-brand-navy px-4 py-2 rounded-full text-sm font-medium mb-4 uppercase tracking-wider">
            Le Nostre Sedi
          </span>
          <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl lg:text-6xl text-brand-navy font-bold mb-6">
            Dove <span className="text-brand-gold">Riceve</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Strutture d'eccellenza dotate delle tecnologie più avanzate, 
            selezionate per garantire i massimi standard di qualità e sicurezza
          </p>
        </div>

        {/* Location Tabs */}
        <div className={`flex justify-center mb-12 transition-all duration-1000 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="inline-flex bg-white rounded-2xl shadow-lg p-2">
            {[
              { id: 'all', label: 'Tutte le Sedi', icon: '🏥' },
              { id: 'milano', label: 'Milano', icon: '🏙️' },
              { id: 'seregno', label: 'Seregno', icon: '🌳' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-brand-navy to-brand-navy-light text-white shadow-lg'
                    : 'text-gray-600 hover:text-brand-navy'
                }`}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Clinics Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {filteredClinics.map((clinic, index) => (
            <ClinicCard
              key={clinic.id}
              clinic={clinic}
              index={index}
              isVisible={isVisible}
              isSelected={selectedClinic?.id === clinic.id}
              onSelect={setSelectedClinic}
            />
          ))}
        </div>

        {/* Interactive Map Section */}
        {selectedClinic && (
          <div className={`mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h3 className="text-2xl font-['Playfair_Display'] text-brand-navy font-bold mb-6 text-center">
              Mappa Interattiva
            </h3>
            <InteractiveMap clinic={selectedClinic} isActive={true} />
          </div>
        )}

        {/* Contact CTA Section */}
        <div className={`transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="bg-gradient-to-br from-brand-navy via-brand-navy-light to-brand-navy rounded-3xl overflow-hidden relative">
            {/* Pattern Overlay */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-32 -translate-y-32" />
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-gold rounded-full translate-x-48 translate-y-48" />
            </div>
            
            <div className="relative z-10 p-12 text-center">
              <div className="inline-flex items-center bg-green-500/20 backdrop-blur-sm text-green-300 px-4 py-2 rounded-full mb-6">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse mr-2" />
                <span className="text-sm font-medium uppercase tracking-wider">Disponibile per Consulenze</span>
              </div>
              
              <h3 className="font-['Playfair_Display'] text-3xl md:text-4xl text-white font-bold mb-6">
                Prenota la Tua Visita
              </h3>
              <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
                Scegli la sede più comoda per te e prenota una consulenza personalizzata 
                per scoprire il percorso di trattamento più adatto alle tue esigenze
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+393401234567"
                  className="group bg-gradient-to-r from-brand-gold to-brand-gold-light text-brand-navy font-bold py-5 px-10 rounded-full hover:shadow-2xl transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
                >
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Chiama Ora
                </a>
                
                <a
                  href="#contatti"
                  className="group border-2 border-white/30 backdrop-blur-sm text-white font-medium py-5 px-10 rounded-full hover:bg-white hover:text-brand-navy transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
                >
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Prenota Online
                </a>
              </div>
              
              {/* Opening Hours */}
              <div className="mt-12 pt-8 border-t border-white/20">
                <h4 className="text-white font-semibold mb-4">Orari di Ricevimento</h4>
                <div className="flex flex-wrap justify-center gap-8 text-white/70">
                  <div>
                    <span className="font-medium text-white">Lunedì - Venerdì:</span> 09:00 - 19:00
                  </div>
                  <div>
                    <span className="font-medium text-white">Sabato:</span> 09:00 - 13:00
                  </div>
                  <div>
                    <span className="font-medium text-white">Domenica:</span> Chiuso
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
