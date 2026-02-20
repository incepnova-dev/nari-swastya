import React from 'react';

/**
 * JourneyCTA
 * ----------
 * Mid-section CTA for starting the journey
 */
export const JourneyCTA: React.FC = () => {
  return (
    <div className="s3-midcta reveal">
      <button type="button" className="btn-hero primary">
        <i className="fa-solid fa-sparkles" /> Start Your Journey Today — It&apos;s Free
      </button>
      <div className="s3-midcta-text">
        No credit card. No judgement. Just support.
      </div>
    </div>
  );
};

