import React from 'react';

// =========================================
// TRACKING HUB CENTRAL CTA
// (from PersonalTrackingHubSection)
// =========================================

export const TrackingHubCTA: React.FC = () => {
  return (
    <div className="tracking-cta-center">
      <a href="#" className="btn-holographic">
        <span className="btn-shine" />
        <span className="btn-text-holo">Launch Your Dashboard</span>
        <span className="btn-arrow-holo">→</span>
      </a>
      <p className="cta-subtext-glow">
        Start tracking your health journey with AI-powered insights
      </p>
    </div>
  );
};

