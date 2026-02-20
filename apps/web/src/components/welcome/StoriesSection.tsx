import React from 'react';
import { StoryCards } from './StoryCards';
import { NucleusVisual } from './NucleusVisual';

/**
 * StoriesSection
 * ==============
 * SECTION NEW-A: LIVING STORIES CONSTELLATION
 * React version of Welcome.html:1473-1562
 * Stories woven from science & survival with animated DNA nucleus
 */
export const StoriesSection: React.FC = () => {
  return (
    <section id="sna" className="sna-section">
      <div className="section-inner">
        <div className="sna-layout">
          {/* Left: Story Cards that materialize */}
          <div>
            <div className="section-label reveal">
              <i className="fa-solid fa-dna" /> Research &amp; Recovery
            </div>
            <h2 className="section-heading reveal reveal-delay-1">
              Stories woven from
              <br />
              <span className="em">science &amp; survival.</span>
            </h2>
            <p className="section-sub reveal reveal-delay-2" style={{ marginBottom: '2rem' }}>
              From breakthrough clinical studies to stage-3 cancer recoveries — every story on Nari Swasthya is a thread
              in a living tapestry of women&apos;s resilience.
            </p>

            <StoryCards />
          </div>

          {/* Right: Nucleus Canvas with floating badges */}
          <NucleusVisual />
        </div>
      </div>
    </section>
  );
};

