import React from 'react';
import { GrowthStep } from '../servicesData';

// =========================================
// GROWTH STEP ITEM
// (from HealingGardenSection)
// =========================================

interface GrowthStepItemProps {
  step: GrowthStep;
  showConnector: boolean;
}

export const GrowthStepItem: React.FC<GrowthStepItemProps> = ({ step, showConnector }) => {
  return (
    <div className="growth-step">
      <div className="step-visual">
        <div className="growth-icon">{step.icon}</div>
        {showConnector && <div className="step-connector" />}
      </div>
      <div className="step-content">
        <h4>{step.title}</h4>
        <div className="step-petals">
          {step.petals.map((petal) =>
            petal.href ? (
              <a key={petal.id} href={petal.href} className="petal">
                <i className={petal.iconClass} />
                <span>{petal.label}</span>
              </a>
            ) : (
              <div key={petal.id} className="petal">
                <i className={petal.iconClass} />
                <span>{petal.label}</span>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

