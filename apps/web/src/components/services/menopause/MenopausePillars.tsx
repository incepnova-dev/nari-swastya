import React from 'react';
import { menopausePillars } from '../servicesData';

// Menopause Resource Links section
// Mirrors the markup under <!-- Menopause Resource Links --> in services.html
export const MenopausePillars: React.FC = () => {
  return (
    <div className="pillars-grid">
      {menopausePillars.map((pillar) => (
        <a key={pillar.id} href={`#${pillar.id}`} className="pillar-card">
          <div className="pillar-number">{pillar.number}</div>
          <h4 className="pillar-title">{pillar.title}</h4>
          <p className="pillar-description">{pillar.description}</p>
        </a>
      ))}
    </div>
  );
};

