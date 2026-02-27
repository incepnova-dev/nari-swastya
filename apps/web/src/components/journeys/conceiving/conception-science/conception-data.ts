export interface DayInfo {
    day: number;
    text: string;
}

export interface Step {
    tag: string;
    title: string;
    body: string;
    evidence: string;
    stats: { n: string; l: string }[];
    canvasLabel: string;
    draw: string; // identifier for the draw function
}

export interface EvidenceCard {
    rank: string;
    icon: string;
    color: string;
    iconBg: string;
    title: string;
    body: string;
    impact: number;
    impactLabel: string;
    source: string;
}

export const DAY_INFO: string[] = [
    '', // day 0 unused
    'Day 1 — Menstruation begins. FSH starts rising.',
    'Day 2 — Uterine lining continues shedding.',
    'Day 3 — Follicle stimulating hormone peaks.',
    'Day 4 — Multiple follicles begin competing.',
    'Day 5 — Final day of menstruation typically.',
    'Day 6 — Dominant follicle selected. Estrogen rises.',
    'Day 7 — Cervical mucus thickens, becoming creamier.',
    'Day 8 — Estrogen surge continues. Endometrium thickens.',
    'Day 9 — Cervical mucus transitions to egg-white consistency.',
    'Day 10 — ✨ FERTILE WINDOW OPENS. Sperm can survive here.',
    'Day 11 — Excellent fertile day. LH begins to surge.',
    'Day 12 — High fertility. Sperm motility peaks.',
    'Day 13 — LH surge peak. Ovulation imminent in ~36h.',
    'Day 14 — 🥚 OVULATION. Egg released. Peak of fertility.',
    'Day 15 — Egg viable for 12–24h. Best conception chance.',
    'Day 16 — Luteal phase begins. Corpus luteum forms.',
    'Day 17 — Last day of fertile window.',
    'Day 18 — Progesterone rising. Endometrium prepares.',
    'Day 19 — Implantation window opens (days 20–24).',
    'Day 20 — ⭐ Implantation window. If fertilised, hCG rises.',
    'Day 21 — Progesterone peaks. Nesting phase for embryo.',
    'Day 22 — Implantation can occur. Early pregnancy test window.',
    'Day 23 — hCG doubling every 48h if pregnant.',
    'Day 24 — Last reliable implantation day.',
    'Day 25 — Corpus luteum begins declining if no pregnancy.',
    'Day 26 — PMS symptoms may appear. Progesterone drops.',
    'Day 27 — Uterine lining begins to prepare to shed.',
    'Day 28 — Cycle ends. New cycle begins tomorrow.',
];

