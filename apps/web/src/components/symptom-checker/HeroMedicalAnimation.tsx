import React from 'react';
import { HeroDnaHelix } from './HeroDnaHelix';
import { HeroMedicalParticles } from './HeroMedicalParticles';
import { HeroHealthCore } from './HeroHealthCore';
import { HeroOrbitSystem } from './HeroOrbitSystem';

export const HeroMedicalAnimation: React.FC = () => (
  <div className="hero-visual">
    <div className="medical-animation-container">
      <HeroDnaHelix />
      <HeroMedicalParticles />
      <HeroHealthCore />
      <HeroOrbitSystem />
    </div>
  </div>
);
