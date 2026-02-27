import React, { useEffect, useRef } from 'react';

export const OrbitCanvas: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        canvas.width = 440;
        canvas.height = 440;
        const cx = 220, cy = 220;
        let t = 0;
        let animationId: number;

        const draw = () => {
            ctx.clearRect(0, 0, 440, 440);

            // Background glow
            const bg = ctx.createRadialGradient(cx, cy, 0, cx, cy, 180);
            bg.addColorStop(0, 'rgba(236,64,122,0.06)');
            bg.addColorStop(1, 'rgba(236,64,122,0)');
            ctx.fillStyle = bg;
            ctx.beginPath();
            ctx.arc(cx, cy, 180, 0, Math.PI * 2);
            ctx.fill();

            // Orbit rings
            [80, 130, 175].forEach((r, i) => {
                ctx.beginPath();
                ctx.arc(cx, cy, r, 0, Math.PI * 2);
                ctx.strokeStyle = `rgba(236,64,122,${0.12 - i * 0.02})`;
                ctx.lineWidth = 1;
                ctx.setLineDash([4, 4]);
                ctx.stroke();
                ctx.setLineDash([]);
            });

            // Inner: Egg cell (center)
            const eggPulse = 1 + Math.sin(t * 0.04) * 0.08;
            const eg = ctx.createRadialGradient(cx, cy, 0, cx, cy, 38);
            eg.addColorStop(0, '#fce4ec');
            eg.addColorStop(0.6, '#f48fb1');
            eg.addColorStop(1, '#ec407a');
            ctx.beginPath();
            ctx.arc(cx, cy, 38 * eggPulse, 0, Math.PI * 2);
            ctx.fillStyle = eg;
            ctx.shadowColor = 'rgba(236,64,122,0.4)';
            ctx.shadowBlur = 18;
            ctx.fill();
            ctx.shadowBlur = 0;
            ctx.font = '20px serif';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText('🥚', cx, cy);

            // Orbit 1: Sperm on inner orbit
            const sp1 = { x: cx + Math.cos(t * 0.025) * 80, y: cy + Math.sin(t * 0.025) * 80 };
            ctx.beginPath();
            ctx.arc(sp1.x, sp1.y, 12, 0, Math.PI * 2);
            ctx.fillStyle = '#7c3aed';
            ctx.fill();
            ctx.font = '12px serif';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText('🔬', sp1.x, sp1.y);

            // Orbit 2: Hormones mid orbit
            const hormones = ['FSH', 'LH', 'E2', 'P4'];
            hormones.forEach((h, i) => {
                const a = t * 0.018 + (i * Math.PI) / 2;
                const px = cx + Math.cos(a) * 130;
                const py = cy + Math.sin(a) * 130;
                ctx.beginPath();
                ctx.arc(px, py, 16, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(236,64,122,0.1)';
                ctx.fill();
                ctx.strokeStyle = 'rgba(236,64,122,0.5)';
                ctx.lineWidth = 1.5;
                ctx.stroke();
                ctx.font = 'bold 8px Manrope,sans-serif';
                ctx.fillStyle = '#c2185b';
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillText(h, px, py);
            });

            // Orbit 3: Fertility milestones
            const milestones = [
                { e: '🌱', l: 'Ovulation' },
                { e: '💊', l: 'Folate' },
                { e: '🧬', l: 'Genetics' },
                { e: '🩺', l: 'Check-up' },
            ];
            milestones.forEach((m, i) => {
                const a = -t * 0.012 + (i * Math.PI) / 2;
                const px = cx + Math.cos(a) * 175;
                const py = cy + Math.sin(a) * 175;
                ctx.beginPath();
                ctx.arc(px, py, 20, 0, Math.PI * 2);
                const cg2 = ctx.createRadialGradient(px, py, 0, px, py, 20);
                cg2.addColorStop(0, '#ede7f6');
                cg2.addColorStop(1, '#d1c4e9');
                ctx.fillStyle = cg2;
                ctx.fill();
                ctx.font = '14px serif';
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillText(m.e, px, py - 3);
                ctx.font = 'bold 7px Manrope,sans-serif';
                ctx.fillStyle = '#6a1b9a';
                ctx.fillText(m.l, px, py + 10);
            });

            t++;
            animationId = requestAnimationFrame(draw);
        };

        draw();

        return () => cancelAnimationFrame(animationId);
    }, []);

    return <canvas ref={canvasRef} id="orbitCanvas" style={{ width: '100%', height: '100%' }} />;
};
