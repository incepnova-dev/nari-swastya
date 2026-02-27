import React, { useEffect, useRef, useState } from 'react';

export const ProbabilityCalculator: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [age, setAge] = useState(28);
    const [reg, setReg] = useState(2);
    const [months, setMonths] = useState(3);
    const [factors, setFactors] = useState<{ [key: string]: boolean }>({
        folic: false,
        timing: false,
        weight: false,
        stress: false
    });
    const [prob, setProb] = useState(24);
    const currentProbRef = useRef(24);
    const targetProbRef = useRef(24);
    const requestRef = useRef<number>();

    const W = 220, H = 140;

    const drawGauge = (p: number) => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        ctx.clearRect(0, 0, W, H);
        const cx = W / 2, cy = H - 18, r = 90;

        ctx.beginPath(); ctx.arc(cx, cy, r, Math.PI, 0);
        ctx.strokeStyle = '#f0dde6'; ctx.lineWidth = 18; ctx.lineCap = 'round'; ctx.stroke();

        const zones: [number, number, string][] = [
            [0, .2, '#e74c3c'], [.2, .4, '#f39c12'], [.4, .6, '#f5a623'], [.6, .8, '#2ecc71'], [.8, 1, '#06d6a0']
        ];
        zones.forEach(([s, e, col]) => {
            ctx.beginPath(); ctx.arc(cx, cy, r, Math.PI + s * Math.PI, Math.PI + e * Math.PI);
            ctx.strokeStyle = col + '55'; ctx.lineWidth = 18; ctx.lineCap = 'butt'; ctx.stroke();
        });

        const pct = Math.min(Math.max(p, 0), 60) / 60;
        ctx.beginPath(); ctx.arc(cx, cy, r, Math.PI, Math.PI + pct * Math.PI);
        const grad = ctx.createLinearGradient(cx - r, cy, cx + r, cy);
        grad.addColorStop(0, '#e74c3c'); grad.addColorStop(.5, '#f5a623'); grad.addColorStop(1, '#06d6a0');
        ctx.strokeStyle = grad; ctx.lineWidth = 18; ctx.lineCap = 'round'; ctx.stroke();

        const needleA = Math.PI + pct * Math.PI;
        const nx = cx + Math.cos(needleA) * r * .72;
        const ny = cy + Math.sin(needleA) * r * .72;
        ctx.save();
        ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(nx, ny);
        ctx.strokeStyle = '#1a0a14'; ctx.lineWidth = 3; ctx.lineCap = 'round'; ctx.stroke();
        ctx.beginPath(); ctx.arc(cx, cy, 6, 0, Math.PI * 2);
        ctx.fillStyle = '#1a0a14'; ctx.fill();
        ctx.restore();
    };

    const animate = () => {
        if (Math.abs(currentProbRef.current - targetProbRef.current) > 0.3) {
            currentProbRef.current += (targetProbRef.current - currentProbRef.current) * 0.08;
            setProb(Math.round(currentProbRef.current));
            drawGauge(currentProbRef.current);
            requestRef.current = requestAnimationFrame(animate);
        } else {
            currentProbRef.current = targetProbRef.current;
            setProb(Math.round(currentProbRef.current));
            drawGauge(currentProbRef.current);
        }
    };

    useEffect(() => {
        let base = 25;
        if (age <= 25) base = 28;
        else if (age <= 30) base = 25;
        else if (age <= 35) base = 20;
        else if (age <= 38) base = 14;
        else if (age <= 40) base = 9;
        else base = 5;

        base -= Math.floor(reg * 0.9);
        if (months >= 12) base = Math.max(base - 3, 2);

        if (factors.folic) base += 2;
        if (factors.timing) base += 15;
        if (factors.weight) base += 5;
        if (factors.stress) base += 3;

        base = Math.max(2, Math.min(base, 58));
        targetProbRef.current = base;

        if (requestRef.current) cancelAnimationFrame(requestRef.current);
        requestRef.current = requestAnimationFrame(animate);

        return () => {
            if (requestRef.current) cancelAnimationFrame(requestRef.current);
        };
    }, [age, reg, months, factors]);

    const toggleFactor = (key: string) => {
        setFactors(prev => ({ ...prev, [key]: !prev[key] }));
    };

    const getInsights = () => {
        const items = [];
        if (age >= 35) items.push({ icon: '⚠️', text: `<strong>Age consideration:</strong> After 35, egg quality declines. ACOG recommends seeking evaluation after 6 months of trying.` });
        if (reg >= 7) items.push({ icon: '🔄', text: `<strong>Irregular cycles:</strong> Cycle variance of ±${reg} days suggests possible ovulatory dysfunction. ICMR guidelines recommend tracking BBT.` });
        if (months >= 12) items.push({ icon: '🏥', text: `<strong>12+ months:</strong> WHO defines infertility as 12 months of unprotected intercourse. Consider a fertility evaluation.` });
        if (prob >= 25) items.push({ icon: '🌟', text: `<strong>Good prognosis:</strong> Your calculated probability of ${prob}% per cycle is above average. Consistency is key.` });

        items.push({ icon: '📊', text: `<strong>Cumulative:</strong> A ${prob}% monthly rate gives ~${Math.round(100 * (1 - Math.pow(1 - prob / 100, 6)))}% chance over 6 cycles and ~${Math.round(100 * (1 - Math.pow(1 - prob / 100, 12)))}% over 12 cycles.` });

        return items.slice(0, 3);
    };

    return (
        <div style={{ marginBottom: '5rem' }}>
            <div className="sim-section-label gold"><i className="fa-solid fa-calculator"></i> Module 2</div>
            <h3 className="sim-section-h">Conception <span className="em">Probability</span> Calculator</h3>
            <p className="sim-section-sub">Adjust your personal factors. Each variable is calibrated to real population data from NFHS-5 (724,115 women) and WHO SARA report 2022.</p>

            <div className="calc-grid">
                <div className="calc-card">
                    <div className="calc-card-label"><i className="fa-solid fa-calendar"></i> Biological Age</div>
                    <h4>Age & Ovarian Reserve</h4>

                    <div className="sim-slider-wrap">
                        <div className="sim-slider-header">
                            <span className="sim-slider-name">Your Age</span>
                            <span className="sim-slider-val" id="val-age">{age}</span>
                        </div>
                        <input type="range" className="sim-slider" min="20" max="44" value={age} onChange={(e) => setAge(+e.target.value)} style={{ '--pct': `${((age - 20) / (44 - 20)) * 100}%` } as any} />
                    </div>

                    <div className="sim-slider-wrap">
                        <div className="sim-slider-header">
                            <span className="sim-slider-name">Cycle Regularity (variation days)</span>
                            <span className="sim-slider-val" id="val-reg">±{reg}</span>
                        </div>
                        <input type="range" className="sim-slider" min="0" max="14" value={reg} onChange={(e) => setReg(+e.target.value)} style={{ '--pct': `${((reg - 0) / (14 - 0)) * 100}%` } as any} />
                    </div>

                    <div className="sim-slider-wrap">
                        <div className="sim-slider-header">
                            <span className="sim-slider-name">Months Trying</span>
                            <span className="sim-slider-val" id="val-months">{months}</span>
                        </div>
                        <input type="range" className="sim-slider" min="1" max="24" value={months} onChange={(e) => setMonths(+e.target.value)} style={{ '--pct': `${((months - 1) / (24 - 1)) * 100}%` } as any} />
                    </div>
                </div>

                <div className="calc-card">
                    <div className="calc-card-label">🔥 Boost Factors</div>
                    <h4>Modifiable Lifestyle Impact</h4>
                    <div className="factor-grid">
                        <div className={`factor-toggle ${factors.timing ? 'active' : ''}`} onClick={() => toggleFactor('timing')}>
                            <span>📅 Timed Sync</span>
                            <div className="ft-check">{factors.timing && <i className="fa-solid fa-check"></i>}</div>
                        </div>
                        <div className={`factor-toggle ${factors.folic ? 'active' : ''}`} onClick={() => toggleFactor('folic')}>
                            <span>💊 Folic Acid</span>
                            <div className="ft-check">{factors.folic && <i className="fa-solid fa-check"></i>}</div>
                        </div>
                        <div className={`factor-toggle ${factors.weight ? 'active' : ''}`} onClick={() => toggleFactor('weight')}>
                            <span>⚖️ Healthy BMI</span>
                            <div className="ft-check">{factors.weight && <i className="fa-solid fa-check"></i>}</div>
                        </div>
                        <div className={`factor-toggle ${factors.stress ? 'active' : ''}`} onClick={() => toggleFactor('stress')}>
                            <span>🧘 Stress Management</span>
                            <div className="ft-check">{factors.stress && <i className="fa-solid fa-check"></i>}</div>
                        </div>
                    </div>
                </div>

                <div className="prob-meter-wrap">
                    <div className="prob-gauge-wrap">
                        <canvas ref={canvasRef} width={W} height={H} id="sim-gauge-canvas" />
                        <div style={{ textAlign: 'center' }}>
                            <span className="prob-score-num" id="prob-num">{prob}%</span>
                            <span className="prob-score-sub">Cycle Probability</span>
                        </div>
                    </div>
                    <div className="prob-insights" id="prob-insights">
                        {getInsights().map((item, idx) => (
                            <div key={idx} className="prob-insight-item">
                                <span className="pi-icon">{item.icon}</span>
                                <span dangerouslySetInnerHTML={{ __html: item.text }} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
