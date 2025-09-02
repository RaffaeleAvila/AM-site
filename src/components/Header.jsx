import logo from '../assets/images/logo-am.png';

export default function Header() {
  const navItems = ['La Dottoressa', 'Trattamenti', 'Dove Riceve'];
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <img src={logo} alt="Logo Dottoressa Miegge" className="h-10" />
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map(item => (
            <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-text-dark hover:text-brand-gold transition-colors">
              {item}
            </a>
          ))}
          <a href="#contatti" className="bg-brand-blue text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition">
            Contatti
          </a>
        </nav>
        <button className="md:hidden text-brand-blue">
          {/* Mobile Menu Icon */}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
}
