import React, { useEffect, useRef } from 'react';
import '../../../../styles/journey/conceiving-hero.css';

export const ConceivingHero: React.FC = () => {
    const particleCanvasRef = useRef<HTMLCanvasElement>(null);
    const petalLayerRef = useRef<HTMLDivElement>(null);
    const heroCanvasRef = useRef<HTMLCanvasElement>(null);

    // ─── 1. BACKGROUND PARTICLE NETWORK (heroParticleCanvas) ───────────────
    useEffect(() => {
        const canvas = particleCanvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        function resize() {
            const hero = canvas!.closest('.hero') as HTMLElement || canvas!.parentElement as HTMLElement;
            canvas!.width = hero.offsetWidth;
            canvas!.height = hero.offsetHeight;
        }
        resize();
        window.addEventListener('resize', resize);

        const particleCount = 80;
        const particles: { x: number; y: number; vx: number; vy: number; radius: number; update: () => void; draw: () => void }[] = [];

        class Particle {
            x: number; y: number; vx: number; vy: number; radius: number;
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

        for (let i = 0; i < particleCount; i++) particles.push(new Particle() as any);

        function connectParticles() {
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    if (distance < 100) {
                        ctx!.beginPath();
                        ctx!.moveTo(particles[i].x, particles[i].y);
                        ctx!.lineTo(particles[j].x, particles[j].y);
                        ctx!.strokeStyle = `rgba(236, 64, 122, ${0.2 * (1 - distance / 100)})`;
                        ctx!.lineWidth = 1;
                        ctx!.stroke();
                    }
                }
            }
        }

        let rafId: number;
        function animate() {
            ctx!.clearRect(0, 0, canvas!.width, canvas!.height);
            particles.forEach(p => { p.update(); p.draw(); });
            connectParticles();
            rafId = requestAnimationFrame(animate);
        }
        animate();

        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(rafId);
        };
    }, []);

    // ─── 2. PETAL LAYER (heroPetalLayer) ────────────────────────────────────
    useEffect(() => {
        const layer = petalLayerRef.current;
        if (!layer) return;
        const colors = [
            'rgba(252,228,236,0.6)', 'rgba(248,187,208,0.5)',
            'rgba(237,231,246,0.5)', 'rgba(244,143,177,0.4)'
        ];

        const l = layer;
        function createCell() {
            const el = document.createElement('div');
            const sz = Math.random() * 8 + 4;
            const dur = Math.random() * 14 + 10;
            const delay = Math.random() * 6;
            el.style.cssText = `position:absolute;border-radius:50%;left:${Math.random() * 100}%;width:${sz}px;height:${sz}px;background:${colors[Math.floor(Math.random() * colors.length)]};animation:petal-fall ${dur}s ${delay}s linear infinite;border:1px solid rgba(236,64,122,0.15);`;
            l.appendChild(el);
            setTimeout(() => el.remove(), (dur + delay + 1) * 1000);
        }

        const timeouts: ReturnType<typeof setTimeout>[] = [];
        for (let i = 0; i < 10; i++) { timeouts.push(setTimeout(createCell, i * 500)); }
        const interval = setInterval(createCell, 1200);

        return () => {
            timeouts.forEach(t => clearTimeout(t));
            clearInterval(interval);
        };
    }, []);

    // ─── 3. FERTILITY HERO CANVAS — 7-Phase Biological Animation ────────────
    useEffect(() => {
        const canvas = heroCanvasRef.current;
        if (!canvas) return;
        const ctxRaw = canvas.getContext('2d');
        if (!ctxRaw) return;
        const ctx = ctxRaw; // locally scoped non-null reference for TypeScript

        const DPR = window.devicePixelRatio || 1;
        const SIZE = 420;
        canvas.width = SIZE * DPR;
        canvas.height = SIZE * DPR;
        canvas.style.width = SIZE + 'px';
        canvas.style.height = SIZE + 'px';
        ctx.scale(DPR, DPR);

        const cx = SIZE / 2, cy = SIZE / 2, R = SIZE / 2;
        const PI2 = Math.PI * 2;

        // Phase label DOM element
        const phaseEl = document.getElementById('heroPhaseText');
        const PHASE_NAMES = [
            'Womb Awakening', 'The Journey Begins', 'The Race to Life',
            'The Miraculous Moment', 'First Division', 'Blastocyst Forms', 'Implantation — Home'
        ];
        let _phIdx = -1, loopCount = 0;

        function setPhase(i: number, loop: number) {
            const key = loop * 10 + i;
            if (key === _phIdx || !phaseEl) return;
            _phIdx = key;
            phaseEl.style.opacity = '0';
            setTimeout(() => { phaseEl.textContent = PHASE_NAMES[i]; phaseEl.style.opacity = '1'; }, 200);
        }
        if (phaseEl) phaseEl.style.transition = 'opacity 0.35s';

        // Math helpers
        function cl(v: number, a: number, b: number) { return v < a ? a : v > b ? b : v; }
        function lp(a: number, b: number, t: number) { return a + (b - a) * t; }
        function eO(t: number) { t = cl(t, 0, 1); return 1 - Math.pow(1 - t, 3); }
        function eIO(t: number) { t = cl(t, 0, 1); return t < .5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2; }
        function sm(t: number) { t = cl(t, 0, 1); return t * t * (3 - 2 * t); }

        // Static data
        const VILLI = Array.from({ length: 34 }, (_, i) => ({
            ang: (i / 34) * PI2,
            len: 28 + ((i * 7919) % 100) * .22,
            w: 3.5 + ((i * 3571) % 100) * .03,
            ph: ((i * 2741) % 628) * .01,
            sp: .5 + ((i * 1427) % 100) * .012,
            bulb: 4 + ((i * 9001) % 100) * .025
        }));

        const SPERM = Array.from({ length: 8 }, (_, i) => ({
            bAng: (i / 8) * PI2 + (((i * 37) % 20) - .10) * .3,
            sDist: R * .70 + ((i * 541) % 100) * .001 * R * .08,
            phOff: ((i * 1231) % 628) * .01,
            tFreq: 5 + ((i * 739) % 100) * .025,
            tAmp: .30 + ((i * 421) % 100) * .002,
            spd: .88 + ((i * 317) % 100) * .002,
            wAmp: .15 + ((i * 613) % 100) * .002,
            wSpd: .35 + ((i * 827) % 100) * .005,
            win: i === 0,
            col: i === 0 ? '#e91e8c' : `hsl(${295 + i * 18},72%,${55 + i * 4}%)`
        }));

        const ORBS = Array.from({ length: 12 }, (_, i) => ({
            ang: (i / 12) * PI2,
            dist: R * .38 + ((i * 619) % 100) * .0028 * R,
            spd: (.003 + ((i * 311) % 100) * .00004) * (i % 2 ? 1 : -1),
            r: 2 + ((i * 773) % 100) * .02,
            ph: ((i * 1009) % 628) * .01,
            hue: 305 + i * 16
        }));

        // Draw helpers
        function wombBg(phase: number, pt: number) {
            const colors: string[][] = [
                ['#fff5f0', '#ffe4ec', '#f5d0e0', '#eac0d2'],
                ['#fff8f0', '#ffeade', '#f8d8c8', '#eecab8'],
                ['#fff6ee', '#fde8d0', '#f5d5b8', '#e8c8a8'],
                ['#fffde8', '#fff5b0', '#fde890', '#f0d860'],
                ['#f0f8ff', '#e8f4ff', '#d8ecff', '#c8e0f8'],
                ['#fff0fa', '#fce4ff', '#f0d0ff', '#e4beff'],
                ['#fff0f5', '#ffe4ec', '#f8d0e0', '#ecc0d4'],
            ];
            const c = colors[phase] || colors[0];
            const g = ctx.createRadialGradient(cx, cy - 15, 5, cx, cy, R);
            g.addColorStop(0, c[0]); g.addColorStop(.45, c[1]);
            g.addColorStop(.8, c[2]); g.addColorStop(1, c[3]);
            ctx.fillStyle = g; ctx.fillRect(0, 0, SIZE, SIZE);
            const b = .18 + .1 * Math.sin(pt * PI2 * .5);
            const w = ctx.createRadialGradient(cx, cy, 0, cx, cy, R * .7);
            w.addColorStop(0, `rgba(255,210,170,${b})`); w.addColorStop(1, 'rgba(255,210,170,0)');
            ctx.fillStyle = w; ctx.fillRect(0, 0, SIZE, SIZE);
        }

        function drawVilli(t: number, alpha: number) {
            if (alpha <= 0) return;
            VILLI.forEach(v => {
                const sway = Math.sin(t * v.sp + v.ph) * .2;
                const rx = cx + Math.cos(v.ang) * (R - 2);
                const ry = cy + Math.sin(v.ang) * (R - 2);
                const iAng = v.ang + Math.PI + sway;
                const tx = rx + Math.cos(iAng) * v.len;
                const ty = ry + Math.sin(iAng) * v.len;
                const cpx = (rx + tx) / 2 + Math.cos(v.ang + Math.PI / 2) * 12 * Math.sin(t * .6 + v.ph);
                const cpy = (ry + ty) / 2 + Math.sin(v.ang + Math.PI / 2) * 12 * Math.sin(t * .6 + v.ph);
                const a2 = alpha * (.7 + .25 * Math.sin(t * 1.1 + v.ph));
                ctx.save();
                const vg = ctx.createLinearGradient(rx, ry, tx, ty);
                vg.addColorStop(0, `rgba(200,40,100,${a2 * .95})`);
                vg.addColorStop(.6, `rgba(230,80,130,${a2 * .65})`);
                vg.addColorStop(1, `rgba(255,145,175,${a2 * .2})`);
                ctx.beginPath(); ctx.moveTo(rx, ry); ctx.quadraticCurveTo(cpx, cpy, tx, ty);
                ctx.strokeStyle = vg; ctx.lineWidth = v.w; ctx.lineCap = 'round'; ctx.stroke();
                ctx.beginPath(); ctx.arc(tx, ty, v.bulb, 0, PI2);
                const bg = ctx.createRadialGradient(tx, ty, 0, tx, ty, v.bulb * 1.5);
                bg.addColorStop(0, `rgba(255,160,195,${a2 * .92})`);
                bg.addColorStop(1, 'rgba(200,40,100,0)');
                ctx.fillStyle = bg; ctx.fill();
                ctx.restore();
            });
        }

        function drawEgg(x: number, y: number, r: number, glow: number, t: number, alpha = 1) {
            if (alpha <= 0) return;
            ctx.save(); ctx.globalAlpha = alpha;
            const halo = ctx.createRadialGradient(x, y, r, x, y, r * 3 + glow * 40);
            halo.addColorStop(0, `rgba(255,210,80,${.28 + glow * .25})`);
            halo.addColorStop(.5, `rgba(255,185,50,${.12 + glow * .1})`);
            halo.addColorStop(1, 'rgba(255,200,80,0)');
            ctx.beginPath(); ctx.arc(x, y, r * 3 + glow * 40, 0, PI2);
            ctx.fillStyle = halo; ctx.fill();
            // Zona pellucida
            const zg = ctx.createRadialGradient(x - r * .15, y - r * .2, 0, x, y, r);
            zg.addColorStop(0, 'rgba(255,245,190,.95)');
            zg.addColorStop(.55, 'rgba(255,225,130,.88)');
            zg.addColorStop(.85, 'rgba(255,200,70,.6)');
            zg.addColorStop(1, 'rgba(255,180,40,.2)');
            ctx.beginPath(); ctx.arc(x, y, r, 0, PI2); ctx.fillStyle = zg; ctx.fill();
            // Corona rays
            for (let i = 0; i < 28; i++) {
                const a = (i / 28) * PI2 + t * .4;
                const len = 10 + 6 * Math.sin(t * 3 + i * .7);
                const rA = .45 + .35 * Math.sin(t * 2.5 + i * .5);
                ctx.beginPath();
                ctx.moveTo(x + Math.cos(a) * (r * .82), y + Math.sin(a) * (r * .82));
                ctx.lineTo(x + Math.cos(a) * (r + len), y + Math.sin(a) * (r + len));
                ctx.strokeStyle = `rgba(255,215,60,${rA})`; ctx.lineWidth = 1.5 + glow; ctx.stroke();
            }
            ctx.restore();
        }

        function drawSperm(x: number, y: number, headAng: number, tPhase: number, tAmp: number, alpha: number, col: string, tailA: number) {
            if (alpha <= 0) return;
            ctx.save(); ctx.globalAlpha = alpha;
            // Head
            ctx.save(); ctx.translate(x, y); ctx.rotate(headAng);
            const hg = ctx.createRadialGradient(-3, -2, 0, 0, 0, 7);
            hg.addColorStop(0, 'rgba(255,255,255,.98)'); hg.addColorStop(.5, col + 'dd'); hg.addColorStop(1, col + '44');
            ctx.beginPath(); ctx.ellipse(0, 0, 8, 5, 0, 0, PI2); ctx.fillStyle = hg; ctx.fill();
            ctx.restore();
            // Tail segments
            const segments = 12;
            for (let s = 0; s < segments; s++) {
                const frac = (s + 1) / segments;
                const tOff = frac * 2.8;
                const wob = Math.sin(tPhase - tOff) * tAmp * 38 * frac;
                const perpAng = headAng + Math.PI / 2;
                const segLen = 6;
                const tailX = x + Math.cos(headAng + Math.PI) * s * segLen + Math.cos(perpAng) * wob;
                const tailY = y + Math.sin(headAng + Math.PI) * s * segLen + Math.sin(perpAng) * wob;
                const nextX = x + Math.cos(headAng + Math.PI) * (s + 1) * segLen + Math.cos(perpAng) * (Math.sin(tPhase - tOff - .3) * tAmp * 38 * frac);
                const nextY = y + Math.sin(headAng + Math.PI) * (s + 1) * segLen + Math.sin(perpAng) * (Math.sin(tPhase - tOff - .3) * tAmp * 38 * frac);
                const segA = tailA * (1 - frac * .7);
                ctx.beginPath(); ctx.moveTo(tailX, tailY); ctx.lineTo(nextX, nextY);
                ctx.strokeStyle = col + Math.floor(segA * 255).toString(16).padStart(2, '0');
                ctx.lineWidth = 3 * (1 - frac * .7); ctx.lineCap = 'round'; ctx.stroke();
            }
            ctx.restore();
        }

        function drawBlastocyst(x: number, y: number, r: number, t: number, alpha: number) {
            if (alpha <= 0) return;
            ctx.save(); ctx.globalAlpha = alpha;
            // Trophoblast ring
            for (let i = 0; i < 22; i++) {
                const a = (i / 22) * PI2 + t * .25;
                const ro = r + Math.sin(t * 1.4 + i * .7) * 4;
                const bx2 = x + Math.cos(a) * ro;
                const by2 = y + Math.sin(a) * ro;
                const tg = ctx.createRadialGradient(bx2, by2, 0, bx2, by2, 9);
                tg.addColorStop(0, `hsla(${314 + i * 7},62%,74%,.97)`); tg.addColorStop(1, 'rgba(255,170,190,0)');
                ctx.beginPath(); ctx.arc(bx2, by2, 9, 0, PI2); ctx.fillStyle = tg; ctx.fill();
                ctx.beginPath();
                ctx.moveTo(bx2, by2);
                const nb = (i + 1) % 22;
                const na = (nb / 22) * PI2 + t * .25;
                ctx.lineTo(x + Math.cos(na) * ro, y + Math.sin(na) * ro);
                ctx.strokeStyle = `hsla(${314 + i * 7},62%,50%,.42)`; ctx.lineWidth = 1.4; ctx.stroke();
            }
            // Blastocoel fluid
            const bv = ctx.createRadialGradient(x + r * .22, y - r * .15, 0, x, y, r * .78);
            bv.addColorStop(0, 'rgba(200,232,255,.96)');
            bv.addColorStop(.55, 'rgba(175,215,255,.62)');
            bv.addColorStop(1, 'rgba(148,195,255,0)');
            ctx.beginPath(); ctx.arc(x, y, r * .78, 0, PI2); ctx.fillStyle = bv; ctx.fill();
            // ICM
            const ix = x - r * .32, iy = y - r * .2;
            const ig = ctx.createRadialGradient(ix, iy, 0, ix, iy, r * .52);
            ig.addColorStop(0, 'rgba(255,218,142,.99)');
            ig.addColorStop(.45, 'rgba(255,185,100,.92)');
            ig.addColorStop(1, 'rgba(255,148,72,0)');
            ctx.beginPath(); ctx.arc(ix, iy, r * .52, 0, PI2); ctx.fillStyle = ig; ctx.fill();
            ctx.restore();
        }

        function drawCaption(phase: number, pt: number) {
            const captions = [
                { title: '① Womb Awakening', desc: '34 villi sway like sea anemones, lit from within' },
                { title: '② The Journey', desc: '8 sperm enter with bioluminescent trails' },
                { title: '③ The Race', desc: 'Tails whip faster — one sperm wins the race' },
                { title: '④ Fertilisation', desc: '5 shockwaves + 18 rays explode at the moment of union' },
                { title: '⑤ First Division', desc: '1 → 2 → 4 → 8 cells, each split flashes with light' },
                { title: '⑥ Blastocyst', desc: 'Fluid cavity forms, ICM & trophoblast differentiate' },
                { title: '⑦ Implantation', desc: '9 tendrils anchor — a new life finds its home ♡' },
            ];
            const cap = captions[phase]; if (!cap) return;
            let a: number;
            if (pt < .18) a = sm(pt / .18);
            else if (pt < .82) a = 1;
            else a = sm(1 - (pt - .82) / .18);
            if (a <= 0) return;
            const bw = SIZE - 28, bh = 48, bx2 = 14, by2 = 12;
            ctx.save(); ctx.globalAlpha = a * .88;
            ctx.beginPath(); ctx.roundRect(bx2, by2, bw, bh, 12);
            ctx.fillStyle = 'rgba(255,255,255,.78)';
            ctx.shadowColor = 'rgba(200,30,100,.18)'; ctx.shadowBlur = 16;
            ctx.fill(); ctx.shadowBlur = 0;
            ctx.beginPath(); ctx.roundRect(bx2, by2, bw, 3, 2);
            ctx.fillStyle = 'rgba(220,40,110,.75)'; ctx.fill();
            ctx.globalAlpha = a; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
            ctx.font = `700 12.5px 'Manrope',system-ui,sans-serif`;
            ctx.fillStyle = 'rgba(180,20,80,1)';
            ctx.fillText(cap.title, SIZE / 2, by2 + 16);
            ctx.font = `500 10.5px 'Manrope',system-ui,sans-serif`;
            ctx.fillStyle = 'rgba(80,40,60,.85)';
            ctx.fillText(cap.desc, SIZE / 2, by2 + 34);
            ctx.restore();
        }

        // Timing: 7 phases × 3s = 21s loop
        const PHASE_DUR = 3, TOTAL = 21, PAUSE_DUR = 1.5;
        let STATE = 'PLAYING', cycleStart: number | null = null, pauseStart: number | null = null;

        function getPhaseAndPt(t: number) {
            const phase = Math.min(6, Math.floor(t / PHASE_DUR));
            const pt = (t - phase * PHASE_DUR) / PHASE_DUR;
            return { phase, pt };
        }

        let lastFrameImg: ImageData | null = null;
        function drawFrozenLastFrame() {
            if (lastFrameImg) ctx.putImageData(lastFrameImg, 0, 0);
        }

        let rafId: number;
        function render(ts: number) {
            if (STATE === 'PAUSING') {
                if (pauseStart === null) pauseStart = ts;
                drawFrozenLastFrame();
                if ((ts - pauseStart) / 1000 >= PAUSE_DUR) {
                    STATE = 'PLAYING'; cycleStart = ts; pauseStart = null; loopCount++;
                }
                rafId = requestAnimationFrame(render);
                return;
            }
            if (cycleStart === null) cycleStart = ts;
            const elapsed = (ts - cycleStart) / 1000;
            if (elapsed >= TOTAL) {
                STATE = 'PAUSING'; pauseStart = ts;
                drawFrozenLastFrame();
                rafId = requestAnimationFrame(render);
                return;
            }
            const t = elapsed;
            const { phase, pt } = getPhaseAndPt(t);
            setPhase(phase, loopCount);

            ctx.clearRect(0, 0, SIZE, SIZE);
            ctx.save();
            ctx.beginPath(); ctx.arc(cx, cy, R - 1, 0, PI2); ctx.clip();
            wombBg(phase, pt);

            // Phase 0 — Womb Awakening
            if (phase === 0) {
                const v = eO(pt);
                const wb = ctx.createRadialGradient(cx, cy, 0, cx, cy, R * (.2 + v * .72));
                wb.addColorStop(0, `rgba(255,195,120,${v * .58})`);
                wb.addColorStop(.55, `rgba(255,168,95,${v * .28})`);
                wb.addColorStop(1, 'rgba(255,168,95,0)');
                ctx.fillStyle = wb; ctx.fillRect(0, 0, SIZE, SIZE);
                drawVilli(t, v);
                for (let i = 0; i < 22; i++) {
                    const sa = (i / 22) * PI2 + t * .65;
                    const sd = R * (.12 + v * .52);
                    const sA = v * .68 * (.5 + .4 * Math.sin(t * 4.2 + i));
                    ctx.beginPath(); ctx.arc(cx + Math.cos(sa) * sd, cy + Math.sin(sa) * sd, 3 + v * 3.2, 0, PI2);
                    ctx.fillStyle = `rgba(255,140,178,${sA})`; ctx.fill();
                }
                const pulse = .5 + .5 * Math.sin(t * 4.8);
                const pg = ctx.createRadialGradient(cx, cy, 0, cx, cy, R * .38 * pulse);
                pg.addColorStop(0, `rgba(255,218,175,${pulse * .45})`); pg.addColorStop(1, 'rgba(255,218,175,0)');
                ctx.fillStyle = pg; ctx.fillRect(0, 0, SIZE, SIZE);
            }

            // Phase 1 — The Journey
            if (phase === 1) {
                drawVilli(t, 1);
                const eA = sm(cl(pt * 1.8, 0, 1));
                drawEgg(cx, cy, 42, .32 + .2 * Math.sin(t * 2.2), t * 1.5, eA);
                SPERM.forEach(sp => {
                    const prog = eIO(pt) * sp.spd;
                    const dist = lp(sp.sDist, 54, cl(prog, 0, 1));
                    const wob = Math.sin(t * sp.wSpd + sp.phOff) * sp.wAmp;
                    const ang = sp.bAng + wob;
                    const sx = cx + Math.cos(ang) * dist;
                    const sy = cy + Math.sin(ang) * dist;
                    drawSperm(sx, sy, Math.atan2(cy - sy, cx - sx), t * sp.tFreq + sp.phOff, sp.tAmp, eA, sp.col, .96);
                });
            }

            // Phase 2 — The Race
            if (phase === 2) {
                drawVilli(t, .78);
                drawEgg(cx, cy, 44, .72 + .4 * Math.sin(t * 3.2), t * 2.2, 1);
                SPERM.forEach(sp => {
                    const prog = sp.spd * (.52 + eIO(pt) * .48);
                    const dist = lp(sp.sDist, 54, cl(prog, 0, 1));
                    const wob = Math.sin(t * sp.wSpd * 1.7 + sp.phOff) * sp.wAmp * 1.45;
                    const ang = sp.bAng + wob;
                    const sx = cx + Math.cos(ang) * dist;
                    const sy = cy + Math.sin(ang) * dist;
                    let alpha = 1;
                    if (!sp.win && pt > .58) alpha = cl(1 - (pt - .58) / .42, 0, 1);
                    if (!sp.win && dist < 76) alpha *= cl((dist - 54) / 22, 0, 1);
                    drawSperm(sx, sy, Math.atan2(cy - sy, cx - sx), t * sp.tFreq * 1.62 + sp.phOff, sp.tAmp * 1.42, alpha, sp.col, .98);
                });
            }

            // Phase 3 — Fertilisation flash
            if (phase === 3) {
                drawVilli(t, .78);
                const flashA = pt < .2 ? 0 : sm(cl((pt - .2) / .3, 0, 1));
                for (let i = 0; i < 5; i++) {
                    const fr = (pt - .2) / .8;
                    const shockR = cl(fr, 0, 1) * R * (i + 1) * .2;
                    const sa = sm(cl(1 - fr * 1.1, 0, 1)) * .7;
                    ctx.beginPath(); ctx.arc(cx, cy, shockR, 0, PI2);
                    ctx.strokeStyle = `rgba(255,230,50,${sa})`; ctx.lineWidth = 6 - i; ctx.stroke();
                }
                if (flashA > 0) {
                    const eg = ctx.createRadialGradient(cx, cy, 0, cx, cy, R * .7);
                    eg.addColorStop(0, `rgba(255,245,150,${flashA * .7})`); eg.addColorStop(1, 'rgba(255,245,150,0)');
                    ctx.fillStyle = eg; ctx.fillRect(0, 0, SIZE, SIZE);
                    drawEgg(cx, cy, 48, 1, t * 2.5, flashA);
                }
            }

            // Phase 4 — Cell division
            if (phase === 4) {
                drawVilli(t, .45);
                const dp = pt;
                let cellN = 1;
                if (dp < .25) cellN = 1;
                else if (dp < .52) cellN = 2;
                else if (dp < .78) cellN = 4;
                else cellN = 8;
                const cellColors = ['#e91e8c', '#9c27b0', '#00bcd4', '#ff9800'];
                const cellR = 28 / (cellN === 8 ? 2 : 1);
                for (let i = 0; i < cellN; i++) {
                    const a = (i / cellN) * PI2 + t * .5;
                    const dist = cellN === 1 ? 0 : R * (.18 + cellN * .05);
                    const bx2 = cx + Math.cos(a) * dist;
                    const by2 = cy + Math.sin(a) * dist;
                    const cg = ctx.createRadialGradient(bx2, by2, 0, bx2, by2, cellR);
                    cg.addColorStop(0, `rgba(255,240,180,.98)`); cg.addColorStop(.7, `${cellColors[i % 4]}88`); cg.addColorStop(1, 'rgba(255,200,100,0)');
                    ctx.beginPath(); ctx.arc(bx2, by2, cellR, 0, PI2); ctx.fillStyle = cg; ctx.fill();
                }
            }

            // Phase 5 — Blastocyst
            if (phase === 5) {
                const ba = eO(pt);
                drawBlastocyst(cx, cy, 68 + ba * 14, t * 1.1, ba);
            }

            // Phase 6 — Implantation
            if (phase === 6) {
                const ia = eO(pt);
                const bcy = cy - ia * 52;
                drawVilli(t, ia * .78);
                drawBlastocyst(cx, bcy, 66, t * .88, 1);
                if (pt > .38) {
                    const ca = sm((pt - .38) / .62);
                    const tg = ctx.createRadialGradient(cx, cy + R * .3, 0, cx, cy + R * .3, R * .46);
                    tg.addColorStop(0, `rgba(255,255,255,${ca * .72})`); tg.addColorStop(1, 'rgba(255,255,255,0)');
                    ctx.fillStyle = tg; ctx.fillRect(0, 0, SIZE, SIZE);
                    ctx.save(); ctx.globalAlpha = ca * .96;
                    ctx.font = `700 14.5px 'Manrope',sans-serif`; ctx.textAlign = 'center'; ctx.fillStyle = '#ad1457';
                    ctx.fillText('You are becoming', cx, cy + R * .3);
                    ctx.font = `700 20px 'Manrope',sans-serif`; ctx.fillStyle = '#d81b60';
                    ctx.fillText('a mother  ♡', cx, cy + R * .3 + 26);
                    ctx.restore();
                }
            }

            drawCaption(phase, pt);

            ORBS.forEach(o => {
                const ang = o.ang + t * o.spd * 60;
                const ox = cx + Math.cos(ang) * o.dist + Math.sin(t * .44 + o.ph) * 10;
                const oy = cy + Math.sin(ang) * o.dist + Math.cos(t * .38 + o.ph) * 8;
                const oa = .14 + .1 * Math.sin(t * .9 + o.ph);
                const og = ctx.createRadialGradient(ox, oy, 0, ox, oy, o.r * 3.2);
                og.addColorStop(0, `hsla(${o.hue},78%,76%,${oa})`); og.addColorStop(1, `hsla(${o.hue},78%,76%,0)`);
                ctx.beginPath(); ctx.arc(ox, oy, o.r * 3.2, 0, PI2); ctx.fillStyle = og; ctx.fill();
            });

            ctx.restore();

            const vig = ctx.createRadialGradient(cx, cy, R * .65, cx, cy, R);
            vig.addColorStop(0, 'rgba(0,0,0,0)'); vig.addColorStop(.88, 'rgba(0,0,0,0)');
            vig.addColorStop(1, 'rgba(175,65,95,.13)');
            ctx.beginPath(); ctx.arc(cx, cy, R, 0, PI2); ctx.fillStyle = vig; ctx.fill();

            // Save for frozen frame
            try { lastFrameImg = ctx.getImageData(0, 0, SIZE * DPR, SIZE * DPR); } catch (_) { }

            rafId = requestAnimationFrame(render);
        }
        rafId = requestAnimationFrame(render);

        return () => cancelAnimationFrame(rafId);
    }, []);

    return (
        <div className="hero">
            <canvas id="heroParticleCanvas" ref={particleCanvasRef}></canvas>
            <div className="petal-layer" id="heroPetalLayer" ref={petalLayerRef}></div>

            {/* Left: content */}
            <div className="hero-left">
                <div className="hero-badge-wrap">
                    <i className="fa-solid fa-seedling"></i> Fertility &amp; Conception Guide
                </div>

                <h1 className="hero-title">
                    Your <span className="em">Fertility Journey</span><br />Starts Here
                </h1>

                <p className="hero-subtitle">
                    A complete guide for women trying to conceive — nutrition, lifestyle, understanding your cycle, and when to seek help
                </p>

                <div className="hero-stats">
                    <div className="stat-box">
                        <div className="stat-icon">🎯</div>
                        <div className="stat-value">85%</div>
                        <div className="stat-label">Conceive in 1 Year</div>
                    </div>
                    <div className="stat-box">
                        <div className="stat-icon">📅</div>
                        <div className="stat-value">5-6</div>
                        <div className="stat-label">Fertile Days/Mo</div>
                    </div>
                    <div className="stat-box">
                        <div className="stat-icon">⏱️</div>
                        <div className="stat-value">3-6</div>
                        <div className="stat-label">Avg Months</div>
                    </div>
                </div>
            </div>

            {/* Right: animated canvas */}
            <div className="hero-right">
                <div className="hero-visual-outer">
                    <div className="hero-orbital-1"></div>
                    <div className="hero-orbital-2"></div>

                    <div className="hero-canvas-wrap">
                        <canvas id="fertilityHeroCanvas" ref={heroCanvasRef}></canvas>
                    </div>

                    <div className="hero-phase-strip">
                        <span className="phase-live-dot"></span>
                        <span id="heroPhaseText">Womb Awakening</span>
                    </div>

                    <div className="hero-float-label" style={{ top: '-2%', left: '50%', transform: 'translateX(-50%) translateY(0)', animationDelay: '0s' }}>
                        <i className="fa-solid fa-circle-dot" style={{ color: '#ff9800' }}></i> Fertilisation Moment
                    </div>
                    <div className="hero-float-label" style={{ top: '28%', right: '-8%', animationDelay: '.9s' }}>
                        <i className="fa-solid fa-infinity" style={{ color: '#9c27b0' }}></i> Cell Division
                    </div>
                    <div className="hero-float-label" style={{ bottom: '28%', left: '-10%', animationDelay: '1.8s' }}>
                        <i className="fa-solid fa-heart" style={{ color: '#e91e63' }}></i> Life Takes Shape
                    </div>
                    <div className="hero-float-label" style={{ bottom: '-2%', left: '50%', transform: 'translateX(-50%) translateY(0)', animationDelay: '2.7s' }}>
                        <i className="fa-solid fa-seedling" style={{ color: '#4caf50' }}></i> A New Story Starts
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConceivingHero;
