import React from 'react';
import '../../../../../styles/journey/main/sections/prevention.css';
import { NetworkCanvas } from './NetworkCanvas';

interface PreventionCardProps {
    to: string;
    icon: string;
    title: string;
    description: string;
    pills: string[];
    ctaText: string;
    delay: string;
    coreBg: string;
    ringColor?: string;
    pillStyle?: React.CSSProperties;
    ctaStyle?: React.CSSProperties;
    featured?: boolean;
}

const PreventionCard: React.FC<PreventionCardProps> = ({
    to,
    icon,
    title,
    description,
    pills,
    ctaText,
    delay,
    coreBg,
    ringColor,
    pillStyle,
    ctaStyle,
    featured = false,
}) => (
    <a
        href={to}
        className={`s5-card reveal ${featured ? 's5-card-featured' : ''}`}
        style={{ transitionDelay: delay }}
    >
        <div className="s5-card-rings">
            <div className="s5-ring s5-ring-1" style={{ borderColor: ringColor }} />
            <div className="s5-ring s5-ring-2" style={{ borderColor: ringColor ? ringColor.replace(/[^,]+(?=\))/, (match) => (parseFloat(match) * 0.6).toString()) : undefined }} />
            <div className="s5-ring s5-ring-3" style={{ borderColor: ringColor ? ringColor.replace(/[^,]+(?=\))/, (match) => (parseFloat(match) * 0.35).toString()) : undefined }} />
            <div className="s5-card-core" style={{ background: coreBg }}>
                <i className={`fa-solid ${icon}`} />
            </div>
        </div>
        <div className="s5-card-content">
            <h3>{title}</h3>
            <p>{description}</p>
            <div className="s5-pills-row">
                {pills.map((pill, i) => (
                    <span key={i} className="s5-pill" style={pillStyle}>
                        {pill}
                    </span>
                ))}
            </div>
            <span className="s5-cta-link" style={ctaStyle}>
                {ctaText} <i className="fa-solid fa-arrow-right" />
            </span>
        </div>
    </a>
);

export const Section5: React.FC = () => (
    <section className="s5-section" id="s5">
        <NetworkCanvas />

        <div className="section-inner" style={{ position: 'relative', zIndex: 2 }}>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <div className="section-label s5-label reveal" style={{ display: 'inline-flex' }}>
                    <i className="fa-solid fa-shield-heart" /> Chapter Five
                </div>
                <h2 className="section-heading reveal reveal-delay-1" style={{ textAlign: 'center' }}>
                    Prevention & <span className="em-green">Community</span>
                </h2>
                <p className="section-sub reveal reveal-delay-2" style={{ margin: '0 auto', textAlign: 'center' }}>
                    Stay protected, stay connected. Your shield against disease and the sisterhood that carries you forward.
                </p>
            </div>

            <div className="s5-grid">
                {/* Vaccination */}
                <PreventionCard
                    to="/vaccination.html"
                    icon="fa-syringe"
                    title="Vaccination Schedule"
                    description="HPV, flu, Td, hepatitis — your complete adult immunization roadmap for lifelong protection against preventable diseases."
                    pills={['HPV Vaccine', 'Flu Shot', 'Tetanus']}
                    ctaText="View Schedule"
                    delay=".07s"
                    coreBg="linear-gradient(135deg, #43a047, #1b5e20)"
                />

                {/* OTC Medicine (featured) */}
                <PreventionCard
                    to="/otc.html"
                    icon="fa-pills"
                    title="OTC Medicine Guide"
                    description="Safe over-the-counter options for common women's health concerns — pain relief, infections, supplements, all demystified."
                    pills={['Pain Relief', 'Supplements', 'Antifungals']}
                    ctaText="Browse Guide"
                    delay=".17s"
                    coreBg="linear-gradient(135deg, #ec407a, #ad1457)"
                    featured={true}
                    ringColor="rgba(236, 64, 122, 0.28)"
                    pillStyle={{
                        background: 'rgba(236, 64, 122, 0.1)',
                        color: '#c2185b',
                        borderColor: 'rgba(236, 64, 122, 0.22)'
                    }}
                    ctaStyle={{ color: 'var(--deep-pink)' }}
                />

                {/* Community */}
                <PreventionCard
                    to="/community.html"
                    icon="fa-users-between-lines"
                    title="Community & Stories"
                    description="Real women, real journeys. Share experiences, listen with empathy, and grow together in a safe, moderated sisterhood."
                    pills={['Share Stories', 'Ask Questions', 'Connect']}
                    ctaText="Join Now"
                    delay=".27s"
                    coreBg="linear-gradient(135deg, #8b5cf6, #4527a0)"
                    ringColor="rgba(124, 58, 237, 0.28)"
                    pillStyle={{
                        background: 'rgba(124, 58, 237, 0.08)',
                        color: '#6d28d9',
                        borderColor: 'rgba(124, 58, 237, 0.22)'
                    }}
                    ctaStyle={{ color: '#6d28d9' }}
                />
            </div>

            {/* Dashboard CTA Strip */}
            <div className="s5-dashboard-cta reveal">
                <div className="s5-cta-inner">
                    <div className="s5-cta-icon">
                        <div className="s5-cta-pulse" />
                        <div className="s5-cta-pulse s5-cta-pulse-2" />
                        <i className="fa-solid fa-gauge-high" />
                    </div>
                    <div className="s5-cta-text">
                        <h3>Your Health Dashboard <span>Awaits</span></h3>
                        <p>Track cycles, pregnancy milestones, symptoms, medications and appointments in one beautiful, private space.</p>
                    </div>
                    <a href="dashboard.html" className="s5-cta-btn">
                        <i className="fa-solid fa-gauge-high" /> Open My Dashboard
                    </a>
                </div>
            </div>
        </div>
    </section >
);
