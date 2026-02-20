/**
 * siteheader.ts
 * =============
 * Vanilla JS behaviours extracted from journeys.html <script> for the
 * SiteHeader component.
 *
 * Three exported init functions — each returns a cleanup function so they
 * can be safely called from a React useEffect.
 *
 * Usage (standalone HTML):
 *   import { initMobileMenu, initScrollShrink, initDropdownKeyboard } from './siteheader';
 *   initMobileMenu();
 *   initScrollShrink();
 *   initDropdownKeyboard();
 *
 * Usage (React via useEffect – wired in SiteHeader.tsx):
 *   The component calls these internally; you do not need to import them yourself.
 */

export interface SiteHeaderOptions {
  /** ID of the hamburger button element (default: 'hamburgerBtn') */
  hamburgerBtnId?: string;
  /** ID of the mobile menu element (default: 'mobileMenu') */
  mobileMenuId?: string;
  /** Scroll distance in px before .scrolled class is added (default: 32) */
  threshold?: number;
  /** CSS selector for the site-header element (default: '.site-header') */
  headerSelector?: string;
  /** CSS selector for the main nav (default: '.main-nav') */
  navSelector?: string;
}

type CleanupFn = () => void;

/* ============================================================
   MOBILE MENU TOGGLE
   – Mirrors the original toggleMobile() from journeys.html
   – Animates the three hamburger spans via CSS class toggle
     (.hamburger.open selectors live in site-header.css)
   ============================================================ */

/**
 * initMobileMenu
 * Initialises mobile menu toggle, outside-click and Escape close.
 */
export function initMobileMenu({
  hamburgerBtnId = 'hamburgerBtn',
  mobileMenuId = 'mobileMenu',
}: SiteHeaderOptions = {}): CleanupFn {
  const btn = document.getElementById(hamburgerBtnId);
  const menu = document.getElementById(mobileMenuId);
  if (!btn || !menu) return () => {};

  function onBtnClick(): void {
    const isOpen = menu!.classList.toggle('open');
    btn!.classList.toggle('open', isOpen);
    btn!.setAttribute('aria-expanded', String(isOpen));
  }

  function onDocClick(e: MouseEvent): void {
    if (!menu!.classList.contains('open')) return;
    const target = e.target as Node;
    if (!menu!.contains(target) && !btn!.contains(target)) {
      menu!.classList.remove('open');
      btn!.classList.remove('open');
      btn!.setAttribute('aria-expanded', 'false');
    }
  }

  function onKeyDown(e: KeyboardEvent): void {
    if (e.key === 'Escape' && menu!.classList.contains('open')) {
      menu!.classList.remove('open');
      btn!.classList.remove('open');
      btn!.setAttribute('aria-expanded', 'false');
    }
  }

  btn.addEventListener('click', onBtnClick);
  document.addEventListener('click', onDocClick);
  document.addEventListener('keydown', onKeyDown);

  return () => {
    btn.removeEventListener('click', onBtnClick);
    document.removeEventListener('click', onDocClick);
    document.removeEventListener('keydown', onKeyDown);
  };
}

/* ============================================================
   SCROLL SHRINK / SHADOW
   – Adds `.scrolled` class to `.site-header` after scrolling
     32 px so the header can visually compress/shadow without
     a full re-render.
   – Pair with CSS:
       .site-header.scrolled { box-shadow: 0 4px 32px rgba(236,64,122,0.18); }
   ============================================================ */

/**
 * initScrollShrink
 * Adds/removes `.scrolled` class on the header element on scroll.
 */
export function initScrollShrink({
  threshold = 32,
  headerSelector = '.site-header',
}: SiteHeaderOptions = {}): CleanupFn {
  const header = document.querySelector(headerSelector);
  if (!header) return () => {};

  function onScroll(): void {
    header!.classList.toggle('scrolled', window.scrollY > threshold);
  }

  // Run once immediately so state is correct on page load / refresh mid-page
  onScroll();

  window.addEventListener('scroll', onScroll, { passive: true });
  return () => window.removeEventListener('scroll', onScroll);
}

/* ============================================================
   DROPDOWN KEYBOARD NAVIGATION
   – Allows keyboard users to close open dropdowns with Escape
     and navigate items with Tab (natural DOM order).
   – Hover-based dropdowns already work via CSS :hover / :focus-within;
     this adds an extra Escape close for all nav dropdowns.
   ============================================================ */

/**
 * initDropdownKeyboard
 * Closes an open CSS dropdown when Escape is pressed inside the nav.
 */
export function initDropdownKeyboard({
  navSelector = '.main-nav',
}: SiteHeaderOptions = {}): CleanupFn {
  const nav = document.querySelector(navSelector);
  if (!nav) return () => {};

  function onKeyDown(e: KeyboardEvent): void {
    if (e.key !== 'Escape') return;
    const focused = nav!.querySelector(':focus') as HTMLElement | null;
    if (focused) focused.blur();
  }

  nav.addEventListener('keydown', onKeyDown as EventListener);
  return () => nav.removeEventListener('keydown', onKeyDown as EventListener);
}

/* ============================================================
   initSiteHeader  (convenience wrapper — runs all three)
   ============================================================ */

/**
 * initSiteHeader
 * Initialises all header behaviours in one call.
 * Returns a single cleanup function.
 */
export function initSiteHeader(opts: SiteHeaderOptions = {}): CleanupFn {
  const cleanupMenu = initMobileMenu(opts);
  const cleanupShrink = initScrollShrink(opts);
  const cleanupKeyboard = initDropdownKeyboard(opts);

  return () => {
    cleanupMenu();
    cleanupShrink();
    cleanupKeyboard();
  };
}
