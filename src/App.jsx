// src/App.jsx
import { useEffect, useState, lazy, Suspense } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

// Lazy loading per ottimizzazione performance
const Home = lazy(() => import('./pages/Home'));
const LaDottoressa = lazy(() => import('./pages/LaDottoressa'));
const Trattamenti = lazy(() => import('./pages/Trattamenti'));
const DoveRiceve = lazy(() => import('./pages/DoveRiceve'));

// Loading Component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-brand-navy to-brand-navy-light">
    <div className="text-center">
      <div className="loading-spinner mx-auto mb-4"></div>
      <p className="text-white text-lg font-light animate-pulse">Caricamento...</p>
    </div>
  </div>
);

// Scroll to Top Button Component
function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when scrolled down
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      // Calculate scroll progress
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-gray-200 z-50">
        <div 
          className="h-full bg-gradient-to-r from-brand-gold to-brand-gold-light transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Scroll to Top Button */}
      <button
        className={`fixed bottom-24 right-8 z-40 bg-gradient-to-r from-brand-navy to-brand-navy-light text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        onClick={scrollToTop}
        aria-label="Torna su"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </>
  );
}

// Cookie Banner Component
function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const cookieAccepted = localStorage.getItem('cookieAccepted');
    if (!cookieAccepted) {
      setTimeout(() => setShowBanner(true), 2000);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieAccepted', 'true');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className={`fixed bottom-0 left-0 right-0 bg-white shadow-2xl z-50 transform transition-transform duration-500 ${
      showBanner ? 'translate-y-0' : 'translate-y-full'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <svg className="w-6 h-6 text-brand-gold flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-sm text-gray-600">
              Utilizziamo i cookie per migliorare la tua esperienza. Continuando a navigare accetti la nostra{' '}
              <a href="/privacy" className="text-brand-navy font-medium hover:text-brand-gold transition-colors">
                Privacy Policy
              </a>
              .
            </p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => setShowBanner(false)}
              className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
            >
              Rifiuta
            </button>
            <button
              onClick={acceptCookies}
              className="px-6 py-2 bg-gradient-to-r from-brand-gold to-brand-gold-light text-brand-navy font-medium rounded-full hover:shadow-lg transition-all duration-300"
            >
              Accetta
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Main App Component
function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  // Smooth scrolling for anchor links
  useEffect(() => {
    const handleSmoothScroll = (e) => {
      const target = e.target.closest('a');
      if (target && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const targetId = target.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          const offset = 80; // Height of fixed header
          const targetPosition = targetElement.offsetTop - offset;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      }
    };

    document.addEventListener('click', handleSmoothScroll);
    
    return () => {
      document.removeEventListener('click', handleSmoothScroll);
    };
  }, []);

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Prevent right click (optional - for image protection)
  useEffect(() => {
    const handleContextMenu = (e) => {
      const isImage = e.target.tagName === 'IMG';
      if (isImage) {
        e.preventDefault();
        return false;
      }
    };

    document.addEventListener('contextmenu', handleContextMenu);
    return () => document.removeEventListener('contextmenu', handleContextMenu);
  }, []);

  // Show loading screen
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-brand-navy via-brand-navy-light to-brand-navy">
        <div className="text-center">
          {/* Logo Animation */}
          <div className="relative mb-8">
            <div className="w-24 h-24 bg-gradient-to-br from-brand-gold to-brand-gold-light rounded-full flex items-center justify-center shadow-2xl animate-pulse">
              <span className="text-brand-navy font-display font-bold text-3xl">AM</span>
            </div>
            <div className="absolute inset-0 bg-brand-gold rounded-full animate-ping opacity-20"></div>
          </div>
          
          {/* Loading Text */}
          <h1 className="text-white font-display text-2xl mb-2">Dott.ssa Alice Miegge</h1>
          <p className="text-white/60 text-sm">Medicina Estetica & Chirurgia Plastica</p>
          
          {/* Loading Bar */}
          <div className="mt-8 w-48 h-1 bg-white/20 rounded-full mx-auto overflow-hidden">
            <div className="h-full bg-gradient-to-r from-brand-gold to-brand-gold-light rounded-full animate-loading-bar"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      {/* Header */}
      <Header />
      
      {/* Main Content */}
      <main>
        <Suspense fallback={<PageLoader />}>
          {/* Home Section */}
          <section id="home">
            <Home />
          </section>
          
          {/* La Dottoressa Section */}
          <section id="la-dottoressa">
            <LaDottoressa />
          </section>
          
          {/* Trattamenti Section */}
          <section id="trattamenti">
            <Trattamenti />
          </section>
          
          {/* Dove Riceve Section */}
          <section id="dove-riceve">
            <DoveRiceve />
          </section>
        </Suspense>
      </main>
      
      {/* Footer */}
      <Footer />
      
      {/* Utility Components */}
      <ScrollToTopButton />
      <CookieBanner />
      
      {/* Online Indicator */}
      <div className="fixed bottom-8 left-8 z-40 hidden lg:flex items-center bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2"></div>
        <span className="text-xs text-gray-600">Disponibile per consulenze</span>
      </div>
    </div>
  );
}

// Add custom styles for loading animation
const style = document.createElement('style');
style.textContent = `
  @keyframes loading-bar {
    0% { width: 0%; }
    50% { width: 70%; }
    100% { width: 100%; }
  }
  
  .animate-loading-bar {
    animation: loading-bar 1.5s ease-in-out infinite;
  }
  
  .loading-spinner {
    border: 3px solid rgba(255, 255, 255, 0.2);
    border-top-color: #d4af37;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    animation: spin 1s linear infinite;
  }
  
  @keyframes spin {
    to { transform: rotate(360deg); }
  }
`;
document.head.appendChild(style);

export default App;
