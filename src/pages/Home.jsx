import { useState, useEffect } from 'react';

// Componente per animazione typewriter
const TypewriterEffect = ({ text, delay = 100 }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, delay);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, delay]);

  return (
    <span className="relative">
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

// Componente per i numeri animati
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
    <span id={`counter-${end}`} className="font-bold text-3xl">
      {prefix}{count}{suffix}
    </span>
  );
};

export default function HomepageRedesigned() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const treatments = [
    {
      icon: "💉",
      title: "Filler Acido Ialuronico",
      description: "Ripristino naturale dei volumi del viso con risultati armoniosi",
      image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&h=300&fit=crop"
    },
    {
      icon: "✨",
      title: "Tossina Botulinica",
      description: "Riduzione delle rughe d'espressione mantenendo la naturalezza",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop"
    },
    {
      icon: "🧬",
      title: "Lipogems®",
      description: "Medicina rigenerativa con cellule staminali del tessuto adiposo",
      image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=400&h=300&fit=crop"
    },
    {
      icon: "🎯",
      title: "Biorivitalizzazione",
      description: "Rigenerazione cellulare per una pelle luminosa e compatta",
      image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=400&h=300&fit=crop"
    }
  ];

  const testimonials = [
    {
      name: "Maria R.",
      age: "42 anni",
      treatment: "Lipogems® + Filler",
      text: "Un'esperienza eccezionale. La Dott.ssa Miegge ha capito esattamente cosa desideravo: un risultato naturale e armonioso. Mi sento di nuovo me stessa, ma in versione migliore.",
      rating: 5
    },
    {
      name: "Alessandro M.",
      age: "35 anni", 
      treatment: "Tossina Botulinica",
      text: "Approccio professionale e risultati impeccabili. Il trattamento è stato rapido e indolore, con un risultato che ha superato le mie aspettative.",
      rating: 5
    },
    {
      name: "Giulia F.",
      age: "29 anni",
      treatment: "Biorivitalizzazione",
      text: "La mia pelle non è mai stata così luminosa. Un percorso di bellezza personalizzato che mi ha restituito fiducia e benessere.",
      rating: 5
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Header Premium */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'
      }`}>
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-amber-400 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">AM</span>
              </div>
              <div className="ml-3 hidden sm:block">
                <h1 className={`font-serif text-lg font-bold transition-colors duration-300 ${
                  isScrolled ? 'text-slate-800' : 'text-white'
                }`}>
                  Dott.ssa Alice Miegge
                </h1>
                <p className={`text-xs transition-colors duration-300 ${
                  isScrolled ? 'text-slate-600' : 'text-white/80'
                }`}>
                  Medicina Estetica & Chirurgia Rigenerativa
                </p>
              </div>
            </div>

            <nav className="hidden lg:flex items-center space-x-8">
              {['Home', 'La Dottoressa', 'Trattamenti', 'Dove Riceve', 'Contatti'].map((item) => (
                <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} 
                   className={`font-medium transition-colors duration-300 ${
                     isScrolled ? 'text-slate-700 hover:text-amber-600' : 'text-white/90 hover:text-white'
                   }`}>
                  {item}
                </a>
              ))}
              <button className="bg-gradient-to-r from-amber-600 to-amber-500 text-white font-semibold px-6 py-3 rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                Prenota Consulenza
              </button>
            </nav>

            <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <div className="w-6 h-5 relative">
                <span className={`absolute h-0.5 w-full bg-current transform transition-all duration-300 ${
                  isMenuOpen ? 'rotate-45 top-2' : 'top-0'
                } ${isScrolled ? 'text-slate-800' : 'text-white'}`}></span>
                <span className={`absolute h-0.5 w-full bg-current transform transition-all duration-300 top-2 ${
                  isMenuOpen ? 'opacity-0' : 'opacity-100'
                } ${isScrolled ? 'text-slate-800' : 'text-white'}`}></span>
                <span className={`absolute h-0.5 w-full bg-current transform transition-all duration-300 ${
                  isMenuOpen ? '-rotate-45 top-2' : 'top-4'
                } ${isScrolled ? 'text-slate-800' : 'text-white'}`}></span>
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section Redesigned */}
      <section className="relative h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Background Video Placeholder */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1920&h=1080&fit=crop&crop=center"
            alt="Studio medico elegante"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/60 to-slate-900/90"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 h-full flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
            <div className="text-center lg:text-left">
              {/* Badge Premium */}
              <div className="inline-flex items-center bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 mb-8">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse mr-2"></div>
                <span className="text-white/90 font-medium text-xs uppercase tracking-wider">
                  Medicina Rigenerativa d'Eccellenza
                </span>
              </div>

              {/* Titolo principale elegante */}
              <h1 className="mb-6">
                <span className="block font-serif text-5xl md:text-6xl lg:text-7xl text-white font-light leading-tight">
                  Dott.ssa
                </span>
                <span className="block font-serif text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-amber-400 to-amber-200 bg-clip-text text-transparent leading-tight">
                  Alice Miegge
                </span>
              </h1>
              
              {/* Sottotitolo elegante */}
              <div className="text-xl md:text-2xl text-white/80 font-light mb-8">
                <TypewriterEffect text="Bellezza Autentica, Risultati Naturali" delay={50} />
              </div>

              {/* Descrizione raffinata */}
              <p className="text-lg text-white/70 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Un approccio a 360° alla medicina estetica e chirurgia rigenerativa, 
                dove l'eccellenza medica incontra l'arte della bellezza naturale.
              </p>

              {/* CTA Buttons Premium */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="group relative overflow-hidden bg-gradient-to-r from-amber-600 to-amber-500 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                  <span className="relative z-10">Prenota Consulenza Gratuita</span>
                </button>
                
                <button className="group border-2 border-white/30 text-white font-medium py-4 px-8 rounded-full transition-all duration-300 hover:bg-white hover:text-slate-900 transform hover:scale-105 backdrop-blur-sm">
                  <span className="flex items-center">
                    Scopri i Trattamenti
                    <svg className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </button>
              </div>
            </div>

            {/* Colonna immagine con card fluttuanti */}
            <div className="relative max-w-md mx-auto lg:max-w-none">
              <div className="relative">
                {/* Frame decorativo */}
                <div className="absolute -inset-4 bg-gradient-to-r from-amber-500/20 to-amber-300/20 rounded-3xl blur-2xl"></div>
                
                <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-3 shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&h=750&fit=crop&crop=faces"
                    alt="Dottoressa Alice Miegge"
                    className="w-full h-[500px] rounded-xl object-cover"
                  />
                </div>
              </div>
              
              {/* Card fluttuante - Certificazione */}
              <div className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-2xl transform hover:scale-105 transition-all duration-300">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold text-slate-800 text-sm">Lipogems® Certified</div>
                    <div className="text-xs text-slate-600">Medicina Rigenerativa</div>
                  </div>
                </div>
              </div>

              {/* Card fluttuante - Esperienza */}
              <div className="absolute -top-6 -right-6 bg-gradient-to-br from-amber-500 to-amber-400 text-white rounded-2xl p-4 shadow-2xl transform hover:scale-105 transition-all duration-300">
                <div className="text-center">
                  <div className="text-3xl font-bold">15+</div>
                  <div className="text-xs font-medium uppercase tracking-wider">Anni Esperienza</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60">
          <div className="flex flex-col items-center space-y-2 animate-bounce">
            <span className="text-xs uppercase tracking-wider font-light">Scopri di più</span>
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-amber-600 text-4xl font-bold mb-2">
                <AnimatedCounter end={15} suffix="+" />
              </div>
              <div className="text-slate-600 text-sm uppercase tracking-wider">Anni di Esperienza</div>
            </div>
            <div>
              <div className="text-amber-600 text-4xl font-bold mb-2">
                <AnimatedCounter end={1000} suffix="+" />
              </div>
              <div className="text-slate-600 text-sm uppercase tracking-wider">Pazienti Soddisfatti</div>
            </div>
            <div>
              <div className="text-amber-600 text-4xl font-bold mb-2">
                <AnimatedCounter end={5000} suffix="+" />
              </div>
              <div className="text-slate-600 text-sm uppercase tracking-wider">Trattamenti Eseguiti</div>
            </div>
            <div>
              <div className="text-amber-600 text-4xl font-bold mb-2">
                <AnimatedCounter end={98} suffix="%" />
              </div>
              <div className="text-slate-600 text-sm uppercase tracking-wider">Soddisfazione</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filosofia Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium mb-6 uppercase tracking-wider">
                La Mia Filosofia
              </span>
              <h2 className="font-serif text-4xl md:text-5xl text-slate-800 font-bold mb-6">
                Bellezza <span className="text-amber-600">Autentica</span>
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                La vera bellezza non urla, non trasforma. Si sussurra. È quella sensazione 
                di freschezza che ti fa dire "sei in forma", anche se non sai bene perché.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Il mio approccio si basa sulla <strong>medicina rigenerativa</strong>, 
                utilizzando le più avanzate tecnologie come Lipogems® per stimolare 
                i processi naturali di rinnovamento cellulare.
              </p>
              <div className="space-y-4">
                {[
                  "Risultati naturali e armoniosi",
                  "Tecnologie all'avanguardia",
                  "Approccio personalizzato",
                  "Sicurezza e qualità certificate"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <svg className="w-5 h-5 text-amber-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-slate-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=700&fit=crop"
                alt="Studio medico"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-6 shadow-xl">
                <div className="text-center">
                  <div className="text-2xl font-bold text-slate-800">Top 1%</div>
                  <div className="text-sm text-slate-600">Medici Estetici Italia</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trattamenti Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium mb-6 uppercase tracking-wider">
              Eccellenza Medica
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-slate-800 font-bold mb-6">
              I Nostri <span className="text-amber-600">Trattamenti</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Soluzioni personalizzate all'avanguardia, unite da un approccio rigenerativo 
              che rispetta e valorizza la tua bellezza naturale
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {treatments.map((treatment, index) => (
              <div key={index} className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={treatment.image}
                    alt={treatment.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <span className="text-3xl">{treatment.icon}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl text-slate-800 font-bold mb-3">{treatment.title}</h3>
                  <p className="text-slate-600 text-sm mb-4 leading-relaxed">{treatment.description}</p>
                  <button className="text-amber-600 font-semibold text-sm hover:text-amber-700 transition-colors flex items-center">
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
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium mb-6 uppercase tracking-wider">
              Testimonianze
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-slate-800 font-bold mb-6">
              La Voce dei Nostri <span className="text-amber-600">Pazienti</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative bg-slate-50 rounded-3xl p-8 md:p-12">
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-6 h-6 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-xl md:text-2xl text-slate-700 italic mb-6 leading-relaxed">
                  "{testimonials[activeTestimonial].text}"
                </blockquote>
                <div className="flex items-center justify-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">{testimonials[activeTestimonial].name.charAt(0)}</span>
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-slate-800">{testimonials[activeTestimonial].name}</div>
                    <div className="text-sm text-slate-600">{testimonials[activeTestimonial].age} • {testimonials[activeTestimonial].treatment}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial Navigation */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeTestimonial ? 'bg-amber-600' : 'bg-slate-300 hover:bg-slate-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sedi Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block bg-amber-600/20 text-amber-400 px-4 py-2 rounded-full text-sm font-medium mb-6 uppercase tracking-wider">
              Le Nostre Sedi
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
              Dove <span className="text-amber-400">Riceve</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Strutture d'eccellenza dotate delle tecnologie più avanzate per garantire 
              i massimi standard di qualità e sicurezza
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Milano */}
            <div className="group bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300">
              <div className="h-64 relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=600&h=400&fit=crop"
                  alt="Image Regenerative Clinic Milano"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-amber-600/20 backdrop-blur-sm text-amber-400 px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wider">
                    Sede Principale
                  </span>
                </div>
              </div>
              <div className="p-8">
                <h3 className="font-serif text-2xl font-bold mb-4">Image Regenerative Clinic</h3>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-slate-300">
                    <svg className="w-5 h-5 text-amber-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Via Pietro Mascagni, 2 - 20122 Milano
                  </div>
                  <div className="flex items-center text-slate-300">
                    <svg className="w-5 h-5 text-amber-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    +39 02 8736 4593
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {['Lipogems® Center', 'Laser Chirurgia', 'Sale Operatorie'].map((feature, idx) => (
                    <span key={idx} className="bg-amber-600/20 text-amber-400 px-3 py-1 rounded-full text-xs">
                      {feature}
                    </span>
                  ))}
                </div>
                <button className="w-full bg-gradient-to-r from-amber-600 to-amber-500 text-white font-semibold py-3 rounded-xl hover:shadow-lg transition-all duration-300">
                  Prenota a Milano
                </button>
              </div>
            </div>

            {/* Seregno */}
            <div className="group bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300">
              <div className="h-64 relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&h=400&fit=crop"
                  alt="YouMedical Seregno"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-emerald-600/20 backdrop-blur-sm text-emerald-400 px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wider">
                    Sede Secondaria
                  </span>
                </div>
              </div>
              <div className="p-8">
                <h3 className="font-serif text-2xl font-bold mb-4">YouMedical</h3>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-slate-300">
                    <svg className="w-5 h-5 text-amber-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Via Giuseppe Verdi, 91 - 20831 Seregno (MB)
                  </div>
                  <div className="flex items-center text-slate-300">
                    <svg className="w-5 h-5 text-amber-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    +39 0362 238 745
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {['Ambulatori Specialistici', 'Diagnostica', 'Parcheggio Privato'].map((feature, idx) => (
                    <span key={idx} className="bg-emerald-600/20 text-emerald-400 px-3 py-1 rounded-full text-xs">
                      {feature}
                    </span>
                  ))}
                </div>
                <button className="w-full bg-gradient-to-r from-emerald-600 to-emerald-500 text-white font-semibold py-3 rounded-xl hover:shadow-lg transition-all duration-300">
                  Prenota a Seregno
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final Section */}
      <section className="py-20 bg-gradient-to-br from-amber-600 via-amber-500 to-amber-600">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-4xl md:text-5xl text-white font-bold mb-6">
              Inizia il Tuo Percorso di Bellezza
            </h2>
            <p className="text-xl text-amber-100 mb-10 leading-relaxed">
              Ogni trattamento inizia con una consulenza personalizzata gratuita per comprendere 
              le tue esigenze e definire insieme il percorso più adatto
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <button className="bg-white text-amber-600 font-bold py-5 px-10 rounded-full hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                Prenota Consulenza Gratuita
              </button>
              <button className="border-2 border-white text-white font-medium py-5 px-10 rounded-full hover:bg-white hover:text-amber-600 transition-all duration-300 transform hover:scale-105">
                Chiama Ora: +39 340 123 4567
              </button>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-8 text-amber-100 text-sm">
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Consulenza senza impegno
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                Privacy garantita
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                  <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd" />
                </svg>
                Pagamenti flessibili
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Premium */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            
            {/* Company Info */}
            <div className="md:col-span-2">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-amber-400 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-xl">AM</span>
                </div>
                <div className="ml-3">
                  <h3 className="font-serif text-xl font-bold">Dott.ssa Alice Miegge</h3>
                  <p className="text-sm text-slate-400">Medicina e Chirurgia Estetica</p>
                </div>
              </div>
              <p className="text-slate-300 mb-6 leading-relaxed max-w-md">
                Medicina estetica e chirurgia rigenerativa con un approccio personalizzato 
                per la bellezza naturale e il benessere di ogni paziente.
              </p>
              <div className="flex space-x-4">
                {['instagram', 'facebook', 'linkedin', 'youtube'].map((social) => (
                  <a key={social} href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-amber-600 transition-colors duration-300">
                    <span className="text-xs font-bold uppercase">{social[0]}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-lg mb-6">Navigazione</h4>
              <ul className="space-y-3">
                {['Home', 'La Dottoressa', 'Trattamenti', 'Dove Riceve', 'Contatti'].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-slate-400 hover:text-amber-400 transition-colors duration-300">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-semibold text-lg mb-6">Contatti</h4>
              <div className="space-y-3">
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-amber-400 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:info@dottssaalicemiegge.it" className="text-slate-400 hover:text-amber-400 transition-colors duration-300">
                    info@dottssaalicemiegge.it
                  </a>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-amber-400 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a href="tel:+393401234567" className="text-slate-400 hover:text-amber-400 transition-colors duration-300">
                    +39 340 123 4567
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-slate-400 text-sm mb-4 md:mb-0">
                © 2024 Dott.ssa Alice Miegge. Tutti i diritti riservati.
              </div>
              <div className="flex space-x-6 text-sm text-slate-400">
                <a href="#" className="hover:text-amber-400 transition-colors duration-300">Privacy Policy</a>
                <a href="#" className="hover:text-amber-400 transition-colors duration-300">Cookie Policy</a>
                <a href="#" className="hover:text-amber-400 transition-colors duration-300">Disclaimer Medico</a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Float Button */}
      <a
        href="https://wa.me/393401234567"
        className="fixed bottom-8 right-8 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 hover:scale-110 transition-all duration-300"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
        </svg>
      </a>
    </div>
  );
}
