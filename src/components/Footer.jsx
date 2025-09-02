import logo from '../assets/images/logo-am.png';

export default function Footer() {
  return (
    <footer id="contatti" className="bg-brand-gray">
      <div className="container mx-auto px-6 py-12 text-center">
        <img src={logo} alt="Logo Dottoressa Miegge" className="h-12 mx-auto mb-6" />
        <p className="font-serif text-2xl text-brand-blue mb-4">Dott.ssa Alice Miegge</p>
        <p className="text-text-dark mb-2">Medico Chirurgo | P.IVA 12345678901</p>
        <p className="text-text-dark mb-6">Email: <a href="mailto:info@dottssamiegge.it" className="hover:text-brand-gold">info@dottssamiegge.it</a></p>
        <div className="text-sm text-gray-500">
          <p>&copy; 2025 Dott.ssa Alice Miegge. Tutti i diritti riservati.</p>
          <p>Sito web realizzato da Gemini</p>
        </div>
      </div>
    </footer>
  );
}
