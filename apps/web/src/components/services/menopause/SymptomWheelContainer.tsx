import React from 'react';
import { MenopauseSymptom } from '../../../data';
import { SymptomWheel } from './SymptomWheel';

// =========================================
// SYMPTOM WHEEL CONTAINER
// (from MenopauseSection)
// =========================================

interface SymptomWheelContainerProps {
  activeSymptomId: string;
  onSymptomClick: (symptom: MenopauseSymptom) => void;
}

export const SymptomWheelContainer: React.FC<SymptomWheelContainerProps> = ({
  activeSymptomId,
  onSymptomClick
}) => {
  return (
    <div className="symptom-wheel-container">
      <h3 style={{ margin: 0, fontSize: '1.3rem' }}>Click a symptom to learn more:</h3>
      <SymptomWheel activeSymptomId={activeSymptomId} onSymptomClick={onSymptomClick} />
    </div>
  );
};

