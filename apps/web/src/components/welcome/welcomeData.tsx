// Shared types and data for the Welcome page
// Source: Welcome.html content

// ============================
// Story Cards Section (SECTION NEW-A)
// ============================

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

export const storyCardsData: StoryCardData[] = [
  {
    tag: 'research',
    tagIcon: 'fa-flask-vial',
    tagLabel: 'Research',
    title: 'New PCOS Research: Why 60% of diagnoses are missed until age 30',
    description:
      'A landmark AIIMS-Delhi study reveals hormonal markers doctors routinely overlook. Our platform surfaces this evidence in plain language — before you ever step into a clinic.',
    avatar: '🔬',
    authorName: 'Dr. Sunita Mehta, MD Endocrinology',
    authorSub: 'Summarized for 2.4M women · 12 min read',
    transitionDelay: '0.1s',
  },
  {
    tag: 'cancer',
    tagIcon: 'fa-ribbon',
    tagLabel: 'Cancer Recovery',
    title: '"I was 29 when they found Stage 3 cervical cancer. I\'m 33 now, and I\'m dancing."',
    description:
      'Ananya\'s recovery journey — surgery, radiation, grief, and rebirth — mapped week by week. Her story has helped 47,000 women ask the question they were afraid to voice.',
    avatar: '💃',
    authorName: 'Ananya Bose',
    authorSub: 'Kolkata, West Bengal · Shared with the community',
    transitionDelay: '0.22s',
  },
  {
    tag: 'recovery',
    tagIcon: 'fa-heart-circle-check',
    tagLabel: 'Recovery',
    title: 'From 4 years of infertility to holding twins: Rekha\'s IVF truth',
    description:
      'No filter. No Instagram perfection. Rekha documents every injections, every failed cycle, every breakdown — and finally, the two heartbeats that changed everything.',
    avatar: '👶',
    authorName: 'Rekha Pillai',
    authorSub: 'Thiruvananthapuram · 6,800 comments of solidarity',
    transitionDelay: '0.34s',
  },
  {
    tag: 'peer',
    tagIcon: 'fa-users',
    tagLabel: 'Peer Network',
    title: 'The silent miscarriage club: 2,300 women who said "me too" — and meant it',
    description:
      'A closed circle where loss is met with understanding, not platitudes. Real women sharing what helped, what didn\'t, and how they moved forward — together.',
    avatar: '🫂',
    authorName: 'Community Circle',
    authorSub: 'Private & safe · Moderated by grief counsellors',
    transitionDelay: '0.46s',
  },
];

// ============================
// Pain Cards Section (SECTION 1)
// ============================

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

export const painCardsData: PainCardData[] = [
  {
    id: 'midnight-fear',
    icon: '🌑',
    iconBg: 'linear-gradient(135deg,#fce4ec,#f8bbd9)',
    iconColor: '#c2185b',
    title: 'Midnight Fear, No Answer',
    body:
      "70% of pregnant women in India report Googling symptoms at night with no one to call. Misinformation costs lives.",
    quote: '"I was bleeding at 3 AM. I had no idea if I should rush to the hospital or wait."',
    delay: '.1s',
  },
  {
    id: 'pregnancy-loss',
    icon: '💔',
    iconBg: 'linear-gradient(135deg,#f3e5f5,#e1bee7)',
    iconColor: '#7b1fa2',
    title: 'Pregnancy Loss, Alone',
    body: '1 in 4 pregnancies end in miscarriage. Most women are sent home with a pamphlet and silence.',
    quote: '"Nobody told me grief after loss is normal. I thought I was broken."',
    delay: '.2s',
  },
  {
    id: 'scattered-advice',
    icon: '📋',
    iconBg: 'linear-gradient(135deg,#fff8e1,#ffecb3)',
    iconColor: '#f57f17',
    title: 'Scattered, Contradictory Advice',
    body:
      'One doctor says rest. Another says exercise. Your mother-in-law says something else. Women deserve clarity.',
    quote: '"I received 4 different answers to the same question. I stopped asking."',
    delay: '.3s',
  },
  {
    id: 'postpartum-struggle',
    icon: '🌊',
    iconBg: 'linear-gradient(135deg,#e0f7fa,#b2ebf2)',
    iconColor: '#00838f',
    title: 'Postpartum Invisible Struggle',
    body:
      '1 in 5 new mothers experience postpartum depression. Most suffer in secret, afraid of being judged.',
    quote: '"I loved my baby but felt nothing. I was ashamed to tell anyone."',
    delay: '.4s',
  },
];

