import React from 'react';
import { severityCards, trustIndicators } from './servicesData';

// =========================================
// SYMPTOM DETECTION CTA SECTION
// (from services.html)
// =========================================

export const SymptomDetectionCTASection: React.FC = () => {
  return (
    <section className="symptom-cta-section">
      <div className="symptom-cta-container">
        <div className="symptom-cta-eyebrow">
          <span className="pulse-dot" />
          Early Detection Saves Lives
        </div>

        <h2 className="symptom-cta-title">
          <span>
            Why <span className="gradient-text">Symptom Detection</span> Matters
          </span>
        </h2>

        <p className="symptom-cta-description">
          Women&apos;s health conditions often present with subtle, easily dismissed symptoms.
          From hormonal imbalances to reproductive health issues, early identification can mean the
          difference between simple management and complex treatment. Our intelligent symptom checker
          helps you understand what your body is telling you.
        </p>

        {/* Severity Level Cards */}
        <div className="severity-grid">
          {severityCards.map((card) => (
            <div key={card.id} className={`severity-card ${card.type}`}>
              <span className="severity-icon">{card.icon}</span>
              <h3 className="severity-label">{card.label}</h3>
              <p className="severity-description">{card.description}</p>
              <div className="severity-examples">{card.examples}</div>
            </div>
          ))}
        </div>

        {/* Main CTA Button */}
        <div className="cta-button-container">
          <a href="#" className="btn-symptom-checker">
            <span className="icon">🔍</span>
            <span>Check Your Symptoms Now</span>
            <span className="icon">→</span>
          </a>

          <p className="cta-subtext">
            <strong>Free, Private, and Evidence-Based</strong> — Get personalized insights in under
            3 minutes
          </p>
        </div>

        {/* Trust Indicators */}
        <div className="trust-indicators">
          {trustIndicators.map((indicator) => (
            <div key={indicator.id} className="trust-item">
              <span className="trust-icon">{indicator.icon}</span>
              <span className="trust-label">{indicator.label}</span>
              <span className="trust-value">{indicator.value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

