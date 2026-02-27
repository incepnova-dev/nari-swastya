import React from 'react';
import { CTAButtonData } from '../../../../data';

export interface HeroCTAButtonProps extends CTAButtonData {
  className?: string;
}

export const HeroCTAButton: React.FC<HeroCTAButtonProps> = ({
  href,
  label,
  icon,
  variant,
  className = '',
}) => {
  return (
    <a
      href={href}
      className={`journeys-hero__btn journeys-hero__btn--${variant} ${className}`.trim()}
    >
      <i className={icon} /> {label}
    </a>
  );
};

export default HeroCTAButton;

