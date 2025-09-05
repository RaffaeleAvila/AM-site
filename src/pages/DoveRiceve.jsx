import { useState, useEffect, useRef } from 'react';

export default function DoveRiceve() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
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
      name: 'Image Regenerative Clinic',
      address: 'Via Pietro Mascagni, 2',
      city: '20122 Milano MI',
      website: 'https://istitutoimage.com/',
      description: 'Centro di eccellenza per medicina rigenerativa e chirurgia estetica nel cuore di Milano.',
      specialties: ['Medicina Rigenerativa', 'Chirurgia Estetica', 'Dermatologia'],
      phone: '+39 02 1234567',
      email: 'milano@dottssamiegge.it'
    },
    {
      name: 'YouMedical',
      address: 'Via Giuseppe Verdi, 91',
      city: '20831 Seregno MB',
      website: 'https://www.youmedical.it/',
      description: 'Poliambulatorio specialistico con tecnologie avanzate per trattamenti personalizzati.',
      specialties: ['Medicina Estetica', 'Dermatologia', 'Benessere'],
      phone: '+39 0362 123456',
      email: 'seregno@dottssamiegge.it'
    }
  ];

  return (
    <section id="dove-riceve" ref={sectionRef} className="bg-gradient-to-br from-brand-gray via-white to-brand-gray relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-blue opacity-5 rounded-full translate-x-48 -translate-y-48"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-brand-gold opacity-5 rounded-full -translate-x-36 translate-y-36"></div>
      
      <div className="container mx-auto px-6 py-20 md:py-32 relative z-10">
        
        {/* Header Section */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block bg-brand-gold bg-opacity-20 text-brand-blue px-4 py-2 rounded-full text-sm font-medium mb-4">
            Le Nostre Sedi
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-brand-blue font-bold mb-6">
            Dove <span className="text-brand-gold">Riceve</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            La Dottoressa Alice Miegge riceve presso strutture d'eccellenza, 
            dotate delle tecnologie più avanzate per garantire i migliori risultati
          </p>
        </div>

        {/* Clinics Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {clinics.map((clinic, index) => (
            <div
              key={clinic.name}
              className={`bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:scale-105 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Card Header */}
              <div className="bg-gradient-to-r from-brand-blue to-brand-gold p-6 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full translate-x-16 -translate-y-16"></div>
                <div className="relative z-10">
                  <h3 className="font-serif text-2xl font-bold mb-2">{clinic.name}</h3>
                  <div className="flex items-center text-sm opacity-90">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {clinic.city}
                  </div>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6">
                <p className="text-gray-700 mb-6 leading-relaxed">{clinic.description}</p>
                
                {/* Address */}
                <div className="mb-4">
                  <div className="flex items-start mb-2">
                    <svg className="w-5 h-5 text-brand-blue mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <p className="font-semibold text-text-dark">{clinic.address}</p>
                      <p className="text-gray-600 text-sm">{clinic.city}</p>
                    </div>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-sm">
                    <svg className="w-4 h-4 text-brand-blue mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <a href={`tel:${clinic.phone}`} className="text-brand-blue hover:text-brand-gold transition-colors">
                      {clinic.phone}
                    </a>
                  </div>
                  <div className="flex items-center text-sm">
                    <svg className="w-4 h-4 text-brand-blue mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <a href={`mailto:${clinic.email}`} className="text-brand-blue hover:text-brand-gold transition-colors">
                      {clinic.email}
                    </a>
                  </div>
                </div>

                {/* Specialties */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-text-dark mb-2">Specialità:</h4>
                  <div className="flex flex-wrap gap-2">
                    {clinic.specialties.map((specialty) => (
                      <span
                        key={specialty}
                        className="bg-brand-blue bg-opacity-10 text-brand-blue px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={clinic.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-brand-blue text-white text-center py-3 px-4 rounded-xl hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 font-medium"
                  >
                    Visita il Sito
                  </a>
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(clinic.address + ', ' + clinic.city)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 border-2 border-brand-blue text-brand-blue text-center py-3 px-4 rounded-xl hover:bg-brand-blue hover:text-white transition-all duration-300 transform hover:scale-105 font-medium"
                  >
                    Vedi Mappa
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Emergency Contact */}
        <div className={`text-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 max-w-2xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <div className="w-3 h-3 bg-green-400 rounded-full mr-2 animate-pulse"></div>
              <span className="font-semibold text-text-dark">Disponibile per Consulenze</span>
            </div>
            <p className="text-gray-600 mb-6">
              Per prenotazioni urgenti o informazioni immediate, contattaci direttamente
            </p>
            <a
              href="tel:+393401234567"
              className="inline-flex items-center bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 transition-all duration-300 transform hover:scale-105 font-medium shadow-lg"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Chiama Ora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
