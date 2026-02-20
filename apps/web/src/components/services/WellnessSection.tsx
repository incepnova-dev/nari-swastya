import React from 'react';
import { ServicesSection } from './ServicesSection';
import { WellnessAccordion } from './WellnessAccordion';

// SECTION 5: ONGOING WELLNESS (ACCORDION) from services.html
export const WellnessSection: React.FC = () => {
  return (
    <ServicesSection
      id="wellness"
      icon="💪"
      title="Ongoing"
      emphasis="Wellness"
      subtitle={
        <p className="wellness-intro">
          Health resources that grow with you—covering chronic conditions, mental health, and daily care.
        </p>
      }
    >
      <WellnessAccordion />
    </ServicesSection>
  );
};


