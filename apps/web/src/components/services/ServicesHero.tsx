import React, { useEffect, useRef } from 'react';
import { initHeroParticles } from '../../scripts/services';

// HERO BANNER
// (from services.html)
// <section class="hero-banner">
//   <canvas id="heroParticleCanvas"></canvas>
//   <div class="gradient-morph"></div>
//   <h1>Your Complete <span class="title-emphasis">Health Journey</span></h1>
//   <p>From planning to parenthood, menopause to wellness—we're with you every step of the way.</p>
// </section>

export const ServicesHero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const cleanup = initHeroParticles(canvas);
    return cleanup;
  }, []);

  return (
    <section className="hero-banner">
      <canvas
        id="heroParticleCanvas"
        ref={canvasRef}
        className="hero-particle-canvas"
      />
      <div className="gradient-morph" />
      <div className="hero-banner-content">
        <h1>
          Your Complete <span className="title-emphasis">Health Journey</span>
        </h1>
        <p>From planning to parenthood, menopause to wellness—we&apos;re with you every step of the way.</p>
      </div>
    </section>
  );
};


