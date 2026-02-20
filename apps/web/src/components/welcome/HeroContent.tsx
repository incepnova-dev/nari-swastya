import React from 'react';
import { heroBadge, heroTitle, heroSubtitle, heroCTAs, heroTrust } from './welcomeData';

interface HeroContentProps {
  onBeginJourney: () => void;
  onExploreStories: () => void;
}

export const HeroContent: React.FC<HeroContentProps> = ({ onBeginJourney, onExploreStories }) => {
  const handleCTAClick = (id: string) => {
    if (id === 'begin-journey') {
      onBeginJourney();
    } else if (id === 'explore-stories') {
      onExploreStories();
    }
  };

  return (
    <div className="hero-content">
      <div className="hero-badge reveal">
        <i className={`fa-solid ${heroBadge.icon}`} />
        {heroBadge.text}
      </div>
      <h1 className="hero-title-3d reveal reveal-delay-1">
        {heroTitle.line1}
        <br />
        {heroTitle.line2} <span className="title-emphasis">{heroTitle.emphasis}</span>
        <br />
        {heroTitle.line3}
      </h1>
      <p className="hero-subtitle reveal reveal-delay-2">{heroSubtitle.text}</p>
      <div className="hero-cta-row reveal reveal-delay-3">
        {heroCTAs.map((cta) => (
          <button
            key={cta.id}
            type="button"
            className={`btn-hero ${cta.type}`}
            onClick={() => handleCTAClick(cta.id)}
          >
            <i className={`fa-solid ${cta.icon}`} /> {cta.label}
          </button>
        ))}
      </div>
      <div className="hero-trust reveal reveal-delay-4">
        <div className="trust-avatars">
          {heroTrust.avatars.map((avatar, index) => (
            <div key={index} className="trust-avatar">
              {avatar}
            </div>
          ))}
        </div>
        <span>
          {heroTrust.text} <strong>{heroTrust.highlight}</strong> {heroTrust.suffix}
        </span>
      </div>
    </div>
  );
};


