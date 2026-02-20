/**
 * Type declarations for siteheader.js
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

/** Initialises mobile menu toggle, outside-click and Escape close. */
export function initMobileMenu(opts?: SiteHeaderOptions): () => void;

/** Adds/removes `.scrolled` class on the header element on scroll. */
export function initScrollShrink(opts?: SiteHeaderOptions): () => void;

/** Closes an open CSS dropdown when Escape is pressed inside the nav. */
export function initDropdownKeyboard(opts?: SiteHeaderOptions): () => void;

/** Convenience wrapper — runs all three inits and returns a single cleanup. */
export function initSiteHeader(opts?: SiteHeaderOptions): () => void;
