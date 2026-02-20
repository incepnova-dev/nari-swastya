import React from 'react';
import SiteHeader1 from '../components/SiteHeader1';
import { Footer } from '../components/Footer';

export const Home: React.FC = () => {
  return (
    <div>
      <SiteHeader1 />
      <main className="home-main">
        <section>
          <h1 className="home-title">
            Welcome to <span className="home-title-highlight">Nari Shakti</span>
          </h1>
          <p className="home-subtitle">
            This is the landing page for the women&apos;s health web application. We&apos;ll evolve this into a rich
            experience for journeys, services, stories, and more.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
};


