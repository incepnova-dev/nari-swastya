import React, { useEffect, useRef, useState } from 'react';

interface HeroProps {
    week: number;
    onWeekChange: (week: number) => void;
}

const TIPS = [
    "Hydrate early in the day; it helps fatigue and constipation.",
    "Write down questions before visits—short lists get answered faster.",
    "If you feel reduced movement after 28w, don’t wait—seek advice.",
    "Protein + calcium at breakfast stabilizes energy.",
    "Practice a one-sentence summary of symptoms for urgent calls."
];

export const Hero: React.FC<HeroProps> = ({ week, onWeekChange }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [dailyTip, setDailyTip] = useState(TIPS[0]);

    useEffect(() => {
        // Daily tip rotation logic
        const idx = Math.floor((Date.now() / (1000 * 60 * 60 * 24)) % TIPS.length);
        setDailyTip(TIPS[idx]);

        // Particles Background
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let particles: Particle[] = [];
        const particleCount = 100;

        const resize = () => {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
        };

        class Particle {
            x: number;
            y: number;
            vx: number;
            vy: number;
            radius: number;

            constructor() {
                this.x = Math.random() * canvas!.width;
                this.y = Math.random() * canvas!.height;
                this.vx = (Math.random() - 0.5) * 0.5;
                this.vy = (Math.random() - 0.5) * 0.5;
                this.radius = Math.random() * 2 + 1;
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;
                if (this.x < 0 || this.x > canvas!.width) this.vx *= -1;
                if (this.y < 0 || this.y > canvas!.height) this.vy *= -1;
            }

            draw() {
                ctx!.beginPath();
                ctx!.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                ctx!.fillStyle = 'rgba(236, 64, 122, 0.6)';
                ctx!.fill();
            }
        }

        const init = () => {
            resize();
            particles = [];
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach((p) => {
                p.update();
                p.draw();
            });

            // Connect particles
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < 100) {
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(236, 64, 122, ${0.2 * (1 - dist / 100)})`;
                        ctx.lineWidth = 1;
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }
            animationFrameId = requestAnimationFrame(animate);
        };

        window.addEventListener('resize', resize);
        init();
        animate();

        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    const scrollToSection = (id: string) => {
        const el = document.querySelector(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="hero" id="top">
            <div className="hero-constellation-bg" aria-hidden="true">
                <canvas ref={canvasRef} id="particleCanvas"></canvas>
                <div className="gradient-morph"></div>
            </div>

            <div className="hero-content">
                <div className="hero-badge">
                    <span className="badge-icon">🤰</span>
                    <span className="badge-text">Your Complete Antenatal Care Guide</span>
                </div>
                <h1 className="hero-title-3d">
                    Your <span className="title-emphasis">40‑Week Antenatal Care</span> during Pregnancy Journey
                </h1>
                <p className="hero-subtitle">
                    Learn what happens inside your body, what each visit checks, and how every test protects you and your baby — through interactive simulations that help you remember.
                </p>

                <div className="hero-stats">
                    <div className="stat-item">
                        <span className="stat-number">10–15</span>
                        <span className="stat-label">Typical visits</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-number">8+</span>
                        <span className="stat-label">Critical screenings</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-number">28+</span>
                        <span className="stat-label">Weeks kick counts start</span>
                    </div>
                </div>

                <div className="hero-cta-row">
                    <button className="btn-primary" type="button" onClick={() => scrollToSection('#journey')}>Begin Your Journey</button>
                    <button className="btn-secondary" type="button" onClick={() => (window as any).ANC_MODAL('90-Second Sprint', 'Sprint logic coming soon...')}>Take a 90‑sec Sprint</button>
                </div>

                <div className="daily-tip" id="dailyTip">
                    <div className="tip-icon">💡</div>
                    <p id="tipText">{dailyTip}</p>
                </div>
            </div>

            <div className="hero-visual-3d">
                <div className="pregnancy-3d-container" aria-label="Interactive hero navigation">
                    <div className="pregnancy-core" aria-hidden="true">
                        <div className="center-glow"></div>
                        <div className="pulse-ring ring-1"></div>
                        <div className="pulse-ring ring-2"></div>
                        <div className="pulse-ring ring-3"></div>
                    </div>

                    <button className="health-icon icon-1" type="button" onClick={() => scrollToSection('#journey')}>
                        <div className="icon-inner">🗓️</div>
                        <div className="icon-label">Timeline</div>
                    </button>
                    <button className="health-icon icon-2" type="button" onClick={() => scrollToSection('#care-control')}>
                        <div className="icon-inner">🧍‍♀️</div>
                        <div className="icon-label">Body Map</div>
                    </button>
                    <button className="health-icon icon-3" type="button" onClick={() => scrollToSection('#tests-scans')}>
                        <div className="icon-inner">🧪</div>
                        <div className="icon-label">Tests</div>
                    </button>
                    <button className="health-icon icon-4" type="button" onClick={() => scrollToSection('#nutrition')}>
                        <div className="icon-inner">🥗</div>
                        <div className="icon-label">Wellness</div>
                    </button>
                    <button className="health-icon icon-5" type="button" onClick={() => scrollToSection('#kick-counter')}>
                        <div className="icon-inner">🚨</div>
                        <div className="icon-label">Warnings</div>
                    </button>

                    <div className="week-dial" role="group" aria-label="Week explorer">
                        <div className="meter-reading">
                            <span className="reading-value">{week}</span>
                            <span className="reading-unit">wk</span>
                        </div>
                        <div className="meter-status">
                            {week <= 12 ? '1st Trimester' : week <= 28 ? '2nd Trimester' : '3rd Trimester'}
                        </div>
                        <input
                            type="range"
                            className="week-slider-input"
                            min="1" max="40"
                            value={week}
                            onChange={(e) => onWeekChange(parseInt(e.target.value))}
                            style={{
                                background: `linear-gradient(90deg, #66bb6a ${((week - 1) / 39) * 100}%, #f0f0f0 ${((week - 1) / 39) * 100}%)`
                            }}
                        />
                    </div>
                </div>

                <div className="hero-info-box">
                    <div className="info-badge">
                        <span className="badge-icon">✨</span>
                        <span className="badge-text">Interactive Learning</span>
                    </div>
                    <h3 className="info-title">Your Antenatal “Care Control Center”</h3>
                    <p className="info-text">
                        Pick a week, run a visit simulation, explore scans, and practice emergency decisions.
                        The platform adapts content based on your week selection.
                    </p>
                </div>
            </div>
        </section>
    );
};
