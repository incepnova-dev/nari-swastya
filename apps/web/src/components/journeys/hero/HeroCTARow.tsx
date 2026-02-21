import React from 'react';
import { HeroCTAButton } from './HeroCTAButton';
import { CTAButtonData } from '../../../data';

export interface HeroCTARowProps {
  buttons: CTAButtonData[];
  className?: string;
}

export const HeroCTARow: React.FC<HeroCTARowProps> = ({ buttons, className = '' }) => {
  return (
    <div className={`journeys-hero__cta-row ${className}`.trim()}>
      {buttons.map((btn, index) => (
        <HeroCTAButton
          key={index}
          href={btn.href}
          label={btn.label}
          icon={btn.icon}
          variant={btn.variant}
        />
      ))}
    </div>
  );
};

export default HeroCTARow;

