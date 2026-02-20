import React, { forwardRef } from 'react';
import { Hamburger } from './Hamburger';

export interface ActionButton {
  href: string;
  icon: string;
  label: string;
  variant: 'outline' | 'primary';
}

export interface NavActionsProps {
  buttons?: ActionButton[];
  isMobileOpen: boolean;
  onToggleMobile: () => void;
  className?: string;
}

const defaultButtons: ActionButton[] = [
  { href: 'signin.html', icon: 'fa-regular fa-user', label: 'Sign In', variant: 'outline' },
  { href: 'contact.html', icon: 'fa-solid fa-envelope', label: 'Contact Us', variant: 'primary' },
];

export const NavActions = forwardRef<HTMLButtonElement, NavActionsProps>(
  ({ buttons = defaultButtons, isMobileOpen, onToggleMobile, className = '' }, ref) => {
    return (
      <div className={`nav-actions ${className}`.trim()}>
        {buttons.map((btn, index) => (
          <a key={index} className={`btn-nav ${btn.variant}`} href={btn.href}>
            <i className={btn.icon} /> {btn.label}
          </a>
        ))}
        <Hamburger ref={ref} isOpen={isMobileOpen} onClick={onToggleMobile} />
      </div>
    );
  }
);

NavActions.displayName = 'NavActions';

export default NavActions;
