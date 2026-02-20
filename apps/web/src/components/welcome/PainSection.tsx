import React from 'react';
import { PainBlobScene } from './PainBlobScene';
import { PainCards } from './PainCards';

export const PainSection: React.FC = () => {
  return (
    <section id="s1" className="s1-section">
      <div className="section-inner">
        <div className="s1-grid">
          {/* Left: morphing anxiety blob + floating labels */}
          <div className="reveal-left">
            <PainBlobScene />
          </div>

          {/* Right: pain cards */}
          <div>
            <div className="section-label">
              <i className="fa-solid fa-heart-crack" /> The Real Pain
            </div>
            <h2 className="section-heading reveal">
              Every woman has searched
              <br />
              in silence. <span className="em">You shouldn&apos;t have to.</span>
            </h2>
            <p className="section-sub reveal reveal-delay-1">
              Millions of women navigate pregnancy, fertility loss, and maternal anxiety completely alone — armed only
              with unreliable search results at midnight.
            </p>

            <PainCards />
          </div>
        </div>
      </div>
    </section>
  );
};


