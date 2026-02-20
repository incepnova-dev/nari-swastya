import React from 'react';
import { flowSteps } from '../../data';

// =========================================
// HOW IT WORKS
// (from services.html)
// =========================================

export const HowItWorksSection: React.FC = () => {
  return (
    <section className="how-it-works-section">
      <div className="container">
        <h2>
          <span className="section-icon">💝</span>
          <span>
            How <span className="gradient-text">NARI SWASTHA</span> Works With You
          </span>
        </h2>
        <p>Your data stays private, your choices stay yours.</p>
        <div className="how-grid">
          {flowSteps.map((step) => (
            <div key={step.id} className="flow-card">
              <div className="flow-num">{step.number}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

