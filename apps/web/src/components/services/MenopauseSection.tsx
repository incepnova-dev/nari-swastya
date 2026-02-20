import React, { useState } from 'react';
import { MenopauseSymptom, menopauseSymptoms } from '../../data';
import { ServicesSection } from './ServicesSection';
import { MenopauseSymptomPopup } from './menopause/MenopauseSymptomPopup';
import { MenopausePillars } from './menopause/MenopausePillars';
import { SymptomWheelContainer } from './menopause/SymptomWheelContainer';

// =========================================
// SECTION 4: MENOPAUSE REIMAGINED
// (from services.html)
// <section class="section" id="menopause">
//   <h2>...</h2>
//   <!-- symptom wheel, popup, pillars -->
// </section>
// =========================================

export interface MenopauseSectionProps {
  activeSymptomId: string;
  onChangeSymptom: (id: string) => void;
}

export const MenopauseSection: React.FC<MenopauseSectionProps> = ({
  activeSymptomId,
  onChangeSymptom
}) => {
  const activeSymptom: MenopauseSymptom | null =
    menopauseSymptoms.find((s) => s.id === activeSymptomId) ?? null;
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleSymptomClick = (symptom: MenopauseSymptom) => {
    onChangeSymptom(symptom.id);
    setIsPopupOpen(true);
  };

  return (
    <ServicesSection
      id="menopause"
      icon="🔥"
      title="Menopause"
      emphasis="Reimagined"
      subtitle={
        <p className="menopause-intro">
          This isn&apos;t &quot;the end&quot; — it&apos;s freedom from periods, clarity on your
          health, and a community that gets it.
        </p>
      }
    >
      <SymptomWheelContainer activeSymptomId={activeSymptomId} onSymptomClick={handleSymptomClick} />

      <MenopauseSymptomPopup
        symptom={activeSymptom}
        isOpen={isPopupOpen && !!activeSymptom}
        onClose={() => setIsPopupOpen(false)}
      />

      <MenopausePillars />
    </ServicesSection>
  );
};


