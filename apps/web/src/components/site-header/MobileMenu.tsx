import React from 'react';

export interface MobileMenuProps {
  isOpen: boolean;
}

export const MobileMenu = React.forwardRef<HTMLDivElement, MobileMenuProps>(({ isOpen }, ref) => (
  <div ref={ref} className={isOpen ? 'mobile-menu open' : 'mobile-menu'} id="mobileMenu">
    <div className="mm-section">Navigation</div>
    <a href="/" className="mm-link">
      <i className="fa-solid fa-house mm-icon" /> Home
    </a>

    <div className="mm-section">Journeys</div>
    <a href="#conceiving" className="mm-link">
      <i className="fa-solid fa-seedling mm-icon" /> Conceiving
    </a>
    <a href="#fertility" className="mm-link">
      <i className="fa-solid fa-dna mm-icon" /> Fertility
    </a>
    <a href="#pregnancy" className="mm-link">
      <i className="fa-solid fa-baby-carriage mm-icon" /> Pregnancy Journey
    </a>
    <a href="#antenatal" className="mm-link">
      <i className="fa-solid fa-clipboard-list mm-icon" /> Antenatal Care
    </a>
    <a href="#newborn" className="mm-link">
      <i className="fa-solid fa-baby mm-icon" /> Newborn &amp; Postpartum
    </a>
    <a href="#breastfeeding" className="mm-link">
      <i className="fa-solid fa-heart mm-icon" /> Breastfeeding
    </a>
    <a href="#menopause" className="mm-link">
      <i className="fa-solid fa-fire-flame-curved mm-icon" /> Menopause
    </a>

    <div className="mm-section">Services</div>
    <a href="#symptom-checker" className="mm-link">
      <i className="fa-solid fa-stethoscope mm-icon" /> Symptom Checker
    </a>
    <a href="#dashboard" className="mm-link">
      <i className="fa-solid fa-gauge-high mm-icon" /> My Dashboard
    </a>
    <a href="#screening" className="mm-link">
      <i className="fa-solid fa-magnifying-glass-plus mm-icon" /> Health Screening
    </a>
    <a href="#schemes" className="mm-link">
      <i className="fa-solid fa-landmark mm-icon" /> Govt Schemes
    </a>

    <div className="mm-section">More</div>
    <a href="/stories" className="mm-link">
      <i className="fa-solid fa-book-open mm-icon" /> Stories
    </a>
    <a href="#community" className="mm-link">
      <i className="fa-solid fa-users mm-icon" /> Community
    </a>
    <a href="/about" className="mm-link">
      <i className="fa-solid fa-circle-info mm-icon" /> About Us
    </a>

    <div className="mm-actions-row">
      <a href="/signin" className="btn-nav outline mm-btn">
        <i className="fa-regular fa-user" /> Sign In
      </a>
      <a href="/contact" className="btn-nav primary mm-btn">
        <i className="fa-solid fa-envelope" /> Contact Us
      </a>
    </div>
  </div>
));

MobileMenu.displayName = 'MobileMenu';


