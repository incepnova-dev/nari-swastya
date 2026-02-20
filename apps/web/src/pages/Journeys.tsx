import React from 'react';
import { SiteHeader } from '../components/SiteHeader';
import { Footer } from '../components/Footer';

export const Journeys: React.FC = () => {
  return (
    <div>
      <SiteHeader />
      <main className="journeys-main">
        <section>
          <h1 className="journeys-hero-title">
            Care journeys across <span className="journeys-hero-highlight">every life stage</span>
          </h1>
          <p className="journeys-hero-subtitle">
            This section will map personalized journeys for menstruation, fertility, pregnancy, postpartum, and
            menopause, tailored for Nari Swastha.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
};


