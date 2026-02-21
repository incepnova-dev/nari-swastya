/**
 * Data and copy for Symptom Checker hero section
 */

export const HERO_BADGE_LABEL = "WOMEN'S HEALTH KNOWLEDGE HUB";

export const HERO_TITLE = {
  line1: 'Understanding',
  line2: 'Disease Symptoms',
} as const;

export const HERO_SUBTITLE =
  "Discover, learn, and understand 70+ women's health conditions with interactive " +
  'symptom progression, AI-powered detection, and personalized self-care guidance.';

export const STAT_PILLS = [
  { icon: 'fa-hospital-user', label: '70+ Conditions', outlined: false },
  { icon: 'fa-layer-group', label: '18 Categories', outlined: true },
  { icon: 'fa-microscope', label: 'AI Detection', outlined: false },
] as const;

export const HERO_ACTIONS = [
  { href: '#search-section', icon: 'fa-search', label: 'Search Conditions', primary: true },
  { href: '#symptom-detector', icon: 'fa-microscope', label: 'AI Symptom Detector', primary: false },
] as const;

export const MEDICAL_PARTICLE_ICONS = [
  { icon: 'fa-heartbeat', className: 'particle-1' },
  { icon: 'fa-brain', className: 'particle-2' },
  { icon: 'fa-baby', className: 'particle-3' },
  { icon: 'fa-venus', className: 'particle-4' },
  { icon: 'fa-dna', className: 'particle-5' },
  { icon: 'fa-microscope', className: 'particle-6' },
  { icon: 'fa-pills', className: 'particle-7' },
  { icon: 'fa-syringe', className: 'particle-8' },
] as const;

export const ORBIT_ITEMS = [
  { icon: 'fa-user-md', className: 'orbit-1' },
  { icon: 'fa-hospital', className: 'orbit-2' },
  { icon: 'fa-stethoscope', className: 'orbit-3' },
] as const;

export const HELIX_BASE_COUNT = 6;
