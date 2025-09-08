import { useState, useEffect } from 'react';

const AnimatedCounter = ({ end, duration = 2000, prefix = '', suffix = '' }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!isVisible) return;
    
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
  }, [end, duration, isVisible]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById(`counter-${end}`);
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, [end]);

  return (
    <span id={`counter-${end}`} className="font-bold text-4xl md:text-5xl">
      {prefix}{count}{suffix}
    </span>
  );
};

const TimelineItem = ({ year, title, institution, grade, description, isVisible, index }) => {
  return (
    <div className={`relative flex items-start mb-8 transition-all duration-700 delay-${index * 100} ${
      isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
    }`}>
      {/* Timeline Line & Dot */}
      <div className="flex flex-col items-center mr-6">
        <div className="w-4 h-4 bg-amber-600 rounded-full ring-4 ring-white shadow-lg"></div>
        <div className="w-0.5 h-16 bg-gradient-to-b from-amber-600 to-amber-300 mt-2"></div>
      </div>
      
      {/* Content */}
      <div className="flex-1 bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h4 className="font-serif text-xl font-bold text-slate-800 mb-1">{title}</h4>
            <p className="text-amber-600 font-semibold">{institution}</p>
            {grade && (
              <span className="inline-block mt-2 bg-gradient-to-r from-amber-100 to-amber-50 text-amber-800 px-3 py-1 rounded-full text-sm font-medium">
                {grade}
              </span>
            )}
          </div>
          <span className="text-slate-500 text-sm font-medium bg-slate-100 px-3 py-1 rounded-full">
            {year}
          </span>
        </div>
        {description && (
          <p className="text-slate-600 text-sm leading-relaxed">{description}</p>
        )}
      </div>
    </div>
  );
};

