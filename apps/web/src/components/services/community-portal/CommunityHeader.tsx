import React from 'react';

// =========================================
// COMMUNITY PORTAL HEADER
// (from CommunityPortalSection)
// =========================================

export const CommunityHeader: React.FC = () => {
  return (
    <div className="section-header-stellar">
      <div className="cosmic-badge community-badge">
        <span className="badge-orbit" />
        <span className="badge-orbit" />
        <span className="badge-orbit" />
        <span className="badge-text-stellar">💕 You&apos;re Not Alone</span>
      </div>
      <h2 className="title-holographic">
        Join Our Thriving
        <span className="title-gradient-flow">Community</span>
      </h2>
      <p className="subtitle-glow">
        Connect with thousands of women who understand your journey, share experiences, and support
        each other
      </p>
    </div>
  );
};

