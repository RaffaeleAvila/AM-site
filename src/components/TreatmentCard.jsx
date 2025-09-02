// NOTA: Le icone non appariranno finché non saranno salvate in 'src/assets/icons/'
export default function TreatmentCard({ icon, title, description }) {
  const iconPath = `/src/assets/icons/${icon}`;
  
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100">
      <div className="flex items-center mb-4">
        {/* L'icona non apparirà finché il file non sarà presente */}
        <img src={iconPath} alt={`Icona ${title}`} className="w-10 h-10 mr-4" />
        <h4 className="font-serif text-lg text-brand-blue font-semibold">{title}</h4>
      </div>
      <p className="text-gray-600 text-sm">
        {description}
      </p>
    </div>
  );
}
