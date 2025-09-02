// NOTA: Il file 'hero-dottoressa.jpeg' dovrebbe essere in 'src/assets/images/'
import heroImage from '../assets/images/hero-dottoressa.jpeg';

export default function Home() {
  return (
    <div className="container mx-auto px-6 py-16 md:py-24">
      <div className="flex flex-col md:flex-row items-center">
        {/* Blocco Testo */}
        <div className="md:w-1/2 mb-10 md:mb-0 text-center md:text-left">
          <h1 className="font-serif text-4xl md:text-6xl text-brand-blue font-bold leading-tight mb-4">
            Medicina e Chirurgia Estetica
          </h1>
          <p className="font-sans text-lg md:text-xl text-text-dark mb-6">
            L'approccio rigenerativo per una bellezza autentica.
          </p>
          <p className="text-gray-600 mb-8">
            La Dottoressa Alice Miegge riceve presso le cliniche Image Regenerative Clinic (Milano) e Youmedical (Seregno).
          </p>
          <a href="#trattamenti" className="bg-brand-blue text-white font-bold py-3 px-8 rounded-md hover:bg-opacity-90 transition-transform duration-300 inline-block">
            Scopri i Trattamenti
          </a>
        </div>
        {/* Blocco Immagine */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <div className="w-4/5 md:w-full max-w-md rounded-lg overflow-hidden shadow-2xl">
             {/* L'immagine non apparirà finché il file non sarà presente nella cartella corretta */}
            <img src={heroImage} alt="Dottoressa Alice Miegge" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
}
