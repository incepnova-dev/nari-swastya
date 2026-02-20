import React from 'react';
import { bottomLinks, copyrightText, FooterLink } from './footerData';

export interface FooterBottomProps {
  links?: FooterLink[];
  copyright?: string;
  className?: string;
}

export const FooterBottom: React.FC<FooterBottomProps> = ({
  links = bottomLinks,
  copyright = copyrightText,
  className = '',
}) => {
  return (
    <div className={`footer-bottom ${className}`.trim()}>
      <div className="footer-bottom-inner">
        <nav className="footer-links" aria-label="Legal and support links">
          {links.map((link, index) => (
            <a key={index} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        <p className="footer-copy">{copyright}</p>
      </div>
    </div>
  );
};

export default FooterBottom;
