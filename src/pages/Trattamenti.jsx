import { useState, useEffect, useRef } from 'react';
import TreatmentCard from '../components/TreatmentCard';

const treatmentsData = {
  medicinaEstetica: [
    { 
      title: 'Filler con Acido Ialuronico', 
      icon: 'filler.png', 
      description: 'Trattamenti personalizzati per ripristinare volumi, idratazione e definire i contorni del viso in modo naturale e armonioso.',
      category: 'medicina'
    },
    { 
      title: 'Tossina Botulinica', 
      icon: 'botox.png', 
      description: 'Per la riduzione delle rughe di espressione e il rilassamento muscolare, ottenendo un aspetto naturale e riposato.',
      category: 'medicina'
    },
    { 
      title: 'Biorivitalizzazione', 
      icon: 'biorivitalizzazione.png', 
      description: 'Iniezioni di sostanze bio-stimolanti per migliorare elasticità, turgore e luminosità della pelle del viso.',
      category: 'medicina'
    },
  ],
  chirurgia: [
    { 
      title: 'Blefaroplastica', 
      icon: 'blefaroplastica.png', 
      description: 'Intervento di chirurgia estetica per la correzione di palpebre superiori e inferiori, per uno sguardo più giovane.',
      category: 'chirurgia'
    },
    { 
      title: 'Liposcultura', 
      icon: 'liposuzione.png', 
      description: 'Rimodellamento della silhouette tramite aspirazione selettiva del grasso localizzato e riposizionamento.',
      category: 'chirurgia'
    },
    { 
      title: 'Lipogems®', 
      icon: 'lipogems.png', 
      description: 'Tecnica rigenerativa innovativa che utilizza il proprio tessuto adiposo per stimolare la rigenerazione naturale.',
      category: 'chirurgia'
    },
  ]
};

export default function Trattamenti() {
  const [isVisible, setIsVisible] = useState(false}
  const [activeCategory, setActiveCategory] = useState('all');
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer =
