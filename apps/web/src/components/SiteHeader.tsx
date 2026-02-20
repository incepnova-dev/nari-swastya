import React, { useEffect, useRef, useState } from 'react';
import { Logo } from './site-header/Logo';
import { DesktopNav } from './site-header/DesktopNav';
import { NavActions } from './site-header/NavActions';
import { MobileMenu } from './site-header/MobileMenu';

/**
 * SiteHeader
 * ----------
 * Header component based on the Journeys HTML header.
 * Includes desktop nav, dropdowns (CSS‑driven), and a mobile menu with hamburger animation.
 */
export const SiteHeader: React.FC = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement | null>(null);
  const hamburgerRef = useRef<HTMLButtonElement | null>(null);

  const toggleMobile = () => {
    setIsMobileOpen((open) => !open);
  };

  // Close mobile menu when clicking outside or pressing Escape
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (!isMobileOpen) return;
      const menu = mobileMenuRef.current;
      const btn = hamburgerRef.current;
      if (!menu || !btn) return;
      const target = event.target as Node;
      if (!menu.contains(target) && !btn.contains(target)) {
        setIsMobileOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMobileOpen(false);
      }
    };

    document.addEventListener('click', handleClick);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('click', handleClick);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMobileOpen]);

  return (
    <header className="site-header">
      <div className="nav-container">
        <Logo />
        <DesktopNav />
        <NavActions isMobileOpen={isMobileOpen} onToggleMobile={toggleMobile} hamburgerRef={hamburgerRef} />
      </div>
      <MobileMenu isOpen={isMobileOpen} ref={mobileMenuRef} />
    </header>
  );
};