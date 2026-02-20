import React from 'react';

// =========================================
// GOVERNMENT SCHEMES BANNER
// (from services.html)
// =========================================
export const GovernmentSchemesSection: React.FC = () => {
  return (
    <section className="section">
      <div className="schemes-banner">
        <h3>💰 Unlock Government Benefits & Financial Support</h3>
        <p>
          From Janani Suraksha Yojana to maternity leave claims—find every scheme you&apos;re
          eligible for in one place.
        </p>
        <a href="#" className="schemes-btn">
          Explore All Schemes
          <i className="fa-solid fa-external-link-alt" />
        </a>
      </div>
    </section>
  );
};

