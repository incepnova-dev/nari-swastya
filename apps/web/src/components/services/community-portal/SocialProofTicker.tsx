import React from 'react';
import { tickerItems } from '../../../data';

// =========================================
// SOCIAL PROOF TICKER
// (from CommunityPortalSection)
// =========================================

export const SocialProofTicker: React.FC = () => {
  return (
    <div className="social-proof-ticker">
      <div className="ticker-content">
        {[...tickerItems, ...tickerItems].map((item, index) => (
          <span key={`${item.id}-${index}`} className="ticker-item">
            {item.text}
          </span>
        ))}
      </div>
    </div>
  );
};

