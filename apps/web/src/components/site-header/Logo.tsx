import React from 'react';
import logoUrl from '../../assets/logo.svg';

export const Logo: React.FC = () => (
  <div className="logo">
    <div className="logo-icon">
      <img src={logoUrl} alt="Nari Swasthya logo" className="logo-svg" />
    </div>
    <div className="logo-text">
      <a href="/">Nari Swasthya</a>
      <span>Women&apos;s Complete Health</span>
    </div>
  </div>
);

