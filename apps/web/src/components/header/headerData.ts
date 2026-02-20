import { DropdownEntry } from './NavDropdown';
import { ActionButton } from './NavActions';

/**
 * Navigation data for SiteHeader
 */

// Journeys dropdown entries
export const journeysDropdownEntries: DropdownEntry[] = [
  {
    type: 'item',
    data: {
      href: '/journeys',
      icon: 'fa-solid fa-map',
      iconVariant: 'dd-icon dd-icon-gradient',
      title: 'View Full Journeys',
      subtitle: 'Browse all her journeys',
      titleColor: '#d81b60',
      isFeatured: true,
    },
  },
  { type: 'separator' },
  {
    type: 'item',
    data: {
      href: 'conceiving.html',
      icon: 'fa-solid fa-seedling',
      iconVariant: 'dd-icon dd-icon-pink',
      title: 'Conceiving',
      subtitle: 'Preparation & planning',
    },
  },
  {
    type: 'item',
    data: {
      href: 'fertility.html',
      icon: 'fa-solid fa-dna',
      iconVariant: 'dd-icon dd-icon-purple',
      title: 'Fertility',
      subtitle: 'Cycle & ovulation',
    },
  },
  {
    type: 'flyout',
    data: {
      href: 'pregnancy_journey.html',
      icon: 'fa-solid fa-baby-carriage',
      iconVariant: 'dd-icon dd-icon-pregnancy',
      title: 'Pregnancy Journey',
      subtitle: 'Week by week guide',
      flyoutItems: [
        {
          href: 'normal_delivery.html',
          icon: 'fa-solid fa-circle-check',
          iconVariant: 'dd-icon dd-icon-green',
          title: 'Normal Delivery',
          subtitle: 'Vaginal birth guide',
        },
        {
          href: 'csection.html',
          icon: 'fa-solid fa-hospital',
          iconVariant: 'dd-icon dd-icon-blue',
          title: 'C-Section',
          subtitle: 'Surgical birth info',
        },
        {
          href: 'pregnancy_loss.html',
          icon: 'fa-solid fa-hands-holding-heart',
          iconVariant: 'dd-icon dd-icon-neutral',
          title: 'Pregnancy Loss',
          subtitle: 'Support & care',
        },
      ],
    },
  },
  {
    type: 'item',
    data: {
      href: 'antenatal_care.html',
      icon: 'fa-solid fa-clipboard-list',
      iconVariant: 'dd-icon dd-icon-green',
      title: 'Antenatal Care',
      subtitle: 'ANC visits & checklist',
    },
  },
  {
    type: 'flyout',
    data: {
      href: 'ncd_pregnancy.html',
      icon: 'fa-solid fa-heart-pulse',
      iconVariant: 'dd-icon dd-icon-indigo',
      title: 'Non Communicable Diseases',
      subtitle: 'Diabetes, hypertension & more',
      flyoutItems: [
        {
          href: 'gestational_diabetes.html',
          icon: 'fa-solid fa-droplet',
          iconVariant: 'dd-icon dd-icon-gold',
          title: 'Gestational Diabetes',
          subtitle: 'Manage blood sugar',
        },
        {
          href: 'preeclampsia_education.html',
          icon: 'fa-solid fa-heart-circle-exclamation',
          iconVariant: 'dd-icon dd-icon-pink',
          title: 'Preeclampsia',
          subtitle: 'Blood pressure care',
        },
        {
          href: 'cancer_simulation_journey.html',
          icon: 'fa-solid fa-ribbon',
          iconVariant: 'dd-icon dd-icon-purple',
          title: 'Cancer',
          subtitle: 'Simulation journey',
        },
      ],
    },
  },
  {
    type: 'item',
    data: {
      href: 'newborn_postpartum_care.html',
      icon: 'fa-solid fa-baby',
      iconVariant: 'dd-icon dd-icon-blue',
      title: 'Newborn & Postpartum',
      subtitle: '4th trimester care',
    },
  },
  {
    type: 'item',
    data: {
      href: 'breastfeeding_journey.html',
      icon: 'fa-solid fa-heart',
      iconVariant: 'dd-icon dd-icon-gold',
      title: 'Breastfeeding',
      subtitle: 'Latch, supply, nutrition',
    },
  },
  {
    type: 'item',
    data: {
      href: 'menopause.html',
      icon: 'fa-solid fa-fire-flame-curved',
      iconVariant: 'dd-icon dd-icon-menopause',
      title: 'Menopause',
      subtitle: 'Perimenopause & beyond',
    },
  },
];

