export default function DoveRiceve() {
  const clinics = [
    {
      name: 'Image Regenerative Clinic',
      address: 'Via Pietro Mascagni, 2, 20122 Milano MI',
      website: 'https://istitutoimage.com/',
    },
    {
      name: 'YouMedical',
      address: 'Via Giuseppe Verdi, 91, 20831 Seregno MB',
      website: 'https://www.youmedical.it/',
    }
  ];

  return (
    <div className="bg-brand-gray">
      <div className="container mx-auto px-6 py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-brand-blue font-bold">Dove Riceve</h2>
          <p className="text-lg text-gray-600 mt-2">La Dottoressa riceve presso le seguenti strutture d'eccellenza.</p>
        </div>
        <div className="flex flex-col md:flex-row justify-center gap-8">
          {clinics.map(clinic => (
            <div key={clinic.name} className="bg-white p-8 rounded-lg shadow-lg text-center md:w-1/3">
              <h3 className="font-serif text-xl text-brand-blue font-semibold mb-4">{clinic.name}</h3>
              <p className="text-gray-600 mb-6">{clinic.address}</p>
              <a 
                href={clinic.website} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-white text-brand-blue font-bold py-2 px-6 border-2 border-brand-blue rounded-md hover:bg-brand-blue hover:text-white transition-colors duration-300"
              >
                Visita il Sito
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
