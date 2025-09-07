// src/components/Footer.jsx
import { useState } from 'react';
import assets, { generatePlaceholder } from '../config/assets';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const currentYear = new Date().getFullYear();

  const handleNewsletter = (e) => {
    e.preventDefault();
    // Qui andrebbe l'integrazione con il servizio newsletter
    setIsSubscribed(true);
    setTimeout(() => setIsSubscribed(false), 3000);
    setEmail('');
  };

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'La Dottoressa', href: '#la-dottoressa' },
    { name: 'Trattamenti', href: '#trattamenti' },
    { name: 'Dove Riceve', href: '#dove-riceve' },
    { name: 'Blog', href: '#blog' },
    { name: 'FAQ', href: '#faq' }
  ];

  const treatments = [
    { name: 'Filler Acido Ialuronico', href: '#trattamenti' },
    { name: 'Tossina Botulinica', href: '#trattamenti' },
    { name: 'Biorivitalizzazione', href: '#trattamenti' },
    { name: 'Blefaroplastica', href: '#trattamenti' },
    { name: 'Liposcultura VASER', href: '#trattamenti' },
    { name: 'Lipogems®', href: '#trattamenti' }
  ];

  const clinics = [
    { 
      name: 'Image Regenerative Clinic',
      address: 'Via Pietro Mascagni, 2',
      city: 'Milano',
      phone: '+39 02 8736 4593'
    },
    { 
      name: 'YouMedical',
      address: 'Via Giuseppe Verdi, 91',
      city: 'Seregno (MB)',
      phone: '+39 0362 238 745'
    }
  ];

  const socialLinks = [
    { 
      name: 'Instagram',
      href: 'https://instagram.com/dottssaalicemiegge',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
        </svg>
      )
    },
    { 
      name: 'Facebook',
      href: 'https://facebook.com/dottssaalicemiegge',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      )
    },
    { 
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/alice-miegge',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    },
    {
      name: 'YouTube',
      href: 'https://youtube.com/@dottssaalicemiegge',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      )
    }
  ];

  return (
    <footer id="contatti" className="bg-gradient-to-br from-brand-navy via-brand-navy-light to-brand-navy text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-64 h-64 bg-brand-gold rounded-full -translate-x-32 -translate-y-32 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-48 translate-y-48 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-brand-gold rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
      </div>

      {/* Newsletter Section */}
      <div className="border-b border-white/10">
        <div className="container mx-auto px-6 py-12 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <h3 className="font-['Playfair_Display'] text-2xl font-bold mb-2">
                Resta Aggiornato
              </h3>
              <p className="text-white/70">
                Ricevi consigli di bellezza e novità sui trattamenti
              </p>
            </div>
            
            <form onSubmit={handleNewsletter} className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="La tua email"
                required
                className="px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent transition-all duration-300 sm:w-80"
              />
              <button
                type="submit"
                className="px-8 py-3 bg-gradient-to-r from-brand-gold to-brand-gold-light text-brand-navy font-bold rounded-full hover:shadow-gold transition-all duration-300 transform hover:scale-105 whitespace-nowrap"
              >
                {isSubscribed ? '✓ Iscritto' : 'Iscriviti'}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Company Info */}
          <div className="lg:col-span-1">
            {/* Logo */}
            <div className="flex items-center mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-brand-gold to-brand-gold-light rounded-full flex items-center justify-center shadow-lg">
                <span className="text-brand-navy font-display font-bold text-xl">AM</span>
              </div>
              <div className="ml-3">
                <h3 className="font-['Playfair_Display'] text-xl font-bold">
                  Dott.ssa Alice Miegge
                </h3>
                <p className="text-sm text-white/70">
                  Medicina e Chirurgia Estetica
                </p>
              </div>
            </div>
            
            <p className="text-white/70 mb-6 leading-relaxed">
              Medicina estetica e chirurgia rigenerativa con un approccio 
              personalizzato per la bellezza naturale e il benessere di ogni paziente.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-brand-gold hover:text-brand-navy transition-all duration-300 transform hover:scale-110 group"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-['Playfair_Display'] text-lg font-semibold mb-6 flex items-center">
              <span className="w-8 h-0.5 bg-brand-gold mr-3"></span>
              Navigazione
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-white/70 hover:text-brand-gold transition-all duration-300 flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-brand-gold transition-all duration-300 mr-0 group-hover:mr-2"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Treatments */}
          <div>
            <h4 className="font-['Playfair_Display'] text-lg font-semibold mb-6 flex items-center">
              <span className="w-8 h-0.5 bg-brand-gold mr-3"></span>
              Trattamenti
            </h4>
            <ul className="space-y-3">
              {treatments.map((treatment) => (
                <li key={treatment.name}>
                  <a 
                    href={treatment.href}
                    className="text-white/70 hover:text-brand-gold transition-all duration-300 flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-brand-gold transition-all duration-300 mr-0 group-hover:mr-2"></span>
                    {treatment.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-['Playfair_Display'] text-lg font-semibold mb-6 flex items-center">
              <span className="w-8 h-0.5 bg-brand-gold mr-3"></span>
              Contatti
            </h4>
            
            {/* Email */}
            <div className="mb-4">
              <a 
                href="mailto:info@dottssaalicemiegge.it"
                className="flex items-start group"
              >
                <svg className="w-5 h-5 text-brand-gold mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-white/70 group-hover:text-brand-gold transition-colors duration-300">
                  info@dottssaalicemiegge.it
                </span>
              </a>
            </div>
            
            {/* Phone */}
            <div className="mb-6">
              <a 
                href="tel:+393401234567"
                className="flex items-start group"
              >
                <svg className="w-5 h-5 text-brand-gold mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-white/70 group-hover:text-brand-gold transition-colors duration-300">
                  +39 340 123 4567
                </span>
              </a>
            </div>

            {/* Clinics */}
            <div>
              <h5 className="text-sm font-semibold mb-3 text-brand-gold uppercase tracking-wider">
                Le Nostre Sedi
              </h5>
              <div className="space-y-3">
                {clinics.map((clinic) => (
                  <div key={clinic.name} className="text-sm">
                    <p className="font-medium text-white/90">{clinic.name}</p>
                    <p className="text-white/60">{clinic.address}</p>
                    <p className="text-white/60">{clinic.city}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="border-t border-white/10 pt-8 mb-8">
          <div className="flex flex-wrap justify-center gap-8 items-center">
            <div className="text-center">
              <p className="text-xs text-white/50 uppercase tracking-wider mb-2">Certificata</p>
              <p className="text-white/80 font-medium">Lipogems®</p>
            </div>
            <div className="w-px h-8 bg-white/20"></div>
            <div className="text-center">
              <p className="text-xs text-white/50 uppercase tracking-wider mb-2">Membro</p>
              <p className="text-white/80 font-medium">AICPE</p>
            </div>
            <div className="w-px h-8 bg-white/20"></div>
            <div className="text-center">
              <p className="text-xs text-white/50 uppercase tracking-wider mb-2">Iscritta</p>
              <p className="text-white/80 font-medium">SIME</p>
            </div>
            <div className="w-px h-8 bg-white/20"></div>
            <div className="text-center">
              <p className="text-xs text-white/50 uppercase tracking-wider mb-2">Ordine Medici</p>
              <p className="text-white/80 font-medium">Torino</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <p className="text-white/60 text-sm">
                © {currentYear} Dott.ssa Alice Miegge. Tutti i diritti riservati.
              </p>
              <p className="text-white/40 text-xs mt-1">
                P.IVA 12345678901 | Medico Chirurgo Specialista in Chirurgia Generale
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <a href="/privacy" className="text-white/60 hover:text-brand-gold transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="/cookie" className="text-white/60 hover:text-brand-gold transition-colors duration-300">
                Cookie Policy
              </a>
              <a href="/disclaimer" className="text-white/60 hover:text-brand-gold transition-colors duration-300">
                Disclaimer Medico
              </a>
              <a href="/consenso" className="text-white/60 hover:text-brand-gold transition-colors duration-300">
                Consenso Informato
              </a>
            </div>
          </div>
        </div>

        {/* Developer Credit */}
        <div className="text-center mt-8 pt-8 border-t border-white/5">
          <p className="text-white/30 text-xs">
            Designed with ❤️ for medical excellence | 
            <a href="#" className="ml-1 hover:text-brand-gold transition-colors duration-300">
              Web Development Partner
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
