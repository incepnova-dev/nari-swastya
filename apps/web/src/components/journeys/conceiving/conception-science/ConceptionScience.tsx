import React from 'react';
import { FertileWindowClock } from './FertileWindowClock';
import { ProbabilityCalculator } from './ProbabilityCalculator';
import { ConceptionPlayground } from './ConceptionPlayground';
import { EvidenceScorecard, EducationalSections } from '../when-to-see-doctor/EvidenceScorecard';
import { PreConceptionTimeline } from '../pre-conception-timeline/PreConceptionTimeline';
import '../../../../styles/journey/conceiving/science.css';

export const ConceptionScience: React.FC = () => {
    return (
        <section id="sim-universe" aria-label="Conception Science Simulator">
            <div className="sim-wrap">
                {/* SIM HEADER */}
                <div className="sim-header">
                    <div className="sim-eyebrow">
                        <i className="fa-solid fa-flask-vial"></i> Evidence-Based Simulator
                    </div>
                    <h2 className="sim-title">
                        Your Personal <span className="sim-em">Conception Science</span><br />
                        Interactive Guide
                    </h2>
                    <p className="sim-desc">
                        Explore peer-reviewed science through interactive simulations. Click, adjust, and discover how timing, biology, and lifestyle converge to create life.
                    </p>
                    <div className="sim-sources">
                        <span className="sim-source-tag">WHO 2023</span>
                        <span className="sim-source-tag">ACOG 2022</span>
                        <span className="sim-source-tag">Harvard Health</span>
                        <span className="sim-source-tag">Johns Hopkins</span>
                        <span className="sim-source-tag">ICMR Guidelines</span>
                        <span className="sim-source-tag">Oxford Fertility</span>
                        <span className="sim-source-tag">Lancet Reprod Health</span>
                        <span className="sim-source-tag">NEJM 2022</span>
                        <span className="sim-source-tag">NFHS-5</span>
                    </div>
                </div>

                {/* PART 1: CLOCK */}
                <FertileWindowClock />

                {/* PART 2: CALCULATOR */}
                <ProbabilityCalculator />

                {/* PART 3: PLAYGROUND */}
                <ConceptionPlayground />

                {/* PART 4: EVIDENCE SCORECARD */}
                <EvidenceScorecard />

                {/* EXTRA SECTIONS */}
                <EducationalSections />

                {/* PART 5: TIMELINE */}
                <PreConceptionTimeline />

                {/* FOOTER */}
                <div style={{ textAlign: 'center', padding: '4rem 1rem', borderTop: '1px solid #eee', marginTop: '4rem' }}>
                    <p style={{ fontSize: '.85rem', color: '#888' }}>
                        © 2026 Nari Swastya · Clinical Validation: Dr. Rio's Gynecology Unit<br />
                        All simulations are for educational purposes based on population averages.
                    </p>
                </div>
            </div>
        </section>
    );
};
