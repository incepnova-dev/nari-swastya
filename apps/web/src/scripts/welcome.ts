/* ============================================================
   SCROLL REVEAL + SECTION DOTS (from Welcome.html)
   ============================================================ */

export function initWelcomeScrollEffects(): () => void {
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return () => {};
  }

  let revealObs: IntersectionObserver | null = null;
  let sectionObs: IntersectionObserver | null = null;
  const clickHandlers: Array<() => void> = [];

  // Wait for DOM to be ready before initializing observers
  const init = () => {
    // Initialize reveal observer
    revealObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            (e.target as HTMLElement).classList.add('visible');
          }
        });
      },
      { threshold: 0.12 }
    );

    const revealSelectors =
      '.reveal,.reveal-left,.reveal-right,.pain-card,.story-card,.s2-counter,.milestone-card,.t-card,.s3-midcta';
    const revealElements = document.querySelectorAll<HTMLElement>(revealSelectors);
    revealElements.forEach((el) => {
      if (revealObs) {
        revealObs.observe(el);
      }
    });

    // Initialize section observer
    sectionObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            document.querySelectorAll<HTMLElement>('.sp-dot').forEach((d) => d.classList.remove('active'));
            const id = (e.target as HTMLElement).id;
            const dot = document.querySelector<HTMLElement>(`.sp-dot[data-section="${id}"]`);
            if (dot) {
              dot.classList.add('active');
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    const sections = ['hero', 's1', 'sna', 'snb', 's2', 's3', 's4'];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el && sectionObs) {
        sectionObs.observe(el);
      }
    });

    // Add click handlers to scroll progress dots
    document.querySelectorAll<HTMLElement>('.sp-dot').forEach((dot) => {
      const handler = () => {
        const sectionId = dot.dataset.section;
        if (sectionId) {
          const targetEl = document.getElementById(sectionId);
          if (targetEl) {
            targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
      };
      dot.addEventListener('click', handler);
      clickHandlers.push(() => dot.removeEventListener('click', handler));
    });
  };

  // Use requestAnimationFrame to ensure DOM is ready
  const frameId = requestAnimationFrame(() => {
    // Double RAF to ensure all React components have rendered
    requestAnimationFrame(() => {
      init();
    });
  });

  return () => {
    cancelAnimationFrame(frameId);
    if (revealObs) {
      revealObs.disconnect();
    }
    if (sectionObs) {
      sectionObs.disconnect();
    }
    clickHandlers.forEach((cleanup) => cleanup());
  };
}

/* ============================================================
   HERO PARTICLES (background behind hero section)
   Simple soft particles adapted for React usage
   ============================================================ */

interface HeroParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  alpha: number;
  phase: number;
  color: string;
}

export function initWelcomeHeroParticles(canvas: HTMLCanvasElement): () => void {
  const ctx = canvas.getContext('2d');
  if (!ctx) return () => {};
  const context = ctx;

  let W = 0;
  let H = 0;

  function resize() {
    W = canvas.width = canvas.offsetWidth || window.innerWidth;
    H = canvas.height = canvas.offsetHeight || 420;
  }

  resize();
  window.addEventListener('resize', resize);

  const particles: HeroParticle[] = [];
  const COLORS = ['#ec407a', '#f48fb1', '#7c3aed', '#9c5cf7'];
  const COUNT = 60;

  for (let i = 0; i < COUNT; i++) {
    particles.push({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      r: 2 + Math.random() * 3,
      alpha: 0.3 + Math.random() * 0.4,
      phase: Math.random() * Math.PI * 2,
      color: COLORS[Math.floor(Math.random() * COLORS.length)] ?? '#ec407a',
    });
  }

  let frameId: number;

  function draw() {
    context.clearRect(0, 0, W, H);

    particles.forEach((p) => {
      p.phase += 0.01;
      p.x += p.vx + Math.sin(p.phase) * 0.1;
      p.y += p.vy + Math.cos(p.phase) * 0.05;

      if (p.x < -20) p.x = W + 20;
      if (p.x > W + 20) p.x = -20;
      if (p.y < -20) p.y = H + 20;
      if (p.y > H + 20) p.y = -20;

      const r = p.r * (1 + 0.2 * Math.sin(p.phase * 2));
      const g = context.createRadialGradient(p.x, p.y, 0, p.x, p.y, r * 4);
      g.addColorStop(0, p.color + '66');
      g.addColorStop(1, 'transparent');

      context.beginPath();
      context.arc(p.x, p.y, r * 4, 0, Math.PI * 2);
      context.fillStyle = g;
      context.globalAlpha = p.alpha;
      context.fill();
      context.globalAlpha = 1;
    });

    frameId = window.requestAnimationFrame(draw);
  }

  draw();

  return () => {
    window.cancelAnimationFrame(frameId);
    window.removeEventListener('resize', resize);
  };
}

/* ============================================================
   HERO ECG CANVAS (heartbeat line under hero core)
   ============================================================ */

