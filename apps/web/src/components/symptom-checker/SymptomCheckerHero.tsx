import React from 'react';
import { HeroParticleBackground } from './HeroParticleBackground';
import { HeroContent } from './HeroContent';
import { HeroMedicalAnimation } from './HeroMedicalAnimation';

export const SymptomCheckerHero: React.FC = () => (
  <section className="hero-section">
    <HeroParticleBackground />
    <div className="hero-container">
      <HeroContent />
      <HeroMedicalAnimation />
    </div>
  </section>
);
