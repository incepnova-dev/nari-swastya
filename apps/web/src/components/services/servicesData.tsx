// Shared types and data for the Services page
// Source: services.html content

export type StageKey = 'all' | 'planning' | 'pregnancy' | 'postpartum' | 'menopause' | 'wellness';

export interface StageFilter {
  id: StageKey;
  label: string;
}

export const stageFilters: StageFilter[] = [
  { id: 'all', label: 'All Services' },
  { id: 'planning', label: 'Planning' },
  { id: 'pregnancy', label: 'Pregnancy' },
  { id: 'postpartum', label: 'Postpartum' },
  { id: 'menopause', label: 'Menopause' },
  { id: 'wellness', label: 'Wellness' }
];

export interface PlanningService {
  id: string;
  emoji: string;
  title: string;
  description: string;
  badge: string;
  stage: Exclude<StageKey, 'all'>;
}

export const planningServices: PlanningService[] = [
  {
    id: 'fertility-awareness',
    emoji: '🌺',
    title: 'Fertility Awareness',
    description:
      'Understand your fertile window, track ovulation, and optimize your chances of conception with science-backed guidance.',
    badge: 'Conception Support',
    stage: 'planning'
  },
  {
    id: 'conceiving-guide',
    emoji: '💝',
    title: 'Conceiving Guide',
    description:
      'Complete roadmap from trying to conceive to early pregnancy detection. Personalized tips for your journey.',
    badge: 'Planning Tools',
    stage: 'planning'
  },
  {
    id: 'preconception-screening',
    emoji: '🔬',
    title: 'Preconception Screening',
    description: 'Essential health checks, genetic counseling, and lifestyle optimization before you conceive.',
    badge: 'Health Assessment',
    stage: 'planning'
  }
];

export interface TimelineItem {
  id: string;
  icon: string;
  title: string;
  description: string;
  links: string[];
}

export const pregnancyTimeline: TimelineItem[] = [
  {
    id: 'care-plan',
    icon: '📋',
    title: 'Comprehensive Care Plan',
    description: 'Your personalized 9‑month roadmap covering all appointments, tests, and milestones.',
    links: ['Full Journey Map', 'Antenatal Visits']
  },
  {
    id: 'high-risk',
    icon: '🩺',
    title: 'High‑Risk Condition Management',
    description: 'Specialized support for gestational diabetes, preeclampsia, and other complications.',
    links: ['GDM Guide', 'Preeclampsia Education']
  },
  {
    id: 'vaccination',
    icon: '💉',
    title: 'Vaccination & Prevention',
    description: 'Know which vaccines are safe, essential, and recommended during pregnancy and postpartum.',
    links: ['Vaccine Schedule']
  },
  {
    id: 'family-prep',
    icon: '👨‍👩‍👧',
    title: 'Family Preparation Hub',
    description: "Preparing your partner, older kids, and extended family for baby's arrival.",
    links: ['Family Guide']
  },
  {
    id: 'interactive-learning',
    icon: '🎓',
    title: 'Interactive Learning',
    description:
      'Experience labor simulations, understand fetal development stages, and practice breathing techniques.',
    links: ['Try Simulations']
  }
];

export interface CarouselItem {
  id: string;
  emoji: string;
  title: string;
  description: string;
  tag: string;
}

export const postpartumCarousel: CarouselItem[] = [
  {
    id: 'breastfeeding',
    emoji: '🤱',
    title: 'Breastfeeding Journey',
    description: 'Latch techniques, positioning guides, troubleshooting issues, and pumping schedules.',
    tag: 'Feeding Support'
  },
  {
    id: 'milk-supply',
    emoji: '🥛',
    title: 'Milk Supply & Nutrition',
    description: 'Boost your supply naturally with lactation‑friendly recipes and hydration trackers.',
    tag: 'Nutrition Science'
  },
  {
    id: 'mental-health',
    emoji: '💙',
    title: 'Perinatal Mental Health',
    description: 'Recognize baby blues vs. postpartum depression and access therapy or peer support.',
    tag: 'Mental Wellness'
  },
  {
    id: 'otc-medications',
    emoji: '💊',
    title: 'Safe OTC Medications',
    description: 'Understand which medicines and supplements are safe while breastfeeding.',
    tag: 'Med Safety'
  },
  {
    id: 'postpartum-period',
    emoji: '🩸',
    title: 'Postpartum Period Care',
    description: 'Managing lochia, when to expect your first period, and sustainable hygiene products.',
    tag: 'Recovery Basics'
  }
];