export function initHeroEcg(canvas: HTMLCanvasElement): () => void {
  const ctx = canvas.getContext('2d');
  if (!ctx) return () => {};
  const context = ctx;

  let W = 0;
  let H = 0;

  function resize() {
    W = canvas.width = canvas.offsetWidth || 260;
    H = canvas.height = canvas.offsetHeight || 80;
  }

  resize();
  window.addEventListener('resize', resize);

  let t = 0;
  let frameId: number;

  function draw() {
    context.clearRect(0, 0, W, H);
    context.strokeStyle = 'rgba(255,255,255,0.8)';
    context.lineWidth = 2;
    context.beginPath();

    const midY = H / 2;
    const length = W;

    for (let x = 0; x <= length; x++) {
      const progress = (x + t) / 40;
      let y = midY + Math.sin(progress) * 4;

      // Simple repeating spike pattern
      const spikePos = (x + t) % 120;
      if (spikePos > 45 && spikePos < 55) {
        y = midY - 18;
      } else if (spikePos >= 55 && spikePos < 65) {
        y = midY + 10;
      }

      if (x === 0) context.moveTo(x, y);
      else context.lineTo(x, y);
    }

    context.stroke();

    t += 2;
    frameId = window.requestAnimationFrame(draw);
  }

  draw();

  return () => {
    window.cancelAnimationFrame(frameId);
    window.removeEventListener('resize', resize);
  };
}

/* ============================================================
   SECTION 1 — Morphing anxiety blob (blobCanvas)
   Adapted from Welcome.html blob canvas script
   ============================================================ */

export function initPainBlob(canvas: HTMLCanvasElement): () => void {
  const ctx = canvas.getContext('2d');
  if (!ctx) return () => {};
  const context = ctx;

  let t = 0;
  let W = canvas.offsetHeight || 440;
  let H = canvas.offsetHeight || 440;

  function resize() {
    const parent = canvas.parentElement;
    const parentWidth = parent ? parent.offsetWidth : 440;
    const size = Math.min(parentWidth, 440);
    canvas.width = size;
    canvas.height = size;
    W = size;
    H = size;
  }

  resize();
  window.addEventListener('resize', resize);

  const colors: [string, string][] = [
    ['#ec407a', '#ad1457'],
    ['#9c5cf7', '#6a1b9a'],
    ['#ff6090', '#c2185b'],
    ['#f06292', '#880e4f'],
  ];

  let colorIdx = 0;
  let nextColorIdx = 1;
  let colorT = 0;

  const lerp = (a: number, b: number, k: number) => a + (b - a) * k;

  function lerpColor(c1: string, c2: string, k: number): string {
    const r1 = parseInt(c1.slice(1, 3), 16);
    const g1 = parseInt(c1.slice(3, 5), 16);
    const b1 = parseInt(c1.slice(5, 7), 16);

    const r2 = parseInt(c2.slice(1, 3), 16);
    const g2 = parseInt(c2.slice(3, 5), 16);
    const b2 = parseInt(c2.slice(5, 7), 16);

    const r = Math.round(lerp(r1, r2, k));
    const g = Math.round(lerp(g1, g2, k));
    const b = Math.round(lerp(b1, b2, k));
    return `rgb(${r},${g},${b})`;
  }

  function blobPoint(angle: number, time: number, complexity: number): number {
    const baseRadius = W * 0.28;
    const noise =
      Math.sin(angle * 2 + time * 0.7) * 0.12 +
      Math.sin(angle * 3 - time * 0.5) * 0.08 +
      Math.sin(angle * 5 + time * 0.3) * 0.05 +
      Math.cos(angle * 4 - time * 0.9) * 0.07;
    return baseRadius * (1 + noise * complexity);
  }

  let frameId: number;

  function drawBlob() {
    const cx = W / 2;
    const cy = H / 2;
    const complexity = 1 + Math.sin(t * 0.02) * 0.3;
    const steps = 120;

    context.clearRect(0, 0, W, H);

    const prog = colorT / 180;
    const baseColors = colors[colorIdx];
    const nextColors = colors[nextColorIdx];
    const c1 = lerpColor(baseColors[0], nextColors[0], prog);
    const c2 = lerpColor(baseColors[1], nextColors[1], prog);

    context.beginPath();
    for (let i = 0; i <= steps; i++) {
      const angle = (i / steps) * Math.PI * 2;
      const r = blobPoint(angle, t * 0.03, complexity);
      const x = cx + Math.cos(angle) * r;
      const y = cy + Math.sin(angle) * r;
      if (i === 0) context.moveTo(x, y);
      else context.lineTo(x, y);
    }
    context.closePath();

    const grad = context.createRadialGradient(
      cx - W * 0.08,
      cy - H * 0.08,
      W * 0.03,
      cx,
      cy,
      W * 0.32
    );
    grad.addColorStop(0, c1);
    grad.addColorStop(1, c2);

    context.fillStyle = grad;
    context.shadowColor = c1;
    context.shadowBlur = 40;
    context.fill();
    context.shadowBlur = 0;

    for (let ring = 1; ring <= 3; ring++) {
      const rScale = 1 + ring * 0.15 + Math.sin(t * 0.04 + ring) * 0.03;
      context.beginPath();
      for (let i = 0; i <= steps; i++) {
        const angle = (i / steps) * Math.PI * 2;
        const r = blobPoint(angle, t * 0.03, complexity) * rScale;
        const x = cx + Math.cos(angle) * r;
        const y = cy + Math.sin(angle) * r;
        if (i === 0) context.moveTo(x, y);
        else context.lineTo(x, y);
      }
      context.closePath();
      context.strokeStyle = `rgba(236,64,122,${0.18 - ring * 0.05})`;
      context.lineWidth = 1.5;
      context.stroke();
    }

    context.font = `${W * 0.12}px serif`;
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.globalAlpha = 0.9;
    context.fillStyle = 'white';
    context.shadowColor = 'rgba(0,0,0,.2)';
    context.shadowBlur = 10;

    const faces = ['😔', '😰', '💔', '😢'];
    context.fillText(faces[colorIdx] ?? '😔', cx, cy);
    context.shadowBlur = 0;
    context.globalAlpha = 1;

    colorT++;
    if (colorT >= 180) {
      colorT = 0;
      colorIdx = nextColorIdx;
      nextColorIdx = (nextColorIdx + 1) % colors.length;
    }

    t++;
    frameId = window.requestAnimationFrame(drawBlob);
  }

  drawBlob();

  return () => {
    window.cancelAnimationFrame(frameId);
    window.removeEventListener('resize', resize);
  };
}

