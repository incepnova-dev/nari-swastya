/**
 * Welcome page type definitions
 * Shared types for welcome components and data
 */

// Story Cards Section
export interface StoryCardData {
  tag: 'research' | 'cancer' | 'recovery' | 'peer';
  tagIcon: string;
  tagLabel: string;
  title: string;
  description: string;
  avatar: string;
  authorName: string;
  authorSub: string;
  transitionDelay: string;
}

// Pain Cards Section
export interface PainCardData {
  id: string;
  icon: string;
  iconBg: string;
  iconColor: string;
  title: string;
  body: string;
  quote: string;
  delay: string;
}

// Nucleus Visual Section
export interface NucleusBadge {
  emoji: string;
  text: string;
  className: string;
}

// Hero Section
export interface HeroBadge {
  icon: string;
  text: string;
}

export interface HeroTitle {
  line1: string;
  line2: string;
  emphasis: string;
  line3: string;
}

export interface HeroSubtitle {
  text: string;
}

export interface HeroCTA {
  id: string;
  type: 'primary' | 'secondary';
  icon: string;
  label: string;
}

export interface HeroTrust {
  avatars: string[];
  text: string;
  highlight: string;
  suffix: string;
}

// Hero Visual Section
export interface EmotionWord {
  id: string;
  className: string;
  icon?: string;
  iconColor?: string;
  text: string;
}

export interface HeroCore {
  icon: string;
  line1: string;
  line2: string;
}

// Journey Section
export interface Milestone {
  id: string;
  week: string;
  title: string;
  description: string;
  statIcon: string;
  statText: string;
  nodeIcon: string;
  animationDelay: string;
}

// CTA Section
export interface Testimonial {
  id: string;
  avatar: string;
  avatarAnimationDelay?: string;
  stars: string;
  text: string;
  name: string;
  role: string;
  transitionDelay?: string;
}

// Scroll Progress Dots
export interface ScrollProgressDot {
  id: string;
  section: string;
  title: string;
  active?: boolean;
}
