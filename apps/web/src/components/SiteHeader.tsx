import React, { useEffect, useRef, useState } from 'react';
import '../styles/header/site-header.css';
import { initScrollShrink, initDropdownKeyboard } from '../scripts/siteheader';
import { Logo, DesktopNav, NavActions } from './header';

/**
 * SiteHeader
 * ----------
 * Self-contained header component derived from journeys.html (lines 1045–1215).
 * All styling via src/styles/site-header.css — zero inline colour styles.
 * 
 * Refactored into modular sub-components:
 * - Logo: Brand logo with icon and text
 * - DesktopNav: Desktop navigation with dropdowns
 * - NavActions: Sign In, Contact Us buttons and hamburger menu
 */
export const SiteHeader: React.FC = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const hamburgerRef = useRef<HTMLButtonElement | null>(null);

  const toggleMobile = () => setIsMobileOpen((open) => !open);

  // Close mobile menu on outside click or Escape
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (!isMobileOpen) return;
      if (!hamburgerRef.current?.contains(e.target as Node)) {
        setIsMobileOpen(false);
      }
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMobileOpen(false);
    };
    document.addEventListener('click', handleClick);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('click', handleClick);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMobileOpen]);

  // Scroll-shrink shadow + keyboard Escape for CSS dropdowns
  useEffect(() => {
    const cleanupShrink = initScrollShrink();
    const cleanupKeyboard = initDropdownKeyboard();
    return () => {
      cleanupShrink();
      cleanupKeyboard();
    };
  }, []);

  return (
    <header className="site-header">
      <div className="nav-container">
        <Logo />
        <DesktopNav />
        <NavActions
          ref={hamburgerRef}
          isMobileOpen={isMobileOpen}
          onToggleMobile={toggleMobile}
        />
      </div>
    </header>
  );
};

export default SiteHeader;
