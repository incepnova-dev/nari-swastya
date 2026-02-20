import React from 'react';
import nariLogoSvg from '../../assets/icons/nari-logo.svg';

export interface LogoProps {
  href?: string;
  title?: string;
  subtitle?: string;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({
  href = '/',
  title = 'Nari Swasthya',
  subtitle = "Women's Complete Health",
  className = '',
}) => {
  return (
    <div className={`logo ${className}`.trim()}>
      <div className="logo-icon">
        <img src={nariLogoSvg} alt="" className="logo-svg" />
      </div>
      <div className="logo-text">
        <a href={href}>{title}</a>
        <span>{subtitle}</span>
      </div>
    </div>
  );
};

export default Logo;
