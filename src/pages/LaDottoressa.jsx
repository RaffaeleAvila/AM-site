import { useState, useEffect, useRef } from 'react';
import profileImage from '../assets/images/profilo-dottoressa.jpeg';

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

  const credentials = [
    {
      title: "Laurea in Medicina e Chirurgia",
      institution: "Università degli Studi di Torino",
      grade: "110/110 con Lode",
      year: "2008",
      icon: "🎓"
    },
    {
      title: "Specializzazione in Chirurgia Generale", 
      institution: "Università degli Studi di Torino",
      grade: "110/110 con Lode",
      year: "2013",
      icon: "⚕️"
    },
    {
      title: "Master in Medicina Estetica",
      institution: "Università degli Studi di Pavia",
      grade: "110/110 con Lode", 
      year: "2015",
      icon: "🏆"
    }
  ];

  const expertiseAreas = [
    { name: "Medicina Rigenerativa", level: 95 },
    { name: "Chirurgia Estetica", level: 92 },
    { name: "Biorivitalizzazione", level: 98 },
    { name: "Lipogems® Technology", level: 88 }
  ];

  const tabContent = {
    filosofia: {
      title: "Filosofia Medica",
      content: (
        <div className="space-y-6">
          <p className="text-lg leading-relaxed text-slate-700">
            <span className="font-semibold text-brand-blue">La medicina rigenerativa</span> rappresenta il futuro della medicina estetica. 
            Il mio approccio si basa sulla <span className="italic">bellezza autentica</span>, rispettando l'unicità di ogni paziente 
            e utilizzando le più avanzate tecnologie scientifiche.
          </p>
          <p className="text-lg leading-relaxed text-slate-700">
            Ogni trattamento è <span className="font-semibold">personalizzato</span>, frutto di un'analisi approfondita e di un percorso 
            condiviso che pone al centro il benessere complessivo della persona.
          </p>
          <div className="bg-brand-blue/5 border-l-4 border-brand-blue p-6 rounded-r-lg">
            <p className="text-brand-blue font-medium italic">
              "Non trasformiamo: accompagniamo, miglioriamo, esaltiamo ciò che già esiste"
            </p>
          </div>
        </div>
      )
    },
    formazione: {
      title: "Formazione Accademica",
      content: (
        <div className="space-y-6">
          {credentials.map((cred, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-slate-100 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start space-x-4">
                <div className="text-3xl">{cred.icon}</div>
                <div className="flex-1">
                  <h4 className="font-bold text-slate-900 text-lg mb-2">{cred.title}</h4>
                  <p className="text-brand-blue font-medium mb-1">{cred.institution}</p>
                  <div className="flex items-center justify-between">
                    <span className="bg-brand-gold/20 text-brand-blue px-3 py-1 rounded-full text-sm font-medium">
                      {cred.grade}
                    </span>
                    <span className="text-slate-500 text-sm">{cred.year}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )
    },
    competenze: {
      title: "Aree di Competenza", 
      content: (
        <div className="space-y-6">
          {expertiseAreas.map((area, index) => (
            <div key={index} className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="font-semibold text-slate-900">{area.name}</span>
                <span className="text-brand-blue font-bold">{area.level}%</span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-3 overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-brand-blue to-brand-gold rounded-full transition-all duration-1000 ease-out"
                  style={{ width: isVisible ? `${area.level}%` : '0%' }}
                ></div>
              </div>
            </div>
          ))}
          <div className="mt-8 bg-slate-50 rounded-xl p-6">
            <h5 className="font-bold text-slate-900 mb-4">Tecnologie Specialistiche</h5>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-brand-gold rounded-full"></div>
                <span className="text-sm text-slate-700">Lipogems® Technology</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-brand-gold rounded-full"></div>
                <span className="text-sm text-slate-700">Acido Ialuronico</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-brand-gold rounded-full"></div>
                <span className="text-sm text-slate-700">Tossina Botulinica</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-brand-gold rounded-full"></div>
                <span className="text-sm text-slate-700">Biorivitalizzazione</span>
              </div>
            </div>
          </div>
        </div>
      )
    }
  };

  return (
    <section id="la-dottoressa" ref={sectionRef} className="bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Sophisticated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-blue opacity-[0.03] rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-gold opacity-[0.04] rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 py-24 md:py-32 relative z-10">
        
        {/* Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center bg-white/80 backdrop-blur-sm border border-brand-blue/20 rounded-full px-6 py-3 mb-8">
            <span className="text-brand-blue font-medium text-sm tracking-wide">ECCELLENZA MEDICA</span>
          </div>
          <h2 className="font-serif text-5xl lg:text-6xl text-slate-900 font-bold mb-6">
            La Dott.ssa <span className="text-brand-gold italic">Alice Miegge</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Medicina rigenerativa d'eccellenza ispirata ai più alti standard internazionali
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">
          
          {/* Image Section */}
          <div className={`lg:col-span-2 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="relative">
              
              {/* Premium Frame */}
              <div className="absolute -inset-6">
                <div className="w-full h-full bg-gradient-to-r from-brand-blue via-brand-gold to-brand-blue rounded-3xl blur-lg opacity-20"></div>
              </div>
              
              {/* Main Image Container */}
              <div className="relative bg-white rounded-3xl p-6 shadow-2xl">
                <div className="relative rounded-2xl overflow-hidden">
                  <img 
                    src={profileImage} 
                    alt="Dottoressa Alice Miegge - Profilo Professionale" 
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/10 via-transparent to-transparent"></div>
                </div>
              </div>

              {/* Experience Badge */}
              <div className="absolute -top-4 -right-4 bg-brand-gold text-white rounded-2xl p-6 shadow-2xl">
                <div className="text-center">
                  <div className="text-3xl font-bold">15+</div>
                  <div className="text-sm font-medium">Anni di<br/>Esperienza</div>
                </div>
              </div>

              {/* Medical License Badge */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-2xl border border-brand-blue/20">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-brand-blue rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold text-brand-blue text-sm">Medico Chirurgo</div>
                    <div className="text-xs text-slate-600">Ordine Medici Torino</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className={`lg:col-span-3 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            
            {/* Tab Navigation */}
            <div className="flex flex-wrap gap-2 mb-8">
              {Object.keys(tabContent).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    activeTab === tab
                      ? 'bg-brand-blue text-white shadow-lg'
                      : 'bg-white/80 text-brand-blue hover:bg-brand-blue/10 border border-brand-blue/20'
                  }`}
                >
                  {tabContent[tab].title}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/40 min-h-[400px]">
              <h3 className="font-serif text-2xl text-brand-blue font-bold mb-6">
                {tabContent[activeTab].title}
              </h3>
              <div className="transition-all duration-500">
                {tabContent[activeTab].content}
              </div>
            </div>

            {/* CTA Section */}
            <div className="mt-8 text-center lg:text-left">
              <a 
                href="#contatti" 
                className="inline-flex items-center bg-brand-blue text-white px-8 py-4 rounded-full hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 shadow-xl font-medium"
              >
                Prenota una Consulenza Personalizzata
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Testimonial */}
        <div className={`mt-20 text-center transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="max-w-4xl mx-auto bg-white/70 backdrop-blur-lg rounded-3xl p-12 shadow-2xl border border-white/40">
            <div className="text-6xl text-brand-gold mb-6">"</div>
            <p className="text-xl text-slate-700 italic leading-relaxed mb-6">
              Crediamo nella bellezza autentica, personale, raffinata. I nostri protocolli non trasformano: 
              accompagnano, migliorano, esaltano ciò che già esiste.
            </p>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-12 h-0.5 bg-brand-gold"></div>
              <span className="font-medium text-brand-blue">Dott.ssa Alice Miegge</span>
              <div className="w-12 h-0.5 bg-brand-gold"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
