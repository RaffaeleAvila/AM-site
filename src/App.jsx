import { useEffect, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import LaDottoressa from './pages/LaDottoressa';
import Trattamenti from './pages/Trattamenti';
import DoveRiceve from './pages/DoveRiceve';

function App() {
  // Smooth scrolling per i link di navigazione
  useEffect(() => {
    const handleSmoothScroll = (e) => {
      const target = e.target.closest('a');
      if (target && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const targetId = target.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
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

  return (
    <div className="App">
      <Header />
      <main>
        <Home />
        <LaDottoressa />
        <Trattamenti />
        <DoveRiceve />
      </main>
      <Footer />
      
      {/* Scroll to Top Button */}
      <ScrollToTopButton />
    </div>
  );
}

// Componente per il bottone "Torna su"
function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
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
    <button
      className={`fixed bottom-8 right-8 z-50 bg-brand-blue text-white p-3 rounded-full shadow-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-110 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
      onClick={scrollToTop}
      aria-label="Torna su"
    >
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
    </button>
  );
}

export default App;
