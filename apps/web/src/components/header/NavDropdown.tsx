import React from 'react';
import { DropdownItem } from './DropdownItem';
import { DropdownFlyoutItem } from './DropdownFlyoutItem';
import { DropdownEntry } from '../../data';

export interface NavDropdownProps {
  label: string;
  entries: DropdownEntry[];
  minWidth?: string;
  className?: string;
}

export const NavDropdown: React.FC<NavDropdownProps> = ({
  label,
  entries,
  minWidth,
  className = '',
}) => {
  return (
    <div className={`nav-item ${className}`.trim()}>
      <button className="nav-link" aria-haspopup="true">
        {label} <i className="fa-solid fa-chevron-down chevron" />
      </button>
      <div className="nav-dropdown" style={minWidth ? { minWidth } : undefined}>
        {entries.map((entry, index) => {
          switch (entry.type) {
            case 'item':
              return <DropdownItem key={index} {...entry.data} />;
            case 'flyout':
              return <DropdownFlyoutItem key={index} {...entry.data} />;
            case 'separator':
              return <div key={index} className="dd-sep" />;
            case 'section-label':
              return (
                <div key={index} className="dd-section-label">
                  {entry.label}
                </div>
              );
            default:
              return null;
          }
        })}
      </div>
    </div>
  );
};

export default NavDropdown;