/* ============================================================
   SECTION 2 — PARTICLE FIELD (Pain section right visual)
   Adapted from Welcome.html:2138-2202
   ============================================================ */

interface Orb {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  color: string;
  phase: number;
  glow: number;
}

export function initParticleField(canvas: HTMLCanvasElement): () => void {
  const ctx = canvas.getContext('2d');
  if (!ctx) return () => {};
  const context = ctx;

  let W = 0;
  let H = 0;
  const orbs: Orb[] = [];
  let mx = 9999;
  let my = 9999;

  function resize() {
    W = canvas.width = canvas.offsetWidth || 500;
    H = canvas.height = canvas.offsetHeight || 460;
  }

  resize();
  window.addEventListener('resize', resize);

  const handleMouseMove = (e: MouseEvent) => {
    const rect = canvas.getBoundingClientRect();
    mx = e.clientX - rect.left;
    my = e.clientY - rect.top;
  };

  const handleMouseLeave = () => {
    mx = 9999;
    my = 9999;
  };

  canvas.addEventListener('mousemove', handleMouseMove);
  canvas.addEventListener('mouseleave', handleMouseLeave);

  const ORBS = 80;
  const colors = ['#ec407a', '#f48fb1', '#ad1457', '#ff6090', '#9c5cf7'];

  for (let i = 0; i < ORBS; i++) {
    orbs.push({
      x: Math.random() * 500,
      y: Math.random() * 460,
      vx: (Math.random() - 0.5) * 0.6,
      vy: (Math.random() - 0.5) * 0.6,
      r: Math.random() * 4 + 2,
      color: colors[Math.floor(Math.random() * colors.length)] ?? '#ec407a',
      phase: Math.random() * Math.PI * 2,
      glow: Math.random() * 0.5 + 0.5,
    });
  }

  let frameId: number;

  function animate() {
    resize();
    context.clearRect(0, 0, W, H);

    context.fillStyle = 'rgba(20,5,15,0.0)';
    context.fillRect(0, 0, W, H);

    for (let i = 0; i < orbs.length; i++) {
      for (let j = i + 1; j < orbs.length; j++) {
        const dx = orbs[i].x - orbs[j].x;
        const dy = orbs[i].y - orbs[j].y;
        const d = Math.sqrt(dx * dx + dy * dy);

        if (d < 90) {
          const g = context.createLinearGradient(orbs[i].x, orbs[i].y, orbs[j].x, orbs[j].y);
          g.addColorStop(0, orbs[i].color + '44');
          g.addColorStop(1, orbs[j].color + '44');

          context.beginPath();
          context.moveTo(orbs[i].x, orbs[i].y);
          context.lineTo(orbs[j].x, orbs[j].y);
          context.strokeStyle = g;
          context.globalAlpha = 0.22 * (1 - d / 90);
          context.lineWidth = 1;
          context.stroke();
          context.globalAlpha = 1;
        }
      }
    }

    orbs.forEach((o) => {
      o.phase += 0.02;

      const dx = mx - o.x;
      const dy = my - o.y;
      const d = Math.sqrt(dx * dx + dy * dy);

      if (d < 120) {
        o.vx += dx * 0.001;
        o.vy += dy * 0.001;
      }

      o.vx *= 0.96;
      o.vy *= 0.96;

      o.x += o.vx;
      o.y += o.vy;

      if (o.x < 0) o.x = W;
      if (o.x > W) o.x = 0;
      if (o.y < 0) o.y = H;
      if (o.y > H) o.y = 0;

      const pulse = 1 + Math.sin(o.phase) * 0.25;
      const r = o.r * pulse;

      const g = context.createRadialGradient(o.x, o.y, 0, o.x, o.y, r * 6);
      g.addColorStop(0, o.color + '88');
      g.addColorStop(1, 'transparent');
      context.beginPath();
      context.arc(o.x, o.y, r * 6, 0, Math.PI * 2);
      context.fillStyle = g;
      context.globalAlpha = o.glow * 0.4;
      context.fill();
      context.globalAlpha = 1;

      context.beginPath();
      context.arc(o.x, o.y, r, 0, Math.PI * 2);
      context.fillStyle = o.color;
      context.globalAlpha = o.glow;
      context.fill();
      context.globalAlpha = 1;
    });

    frameId = window.requestAnimationFrame(animate);
  }

  animate();

  return () => {
    window.cancelAnimationFrame(frameId);
    window.removeEventListener('resize', resize);
    canvas.removeEventListener('mousemove', handleMouseMove);
    canvas.removeEventListener('mouseleave', handleMouseLeave);
  };
}

