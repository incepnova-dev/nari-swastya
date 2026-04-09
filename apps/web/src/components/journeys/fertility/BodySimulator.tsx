/**
 * Bio-Digital Body Twin / Fertility Simulator
 * A complex interactive component that visualizes hormonal changes and physiological
 * responses throughout the menstrual cycle. Features real-time hormonal graphs,
 * anatomical visualizations, and lifestyle impact modifiers.
 */
import React, { useState, useEffect, useCallback } from 'react';
import '../../../styles/journey/fertility/body-simulator.css';
import '../../../styles/journey/fertility/fertility-header.css';

// --- DATA CONSTANTS ---
const CYCLE_PHASES = {
    menstrual: { name: 'Menstrual', days: [1, 5], icon: '🩸', color: '#e91e63', next: 'follicular' },
    follicular: { name: 'Follicular', days: [6, 13], icon: '🌱', color: '#4caf50', next: 'ovulation' },
    ovulation: { name: 'Ovulation', days: [14, 15], icon: '✨', color: '#ffc107', next: 'luteal' },
    luteal: { name: 'Luteal', days: [16, 28], icon: '🌕', color: '#00acc1', next: 'menstrual' }
};

const HORMONE_DATA = {
    e2: [20, 20, 25, 30, 40, 55, 80, 120, 180, 250, 320, 400, 280, 150, 120, 140, 180, 210, 230, 240, 230, 200, 160, 110, 70, 50, 30, 20],
    prog: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 10, 25, 40, 60, 80, 110, 140, 160, 170, 150, 110, 70, 30, 15, 8, 5],
    lh: [10, 10, 10, 10, 10, 10, 12, 14, 16, 18, 25, 85, 100, 20, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
    fsh: [15, 18, 22, 25, 20, 15, 12, 10, 10, 10, 15, 35, 40, 15, 10, 8, 8, 8, 8, 8, 8, 8, 10, 12, 15, 15, 15, 15],
    bbt: [97.4, 97.3, 97.3, 97.2, 97.2, 97.2, 97.1, 97.1, 97.2, 97.1, 97.1, 97.2, 97.0, 97.6, 97.9, 98.1, 98.2, 98.3, 98.4, 98.4, 98.3, 98.3, 98.2, 98.0, 97.8, 97.6, 97.5, 97.4]
};

const INSIGHTS = {
    menstrual: {
        title: 'The Menstrual Phase',
        desc: 'Hormones drop to their lowest levels, triggering the shedding of the uterine lining. Your body is resetting for a new cycle.',
        feelTitle: '🩸 How you may feel',
        feelDesc: 'Fatigue, mild to moderate lower back or pelvic cramping, breast tenderness resolving, introspection and desire for rest.',
        feelChips: ['Fatigue', 'Cramping', 'Low Energy', 'Introspection'],
        doTitle: '💡 What to focus on',
        doDesc: 'Prioritize rest, hydration, and iron-rich foods. Gentle movement like walking or restorative yoga. Avoid strenuous workouts.',
        doTag: 'ACOG Evidence',
        sim: [
            { id: 'Brain', icon: '🧠', bg: '#fde8ec', label: 'Hypothalamus', desc: 'Mild GnRH pulsing restarts to slowly awaken ovaries.' },
            { id: 'Pit', icon: '💜', bg: '#ede7f6', label: 'Pituitary', desc: 'Slight FSH release begins to select next follicles.' },
            { id: 'Ovary', icon: '🥚', bg: '#fff3e0', label: 'Ovaries', desc: 'Quiet. Tiny antral follicles begin competing.' },
            { id: 'Ut', icon: '❤️', bg: '#fce4ec', label: 'Uterus — Shedding', desc: 'Endometrium sloughing off; lining thin (2-4mm).' }
        ],
        bbtLabel: '97.3°', bbtHeight: '35%'
    },
    follicular: {
        title: 'The Follicular Phase',
        desc: 'FSH stimulates follicle growth. As the dominant follicle matures, it produces rising oestrogen, thickening the uterine lining.',
        feelTitle: '🌱 How you may feel',
        feelDesc: 'Rising energy, improved mood and mental clarity. Cervical mucus transitions from dry to sticky/creamy.',
        feelChips: ['Rising Energy', 'Clear Mind', 'Optimism', 'Creamy Mucus'],
        doTitle: '💡 What to focus on',
        doDesc: 'Great time for intense workouts and complex tasks. Eat cruciferous veggies to support estrogen metabolism.',
        doTag: 'Endocrine Society',
        sim: [
            { id: 'Brain', icon: '🧠', bg: '#fde8ec', label: 'Hypothalamus', desc: 'Steady GnRH pulses.' },
            { id: 'Pit', icon: '💜', bg: '#ede7f6', label: 'Pituitary', desc: 'Moderate FSH driving follicle selection.' },
            { id: 'Ovary', icon: '🥚', bg: '#fff3e0', label: 'Ovaries — Follicle Growth', desc: 'One dominant follicle taking the lead, producing E2.' },
            { id: 'Ut', icon: '❤️', bg: '#fce4ec', label: 'Uterus — Proliferative', desc: 'Lining thickening (5-7mm) in response to oestrogen.' }
        ],
        bbtLabel: '97.1°', bbtHeight: '30%'
    },
    ovulation: {
        title: 'The Ovulation Phase',
        desc: 'A surge of LH triggers the dominant follicle to rupture and release a mature egg. The egg travels through the fallopian tube toward the uterus.',
        feelTitle: '🌸 How you may feel',
        feelDesc: 'Heightened energy and libido, mild one-sided pelvic twinge (mittelschmerz), clear stretchy discharge.',
        feelChips: ['High Energy', 'Increased Libido', 'Mittelschmerz', 'Egg-white Mucus'],
        doTitle: '💡 What to focus on',
        doDesc: 'Have intercourse today and tomorrow. Use OPK strips to confirm LH surge.',
        doTag: 'ASRM Evidence',
        sim: [
            { id: 'Brain', icon: '🧠', bg: '#fde8ec', label: 'Hypothalamus', desc: 'Rapid GnRH pulsing.' },
            { id: 'Pit', icon: '💜', bg: '#ede7f6', label: 'Pituitary — LH Surge', desc: 'Peak LH surge triggering follicle rupture.' },
            { id: 'Ovary', icon: '🥚', bg: '#fff3e0', label: 'Right Ovary — Egg Released', desc: 'Follicle ruptured; egg swept by fimbriae into tube.' },
            { id: 'Ut', icon: '❤️', bg: '#fce4ec', label: 'Uterus — Lining 9mm', desc: 'Endometrium fully built; receptive window opening.' }
        ],
        bbtLabel: '97.6°', bbtHeight: '50%'
    },
    luteal: {
        title: 'The Luteal Phase',
        desc: 'The ruptured follicle becomes the corpus luteum, producing progesterone. If no pregnancy occurs, the corpus luteum breaks down.',
        feelTitle: '🌕 How you may feel',
        feelDesc: 'Decreasing energy, potential PMS symptoms (bloating, breast swelling, mood changes). Mucus dries up.',
        feelChips: ['Lower Energy', 'Bloating', 'Mood Shifts', 'Dry Mucus'],
        doTitle: '💡 What to focus on',
        doDesc: 'Support serotonin with complex carbs. Switch to low-impact exercise if fatigued. Stress management is key.',
        doTag: 'ACOG Evidence',
        sim: [
            { id: 'Brain', icon: '🧠', bg: '#fde8ec', label: 'Hypothalamus', desc: 'Slower, high-amplitude GnRH pulses.' },
            { id: 'Pit', icon: '💜', bg: '#ede7f6', label: 'Pituitary', desc: 'Suppressed LH & FSH due to high progesterone.' },
            { id: 'Ovary', icon: '🥚', bg: '#fff3e0', label: 'Ovary — Corpus Luteum', desc: 'Corpus luteum pumping out progesterone.' },
            { id: 'Ut', icon: '❤️', bg: '#fce4ec', label: 'Uterus — Secretory', desc: 'Lining structurally stable, waiting for implantation.' }
        ],
        bbtLabel: '98.3°', bbtHeight: '85%'
    }
};

