import React from 'react';
import { HeroStatCard } from './HeroStatCard';
import { StatItem } from '../../../../data';

export interface HeroStatsProps {
  stats: StatItem[];
  className?: string;
}

export const HeroStats: React.FC<HeroStatsProps> = ({ stats, className = '' }) => {
  return (
    <div className={`journeys-hero__stats ${className}`.trim()}>
      {stats.map((stat, index) => (
        <HeroStatCard key={index} value={stat.value} label={stat.label} />
      ))}
    </div>
  );
};

export default HeroStats;

