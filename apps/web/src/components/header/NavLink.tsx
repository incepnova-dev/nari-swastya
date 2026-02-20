import React from 'react';

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
      <a href={href} className={`nav-link${isActive ? ' active' : ''}`}>
        {label}
      </a>
    </div>
  );
};

export default NavLink;
