/**
 * siteheader.js
 * =============
 * Vanilla JS behaviours extracted from journeys.html <script> for the
 * SiteHeader / SiteHeader1 component.
 *
 * Three exported init functions — each returns a cleanup function so they
 * can be safely called from a React useEffect.
 *
 * Usage (standalone HTML):
 *   import { initMobileMenu, initScrollShrink, initDropdownKeyboard } from './siteheader.js';
 *   initMobileMenu();
 *   initScrollShrink();
 *   initDropdownKeyboard();
 *
 * Usage (React via useEffect – wired in SiteHeader1.tsx):
 *   The component calls these internally; you do not need to import them yourself.
 */

/* ============================================================
   MOBILE MENU TOGGLE
   – Mirrors the original toggleMobile() from journeys.html
   – Animates the three hamburger spans via CSS class toggle
     (.hamburger.open selectors live in site-header.css)
   ============================================================ */

/**
 * initMobileMenu
 * @param {object} [opts]
 * @param {string} [opts.hamburgerBtnId='hamburgerBtn']
 * @param {string} [opts.mobileMenuId='mobileMenu']
 * @returns {() => void} cleanup function
 */
export function initMobileMenu({
    hamburgerBtnId = 'hamburgerBtn',
    mobileMenuId = 'mobileMenu',
} = {}) {
    const btn = document.getElementById(hamburgerBtnId);
    const menu = document.getElementById(mobileMenuId);
    if (!btn || !menu) return () => { };

    // Toggle on button click
    function onBtnClick() {
        const isOpen = menu.classList.toggle('open');
        btn.classList.toggle('open', isOpen);
        btn.setAttribute('aria-expanded', String(isOpen));
    }

    // Close when clicking outside both the button and the menu
    function onDocClick(e) {
        if (!menu.classList.contains('open')) return;
        if (!menu.contains(e.target) && !btn.contains(e.target)) {
            menu.classList.remove('open');
            btn.classList.remove('open');
            btn.setAttribute('aria-expanded', 'false');
        }
    }

    // Close on Escape key
    function onKeyDown(e) {
        if (e.key === 'Escape' && menu.classList.contains('open')) {
            menu.classList.remove('open');
            btn.classList.remove('open');
            btn.setAttribute('aria-expanded', 'false');
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
 * @param {object} [opts]
 * @param {number} [opts.threshold=32]   – scroll distance (px) before class is added
 * @param {string} [opts.headerSelector='.site-header']
 * @returns {() => void} cleanup function
 */
export function initScrollShrink({
    threshold = 32,
    headerSelector = '.site-header',
} = {}) {
    const header = document.querySelector(headerSelector);
    if (!header) return () => { };

    function onScroll() {
        header.classList.toggle('scrolled', window.scrollY > threshold);
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
 * @param {object} [opts]
 * @param {string} [opts.navSelector='.main-nav']
 * @returns {() => void} cleanup function
 */
export function initDropdownKeyboard({
    navSelector = '.main-nav',
} = {}) {
    const nav = document.querySelector(navSelector);
    if (!nav) return () => { };

    function onKeyDown(e) {
        if (e.key !== 'Escape') return;
        // Blur the currently focused element inside the nav so :focus-within disengages
        const focused = nav.querySelector(':focus');
        if (focused) focused.blur();
    }

    nav.addEventListener('keydown', onKeyDown);
    return () => nav.removeEventListener('keydown', onKeyDown);
}

/* ============================================================
   initSiteHeader  (convenience wrapper — runs all three)
   ============================================================ */

/**
 * initSiteHeader
 * Initialises all header behaviours in one call.
 * @param {object} [opts] – merged and forwarded to each individual init
 * @returns {() => void} single cleanup function
 */
export function initSiteHeader(opts = {}) {
    const cleanupMenu = initMobileMenu(opts);
    const cleanupShrink = initScrollShrink(opts);
    const cleanupKeyboard = initDropdownKeyboard(opts);

    return () => {
        cleanupMenu();
        cleanupShrink();
        cleanupKeyboard();
    };
}
