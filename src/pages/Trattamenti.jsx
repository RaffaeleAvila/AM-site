import TreatmentCard from '../components/TreatmentCard';

// Dati dei trattamenti - facilmente aggiornabili
const treatmentsData = {
  medicinaEstetica: [
    { title: 'Filler', icon: 'filler.png', description: 'Trattamenti con acido ialuronico per ripristinare volumi e idratazione.' },
    { title: 'Tossina Botulinica', icon: 'botox.png', description: 'Per la riduzione delle rughe di espressione e un aspetto più rilassato.' },
    { title: 'Biorivitalizzazione', icon: 'biorivitalizzazione.png', description: 'Iniezioni di sostanze bio-stimolanti per migliorare elasticità e turgore.' },
  ],
  chirurgia: [
    { title: 'Blefaroplastica', icon: 'blefaroplastica.png', description: 'Intervento per la correzione di palpebre superiori e inferiori.' },
    { title: 'Liposuzione', icon: 'liposuzione.png', description: 'Rimodellamento della silhouette tramite aspirazione del grasso localizzato.' },
    { title: 'Lipogems®', icon: 'lipogems.png', description: 'Tecnica rigenerativa che utilizza il proprio tessuto adiposo.' },
  ]
};

export default function Trattamenti() {
  return (
    <div className="container mx-auto px-6 py-16 md:py-24">
      <div className="text-center mb-12">
        <h2 className="font-serif text-3xl md:text-4xl text-brand-blue font-bold">Trattamenti</h2>
        <p className="text-lg text-gray-600 mt-2">Soluzioni personalizzate per viso e corpo.</p>
      </div>

      {/* Sezione Medicina Estetica */}
      <div className="mb-16">
        <h3 className="font-serif text-2xl text-text-dark font-semibold mb-8 border-b-2 border-brand-gold pb-2 inline-block">Medicina Estetica</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {treatmentsData.medicinaEstetica.map(trattamento => (
            <TreatmentCard key={trattamento.title} {...trattamento} />
          ))}
        </div>
      </div>

      {/* Sezione Chirurgia */}
      <div>
        <h3 className="font-serif text-2xl text-text-dark font-semibold mb-8 border-b-2 border-brand-gold pb-2 inline-block">Chirurgia Rigenerativa</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {treatmentsData.chirurgia.map(trattamento => (
            <TreatmentCard key={trattamento.title} {...trattamento} />
          ))}
        </div>
      </div>
    </div>
  );
}
