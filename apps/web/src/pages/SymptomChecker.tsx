import React, { useEffect, useRef } from 'react';
import { SiteHeader } from '../components/SiteHeader';
import { Footer } from '../components/Footer';
import { SymptomCheckerHero } from '../components/symptom-checker/SymptomCheckerHero';
import { SearchConditionsSection } from '../components/symptom-checker/SearchConditionsSection';
import { SymptomDetectorSection } from '../components/symptom-checker/SymptomDetectorSection';
import { DiseaseDetailModal } from '../components/symptom-checker/DiseaseDetailModal';
import { initSymptomCheckerApp } from '../scripts/symptom_checker';
import { symptomCheckerAppConfigFull } from '../data';

export const SymptomChecker: React.FC = () => {
  const searchSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Wait until search inputs and detector form exist so all setup can attach
    const runInit = () => {
      const root = searchSectionRef.current;
      if (!root) return false;
      const hasDiseaseSearch = root.querySelector('#diseaseSearch');
      const hasSymptomSearch = root.querySelector('#symptomSearch');
      const hasDetector = root.querySelector('#symptom-detector');
      if (!hasDiseaseSearch || !hasSymptomSearch || !hasDetector) return false;
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
        <SymptomDetectorSection />
        <DiseaseDetailModal />
      </div>
      <Footer />
    </div>
  );
};
