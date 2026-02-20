import React from 'react';

// =========================================
// HEALING GARDEN HEADER
// (from HealingGardenSection)
// =========================================

export const HealingGardenHeader: React.FC = () => {
  return (
    <div className="garden-header">
      <h2>
        <span className="section-icon">🕊️</span>
        <span>
          Miscarriage & <span className="gradient-text">Loss</span> Support
        </span>
      </h2>
      <p className="sub">
        When a pregnancy is lost, we hold both your medical and emotional care in one safe space.
      </p>
    </div>
  );
};

