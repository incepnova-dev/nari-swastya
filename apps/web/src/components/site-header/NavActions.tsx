import React from 'react';
import { LanguageSelector } from '../LanguageSelector';

export interface NavActionsProps {
  isMobileOpen: boolean;
  onToggleMobile: () => void;
  hamburgerRef: React.RefObject<HTMLButtonElement>;
}

export const NavActions: React.FC<NavActionsProps> = ({ isMobileOpen, onToggleMobile, hamburgerRef }) => (
  <div className="nav-actions">
    <LanguageSelector />
    {/* Profile avatar */}
    <button type="button" className="nav-profile" aria-label="Profile">
      <span className="nav-profile-initials">AB</span>
    </button>
    <button
      ref={hamburgerRef}
      className={isMobileOpen ? 'hamburger open' : 'hamburger'}
      type="button"
      aria-label="Menu"
      aria-expanded={isMobileOpen}
      onClick={onToggleMobile}
    >
      <span />
      <span />
      <span />
    </button>
  </div>
);