const TOOLTIP_DATA: Record<string, { title: string; body: string; tag: string }> = {
    brain: {
        title: '🧠 Hypothalamus',
        body: 'The hypothalamus releases GnRH (gonadotropin-releasing hormone) in pulsatile bursts. Pulse frequency and amplitude change across the cycle to orchestrate FSH and LH release from the pituitary.',
        tag: 'Neuroendocrine Centre'
    },
    pituitary: {
        title: '💜 Pituitary Gland',
        body: 'The anterior pituitary secretes FSH and LH in response to GnRH. These gonadotropins regulate ovarian follicle development, ovulation, and corpus luteum function.',
        tag: 'Master Endocrine Gland'
    },
    ovaryL: {
        title: '🩷 Left Ovary',
        body: 'Contains thousands of primordial follicles. Each cycle, several antral follicles are recruited, but typically only one becomes dominant and ovulates. The ovary also produces oestrogen, progesterone, and androgens.',
        tag: 'Reproductive Organ'
    },
    ovaryR: {
        title: '🩷 Right Ovary',
        body: 'Functions identically to the left ovary. Ovulation alternates between ovaries, though not strictly every other cycle. The dominant follicle is selected based on FSH sensitivity.',
        tag: 'Reproductive Organ'
    },
    uterus: {
        title: '❤️ Uterus',
        body: 'The endometrium undergoes cyclical changes: proliferative phase (oestrogen-driven thickening), secretory phase (progesterone-driven glandular development), and menstruation if no implantation occurs.',
        tag: 'ACOG Reference'
    },
    tubes: {
        title: '〰️ Fallopian Tubes',
        body: 'The fimbriae sweep the released egg into the tube. Ciliated cells and muscular contractions transport the egg toward the uterus. Fertilisation typically occurs in the ampulla of the tube.',
        tag: 'Reproductive Anatomy'
    }
};

