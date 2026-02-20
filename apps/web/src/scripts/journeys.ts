/**
 * Journeys Page Animations
 * Particle canvas and petal rain effects for the hero section
 */

interface Particle {
  x: number;
  y: number;
  r: number;
  vx: number;
  vy: number;
  hue: string;
  alpha: number;
}

/**
 * Initialize particle canvas animation for the hero background
 */
export function initParticleCanvas(canvas: HTMLCanvasElement): (() => void) | null {
  if (!canvas) return null;
  
  const ctx = canvas.getContext('2d');
  if (!ctx) return null;
  
  let W: number;
  let H: number;
  let animationId: number;
  const particles: Particle[] = [];
  
  function resize() {
    const hero = canvas.closest('.journeys-hero') || canvas.parentElement;
    if (hero) {
      W = canvas.width = (hero as HTMLElement).offsetWidth;
      H = canvas.height = (hero as HTMLElement).offsetHeight;
    }
  }
  
  function createParticle(): Particle {
    return {
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 2.5 + 0.5,
      vx: (Math.random() - 0.5) * 0.45,
      vy: (Math.random() - 0.5) * 0.45,
      hue: Math.random() < 0.7 ? '#ec407a' : '#9c5cf7',
      alpha: Math.random() * 0.6 + 0.2,
    };
  }
  
  function updateParticle(p: Particle) {
    p.x += p.vx;
    p.y += p.vy;
    if (p.x < 0 || p.x > W) p.vx *= -1;
    if (p.y < 0 || p.y > H) p.vy *= -1;
  }
  
  function drawParticle(p: Particle) {
    ctx!.beginPath();
    ctx!.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx!.fillStyle = p.hue;
    ctx!.globalAlpha = p.alpha;
    ctx!.fill();
    ctx!.globalAlpha = 1;
  }
  
  function connect() {
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d < 110) {
          ctx!.beginPath();
          ctx!.strokeStyle = `rgba(236,64,122,${0.18 * (1 - d / 110)})`;
          ctx!.lineWidth = 0.8;
          ctx!.moveTo(particles[i].x, particles[i].y);
          ctx!.lineTo(particles[j].x, particles[j].y);
          ctx!.stroke();
        }
      }
    }
  }
  
  function animate() {
    ctx!.clearRect(0, 0, W, H);
    particles.forEach((p) => {
      updateParticle(p);
      drawParticle(p);
    });
    connect();
    animationId = requestAnimationFrame(animate);
  }
  
  // Initialize
  resize();
  window.addEventListener('resize', resize);
  
  // Create particles
  for (let i = 0; i < 110; i++) {
    particles.push(createParticle());
  }
  
  animate();
  
  // Return cleanup function
  return () => {
    window.removeEventListener('resize', resize);
    cancelAnimationFrame(animationId);
  };
}

const PETAL_COLORS = ['#f8bbd9', '#fce4ec', '#ede7f6', '#e1bee7', '#f48fb1'];

/**
 * Initialize petal rain animation
 */
export function initPetalRain(layer: HTMLElement): (() => void) | null {
  if (!layer) return null;
  
  const petals: HTMLElement[] = [];
  let intervalId: ReturnType<typeof setInterval>;
  
  function createPetal() {
    const el = document.createElement('div');
    el.className = 'journeys-hero__petal';
    
    const width = Math.random() * 10 + 6;
    const height = Math.random() * 10 + 6;
    const color = PETAL_COLORS[Math.floor(Math.random() * PETAL_COLORS.length)];
    const duration = Math.random() * 8 + 6;
    const delay = Math.random() * 5;
    
    el.style.cssText = `
      left: ${Math.random() * 100}%;
      width: ${width}px;
      height: ${height}px;
      background: ${color};
      animation-duration: ${duration}s;
      animation-delay: ${delay}s;
      opacity: 0;
    `;
    
    layer.appendChild(el);
    petals.push(el);
    
    // Remove petal after animation completes
    setTimeout(() => {
      el.remove();
      const index = petals.indexOf(el);
      if (index > -1) petals.splice(index, 1);
    }, (duration + delay) * 1000);
  }
  
  // Create initial petals with staggered timing
  for (let i = 0; i < 20; i++) {
    setTimeout(createPetal, i * 300);
  }
  
  // Continue creating petals
  intervalId = setInterval(createPetal, 600);
  
  // Return cleanup function
  return () => {
    clearInterval(intervalId);
    petals.forEach((petal) => petal.remove());
  };
}

/**
 * Lifecycle flower canvas stages configuration
 */
interface LifecycleStage {
  label: string;
  icon: string;
  color: string;
  angle: number;
}

const LIFECYCLE_STAGES: LifecycleStage[] = [
  { label: 'Fertility', icon: '🌱', color: '#81c784', angle: 0 },
  { label: 'Conception', icon: '✨', color: '#f48fb1', angle: Math.PI / 3 },
  { label: 'Pregnancy', icon: '🤰', color: '#ec407a', angle: (2 * Math.PI) / 3 },
  { label: 'Birth', icon: '👶', color: '#ff8a65', angle: Math.PI },
  { label: 'Postpartum', icon: '💗', color: '#ba68c8', angle: (4 * Math.PI) / 3 },
  { label: 'Wellness', icon: '🌸', color: '#4fc3f7', angle: (5 * Math.PI) / 3 },
];