// ============================
// Nucleus Visual Section
// ============================

export interface NucleusBadge {
  emoji: string;
  text: string;
  className: string;
}

export const nucleusBadges: NucleusBadge[] = [
  { emoji: '🧬', text: 'PCOS Breakthroughs', className: 'nb1' },
  { emoji: '🎗️', text: 'Breast Cancer Survival', className: 'nb2' },
  { emoji: '🍃', text: 'Ayurvedic Fertility', className: 'nb3' },
  { emoji: '🧠', text: 'Postpartum Research', className: 'nb4' },
  { emoji: '💊', text: 'Hormone Therapy', className: 'nb5' },
  { emoji: '🌙', text: 'Endometriosis Truth', className: 'nb6' },
];

// ============================
// Hero Section
// ============================

export interface HeroBadge {
  icon: string;
  text: string;
}

export const heroBadge: HeroBadge = {
  icon: 'fa-heart-pulse',
  text: 'For Every Woman. Every Stage.',
};

export interface HeroTitle {
  line1: string;
  line2: string;
  emphasis: string;
  line3: string;
}

export const heroTitle: HeroTitle = {
  line1: 'You Deserve to',
  line2: 'Feel',
  emphasis: 'Seen, Heard',
  line3: '& Never Alone.',
};

export interface HeroSubtitle {
  text: string;
}

export const heroSubtitle: HeroSubtitle = {
  text:
    "From your first missed period to your child's first steps — Nari Swasthya walks every path with you. Evidence-based, emotionally intelligent women's health, built for India's 350 million mothers.",
};

export interface HeroCTA {
  id: string;
  type: 'primary' | 'secondary';
  icon: string;
  label: string;
}

export const heroCTAs: HeroCTA[] = [
  {
    id: 'begin-journey',
    type: 'primary',
    icon: 'fa-sparkles',
    label: 'Begin Your Journey',
  },
  {
    id: 'explore-stories',
    type: 'secondary',
    icon: 'fa-play',
    label: 'Explore Stories',
  },
];

export interface HeroTrust {
  avatars: string[];
  text: string;
  highlight: string;
  suffix: string;
}

export const heroTrust: HeroTrust = {
  avatars: ['P', 'A', 'S', 'R', 'M'],
  text: 'Joined by',
  highlight: '2.4 million',
  suffix: 'women this year',
};

// ============================
// Hero Visual Section
// ============================

export interface EmotionWord {
  id: string;
  className: string;
  icon?: string;
  iconColor?: string;
  text: string;
}

export const emotionWords: EmotionWord[] = [
  {
    id: 'fertility',
    className: 'ew1',
    icon: 'fa-seedling',
    iconColor: 'var(--pink)',
    text: 'Fertility',
  },
  {
    id: 'pregnancy',
    className: 'ew2',
    text: '🤰 Pregnancy',
  },
  {
    id: 'newborn',
    className: 'ew3',
    icon: 'fa-baby',
    iconColor: '#9c5cf7',
    text: 'Newborn',
  },
  {
    id: 'postpartum',
    className: 'ew4',
    text: '🌸 Postpartum',
  },
  {
    id: 'mental-health',
    className: 'ew5',
    text: '🧠 Mental Health',
  },
  {
    id: 'menopause',
    className: 'ew6',
    text: '💊 Menopause',
  },
];

export interface HeroCore {
  icon: string;
  line1: string;
  line2: string;
}

export const heroCore: HeroCore = {
  icon: '🩷',
  line1: 'Your health',
  line2: 'starts here',
};

// ============================
// Journey Section (SECTION 3)
// ============================

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

