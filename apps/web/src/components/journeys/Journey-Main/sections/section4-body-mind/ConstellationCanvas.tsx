import React, { useEffect, useRef } from 'react';

export const ConstellationCanvas: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const parent = canvas.parentElement;
        if (!parent) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let W: number, H: number, stars: Star[] = [], t = 0;
        let animationFrameId: number;

        const resize = () => {
            W = canvas.width = parent.offsetWidth;
            H = canvas.height = parent.offsetHeight;
        };

        class Star {
            x: number;
            y: number;
            r: number;
            twinkle: number;
            speed: number;

            constructor() {
                this.x = Math.random() * W;
                this.y = Math.random() * H;
                this.r = Math.random() * 1.5 + 0.3;
                this.twinkle = Math.random() * Math.PI * 2;
                this.speed = Math.random() * 0.003 + 0.001;
            }

            draw() {
                const a = 0.3 + Math.sin(this.twinkle + t * this.speed) * 0.25;
                ctx!.beginPath();
                ctx!.arc(this.x, this.y, this.r, 0, Math.PI * 2);
                ctx!.fillStyle = `rgba(236, 64, 122, ${a})`;
                ctx!.fill();
            }
        }

        resize();
        window.addEventListener('resize', resize);

        for (let i = 0; i < 80; i++) stars.push(new Star());

        const animate = () => {
            ctx.clearRect(0, 0, W, H);
            stars.forEach(s => s.draw());

            if (t % 200 < 2) {
                const sx = Math.random() * W;
                const sy = Math.random() * H * 0.5;
                ctx.beginPath();
                ctx.moveTo(sx, sy);
                ctx.lineTo(sx + 60, sy + 20);
                const sg = ctx.createLinearGradient(sx, sy, sx + 60, sy + 20);
                sg.addColorStop(0, 'rgba(236, 64, 122, .5)');
                sg.addColorStop(1, 'rgba(236, 64, 122, 0)');
                ctx.strokeStyle = sg;
                ctx.lineWidth = 1.5;
                ctx.stroke();
            }

            t++;
            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            id="constellationCanvas"
        />
    );
};
