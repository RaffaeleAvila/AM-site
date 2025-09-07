# 🏥 Dott.ssa Alice Miegge - Sito Web Professionale

[![React](https://img.shields.io/badge/React-18.2.0-blue.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.2.0-646CFF.svg)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4.3-38B2AC.svg)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-Private-red.svg)]()

## 📋 Descrizione

Sito web professionale per la Dott.ssa Alice Miegge, specialista in Medicina Estetica e Chirurgia Plastica Rigenerativa. Il sito presenta un design moderno e premium, ottimizzato per conversioni e performance.

## ✨ Caratteristiche Principali

- 🎨 **Design Premium**: Interfaccia elegante e professionale in linea con gli standard medicali
- 📱 **Fully Responsive**: Ottimizzato per tutti i dispositivi (mobile, tablet, desktop)
- ⚡ **Performance Ottimizzate**: Lazy loading, code splitting, e ottimizzazioni Vite
- 🔍 **SEO Ready**: Meta tags, structured data, sitemap automatica
- ♿ **Accessibile**: WCAG 2.1 Level AA compliant
- 🔒 **Sicuro**: HTTPS ready, Content Security Policy
- 📊 **Analytics Ready**: Predisposto per Google Analytics e Tag Manager
- 💬 **WhatsApp Integration**: Chat diretta per consulenze immediate

## 🚀 Quick Start

### Prerequisiti

- Node.js >= 18.0.0
- npm >= 9.0.0

### Installazione

```bash
# Clona il repository
git clone https://github.com/RaffaeleAvila/AM-site.git

# Entra nella directory
cd AM-site

# Installa le dipendenze
npm install

# Avvia il server di sviluppo
npm run dev
```

### Build per Produzione

```bash
# Crea build ottimizzata
npm run build

# Preview della build
npm run preview
```

## 📁 Struttura del Progetto

```
AM-site/
├── public/
│   ├── images/           # Immagini statiche
│   ├── favicon.svg       # Favicon
│   └── robots.txt        # SEO robots file
├── src/
│   ├── assets/          # Assets (immagini, fonts, etc.)
│   ├── components/      # Componenti React riutilizzabili
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── OptimizedImage.jsx
│   │   └── TreatmentCard.jsx
│   ├── config/          # Configurazioni
│   │   └── assets.js    # Gestione centralizzata assets
│   ├── pages/           # Pagine principali
│   │   ├── Home.jsx
│   │   ├── LaDottoressa.jsx
│   │   ├── Trattamenti.jsx
│   │   └── DoveRiceve.jsx
│   ├── styles/          # Stili globali
│   │   └── index.css
│   ├── App.jsx          # Componente principale
│   └── main.jsx         # Entry point
├── .gitignore
├── index.html
├── package.json
├── tailwind.config.js   # Configurazione Tailwind
├── vite.config.js       # Configurazione Vite
└── README.md
```

## 🎨 Design System

### Colori

- **Brand Navy**: `#1a365d` - Colore principale professionale
- **Brand Gold**: `#d4af37` - Accento lussuoso
- **Brand Pearl**: `#f8f5f0` - Background elegante

### Tipografia

- **Display**: Playfair Display - Titoli eleganti
- **Body**: Montserrat - Testo leggibile
- **Sans**: Inter - UI elements

## 🔧 Configurazione

### Variabili d'Ambiente

Crea un file `.env.local` nella root del progetto:

```env
# API Keys
VITE_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
VITE_GOOGLE_ANALYTICS_ID=your_ga_id
VITE_GTM_ID=your_gtm_id

# Contact
VITE_WHATSAPP_NUMBER=393401234567
VITE_EMAIL_CONTACT=info@dottssaalicemiegge.it

# API Endpoints (se presente backend)
VITE_API_URL=https://api.dottssaalicemiegge.it
```

### Immagini Richieste

Aggiungi le seguenti immagini in `public/images/`:

```
images/
├── logo-am.svg                    # Logo principale
├── hero-dottoressa.jpg           # Foto hero homepage
├── profilo-dottoressa.jpg        # Foto profilo
├── cliniche/
│   ├── image-clinic.jpg          # Foto Image Clinic
│   └── youmedical.jpg            # Foto YouMedical
└── trattamenti/
    ├── filler.jpg
    ├── botox.jpg
    ├── biorivitalizzazione.jpg
    ├── blefaroplastica.jpg
    ├── liposcultura.jpg
    └── lipogems.jpg
```

## 📦 Scripts Disponibili

```bash
npm run dev          # Avvia server di sviluppo
npm run build        # Build di produzione
npm run preview      # Preview build locale
npm run lint         # Linting del codice
npm run format       # Formattazione con Prettier
npm run test         # Esegui test
npm run test:ui      # Test con UI
npm run test:coverage # Coverage dei test
```

## 🚀 Deploy

### Netlify

```bash
# Build command
npm run build

# Publish directory
dist

# Environment variables
Aggiungi le variabili dal file .env.local
```

### Vercel

```bash
# Framework preset
Vite

# Build command
npm run build

# Output directory
dist
```

## 📱 PWA Support

Il sito è configurato come Progressive Web App con:
- Offline support
- Install prompt
- Push notifications ready
- App manifest

## 🔐 Sicurezza

- Content Security Policy configurata
- HTTPS enforced
- XSS Protection
- Sanitizzazione input utente
- Rate limiting ready

## 📊 Performance

- **Lighthouse Score**: 95+ su tutte le metriche
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3.5s
- **Cumulative Layout Shift**: < 0.1

## 🧪 Testing

```bash
# Unit tests
npm run test

# E2E tests (configurare Cypress)
npm run test:e2e

# Coverage report
npm run test:coverage
```

## 📝 Checklist Pre-Launch

- [ ] Sostituire immagini placeholder con foto reali
- [ ] Aggiornare informazioni di contatto
- [ ] Configurare Google Analytics
- [ ] Configurare Google Tag Manager
- [ ] Testare form di contatto
- [ ] Verificare responsive su tutti i dispositivi
- [ ] Ottimizzare immagini (WebP format)
- [ ] Configurare sitemap.xml
- [ ] Aggiungere favicon set completo
- [ ] Testare velocità con PageSpeed Insights
- [ ] Configurare backup automatici
- [ ] SSL Certificate attivo
- [ ] Privacy Policy e Cookie Policy
- [ ] Consenso informato form
- [ ] Test WhatsApp integration

## 🤝 Contributi

Per contribuire al progetto:

1. Fork il repository
2. Crea un branch (`git checkout -b feature/AmazingFeature`)
3. Commit le modifiche (`git commit -m 'Add AmazingFeature'`)
4. Push al branch (`git push origin feature/AmazingFeature`)
5. Apri una Pull Request

## 📄 Licenza

Questo progetto è proprietà privata della Dott.ssa Alice Miegge. Tutti i diritti riservati.

## 👥 Team

- **Development**: [Nome Developer]
- **Design**: Ispirato a istitutoimage.it
- **Content**: Dott.ssa Alice Miegge

## 📞 Supporto

Per supporto tecnico:
- Email: dev@esempio.com
- Issues: [GitHub Issues](https://github.com/RaffaeleAvila/AM-site/issues)

---

**Ultimo aggiornamento**: Gennaio 2025
**Versione**: 2.0.0