export default function LaDottoressaRedesigned() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('filosofia');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById('la-dottoressa-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const formazione = [
    {
      year: "2008",
      title: "Laurea in Medicina e Chirurgia",
      institution: "Università degli Studi di Torino",
      grade: "110/110 e Lode",
      description: "Tesi sperimentale in Chirurgia Generale con focus sulla rigenerazione tissutale"
    },
    {
      year: "2014",
      title: "Specializzazione in Chirurgia Generale",
      institution: "Università degli Studi di Torino",
      grade: "110/110 e Lode",
      description: "Formazione completa in tecniche chirurgiche avanzate e mini-invasive"
    },
    {
      year: "2016",
      title: "Master II Livello in Medicina Estetica",
      institution: "Università degli Studi di Pavia",
      grade: "110/110 e Lode",
      description: "Specializzazione avanzata in trattamenti non-invasivi e medicina rigenerativa"
    },
    {
      year: "2018",
      title: "Certificazione Lipogems®",
      institution: "Prof. Carlo Tremolada - Milano",
      description: "Certificazione ufficiale nella tecnologia Lipogems® per medicina rigenerativa"
    },
    {
      year: "2020",
      title: "Advanced Training in Laser Therapy",
      institution: "European Academy of Aesthetic Medicine",
      description: "Formazione avanzata nelle più moderne tecnologie laser per medicina estetica"
    }
  ];

  const expertise = [
    {
      icon: "🧬",
      title: "Medicina Rigenerativa",
      description: "Specializzazione in Lipogems® e tecniche di rigenerazione tissutale naturale",
      color: "from-emerald-500 to-emerald-600"
    },
    {
      icon: "✨",
      title: "Chirurgia Mini-Invasiva",
      description: "Interventi di precisione con tecniche innovative e tempi di recupero ridotti",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: "💎",
      title: "Laser Terapia Avanzata",
      description: "Trattamenti laser di ultima generazione per viso e corpo",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: "🎯",
      title: "Approccio Personalizzato",
      description: "Protocolli su misura studiati per ogni singolo paziente",
      color: "from-amber-500 to-amber-600"
    }
  ];

  const stats = [
    { value: 15, suffix: '+', label: 'Anni di Esperienza', color: 'text-amber-600' },
    { value: 1000, suffix: '+', label: 'Pazienti Soddisfatti', color: 'text-emerald-600' },
    { value: 5000, suffix: '+', label: 'Trattamenti Eseguiti', color: 'text-blue-600' },
    { value: 98, suffix: '%', label: 'Tasso di Soddisfazione', color: 'text-purple-600' }
  ];

  const certifications = [
    {
      title: "Ordine dei Medici",
      subtitle: "Torino - N° 12345",
      icon: "🏥"
    },
    {
      title: "AICPE",
      subtitle: "Associazione Italiana Chirurgia Plastica Estetica",
      icon: "⚕️"
    },
    {
      title: "SIME",
      subtitle: "Società Italiana Medicina Estetica", 
      icon: "🔬"
    },
    {
      title: "Lipogems® Certified",
      subtitle: "Regenerative Medicine Specialist",
      icon: "🧬"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-slate-50 to-slate-100 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-amber-200/30 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-emerald-200/30 to-transparent rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Column - Content */}
            <div className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}>
              <span className="inline-block bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium mb-6 uppercase tracking-wider">
                Chi Sono
              </span>
              
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-slate-800 font-bold mb-6">
                Dott.ssa <span className="text-amber-600">Alice Miegge</span>
              </h1>
              
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Chirurgo specialista con oltre 15 anni di esperienza nella medicina estetica 
                e chirurgia rigenerativa. Il mio approccio unisce competenza medica e sensibilità 
                artistica per risultati naturali e armoniosi.
              </p>
              
              <div className="space-y-4 mb-8">
                {[
                  "Specialista in Chirurgia Generale",
                  "Master in Medicina Estetica",
                  "Certificata Lipogems®",
                  "Membro AICPE e SIME"
                ].map((credential, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-6 h-6 bg-amber-600 rounded-full flex items-center justify-center mr-3">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-slate-700 font-medium">{credential}</span>
                  </div>
                ))}
              </div>
              
              <button className="bg-gradient-to-r from-amber-600 to-amber-500 text-white font-semibold py-4 px-8 rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                Prenota una Consulenza Personalizzata
              </button>
            </div>

            {/* Right Column - Image */}
            <div className={`relative transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}>
              <div className="relative max-w-md mx-auto">
                {/* Main Image Container */}
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-amber-500/20 to-emerald-500/20 rounded-3xl blur-2xl"></div>
                  
                  <div className="relative bg-white rounded-2xl p-3 shadow-2xl">
                    <img
                      src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&h=750&fit=crop&crop=faces"
                      alt="Dottoressa Alice Miegge"
                      className="w-full h-[600px] rounded-xl object-cover"
                    />
                  </div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-6 -right-6 bg-gradient-to-br from-amber-500 to-amber-600 text-white rounded-2xl p-4 shadow-xl floating-card">
                  <div className="text-center">
                    <div className="text-3xl font-bold">15+</div>
                    <div className="text-xs font-medium uppercase tracking-wider">Anni</div>
                  </div>
                </div>
                
                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl floating-card">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center">
                      <span className="text-white font-bold">L</span>
                    </div>
                    <div>
                      <div className="font-bold text-slate-800 text-sm">Lipogems®</div>
                      <div className="text-xs text-slate-600">Certified</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="la-dottoressa-section" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className={`${stat.color} mb-2`}>
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-slate-600 text-sm uppercase tracking-wider font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            
            {/* Tab Navigation */}
            <div className="flex flex-wrap justify-center mb-12 bg-white rounded-2xl shadow-lg p-2">
              {[
                { id: 'filosofia', label: 'La Mia Filosofia', icon: '💭' },
                { id: 'formazione', label: 'Formazione', icon: '🎓' },
                { id: 'expertise', label: 'Expertise', icon: '⭐' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-amber-600 to-amber-500 text-white shadow-lg'
                      : 'text-slate-600 hover:text-amber-600 hover:bg-amber-50'
                  }`}
                >
                  <span className="mr-2">{tab.icon}</span>
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="min-h-[500px]">
              {/* Filosofia Tab */}
              {activeTab === 'filosofia' && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-fade-up">
                  <div>
                    <h3 className="font-serif text-3xl font-bold text-slate-800 mb-6">
                      La Bellezza che Non Si Vede, <span className="text-amber-600">Ma Si Percepisce</span>
                    </h3>
                    
                    <div className="prose prose-lg text-slate-600 space-y-6">
                      <p className="leading-relaxed">
                        Al centro del mio lavoro c'è la profonda convinzione che la vera bellezza 
                        risieda nell'<span className="font-semibold text-amber-600">armonia</span> e 
                        nell'<span className="font-semibold text-amber-600">autenticità</span> di ogni persona.
                      </p>
                      
                      <p className="leading-relaxed">
                        Non si tratta di rincorrere canoni estetici standardizzati, ma di esaltare 
                        la tua unicità, donandoti un'immagine più fresca, riposata e in linea con 
                        il tuo benessere interiore.
                      </p>
                      
                      <div className="bg-gradient-to-r from-amber-50 to-emerald-50 border-l-4 border-amber-600 p-6 rounded-r-xl">
                        <p className="text-slate-700 font-medium italic">
                          "Credo fermamente che solo attraverso una consulenza personalizzata e un dialogo 
                          trasparente sia possibile definire il trattamento più adatto a te."
                        </p>
                      </div>
                      
                      <p className="leading-relaxed">
                        La mia esperienza pluriennale in chirurgia generale, unita alla specializzazione 
                        in medicina estetica e tecnologie rigenerative, mi permette di adottare un approccio 
                        a 360°, orientato alla <span className="font-semibold text-amber-600">rigenerazione</span> 
                        e al ripristino della naturalità dei tessuti.
                      </p>
                      
                      <p className="leading-relaxed">
                        La <span className="font-semibold text-slate-800">sicurezza</span> è la mia priorità 
                        assoluta. Per questo motivo, mi avvalgo solo delle tecniche più innovative e validate 
                        scientificamente, utilizzando strumentazioni all'avanguardia e protocolli rigorosi.
                      </p>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <img
                      src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=700&fit=crop"
                      alt="Studio medico professionale"
                      className="rounded-2xl shadow-2xl"
                    />
                    <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-6 shadow-xl">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-slate-800">Top 1%</div>
                        <div className="text-sm text-slate-600">Medici Estetici</div>
                        <div className="text-sm text-slate-600">Italia</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Formazione Tab */}
              {activeTab === 'formazione' && (
                <div className="animate-fade-up">
                  <div className="text-center mb-12">
                    <h3 className="font-serif text-3xl font-bold text-slate-800 mb-4">
                      Percorso <span className="text-amber-600">Formativo</span>
                    </h3>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                      Un cammino di eccellenza accademica e specializzazione continua 
                      per offrire sempre i migliori standard di cura
                    </p>
                  </div>
                  
                  <div className="max-w-4xl mx-auto">
                    <div className="relative">
                      {/* Timeline Background */}
                      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-amber-600 to-amber-300"></div>
                      
                      {formazione.map((item, index) => (
                        <TimelineItem
                          key={index}
                          {...item}
                          isVisible={isVisible}
                          index={index}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Expertise Tab */}
              {activeTab === 'expertise' && (
                <div className="animate-fade-up">
                  <div className="text-center mb-12">
                    <h3 className="font-serif text-3xl font-bold text-slate-800 mb-4">
                      Aree di <span className="text-amber-600">Specializzazione</span>
                    </h3>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                      Competenze avanzate nelle più moderne tecniche di medicina estetica 
                      e chirurgia rigenerativa
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {expertise.map((item, index) => (
                      <div
                        key={index}
                        className={`group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 delay-${index * 100} hover:-translate-y-2`}
                      >
                        <div className="flex items-start space-x-4">
                          <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                            {item.icon}
                          </div>
                          <div className="flex-1">
                            <h4 className="font-serif text-xl font-bold text-slate-800 mb-3 group-hover:text-amber-600 transition-colors duration-300">
                              {item.title}
                            </h4>
                            <p className="text-slate-600 leading-relaxed">
                              {item.description}
                            </p>
                          </div>
                        </div>
                        
                        {/* Hover Effect */}
                        <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <button className="text-amber-600 font-semibold text-sm flex items-center">
                            Scopri di più
                            <svg className="ml-1 w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Certificazioni Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block bg-amber-600/20 text-amber-400 px-4 py-2 rounded-full text-sm font-medium mb-6 uppercase tracking-wider">
              Riconoscimenti
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
              Affiliazioni e <span className="text-amber-400">Certificazioni</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Riconoscimenti ufficiali e appartenenza alle più prestigiose 
              associazioni mediche nazionali e internazionali
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <div 
                key={index}
                className={`group bg-white/5 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-500 delay-${index * 100} hover:-translate-y-2`}
              >
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-amber-500/20 to-amber-300/20 rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300">
                  {cert.icon}
                </div>
                <h4 className="font-serif text-lg font-bold mb-2 group-hover:text-amber-400 transition-colors duration-300">
                  {cert.title}
                </h4>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {cert.subtitle}
                </p>
                
                {/* Verification Badge */}
                <div className="mt-4 inline-flex items-center bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full text-xs font-medium">
                  <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Verificato
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-emerald-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="relative">
              {/* Quote Mark */}
              <div className="absolute -top-8 -left-8 text-amber-600/20 text-9xl font-serif leading-none">
                "
              </div>
              
              <blockquote className="relative z-10 text-2xl md:text-3xl lg:text-4xl font-serif text-slate-800 italic font-light leading-relaxed mb-8">
                Il mio obiettivo è accompagnare ogni persona in un percorso di rigenerazione 
                e valorizzazione per ritrovare il proprio equilibrio estetico e benessere interiore.
              </blockquote>
              
              <div className="flex items-center justify-center">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-600 to-amber-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-xl">AM</span>
                </div>
                <div className="text-left">
                  <div className="font-serif text-xl font-bold text-slate-800">Dott.ssa Alice Miegge</div>
                  <div className="text-slate-600">Medicina e Chirurgia Estetica</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
              Iniziamo Insieme il Tuo <span className="text-amber-400">Percorso</span>
            </h2>
            <p className="text-xl text-slate-300 mb-10 leading-relaxed">
              Ogni trattamento inizia con una consulenza approfondita per comprendere 
              le tue esigenze e definire il percorso più adatto ai tuoi obiettivi
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <button className="bg-gradient-to-r from-amber-600 to-amber-500 text-white font-bold py-5 px-10 rounded-full hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                Prenota Consulenza Gratuita
              </button>
              <button className="border-2 border-white/30 text-white font-medium py-5 px-10 rounded-full hover:bg-white hover:text-slate-900 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm">
                Chiama: +39 340 123 4567
              </button>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-8 text-slate-400 text-sm">
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Consulenza senza impegno
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Privacy garantita
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                  <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd" />
                </svg>
                Pagamenti flessibili
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
