import React from 'react';
import { SiteHeader } from '../components/SiteHeader';
import { Footer } from '../components/Footer';
import { SymptomCheckerHero } from '../components/symptom-checker/SymptomCheckerHero';
import { SearchConditionsSection } from '../components/symptom-checker/SearchConditionsSection';

export const SymptomChecker: React.FC = () => {
  return (
    <div>
      <SiteHeader />
      <SymptomCheckerHero />
      <SearchConditionsSection />
      <main className="symptom-checker-main">
        <section id="symptom-detector" className="symptom-checker-content">
          <p>
            AI Symptom Detector section — coming soon. Use search above to find conditions.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
};
