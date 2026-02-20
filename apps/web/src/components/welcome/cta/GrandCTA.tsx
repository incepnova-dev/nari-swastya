import React from 'react';
import { useNavigate } from 'react-router-dom';

/**
 * GrandCTA
 * --------
 * Final call-to-action section with buttons
 */
export const GrandCTA: React.FC = () => {
  const navigate = useNavigate();

  const handleCreateAccount = () => {
    // Navigate to login/signup page
    navigate('/login');
  };

  const handleExplorePlatform = () => {
    // Navigate to journeys page
    navigate('/journeys');
  };

  return (
    <div className="grand-cta reveal">
      <h2>
        Tonight could be the night
        <br />
        you stop searching alone. <span className="em">Join us.</span>
      </h2>
      <p>
        Your account takes 60 seconds. Your journey takes a lifetime. Let&apos;s walk it together — with evidence-based
        care, a community of millions, and tools built for every woman in India.
      </p>
      <div className="grand-cta-btns">
        <button type="button" className="btn-grand-primary" onClick={handleCreateAccount}>
          <i className="fa-solid fa-heart" /> Create My Account — Free
        </button>
        <button type="button" className="btn-grand-secondary" onClick={handleExplorePlatform}>
          <i className="fa-solid fa-book-open" /> Explore the Platform First
        </button>
      </div>
      <div className="grand-cta-micro">
        <i className="fa-solid fa-lock" /> Private &amp; secure · No ads · No data selling · Ever.
      </div>
    </div>
  );
};

