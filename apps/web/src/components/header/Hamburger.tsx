import React, { forwardRef } from 'react';

export interface HamburgerProps {
  isOpen: boolean;
  onClick: () => void;
  className?: string;
}

export const Hamburger = forwardRef<HTMLButtonElement, HamburgerProps>(
  ({ isOpen, onClick, className = '' }, ref) => {
    return (
      <button
        ref={ref}
        className={`hamburger${isOpen ? ' open' : ''} ${className}`.trim()}
        id="hamburgerBtn"
        aria-label="Toggle mobile menu"
        aria-expanded={isOpen}
        onClick={onClick}
      >
        <span />
        <span />
        <span />
      </button>
    );
  }
);

Hamburger.displayName = 'Hamburger';

export default Hamburger;
