import React from 'react';
import { Link } from 'react-router-dom';

export interface NavLinkProps {
  href: string;
  label: string;
  isActive?: boolean;
  className?: string;
}

export const NavLink: React.FC<NavLinkProps> = ({
  href,
  label,
  isActive = false,
  className = '',
}) => {
  return (
    <div className={`nav-item ${className}`.trim()}>
      <Link to={href} className={`nav-link${isActive ? ' active' : ''}`}>
        {label}
      </Link>
    </div>
  );
};

export default NavLink;
