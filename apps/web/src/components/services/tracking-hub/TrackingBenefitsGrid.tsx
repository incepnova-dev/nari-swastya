import React from 'react';
import { trackingBenefits } from '../servicesData';

// =========================================
// TRACKING BENEFITS GRID
// (from PersonalTrackingHubSection)
// =========================================

export const TrackingBenefitsGrid: React.FC = () => {
  return (
    <div className="tracking-benefits-grid">
      {trackingBenefits.map((benefit) => (
        <div key={benefit.id} className="benefit-glass-card">
          <div className="benefit-icon-float">{benefit.icon}</div>
          <h4>{benefit.title}</h4>
          <p>{benefit.description}</p>
        </div>
      ))}
    </div>
  );
};

