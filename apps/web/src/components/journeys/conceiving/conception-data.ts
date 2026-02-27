export const CYCLE_DAY_INFO = [
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

export const PLAYGROUND_STEPS = [
    {
        tag: 'Phase 1 of 7',
        title: 'Womb Awakening',
        body: 'The uterine endometrium thickens under rising estrogen. Villi-like projections bloom from the uterine wall, swaying in the fluid environment — preparing a nutrient-rich cradle for potential implantation.',
        evidence: 'Wilcox AJ et al. NEJM 1999. Endometrial receptivity peaks during the "implantation window" (days 20–24), orchestrated by progesterone-induced HOXA10 expression. (Kao et al., Hum Reprod 2003)',
        stats: [{ n: '28', l: 'Day Cycle' }, { n: '6–10', l: 'Days Fertile' }, { n: '~30%', l: 'Peak Chance' }],
        canvasLabel: '🔬 Uterine Environment',
        navLabel: '🌸 Womb'
    },
    {
        tag: 'Phase 2 of 7',
        title: 'The Journey Begins',
        body: '200–500 million sperm are deposited at ejaculation, but only ~1,000 reach the fallopian tubes. Each sperm has a unique swimming pattern — a "fingerprint" of motility.',
        evidence: 'Suarez SS, Pacey AA. Sperm transport in the female reproductive tract. Hum Reprod Update 2006. Of 250 million sperm deposited, only 1,000–2,000 traverse the utero-tubal junction.',
        stats: [{ n: '250M', l: 'Sperm Start' }, { n: '~1,000', l: 'Reach Tube' }, { n: '3–5 days', l: 'Sperm Live' }],
        canvasLabel: '🏊 Sperm Journey',
        navLabel: '🏊 Journey'
    },
    {
        tag: 'Phase 3 of 7',
        title: 'The Race to Life',
        body: 'Hundreds of sperm surround the egg\'s zona pellucida. Only one will penetrate using acrosomal enzymes. The moment of contact triggers the cortical reaction.',
        evidence: 'Que EL et al. "Zinc sparks at fertilisation." Scientific Reports 2014. Zinc release forms a visible "spark" at the moment of fertilisation.',
        stats: [{ n: '~100', l: 'Reach Egg' }, { n: '1', l: 'Fertilises' }, { n: '24h', l: 'Egg Viable' }],
        canvasLabel: '⚡ Fertilisation Race',
        navLabel: '🏃 Race'
    },
    {
        tag: 'Phase 4 of 7',
        title: 'The Miraculous Moment',
        body: 'A single sperm penetrates the zona pellucida. Membrane fusion triggers an electrical block within milliseconds, then a sustained calcium wave prevents polyspermy.',
        evidence: 'Bhaskaran S et al. Front Cell Dev Biol 2021. The cortical reaction is completed in 20–30 minutes; zona hardening provides definitive polyspermy block.',
        stats: [{ n: '<1s', l: 'Membrane Fusion' }, { n: '20–30m', l: 'Zona Block' }, { n: '~1 in 250M', l: 'Success Rate' }],
        canvasLabel: '✨ Fertilisation Event',
        navLabel: '⚡ Fertilise'
    },
    {
        tag: 'Phase 5 of 7',
        title: 'First Cell Division',
        body: 'The zygote undergoes cleavage — 1 → 2 → 4 → 8 cells. Each division is a perfect halving without growth. By day 3, the morula (16–32 cells) travels toward the uterus.',
        evidence: 'Braude P et al. Nature 1988. Human embryonic genome activation begins at the 4–8 cell stage. Cleavage errors account for ~50–60% of early pregnancy loss.',
        stats: [{ n: '1→8', l: 'Cells in 3 Days' }, { n: 'Day 5', l: 'Blastocyst' }, { n: '~50%', l: 'Reach Blast.' }],
        canvasLabel: '🔬 Cell Division',
        navLabel: '🔬 Divide'
    },
    {
        tag: 'Phase 6 of 7',
        title: 'Blastocyst Forms',
        body: 'By day 5, the embryo has differentiated into two distinct cell populations: the inner cell mass (future baby) and trophoblast (future placenta).',
        evidence: 'Bischoff FZ et al. Hum Reprod 2002. Only ~50% of fertilised eggs form a blastocyst. Quality blastocysts (Gardner grading 3–6AA) have 40–60% implantation rates.',
        stats: [{ n: '~100', l: 'Cells at Day 5' }, { n: '50%', l: 'Reach Blastocyst' }, { n: 'Days 20–24', l: 'Implant Window' }],
        canvasLabel: '🔵 Blastocyst Stage',
        navLabel: '🔵 Blastocyst'
    },
    {
        tag: 'Phase 7 of 7',
        title: 'Implantation — Home',
        body: 'The blastocyst hatches from its zona and trophoblast fingers begin invading the receptive endometrium. hCG is secreted, signaling to the corpus luteum.',
        evidence: 'Wilcox AJ et al. NEJM 1999. Implantation failure accounts for ~75% of all pregnancy losses, most before clinical recognition.',
        stats: [{ n: 'Day 6–10', l: 'Post-Fert.' }, { n: 'hCG', l: 'First Signal' }, { n: '~75%', l: 'Loss Pre-Recog.' }],
        canvasLabel: '🏠 Implantation',
        navLabel: '🏠 Home'
    }
];

export const EVIDENCE_CARDS = [
    {
        rank: '01', icon: '📅', color: 'linear-gradient(135deg,rgba(232,53,109,.12),rgba(181,18,74,.06))',
        iconBg: 'linear-gradient(135deg,#e8356d,#b5124a)',
        title: 'Timed Intercourse During Fertile Window',
        body: 'Having intercourse on the 2 days before ovulation increases per-cycle conception probability by up to 15 percentage points.',
        impact: 95, impactLabel: 'Very High Impact',
        source: 'Wilcox AJ et al. NEJM 1995 · ACOG Practice Bulletin 2022'
    },
    {
        rank: '02', icon: '💊', color: 'linear-gradient(135deg,rgba(245,166,35,.1),rgba(230,92,0,.05))',
        iconBg: 'linear-gradient(135deg,#f5a623,#e65c00)',
        title: 'Folic Acid 400μg Daily (Pre-Conception)',
        body: 'WHO and ICMR mandate 400μg folic acid for at least 3 months before conception. Reduces neural tube defects by 70%.',
        impact: 90, impactLabel: 'Very High Impact',
        source: 'WHO 2023 Antenatal Guidelines · ICMR National Guidelines 2020'
    },
    {
        rank: '03', icon: '⚖️', color: 'linear-gradient(135deg,rgba(0,201,177,.1),rgba(0,125,111,.05))',
        iconBg: 'linear-gradient(135deg,#00c9b1,#007d6f)',
        title: 'Maintain BMI 18.5–24.9',
        body: 'Both obesity and underweight significantly disrupt ovulation. Associated with PCOS and anovulation.',
        impact: 85, impactLabel: 'High Impact',
        source: 'NFHS-5 2019–21 · Harvard School of Public Health · ACOG 2021'
    },
    {
        rank: '04', icon: '🚭', color: 'linear-gradient(135deg,rgba(124,58,237,.1),rgba(88,28,180,.05))',
        iconBg: 'linear-gradient(135deg,#7c3aed,#5b21b6)',
        title: 'Eliminate Smoking — Both Partners',
        body: 'Smoking reduces female fertility by up to 40% and reduces male sperm motility by 17%. Even passive smoke impairs receptivity.',
        impact: 88, impactLabel: 'High Impact',
        source: 'BMJ Meta-analysis 2020 · Johns Hopkins Reproductive Health'
    },
    {
        rank: '05', icon: '😴', color: 'linear-gradient(135deg,rgba(63,81,181,.1),rgba(48,63,159,.05))',
        iconBg: 'linear-gradient(135deg,#6366f1,#4338ca)',
        title: 'Sleep 7–9 Hours — Melatonin & FSH',
        body: 'Melatonin protects oocyte quality; sleep deprivation elevates cortisol which suppresses GnRH pulses.',
        impact: 72, impactLabel: 'Moderate-High',
        source: 'Chung FF et al. Fertil Steril 2019 · Oxford Sleep Research Unit'
    },
    {
        rank: '06', icon: '🧘', color: 'linear-gradient(135deg,rgba(236,72,153,.1),rgba(219,39,119,.05))',
        iconBg: 'linear-gradient(135deg,#ec4899,#db2777)',
        title: 'Stress Reduction — HPA Axis',
        body: 'Chronic stress suppresses GnRH. Psychological interventions can increase conception rates by 29%.',
        impact: 68, impactLabel: 'Moderate Impact',
        source: 'Domar AD et al. Harvard Mind-Body Institute · Neuroendocrinology 2020'
    },
    {
        rank: '07', icon: '🏃', color: 'linear-gradient(135deg,rgba(16,185,129,.1),rgba(5,150,105,.05))',
        iconBg: 'linear-gradient(135deg,#10b981,#059669)',
        title: 'Moderate Exercise — 150 min/week',
        body: 'WHO recommends 150 min/week. Improves insulin sensitivity. Strenuous exercise can suppress ovulation.',
        impact: 70, impactLabel: 'Moderate Impact',
        source: 'WHO 2020 · ACOG Exercise in Pregnancy · Vigeh et al. 2021'
    },
    {
        rank: '08', icon: '🥗', color: 'linear-gradient(135deg,rgba(245,158,11,.1),rgba(217,119,6,.05))',
        iconBg: 'linear-gradient(135deg,#f59e0b,#d97706)',
        title: 'Mediterranean Diet Pattern',
        body: 'Fertility diet (whole grains, plant protein, full-fat dairy) reduced ovulatory infertility risk by 66%.',
        impact: 76, impactLabel: 'High Impact',
        source: 'Chavarro JE et al. Fertil Steril 2018 · Harvard Nurses Study'
    },
    {
        rank: '09', icon: '🌡️', color: 'linear-gradient(135deg,rgba(239,68,68,.1),rgba(185,28,28,.05))',
        iconBg: 'linear-gradient(135deg,#ef4444,#b91c1c)',
        title: 'BBT + LH Strip Tracking',
        body: 'Combining BBT with LH strips identifies fertile window with 96% accuracy. Specifity for ovulation detection: 95.3%.',
        impact: 82, impactLabel: 'High Impact',
        source: 'Stanford F et al. AJOG 2003 · Oxford App Study 2022'
    },
    {
        rank: '10', icon: '🧬', color: 'linear-gradient(135deg,rgba(14,165,233,.1),rgba(2,132,199,.05))',
        iconBg: 'linear-gradient(135deg,#0ea5e9,#0284c7)',
        title: 'Partner Sperm Health — Antioxidants',
        body: 'Male factor contributes to ~50% cases. Antioxidants improve sperm fragments by 25% and motility by 18%.',
        impact: 80, impactLabel: 'High Impact',
        source: 'Cochrane Review 2019 · WHO Semen Analysis 2021'
    }
];

export const NUTRIENTS = [
    {
        name: 'Folic Acid', icon: '🍃', color: '#ff6b9d',
        rgba: 'rgba(255, 107, 157, 0.1)',
        benefit: 'Prevents neural tube defects. START 3 months before trying! Helps egg quality and implantation.',
        need: '400-800 mcg (supplement recommended)',
        foods: ['🥬 Spinach', '🥦 Broccoli', '🍊 Oranges', '🥜 Beans']
    },
    {
        name: 'Iron', icon: '💪', color: '#4caf50',
        rgba: 'rgba(76, 175, 80, 0.1)',
        benefit: 'Builds blood volume, prevents anemia. Low iron linked to ovulation problems and miscarriage risk.',
        need: '18 mg (27 mg if anemic)',
        foods: ['🥩 Red Meat', '🦪 Oysters', '🥬 Kale', '🫘 Lentils']
    },
    {
        name: 'Omega-3 (DHA)', icon: '🐟', color: '#ff9800',
        rgba: 'rgba(255, 152, 0, 0.1)',
        benefit: 'Improves egg quality, regulates hormones. Critical for baby\'s brain development.',
        need: '200-300 mg DHA',
        foods: ['🐟 Salmon', '🐠 Sardines', '🥚 Omega Eggs', '🥑 Walnuts']
    },
    {
        name: 'Vitamin D', icon: '☀️', color: '#9c27b0',
        rgba: 'rgba(156, 39, 176, 0.1)',
        benefit: 'Regulates menstrual cycles, improves egg quality. Deficiency linked to PCOS and fertility issues.',
        need: '600-1000 IU (test levels!)',
        foods: ['☀️ Sunlight 15min', '🐟 Fatty Fish', '🥚 Egg Yolks', '🥛 Fortified Milk']
    }
];

export const TIMELINE_ITEMS = [
    {
        month: 'Month 1',
        icon: '🩺',
        color: '#f44336',
        title: 'Schedule Check-Up',
        desc: 'Book pre-conception visit. Update vaccinations (MMR, Tdap, flu). Get blood tests (STIs, immunity, anemia). Discuss chronic conditions.',
        evidence: {
            badges: [{ text: 'WHO', color: 'pink' }, { text: 'ACOG', color: 'blue' }],
            fact: 'Pre-conception care reduces adverse perinatal outcomes by 35%; ~10% of reproductive-age women remain rubella-susceptible.',
            source: 'WHO Preconception Care Guidelines (2013); ACOG Practice Bulletin No. 762 (2019)'
        }
    },
    {
        month: 'Month 1-3',
        icon: '💊',
        color: '#ff9800',
        title: 'Start Supplements',
        desc: 'Begin prenatal vitamin with 400-800mcg folic acid DAILY. Add Vitamin D (test levels first), Omega-3, CoQ10 if 35+. No mega-doses!',
        evidence: {
            badges: [{ text: 'WHO', color: 'pink' }, { text: 'ICMR', color: 'amber' }],
            fact: '400 µg folic acid ≥4 weeks before conception cuts neural tube defect risk by 70%; ICMR recommends 500 µg for Indian women.',
            source: 'WHO Rec. (2016); ICMR-NIN Dietary Guidelines (2020); Czeizel & Dudás, NEJM (1992)'
        }
    },
    {
        month: 'Month 2',
        icon: '⚖️',
        color: '#9c27b0',
        title: 'Optimize Weight',
        desc: 'Achieve healthy BMI (18.5-24.9). Even 5-10% weight loss if overweight improves ovulation. Underweight? Gain slowly to restore cycles.',
        evidence: {
            badges: [{ text: 'ACOG', color: 'blue' }, { text: 'Lancet', color: 'pink' }],
            fact: 'Obesity (BMI ≥30) raises miscarriage risk 67% and gestational diabetes 7×; just 5–10% weight loss restores ovulation.',
            source: 'ACOG Committee Opinion No. 804 (2020); Cnattingius et al., Lancet (1996)'
        }
    },
    {
        month: 'Month 2',
        icon: '🚫',
        color: '#2196f3',
        title: 'Eliminate Toxins',
        desc: 'Stop smoking, limit alcohol to zero, reduce caffeine <200mg. Switch to BPA-free containers. Avoid raw fish, deli meats, soft cheeses.',
        evidence: {
            badges: [{ text: 'CDC', color: 'teal' }, { text: 'ACOG', color: 'blue' }, { text: 'RCOG', color: 'green' }],
            fact: 'Smoking raises miscarriage risk 27% and doubles ectopic pregnancy risk; caffeine >200 mg/day doubles miscarriage risk.',
            source: 'CDC (2016); ACOG PB No. 106 (2010); RCOG Scientific Impact Paper No. 57 (2015)'
        }
    },
    {
        month: 'Month 3',
        icon: '📊',
        color: '#4caf50',
        title: 'Track Ovulation',
        desc: 'Use ovulation predictor kits or basal thermometer. Chart cervical mucus. Identify your 5-6 day fertile window. Time intercourse every 1-2 days.',
        evidence: {
            badges: [{ text: 'NICE', color: 'teal' }, { text: 'ASRM', color: 'blue' }],
            fact: 'LH-surge OPKs detect ovulation with ~97% specificity; intercourse 2 days before ovulation yields ~30% conception probability per cycle.',
            source: 'NICE NG156 (2020); ASRM Practice Committee Opinion (2017); Wilcox et al., NEJM (1995)'
        }
    },
    {
        month: 'Month 3+',
        icon: '🎯',
        color: '#00bcd4',
        title: 'Start Trying!',
        desc: 'Have sex every 1-2 days during fertile window. Don\'t stress timing too much - stress blocks conception. Stay relaxed and enjoy the process!',
        evidence: {
            badges: [{ text: 'NICE', color: 'teal' }, { text: 'ESHRE', color: 'purple' }],
            fact: '84% of couples conceive within 12 months; elevated cortisol suppresses GnRH pulsatility — mindfulness interventions improve conception rates.',
            source: 'NICE NG156 (2020); ESHRE Capri Workshop (2000); Domar et al., Fertil Steril (2011)'
        }
    }
];
