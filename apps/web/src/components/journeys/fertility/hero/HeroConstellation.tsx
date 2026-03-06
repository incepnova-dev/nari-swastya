import React, { useState, useCallback, useEffect, useRef } from 'react';
import '../../../../styles/journey/fertility/hero-constellation.css';

interface PhaseData {
    day: string;
    name: string;
    emoji: string;
}

const PHASE_DATA: Record<number, PhaseData> = {
    1: { day: '3', name: 'Menstrual', emoji: '🩸' },
    2: { day: '10', name: 'Follicular', emoji: '🌱' },
    3: { day: '14', name: 'Ovulation', emoji: '🌟' },
    4: { day: '21', name: 'Luteal', emoji: '🌙' },
};

const PHASE_COLORS: Record<string, string> = {
    menstrual: '231,76,60',
    follicular: '243,156,18',
    ovulation: '39,174,96',
    luteal: '52,152,219',
};

export const HeroConstellation: React.FC = () => {
    const [activeCard, setActiveCard] = useState(3);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const triggerBurstRef = useRef<(phaseKey: string) => void>();

    const showPhaseCard = useCallback((cardNum: number) => {
        setActiveCard(cardNum);

        // Trigger canvas burst
        const phases = ['menstrual', 'follicular', 'ovulation', 'luteal'];
        if (triggerBurstRef.current) {
            triggerBurstRef.current(phases[cardNum - 1]);
        }
    }, []);

    const currentPhase = PHASE_DATA[activeCard];

    const scrollToSection = (id: string) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    // Canvas aura animation
    useEffect(() => {
        const cv = canvasRef.current;
        if (!cv) return;
        const ctx = cv.getContext('2d');
        if (!ctx) return;

        let W: number, H: number, cx0: number, cy0: number, R: number;
        let animId: number;

        function resize() {
            W = cv!.offsetWidth; H = cv!.offsetHeight;
            cv!.width = W; cv!.height = H;
            cx0 = W / 2; cy0 = H / 2;
            R = Math.min(W, H) * 0.224;
        }
        resize();

        const auras = [
            { angle: 0, speed: .0008, dist: .18, r: .28, col: '231,76,60', alpha: .11 },
            { angle: 2.2, speed: .0006, dist: .22, r: .22, col: '243,156,18', alpha: .09 },
            { angle: 4.1, speed: .0010, dist: .15, r: .20, col: '39,174,96', alpha: .10 },
            { angle: 5.5, speed: .0007, dist: .20, r: .25, col: '52,152,219', alpha: .09 },
        ];

        function quadColor(a: number) {
            const n = ((a % (Math.PI * 2)) + Math.PI * 2) % (Math.PI * 2);
            if (n < .73) return PHASE_COLORS.menstrual;
            if (n < 2.05) return PHASE_COLORS.follicular;
            if (n < 2.55) return PHASE_COLORS.ovulation;
            return PHASE_COLORS.luteal;
        }

        function makeSpark() {
            const a = Math.random() * Math.PI * 2;
            return {
                angle: a,
                speed: (.0006 + Math.random() * .0012) * (Math.random() < .5 ? 1 : -1),
                r: R * (.92 + Math.random() * .16),
                size: 1.2 + Math.random() * 2.4,
                life: 0,
                maxLife: 120 + Math.floor(Math.random() * 200),
                col: quadColor(a),
            };
        }

        let sparks: ReturnType<typeof makeSpark>[] = [];
        function initSparks() {
            sparks = [];
            for (let i = 0; i < 40; i++) {
                const s = makeSpark();
                s.life = Math.floor(Math.random() * s.maxLife);
                sparks.push(s);
            }
        }
        initSparks();

        let arcAngle = (14 / 28) * Math.PI * 2;

        interface Burst {
            x: number; y: number; vx: number; vy: number; r: number; life: number; maxLife: number; col: string;
        }
        const bursts: Burst[] = [];
        let activeBurstColor = PHASE_COLORS.ovulation;

        triggerBurstRef.current = (phaseKey: string) => {
            activeBurstColor = PHASE_COLORS[phaseKey] || PHASE_COLORS.ovulation;
            for (let i = 0; i < 28; i++) {
                const a = Math.random() * Math.PI * 2;
                bursts.push({
                    x: cx0 + Math.cos(a) * R,
                    y: cy0 + Math.sin(a) * R,
                    vx: (Math.random() - .5) * 2.5,
                    vy: (Math.random() - .5) * 2.5 - .5,
                    r: 1.5 + Math.random() * 3,
                    life: 0,
                    maxLife: 55 + Math.floor(Math.random() * 35),
                    col: activeBurstColor
                });
            }
        };

        const resizeHandler = () => { resize(); initSparks(); };
        window.addEventListener('resize', resizeHandler);

        function loop() {
            ctx!.clearRect(0, 0, W, H);

            // Aura blobs
            auras.forEach((a) => {
                a.angle += a.speed;
                const bx = cx0 + Math.cos(a.angle) * W * a.dist;
                const by = cy0 + Math.sin(a.angle) * H * a.dist;
                const gr = ctx!.createRadialGradient(bx, by, 0, bx, by, W * a.r);
                gr.addColorStop(0, `rgba(${a.col},${a.alpha})`);
                gr.addColorStop(1, `rgba(${a.col},0)`);
                ctx!.beginPath();
                ctx!.arc(bx, by, W * a.r, 0, Math.PI * 2);
                ctx!.fillStyle = gr;
                ctx!.fill();
            });

            // Sparks
            sparks.forEach((s) => {
                s.angle += s.speed;
                s.life++;
                if (s.life > s.maxLife) { Object.assign(s, makeSpark()); s.life = 0; }
                const p = s.life / s.maxLife;
                const alpha = p < .15 ? p / .15 : p > .85 ? (1 - p) / .15 : 1;
                const sx = cx0 + Math.cos(s.angle) * s.r;
                const sy = cy0 + Math.sin(s.angle) * s.r;
                const sg = ctx!.createRadialGradient(sx, sy, 0, sx, sy, s.size * 2.5);
                sg.addColorStop(0, `rgba(${s.col},${alpha * .7})`);
                sg.addColorStop(1, `rgba(${s.col},0)`);
                ctx!.beginPath(); ctx!.arc(sx, sy, s.size * 2.5, 0, Math.PI * 2);
                ctx!.fillStyle = sg; ctx!.fill();
                ctx!.beginPath(); ctx!.arc(sx, sy, s.size * .65, 0, Math.PI * 2);
                ctx!.fillStyle = `rgba(255,255,255,${alpha * .9})`; ctx!.fill();
            });

            // Live day-arc tip
            arcAngle = (arcAngle + .0004) % (Math.PI * 2);
            const tipX = cx0 + Math.cos(arcAngle - Math.PI / 2) * R;
            const tipY = cy0 + Math.sin(arcAngle - Math.PI / 2) * R;
            const tipG = ctx!.createRadialGradient(tipX, tipY, 0, tipX, tipY, 14);
            tipG.addColorStop(0, 'rgba(255,255,255,0.95)');
            tipG.addColorStop(0.3, `rgba(${quadColor(arcAngle)},0.6)`);
            tipG.addColorStop(1, 'rgba(255,255,255,0)');
            ctx!.beginPath(); ctx!.arc(tipX, tipY, 14, 0, Math.PI * 2);
            ctx!.fillStyle = tipG; ctx!.fill();
            ctx!.beginPath(); ctx!.arc(tipX, tipY, 3.5, 0, Math.PI * 2);
            ctx!.fillStyle = 'rgba(255,255,255,0.98)'; ctx!.fill();

            // Burst particles
            for (let i = bursts.length - 1; i >= 0; i--) {
                const b = bursts[i];
                b.x += b.vx; b.y += b.vy; b.vy += .04;
                b.life++;
                if (b.life > b.maxLife) { bursts.splice(i, 1); continue; }
                const ba = 1 - b.life / b.maxLife;
                ctx!.beginPath(); ctx!.arc(b.x, b.y, b.r, 0, Math.PI * 2);
                ctx!.fillStyle = `rgba(${b.col},${ba * .85})`; ctx!.fill();
            }

            animId = requestAnimationFrame(loop);
        }
        loop();

        return () => {
            cancelAnimationFrame(animId);
            window.removeEventListener('resize', resizeHandler);
        };
    }, []);

    return (
        <div className="hero-constellation">
            {/* Background */}
            <div className="constellation-bg">
                <div className="gradient-morph"></div>
            </div>

            <div className="hero-content-wrapper">
                {/* Left Content */}
                <div className="hero-left">
                    <div className="hero-eyebrow">
                        <span className="pulse-dot"></span>
                        Your Fertility Journey Starts Here
                    </div>

                    <h1 className="hero-title-3d">
                        Learn Ovulation,<br />
                        Beat Infertility &amp;<br />
                        <span className="title-emphasis">Take Control of<br />
                            Your Fertility Now</span>
                    </h1>

                    <p className="hero-description">
                        Interactive tools to track your cycle, visualize body changes, and optimize your path to conception with science-backed insights.
                    </p>

                    <div className="badge-constellation">
                        <div className="hero-badge-3d">
                            <span>📅</span> Cycle Tracking
                        </div>
                        <div className="hero-badge-3d">
                            <span>🌡️</span> Body Insights
                        </div>
                        <div className="hero-badge-3d">
                            <span>💚</span> Wellness Tips
                        </div>
                    </div>

                    <div className="hero-cta-constellation">
                        <button className="btn-primary-3d" onClick={() => scrollToSection('simulator')}>
                            <span>🎯</span> Try Body Simulator
                            <span className="seo-text-xs">↓</span>
                        </button>

                        <button className="btn-primary-3d">
                            <span>🧪</span> Try Treatment Simulator
                            <span className="seo-text-xs">↗</span>
                        </button>

                        <a href="/conceiving" className="btn-secondary-3d">
                            <i className="fa-solid fa-person-breastfeeding"></i> Trying to Conceive
                        </a>

                        <a href="/depression" className="btn-secondary-3d">
                            <i className="fa-solid fa-brain"></i> Mental Health Support
                        </a>

                        <a href="#methods" className="btn-secondary-3d">
                            <span>📊</span> Explore Methods
                        </a>
                    </div>
                </div>

                {/* Right: Interactive Cycle Visualizer */}
                <div className="hero-right">
                    <div className="cycle-viz-universe">
                        {/* Layer 0: aura/particle canvas */}
                        <canvas ref={canvasRef} className="cycle-aura-canvas" aria-hidden="true"></canvas>

                        {/* Layer 1: phase pulse rings */}
                        <div className="phase-pulse pp-red running" style={{ position: 'absolute' }}></div>
                        <div className="phase-pulse pp-gold" style={{ position: 'absolute' }}></div>
                        <div className="phase-pulse pp-green" style={{ position: 'absolute' }}></div>
                        <div className="phase-pulse pp-blue" style={{ position: 'absolute' }}></div>

                        {/* Layer 1.5: center breathing glow */}
                        <div className="cycle-center-glow"></div>

                        {/* Layer 2: original cycle ring */}
                        <div className="cycle-visualizer">
                            <div className="cycle-ring">
                                <svg viewBox="0 0 200 200">
                                    {/* Menstrual Phase (Days 1-5) - Red */}
                                    <circle
                                        className="cycle-segment"
                                        cx="100" cy="100" r="70"
                                        stroke="#e74c3c"
                                        strokeDasharray="32 440"
                                        strokeDashoffset="0"
                                        data-phase="menstrual"
                                        onClick={() => showPhaseCard(1)}
                                    />
                                    {/* Follicular Phase (Days 6-13) - Orange */}
                                    <circle
                                        className="cycle-segment"
                                        cx="100" cy="100" r="70"
                                        stroke="#f39c12"
                                        strokeDasharray="58 440"
                                        strokeDashoffset="-32"
                                        data-phase="follicular"
                                        onClick={() => showPhaseCard(2)}
                                    />
                                    {/* Ovulation Phase (Days 14-16) - Green */}
                                    <circle
                                        className="cycle-segment"
                                        cx="100" cy="100" r="70"
                                        stroke="#27ae60"
                                        strokeDasharray="22 440"
                                        strokeDashoffset="-90"
                                        data-phase="ovulation"
                                        onClick={() => showPhaseCard(3)}
                                    />
                                    {/* Luteal Phase (Days 17-28) - Blue */}
                                    <circle
                                        className="cycle-segment"
                                        cx="100" cy="100" r="70"
                                        stroke="#3498db"
                                        strokeDasharray="88 440"
                                        strokeDashoffset="-112"
                                        data-phase="luteal"
                                        onClick={() => showPhaseCard(4)}
                                    />
                                </svg>
                            </div>

                            {/* Center Display */}
                            <div className="cycle-center">
                                <div className="cycle-day-display">{currentPhase.day}</div>
                                <div className="cycle-phase-name">{currentPhase.name}</div>
                                <div className="cycle-emoji">{currentPhase.emoji}</div>
                            </div>

                            {/* Floating Phase Cards */}
                            <div className="phase-cards-orbit">
                                <div className={`phase-card-floating phase-card-1${activeCard === 1 ? ' active' : ''}`}>
                                    <h4>🩸 Menstrual Phase</h4>
                                    <p>Days 1–5: Menstruation starts; reproductive hormones reach their nadir [lowest point] and the endometrial lining is shed from the uterus.</p>
                                </div>

                                <div className={`phase-card-floating phase-card-2${activeCard === 2 ? ' active' : ''}`}>
                                    <h4>🌱 Follicular Phase</h4>
                                    <p>Days 6–13: Oestrogen [estrogen] climbs steadily, ovarian follicles develop toward maturity, and the uterine lining [endometrium] gradually builds in thickness.</p>
                                </div>

                                <div className={`phase-card-floating phase-card-3${activeCard === 3 ? ' active' : ''}`}>
                                    <h4>🌟 Ovulation</h4>
                                    <p>Days 14–16: Peak fertile window — a ripened egg [oocyte] is expelled from the dominant follicle, marking the optimal timing for conception.</p>
                                </div>

                                <div className={`phase-card-floating phase-card-4${activeCard === 4 ? ' active' : ''}`}>
                                    <h4>🌙 Luteal Phase</h4>
                                    <p>Days 17–28: Progesterone surges as the corpus luteum takes over, priming [conditioning] the uterine environment for a potential pregnancy to implant.</p>
                                </div>
                            </div>
                        </div>

                        {/* Layer 3: orbiting satellite ring */}
                        <div className="orbit-ring">
                            <div className="orbit-sat orbit-sat-1"></div>
                            <div className="orbit-sat orbit-sat-2"></div>
                            <div className="orbit-sat orbit-sat-3"></div>
                            <div className="orbit-sat orbit-sat-4"></div>
                        </div>

                        {/* Floating micro-labels (Layer 4 text) */}
                        <span className="cycle-word cw-menstrual" style={{ top: '2%', left: '16%', ['--wd' as string]: '0s' } as React.CSSProperties}>Menstrual</span>
                        <span className="cycle-word cw-follicular" style={{ top: '8%', right: '8%', ['--wd' as string]: '1s' } as React.CSSProperties}>Follicular</span>
                        <span className="cycle-word cw-ovulation" style={{ bottom: '12%', left: '12%', ['--wd' as string]: '2s' } as React.CSSProperties}>Ovulation</span>
                        <span className="cycle-word cw-luteal" style={{ bottom: '6%', right: '4%', ['--wd' as string]: '3s' } as React.CSSProperties}>Luteal</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
