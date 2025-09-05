import { useState } from 'react';

// Icone SVG integrate per evitare dipendenze esterne
const icons = {
  'filler.png': (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
      <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z" fill="currentColor"/>
      <circle cx="12" cy="19" r="3" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  ),
  'botox.png': (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
      <path d="M12 3L14 10H10L12 3Z" fill="currentColor"/>
      <circle cx="12" cy="12" r="2" fill="currentColor"/>
      <path d="M12 14L14 21H10L12 14Z" fill="currentColor"/>
    </svg>
  ),
  'biorivitalizzazione.png': (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
      <path d="M7 12L12 7L17 12L12 17L7 12Z" stroke="currentColor" strokeWidth="2" fill="none"/>
      <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="1" fill="none"/>
      <circle cx="12" cy="12" r="2" fill="currentColor"/>
    </svg>
  ),
  'blefaroplastica.png': (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
      <path d="M1 12S5 4 12 4S23 12 23 12S19 20 12 20S1 12 1 12Z" stroke="currentColor" strokeWidth="2" fill="none"/>
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  ),
  'liposuzione.png': (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
      <path d="M12 2L22 12L12 22L2 12L12 2Z" stroke="currentColor" strokeWidth="2" fill="none"/>
      <path d="M8 12H16" stroke="currentColor" strokeWidth="2"/>
      <path d="M12 8V16" stroke="currentColor" strokeWidth="2"/>
    </svg>
  ),
  'lipogems.png': (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
      <path d="M12 2L15.09 8.26L22 9L15.09 9.74L12 16L8.91 9.74L2 9L8.91 8.26L12 2Z" fill="currentColor"/>
      <circle cx="12" cy="18" r="4" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  )
};

export default function TreatmentCard({ icon, title, description, category = 'medicina' }) {
  const [isHovered, setIsHovered] = useState(false);
  
  const iconComponent = icons[icon] || icons['filler.png'];
  const categoryColors = {
    medicina: 'from-blue-50 to-blue-100 border-blue-200',
    chirurgia: 'from-purple-50 to-purple-100 border-purple-200'
  };

  return (
    <div 
      className={`relative bg-gradient-to-br ${categoryColors[category]} p-6 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 border transform hover:scale-105 cursor-pointer overflow-hidden`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Animation */}
      <div className={`absolute inset-0 bg-gradient-to-r from-brand-blue to-brand-gold opacity-0 ${isHovered ? 'opacity-5' : ''} transition-opacity duration-500`}></div>
      
      {/* Content */}
      <div className="relative z-10">
        {/* Icon and Title */}
        <div className="flex items-center mb-4">
          <div className={`p-3 rounded-xl bg-white shadow-md text-brand-blue transition-all duration-300 ${isHovered ? 'transform rotate-6 scale-110' : ''}`}>
            {iconComponent}
          </div>
          <div className="ml-4">
            <h4 className="font-serif text-lg text-brand-blue font-bold">{title}</h4>
            <div className={`h-0.5 bg-brand-gold transition-all duration-500 ${isHovered ? 'w-full' : 'w-0'}`}></div>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-700 text-sm leading-relaxed mb-4">
          {description}
        </p>

        {/* Action Button */}
        <div className={`transition-all duration-300 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
          <button className="text-brand-blue font-semibold text-sm hover:text-brand-gold transition-colors duration-300 flex items-center">
            Scopri di più
            <svg className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Corner Decoration */}
        <div className="absolute top-0 right-0 w-16 h-16 bg-brand-gold opacity-10 rounded-bl-full"></div>
      </div>
    </div>
  );
}
