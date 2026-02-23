import React, { useEffect, useRef } from 'react';

export type TrimesterStage = 'first' | 'second' | 'third';

interface WombCanvasProps {
    stage: TrimesterStage;
}

export const WombCanvas: React.FC<WombCanvasProps> = ({ stage }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        canvas.width = 400;
        canvas.height = 380;
        const cx = 200, cy = 190;
        let t = 0;
        let animationId: number;

        const config = {
            first: { babySize: 0.18, color: '#f48fb1', label: '~3cm · Week 10' },
            second: { babySize: 0.38, color: '#ec407a', label: '~30cm · Week 20' },
            third: { babySize: 0.7, color: '#c2185b', label: '~50cm · Week 38' },
        }[stage];

        const draw = () => {
            ctx.clearRect(0, 0, 400, 380);

            // Womb shape
            ctx.beginPath();
            ctx.ellipse(cx, cy + 10, 110, 130, 0, 0, Math.PI * 2);
            const wg = ctx.createRadialGradient(cx, cy, 0, cx, cy, 130);
            wg.addColorStop(0, 'rgba(252,228,236,0.9)');
            wg.addColorStop(1, 'rgba(248,187,217,0.6)');
            ctx.fillStyle = wg;
            ctx.fill();
            ctx.strokeStyle = 'rgba(236,64,122,0.3)';
            ctx.lineWidth = 2;
            ctx.stroke();

            // Amniotic fluid shimmer
            const fm = Math.sin(t * 0.03);
            ctx.beginPath();
            ctx.ellipse(cx, cy + 10, 105, 125, 0, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(179,229,252,${0.12 + fm * 0.04})`;
            ctx.fill();

            // Umbilical cord
            if (config.babySize > 0.1) {
                ctx.beginPath();
                ctx.moveTo(cx, cy + 100 + 10);
                ctx.bezierCurveTo(cx + 30, cy + 80, cx - 20, cy + 50, cx + Math.sin(t * 0.05) * 15, cy + 20);
                ctx.strokeStyle = 'rgba(236,64,122,0.5)';
                ctx.lineWidth = 3;
                ctx.stroke();
            }

            // Baby figure
            const bs = config.babySize;
            const bpulse = 1 + Math.sin(t * 0.06) * 0.03;
            const bx = cx + Math.sin(t * 0.03) * 8;
            const by = cy + Math.cos(t * 0.04) * 6;

            // Baby head
            ctx.beginPath();
            ctx.arc(bx, by - 30 * bs, 22 * bs * bpulse, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(255,235,238,0.95)';
            ctx.fill();
            ctx.strokeStyle = config.color;
            ctx.lineWidth = 1.5;
            ctx.stroke();

            // Baby body
            ctx.beginPath();
            ctx.ellipse(bx, by + 10 * bs, 15 * bs, 28 * bs, 0, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(255,235,238,0.9)';
            ctx.fill();
            ctx.strokeStyle = config.color;
            ctx.lineWidth = 1;
            ctx.stroke();

            // Baby emoji
            if (config.babySize < 0.3) {
                ctx.font = `${14 * bs + 8}px serif`;
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillText('🤏', bx, by);
            }

            // Heartbeat dots
            const hbp = Math.sin(t * 0.2) > 0.5 ? 1 : 0;
            if (hbp) {
                ctx.beginPath();
                ctx.arc(bx, by - 30 * bs - 12, 5, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(236,64,122,0.7)';
                ctx.fill();
            }

            // Label
            ctx.font = 'bold 12px Manrope, sans-serif';
            ctx.textAlign = 'center';
            ctx.fillStyle = config.color;
            ctx.fillText(config.label, cx, 350);

            t++;
            animationId = requestAnimationFrame(draw);
        };

        draw();

        return () => cancelAnimationFrame(animationId);
    }, [stage]);

    return <canvas ref={canvasRef} style={{ width: '400px', height: '380px' }} />;
};