export const milestoneData: Milestone[] = [
  {
    id: 'before-conception',
    week: 'Before Conception',
    title: '🌱 The Hope That Starts It All',
    description:
      'Cycle tracking, fertility windows, hormonal health, and preconception nutrition — everything she needs before the journey begins, personalized to her body.',
    statIcon: 'fa-solid fa-chart-line',
    statText: '83% of women felt more prepared after using our fertility tracker',
    nodeIcon: 'fa-solid fa-seedling',
    animationDelay: '0s',
  },
  {
    id: 'first-trimester',
    week: 'Weeks 1–12 · First Trimester',
    title: '💛 The Quiet, Terrifying First Weeks',
    description:
      'Morning sickness, exhaustion, fear of loss — but also wonder. Our week-by-week guide tells her exactly what\'s happening inside her body today, and what to watch for.',
    statIcon: 'fa-solid fa-shield-heart',
    statText: 'Emergency symptom checker available 24/7, no appointment needed',
    nodeIcon: 'fa-solid fa-baby-carriage',
    animationDelay: '0.3s',
  },
  {
    id: 'second-trimester',
    week: 'Weeks 13–28 · Second Trimester',
    title: '✨ She Starts to Believe It\'s Real',
    description:
      'Anatomy scans, glucose tests, the first kick — paired with our interactive body map so she understands every test result and why it matters for her baby.',
    statIcon: 'fa-solid fa-magnifying-glass',
    statText: 'Personalized ANC visit reminders and test interpretation',
    nodeIcon: 'fa-solid fa-heart-pulse',
    animationDelay: '0.6s',
  },
  {
    id: 'third-trimester',
    week: 'Weeks 29–40 · Third Trimester',
    title: '🌊 The Final Push — Fear & Fierce Love',
    description:
      'Birth plans, kick-count tracking, GBS testing, and hospital bag checklists. She walks into delivery prepared, not terrified — because she knows what to expect.',
    statIcon: 'fa-solid fa-clipboard-check',
    statText: '91% of users felt more confident about labour after our prep module',
    nodeIcon: 'fa-solid fa-baby',
    animationDelay: '0.9s',
  },
  {
    id: 'fourth-trimester',
    week: 'After Birth · The 4th Trimester',
    title: '🌸 The Hardest, Most Beautiful Chapter',
    description:
      'Postpartum depression screening, breastfeeding support, newborn care guides, and a community that says "me too" — because new motherhood should never be lonely.',
    statIcon: 'fa-solid fa-users',
    statText: '24/7 community of 2.4M mothers who understand exactly how she feels',
    nodeIcon: 'fa-solid fa-hands-holding-heart',
    animationDelay: '1.2s',
  },
];

// ============================
// CTA Section (SECTION 4)
// ============================

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

export const testimonials: Testimonial[] = [
  {
    id: 'priya-nair',
    avatar: '👩',
    stars: '★★★★★',
    text:
      "I had three miscarriages before anyone told me what a thrombophilia panel was. Nari Swasthya's loss support section held my hand when no doctor had time to. I finally felt understood.",
    name: 'Priya Nair',
    role: 'Mother of 1 · Kochi, Kerala',
  },
  {
    id: 'fatima-shaikh',
    avatar: '🧕',
    avatarAnimationDelay: '2s',
    stars: '★★★★★',
    text:
      'My husband works in Dubai. I was pregnant, alone in a village, and terrified every single night. The emergency symptom checker told me what was serious. Once it literally told me to go to hospital immediately — it saved my baby.',
    name: 'Fatima Shaikh',
    role: 'First-time mother · Aurangabad, Maharashtra',
    transitionDelay: '0.15s',
  },
  {
    id: 'deepa-krishnamurthy',
    avatar: '👩‍⚕️',
    avatarAnimationDelay: '4s',
    stars: '★★★★★',
    text:
      "I'm a nurse and still felt completely lost with my own postpartum depression. The platform's PHQ-9 screening and community forum made me realize I wasn't a bad mother — I was a sick one who needed help. That distinction saved my life.",
    name: 'Deepa Krishnamurthy',
    role: 'Registered Nurse · Bengaluru, Karnataka',
    transitionDelay: '0.3s',
  },
];

// ============================
// Scroll Progress Dots
// ============================

export interface ScrollProgressDot {
  id: string;
  section: string;
  title: string;
  active?: boolean;
}

export const scrollProgressDots: ScrollProgressDot[] = [
  { id: 'hero', section: 'hero', title: 'Home', active: true },
  { id: 's1', section: 's1', title: 'Pain Points' },
  { id: 'sna', section: 'sna', title: 'Stories' },
  { id: 'snb', section: 'snb', title: 'Voices' },
  { id: 's2', section: 's2', title: 'Impact' },
  { id: 's3', section: 's3', title: 'Journey' },
  { id: 's4', section: 's4', title: 'Join Us' },
];

