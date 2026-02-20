import {
  HeroBadgeData,
  HeroTitleData,
  StatItem,
  CTAButtonData,
} from './journeysHeroTypes';

/**
 * Default data for the Journeys Hero section
 */

export const defaultBadge: HeroBadgeData = {
  icon: 'fa-solid fa-heart-pulse',
  text: "India's #1 Women's Health Platform",
};

export const defaultTitle: HeroTitleData = {
  line1: 'Every Stage of',
  emphasis: 'Her Journey',
  line3: 'Celebrated',
};

export const defaultSubtitle =
  'From first period to golden years — personalized care, evidence-based guidance, and a community that truly understands every chapter of your life.';

export const defaultStats: StatItem[] = [
  { value: '2.4M+', label: 'Women Supported' },
  { value: '28', label: 'Health Journeys' },
  { value: '98%', label: 'Satisfaction Rate' },
];

export const defaultCTAButtons: CTAButtonData[] = [
  {
    href: '/conceiving',
    label: 'Start My Journey',
    icon: 'fa-solid fa-compass',
    variant: 'primary',
  },
  {
    href: '/symptom-checker',
    label: 'Check Symptoms',
    icon: 'fa-solid fa-stethoscope',
    variant: 'secondary',
  },
];
