import React, { useEffect, useRef, useState } from 'react';
import logoUrl from '../../assets/logo.svg';
import { LanguageSelector } from '../LanguageSelector';

export const WelcomeHeader: React.FC = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement | null>(null);
  const hamburgerRef = useRef<HTMLButtonElement | null>(null);

  const toggleMobile = () => {
    setIsMobileOpen((open) => !open);
  };

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
    <>
      <header className="welcome-header site-header">
        <div className="nav-container">
          <div className="logo">
            <div className="logo-icon">
              <img src={logoUrl} alt="Nari Swasthya logo" className="logo-svg" />
            </div>
            <div className="logo-text">
              <a href="/">Nari Swasthya</a>
              <span>Women&apos;s Complete Health</span>
            </div>
          </div>

          <nav className="main-nav" aria-label="Main">
            <div className="nav-item">
              <a href="/services" className="nav-link">
                Services
              </a>
            </div>
            <div className="nav-item">
              <a href="/about" className="nav-link">
                About Us
              </a>
            </div>
          </nav>

          <div className="nav-actions">
            <LanguageSelector />
            <a className="btn-nav outline" href="#">
              <i className="fa-regular fa-user" /> Sign In
            </a>
            <a className="btn-nav primary" href="#">
              Get Started
            </a>
            <button
              ref={hamburgerRef}
              className={isMobileOpen ? 'hamburger open' : 'hamburger'}
              type="button"
              aria-label="Menu"
              aria-expanded={isMobileOpen}
              onClick={toggleMobile}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <div ref={mobileMenuRef} className={isMobileOpen ? 'mobile-menu open' : 'mobile-menu'} id="mobileMenu">
        <div className="mm-section">Navigate</div>
        <a href="/services" className="mm-link">
          <i className="fa-solid fa-grid-2" style={{ color: 'var(--deep-pink)', width: 20 }} /> Services
        </a>
        <a href="/about" className="mm-link">
          <i className="fa-solid fa-circle-info" style={{ color: 'var(--deep-pink)', width: 20 }} /> About Us
        </a>
        <div style={{ display: 'flex', gap: '.75rem', marginTop: '1rem', padding: '.5rem' }}>
          <a href="#" className="btn-nav outline" style={{ flex: 1, justifyContent: 'center' }}>
            <i className="fa-regular fa-user" /> Sign In
          </a>
          <a href="#" className="btn-nav primary" style={{ flex: 1, justifyContent: 'center' }}>
            Get Started
          </a>
        </div>
      </div>
    </>
  );
};


