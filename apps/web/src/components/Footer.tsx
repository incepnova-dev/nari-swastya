import React from 'react';

// Root footer component, reconstructed from apps/web/html/footer.html
export const Footer: React.FC = () => {
  return (
    <footer className="ns-footer" aria-label="Site footer">
      <FooterMain />
      <FooterMeta />
      <FooterBottom />
    </footer>
  );
};

// Top 4‑column grid
const FooterMain: React.FC = () => (
  <div className="footer-main">
    <FooterAbout />
    <FooterEvidenceSources />
    <FooterDisclaimer />
    <FooterEmergency />
  </div>
);

const FooterAbout: React.FC = () => (
  <div className="footer-col">
    <h3>About This Guide</h3>
    <p>
      Comprehensive, evidence-based information synthesized from WHO, ACOG, ICMR guidelines, peer-reviewed research,
      and NFHS-5 data (724,115+ women).
    </p>
  </div>
);

const FooterEvidenceSources: React.FC = () => (
  <div className="footer-col">
    <h3>Evidence Sources</h3>
    <ul>
      <li>World Health Organization</li>
      <li>ACOG Guidelines</li>
      <li>ICMR India</li>
      <li>NFHS-5 Survey</li>
    </ul>
  </div>
);

const FooterDisclaimer: React.FC = () => (
  <div className="footer-col">
    <h3>Important Disclaimer</h3>
    <p className="disclaimer-text">
      This provides general information only. Each pregnancy is unique. Medical decisions should be made with qualified
      healthcare providers who can assess your individual circumstances.
    </p>
  </div>
);

const FooterEmergency: React.FC = () => (
  <div className="footer-col">
    <h3>Emergency</h3>
    <p className="emergency-alert">
      Heavy bleeding, fever, chest pain, or severe abdominal pain require immediate medical attention.{' '}
      <strong>Don&apos;t delay.</strong>
    </p>
  </div>
);

// Meta / last updated area
const FooterMeta: React.FC = () => (
  <div className="footer-meta">
    <p className="meta-line">
      Last Updated: February 2026
      <span className="sep">|</span>
      Evidence-Based
      <span className="sep">•</span>
      Comprehensive
      <span className="sep">•</span>
      Empowering
    </p>
    <p className="tagline">
      <span className="heart">🩷</span>
      Dedicated to empowering every mother
    </p>
  </div>
);

// Bottom bar
const FooterBottom: React.FC = () => (
  <div className="footer-bottom">
    <div className="footer-bottom-inner">
      <nav className="footer-links" aria-label="Legal and support links">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Service</a>
        <a href="#">Contact Support</a>
      </nav>
      <p className="footer-copy">&copy; 2026 Nari Shakti. Empowering Women&apos;s Health.</p>
    </div>
  </div>
);

