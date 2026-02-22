import React, { useEffect, useRef } from 'react';
import { SiteHeader } from '../components/SiteHeader';
import { Footer } from '../components/Footer';
import { SymptomCheckerHero } from '../components/symptom-checker/SymptomCheckerHero';
import { SearchConditionsSection } from '../components/symptom-checker/SearchConditionsSection';
import { initSymptomCheckerApp } from '../scripts/symptom_checker';
import { symptomCheckerAppConfigFull } from '../data';

export const SymptomChecker: React.FC = () => {
  const searchSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Wait until all search inputs exist so setupSearchFunctionality can attach to them
    const runInit = () => {
      const root = searchSectionRef.current;
      if (!root) return false;
      const hasDiseaseSearch = root.querySelector('#diseaseSearch');
      const hasSymptomSearch = root.querySelector('#symptomSearch');
      if (!hasDiseaseSearch || !hasSymptomSearch) return false;
      initSymptomCheckerApp(symptomCheckerAppConfigFull);
      return true;
    };

    if (runInit()) return;

    const id = setTimeout(() => {
      runInit();
    }, 150);

    return () => clearTimeout(id);
  }, []);

  return (
    <div>
      <SiteHeader />
      <SymptomCheckerHero />
      <div ref={searchSectionRef}>
        <SearchConditionsSection />
      </div>
      <Footer />
    </div>
  );
};
