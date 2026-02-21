import React from 'react';
import {
  HERO_BADGE_LABEL,
  HERO_TITLE,
  HERO_SUBTITLE,
  STAT_PILLS,
  HERO_ACTIONS,
} from '../../data';

export const HeroContent: React.FC = () => (
  <div className="hero-content">
    <div className="hero-badge">
      <i className="fas fa-circle" style={{ fontSize: '0.6rem' }} />
      <span>{HERO_BADGE_LABEL}</span>
    </div>
    <h1 className="hero-title-new">
      <span className="title-black">{HERO_TITLE.line1}</span>
      <span className="title-pink">{HERO_TITLE.line2}</span>
    </h1>
    <p className="hero-subtitle-new">{HERO_SUBTITLE}</p>
    <div className="hero-stats-new">
      {STAT_PILLS.map(({ icon, label, outlined }) => (
        <div
          key={label}
          className={`stat-pill${outlined ? ' stat-pill-outlined' : ''}`}
        >
          <i className={`fas ${icon}`} />
          <span>{label}</span>
        </div>
      ))}
    </div>
    <div className="hero-actions">
      {HERO_ACTIONS.map(({ href, icon, label, primary }) => (
        <a
          key={href}
          href={href}
          className={`btn-hero ${primary ? 'primary' : 'outline'}`}
        >
          <i className={`fas ${icon}`} />
          {label}
        </a>
      ))}
    </div>
  </div>
);
