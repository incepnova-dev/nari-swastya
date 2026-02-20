import React from 'react';
import { growthSteps } from '../../../data';
import { GrowthStepItem } from './GrowthStepItem';

// =========================================
// GROWTH PATH
// (from HealingGardenSection)
// =========================================

export const GrowthPath: React.FC = () => {
  return (
    <div className="growth-path">
      {growthSteps.map((step, index) => (
        <GrowthStepItem
          key={step.id}
          step={step}
          showConnector={index < growthSteps.length - 1}
        />
      ))}
    </div>
  );
};

