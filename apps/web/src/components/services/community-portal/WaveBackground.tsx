import React from 'react';

// =========================================
// WAVE BACKGROUND
// (from CommunityPortalSection)
// =========================================

export const WaveBackground: React.FC = () => {
  return (
    <div className="wave-background">
      <svg className="wave-svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path className="wave-path wave-1" d="M0,60 C300,100 900,20 1200,60 L1200,0 L0,0 Z" />
        <path className="wave-path wave-2" d="M0,70 C300,110 900,30 1200,70 L1200,0 L0,0 Z" />
        <path className="wave-path wave-3" d="M0,80 C300,120 900,40 1200,80 L1200,0 L0,0 Z" />
      </svg>
    </div>
  );
};

