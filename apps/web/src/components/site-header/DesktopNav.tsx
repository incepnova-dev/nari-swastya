import React from 'react';

// Desktop navigation (structure mirrors journeys.html, links currently point to spa-friendly routes or '#')
export const DesktopNav: React.FC = () => (
  <nav className="main-nav">
    {/* Home */}
    <div className="nav-item">
      <a href="/home" className="nav-link">
        Home
      </a>
    </div>

    {/* Journeys dropdown */}
    <div className="nav-item">
      <button className="nav-link" type="button" aria-haspopup="true">
        Journeys <i className="fa-solid fa-chevron-down chevron" />
      </button>
      <div className="nav-dropdown">
        <a
          href="#journeys"
          className="dd-item dd-item-featured"
        >
          <div className="dd-icon dd-icon-gradient">
            <i className="fa-solid fa-map" />
          </div>
          <div>
            <strong>View Full Journeys</strong>
            <span>Browse all her journeys</span>
          </div>
        </a>
        <div className="dd-sep" />
        <a href="#conceiving" className="dd-item">
          <div className="dd-icon dd-icon-pink">
            <i className="fa-solid fa-seedling" />
          </div>
          <div>
            <strong>Conceiving</strong>
            <span>Preparation &amp; planning</span>
          </div>
        </a>
        <a href="#fertility" className="dd-item">
          <div className="dd-icon dd-icon-purple">
            <i className="fa-solid fa-dna" />
          </div>
          <div>
            <strong>Fertility</strong>
            <span>Cycle &amp; ovulation</span>
          </div>
        </a>
        <a href="#pregnancy" className="dd-item">
          <div className="dd-icon dd-icon-pregnancy">
            <i className="fa-solid fa-baby-carriage" />
          </div>
          <div>
            <strong>Pregnancy Journey</strong>
            <span>Week by week guide</span>
          </div>
        </a>
        <a href="#antenatal" className="dd-item">
          <div className="dd-icon dd-icon-green">
            <i className="fa-solid fa-clipboard-list" />
          </div>
          <div>
            <strong>Antenatal Care</strong>
            <span>ANC visits &amp; checklist</span>
          </div>
        </a>
        <div className="dd-sep" />
        <a href="#newborn" className="dd-item">
          <div className="dd-icon dd-icon-blue">
            <i className="fa-solid fa-baby" />
          </div>
          <div>
            <strong>Newborn &amp; Postpartum</strong>
            <span>4th trimester care</span>
          </div>
        </a>
        <a href="#breastfeeding" className="dd-item">
          <div className="dd-icon dd-icon-gold">
            <i className="fa-solid fa-heart" />
          </div>
          <div>
            <strong>Breastfeeding</strong>
            <span>Latch, supply, nutrition</span>
          </div>
        </a>
        <a href="#menopause" className="dd-item">
          <div className="dd-icon dd-icon-menopause">
            <i className="fa-solid fa-fire-flame-curved" />
          </div>
          <div>
            <strong>Menopause</strong>
            <span>Perimenopause &amp; beyond</span>
          </div>
        </a>
      </div>
    </div>

    {/* Services dropdown */}
    <div className="nav-item">
      <button className="nav-link" type="button" aria-haspopup="true">
        Services <i className="fa-solid fa-chevron-down chevron" />
      </button>
      <div className="nav-dropdown">
        <a href="/services" className="dd-item dd-item-featured">
          <div className="dd-icon dd-icon-gradient">
            <i className="fa-solid fa-grid-2" />
          </div>
          <div>
            <strong>Services Available</strong>
            <span>Browse all our services</span>
          </div>
        </a>
        <div className="dd-sep" />
        <a href="#symptom-checker" className="dd-item">
          <div className="dd-icon dd-icon-pink">
            <i className="fa-solid fa-stethoscope" />
          </div>
          <div>
            <strong>Symptom Checker</strong>
            <span>AI-powered diagnosis</span>
          </div>
        </a>
        <a href="#dashboard" className="dd-item">
          <div className="dd-icon dd-icon-green">
            <i className="fa-solid fa-gauge-high" />
          </div>
          <div>
            <strong>My Dashboard</strong>
            <span>Track your health</span>
          </div>
        </a>
        <a href="#screening" className="dd-item">
          <div className="dd-icon dd-icon-blue">
            <i className="fa-solid fa-magnifying-glass-plus" />
          </div>
          <div>
            <strong>Health Screening</strong>
            <span>Cancer &amp; preventive</span>
          </div>
        </a>
        <a href="#vaccination" className="dd-item">
          <div className="dd-icon dd-icon-purple">
            <i className="fa-solid fa-syringe" />
          </div>
          <div>
            <strong>Vaccination</strong>
            <span>Immunization schedule</span>
          </div>
        </a>
        <a href="#otc" className="dd-item">
          <div className="dd-icon dd-icon-teal">
            <i className="fa-solid fa-pills" />
          </div>
          <div>
            <strong>OTC Medicine Guide</strong>
            <span>Safe self-care options</span>
          </div>
        </a>
        <a href="#schemes" className="dd-item">
          <div className="dd-icon dd-icon-gold">
            <i className="fa-solid fa-landmark" />
          </div>
          <div>
            <strong>Govt Schemes</strong>
            <span>Benefits you deserve</span>
          </div>
        </a>
      </div>
    </div>

    {/* Stories */}
    <div className="nav-item">
      <a href="/stories" className="nav-link">
        Stories
      </a>
    </div>

    {/* About */}
    <div className="nav-item">
      <a href="/about" className="nav-link">
        About Us
      </a>
    </div>

    {/* Additional Information dropdown */}
    <div className="nav-item">
      <button className="nav-link" type="button" aria-haspopup="true">
        Additional Info <i className="fa-solid fa-chevron-down chevron" />
      </button>
      <div className="nav-dropdown dd-additional-info">
        {/* Health Topics label */}
        <div className="dd-section-label">Health Topics</div>

        <a href="#fertility" className="dd-item">
          <div className="dd-icon dd-icon-pink">
            <i className="fa-solid fa-seedling" />
          </div>
          <div>
            <strong>Fertility</strong>
            <span>Cycle, conceiving &amp; IVF</span>
          </div>
        </a>
        <a href="#pregnancy" className="dd-item">
          <div className="dd-icon dd-icon-purple">
            <i className="fa-solid fa-baby-carriage" />
          </div>
          <div>
            <strong>Pregnancy</strong>
            <span>All trimesters covered</span>
          </div>
        </a>
        <a href="#newborn" className="dd-item">
          <div className="dd-icon dd-icon-blue">
            <i className="fa-solid fa-baby" />
          </div>
          <div>
            <strong>Motherhood</strong>
            <span>Newborn &amp; postpartum</span>
          </div>
        </a>
        <a href="#menopause" className="dd-item">
          <div className="dd-icon dd-icon-green">
            <i className="fa-solid fa-spa" />
          </div>
          <div>
            <strong>Wellness</strong>
            <span>Menopause, bone, mental</span>
          </div>
        </a>

        <div className="dd-sep" />

        <a href="#community" className="dd-item">
          <div className="dd-icon dd-icon-menopause">
            <i className="fa-solid fa-users" />
          </div>
          <div>
            <strong>Community</strong>
            <span>Share &amp; connect</span>
          </div>
        </a>

        <div className="dd-sep" />

        {/* Specialised Care label */}
        <div className="dd-section-label">Specialised Care</div>

        <a href="#autoimmune" className="dd-item">
          <div className="dd-icon dd-icon-teal">
            <i className="fa-solid fa-shield-virus" />
          </div>
          <div>
            <strong>Autoimmune Health</strong>
            <span>Lupus, Hashimoto&apos;s, RA</span>
          </div>
        </a>
        <a href="#bone-health" className="dd-item">
          <div className="dd-icon dd-icon-menopause">
            <i className="fa-solid fa-bone" />
          </div>
          <div>
            <strong>Bone Health</strong>
            <span>Osteoporosis prevention</span>
          </div>
        </a>
        <a href="#mental-health" className="dd-item">
          <div className="dd-icon dd-icon-gold">
            <i className="fa-solid fa-brain" />
          </div>
          <div>
            <strong>Mental Health</strong>
            <span>Anxiety, depression, support</span>
          </div>
        </a>
        <a href="#loss-support" className="dd-item">
          <div className="dd-icon">
            <i className="fa-solid fa-hands-holding-heart" />
          </div>
          <div>
            <strong>Loss Support</strong>
            <span>You are never alone</span>
          </div>
        </a>
      </div>
    </div>
  </nav>
);


