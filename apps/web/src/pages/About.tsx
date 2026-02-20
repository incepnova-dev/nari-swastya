import React from 'react';
import SiteHeader1 from '../components/SiteHeader1';
import { Footer } from '../components/Footer';

export const About: React.FC = () => {
  return (
    <div>
      <SiteHeader1 />
      <main className="about-main">
        <section>
          <h1 className="about-title">About Nari Swastha</h1>
          <p className="about-subtitle">
            Nari Swastha is focused on building a trusted, evidence-based companion for women&apos;s health, bringing
            together clinical expertise, research, and community insights into one accessible experience.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
};


