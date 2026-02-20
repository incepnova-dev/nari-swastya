import React, { useEffect, useRef } from 'react';
import { initNucleusCanvas } from '../../scripts/welcome';
import { nucleusBadges } from './welcomeData';

/**
 * NucleusVisual
 * =============
 * Right side: Nucleus Canvas with floating badges
 * Adapted from Welcome.html:1548-1557
 */

export const NucleusVisual: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    let cleanup: (() => void) | undefined;

    const frameId = requestAnimationFrame(() => {
      if (!canvasRef.current) return;
      cleanup = initNucleusCanvas(canvasRef.current);
    });

    return () => {
      cancelAnimationFrame(frameId);
      if (cleanup) cleanup();
    };
  }, []);

  return (
    <div className="sna-nucleus-wrap">
      <canvas id="nucleusCanvas" ref={canvasRef} />
      {nucleusBadges.map((badge, index) => (
        <div key={index} className={`nucleus-badge ${badge.className}`}>
          {badge.emoji} {badge.text}
        </div>
      ))}
    </div>
  );
};