// ============================
// Wellness (Ongoing Wellness Accordion)
// ============================

export interface WellnessAccordionLink {
  id: string;
  label: string;
  /** Optional icon class for <i> element, e.g. 'fa-solid fa-shield-heart' */
  iconClass?: string;
}

export interface WellnessAccordionItem {
  id: string;
  icon: string;
  title: string;
  body: string;
  links: WellnessAccordionLink[];
}

export const wellnessAccordionItems: WellnessAccordionItem[] = [
  {
    id: 'chronic-conditions',
    icon: '🩺',
    title: 'Managing Chronic Conditions',
    body:
      'Living with autoimmune disorders, PCOS, endometriosis, or thyroid issues? Get personalized care plans.',
    links: [
      { id: 'autoimmune', label: 'Autoimmune Journey', iconClass: 'fa-solid fa-shield-heart' },
      { id: 'screenings', label: 'Regular Screenings', iconClass: 'fa-solid fa-microscope' }
    ]
  },
  {
    id: 'mental-health',
    icon: '🧘‍♀️',
    title: 'Mental Health & Emotional Wellbeing',
    body:
      'Anxiety, depression, grief, or stress—access therapy, meditation, and peer communities.',
    links: [
      { id: 'mental-hub', label: 'Mental Health Hub', iconClass: 'fa-solid fa-brain' },
      { id: 'grief-support', label: 'Grief Support', iconClass: 'fa-solid fa-hand-holding-heart' }
    ]
  },
  {
    id: 'period-hygiene',
    icon: '🌸',
    title: 'Period & Hygiene Essentials',
    body:
      'Sustainable products, menstrual cup guides, and hygiene best practices for every life stage.',
    links: [
      { id: 'menstrual-care', label: 'Menstrual Care', iconClass: 'fa-solid fa-droplet' }
    ]
  }
];

export interface MenopauseSymptom {
  id: string;
  icon: string;
  label: string;
}

export const menopauseSymptoms: MenopauseSymptom[] = [
  { id: 'hot-flash', icon: '🔥', label: 'Hot Flashes' },
  { id: 'brain-fog', icon: '🧠', label: 'Brain Fog' },
  { id: 'joint-pain', icon: '🦴', label: 'Joint Pain' },
  { id: 'mood', icon: '⚡', label: 'Mood Swings' },
  { id: 'sleep', icon: '😴', label: 'Insomnia' },
  { id: 'weight', icon: '⚖️', label: 'Weight Gain' },
  { id: 'anxiety', icon: '😰', label: 'Anxiety' },
  { id: 'libido', icon: '❤️‍🔥', label: 'Low Libido' }
];

export interface MenopausePillar {
  id: string;
  number: string;
  title: string;
  description: string;
}

export const menopausePillars: MenopausePillar[] = [
  {
    id: 'guide',
    number: '01',
    title: 'Complete Menopause Guide',
    description: 'Perimenopause to post‑menopause: stages, hormones, and what to expect.'
  },
  {
    id: 'bone-health',
    number: '02',
    title: 'Bone Health',
    description: 'Prevent osteoporosis with calcium guides, exercise plans, and DEXA scan info.'
  },
  {
    id: 'screenings',
    number: '03',
    title: 'Screenings & Tests',
    description: 'Hormone panels, cholesterol checks, and mammograms you need now.'
  }
];

// ============================
// How It Works Section
// ============================

export interface FlowStep {
  id: string;
  number: number;
  title: string;
  description: string;
}