export const EVIDENCE_CARDS: EvidenceCard[] = [
    {
        rank: '01', icon: '📅', color: 'linear-gradient(135deg,rgba(232,53,109,.12),rgba(181,18,74,.06))',
        iconBg: 'linear-gradient(135deg,#e8356d,#b5124a)',
        title: 'Timed Intercourse During Fertile Window',
        body: 'Having intercourse on the 2 days before ovulation (peak fertile window) increases per-cycle conception probability by up to 15 percentage points vs random timing.',
        impact: 95, impactLabel: 'Very High Impact',
        source: 'Wilcox AJ et al. NEJM 1995 · ACOG Practice Bulletin 2022'
    },
    {
        rank: '02', icon: '💊', color: 'linear-gradient(135deg,rgba(245,166,35,.1),rgba(230,92,0,.05))',
        iconBg: 'linear-gradient(135deg,#f5a623,#e65c00)',
        title: 'Folic Acid 400μg Daily (Pre-Conception)',
        body: 'WHO and ICMR mandate 400μg folic acid for at least 3 months before conception. Reduces neural tube defects by 70% and supports early embryo DNA synthesis.',
        impact: 90, impactLabel: 'Very High Impact',
        source: 'WHO 2023 Antenatal Guidelines · ICMR National Guidelines 2020'
    },
    {
        rank: '03', icon: '⚖️', color: 'linear-gradient(135deg,rgba(0,201,177,.1),rgba(0,125,111,.05))',
        iconBg: 'linear-gradient(135deg,#00c9b1,#007d6f)',
        title: 'Maintain BMI 18.5–24.9',
        body: 'Both obesity (BMI>30) and underweight (BMI<18.5) significantly disrupt ovulation. NFHS-5 data shows 14.7% of Indian women of reproductive age are obese, associated with PCOS and anovulation.',
        impact: 85, impactLabel: 'High Impact',
        source: 'NFHS-5 2019–21 · Harvard School of Public Health · ACOG Obesity in Pregnancy 2021'
    },
    {
        rank: '04', icon: '🚭', color: 'linear-gradient(135deg,rgba(124,58,237,.1),rgba(88,28,180,.05))',
        iconBg: 'linear-gradient(135deg,#7c3aed,#5b21b6)',
        title: 'Eliminate Smoking — Both Partners',
        body: 'Smoking reduces female fertility by up to 40% (accelerates follicular depletion) and reduces male sperm motility by 17%. Even passive smoke exposure impairs endometrial receptivity.',
        impact: 88, impactLabel: 'High Impact',
        source: 'British Medical Journal Meta-analysis 2020 · Johns Hopkins Medicine Reproductive Health'
    },
    {
        rank: '05', icon: '😴', color: 'linear-gradient(135deg,rgba(99,102,241,.1),rgba(67,56,202,.05))',
        iconBg: 'linear-gradient(135deg,#6366f1,#4338ca)',
        title: 'Sleep 7–9 Hours — Melatonin & FSH',
        body: 'Melatonin protects oocyte quality; sleep deprivation elevates cortisol which suppresses GnRH pulses. Women sleeping <6h have 20% lower AMH levels (Chung et al., Fertil Steril 2019).',
        impact: 72, impactLabel: 'Moderate-High',
        source: 'Chung FF et al. Fertil Steril 2019 · Oxford Sleep Research Unit'
    },
    {
        rank: '06', icon: '🧘', color: 'linear-gradient(135deg,rgba(236,72,153,.1),rgba(219,39,119,.05))',
        iconBg: 'linear-gradient(135deg,#ec4899,#db2777)',
        title: 'Stress Reduction — HPA Axis',
        body: 'Chronic stress elevates CRH which suppresses GnRH, directly reducing LH pulse frequency. Harvard Mind-Body Institute studies show psychological interventions can increase conception rates by 29%.',
        impact: 68, impactLabel: 'Moderate Impact',
        source: 'Domar AD et al. Harvard Mind-Body Institute · Neuroendocrinology Reviews 2020'
    },
    {
        rank: '07', icon: '🏃', color: 'linear-gradient(135deg,rgba(16,185,129,.1),rgba(5,150,105,.05))',
        iconBg: 'linear-gradient(135deg,#10b981,#059669)',
        title: 'Moderate Exercise — 150 min/week',
        body: 'WHO recommends 150 min/week moderate activity. Moderate exercise improves insulin sensitivity (critical for PCOS) and reduces oxidative stress. Strenuous exercise (>60% VO2 max) can suppress ovulation.',
        impact: 70, impactLabel: 'Moderate Impact',
        source: 'WHO Physical Activity Guidelines 2020 · ACOG Exercise in Pregnancy · Vigeh et al. 2021'
    },
    {
        rank: '08', icon: '🥗', color: 'linear-gradient(135deg,rgba(245,158,11,.1),rgba(217,119,6,.05))',
        iconBg: 'linear-gradient(135deg,#f59e0b,#d97706)',
        title: 'Mediterranean Diet Pattern',
        body: 'A prospective cohort (Chavarro et al., Fertil Steril 2018, n=18,555) found women adhering to a "fertility diet" (whole grains, plant protein, full-fat dairy, low-glycaemic) had 66% lower risk of ovulatory infertility.',
        impact: 76, impactLabel: 'High Impact',
        source: 'Chavarro JE et al. Fertil Steril 2018 · Harvard Nurses\' Health Study II'
    },
    {
        rank: '09', icon: '🌡️', color: 'linear-gradient(135deg,rgba(239,68,68,.1),rgba(185,28,28,.05))',
        iconBg: 'linear-gradient(135deg,#ef4444,#b91c1c)',
        title: 'BBT + LH Strip Tracking',
        body: 'Combining basal body temperature charting with urinary LH strips identifies the fertile window with 96% accuracy. Digital apps validated against reference ultrasound show 95.3% specificity for ovulation detection.',
        impact: 82, impactLabel: 'High Impact',
        source: 'Stanford F et al. Am J Obstet Gynecol 2003 · Oxford Fertility Unit App Validation Study 2022'
    },
    {
        rank: '10', icon: '🧬', color: 'linear-gradient(135deg,rgba(14,165,233,.1),rgba(2,132,199,.05))',
        iconBg: 'linear-gradient(135deg,#0ea5e9,#0284c7)',
        title: 'Partner Sperm Health — Antioxidants',
        body: 'Male factor contributes to ~50% of infertility cases. Antioxidant supplementation (Vitamin C, E, CoQ10, zinc) improves sperm DNA fragmentation by 25% and motility by 18% (Cochrane Review 2019, 61 RCTs).',
        impact: 80, impactLabel: 'High Impact',
        source: 'Smits RM et al. Cochrane Database Syst Rev 2019 · WHO Semen Analysis Manual 2021'
    },
];

