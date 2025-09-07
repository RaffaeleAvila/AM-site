// src/config/assets.js
// Configurazione centralizzata per tutti gli assets del sito

// Importa le immagini placeholder (da sostituire con immagini reali)
const assets = {
  images: {
    // Logo e Brand
    logo: '/images/logo-am.svg', // Da creare: logo elegante con iniziali AM
    logoWhite: '/images/logo-am-white.svg',
    
    // Hero e Homepage
    heroDottoressa: '/images/hero-dottoressa.jpg', // Foto professionale della dottoressa
    heroBackground: '/images/hero-bg.jpg', // Background elegante studio medico
    
    // Profilo Dottoressa
    profiloDottoressa: '/images/profilo-dottoressa.jpg', // Ritratto professionale
    dottoresaStudio: '/images/dottoressa-studio.jpg', // Foto in ambiente lavorativo
    
    // Cliniche
    imageClinic: '/images/cliniche/image-regenerative-clinic.jpg',
    youMedical: '/images/cliniche/youmedical.jpg',
    
    // Trattamenti Gallery
    treatments: {
      filler: '/images/trattamenti/filler-treatment.jpg',
      botox: '/images/trattamenti/botox-treatment.jpg',
      biorivitalizzazione: '/images/trattamenti/biorivitalizzazione.jpg',
      blefaroplastica: '/images/trattamenti/blefaroplastica.jpg',
      liposcultura: '/images/trattamenti/liposcultura.jpg',
      lipogems: '/images/trattamenti/lipogems.jpg',
    },
    
    // Before/After (esempio)
    beforeAfter: {
      filler: {
        before: '/images/before-after/filler-before.jpg',
        after: '/images/before-after/filler-after.jpg',
      },
      botox: {
        before: '/images/before-after/botox-before.jpg',
        after: '/images/before-after/botox-after.jpg',
      }
    },
    
    // Placeholder e Fallback
    placeholder: '/images/placeholder.jpg',
    avatarPlaceholder: '/images/avatar-placeholder.jpg',
  },
  
  // Icone SVG per trattamenti (da usare come componenti)
  icons: {
    filler: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 2v6m0 4v10m10-10h-6m-4 0H2"/>
      <circle cx="12" cy="12" r="3"/>
    </svg>`,
    
    botox: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 2l2 7h7l-5.5 4 2 7L12 16l-5.5 4 2-7L3 9h7l2-7z"/>
    </svg>`,
    
    biorivitalizzazione: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10"/>
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
    </svg>`,
    
    blefaroplastica: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
      <circle cx="12" cy="12" r="3"/>
    </svg>`,
    
    liposcultura: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 2L2 7l10 5 10-5-10-5z"/>
      <path d="M2 17l10 5 10-5M2 12l10 5 10-5"/>
    </svg>`,
    
    lipogems: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
    </svg>`,
  }
};

// Funzione helper per ottenere l'immagine con fallback
export const getImage = (path, fallback = assets.images.placeholder) => {
  // In produzione, questa funzione potrebbe verificare se l'immagine esiste
  // Per ora ritorna il path o il fallback
  return path || fallback;
};

// Funzione per generare placeholder con iniziali
export const generatePlaceholder = (text = 'AM', size = 200) => {
  return `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='${size}' height='${size}'%3E%3Crect width='${size}' height='${size}' fill='%23f0f4f8'/%3E%3Ctext x='50%25' y='50%25' font-family='serif' font-size='${size/4}' fill='%231a365d' text-anchor='middle' dy='.3em'%3E${text}%3C/text%3E%3C/svg%3E`;
};

export default assets;