/**
 * Initialize lifecycle flower canvas animation
 */
export function initLifecycleCanvas(canvas: HTMLCanvasElement): (() => void) | null {
  if (!canvas) return null;
  
  const ctx = canvas.getContext('2d');
  if (!ctx) return null;
  
  canvas.width = 480;
  canvas.height = 480;
  
  const cx = 240;
  const cy = 240;
  let t = 0;
  let animationId: number;
  
  function drawFlower() {
    ctx!.clearRect(0, 0, 480, 480);
    
    // Background circle glow
    const bg = ctx!.createRadialGradient(cx, cy, 0, cx, cy, 200);
    bg.addColorStop(0, 'rgba(236,64,122,0.08)');
    bg.addColorStop(1, 'rgba(236,64,122,0)');
    ctx!.fillStyle = bg;
    ctx!.beginPath();
    ctx!.arc(cx, cy, 200, 0, Math.PI * 2);
    ctx!.fill();
    
    // Rotating petals
    LIFECYCLE_STAGES.forEach((s, i) => {
      const a = s.angle + t * 0.004;
      const orb = 150;
      const ox = cx + Math.cos(a) * orb;
      const oy = cy + Math.sin(a) * orb;
      
      // Connector line
      ctx!.beginPath();
      ctx!.moveTo(cx, cy);
      ctx!.lineTo(ox, oy);
      ctx!.strokeStyle = s.color + '66';
      ctx!.lineWidth = 1.5;
      ctx!.stroke();
      
      // Petal shape
      const pulse = Math.sin(t * 0.05 + i) * 4;
      const r = 38 + pulse;
      
      // Petal blob
      const g = ctx!.createRadialGradient(ox, oy, 0, ox, oy, r);
      g.addColorStop(0, s.color + 'ff');
      g.addColorStop(1, s.color + '44');
      ctx!.beginPath();
      ctx!.arc(ox, oy, r, 0, Math.PI * 2);
      ctx!.fillStyle = g;
      ctx!.shadowColor = s.color;
      ctx!.shadowBlur = 15;
      ctx!.fill();
      ctx!.shadowBlur = 0;
      
      // Emoji
      ctx!.font = `${20 + pulse * 0.3}px serif`;
      ctx!.textAlign = 'center';
      ctx!.textBaseline = 'middle';
      ctx!.fillText(s.icon, ox, oy - 6);
      
      // Label
      ctx!.font = 'bold 10px Manrope, sans-serif';
      ctx!.fillStyle = '#333';
      ctx!.fillText(s.label, ox, oy + 18);
    });
    
    // Center hub
    const pulse2 = 1 + Math.sin(t * 0.03) * 0.05;
    const cg = ctx!.createRadialGradient(cx, cy, 0, cx, cy, 45);
    cg.addColorStop(0, '#ec407a');
    cg.addColorStop(1, '#ad1457');
    ctx!.beginPath();
    ctx!.arc(cx, cy, 45 * pulse2, 0, Math.PI * 2);
    ctx!.fillStyle = cg;
    ctx!.shadowColor = 'rgba(236,64,122,0.5)';
    ctx!.shadowBlur = 20;
    ctx!.fill();
    ctx!.shadowBlur = 0;
    
    ctx!.font = 'bold 13px Manrope, sans-serif';
    ctx!.fillStyle = 'white';
    ctx!.textAlign = 'center';
    ctx!.textBaseline = 'middle';
    ctx!.fillText('LIFE', cx, cy - 7);
    ctx!.font = '10px Manrope, sans-serif';
    ctx!.fillText('JOURNEY', cx, cy + 7);
    
    t++;
    animationId = requestAnimationFrame(drawFlower);
  }
  
  drawFlower();
  
  // Return cleanup function
  return () => {
    cancelAnimationFrame(animationId);
  };
}

/**
 * Initialize all hero animations
 */
export function initJourneysHeroAnimations(
  particleCanvas: HTMLCanvasElement | null,
  petalLayer: HTMLElement | null,
  lifecycleCanvas: HTMLCanvasElement | null
): () => void {
  const cleanupFunctions: ((() => void) | null)[] = [];
  
  if (particleCanvas) {
    cleanupFunctions.push(initParticleCanvas(particleCanvas));
  }
  
  if (petalLayer) {
    cleanupFunctions.push(initPetalRain(petalLayer));
  }
  
  if (lifecycleCanvas) {
    cleanupFunctions.push(initLifecycleCanvas(lifecycleCanvas));
  }
  
  // Return combined cleanup function
  return () => {
    cleanupFunctions.forEach((cleanup) => {
      if (cleanup) cleanup();
    });
  };
}

