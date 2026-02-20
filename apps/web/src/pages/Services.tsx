import React, { useState } from 'react';
import SiteHeader1 from '../components/SiteHeader1';
import { Footer } from '../components/Footer';
import { StageKey } from '../components/services/servicesData';
import { ServicesHero } from '../components/services/ServicesHero';
import { StageFilters } from '../components/services/StageFilters';
import { PlanningSection } from '../components/services/PlanningSection';
import { PregnancySection } from '../components/services/PregnancySection';
import { PostpartumSection } from '../components/services/PostpartumSection';
import { MenopauseSection } from '../components/services/MenopauseSection';
import { WellnessSection } from '../components/services/WellnessSection';
import { SimulationPreviewSection } from '../components/services/SimulationPreviewSection';
import { GovernmentSchemesSection } from '../components/services/GovernmentSchemesSection';
import { HealingGardenSection } from '../components/services/HealingGardenSection';
import { HowItWorksSection } from '../components/services/HowItWorksSection';
import { SymptomDetectionCTASection } from '../components/services/SymptomDetectionCTASection';
import { PersonalTrackingHubSection } from '../components/services/PersonalTrackingHubSection';
import { CommunityPortalSection } from '../components/services/CommunityPortalSection';

export const Services: React.FC = () => {
  const [activeStage, setActiveStage] = useState<StageKey>('all');
  const [activeSymptomId, setActiveSymptomId] = useState<string>('');

  return (
    <div>
      <SiteHeader1 />
      <ServicesHero />
      <main className="services-main">
        <StageFilters activeStage={activeStage} onChange={setActiveStage} />
        <div className="services-sections-wrapper">
          <PlanningSection activeStage={activeStage} />
          <PregnancySection />
          <PostpartumSection />
          <MenopauseSection
            activeSymptomId={activeSymptomId}
            onChangeSymptom={(id) => setActiveSymptomId(id)}
          />
          <WellnessSection />
          <SimulationPreviewSection />
          <GovernmentSchemesSection />
          <HealingGardenSection />
          <HowItWorksSection />
        </div>
        <SymptomDetectionCTASection />
        <PersonalTrackingHubSection />
        <CommunityPortalSection />
      </main>
      <Footer />
    </div>
  );
};

