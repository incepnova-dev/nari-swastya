import React from 'react';

// =========================================
// COMMUNITY CENTER PULSE
// (from CommunityPortalSection)
// =========================================

export const CommunityCenterPulse: React.FC = () => {
  return (
    <div className="community-center-pulse">
      <div className="pulse-ring-community ring-1" />
      <div className="pulse-ring-community ring-2" />
      <div className="pulse-ring-community ring-3" />
      <div className="pulse-ring-community ring-4" />
      <div className="community-heart-icon">
        <i className="fa-solid fa-heart" />
        <span className="member-count">12,456</span>
        <span className="member-label">Active Members</span>
      </div>
    </div>
  );
};