/* ============================================================
   SECTION 2 — DOT MAP CANVAS (Impact section background)
   Hundreds of glowing dots assemble into a heart shape
   Adapted from Welcome.html:2064-2137
   ============================================================ */

interface Dot {
  x: number;
  y: number;
  tx: number;
  ty: number;
  vx: number;
  vy: number;
  r: number;
  color: string;
  alpha: number;
  phase: number;
}

export function initDotMapCanvas(canvas: HTMLCanvasElement): () => void {
  const ctx = canvas.getContext('2d');
  if (!ctx) return () => {};
  const context = ctx;

  let W = 0;
  let H = 0;
  let dots: Dot[] = [];
  let t = 0;
  let assembled = false;
  let assembleProgress = 0;

  function resize() {
    W = canvas.width = canvas.offsetWidth || window.innerWidth;
    H = canvas.height = canvas.offsetHeight || 600;
  }

  resize();

  function heartPoint(angle: number, scale: number) {
    const x = 16 * Math.pow(Math.sin(angle), 3);
    const y =
      -(
        13 * Math.cos(angle) -
        5 * Math.cos(2 * angle) -
        2 * Math.cos(3 * angle) -
        Math.cos(4 * angle)
      );
    return { x: W / 2 + x * scale, y: H / 2 + y * scale };
  }

  const N = 280;

  function initDots() {
    dots = [];
    for (let i = 0; i < N; i++) {
      const angle = (i / N) * Math.PI * 2;
      const target = heartPoint(angle, H * 0.045);
      dots.push({
        x: Math.random() * W,
        y: Math.random() * H,
        tx: target.x,
        ty: target.y,
        vx: 0,
        vy: 0,
        r: Math.random() * 2.5 + 1.2,
        color: Math.random() > 0.5 ? '#ec407a' : '#f48fb1',
        alpha: Math.random() * 0.5 + 0.3,
        phase: Math.random() * Math.PI * 2,
      });
    }
  }

  initDots();

  const handleResize = () => {
    resize();
    initDots();
  };

  window.addEventListener('resize', handleResize);

  const s2 = document.getElementById('s2');
  const obs = new IntersectionObserver(
    (entries) => {
      if (entries[0]?.isIntersecting) {
        assembled = true;
      }
    },
    { threshold: 0.3 }
  );
  obs.observe(s2 || canvas);

  let frameId: number;

  function animate() {
    context.clearRect(0, 0, W, H);
    if (assembled && assembleProgress < 1) {
      assembleProgress = Math.min(1, assembleProgress + 0.006);
    }

    dots.forEach((d) => {
      const ease =
        assembleProgress < 1 ? 1 - Math.pow(1 - assembleProgress, 3) : 1;
      const dx = d.tx - d.x;
      const dy = d.ty - d.y;
      d.vx += dx * 0.04 * ease;
      d.vy += dy * 0.04 * ease;
      d.vx *= 0.82;
      d.vy *= 0.82;
      d.x += d.vx;
      d.y += d.vy;
      d.phase += 0.025;

      const pulse = 1 + Math.sin(d.phase) * 0.35 * ease;
      const r = d.r * pulse;
      const a = d.alpha * (0.4 + assembleProgress * 0.6);

      const g = context.createRadialGradient(d.x, d.y, 0, d.x, d.y, r * 5);
      g.addColorStop(0, d.color + '66');
      g.addColorStop(1, 'transparent');
      context.beginPath();
      context.arc(d.x, d.y, r * 5, 0, Math.PI * 2);
      context.fillStyle = g;
      context.globalAlpha = a * 0.5;
      context.fill();

      context.beginPath();
      context.arc(d.x, d.y, r, 0, Math.PI * 2);
      context.fillStyle = d.color;
      context.globalAlpha = a;
      context.fill();
      context.globalAlpha = 1;
    });

    t++;
    frameId = window.requestAnimationFrame(animate);
  }

  animate();

  return () => {
    window.cancelAnimationFrame(frameId);
    window.removeEventListener('resize', handleResize);
    obs.disconnect();
  };
}

