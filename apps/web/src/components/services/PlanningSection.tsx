import React from 'react';
import { StageKey, planningServices } from '../../data';
import { ServicesSection } from './ServicesSection';

// =========================================
// SECTION 1: PLANNING YOUR FUTURE
// (from services.html)
// <section class="section services-section" id="planning">
//   <h2>
//     <span class="section-icon">🌸</span>
//     <span>Planning Your <span class="gradient-text">Future</span></span>
//   </h2>
//   <div class="services-grid">
//     ...
//   </div>
// </section>
// =========================================

interface PlanningSectionProps {
  activeStage: StageKey;
}

export const PlanningSection: React.FC<PlanningSectionProps> = ({ activeStage }) => {
  const visibleCards =
    activeStage === 'all' || activeStage === 'planning'
      ? planningServices
      : [];

  return (
    <ServicesSection
      id="planning"
      icon="🌸"
      title="Planning Your"
      emphasis="Future"
    >
      <div className="services-grid">
        {visibleCards.map((service) => (
          <article
            key={service.id}
            className="service-card"
            data-category="planning"
          >
            <div className="service-icon">{service.emoji}</div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
            <span className="service-badge">{service.badge}</span>
          </article>
        ))}
      </div>
    </ServicesSection>
  );
};


