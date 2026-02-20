import React from 'react';
import { SiteHeader } from '../components/SiteHeader';
import { Footer } from '../components/Footer';
import { JourneysHero } from '../components/journeys/JourneysHero';

export const Journeys: React.FC = () => {
  return (
    <div className="journeys-page">
      <SiteHeader />
      <JourneysHero />
      <main className="journeys-main">
        {/* Additional journey sections will go here */}
      </main>
      <Footer />
    </div>
  );
};
