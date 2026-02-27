import React, { useEffect, useRef } from 'react';

export const DnaCanvas: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let t = 0;
        let animationFrameId: number;

        const resize = () => {
            canvas.width = canvas.offsetWidth || 300;
            canvas.height = canvas.offsetHeight || 500;
        };

        resize();
        window.addEventListener('resize', resize);

        const colors1 = ['#ec407a', '#f06292', '#f48fb1'];
        const colors2 = ['#9c5cf7', '#ba68c8', '#ce93d8'];

        const draw = () => {
            const W = canvas.width;
            const H = canvas.height;
            ctx.clearRect(0, 0, W, H);

            const cx = W / 2;
            const steps = 90;
            const amp = W * 0.30;
            const twist = 0.13;

            // Draw rungs + dots
            for (let i = 0; i <= steps; i++) {
                const y = (i / steps) * H;
                const phase = (i / steps) * Math.PI * 6 + t * twist;

                const x1 = cx + Math.cos(phase) * amp;
                const x2 = cx + Math.cos(phase + Math.PI) * amp;

                const d1 = (Math.cos(phase) + 1) / 2;
                const d2 = (Math.cos(phase + Math.PI) + 1) / 2;

                const r1 = 2.5 + d1 * 5;
                const r2 = 2.5 + d2 * 5;

                // Rung every 7 steps
                if (i % 7 === 0) {
                    const rg = ctx.createLinearGradient(x1, y, x2, y);
                    rg.addColorStop(0, colors1[Math.floor(d1 * (colors1.length - 1))] + '99');
                    rg.addColorStop(1, colors2[Math.floor(d2 * (colors2.length - 1))] + '99');
                    ctx.beginPath();
                    ctx.moveTo(x1, y);
                    ctx.lineTo(x2, y);
                    ctx.strokeStyle = rg;
                    ctx.lineWidth = 1.5;
                    ctx.stroke();

                    // Glow at nodes
                    [{ x: x1, r: r1, c: colors1 }, { x: x2, r: r2, c: colors2 }].forEach(nd => {
                        const gi = ctx.createRadialGradient(nd.x, y, 0, nd.x, y, nd.r * 2.5);
                        gi.addColorStop(0, nd.c[0] + '55');
                        gi.addColorStop(1, 'transparent');
                        ctx.beginPath();
                        ctx.arc(nd.x, y, nd.r * 2.5, 0, Math.PI * 2);
                        ctx.fillStyle = gi;
                        ctx.fill();
                    });
                }

                // Strand dots
                ctx.beginPath();
                ctx.arc(x1, y, r1, 0, Math.PI * 2);
                ctx.fillStyle = colors1[Math.floor(d1 * (colors1.length - 1))];
                ctx.globalAlpha = 0.4 + d1 * 0.6;
                ctx.fill();
                ctx.globalAlpha = 1;

                ctx.beginPath();
                ctx.arc(x2, y, r2, 0, Math.PI * 2);
                ctx.fillStyle = colors2[Math.floor(d2 * (colors2.length - 1))];
                ctx.globalAlpha = 0.4 + d2 * 0.6;
                ctx.fill();
                ctx.globalAlpha = 1;
            }

            // Backbone splines
            ctx.beginPath();
            for (let i = 0; i <= steps; i++) {
                const y = (i / steps) * H;
                const x = cx + Math.cos((i / steps) * Math.PI * 6 + t * twist) * amp;
                i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
            }
            ctx.strokeStyle = 'rgba(236, 64, 122, 0.38)';
            ctx.lineWidth = 2;
            ctx.stroke();

            ctx.beginPath();
            for (let i = 0; i <= steps; i++) {
                const y = (i / steps) * H;
                const x = cx + Math.cos((i / steps) * Math.PI * 6 + t * twist + Math.PI) * amp;
                i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
            }
            ctx.strokeStyle = 'rgba(156, 92, 247, 0.38)';
            ctx.lineWidth = 2;
            ctx.stroke();

            t++;
            animationFrameId = requestAnimationFrame(draw);
        };

        draw();

        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            id="dnaLocalCanvas"
            style={{ width: '100%', height: '100%', display: 'block' }}
        />
    );
};
