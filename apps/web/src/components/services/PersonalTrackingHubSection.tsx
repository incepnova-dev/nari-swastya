import React, { useEffect, useRef } from 'react';
import { initTrackingParticles } from '../../scripts/services';
import { TrackingHubHeader } from './tracking-hub/TrackingHubHeader';
import { DashboardPreview3D } from './tracking-hub/DashboardPreview3D';
import { FeatureOrbs } from './tracking-hub/FeatureOrbs';
import { TrackingHubCTA } from './tracking-hub/TrackingHubCTA';
import { TrackingBenefitsGrid } from './tracking-hub/TrackingBenefitsGrid';

// =========================================
// PERSONAL TRACKING HUB
// (from services.html)
// =========================================

export const PersonalTrackingHubSection: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    const cleanup = initTrackingParticles(canvasRef.current);
    return cleanup;
  }, []);

  return (
    <section className="tracking-hub-section">
      <canvas ref={canvasRef} id="trackingParticleCanvas" className="tracking-particle-bg" />

      <div className="container">
        <TrackingHubHeader />

        <div className="tracking-main-card">
          <DashboardPreview3D />
          <FeatureOrbs />
          <TrackingHubCTA />
        </div>

        <TrackingBenefitsGrid />
      </div>
    </section>
  );
};

