import React from 'react';

// =========================================
// TRACKING HUB HEADER
// (from PersonalTrackingHubSection)
// =========================================

export const TrackingHubHeader: React.FC = () => {
  return (
    <div className="section-header-stellar">
      <div className="cosmic-badge">
        <span className="badge-orbit" />
        <span className="badge-orbit" />
        <span className="badge-orbit" />
        <span className="badge-text-stellar">✨ Your Personal Command Center</span>
      </div>
      <h2 className="title-holographic">
        Track Your Health Journey
        <span className="title-gradient-flow">Like Never Before</span>
      </h2>
      <p className="subtitle-glow">
        Experience the future of health tracking with our revolutionary dashboard that adapts to your
        unique journey
      </p>
    </div>
  );
};

