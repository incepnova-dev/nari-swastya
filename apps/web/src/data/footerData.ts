/**
 * Footer content data
 */

export interface FooterLink {
  href: string;
  label: string;
}

export const aboutContent = {
  title: 'About This Guide',
  description:
    'Comprehensive, evidence-based information synthesized from WHO, ACOG, ICMR guidelines, peer-reviewed research, and NFHS-5 data (724,115+ women).',
};

export const evidenceSources = {
  title: 'Evidence Sources',
  sources: [
    'World Health Organization',
    'ACOG Guidelines',
    'ICMR India',
    'NFHS-5 Survey',
  ],
};

export const disclaimerContent = {
  title: 'Important Disclaimer',
  text: 'This provides general information only. Each pregnancy is unique. Medical decisions should be made with qualified healthcare providers who can assess your individual circumstances.',
};

export const emergencyContent = {
  title: 'Emergency',
  text: 'Heavy bleeding, fever, chest pain, or severe abdominal pain require immediate medical attention.',
  emphasis: "Don't delay.",
};

export const metaContent = {
  lastUpdated: 'February 2026',
  badges: ['Evidence-Based', 'Comprehensive', 'Empowering'],
  tagline: 'Dedicated to empowering every mother',
};

export const bottomLinks: FooterLink[] = [
  { href: '/privacy', label: 'Privacy Policy' },
  { href: '/terms', label: 'Terms of Service' },
  { href: '/contact', label: 'Contact Support' },
];

export const copyrightText = '© 2026 Nari Shakti. Empowering Women\'s Health.';
