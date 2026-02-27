import React, { useEffect, useRef, useState } from 'react';

interface Step {
    tag: string;
    title: string;
    body: string;
    evidence: string;
    stats: { n: string; l: string }[];
    canvasLabel: string;
}

export const ConceptionPlayground: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [currentStep, setCurrentStep] = useState(0);
    const pgTRef = useRef(0);
    const requestRef = useRef<number>();
    const clickPointsRef = useRef<{ x: number; y: number; t: number }[]>([]);

    const W = 500, H = 380;
    const PI2 = Math.PI * 2;

    const STEPS: Step[] = [
        {
            tag: 'Phase 1 of 7',
            title: 'Womb <span class="pg-em">Awakening</span>',
            body: 'The uterine endometrium thickens under rising estrogen. Villi-like projections bloom from the uterine wall, swaying in the fluid environment — preparing a nutrient-rich cradle for potential implantation.',
            evidence: 'Wilcox AJ et al. NEJM 1999. Endometrial receptivity peaks during the "implantation window" (days 20–24), orchestrated by progesterone-induced HOXA10 expression. (Kao et al., Hum Reprod 2003)',
            stats: [{ n: '28', l: 'Day Cycle' }, { n: '6–10', l: 'Days Fertile' }, { n: '~30%', l: 'Peak Chance' }],
            canvasLabel: '🔬 Uterine Environment'
        },
        {
            tag: 'Phase 2 of 7',
            title: 'The <span class="pg-em">Journey Begins</span>',
            body: '200–500 million sperm are deposited at ejaculation, but only ~1,000 reach the fallopian tubes. Each sperm has a unique swimming pattern — a "fingerprint" of motility. Click the canvas to release a burst.',
            evidence: 'Suarez SS, Pacey AA. Sperm transport in the female reproductive tract. Hum Reprod Update 2006. Of 250 million sperm deposited, only 1,000–2,000 traverse the utero-tubal junction. (Harper et al., ESHRE 2021)',
            stats: [{ n: '250M', l: 'Sperm Start' }, { n: '~1,000', l: 'Reach Tube' }, { n: '3–5 days', l: 'Sperm Live' }],
            canvasLabel: '🏊 Sperm Journey'
        },
        {
            tag: 'Phase 3 of 7',
            title: 'The <span class="pg-em">Race to Life</span>',
            body: 'Hundreds of sperm surround the egg\'s zona pellucida. Only one will penetrate using acrosomal enzymes. The moment of contact triggers the cortical reaction — a zinc spark visible under fluorescence microscopy.',
            evidence: 'Que EL et al. "Zinc sparks at fertilisation." Scientific Reports 2014. Zinc release forms a visible "spark" at the moment of fertilisation, confirmed across mammalian species including humans.',
            stats: [{ n: '~100', l: 'Reach Egg' }, { n: '1', l: 'Fertilises' }, { n: '24h', l: 'Egg Viable' }],
            canvasLabel: '⚡ Fertilisation Race'
        },
        {
            tag: 'Phase 4 of 7',
            title: 'The <span class="pg-em">Miraculous Moment</span>',
            body: 'A single sperm penetrates the zona pellucida. Membrane fusion triggers an electrical block within milliseconds, then a sustained calcium wave (cortical reaction) prevents polyspermy. Click to trigger the zinc spark.',
            evidence: 'Bhaskaran S et al. Front Cell Dev Biol 2021. The cortical reaction is completed in 20–30 minutes; zona hardening provides definitive polyspermy block (Yanagimachi, Gamete Biology 2011).',
            stats: [{ n: '<1s', l: 'Membrane Fusion' }, { n: '20–30m', l: 'Zona Block' }, { n: '~1 in 250M', l: 'Success Rate' }],
            canvasLabel: '✨ Fertilisation Event'
        },
        {
            tag: 'Phase 5 of 7',
            title: 'First <span class="pg-em">Cell Division</span>',
            body: 'The zygote undergoes cleavage — 1 → 2 → 4 → 8 cells. Each division is a perfect halving without growth; cells get smaller. By day 3, the morula (16–32 cells) travels toward the uterus.',
            evidence: 'Braude P et al. Nature 1988. Human embryonic genome activation begins at the 4–8 cell stage. Cleavage errors account for ~50–60% of early pregnancy loss (Hardy, Hum Reprod 1999).',
            stats: [{ n: '1→8', l: 'Cells in 3 Days' }, { n: 'Day 5', l: 'Blastocyst' }, { n: '~50%', l: 'Reach Blast.' }],
            canvasLabel: '🔬 Cell Division'
        },
        {
            tag: 'Phase 6 of 7',
            title: '<span class="pg-em">Blastocyst</span> Forms',
            body: 'By day 5, the embryo has differentiated into two distinct cell populations: the inner cell mass (future baby) and trophoblast (future placenta). The blastocoel cavity fills with fluid. Zona hatching begins.',
            evidence: 'Bischoff FZ et al. Hum Reprod 2002. Only ~50% of fertilised eggs form a blastocyst. Quality blastocysts (Gardner grading 3–6AA) have 40–60% implantation rates in IVF. (Gardner & Schoolcraft, 1999)',
            stats: [{ n: '~100', l: 'Cells at Day 5' }, { n: '50%', l: 'Reach Blastocyst' }, { n: 'Days 20–24', l: 'Implant Window' }],
            canvasLabel: '🔵 Blastocyst Stage'
        },
        {
            tag: 'Phase 7 of 7',
            title: 'Implantation — <span class="pg-em">Home</span>',
            body: 'The blastocyst hatches from its zona and trophoblast fingers begin invading the receptive endometrium. hCG is secreted, signalling to the corpus luteum to maintain progesterone. Life has found its home.',
            evidence: 'Wilcox AJ et al. NEJM 1999. Implantation failure accounts for ~75% of all pregnancy losses, most before clinical recognition. Successful implantation requires precise molecular "dialogue" between trophoblast and decidua.',
            stats: [{ n: 'Day 6–10', l: 'Post-Fertilisation' }, { n: 'hCG', l: 'First Signal' }, { n: '~75%', l: 'Loss Pre-Recognition' }],
            canvasLabel: '🏠 Implantation'
        }
    ];

    const NAV_LABELS = ['🌸 Womb', '🏊 Journey', '🏃 Race', '⚡ Fertilise', '🔬 Divide', '🔵 Blastocyst', '🏠 Home'];

    const drawHormoneBars = (ctx: CanvasRenderingContext2D, names: string[], vals: number[], t: number) => {
        const bx = 12, by = H - 68, bh = 8, bw = 80, gap = 16;
        names.forEach((name, i) => {
            const val = Math.max(0, Math.min(1, vals[i] + .04 * Math.sin(t * 1.2 + i)));
            ctx.save();
            ctx.font = '500 8px Manrope,sans-serif'; ctx.fillStyle = 'rgba(255,200,215,.55)';
            ctx.fillText(name, bx, by + i * (bh + gap) - 2);
            ctx.fillStyle = 'rgba(255,255,255,.08)'; ctx.fillRect(bx, by + i * (bh + gap), bw, bh);
            const hg2 = ctx.createLinearGradient(bx, 0, bx + bw, 0);
            hg2.addColorStop(0, 'rgba(232,53,109,.8)'); hg2.addColorStop(1, 'rgba(255,150,70,.6)');
            ctx.fillStyle = hg2; ctx.fillRect(bx, by + i * (bh + gap), bw * val, bh);
            ctx.restore();
        });
    };

    const drawWomb = (ctx: CanvasRenderingContext2D, t: number) => {
        const bg = ctx.createLinearGradient(0, 0, W, H);
        bg.addColorStop(0, '#0d0018'); bg.addColorStop(1, '#1a0014');
        ctx.fillStyle = bg; ctx.fillRect(0, 0, W, H);

        const CX = W / 2, CY = H / 2;
        ctx.beginPath(); ctx.arc(CX, CY + 20, 140, Math.PI, 0);
        ctx.strokeStyle = 'rgba(232,53,109,.6)'; ctx.lineWidth = 8; ctx.stroke();

        const g = ctx.createRadialGradient(CX, CY, 0, CX, CY, 110);
        g.addColorStop(0, 'rgba(255,180,140,.18)'); g.addColorStop(1, 'rgba(255,100,140,.02)');
        ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);

        for (let i = 0; i < 28; i++) {
            const a = Math.PI + (i / 27) * Math.PI;
            const rx = CX + Math.cos(a) * 140;
            const ry = CY + 20 + Math.sin(a) * 140;
            const sway = Math.sin(t * 1.2 + i * .4) * 12;
            const tx = rx + Math.cos(a + Math.PI * .5) * 10 + sway * Math.cos(a);
            const ty = ry + Math.sin(a + Math.PI * .5) * 10 + sway * Math.sin(a);
            const vLen = 22 + 8 * Math.sin(t * .8 + i * .7);
            const vx = rx + Math.cos(a + Math.PI) * vLen + sway;
            const vy = ry + Math.sin(a + Math.PI) * vLen;
            const vg = ctx.createLinearGradient(rx, ry, vx, vy);
            vg.addColorStop(0, 'rgba(220,40,100,.9)');
            vg.addColorStop(1, 'rgba(255,130,170,.2)');
            ctx.beginPath(); ctx.moveTo(rx, ry); ctx.quadraticCurveTo(tx, ty, vx, vy);
            ctx.strokeStyle = vg; ctx.lineWidth = 2.5 + Math.sin(t + i) * .5; ctx.lineCap = 'round'; ctx.stroke();
            ctx.beginPath(); ctx.arc(vx, vy, 3 + Math.sin(t * 1.5 + i), .0, PI2);
            ctx.fillStyle = `rgba(255,140,180,${.6 + .3 * Math.sin(t + i)})`; ctx.fill();
        }

        ctx.save(); ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
        ctx.font = '700 14px Manrope,sans-serif';
        ctx.fillStyle = `rgba(255,180,200,${.5 + .3 * Math.sin(t * .8)})`;
        ctx.fillText('Endometrium thickening…', CX, 48);
        ctx.font = '600 11px Manrope,sans-serif';
        ctx.fillStyle = 'rgba(255,150,180,.4)';
        ctx.fillText('Days 6–12 · Estrogen rising', CX, 66);
        ctx.restore();

        drawHormoneBars(ctx, ['FSH', 'LH', 'Estrogen', 'Progesterone'], [0.7, 0.3, 0.85, 0.1], t);
    };

    const drawSpermJourney = (ctx: CanvasRenderingContext2D, t: number) => {
        const bg = ctx.createLinearGradient(0, 0, W, H);
        bg.addColorStop(0, '#000814'); bg.addColorStop(1, '#001220');
        ctx.fillStyle = bg; ctx.fillRect(0, 0, W, H);

        for (let i = 0; i < 30; i++) {
            const sx = (i / 30) * W + Math.sin(t * .5 + i) * 8;
            const sy = 40 + i * 10 + Math.sin(t * .3 + i * .5) * 5;
            ctx.beginPath(); ctx.arc(sx, sy % H, 1.5 + Math.sin(i) * .8, 0, PI2);
            ctx.fillStyle = `rgba(100,200,255,${.04 + .03 * Math.sin(t + i)})`; ctx.fill();
        }

        for (let i = 0; i < 22; i++) {
            const seed = i * 37;
            const speed = .3 + (seed % 100) * .007;
            const xBase = ((t * speed * 0.2 + i / 22 + (seed % 50) * .01) % 1.0) * W;
            const yOff = ((seed % 100) / 100) * H * .8 + H * .1;
            const wob = Math.sin(t * (2 + i * .1) + seed) * 18;
            const sx = xBase;
            const sy = yOff + wob;
            const ang = Math.atan2(wob * 2, W / 22) + Math.sin(t * .4 + i) * .15;
            ctx.save(); ctx.translate(sx, sy); ctx.rotate(ang);
            const hg = ctx.createRadialGradient(-5, 0, 0, 0, 0, 8);
            hg.addColorStop(0, 'rgba(255,180,220,1)');
            hg.addColorStop(1, `rgba(232,53,109,${i === 0 ? .95 : .5})`);
            ctx.beginPath();
            ctx.moveTo(8, 0); ctx.bezierCurveTo(5, 4, -4, 3, -2, 0); ctx.bezierCurveTo(-4, -3, 5, -4, 8, 0);
            ctx.fillStyle = i === 0 ? 'rgba(255,130,180,1)' : hg;
            ctx.shadowColor = 'rgba(232,53,109,.6)'; ctx.shadowBlur = i === 0 ? 12 : 4; ctx.fill(); ctx.shadowBlur = 0;
            ctx.beginPath();
            for (let s = 0; s <= 16; s++) {
                const tf = s / 16; const tx2 = -2 - tf * 40; const ty2 = Math.sin(t * 4 + tf * PI2 * 1.8) * 6 * tf;
                s === 0 ? ctx.moveTo(tx2, ty2) : ctx.lineTo(tx2, ty2);
            }
            ctx.strokeStyle = `rgba(255,150,190,${i === 0 ? .8 : .35})`; ctx.lineWidth = i === 0 ? 2 : 1.2; ctx.stroke();
            ctx.restore();
        }

        clickPointsRef.current.forEach((pt, pi) => {
            const age = t - pt.t;
            const r = age * 35;
            const a = Math.max(0, 1 - age * .4);
            ctx.beginPath(); ctx.arc(pt.x, pt.y, r, 0, PI2);
            ctx.strokeStyle = `rgba(255,200,100,${a})`; ctx.lineWidth = 2; ctx.stroke();
            for (let i = 0; i < 8; i++) {
                const ba = (i / 8) * PI2;
                ctx.beginPath(); ctx.arc(pt.x + Math.cos(ba) * r * .6, pt.y + Math.sin(ba) * r * .6, 2.5, 0, PI2);
                ctx.fillStyle = `rgba(255,200,100,${a * .7})`; ctx.fill();
            }
            if (age > 2.5) clickPointsRef.current.splice(pi, 1);
        });

        ctx.save(); ctx.textAlign = 'center';
        ctx.font = '700 13px Manrope,sans-serif'; ctx.fillStyle = 'rgba(255,200,220,.7)';
        ctx.fillText('Click canvas to release sperm burst', W / 2, H - 20); ctx.restore();
        drawHormoneBars(ctx, ['LH', 'FSH', 'Testosterone (♂)', 'Estrogen'], [0.5, 0.6, 0.7, 0.65], t);
    };

    const drawRace = (ctx: CanvasRenderingContext2D, t: number) => {
        const bg = ctx.createLinearGradient(0, 0, W, H);
        bg.addColorStop(0, '#0a0006'); bg.addColorStop(1, '#1a000e');
        ctx.fillStyle = bg; ctx.fillRect(0, 0, W, H);

        const ex = W / 2 + 50, ey = H / 2;
        const eg = ctx.createRadialGradient(ex - 15, ey - 10, 5, ex, ey, 62);
        eg.addColorStop(0, '#fffae0'); eg.addColorStop(.3, '#ffd860'); eg.addColorStop(.7, '#ffaa30'); eg.addColorStop(1, '#e87030');
        ctx.beginPath(); ctx.arc(ex, ey, 58, 0, PI2);
        ctx.shadowColor = 'rgba(255,160,40,.8)'; ctx.shadowBlur = 30; ctx.fillStyle = eg; ctx.fill(); ctx.shadowBlur = 0;

        for (let i = 0; i < 24; i++) {
            const a = (i / 24) * PI2 + t * .3; const len = 18 + 8 * Math.sin(t * 2 + i * .8);
            ctx.save(); ctx.globalAlpha = .35 + .12 * Math.sin(t + i);
            ctx.beginPath(); ctx.moveTo(ex + Math.cos(a) * 58, ey + Math.sin(a) * 58); ctx.lineTo(ex + Math.cos(a) * (58 + len), ey + Math.sin(a) * (58 + len));
            ctx.strokeStyle = 'rgba(255,190,60,1)'; ctx.lineWidth = 2; ctx.stroke(); ctx.restore();
        }

        ctx.beginPath(); ctx.arc(ex, ey, 64, 0, PI2);
        ctx.strokeStyle = 'rgba(255,195,60,.7)'; ctx.lineWidth = 6; ctx.stroke();

        for (let i = 0; i < 18; i++) {
            const seed = i * 79;
            const baseAng = (i / 18) * PI2 + t * .06;
            const dist = 85 + 35 * Math.sin(t * (0.25 + i * .015) + seed) - (i === 0 ? t * 6 : 0);
            const sx = ex + Math.cos(baseAng) * Math.max(68, dist);
            const sy = ey + Math.sin(baseAng) * Math.max(68, dist);
            const headAng = Math.atan2(ey - sy, ex - sx);
            ctx.save(); ctx.translate(sx, sy); ctx.rotate(headAng + Math.PI);
            ctx.beginPath(); ctx.moveTo(10, 0); ctx.bezierCurveTo(7, 4, -4, 3, -2, 0); ctx.bezierCurveTo(-4, -3, 7, -4, 10, 0);
            ctx.fillStyle = i === 0 ? 'rgba(255,100,160,1)' : `rgba(180,80,140,${.3 + .4 * (i % 3 === 0 ? 1 : .5)})`;
            ctx.shadowColor = i === 0 ? 'rgba(255,100,160,.9)' : 'transparent'; ctx.shadowBlur = i === 0 ? 14 : 0; ctx.fill(); ctx.shadowBlur = 0;
            ctx.beginPath();
            for (let s = 0; s <= 14; s++) {
                const tf = s / 14; const tx2 = -2 - tf * 28; const ty2 = Math.sin(t * 4.5 + tf * PI2 * 1.6) * 5 * tf;
                s === 0 ? ctx.moveTo(tx2, ty2) : ctx.lineTo(tx2, ty2);
            }
            ctx.strokeStyle = `rgba(255,130,180,${i === 0 ? .75 : .25})`; ctx.lineWidth = i === 0 ? 2 : 1; ctx.stroke();
            ctx.restore();
        }

        ctx.save(); ctx.textAlign = 'center'; ctx.font = '700 13px Manrope,sans-serif';
        ctx.fillStyle = 'rgba(255,200,100,.75)'; ctx.fillText(`~${Math.round(100 + Math.abs(Math.sin(t * .3)) * 30)} sperm surrounding egg`, W / 2, 26); ctx.restore();
        drawHormoneBars(ctx, ['LH', 'FSH', 'Estrogen', 'Prog.'], [0.9, 0.7, 0.8, 0.15], t);
    };

    const drawFertilisation = (ctx: CanvasRenderingContext2D, t: number) => {
        const bg = ctx.createLinearGradient(0, 0, W, H);
        bg.addColorStop(0, '#060018'); bg.addColorStop(1, '#120030');
        ctx.fillStyle = bg; ctx.fillRect(0, 0, W, H);

        const cx2 = W / 2, cy2 = H / 2;
        const hasClick = clickPointsRef.current.length > 0;
        if (hasClick) {
            const age = t - clickPointsRef.current[clickPointsRef.current.length - 1].t;
            if (age < 1.5) {
                const fa = Math.max(0, 1 - age / 1.2);
                for (let w = 0; w < 5; w++) {
                    const wp = Math.max(0, (age - .08 * w) / 1.2); if (wp <= 0) continue;
                    ctx.beginPath(); ctx.arc(cx2, cy2, wp * (1 - w * .1) * 170, 0, PI2);
                    ctx.strokeStyle = `rgba(255,${200 - w * 30},${50 - w * 10},${(1 - wp) * .8})`;
                    ctx.lineWidth = 4 - w * .5; ctx.stroke();
                }
                if (age < .5) {
                    const gg = ctx.createRadialGradient(cx2, cy2, 0, cx2, cy2, fa * 120);
                    gg.addColorStop(0, `rgba(255,255,180,${fa})`); gg.addColorStop(1, 'rgba(255,220,50,0)');
                    ctx.fillStyle = gg; ctx.fillRect(0, 0, W, H);
                }
            }
        }

        const eg = ctx.createRadialGradient(cx2 - 18, cy2 - 12, 6, cx2, cy2, 70);
        eg.addColorStop(0, '#fffbe0'); eg.addColorStop(.4, '#ffd060'); eg.addColorStop(.8, '#ff9830'); eg.addColorStop(1, '#e86020');
        ctx.beginPath(); ctx.arc(cx2, cy2, 66, 0, PI2);
        ctx.shadowColor = 'rgba(255,160,40,.7)'; ctx.shadowBlur = 40; ctx.fillStyle = eg; ctx.fill(); ctx.shadowBlur = 0;

        const penetrationAngle = -Math.PI / 4;
        const sxPos = cx2 + Math.cos(penetrationAngle) * 60;
        const syPos = cy2 + Math.sin(penetrationAngle) * 60;
        ctx.save(); ctx.translate(sxPos, syPos); ctx.rotate(penetrationAngle + Math.PI * .5);
        ctx.beginPath(); ctx.moveTo(10, 0); ctx.bezierCurveTo(7, 5, -5, 4, -2, 0); ctx.bezierCurveTo(-5, -4, 7, -5, 10, 0);
        ctx.fillStyle = 'rgba(255,80,150,1)'; ctx.shadowColor = 'rgba(255,80,150,1)'; ctx.shadowBlur = 20; ctx.fill(); ctx.shadowBlur = 0;
        ctx.restore();

        for (let i = 0; i < 20; i++) {
            const a = (i / 20) * PI2 + t * .5 + (i % 3) * .3;
            const r2 = 68 + 8 * Math.sin(t * 3 + i); const sp = 3 + 2 * Math.sin(t * 2 + i);
            ctx.beginPath(); ctx.arc(cx2 + Math.cos(a) * r2, cy2 + Math.sin(a) * r2, sp, 0, PI2);
            const c = `rgba(255,${180 + Math.floor(50 * Math.sin(t + i))}, 50, ${.5 + .4 * Math.sin(t * 2 + i)})`;
            ctx.fillStyle = c; ctx.shadowColor = c; ctx.shadowBlur = 8; ctx.fill(); ctx.shadowBlur = 0;
        }

        ctx.save(); ctx.textAlign = 'center'; ctx.font = '700 13px Manrope,sans-serif';
        ctx.fillStyle = 'rgba(255,220,100,.85)';
        ctx.fillText(hasClick && (t - clickPointsRef.current[0]?.t) < 1 ? '⚡ ZINC SPARK! Fertilisation!' : '← Click egg to trigger zinc spark', W / 2, 32);
        ctx.restore();
        drawHormoneBars(ctx, ['LH peak', 'Estrogen', 'hCG', 'Prog.'], [1.0, 0.95, 0.05, 0.2], t);
    };

    const drawCellDivision = (ctx: CanvasRenderingContext2D, t: number) => {
        const bg = ctx.createLinearGradient(0, 0, W, H);
        bg.addColorStop(0, '#020814'); bg.addColorStop(1, '#04122a');
        ctx.fillStyle = bg; ctx.fillRect(0, 0, W, H);

        const cx2 = W / 2, cy2 = H / 2;
        const stage = Math.floor(t * .28) % 4;
        const stageCounts = [1, 2, 4, 8];
        const stageLabels = ['Zygote (1 cell)', '2-cell (Day 1)', '4-cell (Day 2)', '8-cell (Day 3)'];
        const n = stageCounts[stage];
        const cellR = [40, 30, 22, 16][stage];
        const spread = [0, 36, 28, 26][stage];

        const divT = t * .28 % 1;
        if (divT < .08 && stage > 0) {
            const fa = 1 - divT / .08;
            const fg = ctx.createRadialGradient(cx2, cy2, 0, cx2, cy2, fa * 130);
            fg.addColorStop(0, `rgba(255,240,140,${fa * .6})`); fg.addColorStop(1, 'rgba(255,240,140,0)');
            ctx.fillStyle = fg; ctx.fillRect(0, 0, W, H);
        }

        for (let i = 0; i < n; i++) {
            const a = n === 1 ? 0 : (i / n) * PI2 - Math.PI / 2;
            const px2 = cx2 + (n === 1 ? 0 : Math.cos(a) * spread);
            const py2 = cy2 + (n === 1 ? 0 : Math.sin(a) * spread);
            const hue = 335 + i * 22;

            const gg = ctx.createRadialGradient(px2, py2, 0, px2, py2, cellR * 3);
            gg.addColorStop(0, `hsla(${hue},85%,70%,.3)`); gg.addColorStop(1, 'transparent');
            ctx.fillStyle = gg; ctx.beginPath(); ctx.arc(px2, py2, cellR * 3, 0, PI2); ctx.fill();

            const cg2 = ctx.createRadialGradient(px2 - cellR * .3, py2 - cellR * .25, 0, px2, py2, cellR);
            cg2.addColorStop(0, 'rgba(255,255,252,1)'); cg2.addColorStop(.4, `hsla(${hue},90%,82%,.97)`); cg2.addColorStop(1, `hsla(${hue},75%,55%,.95)`);
            ctx.beginPath(); ctx.arc(px2, py2, cellR, 0, PI2);
            ctx.shadowColor = `hsla(${hue},85%,55%,.6)`; ctx.shadowBlur = 14; ctx.fillStyle = cg2; ctx.fill(); ctx.shadowBlur = 0;

            ctx.beginPath(); ctx.arc(px2, py2, cellR, 0, PI2);
            ctx.strokeStyle = `hsla(${hue},70%,48%,.55)`; ctx.lineWidth = 1.8; ctx.stroke();

            ctx.beginPath(); ctx.arc(px2 + cellR * .1, py2 + cellR * .08, cellR * .4, 0, PI2);
            ctx.fillStyle = `hsla(${hue - 20},80%,38%,.75)`; ctx.fill();

            if (n > 1) {
                for (let j = i + 1; j < n; j++) {
                    const ja = (j / n) * PI2 - Math.PI / 2;
                    const jx = cx2 + Math.cos(ja) * spread; const jy = cy2 + Math.sin(ja) * spread;
                    const d = Math.hypot(jx - px2, jy - py2);
                    if (d < cellR * 4.5) {
                        ctx.save(); ctx.globalAlpha = .35 * (1 - d / (cellR * 4.5));
                        ctx.beginPath(); ctx.moveTo(px2, py2); ctx.lineTo(jx, jy);
                        ctx.strokeStyle = 'rgba(255,80,140,.9)'; ctx.lineWidth = 2; ctx.stroke(); ctx.restore();
                    }
                }
            }
        }

        ctx.save(); ctx.textAlign = 'center'; ctx.font = '800 16px Manrope,sans-serif';
        ctx.fillStyle = 'rgba(255,180,200,.85)'; ctx.fillText(stageLabels[stage], W / 2, 30);
        ctx.font = '600 11px Manrope,sans-serif'; ctx.fillStyle = 'rgba(180,140,165,.6)';
        ctx.fillText('Genome activation begins at 4-cell stage', W / 2, 50);
        ctx.restore();
        drawHormoneBars(ctx, ['hCG rising', 'Prog.', 'LH', 'FSH'], [0.3 + stage * .15, 0.45, 0.2, 0.3], t);
    };

    const drawBlastocyst = (ctx: CanvasRenderingContext2D, t: number) => {
        const bg = ctx.createLinearGradient(0, 0, W, H);
        bg.addColorStop(0, '#020a18'); bg.addColorStop(1, '#051428');
        ctx.fillStyle = bg; ctx.fillRect(0, 0, W, H);

        const cx2 = W / 2, cy2 = H / 2;
        const r = 72;

        const og = ctx.createRadialGradient(cx2, cy2, r * .5, cx2, cy2, r * 2.2);
        og.addColorStop(0, 'rgba(255,180,120,.25)'); og.addColorStop(1, 'rgba(255,180,120,0)');
        ctx.fillStyle = og; ctx.beginPath(); ctx.arc(cx2, cy2, r * 2.2, 0, PI2); ctx.fill();

        for (let i = 0; i < 22; i++) {
            const a = (i / 22) * PI2 + t * .12;
            const ro = r + Math.sin(t * 1.8 + i * .55) * 5;
            const bx = cx2 + Math.cos(a) * ro, by = cy2 + Math.sin(a) * ro;
            const tg = ctx.createRadialGradient(bx, by, 0, bx, by, 12);
            tg.addColorStop(0, `hsla(${320 + i * 7},88%,78%,.97)`); tg.addColorStop(1, 'rgba(255,170,190,0)');
            ctx.beginPath(); ctx.arc(bx, by, 12, 0, PI2); ctx.fillStyle = tg; ctx.fill();
            ctx.beginPath(); ctx.arc(bx, by, 12, 0, PI2);
            ctx.strokeStyle = `hsla(${320 + i * 7},62%,52%,.4)`; ctx.lineWidth = 1.3; ctx.stroke();
        }

        const bv = ctx.createRadialGradient(cx2 + r * .2, cy2 - r * .15, 0, cx2, cy2, r * .75);
        bv.addColorStop(0, 'rgba(180,220,255,.94)'); bv.addColorStop(.55, 'rgba(155,205,255,.58)'); bv.addColorStop(1, 'rgba(130,185,255,0)');
        ctx.beginPath(); ctx.arc(cx2, cy2, r * .75, 0, PI2); ctx.fillStyle = bv; ctx.fill();

        const ix = cx2 - r * .3, iy = cy2 - r * .18;
        const ig = ctx.createRadialGradient(ix, iy, 0, ix, iy, r * .5);
        ig.addColorStop(0, 'rgba(255,215,130,.99)'); ig.addColorStop(.5, 'rgba(255,180,90,.9)'); ig.addColorStop(1, 'rgba(255,140,65,0)');
        ctx.beginPath(); ctx.arc(ix, iy, r * .5, 0, PI2); ctx.fillStyle = ig; ctx.fill();
        ctx.save(); ctx.globalAlpha = .8; ctx.font = 'bold 9px Manrope,sans-serif'; ctx.textAlign = 'center'; ctx.fillStyle = 'rgba(120,60,10,.9)'; ctx.fillText('ICM', ix, iy + 3); ctx.restore();
        ctx.save(); ctx.globalAlpha = .65; ctx.font = 'bold 8px Manrope,sans-serif'; ctx.textAlign = 'center'; ctx.fillStyle = 'rgba(30,90,180,.8)'; ctx.fillText('blastocoel', cx2 + r * .22, cy2 + r * .3); ctx.restore();

        ctx.save(); ctx.textAlign = 'center'; ctx.font = '800 14px Manrope,sans-serif'; ctx.fillStyle = 'rgba(255,190,210,.85)'; ctx.fillText('Blastocyst · Day 5', W / 2, 28); ctx.restore();
        drawHormoneBars(ctx, ['hCG', 'Prog.', 'Estrogen', 'LH'], [0.55, 0.65, 0.7, 0.1], t);
    };

    const drawImplantation = (ctx: CanvasRenderingContext2D, t: number) => {
        const bg = ctx.createLinearGradient(0, 0, W, H);
        bg.addColorStop(0, '#0a0010'); bg.addColorStop(1, '#180020');
        ctx.fillStyle = bg; ctx.fillRect(0, 0, W, H);

        const cx2 = W / 2;
        const wallY = 65;
        const wallG = ctx.createLinearGradient(0, wallY - 20, 0, wallY + 30);
        wallG.addColorStop(0, 'rgba(200,40,100,.7)'); wallG.addColorStop(1, 'rgba(200,40,100,.15)');
        ctx.fillStyle = wallG; ctx.fillRect(0, wallY - 20, W, 50);

        for (let i = 0; i < 20; i++) {
            const vx = 20 + (i / 19) * (W - 40);
            const vLen = 15 + 6 * Math.sin(t * .9 + i * .6);
            const sway = Math.sin(t * 1.1 + i * .5) * 5;
            ctx.beginPath(); ctx.moveTo(vx + sway, wallY + 15); ctx.lineTo(vx + sway * .5, wallY + 15 + vLen);
            ctx.strokeStyle = `rgba(240,80,130,${.5 + .3 * Math.sin(t + i)})`; ctx.lineWidth = 2.5; ctx.lineCap = 'round'; ctx.stroke();
            ctx.beginPath(); ctx.arc(vx + sway * .5, wallY + 15 + vLen, 3, 0, PI2);
            ctx.fillStyle = `rgba(255,120,160,.7)`; ctx.fill();
        }

        const drift = Math.min(1, t * .12);
        const bcy = H * .65 - drift * 90;
        const br = 52;

        for (let i = 0; i < 16; i++) {
            const a = (i / 16) * PI2 + t * .15;
            const ro = br + Math.sin(t * 1.6 + i * .7) * 4;
            const bx2 = cx2 + Math.cos(a) * ro;
            const by2 = bcy + Math.sin(a) * ro;
            const tg = ctx.createRadialGradient(bx2, by2, 0, bx2, by2, 9);
            tg.addColorStop(0, `hsla(${314 + i * 8},88%,74%,.97)`); tg.addColorStop(1, 'rgba(255,170,190,0)');
            ctx.beginPath(); ctx.arc(bx2, by2, 9, 0, PI2); ctx.fillStyle = tg; ctx.fill();
        }

        const bv = ctx.createRadialGradient(cx2 + br * .2, bcy - br * .12, 0, cx2, bcy, br * .7);
        bv.addColorStop(0, 'rgba(185,222,255,.93)'); bv.addColorStop(1, 'rgba(130,185,255,0)');
        ctx.beginPath(); ctx.arc(cx2, bcy, br * .7, 0, PI2); ctx.fillStyle = bv; ctx.fill();

        const ig = ctx.createRadialGradient(cx2 - br * .28, bcy - br * .15, 0, cx2 - br * .28, bcy - br * .15, br * .42);
        ig.addColorStop(0, 'rgba(255,215,130,.99)'); ig.addColorStop(1, 'rgba(255,150,65,0)');
        ctx.beginPath(); ctx.arc(cx2 - br * .28, bcy - br * .15, br * .42, 0, PI2); ctx.fillStyle = ig; ctx.fill();

        if (drift > .4) {
            const ta = (drift - .4) / .6;
            const topY = bcy - br - 5;
            for (let i = 0; i < 9; i++) {
                const off = ((i - 4) / 4) * .7;
                const tx2 = cx2 + off * 28;
                const len = ta * Math.min(wallY + 30 - topY, (wallY + 15) - topY + ta * 20);
                const ty2 = topY - len;
                const sway = Math.sin(t * 1.6 + i * .9) * 7;
                ctx.beginPath(); ctx.moveTo(tx2, topY); ctx.quadraticCurveTo(tx2 + sway, topY - len * .5, tx2 + sway * .4, ty2);
                ctx.strokeStyle = `rgba(225,40,108,${ta * .8 * (1 - Math.abs(off) * .4)})`; ctx.lineWidth = 2.5 + Math.sin(t + i) * .7; ctx.lineCap = 'round'; ctx.stroke();
                if (ta > .35) {
                    ctx.beginPath(); ctx.arc(tx2 + sway * .4, ty2, 4 + ta * 3.5, 0, PI2);
                    ctx.fillStyle = `rgba(255,110,165,${ta * .85})`; ctx.fill();
                }
            }
        }

        if (drift > .55) {
            const ca = (drift - .55) / .45;
            ctx.save(); ctx.globalAlpha = ca;
            ctx.font = '700 14px Manrope,sans-serif'; ctx.textAlign = 'center'; ctx.fillStyle = 'rgba(255,200,210,1)';
            ctx.fillText('You are becoming a mother ♡', cx2, H - 35);
            ctx.font = '600 10px Manrope,sans-serif'; ctx.fillStyle = 'rgba(255,170,190,.75)';
            ctx.fillText('hCG secreted · Corpus luteum maintained', cx2, H - 18);
            ctx.restore();
        }
        drawHormoneBars(ctx, ['hCG', 'Prog.', 'Estrogen', 'LH'], [Math.min(1, drift * 1.8), 0.75, 0.65, 0.05], t);
    };

    const loop = () => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        pgTRef.current += 0.016;
        const t = pgTRef.current;

        switch (currentStep) {
            case 0: drawWomb(ctx, t); break;
            case 1: drawSpermJourney(ctx, t); break;
            case 2: drawRace(ctx, t); break;
            case 3: drawFertilisation(ctx, t); break;
            case 4: drawCellDivision(ctx, t); break;
            case 5: drawBlastocyst(ctx, t); break;
            case 6: drawImplantation(ctx, t); break;
        }

        requestRef.current = requestAnimationFrame(loop);
    };

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const DPR = Math.min(window.devicePixelRatio || 1, 2);
        canvas.width = W * DPR; canvas.height = H * DPR;
        canvas.style.width = W + 'px'; canvas.style.height = H + 'px';
        ctx.scale(DPR, DPR);

        requestRef.current = requestAnimationFrame(loop);
        return () => {
            if (requestRef.current) cancelAnimationFrame(requestRef.current);
        };
    }, [currentStep]);

    const setStep = (i: number) => {
        setCurrentStep(i);
        pgTRef.current = 0;
        clickPointsRef.current = [];
    };

    const handleCanvasClick = (e: React.MouseEvent) => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const rect = canvas.getBoundingClientRect();
        const scaleX = W / rect.width, scaleY = H / rect.height;
        clickPointsRef.current.push({
            x: (e.clientX - rect.left) * scaleX,
            y: (e.clientY - rect.top) * scaleY,
            t: pgTRef.current
        });
    };

    const step = STEPS[currentStep];

    return (
        <div style={{ marginBottom: '5rem' }}>
            <div className="sim-section-label purple"><i className="fa-solid fa-gamepad"></i> Module 3</div>
            <h3 className="sim-section-h">The <span className="em">Conception</span> Playground</h3>
            <p className="sim-section-sub">Step through 7 scientifically-accurate stages of the conception journey. Each simulation is interactive — click and explore.</p>

            <div className="playground-shell">
                <div className="playground-stars">
                    {Array.from({ length: 40 }).map((_, i) => (
                        <div
                            key={i}
                            className="pstar"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                width: `${Math.random() * 2 + 1}px`,
                                height: `${Math.random() * 2 + 1}px`,
                                animationDuration: `${2 + Math.random() * 3}s`,
                                animationDelay: `${Math.random() * 5}s`
                            }}
                        />
                    ))}
                </div>

                <div className="pg-steps-nav">
                    {NAV_LABELS.map((lbl, i) => (
                        <button
                            key={i}
                            className={`pg-step-btn ${i === currentStep ? 'active' : ''}`}
                            onClick={() => setStep(i)}
                        >
                            <span className="pg-step-num">{i + 1}</span>{lbl}
                        </button>
                    ))}
                </div>

                <div className="pg-main">
                    <div className="pg-canvas-side">
                        <div className="pg-canvas-label">{step.canvasLabel}</div>
                        <canvas
                            ref={canvasRef}
                            onClick={handleCanvasClick}
                            id="sim-playground-canvas"
                        />
                    </div>
                    <div className="pg-info-side">
                        <div>
                            <div className="sim-section-label" style={{ marginBottom: '.6rem' }}>{step.tag}</div>
                            <div className="pg-step-title" dangerouslySetInnerHTML={{ __html: step.title }} />
                            <div className="pg-step-body">{step.body}</div>
                        </div>
                        <div className="pg-evidence-box">
                            <div className="pg-evidence-label"><i className="fa-solid fa-microscope"></i> Peer-Reviewed Evidence</div>
                            <div className="pg-evidence-text" dangerouslySetInnerHTML={{ __html: step.evidence }} />
                        </div>
                        <div className="pg-stats-row">
                            {step.stats.map((st, idx) => (
                                <div key={idx} className="pg-stat">
                                    <span className="pg-stat-num">{st.n}</span>
                                    <div className="pg-stat-label">{st.l}</div>
                                </div>
                            ))}
                        </div>
                        <div className="pg-actions">
                            <button className="pg-btn primary" onClick={() => setStep((currentStep + 1) % STEPS.length)}>
                                <i className="fa-solid fa-arrow-right"></i> Next Stage
                            </button>
                            <button className="pg-btn secondary" onClick={() => setStep(0)}>
                                <i className="fa-solid fa-rotate-left"></i> Restart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
