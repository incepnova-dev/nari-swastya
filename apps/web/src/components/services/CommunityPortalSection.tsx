import React from 'react';
import { WaveBackground } from './community-portal/WaveBackground';
import { CommunityHeader } from './community-portal/CommunityHeader';
import { CommunityCenterPulse } from './community-portal/CommunityCenterPulse';
import { FloatingCommunityCards } from './community-portal/FloatingCommunityCards';
import { CommunityPortalCTA } from './community-portal/CommunityPortalCTA';
import { CommunityFeaturesNeon } from './community-portal/CommunityFeaturesNeon';
import { SocialProofTicker } from './community-portal/SocialProofTicker';

// =========================================
// COMMUNITY CONNECTION PORTAL
// (from services.html)
// =========================================

export const CommunityPortalSection: React.FC = () => {
  return (
    <section className="community-portal-section">
      <WaveBackground />

      <div className="container">
        <CommunityHeader />

        {/* Interactive Community Hub */}
        <div className="community-hub-interactive">
          <CommunityCenterPulse />
          <FloatingCommunityCards />
          <CommunityPortalCTA />
        </div>

        <CommunityFeaturesNeon />
        <SocialProofTicker />
      </div>
    </section>
  );
};