export const flowSteps: FlowStep[] = [
  {
    id: 'stage',
    number: 1,
    title: 'Tell us your stage',
    description: 'Choose planning, prenatal, postnatal, menopause or loss.'
  },
  {
    id: 'ai-plan',
    number: 2,
    title: 'AI organizes the plan',
    description: 'We turn guidelines into checklists & reminders.'
  },
  {
    id: 'humans',
    number: 3,
    title: 'Humans step in',
    description: 'Experts & community step in when you need them.'
  }
];

// ============================
// Healing Garden Section (Miscarriage & Loss Support)
// ============================

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

export const growthSteps: GrowthStep[] = [
  {
    id: 'medical',
    icon: '🩺',
    title: 'Medical Follow-Up',
    petals: [
      { id: 'symptom-checker', iconClass: 'fa-solid fa-clipboard-check', label: 'Symptom Checker' },
      { id: 'obgyn-consult', iconClass: 'fa-solid fa-video', label: 'OBGYN Consult' }
    ]
  },
  {
    id: 'emotional',
    icon: '💔',
    title: 'Emotional Support',
    petals: [
      { id: 'grief-support', iconClass: 'fa-solid fa-comments', label: 'Grief Support Page', href: '#' },
      { id: 'community', iconClass: 'fa-solid fa-users', label: 'Community Circle' }
    ]
  },
  {
    id: 'future',
    icon: '🌱',
    title: 'Future Planning',
    petals: [
      { id: 'fertility-expert', iconClass: 'fa-solid fa-user-doctor', label: 'Fertility Expert', href: '#' },
      { id: 'try-again', iconClass: 'fa-solid fa-heart', label: 'Try Again Guide', href: '#' }
    ]
  }
];

// ============================
// Symptom Detection CTA Section
// ============================

export interface SeverityCard {
  id: string;
  type: 'mild' | 'moderate' | 'severe' | 'critical';
  icon: string;
  label: string;
  description: string;
  examples: string;
}

export const severityCards: SeverityCard[] = [
  {
    id: 'mild',
    type: 'mild',
    icon: '🌱',
    label: 'Mild',
    description: 'Early warning signs that can be managed with lifestyle changes',
    examples: 'e.g., Irregular periods, mild mood changes, fatigue'
  },
  {
    id: 'moderate',
    type: 'moderate',
    icon: '⚠️',
    label: 'Moderate',
    description: 'Persistent symptoms requiring medical consultation',
    examples: 'e.g., Heavy bleeding, chronic pelvic pain, hot flashes'
  },
  {
    id: 'severe',
    type: 'severe',
    icon: '🚨',
    label: 'Severe',
    description: 'Urgent symptoms needing prompt medical attention',
    examples: 'e.g., Sudden severe pain, excessive bleeding, high fever'
  },
  {
    id: 'critical',
    type: 'critical',
    icon: '🆘',
    label: 'Critical',
    description: 'Emergency conditions requiring immediate care',
    examples: 'e.g., Hemorrhage, loss of consciousness, severe chest pain'
  }
];

export interface TrustIndicator {
  id: string;
  icon: string;
  label: string;
  value: string;
}

export const trustIndicators: TrustIndicator[] = [
  {
    id: 'medically-reviewed',
    icon: '✓',
    label: 'Medically Reviewed',
    value: 'By OBGYN Specialists'
  },
  {
    id: 'private',
    icon: '🔒',
    label: '100% Private',
    value: 'No Data Stored'
  },
  {
    id: 'evidence-based',
    icon: '📊',
    label: 'Evidence-Based',
    value: 'Latest Research'
  }
];

// ============================
// Personal Tracking Hub Section
// ============================

export interface FeatureOrb {
  id: string;
  orbClass: string;
  icon: string;
  label: string;
}

export const featureOrbs: FeatureOrb[] = [
  {
    id: 'smart-reminders',
    orbClass: 'orb-1',
    icon: '📅',
    label: 'Smart Reminders'
  },
  {
    id: 'medication-tracking',
    orbClass: 'orb-2',
    icon: '💊',
    label: 'Medication Tracking'
  },
  {
    id: 'health-metrics',
    orbClass: 'orb-3',
    icon: '📊',
    label: 'Health Metrics'
  },
  {
    id: 'goal-progress',
    orbClass: 'orb-4',
    icon: '🎯',
    label: 'Goal Progress'
  },
  {
    id: 'lab-results',
    orbClass: 'orb-5',
    icon: '🔬',
    label: 'Lab Results'
  },
  {
    id: 'journey-maps',
    orbClass: 'orb-6',
    icon: '🗺️',
    label: 'Journey Maps'
  }
];

