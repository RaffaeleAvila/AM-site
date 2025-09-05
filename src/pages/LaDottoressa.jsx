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
    {
      title: "Laurea in Medicina e Chirurgia",
      institution: "Università degli Studi di Torino",
      grade: "110/110 con Lode"
    },
    {
      title: "Specializzazione in Chirurgia Generale",
      institution: "Università degli Studi di Torino", 
      grade: "110/110 con Lode"
    },
    {
      title: "Master di II Livello in Medicina Estetica",
      institution: "Università degli Studi di Pavia",
      grade: "110/110 con Lode"
    }
  ];

  return (
    <section id="la-dottoressa" ref={sectionRef} className="section bg-brand-gray">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-display font-serif text-brand-blue mb-6">
            La Dott.ssa Alice Miegge
          </h2>
          <p className="text-subtitle max-w-3xl mx-auto">
            Medicina rigenerativa d'eccellenza con un approccio personalizzato
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Section */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="relative max-w-md mx-auto">
              
              {/* Main Image */}
              <div className="relative bg-white rounded-2xl p-6 shadow-xl">
                <img 
                  src={profileImage} 
                  alt="Dottoressa Alice Miegge" 
                  className="w-full h-auto rounded-xl object-cover"
                />
              </div>

              {/* Experience Badge */}
              <div className="absolute -top-4 -right-4 bg-brand-gold text-white rounded-xl p-4 shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold">15+</div>
                  <div className="text-sm">Anni di Esperienza</div>
                </div>
              </div>

              {/* License Badge */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl p-4 shadow-lg border">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                  <div>
                    <div className="font-semibold text-brand-blue text-sm">Medico Chirurgo</div>
                    <div className="text-xs text-text-light">Ordine Medici Torino</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            
            {/* Philosophy */}
            <div className="mb-12">
              <h3 className="font-serif text-2xl text-brand-blue font-semibold mb-6">
                Filosofia Medica
              </h3>
              <div className="space-y-4">
                <p className="text-lg text-text-dark">
                  Da sempre appassionata di <strong>armonia e bellezza</strong>, ho scelto di dedicare 
                  la mia carriera alla medicina estetica e alla chirurgia rigenerativa.
                </p>
                <p className="text-lg text-text-dark">
                  Il mio approccio è <strong>strettamente personalizzato</strong> e unisce rigore scientifico, 
                  tecniche innovative e una profonda attenzione all'unicità di ogni paziente.
                </p>
                <div className="bg-brand-blue/5 border-l-4 border-brand-blue p-4 rounded-r-lg">
                  <p className="text-brand-blue font-medium italic">
                    "Il mio obiettivo è accompagnare ogni persona in un percorso di rigenerazione 
                    e valorizzazione per ritrovare il proprio equilibrio estetico e benessere interiore."
                  </p>
                </div>
              </div>
            </div>

            {/* Qualifications */}
            <div className="mb-8">
              <h4 className="font-serif text-xl text-brand-blue font-semibold mb-6">
                Formazione Accademica
              </h4>
              <div className="space-y-4">
                {qualifications.map((qual, index) => (
                  <div key={index} className="card">
                    <h5 className="font-semibold text-text-dark mb-1">{qual.title}</h5>
                    <p className="text-brand-blue font-medium mb-1">{qual.institution}</p>
                    <span className="bg-brand-gold/20 text-brand-blue px-3 py-1 rounded-full text-sm font-medium">
                      {qual.grade}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="text-center lg:text-left">
              <a href="#contatti" className="btn-primary">
                Prenota una Consulenza
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
