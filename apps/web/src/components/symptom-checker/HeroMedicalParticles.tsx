import React from 'react';
import { MEDICAL_PARTICLE_ICONS } from '../../data';

export const HeroMedicalParticles: React.FC = () => (
  <div className="medical-particles">
    {MEDICAL_PARTICLE_ICONS.map(({ icon, className }) => (
      <div key={className} className={`particle ${className}`}>
        <i className={`fas ${icon}`} />
      </div>
    ))}
  </div>
);
