/**
 * Journeys Hero type definitions
 * Shared types for journeys hero components and data
 */

export interface HeroBadgeData {
  icon?: string;
  text: string;
}

export interface HeroTitleData {
  line1: string;
  emphasis: string;
  line3: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface CTAButtonData {
  href: string;
  label: string;
  icon: string;
  variant: 'primary' | 'secondary';
}
