import React from 'react';
import { StatItem } from '../../../data';

export interface HeroStatCardProps extends StatItem {
  className?: string;
}

export const HeroStatCard: React.FC<HeroStatCardProps> = ({
  value,
  label,
  className = '',
}) => {
  return (
    <div className={`journeys-hero__stat-card ${className}`.trim()}>
      <span className="journeys-hero__stat-num">{value}</span>
      <span className="journeys-hero__stat-label">{label}</span>
    </div>
  );
};

export default HeroStatCard;

