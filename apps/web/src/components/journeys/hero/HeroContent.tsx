import React from 'react';
import { HeroBadge, HeroBadgeProps } from './HeroBadge';
import { HeroTitle, HeroTitleProps } from './HeroTitle';
import { HeroStats } from './HeroStats';
import { HeroCTARow } from './HeroCTARow';
import { StatItem, CTAButtonData } from '../../../data';

export interface HeroContentProps {
  badge: HeroBadgeProps;
  title: Omit<HeroTitleProps, 'className'>;
  subtitle: string;
  stats: StatItem[];
  ctaButtons: CTAButtonData[];
  className?: string;
}

export const HeroContent: React.FC<HeroContentProps> = ({
  badge,
  title,
  subtitle,
  stats,
  ctaButtons,
  className = '',
}) => {
  return (
    <div className={`journeys-hero__content ${className}`.trim()}>
      <HeroBadge icon={badge.icon} text={badge.text} />

      <HeroTitle
        line1={title.line1}
        emphasis={title.emphasis}
        line3={title.line3}
      />

      <p className="journeys-hero__subtitle">{subtitle}</p>

      <HeroStats stats={stats} />

      <HeroCTARow buttons={ctaButtons} />
    </div>
  );
};

export default HeroContent;

