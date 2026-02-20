import React from 'react';
import SiteHeader1 from '../components/SiteHeader1';
import { Footer } from '../components/Footer';

export const Stories: React.FC = () => {
  return (
    <div>
      <SiteHeader1 />
      <main className="stories-main">
        <section>
          <h1 className="stories-title">Stories of strength from Nari Swastha</h1>
          <p className="stories-subtitle">
            This page will feature real journeys, learnings, and community voices to inspire and inform women across
            India.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
};


