import React from 'react';

export interface HeroBadgeProps {
  icon?: string;
  text: string;
  className?: string;
}

export const HeroBadge: React.FC<HeroBadgeProps> = ({ icon, text, className = '' }) => {
  return (
    <div className={`journeys-hero__badge ${className}`.trim()}>
      {icon && <i className={icon} />}
      {text}
    </div>
  );
};

export default HeroBadge;

