import React, { forwardRef } from 'react';

export interface HeroBackgroundsProps {
  particleCanvasRef: React.RefObject<HTMLCanvasElement>;
  petalLayerRef: React.RefObject<HTMLDivElement>;
}

export const HeroBackgrounds = forwardRef<HTMLDivElement, Omit<HeroBackgroundsProps, 'ref'>>(
  ({ particleCanvasRef, petalLayerRef }, _ref) => {
    return (
      <>
        {/* Particle Background */}
        <canvas
          ref={particleCanvasRef}
          className="journeys-hero__particle-canvas"
        />

        {/* Petal Layer */}
        <div ref={petalLayerRef} className="journeys-hero__petal-layer" />

        {/* Gradient Morph */}
        <div className="journeys-hero__gradient-morph" />
      </>
    );
  }
);

HeroBackgrounds.displayName = 'HeroBackgrounds';

export default HeroBackgrounds;

