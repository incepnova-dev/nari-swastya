/* =========================================
   HERO PARTICLE CANVAS ANIMATION
   (ported from services.html for React)
   ========================================= */

export function initHeroParticles(canvas: HTMLCanvasElement): () => void {
  const ctx = canvas.getContext('2d');
  if (!ctx) return () => {};
  const context = ctx;

  function resizeCanvas() {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  }

  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  const particles: Particle[] = [];
  const particleCount = 60;

  class Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    radius: number;

    constructor() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.vx = (Math.random() - 0.5) * 0.5;
      this.vy = (Math.random() - 0.5) * 0.5;
      this.radius = Math.random() * 2 + 1;
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
      if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
    }

    draw() {
      context.beginPath();
      context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      context.fillStyle = 'rgba(255, 255, 255, 0.8)';
      context.fill();
    }
  }

  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }

  function connectParticles() {
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 120) {
          context.beginPath();
          context.strokeStyle = `rgba(255, 255, 255, ${0.3 * (1 - distance / 120)})`;
          context.lineWidth = 1;
          context.moveTo(particles[i].x, particles[i].y);
          context.lineTo(particles[j].x, particles[j].y);
          context.stroke();
        }
      }
    }
  }

  let frameId: number;

  function animateParticles() {
    context.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach((particle) => {
      particle.update();
      particle.draw();
    });

    connectParticles();

    frameId = window.requestAnimationFrame(animateParticles);
  }

  animateParticles();

  return () => {
    window.cancelAnimationFrame(frameId);
    window.removeEventListener('resize', resizeCanvas);
  };
}

/* =========================================
   TRACKING SECTION PARTICLE ANIMATION
   (ported from services.html for React)
   ========================================= */

export function initTrackingParticles(canvas: HTMLCanvasElement): () => void {
  const ctx = canvas.getContext('2d');
  if (!ctx) return () => {};
  const context = ctx;

  function resizeCanvas() {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  }

  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  const particles: TrackingParticle[] = [];
  const particleCount = 80;

  class TrackingParticle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    radius: number;

    constructor() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.vx = (Math.random() - 0.5) * 0.6;
      this.vy = (Math.random() - 0.5) * 0.6;
      this.radius = Math.random() * 2.5 + 1;
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
      if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
    }

    draw() {
      context.beginPath();
      context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      context.fillStyle = 'rgba(236, 64, 122, 0.6)';
      context.fill();
    }
  }

  for (let i = 0; i < particleCount; i++) {
    particles.push(new TrackingParticle());
  }

  function connectParticles() {
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 120) {
          context.beginPath();
          context.strokeStyle = `rgba(236, 64, 122, ${0.25 * (1 - distance / 120)})`;
          context.lineWidth = 1;
          context.moveTo(particles[i].x, particles[i].y);
          context.lineTo(particles[j].x, particles[j].y);
          context.stroke();
        }
      }
    }
  }

  let frameId: number;

  function animateParticles() {
    context.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach((particle) => {
      particle.update();
      particle.draw();
    });

    connectParticles();

    frameId = window.requestAnimationFrame(animateParticles);
  }

  animateParticles();

  return () => {
    window.cancelAnimationFrame(frameId);
    window.removeEventListener('resize', resizeCanvas);
  };
}

/* =========================================
   ANIMATE SEVERITY CARDS ON SCROLL
   (ported for potential React usage)
   ========================================= */

export function initSeverityScrollAnimations(
  root: Document | HTMLElement = document,
  selector = '.severity-card'
): void {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const target = entry.target as HTMLElement;
        target.style.opacity = '1';
        target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  const cards = root.querySelectorAll<HTMLElement>(selector);
  cards.forEach((card) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    // keep transitions controlled via CSS where possible
    if (!card.style.transition) {
      card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    }
    observer.observe(card);
  });
}

// Local types (kept here to avoid leaking into global scope)
class Particle {
  x!: number;
  y!: number;
  vx!: number;
  vy!: number;
  radius!: number;
}

class TrackingParticle {
  x!: number;
  y!: number;
  vx!: number;
  vy!: number;
  radius!: number;
}


