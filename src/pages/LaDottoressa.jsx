import { useState, useEffect, useRef } from 'react';
import profileImage from '../assets/images/profilo-dottoressa.jpeg';

export default function LaDottoressa() {
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

  const qualifications = [
    { title: "Laurea in Medicina e Chirurgia", institution: "Università degli Studi di Torino", grade: "110/110 con Lode" },
    { title: "Specializzazione in Chirurgia Generale", institution: "Università degli Studi di Torino", grade: "110/110 con Lode" },
    { title: "Master di II Livello in Medicina Estetica", institution: "Università degli Studi di Pavia", grade: "110/110 con Lode" }
  ];

  return (
    <section id="la-dottoressa" ref={sectionRef} className="bg-gradient-to-br from-brand-gray via-white to-brand-gray relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-brand-blue opacity-5 rounded-full -translate-x-32 -translate-y-32"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-gold opacity-5 rounded-full translate-x-48 translate-y-48"></div>
      
      <div className="container mx-auto px-6 py-20 md:py-32 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Image Section */}
          <div className={`lg:w-2/5 flex justify-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="relative">
              {/* Decorative Elements */}
              <div className="absolute -top-6 -left-6 w-full h-full border-2 border-brand-gold rounded-full opacity-30"></div>
              <div className="absolute -bottom-6 -right-6 w-full h-full bg-brand-blue opacity-10 rounded-full"></div>
              
              {/* Main Image */}
              <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl">
                <img 
                  src={profileImage} 
                  alt="Ritratto Dottoressa Alice Miegge" 
                  className="w-full h-full object-cover object-center hover:scale-110 transition-transform duration-700"
                />
              </div>
              
              {/* Experience Badge */}
              <div className="absolute top-8 -right-4 bg-white px-4 py-2 rounded-full shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-brand-blue">10+</div>
                  <div className="text-xs text-gray-600">Anni Esperienza</div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className={`lg:w-3/5 text-center lg:text-left transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="mb-8">
              <span className="inline-block bg-brand-gold bg-opacity-20 text-brand-blue px-4 py-2 rounded-full text-sm font-medium mb-4">
                Medicina e Chirurgia Rigenerativa
              </span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-brand-blue font-bold mb-6">
                La Dott.ssa <span className="text-brand-gold">Alice Miegge</span>
              </h2>
            </div>

            <div className="space-y-6 text-gray-700 text-lg leading-relaxed mb-10">
              <p>
                Da sempre appassionata di <strong>armonia e bellezza</strong>, ho scelto di dedicare la mia carriera alla medicina estetica e alla chirurgia rigenerativa. Il mio approccio è strettamente <strong>personalizzato</strong> e unisce rigore scientifico, tecniche innovative e una profonda attenzione all'unicità di ogni paziente.
              </p>
              <p>
                Il mio obiettivo è accompagnare ogni persona in un <strong>percorso di rigenerazione e valorizzazione</strong>, per ritrovare il proprio equilibrio estetico e benessere interiore, in modo naturale e consapevole.
              </p>
            </div>

            {/* Qualifications */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100">
              <h3 className="font-serif text-xl text-brand-blue font-semibold mb-6 text-center lg:text-left">
                Formazione Accademica
              </h3>
              <div className="space-y-4">
                {qualifications.map((qual, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-3 h-3 bg-brand-gold rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-text-dark">{qual.title}</h4>
                      <p className="text-gray-600 text-sm">{qual.institution}</p>
                      <span className="inline-block bg-brand-blue bg-opacity-10 text-brand-blue px-2 py-1 rounded text-xs font-medium mt-1">
                        {qual.grade}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-8 text-center lg:text-left">
              <a 
                href="#contatti" 
                className="inline-flex items-center bg-brand-blue text-white px-8 py-3 rounded-full hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg font-medium"
              >
                Prenota una Consulenza
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
