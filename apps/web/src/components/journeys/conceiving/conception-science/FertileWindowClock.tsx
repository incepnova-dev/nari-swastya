import React, { useEffect, useRef, useState } from 'react';
import { DAY_INFO } from '../conception-data';

export const FertileWindowClock: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [hovered, setHovered] = useState(-1);
    const [selected, setSelected] = useState(-1);
    const [showTooltip, setShowTooltip] = useState(false);
    const requestRef = useRef<number>();
    const animTRef = useRef(0);

    const W = 440, H = 440, CX = W / 2, CY = H / 2, R = 180;
    const DAYS = 28;
    const PI2 = Math.PI * 2;
    const PHASE_COLORS = [
        '#e74c3c', '#f5a623', '#06d6a0', '#f39c12', '#9b59b6'
    ];
    const PHASE_LABELS = ['Menstruation', 'Follicular', 'Fertile Window', 'Ovulation', 'Luteal Phase'];

    const phaseForDay = (d: number) => {
        if (d <= 5) return 0;
        if (d <= 9) return 1;
        if (d === 14) return 3;
        if (d >= 10 && d <= 17) return 2;
        return 4;
    };

    const draw = () => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        ctx.clearRect(0, 0, W, H);
        animTRef.current += 0.018;

        const selPhase = selected > 0 ? phaseForDay(selected) : -1;
        if (selPhase >= 0) {
            const bg = ctx.createRadialGradient(CX, CY, 0, CX, CY, R * 1.2);
            bg.addColorStop(0, PHASE_COLORS[selPhase] + '22');
            bg.addColorStop(1, 'rgba(255,248,250,0)');
            ctx.fillStyle = bg; ctx.fillRect(0, 0, W, H);
        }

        ctx.beginPath(); ctx.arc(CX, CY, R + 26, 0, PI2);
        ctx.strokeStyle = 'rgba(232,53,109,0.08)'; ctx.lineWidth = 18; ctx.stroke();

        ctx.beginPath(); ctx.arc(CX, CY, R + 26, 0, PI2);
        ctx.strokeStyle = 'rgba(232,53,109,0.04)'; ctx.lineWidth = 26; ctx.stroke();

        for (let d = 1; d <= DAYS; d++) {
            const startA = ((d - 1) / DAYS) * PI2 - Math.PI / 2;
            const endA = (d / DAYS) * PI2 - Math.PI / 2;
            const midA = (startA + endA) / 2;
            const phase = phaseForDay(d);
            const col = PHASE_COLORS[phase];
            const isHov = d === hovered;
            const isSel = d === selected;
            const rInner = isHov || isSel ? R - 22 : R - 18;
            const rOuter = isHov || isSel ? R + 22 : R + 18;
            const pulse = isSel ? 1 + 0.04 * Math.sin(animTRef.current * 3) : 1;

            ctx.save();
            ctx.beginPath();
            ctx.arc(CX, CY, rOuter * pulse, startA + 0.025, endA - 0.025);
            ctx.arc(CX, CY, rInner * pulse, endA - 0.025, startA + 0.025, true);
            ctx.closePath();
            ctx.fillStyle = isSel ? col : isHov ? col + 'cc' : col + (phase === 2 ? 'bb' : '77');
            if (isSel) { ctx.shadowColor = col; ctx.shadowBlur = 16; }
            ctx.fill();
            ctx.shadowBlur = 0;
            ctx.restore();

            const txtR = R;
            const tx = CX + Math.cos(midA) * txtR;
            const ty = CY + Math.sin(midA) * txtR;
            ctx.save();
            ctx.font = isSel ? 'bold 11px Manrope,sans-serif' : '9px Manrope,sans-serif';
            ctx.fillStyle = isSel ? 'white' : (isHov ? 'white' : 'rgba(80,30,50,0.7)');
            ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
            ctx.translate(tx, ty); ctx.rotate(midA + Math.PI / 2);
            ctx.fillText(String(d), 0, 0);
            ctx.restore();
        }

        const cg = ctx.createRadialGradient(CX, CY - 10, 5, CX, CY, R * .42);
        cg.addColorStop(0, '#fff8fb'); cg.addColorStop(1, '#ffeef4');
        ctx.beginPath(); ctx.arc(CX, CY, R * .44, 0, PI2);
        ctx.fillStyle = cg; ctx.shadowColor = 'rgba(232,53,109,.15)'; ctx.shadowBlur = 22;
        ctx.fill(); ctx.shadowBlur = 0;

        if (selected > 0) {
            const ph = phaseForDay(selected);
            ctx.save();
            ctx.font = 'bold 28px Manrope,sans-serif';
            ctx.fillStyle = PHASE_COLORS[ph];
            ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
            ctx.fillText('Day', CX, CY - 28);
            ctx.font = '900 52px Manrope,sans-serif';
            ctx.fillText(String(selected), CX, CY + 6);
            ctx.font = '700 11px Manrope,sans-serif';
            ctx.fillStyle = 'rgba(80,30,50,0.7)';
            ctx.fillText(PHASE_LABELS[ph].toUpperCase(), CX, CY + 36);
            ctx.restore();
        } else {
            ctx.save();
            ctx.font = '700 13px Manrope,sans-serif';
            ctx.fillStyle = 'rgba(180,30,80,0.6)';
            ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
            ctx.fillText('Click a day', CX, CY - 8);
            ctx.font = '600 11px Manrope,sans-serif';
            ctx.fillStyle = 'rgba(120,60,80,0.45)';
            ctx.fillText('to explore', CX, CY + 10);
            ctx.restore();
        }

        const ovA = (13 / 28) * PI2 - Math.PI / 2;
        const starX = CX + Math.cos(ovA) * (R + 40);
        const starY = CY + Math.sin(ovA) * (R + 40);
        ctx.save();
        ctx.font = `${14 + 2 * Math.sin(animTRef.current * 2)}px sans-serif`;
        ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
        ctx.fillText('🥚', starX, starY);
        ctx.restore();

        requestRef.current = requestAnimationFrame(draw);
    };

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const DPR = Math.min(window.devicePixelRatio || 1, 2);
        canvas.width = W * DPR;
        canvas.height = H * DPR;
        canvas.style.width = W + 'px';
        canvas.style.height = H + 'px';
        ctx.scale(DPR, DPR);

        requestRef.current = requestAnimationFrame(draw);
        return () => {
            if (requestRef.current) cancelAnimationFrame(requestRef.current);
        };
    }, [hovered, selected]);

    const getCanvasPos = (e: React.MouseEvent | React.TouchEvent) => {
        const canvas = canvasRef.current;
        if (!canvas) return { x: 0, y: 0 };
        const rect = canvas.getBoundingClientRect();
        const scaleX = W / rect.width;
        const scaleY = H / rect.height;
        const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
        const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
        return {
            x: (clientX - rect.left) * scaleX,
            y: (clientY - rect.top) * scaleY
        };
    };

    const dayFromPoint = (x: number, y: number) => {
        const dx = x - CX, dy = y - CY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < R - 24 || dist > R + 28) return -1;
        let ang = Math.atan2(dy, dx) + Math.PI / 2;
        if (ang < 0) ang += PI2;
        const d = Math.floor((ang / PI2) * DAYS) + 1;
        return Math.min(d, DAYS);
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        const { x, y } = getCanvasPos(e);
        const d = dayFromPoint(x, y);
        setHovered(d);
        setShowTooltip(d > 0);
    };

    const handleClick = (e: React.MouseEvent) => {
        const { x, y } = getCanvasPos(e);
        const d = dayFromPoint(x, y);
        if (d > 0) setSelected(d);
    };

    const handleTouchStart = (e: React.TouchEvent) => {
        const { x, y } = getCanvasPos(e);
        const d = dayFromPoint(x, y);
        if (d > 0) {
            setSelected(d);
            setHovered(d);
        }
    };

    const legendItems = [
        { id: 'leg-period', label: 'Menstruation (Days 1–5)', text: 'FSH rises, follicles begin developing. Progesterone at lowest. Uterine lining sheds.', evidence: 'WHO Reproductive Health Guidelines 2023', icon: '🩸', phase: 0, color: '#c0392b' },
        { id: 'leg-follicular', label: 'Follicular Phase (Days 6–12)', text: 'Dominant follicle selected. Estrogen surges → cervical mucus becomes fertile. LH begins rising.', evidence: 'ACOG Practice Bulletin No. 194, 2022', icon: '🌱', phase: 1, color: '#c47b00' },
        { id: 'leg-fertile', label: 'Fertile Window (Days 10–17)', text: 'LH surge triggers ovulation ~36h later. Sperm survive 3–5 days. Peak conception probability: 25–30%.', evidence: 'Wilcox et al., NEJM 2000 · Stanford 2021', icon: '✨', phase: 2, color: '#007d6f' },
        { id: 'leg-ovulation', label: 'Ovulation (Day 14 ± 2)', text: 'LH peaks, dominant follicle ruptures. Egg travels to fallopian tube. BBT rises 0.2–0.5°C.', evidence: 'Oxford Fertility Unit · BBT Research 2019', icon: '🥚', phase: 3, color: '#b34700' },
        { id: 'leg-luteal', label: 'Luteal Phase (Days 15–28)', text: 'Corpus luteum secretes progesterone. If fertilisation occurs, hCG maintains it. Otherwise, lining sheds.', evidence: 'Johns Hopkins — Menstrual Physiology', icon: '🌙', phase: 4, color: '#6c3483' }
    ];

    return (
        <div className="sim-clock-section">
            <div className="sim-section-label"><i className="fa-solid fa-clock-rotate-left"></i> Module 1</div>
            <h3 className="sim-section-h">The <span className="em">Fertile Window</span> Clock</h3>
            <p className="sim-section-sub">Click any day on the wheel to see what's happening in your body. Based on WHO's standard 28-day cycle model and Stanford Reproductive Endocrinology data.</p>

            <div className="clock-layout">
                <div className="clock-canvas-wrap">
                    <canvas
                        ref={canvasRef}
                        onMouseMove={handleMouseMove}
                        onMouseLeave={() => { setHovered(-1); setShowTooltip(false); }}
                        onClick={handleClick}
                        onTouchStart={handleTouchStart}
                        id="sim-cycle-canvas"
                    />
                    <div id="sim-day-tooltip" className={showTooltip ? 'show' : ''}>
                        {hovered > 0 ? DAY_INFO[hovered] : ''}
                    </div>
                </div>

                <div className="clock-legend">
                    {legendItems.map((item) => {
                        const isActive = (selected > 0 && phaseForDay(selected) === item.phase);
                        const style: React.CSSProperties = {
                            opacity: isActive ? '1' : (selected > 0 ? '0.45' : '1'),
                            transform: isActive ? 'translateX(8px)' : 'none',
                            borderColor: isActive ? PHASE_COLORS[item.phase] : '',
                            transition: 'all .3s'
                        };
                        return (
                            <div key={item.id} id={item.id} className="legend-item" style={style}>
                                <div className="legend-dot" style={{ background: `linear-gradient(135deg, ${PHASE_COLORS[item.phase]}, ${item.color})` }}>
                                    {item.icon}
                                </div>
                                <div className="legend-body">
                                    <div className="legend-name" style={{ color: item.color }}>{item.label}</div>
                                    <div className="legend-text">{item.text}</div>
                                    <div className="legend-evidence">{item.evidence}</div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};
