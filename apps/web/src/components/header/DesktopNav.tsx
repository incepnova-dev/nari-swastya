import React from 'react';
import { NavLink } from './NavLink';
import { NavDropdown } from './NavDropdown';
import {
  journeysDropdownEntries,
  servicesDropdownEntries,
  additionalInfoDropdownEntries,
  simpleNavLinks,
  rightNavLinks,
} from '../../data';

export interface DesktopNavProps {
  className?: string;
}

export const DesktopNav: React.FC<DesktopNavProps> = ({ className = '' }) => {
  return (
    <nav className={`main-nav ${className}`.trim()}>
      {/* Home link */}
      {simpleNavLinks.map((link, index) => (
        <NavLink
          key={index}
          href={link.href}
          label={link.label}
          isActive={link.isActive}
        />
      ))}

      {/* Journeys dropdown */}
      <NavDropdown label="Journeys" entries={journeysDropdownEntries} />

      {/* Services dropdown */}
      <NavDropdown label="Services" entries={servicesDropdownEntries} />

      {/* Stories & About Us */}
      {rightNavLinks.map((link, index) => (
        <NavLink
          key={index}
          href={link.href}
          label={link.label}
          isActive={link.isActive}
        />
      ))}

      {/* Additional Info dropdown */}
      <NavDropdown
        label="Additional Info"
        entries={additionalInfoDropdownEntries}
        minWidth="240px"
      />
    </nav>
  );
};

export default DesktopNav;
