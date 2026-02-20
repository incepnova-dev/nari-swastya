import React, { useEffect, useRef, useState } from 'react';
import '../styles/site-header.css';
import { initScrollShrink, initDropdownKeyboard } from '../scripts/siteheader.js';

/**
 * SiteHeader1
 * -----------
 * Self-contained header component derived from journeys.html (lines 1045–1215).
 * All styling via src/styles/site-header.css — zero inline colour styles.
 */
const SiteHeader1: React.FC = () => {
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const hamburgerRef = useRef<HTMLButtonElement | null>(null);

    const toggleMobile = () => setIsMobileOpen((open) => !open);

    // Close mobile menu on outside click or Escape
    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            if (!isMobileOpen) return;
            if (!hamburgerRef.current?.contains(e.target as Node)) {
                setIsMobileOpen(false);
            }
        };
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setIsMobileOpen(false);
        };
        document.addEventListener('click', handleClick);
        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('click', handleClick);
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [isMobileOpen]);

    // Scroll-shrink shadow + keyboard Escape for CSS dropdowns
    // (extracted from journeys.html <script> into src/scripts/siteheader.js)
    useEffect(() => {
        const cleanupShrink = initScrollShrink();
        const cleanupKeyboard = initDropdownKeyboard();
        return () => {
            cleanupShrink();
            cleanupKeyboard();
        };
    }, []);

    return (
        <header className="site-header">
            <div className="nav-container">

                {/* ── Logo ── */}
                <div className="logo">
                    <div className="logo-icon">
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="white" className="logo-svg">
                            <circle cx="12" cy="5.5" r="2.8" />
                            <path d="M9.3 4.8 Q9.1 2.5 12 2.2 Q14.9 2.5 14.7 4.8" opacity="0.7" />
                            <path d="M9.5 13.2 Q9 10.5 10 9.3 Q11 8.6 12 8.6 Q13 8.6 14 9.3 Q15 10.5 14.5 13.2Z" />
                            <path d="M9.5 13.2 Q7.2 13.8 6.8 16.2 Q7.8 16.4 8.8 15Z" opacity="0.85" />
                            <path d="M14.5 13.2 Q16.8 13.8 17.2 16.2 Q16.2 16.4 15.2 15Z" opacity="0.85" />
                            <path d="M8.2 22 Q7.6 17.2 8.8 15 Q10.2 13 12 13 Q13.8 13 15.2 15 Q16.4 17.2 15.8 22Z" />
                        </svg>
                    </div>
                    <div className="logo-text">
                        <a href="index.html">Nari Swasthya</a>
                        <span>Women's Complete Health</span>
                    </div>
                </div>

                {/* ── Desktop Nav ── */}
                <nav className="main-nav">

                    {/* Home */}
                    <div className="nav-item">
                        <a href="index.html" className="nav-link active">Home</a>
                    </div>

                    {/* ── Journeys dropdown ── */}
                    <div className="nav-item">
                        <button className="nav-link" aria-haspopup="true">
                            Journeys <i className="fa-solid fa-chevron-down chevron" />
                        </button>
                        <div className="nav-dropdown">

                            <a href="journeys.html" className="dd-item dd-item-featured">
                                <div className="dd-icon dd-icon-gradient">
                                    <i className="fa-solid fa-map" />
                                </div>
                                <div>
                                    <strong style={{ color: '#d81b60' }}>View Full Journeys</strong>
                                    <span>Browse all her journeys</span>
                                </div>
                            </a>
                            <div className="dd-sep" />

                            <a href="conceiving.html" className="dd-item">
                                <div className="dd-icon dd-icon-pink"><i className="fa-solid fa-seedling" /></div>
                                <div><strong>Conceiving</strong><span>Preparation &amp; planning</span></div>
                            </a>

                            <a href="fertility.html" className="dd-item">
                                <div className="dd-icon dd-icon-purple"><i className="fa-solid fa-dna" /></div>
                                <div><strong>Fertility</strong><span>Cycle &amp; ovulation</span></div>
                            </a>

                            {/* Pregnancy Journey — flyout */}
                            <div className="dd-item dd-has-flyout">
                                <div className="dd-icon dd-icon-pregnancy"><i className="fa-solid fa-baby-carriage" /></div>
                                <a href="pregnancy_journey.html" style={{ textDecoration: 'none', color: 'inherit', flex: 1 }}>
                                    <strong>Pregnancy Journey</strong>
                                    <span>Week by week guide</span>
                                </a>
                                <i className="fa-solid fa-chevron-right dd-flyout-arrow" />
                                <div className="dd-flyout">
                                    <a href="normal_delivery.html" className="dd-item">
                                        <div className="dd-icon dd-icon-green"><i className="fa-solid fa-circle-check" /></div>
                                        <div><strong>Normal Delivery</strong><span>Vaginal birth guide</span></div>
                                    </a>
                                    <a href="csection.html" className="dd-item">
                                        <div className="dd-icon dd-icon-blue"><i className="fa-solid fa-hospital" /></div>
                                        <div><strong>C-Section</strong><span>Surgical birth info</span></div>
                                    </a>
                                    <a href="pregnancy_loss.html" className="dd-item">
                                        <div className="dd-icon dd-icon-neutral"><i className="fa-solid fa-hands-holding-heart" /></div>
                                        <div><strong>Pregnancy Loss</strong><span>Support &amp; care</span></div>
                                    </a>
                                </div>
                            </div>

                            <a href="antenatal_care.html" className="dd-item">
                                <div className="dd-icon dd-icon-green"><i className="fa-solid fa-clipboard-list" /></div>
                                <div><strong>Antenatal Care</strong><span>ANC visits &amp; checklist</span></div>
                            </a>

                            {/* NCD — flyout */}
                            <div className="dd-item dd-has-flyout">
                                <div className="dd-icon dd-icon-indigo"><i className="fa-solid fa-heart-pulse" /></div>
                                <a href="ncd_pregnancy.html" style={{ textDecoration: 'none', color: 'inherit', flex: 1 }}>
                                    <strong>Non Communicable Diseases</strong>
                                    <span>Diabetes, hypertension &amp; more</span>
                                </a>
                                <i className="fa-solid fa-chevron-right dd-flyout-arrow" />
                                <div className="dd-flyout">
                                    <a href="gestational_diabetes.html" className="dd-item">
                                        <div className="dd-icon dd-icon-gold"><i className="fa-solid fa-droplet" /></div>
                                        <div><strong>Gestational Diabetes</strong><span>Manage blood sugar</span></div>
                                    </a>
                                    <a href="preeclampsia_education.html" className="dd-item">
                                        <div className="dd-icon dd-icon-pink"><i className="fa-solid fa-heart-circle-exclamation" /></div>
                                        <div><strong>Preeclampsia</strong><span>Blood pressure care</span></div>
                                    </a>
                                    <a href="cancer_simulation_journey.html" className="dd-item">
                                        <div className="dd-icon dd-icon-purple"><i className="fa-solid fa-ribbon" /></div>
                                        <div><strong>Cancer</strong><span>Simulation journey</span></div>
                                    </a>
                                </div>
                            </div>

                            <a href="newborn_postpartum_care.html" className="dd-item">
                                <div className="dd-icon dd-icon-blue"><i className="fa-solid fa-baby" /></div>
                                <div><strong>Newborn &amp; Postpartum</strong><span>4th trimester care</span></div>
                            </a>

                            <a href="breastfeeding_journey.html" className="dd-item">
                                <div className="dd-icon dd-icon-gold"><i className="fa-solid fa-heart" /></div>
                                <div><strong>Breastfeeding</strong><span>Latch, supply, nutrition</span></div>
                            </a>

                            <a href="menopause.html" className="dd-item">
                                <div className="dd-icon dd-icon-menopause"><i className="fa-solid fa-fire-flame-curved" /></div>
                                <div><strong>Menopause</strong><span>Perimenopause &amp; beyond</span></div>
                            </a>

                        </div>
                    </div>

                    {/* ── Services dropdown ── */}
                    <div className="nav-item">
                        <button className="nav-link" aria-haspopup="true">
                            Services <i className="fa-solid fa-chevron-down chevron" />
                        </button>
                        <div className="nav-dropdown">

                            <a href="services.html" className="dd-item dd-item-featured">
                                <div className="dd-icon dd-icon-gradient">
                                    <i className="fa-solid fa-grid-2" />
                                </div>
                                <div>
                                    <strong style={{ color: 'var(--deep-pink)' }}>Services Available</strong>
                                    <span>Browse all our services</span>
                                </div>
                            </a>
                            <div className="dd-sep" />

                            <a href="symptom_checker.html" className="dd-item">
                                <div className="dd-icon dd-icon-pink"><i className="fa-solid fa-stethoscope" /></div>
                                <div><strong>Symptom Checker</strong><span>AI-powered diagnosis</span></div>
                            </a>

                            <a href="dashboard.html" className="dd-item">
                                <div className="dd-icon dd-icon-green"><i className="fa-solid fa-gauge-high" /></div>
                                <div><strong>My Dashboard</strong><span>Track your health</span></div>
                            </a>

                            <a href="screening.html" className="dd-item">
                                <div className="dd-icon dd-icon-blue"><i className="fa-solid fa-magnifying-glass-plus" /></div>
                                <div><strong>Health Screening</strong><span>Cancer &amp; preventive</span></div>
                            </a>

                            <a href="vaccination.html" className="dd-item">
                                <div className="dd-icon dd-icon-purple"><i className="fa-solid fa-syringe" /></div>
                                <div><strong>Vaccination</strong><span>Immunization schedule</span></div>
                            </a>

                            <a href="otc.html" className="dd-item">
                                <div className="dd-icon dd-icon-teal"><i className="fa-solid fa-pills" /></div>
                                <div><strong>OTC Medicine Guide</strong><span>Safe self-care options</span></div>
                            </a>

                            <a href="government-schemes.html" className="dd-item">
                                <div className="dd-icon dd-icon-orange"><i className="fa-solid fa-landmark" /></div>
                                <div><strong>Govt Schemes</strong><span>Benefits you deserve</span></div>
                            </a>

                            <a href="insurance.html" className="dd-item">
                                <div className="dd-icon dd-icon-forest"><i className="fa-solid fa-shield-halved" /></div>
                                <div><strong>Insurance</strong><span>Coverage &amp; claims guide</span></div>
                            </a>

                        </div>
                    </div>

                    {/* Stories */}
                    <div className="nav-item">
                        <a href="stories.html" className="nav-link">Stories</a>
                    </div>

                    {/* About Us */}
                    <div className="nav-item">
                        <a href="about.html" className="nav-link">About Us</a>
                    </div>

                    {/* ── Additional Info dropdown ── */}
                    <div className="nav-item">
                        <button className="nav-link" aria-haspopup="true">
                            Additional Info <i className="fa-solid fa-chevron-down chevron" />
                        </button>
                        <div className="nav-dropdown" style={{ minWidth: '240px' }}>

                            <div className="dd-section-label">Health Topics</div>

                            <a href="fertility.html" className="dd-item">
                                <div className="dd-icon dd-icon-pregnancy"><i className="fa-solid fa-seedling" /></div>
                                <div><strong>Fertility</strong><span>Cycle, conceiving &amp; IVF</span></div>
                            </a>

                            <a href="pregnancy_journey.html" className="dd-item">
                                <div className="dd-icon dd-icon-purple"><i className="fa-solid fa-baby-carriage" /></div>
                                <div><strong>Pregnancy</strong><span>All trimesters covered</span></div>
                            </a>

                            <a href="newborn_postpartum_care.html" className="dd-item">
                                <div className="dd-icon dd-icon-blue"><i className="fa-solid fa-baby" /></div>
                                <div><strong>Motherhood</strong><span>Newborn &amp; postpartum</span></div>
                            </a>

                            <a href="menopause.html" className="dd-item">
                                <div className="dd-icon dd-icon-green"><i className="fa-solid fa-spa" /></div>
                                <div><strong>Wellness</strong><span>Menopause, bone, mental</span></div>
                            </a>

                            <div className="dd-sep" />

                            <a href="community.html" className="dd-item">
                                <div className="dd-icon dd-icon-violet"><i className="fa-solid fa-users" /></div>
                                <div><strong>Community</strong><span>Share &amp; connect</span></div>
                            </a>

                            <div className="dd-sep" />
                            <div className="dd-section-label">Specialised Care</div>

                            {/* NCD — flyout (Additional Info panel) */}
                            <div className="dd-item dd-has-flyout">
                                <div className="dd-icon dd-icon-indigo"><i className="fa-solid fa-heart-pulse" /></div>
                                <a href="ncd_pregnancy.html" style={{ textDecoration: 'none', color: 'inherit', flex: 1 }}>
                                    <strong>Non Communicable Diseases</strong>
                                    <span>Diabetes, hypertension &amp; more</span>
                                </a>
                                <i className="fa-solid fa-chevron-right dd-flyout-arrow" />
                                <div className="dd-flyout">
                                    <a href="gestational_diabetes.html" className="dd-item">
                                        <div className="dd-icon dd-icon-gold"><i className="fa-solid fa-droplet" /></div>
                                        <div><strong>Gestational Diabetes</strong><span>Manage blood sugar</span></div>
                                    </a>
                                    <a href="preeclampsia_education.html" className="dd-item">
                                        <div className="dd-icon dd-icon-pink"><i className="fa-solid fa-heart-circle-exclamation" /></div>
                                        <div><strong>Preeclampsia</strong><span>Blood pressure care</span></div>
                                    </a>
                                    <a href="cancer_simulation_journey.html" className="dd-item">
                                        <div className="dd-icon dd-icon-purple"><i className="fa-solid fa-ribbon" /></div>
                                        <div><strong>Cancer</strong><span>Simulation journey</span></div>
                                    </a>
                                </div>
                            </div>

                            <a href="bone_health.html" className="dd-item">
                                <div className="dd-icon dd-icon-menopause"><i className="fa-solid fa-bone" /></div>
                                <div><strong>Bone Health</strong><span>Osteoporosis prevention</span></div>
                            </a>

                            <a href="depression.html" className="dd-item">
                                <div className="dd-icon dd-icon-gold"><i className="fa-solid fa-brain" /></div>
                                <div><strong>Mental Health</strong><span>Anxiety, depression, support</span></div>
                            </a>

                            <a href="loss_support.html" className="dd-item">
                                <div className="dd-icon dd-icon-neutral"><i className="fa-solid fa-hands-holding-heart" /></div>
                                <div><strong>Loss Support</strong><span>You are never alone</span></div>
                            </a>

                        </div>
                    </div>

                </nav>

                {/* ── Right actions: Sign In + Contact Us + Hamburger ── */}
                <div className="nav-actions">
                    <a className="btn-nav outline" href="signin.html">
                        <i className="fa-regular fa-user" /> Sign In
                    </a>
                    <a className="btn-nav primary" href="contact.html">
                        <i className="fa-solid fa-envelope" /> Contact Us
                    </a>
                    <button
                        className={`hamburger${isMobileOpen ? ' open' : ''}`}
                        id="hamburgerBtn"
                        aria-label="Toggle mobile menu"
                        aria-expanded={isMobileOpen}
                        ref={hamburgerRef}
                        onClick={toggleMobile}
                    >
                        <span />
                        <span />
                        <span />
                    </button>
                </div>

            </div>
        </header>
    );
};

export default SiteHeader1;