export interface TrackingBenefit {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export const trackingBenefits: TrackingBenefit[] = [
  {
    id: 'personalized-insights',
    icon: '🎯',
    title: 'Personalized Insights',
    description: 'AI analyzes your patterns and provides actionable recommendations'
  },
  {
    id: 'never-miss',
    icon: '🔔',
    title: 'Never Miss a Beat',
    description: 'Smart reminders for medications, appointments, and health checks'
  },
  {
    id: 'track-progress',
    icon: '📈',
    title: 'Track Progress',
    description: 'Visualize your health journey with beautiful, intuitive charts'
  },
  {
    id: 'secure-private',
    icon: '🔐',
    title: 'Secure & Private',
    description: 'Your health data is encrypted and protected with bank-level security'
  }
];

// ============================
// Community Portal Section
// ============================

export interface CommunityFloatCard {
  id: string;
  cardClass: string;
  icon: string;
  badge: string;
  badgeClass?: string;
  title: string;
  memberCount: string;
}

export const communityFloatCards: CommunityFloatCard[] = [
  {
    id: 'pregnancy',
    cardClass: 'card-1',
    icon: '🤰',
    badge: 'Live Now',
    badgeClass: 'live',
    title: 'Pregnancy Journey',
    memberCount: '5,678 members'
  },
  {
    id: 'menopause',
    cardClass: 'card-2',
    icon: '🌸',
    badge: 'Popular',
    badgeClass: 'popular',
    title: 'Menopause Support',
    memberCount: '4,123 members'
  },
  {
    id: 'mental-wellness',
    cardClass: 'card-3',
    icon: '💗',
    badge: 'Active',
    badgeClass: 'active',
    title: 'Mental Wellness',
    memberCount: '3,890 members'
  },
  {
    id: 'chronic-conditions',
    cardClass: 'card-4',
    icon: '🎗️',
    badge: 'Support',
    title: 'Chronic Conditions',
    memberCount: '2,456 members'
  },
  {
    id: 'nutrition-fitness',
    cardClass: 'card-5',
    icon: '🥗',
    badge: 'Trending',
    title: 'Nutrition & Fitness',
    memberCount: '4,567 members'
  },
  {
    id: 'new-moms',
    cardClass: 'card-6',
    icon: '👶',
    badge: 'New',
    title: 'New Moms Circle',
    memberCount: '3,234 members'
  }
];

export interface CommunityFeature {
  id: string;
  icon: string;
  title: string;
  description: string;
  glowClass: string;
}

export const communityFeatures: CommunityFeature[] = [
  {
    id: 'live-discussions',
    icon: '💬',
    title: 'Live Discussions',
    description: 'Real-time conversations with women who understand your journey',
    glowClass: 'neon-pink'
  },
  {
    id: 'expert-events',
    icon: '📅',
    title: 'Expert Events',
    description: 'Weekly Q&A sessions with doctors, nutritionists, and wellness coaches',
    glowClass: 'neon-purple'
  },
  {
    id: 'success-stories',
    icon: '⭐',
    title: 'Success Stories',
    description: 'Get inspired by real stories from thousands of women like you',
    glowClass: 'neon-blue'
  },
  {
    id: 'safe-space',
    icon: '🛡️',
    title: 'Safe Space',
    description: 'Moderated, private, and judgment-free environment for open sharing',
    glowClass: 'neon-green'
  }
];

export interface TickerItem {
  id: string;
  text: string;
}

export const tickerItems: TickerItem[] = [
  { id: '1', text: '✨ "This community changed my life!" - Priya M.' },
  { id: '2', text: '💕 "Found my support system here" - Anjali K.' },
  { id: '3', text: '🌟 "Finally, people who understand" - Lakshmi S.' },
  { id: '4', text: '💖 "Best decision I made" - Meera R.' }
];


