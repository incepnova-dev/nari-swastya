import React from 'react';
import { FooterMain, FooterMeta, FooterBottom } from './footer-sections';

/**
 * Footer
 * ------
 * Site footer component with evidence sources, disclaimer, and legal links.
 * Refactored into modular sub-components in ./footer/
 */
export const Footer: React.FC = () => {
  return (
    <footer className="ns-footer" aria-label="Site footer">
      <FooterMain />
      <FooterMeta />
      <FooterBottom />
    </footer>
  );
};

export default Footer;