/* ============================================================
   SECTION NEW-A — NUCLEUS CANVAS
   Spinning DNA-like double helix with glowing nodes &
   orbiting story particles
   Adapted from Welcome.html:2350-2460
   ============================================================ */

interface NucleusParticle {
  angle: number;
  radius: number;
  speed: number;
  r: number;
  color: string;
  alpha: number;
  phase: number;
}

export function initNucleusCanvas(canvas: HTMLCanvasElement): () => void {
  const ctx = canvas.getContext('2d');
  if (!ctx) return () => {};
  const context = ctx;

  let W = 0;
  let H = 0;
  let t = 0;

  function resize() {
    W = canvas.width = canvas.offsetWidth || 500;
    H = canvas.height = canvas.offsetHeight || 560;
  }

  resize();
  window.addEventListener('resize', resize);

  const NODES = 22;
  const helixAmplitude = 110;
  const helixSpeed = 0.016;

  const PARTICLES = 60;
  const particles: NucleusParticle[] = [];
  for (let i = 0; i < PARTICLES; i++) {
    particles.push({
      angle: Math.random() * Math.PI * 2,
      radius: 90 + Math.random() * 150,
      speed: (Math.random() > 0.5 ? 1 : -1) * (0.004 + Math.random() * 0.008),
      r: Math.random() * 3 + 1,
      color: ['#ec407a', '#f48fb1', '#7c3aed', '#9c5cf7', '#00bcd4', '#ff6090'][
        Math.floor(Math.random() * 6)
      ] ?? '#ec407a',
      alpha: Math.random() * 0.7 + 0.3,
      phase: Math.random() * Math.PI * 2,
    });
  }

  function drawNucleus() {
    const cx = W / 2;
    const cy = H / 2;
    const g = context.createRadialGradient(cx, cy, 0, cx, cy, 90);
    g.addColorStop(0, 'rgba(236,64,122,0.35)');
    g.addColorStop(0.5, 'rgba(173,20,87,0.15)');
    g.addColorStop(1, 'transparent');
    context.beginPath();
    context.arc(cx, cy, 90, 0, Math.PI * 2);
    context.fillStyle = g;
    context.fill();

    for (let i = 0; i < 3; i++) {
      context.beginPath();
      context.arc(cx, cy, 22 + i * 16, 0, Math.PI * 2);
      context.strokeStyle = `rgba(236,64,122,${0.5 - i * 0.12})`;
      context.lineWidth = 2 - i * 0.4;
      context.stroke();
    }

    const cg = context.createRadialGradient(cx, cy, 0, cx, cy, 18);
    cg.addColorStop(0, 'rgba(255,255,255,0.95)');
    cg.addColorStop(0.4, 'rgba(236,64,122,0.9)');
    cg.addColorStop(1, 'rgba(173,20,87,0.2)');
    context.beginPath();
    context.arc(cx, cy, 18, 0, Math.PI * 2);
    context.fillStyle = cg;
    context.fill();

    context.save();
    context.translate(cx, cy);
    context.rotate(t * 0.02);
    for (let i = 0; i < 3; i++) {
      context.rotate((Math.PI * 2) / 3);
      context.beginPath();
      context.moveTo(0, 0);
      context.lineTo(14, 0);
      context.strokeStyle = 'rgba(255,255,255,0.5)';
      context.lineWidth = 1.5;
      context.stroke();
      context.beginPath();
      context.arc(14, 0, 3, 0, Math.PI * 2);
      context.fillStyle = 'rgba(255,255,255,0.8)';
      context.fill();
    }
    context.restore();
  }

  function drawHelix() {
    const cx = W / 2;
    const cy = H / 2;
    const step = H / (NODES + 2);
    for (let strand = 0; strand < 2; strand++) {
      const phase = strand * Math.PI;
      context.beginPath();
      for (let i = 0; i <= NODES + 1; i++) {
        const yy = cy - H / 2 + i * step;
        const xx = cx + Math.cos(t * helixSpeed * 3 + i * 0.35 + phase) * helixAmplitude;
        if (i === 0) context.moveTo(xx, yy);
        else context.lineTo(xx, yy);
      }
      const sg = context.createLinearGradient(
        cx - helixAmplitude,
        cy - H / 2,
        cx + helixAmplitude,
        cy + H / 2
      );
      sg.addColorStop(0, 'rgba(236,64,122,0.0)');
      sg.addColorStop(0.2, 'rgba(236,64,122,0.7)');
      sg.addColorStop(0.5, 'rgba(173,20,87,0.9)');
      sg.addColorStop(0.8, 'rgba(124,58,237,0.7)');
      sg.addColorStop(1, 'rgba(124,58,237,0.0)');
      context.strokeStyle = sg;
      context.lineWidth = 2.5;
      context.stroke();
    }

    for (let i = 1; i <= NODES; i++) {
      const yy = cy - H / 2 + i * step;
      const x1 = cx + Math.cos(t * helixSpeed * 3 + i * 0.35) * helixAmplitude;
      const x2 = cx + Math.cos(t * helixSpeed * 3 + i * 0.35 + Math.PI) * helixAmplitude;
      context.beginPath();
      context.moveTo(x1, yy);
      context.lineTo(x2, yy);
      context.strokeStyle = `rgba(244,143,177,${0.2 + 0.4 * Math.abs(Math.sin(i * 0.5))})`;
      context.lineWidth = 1;
      context.stroke();

      [x1, x2].forEach((xn, si) => {
        const pulse = 1 + 0.3 * Math.sin(t * 0.05 + i * 0.4 + si);
        const nr = 3.5 * pulse;
        const ng = context.createRadialGradient(xn, yy, 0, xn, yy, nr * 3);
        ng.addColorStop(0, si === 0 ? 'rgba(236,64,122,0.9)' : 'rgba(124,58,237,0.9)');
        ng.addColorStop(1, 'transparent');
        context.beginPath();
        context.arc(xn, yy, nr * 3, 0, Math.PI * 2);
        context.fillStyle = ng;
        context.globalAlpha = 0.3;
        context.fill();
        context.globalAlpha = 1;

        context.beginPath();
        context.arc(xn, yy, nr, 0, Math.PI * 2);
        context.fillStyle = si === 0 ? '#ec407a' : '#7c3aed';
        context.fill();
      });
    }
  }

  function drawParticles() {
    const cx = W / 2;
    const cy = H / 2;
    particles.forEach((p) => {
      p.angle += p.speed;
      p.phase += 0.03;
      const pulse = 1 + 0.25 * Math.sin(p.phase);
      const px = cx + Math.cos(p.angle) * p.radius;
      const py = cy + Math.sin(p.angle) * p.radius * 0.4;
      const r = p.r * pulse;
      const g = context.createRadialGradient(px, py, 0, px, py, r * 5);
      g.addColorStop(0, p.color + '66');
      g.addColorStop(1, 'transparent');
      context.beginPath();
      context.arc(px, py, r * 5, 0, Math.PI * 2);
      context.fillStyle = g;
      context.globalAlpha = p.alpha * 0.4;
      context.fill();
      context.globalAlpha = 1;

      context.beginPath();
      context.arc(px, py, r, 0, Math.PI * 2);
      context.fillStyle = p.color;
      context.globalAlpha = p.alpha;
      context.fill();
      context.globalAlpha = 1;
    });
  }

  let frameId: number;

  function animate() {
    context.clearRect(0, 0, W, H);
    drawParticles();
    drawHelix();
    drawNucleus();
    t++;
    frameId = window.requestAnimationFrame(animate);
  }

  animate();

  return () => {
    window.cancelAnimationFrame(frameId);
    window.removeEventListener('resize', resize);
  };
}

