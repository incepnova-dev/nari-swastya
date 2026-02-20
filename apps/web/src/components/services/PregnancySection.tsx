import React from 'react';
import { pregnancyTimeline } from '../../data';
import { ServicesSection } from './ServicesSection';

// =========================================
// SECTION 2: PREGNANCY JOURNEY (TIMELINE)
// (from services.html)
// <section class="section" id="pregnancy">
//   <h2>
//     <span class="section-icon">🤰</span>
//     <span>Your <span class="gradient-text">Pregnancy</span> Journey</span>
//   </h2>
//   ...
// </section>
// =========================================

export const PregnancySection: React.FC = () => (
  <ServicesSection
    id="pregnancy"
    icon="🤰"
    title="Your"
    emphasis="Pregnancy Journey"
    subtitle={
      <p style={{ textAlign: 'center', color: 'var(--text-soft)', marginBottom: '2rem' }}>
        Navigate each trimester with confidence—from first kicks to labor preparation.
      </p>
    }
  >
    <div className="journey-timeline">
      <div className="timeline-track">
        {pregnancyTimeline.map((item) => (
          <article key={item.id} className="timeline-item">
            <div className="timeline-icon">{item.icon}</div>
            <div className="timeline-content">
              <h3 className="timeline-title">{item.title}</h3>
              <p className="timeline-description">{item.description}</p>
              <div className="timeline-links">
                {item.links.map((link) => (
                  <span key={link} className="timeline-link">
                    {link}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  </ServicesSection>
);


