import React from 'react';
import { scrollProgressDots } from './welcomeData';

/**
 * ScrollProgressDots
 * -------------------
 * React version of the "SCROLL PROGRESS DOTS" nav from Welcome.html:1287-1296.
 * Currently static; can be wired to scroll/active-section logic later.
 */
export const ScrollProgressDots: React.FC = () => {
  return (
    <nav className="scroll-progress" aria-label="Page sections">
      {scrollProgressDots.map((dot) => (
        <div
          key={dot.id}
          className={`sp-dot ${dot.active ? 'active' : ''}`}
          data-section={dot.section}
          title={dot.title}
        />
      ))}
    </nav>
  );
};


