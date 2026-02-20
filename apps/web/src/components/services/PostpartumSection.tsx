import React from 'react';
import { postpartumCarousel } from './servicesData';
import { ServicesSection } from './ServicesSection';

// =========================================
// SECTION 3: POSTPARTUM WELLNESS (CAROUSEL)
// (from services.html)
// <section class="section" id="postpartum">
//   <h2>...</h2>
//   <div class="wellness-carousel">...</div>
// </section>
// =========================================

export const PostpartumSection: React.FC = () => (
  <ServicesSection
    id="postpartum"
    icon="🌼"
    title="Postpartum"
    emphasis="Wellness"
    subtitle={
      <p style={{ textAlign: 'center', color: 'var(--text-soft)', marginBottom: '2rem' }}>
        From breastfeeding to mental health—support that understands the fourth trimester.
      </p>
    }
  >
    <div className="wellness-carousel">
      <div className="carousel-container">
        {postpartumCarousel.map((item) => (
          <article
            key={item.id}
            className="carousel-card"
            data-category="postpartum"
          >
            <div className="carousel-image">{item.emoji}</div>
            <div className="carousel-content">
              <h3 className="carousel-title">{item.title}</h3>
              <p className="carousel-description">{item.description}</p>
              <span className="carousel-tag">{item.tag}</span>
            </div>
          </article>
        ))}
      </div>
    </div>
  </ServicesSection>
);