// Services dropdown entries
export const servicesDropdownEntries: DropdownEntry[] = [
  {
    type: 'item',
    data: {
      href: '/services',
      icon: 'fa-solid fa-grid-2',
      iconVariant: 'dd-icon dd-icon-gradient',
      title: 'Services Available',
      subtitle: 'Browse all our services',
      titleColor: 'var(--deep-pink)',
      isFeatured: true,
    },
  },
  { type: 'separator' },
  {
    type: 'item',
    data: {
      href: 'symptom_checker.html',
      icon: 'fa-solid fa-stethoscope',
      iconVariant: 'dd-icon dd-icon-pink',
      title: 'Symptom Checker',
      subtitle: 'AI-powered diagnosis',
    },
  },
  {
    type: 'item',
    data: {
      href: 'dashboard.html',
      icon: 'fa-solid fa-gauge-high',
      iconVariant: 'dd-icon dd-icon-green',
      title: 'My Dashboard',
      subtitle: 'Track your health',
    },
  },
  {
    type: 'item',
    data: {
      href: 'screening.html',
      icon: 'fa-solid fa-magnifying-glass-plus',
      iconVariant: 'dd-icon dd-icon-blue',
      title: 'Health Screening',
      subtitle: 'Cancer & preventive',
    },
  },
  {
    type: 'item',
    data: {
      href: 'vaccination.html',
      icon: 'fa-solid fa-syringe',
      iconVariant: 'dd-icon dd-icon-purple',
      title: 'Vaccination',
      subtitle: 'Immunization schedule',
    },
  },
  {
    type: 'item',
    data: {
      href: 'otc.html',
      icon: 'fa-solid fa-pills',
      iconVariant: 'dd-icon dd-icon-teal',
      title: 'OTC Medicine Guide',
      subtitle: 'Safe self-care options',
    },
  },
  {
    type: 'item',
    data: {
      href: 'government-schemes.html',
      icon: 'fa-solid fa-landmark',
      iconVariant: 'dd-icon dd-icon-orange',
      title: 'Govt Schemes',
      subtitle: 'Benefits you deserve',
    },
  },
  {
    type: 'item',
    data: {
      href: 'insurance.html',
      icon: 'fa-solid fa-shield-halved',
      iconVariant: 'dd-icon dd-icon-forest',
      title: 'Insurance',
      subtitle: 'Coverage & claims guide',
    },
  },
];

// Additional Info dropdown entries
export const additionalInfoDropdownEntries: DropdownEntry[] = [
  { type: 'section-label', label: 'Health Topics' },
  {
    type: 'item',
    data: {
      href: 'fertility.html',
      icon: 'fa-solid fa-seedling',
      iconVariant: 'dd-icon dd-icon-pregnancy',
      title: 'Fertility',
      subtitle: 'Cycle, conceiving & IVF',
    },
  },
  {
    type: 'item',
    data: {
      href: 'pregnancy_journey.html',
      icon: 'fa-solid fa-baby-carriage',
      iconVariant: 'dd-icon dd-icon-purple',
      title: 'Pregnancy',
      subtitle: 'All trimesters covered',
    },
  },
  {
    type: 'item',
    data: {
      href: 'newborn_postpartum_care.html',
      icon: 'fa-solid fa-baby',
      iconVariant: 'dd-icon dd-icon-blue',
      title: 'Motherhood',
      subtitle: 'Newborn & postpartum',
    },
  },
  {
    type: 'item',
    data: {
      href: 'menopause.html',
      icon: 'fa-solid fa-spa',
      iconVariant: 'dd-icon dd-icon-green',
      title: 'Wellness',
      subtitle: 'Menopause, bone, mental',
    },
  },
  { type: 'separator' },
  {
    type: 'item',
    data: {
      href: 'community.html',
      icon: 'fa-solid fa-users',
      iconVariant: 'dd-icon dd-icon-violet',
      title: 'Community',
      subtitle: 'Share & connect',
    },
  },
  { type: 'separator' },
  { type: 'section-label', label: 'Specialised Care' },
  {
    type: 'flyout',
    data: {
      href: 'ncd_pregnancy.html',
      icon: 'fa-solid fa-heart-pulse',
      iconVariant: 'dd-icon dd-icon-indigo',
      title: 'Non Communicable Diseases',
      subtitle: 'Diabetes, hypertension & more',
      flyoutItems: [
        {
          href: 'gestational_diabetes.html',
          icon: 'fa-solid fa-droplet',
          iconVariant: 'dd-icon dd-icon-gold',
          title: 'Gestational Diabetes',
          subtitle: 'Manage blood sugar',
        },
        {
          href: 'preeclampsia_education.html',
          icon: 'fa-solid fa-heart-circle-exclamation',
          iconVariant: 'dd-icon dd-icon-pink',
          title: 'Preeclampsia',
          subtitle: 'Blood pressure care',
        },
        {
          href: 'cancer_simulation_journey.html',
          icon: 'fa-solid fa-ribbon',
          iconVariant: 'dd-icon dd-icon-purple',
          title: 'Cancer',
          subtitle: 'Simulation journey',
        },
      ],
    },
  },
  {
    type: 'item',
    data: {
      href: 'bone_health.html',
      icon: 'fa-solid fa-bone',
      iconVariant: 'dd-icon dd-icon-menopause',
      title: 'Bone Health',
      subtitle: 'Osteoporosis prevention',
    },
  },
  {
    type: 'item',
    data: {
      href: 'depression.html',
      icon: 'fa-solid fa-brain',
      iconVariant: 'dd-icon dd-icon-gold',
      title: 'Mental Health',
      subtitle: 'Anxiety, depression, support',
    },
  },
  {
    type: 'item',
    data: {
      href: 'loss_support.html',
      icon: 'fa-solid fa-hands-holding-heart',
      iconVariant: 'dd-icon dd-icon-neutral',
      title: 'Loss Support',
      subtitle: 'You are never alone',
    },
  },
];

// Simple nav links
export interface SimpleNavLink {
  href: string;
  label: string;
  isActive?: boolean;
}

export const simpleNavLinks: SimpleNavLink[] = [
  { href: 'index.html', label: 'Home', isActive: true },
];

export const rightNavLinks: SimpleNavLink[] = [
  { href: 'stories.html', label: 'Stories' },
  { href: 'about.html', label: 'About Us' },
];

// Action buttons
export const defaultActionButtons: ActionButton[] = [
  { href: 'signin.html', icon: 'fa-regular fa-user', label: 'Sign In', variant: 'outline' },
  { href: 'contact.html', icon: 'fa-solid fa-envelope', label: 'Contact Us', variant: 'primary' },
];
