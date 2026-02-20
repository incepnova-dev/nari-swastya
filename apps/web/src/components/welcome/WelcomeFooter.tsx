import React from 'react';

/**
 * WelcomeFooter
 * =============
 * Minimal dark footer for Welcome page
 * React version of Welcome.html:1848-1864
 */

interface FooterLink {
  href: string;
  label: string;
}

const footerLinks: FooterLink[] = [
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About Us' },
  { href: '/journeys', label: 'Journeys' },
  { href: '/antenatal-care', label: 'Antenatal Care' },
  { href: '/emergency-guide', label: 'Emergency Guide' },
  { href: '/stories', label: 'Stories' },
  { href: '/login', label: 'Sign In' },
];

export const WelcomeFooter: React.FC = () => {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-logo">Nari Swasthya</div>
        <div className="footer-tagline">Every Woman. Every Stage. Every Story.</div>
        <div className="footer-links">
          {footerLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>
        <div className="footer-copy">© 2026 Nari Swasthya. Built with love for every woman in India.</div>
      </div>
    </footer>
  );
};

