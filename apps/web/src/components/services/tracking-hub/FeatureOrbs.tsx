import React from 'react';
import { featureOrbs } from '../servicesData';

// =========================================
// FEATURE ORBS FLOATING AROUND
// (from PersonalTrackingHubSection)
// =========================================

export const FeatureOrbs: React.FC = () => {
  return (
    <div className="tracking-features-orbit">
      {featureOrbs.map((orb) => (
        <div key={orb.id} className={`feature-orb ${orb.orbClass}`}>
          <div className="orb-icon">{orb.icon}</div>
          <div className="orb-label">{orb.label}</div>
        </div>
      ))}
    </div>
  );
};

