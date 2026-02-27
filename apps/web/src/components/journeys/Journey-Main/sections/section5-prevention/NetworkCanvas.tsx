import React, { useEffect, useRef } from 'react';

export const NetworkCanvas: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const parent = canvas.closest('.s5-section') as HTMLElement;
        if (!parent) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let W: number, H: number, nodes: Node[] = [], ripples: Ripple[] = [], t = 0;
        let animationFrameId: number;

        const resize = () => {
            W = canvas.width = parent.offsetWidth;
            H = canvas.height = parent.offsetHeight;
        };

        class Node {
            x: number;
            y: number;
            vx: number;
            vy: number;
            r: number;
            hue: string;
            alpha: number;
            pulse: number;

            constructor() {
                this.x = Math.random() * W;
                this.y = Math.random() * H;
                this.vx = (Math.random() - 0.5) * 0.45;
                this.vy = (Math.random() - 0.5) * 0.45;
                this.r = Math.random() * 2.5 + 1.5;
                this.hue = Math.random() > 0.5 ? '#2e7d32' : '#ec407a';
                this.alpha = Math.random() * 0.45 + 0.2;
                this.pulse = Math.random() * Math.PI * 2;
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;
                if (this.x < 0 || this.x > W) this.vx *= -1;
                if (this.y < 0 || this.y > H) this.vy *= -1;
                this.pulse += 0.04;
            }

            draw() {
                const pr = this.r + Math.sin(this.pulse) * 1.2;
                const g = ctx!.createRadialGradient(this.x, this.y, 0, this.x, this.y, pr * 4);
                g.addColorStop(0, this.hue + '44');
                g.addColorStop(1, 'transparent');
                ctx!.beginPath();
                ctx!.arc(this.x, this.y, pr * 4, 0, Math.PI * 2);
                ctx!.fillStyle = g;
                ctx!.fill();
                ctx!.beginPath();
                ctx!.arc(this.x, this.y, pr, 0, Math.PI * 2);
                ctx!.fillStyle = this.hue;
                ctx!.globalAlpha = this.alpha;
                ctx!.fill();
                ctx!.globalAlpha = 1;
            }
        }

        interface Ripple {
            x: number;
            y: number;
            r: number;
            maxR: number;
            alpha: number;
            color: string;
        }

        resize();
        window.addEventListener('resize', resize);

        for (let i = 0; i < 55; i++) nodes.push(new Node());

        const spawnRipple = () => {
            const n = nodes[Math.floor(Math.random() * nodes.length)];
            ripples.push({
                x: n.x,
                y: n.y,
                r: 0,
                maxR: 80 + Math.random() * 60,
                alpha: 0.55,
                color: n.hue
            });
        };

        const intervalId = setInterval(spawnRipple, 700);

        const animate = () => {
            ctx.clearRect(0, 0, W, H);

            // Subtle background glow
            const bg = ctx.createRadialGradient(W * 0.3, H * 0.3, 0, W * 0.3, H * 0.3, W * 0.55);
            bg.addColorStop(0, 'rgba(46,125,50,0.04)');
            bg.addColorStop(1, 'rgba(46,125,50,0)');
            ctx.fillStyle = bg;
            ctx.fillRect(0, 0, W, H);

            // Ripples
            for (let i = ripples.length - 1; i >= 0; i--) {
                const rp = ripples[i];
                rp.r += 2;
                rp.alpha -= 0.009;
                if (rp.alpha <= 0) {
                    ripples.splice(i, 1);
                    continue;
                }
                ctx.beginPath();
                ctx.arc(rp.x, rp.y, rp.r, 0, Math.PI * 2);
                ctx.strokeStyle = rp.color;
                ctx.globalAlpha = rp.alpha * (1 - rp.r / rp.maxR);
                ctx.lineWidth = 1.5;
                ctx.stroke();
                ctx.globalAlpha = 1;
            }

            // Connections
            for (let i = 0; i < nodes.length; i++) {
                for (let j = i + 1; j < nodes.length; j++) {
                    const dx = nodes[i].x - nodes[j].x;
                    const dy = nodes[i].y - nodes[j].y;
                    const d = Math.sqrt(dx * dx + dy * dy);
                    if (d < 130) {
                        const g = ctx.createLinearGradient(nodes[i].x, nodes[i].y, nodes[j].x, nodes[j].y);
                        g.addColorStop(0, nodes[i].hue + '55');
                        g.addColorStop(1, nodes[j].hue + '55');
                        ctx.beginPath();
                        ctx.moveTo(nodes[i].x, nodes[i].y);
                        ctx.lineTo(nodes[j].x, nodes[j].y);
                        ctx.strokeStyle = g;
                        ctx.globalAlpha = 0.18 * (1 - d / 130);
                        ctx.lineWidth = 1;
                        ctx.stroke();
                        ctx.globalAlpha = 1;
                    }
                }
            }

            nodes.forEach(n => {
                n.update();
                n.draw();
            });

            t++;
            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', resize);
            clearInterval(intervalId);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            id="networkCanvas"
        />
    );
};