/* ============================================================
   SECTION NEW-B — VOICE CANVAS
   Ember-like rising particles forming peer network nebula
   Adapted from Welcome.html:2471-2557
   ============================================================ */

interface Ember {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  alpha: number;
  phase: number;
  color: string;
  life: number;
  decay: number;
}

interface VoiceHub {
  x: number;
  y: number;
  r: number;
  phase: number;
  color: string;
}

export function initVoiceCanvas(canvas: HTMLCanvasElement): () => void {
  const ctx = canvas.getContext('2d');
  if (!ctx) return () => {};
  const context = ctx;

  let W = 0;
  let H = 0;

  function resize() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = canvas.parentElement ? canvas.parentElement.offsetHeight : window.innerHeight;
  }

  resize();
  window.addEventListener('resize', resize);

  const embers: Ember[] = [];

  function makeEmber(): Ember {
    return {
      x: Math.random() * W,
      y: H + Math.random() * 40,
      vx: (Math.random() - 0.5) * 0.7,
      vy: -(0.5 + Math.random() * 1.4),
      r: Math.random() * 3 + 0.8,
      alpha: Math.random() * 0.65 + 0.2,
      phase: Math.random() * Math.PI * 2,
      color:
        Math.random() > 0.55
          ? '#ec407a'
          : Math.random() > 0.4
          ? '#f48fb1'
          : Math.random() > 0.3
          ? '#7c3aed'
          : '#ff6090',
      life: 1,
      decay: 0.003 + Math.random() * 0.003,
    };
  }

  for (let i = 0; i < 180; i++) {
    const e = makeEmber();
    e.y = Math.random() * H;
    e.life = Math.random();
    embers.push(e);
  }

  const HUBS = 12;
  const hubs: VoiceHub[] = [];
  const hubColors = ['#ec407a', '#f48fb1', '#7c3aed', '#ff6090', '#00bcd4'];

  for (let i = 0; i < HUBS; i++) {
    hubs.push({
      x: (0.06 + 0.23 * (i % 4)) * W + (Math.random() - 0.5) * W * 0.05,
      y: (0.12 + 0.35 * Math.floor(i / 4)) * H + (Math.random() - 0.5) * H * 0.05,
      r: 4 + Math.random() * 6,
      phase: Math.random() * Math.PI * 2,
      color: hubColors[i % hubColors.length] ?? '#ec407a',
    });
  }

  function drawNebula() {
    const clusters = [
      { x: W * 0.15, y: H * 0.3, r: 200, c: 'rgba(236,64,122,0.04)' },
      { x: W * 0.75, y: H * 0.5, r: 280, c: 'rgba(124,58,237,0.05)' },
      { x: W * 0.45, y: H * 0.75, r: 180, c: 'rgba(236,64,122,0.03)' },
    ];

    clusters.forEach((cl) => {
      const g = context.createRadialGradient(cl.x, cl.y, 0, cl.x, cl.y, cl.r);
      g.addColorStop(0, cl.c);
      g.addColorStop(1, 'transparent');
      context.beginPath();
      context.arc(cl.x, cl.y, cl.r, 0, Math.PI * 2);
      context.fillStyle = g;
      context.fill();
    });
  }

  function drawHubs() {
    for (let i = 0; i < hubs.length; i++) {
      for (let j = i + 1; j < hubs.length; j++) {
        const dx = hubs[i].x - hubs[j].x;
        const dy = hubs[i].y - hubs[j].y;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d < W * 0.35) {
          const alpha = 0.12 * (1 - d / (W * 0.35));
          const g = context.createLinearGradient(hubs[i].x, hubs[i].y, hubs[j].x, hubs[j].y);
          g.addColorStop(0, hubs[i].color + '44');
          g.addColorStop(1, hubs[j].color + '44');
          context.beginPath();
          context.moveTo(hubs[i].x, hubs[i].y);
          context.lineTo(hubs[j].x, hubs[j].y);
          context.strokeStyle = g;
          context.globalAlpha = alpha;
          context.lineWidth = 1;
          context.stroke();
          context.globalAlpha = 1;
        }
      }
    }

    hubs.forEach((h) => {
      h.phase += 0.02;
      const pulse = 1 + 0.3 * Math.sin(h.phase);
      const g = context.createRadialGradient(h.x, h.y, 0, h.x, h.y, h.r * 8 * pulse);
      g.addColorStop(0, h.color + '44');
      g.addColorStop(1, 'transparent');
      context.beginPath();
      context.arc(h.x, h.y, h.r * 8 * pulse, 0, Math.PI * 2);
      context.fillStyle = g;
      context.globalAlpha = 0.55;
      context.fill();
      context.globalAlpha = 1;

      context.beginPath();
      context.arc(h.x, h.y, h.r * pulse, 0, Math.PI * 2);
      context.fillStyle = h.color;
      context.fill();
    });
  }

  function drawEmbers() {
    for (let i = embers.length - 1; i >= 0; i--) {
      const e = embers[i];
      e.phase += 0.05;
      e.x += e.vx + Math.sin(e.phase * 0.7) * 0.3;
      e.y += e.vy;
      e.life -= e.decay;

      if (e.life <= 0 || e.y < -20) {
        embers.splice(i, 1);
        embers.push(makeEmber());
        continue;
      }

      const a = e.alpha * e.life;
      const rr = e.r * (0.5 + 0.5 * Math.sin(e.phase));
      const g = context.createRadialGradient(e.x, e.y, 0, e.x, e.y, rr * 6);
      g.addColorStop(0, e.color + '88');
      g.addColorStop(1, 'transparent');
      context.beginPath();
      context.arc(e.x, e.y, rr * 6, 0, Math.PI * 2);
      context.fillStyle = g;
      context.globalAlpha = a * 0.5;
      context.fill();
      context.globalAlpha = 1;

      context.beginPath();
      context.arc(e.x, e.y, rr, 0, Math.PI * 2);
      context.fillStyle = e.color;
      context.globalAlpha = a;
      context.fill();
      context.globalAlpha = 1;
    }
  }

  let frameId: number;

  function animate() {
    context.fillStyle = 'rgba(12,4,22,0.15)';
    context.fillRect(0, 0, W, H);
    drawNebula();
    drawEmbers();
    drawHubs();
    frameId = window.requestAnimationFrame(animate);
  }

  animate();

  return () => {
    window.cancelAnimationFrame(frameId);
    window.removeEventListener('resize', resize);
  };
}


