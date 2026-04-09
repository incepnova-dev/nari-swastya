/**
 * Call-to-Action Component for the Fertility Journey
 * Encourages users to book a consultation and provides guidance on timing.
 */
import React from 'react';
import '../../../styles/journey/fertility/fertility-cta.css';

export const FertilityCTA: React.FC = () => {
    return (
        <section className="cta-section fade-in-up" id="next-steps" aria-label="Next Steps — Book a Fertility Consultation">
            <div className="cta-content">
                <h2>Ready to Take the Next Step?</h2>
                <p>A fertility specialist consultation is advisable if conception has not occurred after 12 months of regular unprotected intercourse [or 6 months if you are over 35], or whenever you have questions or concerns about your reproductive health.</p>
                <div className="cta-buttons">
                    <a href="/consultation" className="cta-btn-white">
                        <span>📞</span> Book Consultation
                    </a>
                </div>
            </div>
        </section>
    );
};
