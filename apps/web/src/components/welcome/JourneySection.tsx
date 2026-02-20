import React, { useEffect, useRef } from 'react';
import { MilestoneTimeline } from './journey/MilestoneTimeline';
import { JourneyCTA } from './journey/JourneyCTA';

/**
 * JourneySection
 * ==============
 * SECTION 3: JOURNEY — Her 40-Week Thread
 * React version of Welcome.html:1696-1784
 */
export const JourneySection: React.FC = () => {
  const threadGlowRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Thread glow animation when section scrolls into view
    const s3 = document.getElementById('s3');
    const glow = threadGlowRef.current;
    if (!s3 || !glow) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          glow.classList.add('drawn');
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(s3);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id="s3" className="s3-section">
      <div className="section-inner">
        <div style={{ textAlign: 'center' }}>
          <div className="section-label reveal">
            <i className="fa-solid fa-route" /> Her Complete Journey
          </div>
          <h2
            className="section-heading reveal reveal-delay-1"
            style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 0.75rem' }}
          >
            Every stage she faces.
            <br />
            <span className="em">We face it together.</span>
          </h2>
          <p
            className="section-sub reveal reveal-delay-2"
            style={{ textAlign: 'center', margin: '0 auto 1rem' }}
          >
            From the quiet hope of conceiving to the raw love of new motherhood — one platform, one thread connecting
            her entire life.
          </p>
        </div>

        <MilestoneTimeline threadGlowRef={threadGlowRef} />
        <JourneyCTA />
      </div>
    </section>
  );
};

