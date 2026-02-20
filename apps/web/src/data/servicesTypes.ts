/**
 * Services page type definitions
 * Shared types for services components and data
 */

export type StageKey = 'all' | 'planning' | 'pregnancy' | 'postpartum' | 'menopause' | 'wellness';

export interface StageFilter {
  id: StageKey;
  label: string;
}

export interface PlanningService {
  id: string;
  emoji: string;
  title: string;
  description: string;
  badge: string;
  stage: Exclude<StageKey, 'all'>;
}

export interface TimelineItem {
  id: string;
  icon: string;
  title: string;
  description: string;
  links: string[];
}

export interface CarouselItem {
  id: string;
  emoji: string;
  title: string;
  description: string;
  tag: string;
}

export interface WellnessAccordionLink {
  id: string;
  label: string;
  iconClass?: string;
}

export interface WellnessAccordionItem {
  id: string;
  icon: string;
  title: string;
  body: string;
  links: WellnessAccordionLink[];
}

export interface MenopauseSymptom {
  id: string;
  icon: string;
  label: string;
}

export interface MenopausePillar {
  id: string;
  number: string;
  title: string;
  description: string;
}

export interface FlowStep {
  id: string;
  number: number;
  title: string;
  description: string;
}

export interface GrowthStepPetal {
  id: string;
  iconClass: string;
  label: string;
  href?: string;
}

export interface GrowthStep {
  id: string;
  icon: string;
  title: string;
  petals: GrowthStepPetal[];
}

export interface SeverityCard {
  id: string;
  type: 'mild' | 'moderate' | 'severe' | 'critical';
  icon: string;
  label: string;
  description: string;
  examples: string;
}

export interface TrustIndicator {
  id: string;
  icon: string;
  label: string;
  value: string;
}

export interface FeatureOrb {
  id: string;
  orbClass: string;
  icon: string;
  label: string;
}

export interface TrackingBenefit {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface CommunityFloatCard {
  id: string;
  cardClass: string;
  icon: string;
  badge: string;
  badgeClass?: string;
  title: string;
  memberCount: string;
}

export interface CommunityFeature {
  id: string;
  icon: string;
  title: string;
  description: string;
  glowClass: string;
}

export interface TickerItem {
  id: string;
  text: string;
}
