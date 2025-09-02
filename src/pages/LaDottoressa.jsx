// NOTA: Il file 'profilo-dottoressa.jpeg' dovrebbe essere in 'src/assets/images/'
import profileImage from '../assets/images/profilo-dottoressa.jpeg';

export default function LaDottoressa() {
  return (
    <div className="bg-brand-gray">
      <div className="container mx-auto px-6 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/3 w-full flex justify-center">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-xl">
               {/* L'immagine non apparirà finché il file non sarà presente nella cartella corretta */}
              <img src={profileImage} alt="Ritratto Dottoressa Alice Miegge" className="w-full h-full object-cover object-center" />
            </div>
          </div>
          <div className="md:w-2/3 text-center md:text-left">
            <h2 className="font-serif text-3xl md:text-4xl text-brand-blue font-bold mb-6">La Dottoressa Alice Miegge</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Da sempre appassionata di armonia e bellezza, ho scelto di dedicare la mia carriera alla medicina estetica e alla chirurgia rigenerativa. Il mio approccio è strettamente personalizzato e unisce rigore scientifico, tecniche innovative e una profonda attenzione all’unicità di ogni paziente.
              </p>
              <p>
                Il mio obiettivo è accompagnare ogni persona in un percorso di rigenerazione e valorizzazione, per ritrovare il proprio equilibrio estetico e benessere interiore, in modo naturale e consapevole.
              </p>
              <p className="font-semibold text-text-dark">
                Laureata in Medicina e Chirurgia e specializzata in Chirurgia Generale a pieni voti presso l'Università degli Studi di Torino, ho conseguito un Master di II Livello in Medicina Estetica presso l’Università degli Studi di Pavia.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
