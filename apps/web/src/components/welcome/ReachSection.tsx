import React, { useEffect, useRef } from 'react';
import { initDotMapCanvas, initParticleField } from '../../scripts/welcome';

interface ImpactCounter {
  id: string;
  value: string;
  label: string;
  delayClass?: string;
}

const IMPACT_COUNTERS: ImpactCounter[] = [
  { id: 'platform', value: '2.4M+', label: 'Women on the platform' },
  { id: 'reach', value: '350M', label: 'Women we aim to reach across India', delayClass: 'reveal-delay-1' },
  { id: 'confidence', value: '94%', label: 'Felt more confident in their health decisions', delayClass: 'reveal-delay-2' },
  { id: 'er-visits', value: '72%', label: 'Reduction in unnecessary ER visits', delayClass: 'reveal-delay-3' },
];

/**
 * ReachSection (SECTION 2: Our Impact)
 * React version of Welcome.html:1653-1695
 */
export const ReachSection: React.FC = () => {
  const dotMapRef = useRef<HTMLCanvasElement | null>(null);
  const particleFieldRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const cleanups: Array<() => void> = [];

    if (dotMapRef.current) {
      cleanups.push(initDotMapCanvas(dotMapRef.current));
    }
    if (particleFieldRef.current) {
      cleanups.push(initParticleField(particleFieldRef.current));
    }

    return () => {
      cleanups.forEach((fn) => fn && fn());
    };
  }, []);

  return (
    <section id="s2" className="s2-section">
      <canvas id="dotMapCanvas" ref={dotMapRef} />
      <div className="section-inner s2-inner">
        <div className="s2-layout">
          <div>
            <div className="section-label">
              <i className="fa-solid fa-globe" /> Our Impact
            </div>
            <h2 className="section-heading reveal">
              Every dot is a woman.
              <br />
              <span className="em">Every woman matters.</span>
            </h2>
            <p className="section-sub reveal reveal-delay-1">
              Behind every statistic is a mother, a daughter, a sister. We built Nari Swasthya so no woman becomes a
              number — she becomes a story of strength.
            </p>

            <div className="s2-counters">
              {IMPACT_COUNTERS.map((counter, index) => (
                <div
                  key={counter.id}
                  className={`s2-counter reveal ${counter.delayClass ?? ''}`.trim()}
                >
                  <span className="s2-counter-num">{counter.value}</span>
                  <div className="s2-counter-label">{counter.label}</div>
                </div>
              ))}
            </div>

            <div className="reveal reveal-delay-4" style={{ marginTop: '2.5rem' }}>
              <button type="button" className="btn-hero primary" style={{ display: 'inline-flex' }}>
                <i className="fa-solid fa-heart" /> Be Part of the Movement
              </button>
            </div>
          </div>

          <div className="s2-visual">
            <canvas id="particleFieldCanvas" ref={particleFieldRef} />
          </div>
        </div>
      </div>
    </section>
  );
};

