import React from 'react';
import { communityFeatures } from '../servicesData';

// =========================================
// COMMUNITY FEATURES WITH NEON GLOW
// (from CommunityPortalSection)
// =========================================

export const CommunityFeaturesNeon: React.FC = () => {
  return (
    <div className="community-features-neon">
      {communityFeatures.map((feature) => (
        <div key={feature.id} className="neon-feature-card">
          <div className="neon-icon">{feature.icon}</div>
          <h4>{feature.title}</h4>
          <p>{feature.description}</p>
          <div className={`neon-glow ${feature.glowClass}`} />
        </div>
      ))}
    </div>
  );
};

