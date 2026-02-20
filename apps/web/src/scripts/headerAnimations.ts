/* =========================================
   HEADER MOUSE TRACKING SPARKLE EFFECT
   (extracted from animations.ts for header-specific use)
   ========================================= */

export function initHeaderSparkle(headerElement: HTMLElement): () => void {
  const handler = (e: MouseEvent) => {
    const rect = headerElement.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    headerElement.style.setProperty('--mouse-x', `${x}%`);
    headerElement.style.setProperty('--mouse-y', `${y}%`);
  };

  headerElement.addEventListener('mousemove', handler);

  return () => {
    headerElement.removeEventListener('mousemove', handler);
  };
}


