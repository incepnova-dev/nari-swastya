import React, { forwardRef } from 'react';
import { Hamburger } from './Hamburger';
import { ProfileButton, ProfileButtonProps } from './ProfileButton';
import { LanguageSelector } from '../LanguageSelector';

export interface NavActionsProps {
  isMobileOpen: boolean;
  onToggleMobile: () => void;
  showLanguageSelector?: boolean;
  showProfile?: boolean;
  profileProps?: ProfileButtonProps;
  className?: string;
}

export const NavActions = forwardRef<HTMLButtonElement, NavActionsProps>(
  (
    {
      isMobileOpen,
      onToggleMobile,
      showLanguageSelector = true,
      showProfile = true,
      profileProps,
      className = '',
    },
    ref
  ) => {
    return (
      <div className={`nav-actions ${className}`.trim()}>
        {showLanguageSelector && <LanguageSelector />}
        {showProfile && <ProfileButton {...profileProps} />}
        <Hamburger ref={ref} isOpen={isMobileOpen} onClick={onToggleMobile} />
      </div>
    );
  }
);

NavActions.displayName = 'NavActions';

export default NavActions;
