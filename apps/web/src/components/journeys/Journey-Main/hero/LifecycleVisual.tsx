import React, { forwardRef } from 'react';

export interface LifecycleVisualProps {
  className?: string;
}

export const LifecycleVisual = forwardRef<HTMLCanvasElement, LifecycleVisualProps>(
  ({ className = '' }, ref) => {
    return (
      <div className={`journeys-hero__visual ${className}`.trim()}>
        <div className="journeys-hero__lifecycle-wrap">
          <canvas ref={ref} className="journeys-hero__lifecycle-canvas" />
        </div>
      </div>
    );
  }
);

LifecycleVisual.displayName = 'LifecycleVisual';

export default LifecycleVisual;