export const BodySimulator: React.FC = () => {
    const [currentDay, setCurrentDay] = useState(14);
    const [activePhase, setActivePhase] = useState('ovulation');
    const [isPlaying, setIsPlaying] = useState(false);

    // Lifestyle Modifiers
    const [lifestyle, setLifestyle] = useState({
        stress: true,
        sleep: false,
        diet: false,
        exercise: false
    });

    // Tooltip state
    const [tooltip, setTooltip] = useState<{ key: string; x: number; y: number } | null>(null);

    const showTip = (key: string, e: React.MouseEvent) => {
        const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
        setTooltip({ key, x: rect.right + 12, y: rect.top - 10 });
    };

    const hideTip = () => setTooltip(null);

    // Handle day change via slider or timer
    const handleDayChange = useCallback((day: number) => {
        setCurrentDay(day);

        // Determine phase based on day
        let newPhase = 'menstrual';
        if (day >= 6 && day <= 13) newPhase = 'follicular';
        if (day >= 14 && day <= 15) newPhase = 'ovulation';
        if (day >= 16) newPhase = 'luteal';

        setActivePhase(newPhase);
    }, []);

    const togglePhase = (phase: string) => {
        setIsPlaying(false);
        setActivePhase(phase);
        const day = CYCLE_PHASES[phase as keyof typeof CYCLE_PHASES].days[0];
        handleDayChange(day);
    };

    const toggleSim = () => setIsPlaying(!isPlaying);

    const toggleLM = (mod: keyof typeof lifestyle) => {
        setLifestyle(prev => ({ ...prev, [mod]: !prev[mod] }));
    };

    // Auto-play simulation logic
    useEffect(() => {
        let timer: ReturnType<typeof setInterval>;
        if (isPlaying) {
            timer = setInterval(() => {
                setCurrentDay(prev => {
                    const next = prev >= 28 ? 1 : prev + 1;
                    handleDayChange(next);
                    return next;
                });
            }, 1200);
        }
        return () => clearInterval(timer);
    }, [isPlaying, handleDayChange]);

    // Data computation for current day
    const dayIdx = currentDay - 1;
    const e2Val = HORMONE_DATA.e2[dayIdx];
    const progVal = HORMONE_DATA.prog[dayIdx];
    const lhVal = HORMONE_DATA.lh[dayIdx];
    const fshVal = HORMONE_DATA.fsh[dayIdx];
    const bbtVal = HORMONE_DATA.bbt[dayIdx];

    const e2Pct = Math.min(100, Math.max(5, (e2Val / 400) * 100));
    const progPct = Math.min(100, Math.max(5, (progVal / 170) * 100));
    const lhPct = Math.min(100, Math.max(5, (lhVal / 100) * 100));
    const fshPct = Math.min(100, Math.max(5, (fshVal / 40) * 100));

    // Derived states
    const insight = INSIGHTS[activePhase as keyof typeof INSIGHTS];
    const isOvulation = currentDay === 14 || currentDay === 15;
    const isMenstruation = currentDay >= 1 && currentDay <= 5;
    const isLuteal = currentDay >= 16;
    const isFollicular = currentDay >= 6 && currentDay <= 13;
    const isPeakFertility = currentDay >= 12 && currentDay <= 15;

    // Determine string labels for hormones based on %
    const getLevelText = (pct: number, highThresh: number = 70, lowThresh: number = 20) => {
        if (pct >= highThresh) return 'High';
        if (pct <= lowThresh) return 'Low';
        return 'Moderate';
    };

    const lhLabel = isOvulation ? 'Surging' : getLevelText(lhPct);

    // Lifestyle text
    let lmImpactText = "Your lifestyle is generally supporting a balanced cycle.";
    if (lifestyle.stress) {
        lmImpactText = "⚡ High Stress Impact: Elevated cortisol suppresses GnRH pulses, disrupting LH surge timing and potentially delaying or skipping ovulation. Chronic stress shortens the luteal phase and worsens PMS.";
    } else if (lifestyle.sleep) {
        lmImpactText = "💤 Sleep Impact: Consistent 7-9 hours of sleep regulates melatonin, which acts directly on the ovaries to protect egg quality from oxidative stress.";
    } else if (lifestyle.diet) {
        lmImpactText = "🥑 Diet Impact: Antioxidant-rich foods help mitigate cellular damage to developing follicles, while balanced blood sugar prevents excessive testosterone production.";
    } else if (lifestyle.exercise) {
        lmImpactText = "🏃‍♀️ Exercise Impact: Moderate exercise improves blood flow to reproductive organs. Avoid overtraining which can suppress the HPO axis and halt ovulation.";
    }

    return (
        <>
            {/* Breadcrumbs Banner (Separate Container) */}
            <div style={{ maxWidth: '1240px', margin: '2rem auto 1.5rem', background: 'white', borderRadius: '12px', padding: '0.8rem 1.5rem', boxShadow: '0 2px 10px rgba(0,0,0,0.02)' }}>
                <nav className="breadcrumb" aria-label="Breadcrumb" style={{ fontSize: '0.85rem', fontFamily: '"DM Sans", sans-serif', display: 'flex', alignItems: 'center' }}>
                    <a href="/" style={{ color: '#e8526a', textDecoration: 'none', fontWeight: 500 }}>Home</a>
                    <span style={{ margin: '0 0.6rem', color: '#e5e7eb' }}>›</span>
                    <a href="/journeys" style={{ color: '#e8526a', textDecoration: 'none', fontWeight: 500 }}>Women's Health Journeys</a>
                    <span style={{ margin: '0 0.6rem', color: '#e5e7eb' }}>›</span>
                    <span style={{ color: '#6b7280' }}>Fertility Guide</span>
                </nav>
            </div>

            <section className="body-simulator-section fade-in-up" id="simulator" aria-label="Bio-Digital Body Twin Fertility Simulator">
                <div className="section-header">
                    <div className="header-badge">LIVE SIMULATION</div>
                    <h2 className="section-title"><span className="title-black">Bio-Digital</span> Body Twin</h2>
                    <p className="section-subtitle">Travel through your cycle day-by-day to see the hidden choreography of your fertility.</p>
                </div>

                {/* Phase buttons */}
                <div className="phase-bar">
                    {Object.entries(CYCLE_PHASES).map(([key, data]) => (
                        <button
                            key={key}
                            className={`phase-btn ${activePhase === key ? 'active' : ''}`}
                            data-phase={key}
                            onClick={() => togglePhase(key)}
                        >
                            {data.icon} {data.name} · Day {data.days[0]}-{data.days[1]}
                        </button>
                    ))}
                </div>

                <div className="main-layout">

                    {/* LEFT: Controls & Hormone Panel */}
                    <div className="controls-col">
                        {/* Time Travel Slider */}
                        <div className="ctt-card">
                            <h3>⏳ Cycle Time Travel</h3>
                            <div className="ctt-day-row">
                                <span className="ctt-day-lbl">Current Day</span>
                                <span className="ctt-day-num">Day {currentDay}</span>
                            </div>
                            <div className="ctt-slider-wrap">
                                <input
                                    type="range"
                                    className="ctt-range"
                                    min="1" max="28"
                                    value={currentDay}
                                    onChange={(e) => handleDayChange(parseInt(e.target.value))}
                                />
                                <div className="ctt-track-colors"></div>
                                <div className="ctt-day-ticks">
                                    <span>1</span><span>7</span><span>14</span><span>21</span><span>28</span>
                                </div>
                            </div>
                            <button className={`ctt-sim-btn ${isPlaying ? 'stop' : 'start'}`} onClick={toggleSim}>
                                {isPlaying ? '⏸ Stop Simulation' : '▶ Start Simulation'}
                            </button>
                        </div>

                        {/* Hormone Levels Panel */}
                        <div className="hormone-col" style={{ paddingTop: 0, marginBottom: '1rem' }}>
                            <div className="hormone-panel">
                                <h3>Hormone Levels</h3>

                                <div className="h-row">
                                    <div className="h-label">
                                        <span className="h-name">Oestrogen (E2)</span>
                                        <span className="h-val">{getLevelText(e2Pct)}</span>
                                    </div>
                                    <div className="h-track">
                                        <div className="h-fill" style={{ width: `${e2Pct}%`, background: '#ce93d8' }}></div>
                                    </div>
                                </div>

                                <div className="h-row">
                                    <div className="h-label">
                                        <span className="h-name">Progesterone</span>
                                        <span className="h-val">{getLevelText(progPct)}</span>
                                    </div>
                                    <div className="h-track">
                                        <div className="h-fill" style={{ width: `${progPct}%`, background: '#81c784' }}></div>
                                    </div>
                                </div>

                                <div className="h-row">
                                    <div className="h-label">
                                        <span className="h-name">LH (Luteinising)</span>
                                        <span className="h-val">{getLevelText(lhPct)}</span>
                                    </div>
                                    <div className="h-track">
                                        <div className="h-fill" style={{ width: `${lhPct}%`, background: '#ffca28' }}></div>
                                    </div>
                                </div>

                                <div className="h-row">
                                    <div className="h-label">
                                        <span className="h-name">FSH</span>
                                        <span className="h-val">{getLevelText(fshPct)}</span>
                                    </div>
                                    <div className="h-track">
                                        <div className="h-fill" style={{ width: `${fshPct}%`, background: '#f48fb1' }}></div>
                                    </div>
                                </div>

                                <div className="h-row">
                                    <div className="h-label">
                                        <span className="h-name">GnRH Pulse</span>
                                        <span className="h-val">{isOvulation ? 'Rapid' : (isLuteal ? 'Slow' : 'Active')}</span>
                                    </div>
                                    <div className="h-track">
                                        <div className="h-fill" style={{ width: isOvulation ? '90%' : (isLuteal ? '40%' : '70%'), background: '#ba68c8', opacity: isPlaying ? 0.7 : 0.4 }}></div>
                                    </div>
                                </div>

                                <div className="h-row" style={{ marginBottom: 0 }}>
                                    <div className="h-label">
                                        <span className="h-name">BBT</span>
                                        <span className="h-val">{insight.bbtLabel}</span>
                                    </div>
                                    <div className="h-track">
                                        <div className="h-fill" style={{ width: insight.bbtHeight, background: '#ffb74d' }}></div>
                                    </div>
                                </div>

                                {/* Cycle timeline below hormones */}
                                <div className="cycle-timeline">
                                    <div className="ct-track">
                                        <div className="ct-segment" style={{ left: '0%', width: '17.8%', background: '#e8526a' }} title="Menstrual"></div>
                                        <div className="ct-segment" style={{ left: '17.8%', width: '32.1%', background: '#9b6db0' }} title="Follicular"></div>
                                        <div className="ct-segment" style={{ left: '50%', width: '7.1%', background: '#f4a335' }} title="Ovulation"></div>
                                        <div className="ct-segment" style={{ left: '57.1%', width: '42.9%', background: '#5fbfb0' }} title="Luteal"></div>
                                        {/* Moving dot */}
                                        <div className="ct-dot" style={{ left: `${(currentDay / 28) * 100}%` }}></div>
                                    </div>
                                    <div className="ct-labels">
                                        <span>Day 1</span><span>Day 7</span><span>Day 14</span><span>Day 21</span><span>Day 28</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* ── Body Simulation ── */}
                        <div className="sim-card">
                            <h3>🔬 Body Simulation</h3>
                            {insight.sim.map((item, idx) => (
                                <div className="sim-row" key={item.id} style={idx === insight.sim.length - 1 ? { marginBottom: 0 } : {}}>
                                    <div className="sim-icon" style={{ background: item.bg }}>{item.icon}</div>
                                    <div className="sim-text">
                                        <div className="sim-label">{item.label}</div>
                                        <div className="sim-desc">{item.desc}</div>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>

                    {/* CENTRE: Woman figure */}
                    <div className="body-col">
                        <div className="day-pill">
                            <span>Cycle</span>
                            <strong>Day {currentDay}</strong>
                            <span style={{ color: CYCLE_PHASES[activePhase as keyof typeof CYCLE_PHASES].color }}>
                                {CYCLE_PHASES[activePhase as keyof typeof CYCLE_PHASES].icon} {CYCLE_PHASES[activePhase as keyof typeof CYCLE_PHASES].name}
                            </span>
                        </div>

                        <div className="body-figure">
                            <svg id="womanBody" viewBox="0 0 340 640" xmlns="http://www.w3.org/2000/svg" overflow="visible">
                                <defs>
                                    {/* Body gradient */}
                                    <linearGradient id="skinGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop id="skinStop1" offset="0%" stopColor="#fff5f8" />
                                        <stop id="skinStop2" offset="100%" stopColor="#fde8ec" />
                                    </linearGradient>
                                    {/* Uterus gradient */}
                                    <linearGradient id="utGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                                        <stop offset="0%" stopColor="#fce4ec" />
                                        <stop offset="100%" stopColor="#f8bbd0" />
                                    </linearGradient>
                                    {/* Glow filter */}
                                    <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                                        <feGaussianBlur stdDeviation="3" result="blur" />
                                        <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                                    </filter>
                                    <filter id="softGlow" x="-60%" y="-60%" width="220%" height="220%">
                                        <feGaussianBlur stdDeviation="5" result="blur" />
                                        <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                                    </filter>
                                    <filter id="bodyGlow" x="-20%" y="-10%" width="140%" height="120%">
                                        <feGaussianBlur stdDeviation="8" result="blur" />
                                        <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                                    </filter>
                                    {/* Hair gradient */}
                                    <linearGradient id="hairGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                                        <stop offset="0%" stopColor="#f48fb1" />
                                        <stop offset="100%" stopColor="#ec407a" stopOpacity="0.3" />
                                    </linearGradient>
                                    {/* Aura radial */}
                                    <radialGradient id="auraGrad" cx="50%" cy="50%" r="50%">
                                        <stop offset="0%" stopColor="#fce4ec" stopOpacity="0.6" />
                                        <stop offset="100%" stopColor="#fce4ec" stopOpacity="0" />
                                    </radialGradient>
                                </defs>

                                {/* ── Soft body aura glow ── */}
                                <ellipse id="bodyAura" cx="170" cy="340" rx="90" ry="200" fill="url(#auraGrad)" opacity="0.5" />

                                {/* ── SIMULATION OVERLAYS ── */}

                                {/* Phase aura ring around whole body - removed per user request */}

                                {/* Menstrual bleeding drops group */}
                                <g opacity={isMenstruation ? 1 : 0} style={{ transition: 'opacity 0.8s ease' }}>
                                    <ellipse cx="170" cy="420" rx="4" ry="6" fill="#e8526a" opacity="0.7">
                                        <animate attributeName="cy" values="400;450" dur="1.8s" repeatCount="indefinite" />
                                        <animate attributeName="opacity" values="0.8;0" dur="1.8s" repeatCount="indefinite" />
                                    </ellipse>
                                    <ellipse cx="163" cy="415" rx="3" ry="4.5" fill="#c62828" opacity="0.6">
                                        <animate attributeName="cy" values="395;445" dur="2.2s" begin="0.4s" repeatCount="indefinite" />
                                        <animate attributeName="opacity" values="0.7;0" dur="2.2s" begin="0.4s" repeatCount="indefinite" />
                                    </ellipse>
                                    <ellipse cx="177" cy="410" rx="2.5" ry="4" fill="#e53935" opacity="0.5">
                                        <animate attributeName="cy" values="390;440" dur="2s" begin="0.9s" repeatCount="indefinite" />
                                        <animate attributeName="opacity" values="0.6;0" dur="2s" begin="0.9s" repeatCount="indefinite" />
                                    </ellipse>
                                </g>

                                {/* Follicle growth glow on right ovary */}
                                <circle cx="268" cy="370" r={isFollicular || isOvulation ? (currentDay - 5) * 1.5 : 0}
                                    fill="none" stroke="#9b6db0" strokeWidth="3" opacity={isFollicular ? 0.6 : (isOvulation ? 1 : 0)}
                                    style={{ transition: 'all 0.9s ease', filter: 'url(#softGlow)' }} />
                                <circle cx="268" cy="370" r={isFollicular || isOvulation ? (currentDay - 5) * 1 : 0}
                                    fill="#e1bee7" opacity={isFollicular ? 0.8 : (isOvulation ? 1 : 0)}
                                    style={{ transition: 'all 0.9s ease' }} />

                                {/* Egg burst sparkle (ovulation) */}
                                <g opacity={isOvulation ? 1 : 0} style={{ transition: 'opacity 0.6s ease' }}>
                                    <circle cx="268" cy="365" r="18" fill="none" stroke="#f4a335" strokeWidth="2.5" opacity="0.6">
                                        <animate attributeName="r" values="12;26;12" dur="1.4s" repeatCount="indefinite" />
                                        <animate attributeName="opacity" values="0.7;0;0.7" dur="1.4s" repeatCount="indefinite" />
                                    </circle>
                                    <circle cx="268" cy="365" r="8" fill="#ffd54f" opacity="0.85" filter="url(#glow)">
                                        <animate attributeName="r" values="7;10;7" dur="1.4s" repeatCount="indefinite" />
                                    </circle>
                                    {/* Burst rays */}
                                    <line x1="268" y1="348" x2="268" y2="340" stroke="#f4a335" strokeWidth="2" strokeLinecap="round">
                                        <animate attributeName="opacity" values="1;0.2;1" dur="1.4s" repeatCount="indefinite" />
                                    </line>
                                    <line x1="280" y1="353" x2="286" y2="347" stroke="#f4a335" strokeWidth="2" strokeLinecap="round">
                                        <animate attributeName="opacity" values="0.8;0.1;0.8" dur="1.4s" begin="0.1s" repeatCount="indefinite" />
                                    </line>
                                    <line x1="256" y1="353" x2="250" y2="347" stroke="#f4a335" strokeWidth="2" strokeLinecap="round">
                                        <animate attributeName="opacity" values="0.8;0.1;0.8" dur="1.4s" begin="0.2s" repeatCount="indefinite" />
                                    </line>
                                    <line x1="284" y1="365" x2="293" y2="365" stroke="#f4a335" strokeWidth="2" strokeLinecap="round">
                                        <animate attributeName="opacity" values="0.9;0.1;0.9" dur="1.4s" begin="0.15s" repeatCount="indefinite" />
                                    </line>
                                    <line x1="252" y1="365" x2="243" y2="365" stroke="#f4a335" strokeWidth="2" strokeLinecap="round">
                                        <animate attributeName="opacity" values="0.9;0.1;0.9" dur="1.4s" begin="0.25s" repeatCount="indefinite" />
                                    </line>
                                </g>

                                {/* Corpus luteum (luteal) */}
                                <g opacity={isLuteal ? 1 : 0} style={{ transition: 'opacity 0.8s ease' }}>
                                    <circle cx="268" cy="370" r={14 - ((currentDay - 16) * 0.5)} fill="#a5d6a7" stroke="#43a047" strokeWidth="2" filter="url(#softGlow)" />
                                    <text x="268" y="374" textAnchor="middle" fontSize="7.5" fill="#1b5e20" fontFamily="DM Sans" fontWeight="700">CL</text>
                                </g>

                                {/* Brain glow intensity */}
                                <ellipse cx="170" cy="65" rx={isOvulation ? 35 : 25} ry={isOvulation ? 30 : 20}
                                    fill="#e1bee7" opacity={isOvulation ? 0.6 : 0.3} style={{ transition: 'all 0.8s ease' }} />

                                {/* Uterus lining thickness indicator */}
                                <g opacity={1} style={{ transition: 'opacity 0.8s ease' }}>
                                    <rect x="98" y="330" width="8" height="80" rx="4" fill="#f3e5f5" stroke="#ce93d8" strokeWidth="1.5" />
                                    <rect x="98" y={390 - ((isMenstruation ? 0 : (isFollicular ? (currentDay - 5) * 5 : 45)))} width="8" height={20 + ((isMenstruation ? 0 : (isFollicular ? (currentDay - 5) * 5 : 45)))} rx="4" fill="#e91e63" opacity="0.75" style={{ transition: 'all 0.5s' }} />
                                    <text x="108" y="336" fontSize="7" fill="#880e4f" fontFamily="DM Sans" fontWeight="600">Lining</text>
                                    <text x="108" y="412" fontSize="8" fill="#880e4f" fontFamily="DM Sans" fontWeight="700">
                                        {isMenstruation ? '2mm' : (isFollicular ? `${2 + Math.floor((currentDay - 5) * 0.5)}mm` : '9mm')}
                                    </text>
                                </g>

                                {/* HPO axis pulse intensity */}
                                <g opacity={1} style={{ transition: 'opacity 0.8s ease' }}>
                                    <circle r="5" fill="#9c27b0" opacity="0.9">
                                        <animateMotion dur={isOvulation ? "0.8s" : "1.4s"} repeatCount="indefinite"
                                            path="M 170 105 C 168 155 135 205 96 300" />
                                    </circle>
                                    <circle r="4" fill="#e91e63" opacity="0.85">
                                        <animateMotion dur={isOvulation ? "0.8s" : "1.4s"} begin="0.45s" repeatCount="indefinite"
                                            path="M 170 105 C 172 155 205 205 244 300" />
                                    </circle>
                                    <circle r="3.5" fill="#f4a335" opacity="0.8">
                                        <animateMotion dur={isOvulation ? "0.8s" : "1.4s"} begin="0.9s" repeatCount="indefinite"
                                            path="M 170 105 C 168 155 135 205 96 300" />
                                    </circle>
                                </g>

                                {/* Skin flush / warmth overlay (luteal phase) */}
                                <ellipse cx="170" cy="270" rx="80" ry="140"
                                    fill={isLuteal ? "rgba(255,138,101,0.15)" : "rgba(255,138,101,0.0)"} opacity={isLuteal ? 1 : 0}
                                    style={{ transition: 'all 1s ease' }} />

                                {/* ── HAIR ── */}
                                {/* Long flowing hair behind */}
                                <path d="M 134 68 Q 110 100 105 160 Q 102 200 108 240 Q 112 260 115 280" stroke="url(#hairGrad)" strokeWidth="14" fill="none" strokeLinecap="round" opacity="0.55" />
                                <path d="M 140 65 Q 118 100 115 155 Q 112 195 116 230" stroke="#f8bbd0" strokeWidth="8" fill="none" strokeLinecap="round" opacity="0.4" />
                                <path d="M 208 68 Q 230 100 235 155 Q 238 195 234 230" stroke="url(#hairGrad)" strokeWidth="14" fill="none" strokeLinecap="round" opacity="0.55" />
                                <path d="M 202 65 Q 222 100 225 150 Q 228 190 224 225" stroke="#f8bbd0" strokeWidth="8" fill="none" strokeLinecap="round" opacity="0.4" />
                                {/* Top hair cap */}
                                <ellipse cx="170" cy="56" rx="42" ry="18" fill="url(#hairGrad)" opacity="0.55" />
                                <path d="M 130 56 Q 130 30 170 26 Q 210 30 210 56" fill="url(#hairGrad)" opacity="0.5" />
                                {/* Hair strands */}
                                <path d="M 150 38 Q 145 50 148 65" stroke="#f48fb1" strokeWidth="2.5" fill="none" opacity="0.6" />
                                <path d="M 165 30 Q 163 45 165 62" stroke="#f48fb1" strokeWidth="2.5" fill="none" opacity="0.5" />
                                <path d="M 180 32 Q 182 46 180 62" stroke="#f48fb1" strokeWidth="2.5" fill="none" opacity="0.6" />
                                <path d="M 193 38 Q 196 52 193 66" stroke="#f48fb1" strokeWidth="2.5" fill="none" opacity="0.5" />

                                {/* ── HEAD ── */}
                                {/* Jaw / face shape — feminine oval */}
                                <path d="M 140 68 Q 135 100 138 118 Q 145 136 170 142 Q 195 136 202 118 Q 205 100 200 68 Z" fill="url(#skinGrad)" stroke="#f9c6ce" strokeWidth="1.5" opacity="0.9" />
                                {/* Cranium */}
                                <ellipse cx="170" cy="68" rx="34" ry="36" fill="url(#skinGrad)" stroke="#f9c6ce" strokeWidth="1.5" opacity="0.85" />
                                {/* Ears */}
                                <ellipse cx="136" cy="85" rx="5" ry="8" fill="#fde8ec" stroke="#f9c6ce" strokeWidth="1" />
                                <ellipse cx="204" cy="85" rx="5" ry="8" fill="#fde8ec" stroke="#f9c6ce" strokeWidth="1" />
                                {/* Face features — eyes */}
                                <ellipse cx="158" cy="76" rx="5" ry="3.5" fill="#a07080" opacity="0.85" />
                                <ellipse cx="182" cy="76" rx="5" ry="3.5" fill="#a07080" opacity="0.85" />
                                {/* Eye shine */}
                                <circle cx="160" cy="75" r="1.2" fill="white" opacity="0.8" />
                                <circle cx="184" cy="75" r="1.2" fill="white" opacity="0.8" />
                                {/* Eyebrows */}
                                <path d="M 153 70 Q 158 67 163 69" stroke="#c07090" strokeWidth="1.8" fill="none" strokeLinecap="round" />
                                <path d="M 177 69 Q 182 67 187 70" stroke="#c07090" strokeWidth="1.8" fill="none" strokeLinecap="round" />
                                {/* Nose */}
                                <path d="M 168 80 Q 165 90 168 95 Q 170 97 172 95 Q 175 90 172 80" stroke="#d4909a" strokeWidth="1" fill="none" opacity="0.5" />
                                {/* Lips */}
                                <path d="M 161 107 Q 165 104 170 105 Q 175 104 179 107" stroke="#e8526a" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.7" />
                                <path d="M 161 107 Q 165 112 170 112 Q 175 112 179 107" stroke="#e8526a" strokeWidth="1.5" fill="#f9c6ce" opacity="0.5" />
                                {/* Cheek blush */}
                                <ellipse cx="148" cy="97" rx="10" ry="6" fill="#f9c6ce" opacity={isFollicular || isOvulation ? 0.6 : 0.3} />
                                <ellipse cx="192" cy="97" rx="10" ry="6" fill="#f9c6ce" opacity={isFollicular || isOvulation ? 0.6 : 0.3} />

                                {/* ── NECK ── */}
                                <path d="M 158 138 L 155 158 Q 170 164 185 158 L 182 138" fill="url(#skinGrad)" stroke="#f9c6ce" strokeWidth="1.2" opacity="0.8" />
                                <path d="M 122 175 Q 145 170 158 172" stroke="#f9c6ce" strokeWidth="1.5" fill="none" opacity="0.55" />
                                <path d="M 218 175 Q 195 170 182 172" stroke="#f9c6ce" strokeWidth="1.5" fill="none" opacity="0.55" />

                                {/* ── TORSO ── */}
                                <path d="M 158 160 Q 120 162 104 178 Q 90 196 90 215 C 86 232 84 252 90 268 Q 82 292 80 315 Q 76 338 82 358 Q 96 374 124 380 Q 142 386 148 392 L 144 520 L 130 520 Q 116 528 116 540 L 224 540 Q 224 528 210 520 L 196 392 Q 202 386 218 380 Q 244 374 258 358 Q 264 338 260 315 Q 258 292 250 268 C 256 252 254 232 250 215 Q 250 196 236 178 Q 220 162 182 160 Q 178 172 170 174 Q 162 172 158 160 Z" fill="url(#skinGrad)" stroke="#f9c6ce" strokeWidth="1.5" opacity="0.75" />

                                {/* ── BUST ── */}
                                <ellipse cx="133" cy="210" rx={isLuteal ? 27 : 26} ry={isLuteal ? 21 : 20} fill="#fde8ec" stroke="#f9c6ce" strokeWidth="1.2" opacity="0.55" style={{ transition: 'all 0.5s' }} />
                                <ellipse cx="207" cy="210" rx={isLuteal ? 27 : 26} ry={isLuteal ? 21 : 20} fill="#fde8ec" stroke="#f9c6ce" strokeWidth="1.2" opacity="0.55" style={{ transition: 'all 0.5s' }} />
                                <path d="M 100 200 Q 115 218 133 222" stroke="#f9c6ce" strokeWidth="1.2" fill="none" opacity="0.4" />
                                <path d="M 240 200 Q 225 218 207 222" stroke="#f9c6ce" strokeWidth="1.2" fill="none" opacity="0.4" />
                                <circle cx="133" cy="213" r="2.5" fill="#f9c6ce" opacity="0.3" />
                                <circle cx="207" cy="213" r="2.5" fill="#f9c6ce" opacity="0.3" />

                                {/* ── WAIST INDENT ── */}
                                <path d="M 86 260 Q 80 278 88 298" stroke="#f9c6ce" strokeWidth="1.5" fill="none" strokeDasharray="4 5" opacity="0.45" />
                                <path d="M 254 260 Q 260 278 252 298" stroke="#f9c6ce" strokeWidth="1.5" fill="none" strokeDasharray="4 5" opacity="0.45" />

                                {/* ── HIP FLARE ── */}
                                <path d="M 90 340 Q 82 358 82 368" stroke="#f9c6ce" strokeWidth="1.5" fill="none" opacity="0.4" />
                                <path d="M 250 340 Q 258 358 258 368" stroke="#f9c6ce" strokeWidth="1.5" fill="none" opacity="0.4" />

                                {/* ── HPO AXIS signal paths (removed per user request) ── */}

                                {/* ── BRAIN / HYPOTHALAMUS ── */}
                                <g style={{ cursor: 'pointer' }}>
                                    <ellipse cx="170" cy="65" rx="28" ry="23" fill="#e1bee7" opacity="0.7" filter="url(#softGlow)" />
                                    <path d="M 150 60 Q 160 54 170 60 Q 180 66 190 60" stroke="#ba68c8" strokeWidth="1.5" fill="none" opacity="0.65" />
                                    <path d="M 148 70 Q 160 64 170 70 Q 180 76 192 70" stroke="#ba68c8" strokeWidth="1.5" fill="none" opacity="0.65" />
                                    <path d="M 152 78 Q 162 73 170 78 Q 178 83 188 78" stroke="#ba68c8" strokeWidth="1" fill="none" opacity="0.5" />
                                </g>

                                {/* Pituitary gland */}
                                <circle cx="170" cy="85" r="5.5" fill="#ce93d8" stroke="#9c27b0" strokeWidth="1.5" opacity="0.85" cursor="pointer" filter="url(#softGlow)" />

                                {/* ── REPRODUCTIVE ORGANS ── */}
                                <g transform="translate(0, 48)">
                                    {/* Fallopian tubes */}
                                    <path d="M 132 290 Q 102 268 76 290 Q 64 302 68 318" stroke="#d81b60" strokeWidth="4" fill="none" strokeLinecap="round" opacity="0.8" cursor="pointer" />
                                    <path d="M 208 290 Q 238 268 264 290 Q 276 302 272 318" stroke="#d81b60" strokeWidth="4" fill="none" strokeLinecap="round" opacity="0.8" cursor="pointer" />
                                    <path d="M 64 315 Q 57 310 62 322 M 68 318 Q 60 318 65 326 M 72 317 Q 66 324 71 328" stroke="#d81b60" strokeWidth="1.8" fill="none" opacity="0.7" />
                                    <path d="M 276 315 Q 283 310 278 322 M 272 318 Q 280 318 275 326 M 268 317 Q 274 324 269 328" stroke="#d81b60" strokeWidth="1.8" fill="none" opacity="0.7" />

                                    {/* Left Ovary */}
                                    <g cursor="pointer" filter="url(#glow)">
                                        <ellipse cx="72" cy="322" rx="22" ry="28" fill="#f8bbd0" stroke="#d81b60" strokeWidth="2" />
                                        <ellipse cx="72" cy="322" rx="12" ry="16" fill="#fce4ec" opacity="0.75" />
                                        <circle cx="72" cy="322" r="4" fill="white" opacity="0.7" />
                                        <circle cx="63" cy="315" r="2.5" fill="#f48fb1" opacity="0.65" />
                                        <circle cx="81" cy="329" r="2" fill="#f48fb1" opacity="0.55" />
                                        <circle cx="75" cy="310" r="1.8" fill="#f48fb1" opacity="0.5" />
                                    </g>

                                    {/* Right Ovary */}
                                    <g cursor="pointer" filter="url(#glow)">
                                        <ellipse cx="268" cy="322" rx={isOvulation ? 24 : 22} ry={isOvulation ? 30 : 28} fill="#f8bbd0" stroke="#d81b60" strokeWidth="2" style={{ transition: 'all 0.5s' }} />
                                        <ellipse cx="268" cy="322" rx="12" ry="16" fill="#fce4ec" opacity="0.75" />
                                        {!isOvulation && <circle cx="268" cy="322" r="5" fill="white" stroke="#ec407a" strokeWidth="1.5" />}
                                        <circle cx="258" cy="315" r="2.5" fill="#f48fb1" opacity="0.65" />
                                        <circle cx="276" cy="329" r="2" fill="#f48fb1" opacity="0.55" />
                                        <circle cx="264" cy="310" r="1.8" fill="#f48fb1" opacity="0.5" />
                                    </g>

                                    {/* Uterus */}
                                    <path d="M 170 398 Q 134 372 122 334 L 120 304 Q 120 280 146 268 L 170 258 L 194 268 Q 220 280 220 304 L 218 334 Q 206 372, 170 398 Z" fill="url(#utGrad)" stroke="#d81b60" strokeWidth="2.5" cursor="pointer" filter="url(#softGlow)" opacity={isFollicular ? 1 : 0.95} style={{ transition: 'all 0.5s' }} />

                                    {/* Endometrial lining (inner) */}
                                    <path d="M 170 384 Q 148 360 142 332 L 142 306 Q 142 292 162 283 L 170 280 L 178 283 Q 198 292 198 306 L 198 332 Q 192 360 170 384 Z" fill="#e91e63" opacity={isMenstruation ? 0.1 : (isFollicular ? 0.2 + (currentDay - 5) * 0.02 : 0.35)} style={{ transition: 'all 0.5s' }} />

                                    {/* Cervix */}
                                    <ellipse cx="170" cy="402" rx="14" ry="8" fill="#f8bbd0" stroke="#d81b60" strokeWidth="1.5" opacity="0.65" />

                                    {/* Nutrient flow (luteal phase) */}
                                    <g opacity={isLuteal ? 1 : 0} style={{ transition: 'opacity 0.8s ease' }}>
                                        <circle cx="170" cy="305" r="2.5" fill="#4caf50"><animate attributeName="cy" values="275;360" dur="2.2s" repeatCount="indefinite" /></circle>
                                        <circle cx="162" cy="315" r="2" fill="#81c784"><animate attributeName="cy" values="275;360" dur="2.7s" repeatCount="indefinite" /></circle>
                                        <circle cx="178" cy="300" r="2" fill="#66bb6a"><animate attributeName="cy" values="275;360" dur="1.9s" repeatCount="indefinite" /></circle>
                                    </g>

                                    {/* Egg release animation dot */}
                                    {isOvulation && (
                                        <circle cx="268" cy="310" r="5.5" fill="#ffd54f" stroke="#f57f17" strokeWidth="2" filter="url(#glow)">
                                            <animate attributeName="cy" values="310;290;270" dur="3s" repeatCount="indefinite" />
                                            <animate attributeName="cx" values="268;255;235" dur="3s" repeatCount="indefinite" />
                                        </circle>
                                    )}
                                </g>

                                {/* ── BBT Thermometer ── */}
                                <g transform="translate(34, 195)" cursor="pointer">
                                    <rect x="0" y="0" width="14" height="72" rx="7" fill="white" stroke="#ffb74d" strokeWidth="2" />
                                    <rect x="2" y={70 - parseInt(insight.bbtHeight) * 0.34} width="10" height={parseInt(insight.bbtHeight) * 0.34} rx="5" fill="#ffb74d" style={{ transition: 'all 0.5s ease' }} />
                                    <circle cx="7" cy="79" r="8" fill="#ffb74d" stroke="#f57f17" strokeWidth="1.8" />
                                    <text x="20" y="40" fontSize="10" fill="#e65100" fontWeight="600" fontFamily="DM Sans">{insight.bbtLabel}</text>
                                    <text x="20" y="54" fontSize="7.5" fill="#e65100" opacity="0.7" fontFamily="DM Sans">BBT</text>
                                </g>

                                {/* ── Cervical mucus ── */}
                                <g transform="translate(286, 388)" cursor="pointer">
                                    <circle cx="0" cy="0" r="18" fill={isOvulation ? "#e3f2fd" : "#f5f5f5"} stroke={isOvulation ? "#2196f3" : "#e0e0e0"} strokeWidth="2" style={{ transition: 'all 0.5s' }} />
                                    <path d="M 0 -9 Q 7 0, 0 9 Q -7 0, 0 -9" fill={isOvulation ? "#2196f3" : "#bdbdbd"} style={{ transition: 'all 0.5s' }} />
                                    <text x="-26" y="30" fontSize="9.5" fill={isOvulation ? "#1565c0" : "#757575"} fontWeight="600" fontFamily="DM Sans">{isOvulation ? 'Egg-white' : (isFollicular ? 'Sticky' : 'Dry')}</text>
                                    <text x="-18" y="42" fontSize="7" fill={isOvulation ? "#1565c0" : "#757575"} opacity="0.7" fontFamily="DM Sans">Mucus</text>
                                </g>

                            </svg>

                            {/* Hotspot overlays */}
                            <div className="hs" style={{ top: '11%', left: '50%' }} onClick={(e) => showTip('brain', e)}>
                                <div className="hs-ring brain-ring">🧠</div>
                            </div>
                            <div className="hs" style={{ top: '14.5%', left: '50%' }} onClick={(e) => showTip('pituitary', e)}>
                                <div className="hs-ring pit-ring" style={{ width: 24, height: 24, fontSize: '0.65rem' }}>💜</div>
                            </div>
                            <div className="hs" style={{ top: '61%', left: '8%' }} onClick={(e) => showTip('ovaryL', e)}>
                                <div className="hs-ring ovL-ring">🩷</div>
                            </div>
                            <div className="hs" style={{ top: '61%', right: '8%' }} onClick={(e) => showTip('ovaryR', e)}>
                                <div className="hs-ring ovR-ring">🩷</div>
                            </div>
                            <div className="hs" style={{ top: '74%', left: '50%' }} onClick={(e) => showTip('uterus', e)}>
                                <div className="hs-ring ut-ring">❤️</div>
                            </div>
                            <div className="hs" style={{ top: '55%', left: '50%' }} onClick={(e) => showTip('tubes', e)}>
                                <div className="hs-ring tube-ring" style={{ width: 26, height: 26, fontSize: '0.7rem' }}>〰️</div>
                            </div>

                            {/* Body labels */}
                            <span className="body-label" style={{ top: '8.5%', left: '56%' }}>Hypothalamus</span>
                            <span className="body-label" style={{ top: '58%', left: '2%' }}>Left Ovary</span>
                            <span className="body-label" style={{ top: '58%', right: '2%' }}>Right Ovary</span>
                            <span className="body-label" style={{ top: '76%', left: '50%', transform: 'translateX(-50%)' }}>Uterus</span>

                        </div>

                        {/* Fertility badge */}
                        <div className="fertility-badge" style={{ opacity: isPeakFertility ? 1 : 0, transform: isPeakFertility ? 'translateY(0)' : 'translateY(10px)' }}>
                            <div className="fb-dot" style={{ background: '#f4a335' }}></div>
                            <span>⭐ Peak fertility window — highest conception chance today</span>
                        </div>

                    </div>

                    {/* RIGHT: Info cards */}
                    <div className="info-col">
                        {/* Phase summary card */}
                        <div className="phase-summary">
                            <div className="ps-day">Days {currentDay} · {CYCLE_PHASES[activePhase as keyof typeof CYCLE_PHASES].name}</div>
                            <div className="ps-name">{insight.title}</div>
                            <div className="ps-desc">{insight.desc}</div>
                        </div>

                        {/* What you feel */}
                        <div className="info-card">
                            <h4>{insight.feelTitle}</h4>
                            <p>{insight.feelDesc}</p>
                            <div className="chips">
                                {insight.feelChips.map(chip => <span key={chip} className="chip">{chip}</span>)}
                            </div>
                        </div>

                        {/* What to do */}
                        <div className="info-card">
                            <h4>{insight.doTitle}</h4>
                            <p>{insight.doDesc}</p>
                            <span className="info-tag">{insight.doTag}</span>
                        </div>

                        {/* Lifestyle Modifiers */}
                        <div className="lifestyle-card" style={{ marginTop: '1rem' }}>
                            <h3>🧘‍♀️ Lifestyle Modifiers</h3>
                            <div className="lm-grid">
                                <button className={`lm-btn ${lifestyle.stress ? 'active' : ''}`} onClick={() => toggleLM('stress')}>⚡ Stress</button>
                                <button className={`lm-btn ${lifestyle.sleep ? 'active-sleep' : ''}`} onClick={() => toggleLM('sleep')}>💤 Sleep</button>
                                <button className={`lm-btn ${lifestyle.diet ? 'active-diet' : ''}`} onClick={() => toggleLM('diet')}>🥑 Diet</button>
                                <button className={`lm-btn ${lifestyle.exercise ? 'active-exercise' : ''}`} onClick={() => toggleLM('exercise')}>🏃‍♀️ Exercise</button>
                            </div>
                            <div className="lm-impact-box">
                                {lmImpactText}
                            </div>
                        </div>

                    </div>
                </div>

                {/* Floating tooltip */}
                {tooltip && TOOLTIP_DATA[tooltip.key] && (
                    <div
                        className={`tooltip ${tooltip ? 'visible' : ''}`}
                        style={{ left: tooltip.x, top: tooltip.y }}
                        role="tooltip"
                    >
                        <button className="t-close" onClick={hideTip}>✕</button>
                        <h5>{TOOLTIP_DATA[tooltip.key].title}</h5>
                        <p>{TOOLTIP_DATA[tooltip.key].body}</p>
                        <span className="info-tag">{TOOLTIP_DATA[tooltip.key].tag}</span>
                    </div>
                )}
            </section>
        </>
    );
};