/* ============================================================
   SECTION 4 — GALAXY CANVAS (Firefly Galaxy)
   Thousands of firefly-like particles form constellations —
   some gently drift into heart outlines, creating an emotional
   living galaxy of women's stories
   Adapted from Welcome.html:2256-2348
   ============================================================ */

interface GalaxyStar {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  alpha: number;
  phase: number;
  speed: number;
  color: string;
  trail: Array<{ x: number; y: number }>;
  special?: boolean;
}

interface Shooter {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  alpha: number;
}

export function initGalaxyCanvas(canvas: HTMLCanvasElement): () => void {
  const ctx = canvas.getContext('2d');
  if (!ctx) return () => {};
  const context = ctx;

  let W = 0;
  let H = 0;
  let t = 0;

  function resize() {
    W = canvas.width = canvas.offsetWidth || window.innerWidth;
    H = canvas.height = canvas.offsetHeight || 800;
  }

  resize();
  const handleResize = () => {
    resize();
    initGalaxy();
  };
  window.addEventListener('resize', handleResize);

  const STARS = 350;
  let stars: GalaxyStar[] = [];

  function initGalaxy() {
    stars = [];
    for (let i = 0; i < STARS; i++) {
      stars.push({
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
        r: Math.random() * 2.2 + 0.4,
        alpha: Math.random() * 0.8 + 0.2,
        phase: Math.random() * Math.PI * 2,
        speed: Math.random() * 0.02 + 0.01,
        color: Math.random() > 0.7 ? '#f48fb1' : Math.random() > 0.5 ? '#ec407a' : '#ffffff',
        trail: [],
      });
    }
    // Some special "story" stars that drift in arcs
    for (let i = 0; i < 30; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = 0.15 + Math.random() * 0.25;
      stars.push({
        x: Math.random() * W,
        y: Math.random() * H,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        r: Math.random() * 3 + 1.5,
        alpha: 0.9,
        phase: Math.random() * Math.PI * 2,
        speed: 0.03,
        color: '#f48fb1',
        trail: [],
        special: true,
      });
    }
  }

  initGalaxy();

  // Shooting star occasional
  let shooters: Shooter[] = [];
  function spawnShooter() {
    shooters.push({
      x: Math.random() * W * 0.3,
      y: Math.random() * H * 0.5,
      vx: 4 + Math.random() * 3,
      vy: 1 + Math.random() * 2,
      life: 1,
      alpha: 1,
    });
  }
  const shooterInterval = setInterval(spawnShooter, 3500);

  let frameId: number;

  function draw() {
    context.fillStyle = 'rgba(10,3,15,0.18)';
    context.fillRect(0, 0, W, H);

    // Shooting stars
    for (let i = shooters.length - 1; i >= 0; i--) {
      const s = shooters[i];
      context.beginPath();
      const g = context.createLinearGradient(s.x - 80, s.y - 30, s.x, s.y);
      g.addColorStop(0, 'transparent');
      g.addColorStop(1, `rgba(244,143,177,${s.alpha})`);
      context.strokeStyle = g;
      context.lineWidth = 2;
      context.moveTo(s.x - 80, s.y - 30);
      context.lineTo(s.x, s.y);
      context.stroke();
      s.x += s.vx;
      s.y += s.vy;
      s.alpha -= 0.012;
      if (s.alpha <= 0) {
        shooters.splice(i, 1);
      }
    }

    // Connections between close stars
    for (let i = 0; i < stars.length; i += 2) {
      for (let j = i + 2; j < stars.length; j += 2) {
        const dx = stars[i].x - stars[j].x;
        const dy = stars[i].y - stars[j].y;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d < 100 && Math.random() > 0.96) {
          context.beginPath();
          context.moveTo(stars[i].x, stars[i].y);
          context.lineTo(stars[j].x, stars[j].y);
          context.strokeStyle = `rgba(244,143,177,${0.08 * (1 - d / 100)})`;
          context.lineWidth = 0.6;
          context.stroke();
        }
      }
    }

    stars.forEach((s) => {
      s.phase += s.speed;
      s.x += s.vx;
      s.y += s.vy;
      if (s.x < 0) s.x = W;
      if (s.x > W) s.x = 0;
      if (s.y < 0) s.y = H;
      if (s.y > H) s.y = 0;
      const twinkle = 0.5 + Math.sin(s.phase) * 0.5;
      const a = s.alpha * twinkle;
      const r = s.r * (1 + Math.sin(s.phase) * 0.2);

      if (s.special) {
        const g = context.createRadialGradient(s.x, s.y, 0, s.x, s.y, r * 8);
        g.addColorStop(0, s.color + 'cc');
        g.addColorStop(0.4, s.color + '33');
        g.addColorStop(1, 'transparent');
        context.beginPath();
        context.arc(s.x, s.y, r * 8, 0, Math.PI * 2);
        context.fillStyle = g;
        context.globalAlpha = a * 0.6;
        context.fill();
      }
      context.beginPath();
      context.arc(s.x, s.y, r, 0, Math.PI * 2);
      context.fillStyle = s.color;
      context.globalAlpha = a;
      context.fill();
      context.globalAlpha = 1;
    });

    t++;
    frameId = window.requestAnimationFrame(draw);
  }

  draw();

  return () => {
    window.cancelAnimationFrame(frameId);
    clearInterval(shooterInterval);
    window.removeEventListener('resize', handleResize);
  };
}
