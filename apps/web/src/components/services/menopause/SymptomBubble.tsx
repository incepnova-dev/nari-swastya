import React from 'react';
import { MenopauseSymptom } from '../../../data';

// =========================================
// SYMPTOM BUBBLE
// (from MenopauseSection)
// =========================================

interface SymptomBubbleProps {
  symptom: MenopauseSymptom;
  isActive: boolean;
  onClick: () => void;
}

export const SymptomBubble: React.FC<SymptomBubbleProps> = ({ symptom, isActive, onClick }) => {
  return (
    <button
      type="button"
      className={isActive ? 'symptom-bubble active' : 'symptom-bubble'}
      onClick={onClick}
    >
      <span className="bubble-icon">{symptom.icon}</span>
      <span className="bubble-label">{symptom.label}</span>
    </button>
  );
};