export const NUTRIENTS = [
    {
        icon: '🍃',
        name: 'Folic Acid',
        benefit: 'Prevents neural tube defects. START 3 months before trying! Helps egg quality and implantation.',
        need: '400-800 mcg (supplement recommended)',
        foods: ['🥬 Spinach', '🥦 Broccoli', '🍊 Oranges', '🥜 Beans', '🍞 Fortified Bread'],
        color: '#ff6b9d',
        rgba: 'rgba(255,107,157,0.1)'
    },
    {
        icon: '💪',
        name: 'Iron',
        benefit: 'Builds blood volume, prevents anemia. Low iron linked to ovulation problems and miscarriage risk.',
        need: '18 mg (27 mg if anemic)',
        foods: ['🥩 Red Meat', '🦪 Oysters', '🥬 Kale', '🫂 Lentils', '🍫 Dark Chocolate'],
        color: '#4caf50',
        rgba: 'rgba(76,175,80,0.1)'
    },
    {
        icon: '🐟',
        name: 'Omega-3 (DHA)',
        benefit: 'Improves egg quality, regulates hormones, reduces inflammation. Critical for baby\'s brain development.',
        need: '200-300 mg DHA',
        foods: ['🐟 Salmon', '🐠 Sardines', '🥚 Omega Eggs', '🥑 Walnuts', '🌰 Chia Seeds'],
        color: '#ff9800',
        rgba: 'rgba(255,152,0,0.1)'
    },
    {
        icon: '☀️',
        name: 'Vitamin D',
        benefit: 'Regulates menstrual cycles, improves egg quality. Deficiency linked to PCOS and fertility issues.',
        need: '600-1000 IU (test levels!)',
        foods: ['☀️ Sunlight 15min', '🐟 Fatty Fish', '🥚 Egg Yolks', '🥛 Fortified Milk', '🍄 Mushrooms'],
        color: '#9c27b0',
        rgba: 'rgba(156,39,176,0.1)'
    },
    {
        icon: '🦴',
        name: 'Calcium',
        benefit: 'Supports egg maturation, fertilization. Needed for baby\'s bones, teeth, heart, muscles later.',
        need: '1000 mg',
        foods: ['🥛 Milk', '🧀 Cheese', '🥦 Broccoli', '🌰 Almonds', '🐟 Sardines'],
        color: '#00bcd4',
        rgba: 'rgba(0,188,212,0.1)'
    },
    {
        icon: '🔋',
        name: 'Coenzyme Q10',
        benefit: 'Powerful antioxidant! Improves egg quality especially in women 35+. Boosts mitochondrial energy.',
        need: '100-600 mg (supplement)',
        foods: ['🥩 Organ Meats', '🐟 Fatty Fish', '🥜 Peanuts', '🥦 Broccoli', '💊 Supplement'],
        color: '#e91e63',
        rgba: 'rgba(233,30,99,0.1)'
    }
];
