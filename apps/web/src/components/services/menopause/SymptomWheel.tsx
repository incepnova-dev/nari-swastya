import React from 'react';
import { MenopauseSymptom, menopauseSymptoms } from '../servicesData';
import { SymptomBubble } from './SymptomBubble';

// =========================================
// SYMPTOM WHEEL
// (from MenopauseSection)
// =========================================

interface SymptomWheelProps {
  activeSymptomId: string;
  onSymptomClick: (symptom: MenopauseSymptom) => void;
}

export const SymptomWheel: React.FC<SymptomWheelProps> = ({ activeSymptomId, onSymptomClick }) => {
  return (
    <div className="symptom-wheel">
      {menopauseSymptoms.map((symptom) => (
        <SymptomBubble
          key={symptom.id}
          symptom={symptom}
          isActive={activeSymptomId === symptom.id}
          onClick={() => onSymptomClick(symptom)}
        />
      ))}
    </div>
  );
};

