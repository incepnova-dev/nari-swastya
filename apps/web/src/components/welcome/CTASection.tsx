import React, { useEffect, useRef } from 'react';
import { TestimonialGrid } from './cta/TestimonialGrid';
import { GrandCTA } from './cta/GrandCTA';
import { GalaxyCanvas } from './cta/GalaxyCanvas';
import { initGalaxyCanvas } from '../../scripts/welcome';

/**
 * CTASection
 * ==========
 * SECTION 4: CTA — Your Story Starts Tonight
 * React version of Welcome.html:1785-1846
 */
export const CTASection: React.FC = () => {
  const galaxyCanvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!galaxyCanvasRef.current) return;

    let cleanup: (() => void) | undefined;
    const frameId = requestAnimationFrame(() => {
      if (!galaxyCanvasRef.current) return;
      cleanup = initGalaxyCanvas(galaxyCanvasRef.current);
    });

    return () => {
      cancelAnimationFrame(frameId);
      if (cleanup) cleanup();
    };
  }, []);

  return (
    <section id="s4" className="s4-section">
      <GalaxyCanvas canvasRef={galaxyCanvasRef} />
      <div className="section-inner s4-inner">
        <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto' }}>
          <div className="section-label reveal">
            <i className="fa-solid fa-stars" /> Real Voices
          </div>
          <h2 className="section-heading reveal reveal-delay-1">
            They were scared too.
            <br />
            <span className="em">Then everything changed.</span>
          </h2>
          <p className="section-sub reveal reveal-delay-2" style={{ margin: '0 auto' }}>
            These are not testimonials. These are turning points. Women who found clarity, community, and courage — in
            the darkest hours of their journey.
          </p>
        </div>

        <TestimonialGrid />
        <GrandCTA />
      </div>
    </section>
  );
};

