import React, { useRef, useEffect } from 'react';
import { initSymptomCheckerParticleCanvas } from '../../scripts/symptom_checker';

const PARTICLE_CANVAS_ID = 'symptomCheckerParticleCanvas';

export const HeroParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const cleanup = initSymptomCheckerParticleCanvas(canvasRef.current);
    return () => cleanup?.();
  }, []);

  return (
    <>
      <div className="hero-constellation-bg">
        <canvas ref={canvasRef} id={PARTICLE_CANVAS_ID} aria-hidden />
        <div className="gradient-morph" />
      </div>
      <div className="constellation-bg" />
    </>
  );
};
