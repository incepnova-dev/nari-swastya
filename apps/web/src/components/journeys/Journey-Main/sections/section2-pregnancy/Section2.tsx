import React, { useState } from 'react';
import { WombCanvas, TrimesterStage } from './WombCanvas';
import '../../../../../styles/journey/pregnancy-journey.css';

interface Milestone {
    icon: string;
    text: string;
}

interface TrimesterData {
    title: string;
    description: string;
    color: string;
    milestones: Milestone[];
    actions: { label: string; to: string; icon: string; primary: boolean }[];
}

const trimesterData: Record<TrimesterStage, TrimesterData> = {
    first: {
        title: 'Weeks 1–13: New Beginnings',
        description: 'The most profound transformation begins invisibly. Your body is building an entirely new human — complete with heartbeat, spine, and tiny fingers.',
        color: 'var(--deep-pink)',
        milestones: [
            { icon: 'fa-heart-pulse', text: 'Week 6: First heartbeat detected' },
            { icon: 'fa-brain', text: 'Week 8: Neural tube fully formed' },
            { icon: 'fa-hand', text: 'Week 10: Fingers & toes forming' },
            { icon: 'fa-shield-heart', text: 'Week 12: NT scan & genetic screening' },
        ],
        actions: [
            { label: 'Antenatal Checklist', to: '/antenatal-care', icon: 'fa-clipboard-list', primary: true },
            { label: 'Screening Guide', to: '/gestational-diabetes', icon: 'fa-vial', primary: false },
        ],
    },
    second: {
        title: 'Weeks 14–27: The Golden Phase',
        description: "Most women feel their best now. Morning sickness fades, energy returns, and you'll feel those magical first kicks — called quickening.",
        color: 'var(--purple)',
        milestones: [
            { icon: 'fa-ear-listen', text: 'Week 16: Baby can hear your voice' },
            { icon: 'fa-baby', text: 'Week 18–20: Anomaly scan' },
            { icon: 'fa-person-walking', text: 'Week 22: Baby begins kicking!' },
            { icon: 'fa-lungs', text: 'Week 26: Lungs begin developing' },
        ],
        actions: [
            { label: 'Preeclampsia Guide', to: '/preeclampsia-education', icon: 'fa-heart-circle-exclamation', primary: true },
            { label: 'GD Screening', to: '/gestational-diabetes', icon: 'fa-candy-cane', primary: false },
        ],
    },
    third: {
        title: 'Weeks 28–40: Almost Time!',
        description: 'Your baby is fully formed and gaining weight. This is the time to prepare your birth plan, hospital bag, and your heart for the biggest moment of your life.',
        color: '#c2185b',
        milestones: [
            { icon: 'fa-eye', text: 'Week 28: Baby opens their eyes' },
            { icon: 'fa-weight-scale', text: 'Week 32: Rapid weight gain' },
            { icon: 'fa-rotate-right', text: 'Week 36: Baby turns head-down' },
            { icon: 'fa-star', text: 'Week 40: Full term — you\'re ready!' },
        ],
        actions: [
            { label: 'Birth Planning', to: '/pregnancy-journey', icon: 'fa-hospital', primary: true },
            { label: 'Family Guide', to: '/perinatal-family-guide', icon: 'fa-family', primary: false },
        ],
    },
};

const ConditionPill: React.FC<{
    to: string;
    icon: string;
    iconBg: string;
    iconColor: string;
    title: string;
    subtitle: string;
}> = ({ to, icon, iconBg, iconColor, title, subtitle }) => (
    <a href={to} className="cond-pill" style={{ textDecoration: 'none', color: 'inherit' }}>
        <div className="cond-pill-icon" style={{ background: iconBg }}>
            <i className={icon} style={{ color: iconColor }} />
        </div>
        <h5>{title}</h5>
        <small>{subtitle}</small>
    </a>
);

export const Section2: React.FC = () => {
    const [stage, setStage] = useState<TrimesterStage>('first');
    const data = trimesterData[stage];

    return (
        <section className="section journey-s2-section" id="s2">
            <div className="section-inner">
                <div className="journey-section-spacer" style={{ height: '3rem' }} />
                <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
                    <div className="section-label reveal" style={{ display: 'inline-flex' }}>
                        <i className="fa-solid fa-baby-carriage" /> Chapter Two
                    </div>
                    <h2 className="section-heading reveal reveal-delay-1" style={{ textAlign: 'center' }}>
                        Your <span className="em">Pregnancy Journey</span>
                    </h2>
                    <p className="section-sub reveal reveal-delay-2" style={{ margin: '0 auto', textAlign: 'center' }}>
                        Week by week, trimester by trimester — every milestone, symptom, and scan explained with care.
                    </p>
                </div>

                {/* Trimester Nav */}
                <div className="trimester-nav reveal">
                    <button
                        className={`tri-btn ${stage === 'first' ? 'active' : ''}`}
                        onClick={() => setStage('first')}
                    >
                        <i className="fa-solid fa-1" /> First Trimester (Wk 1–13)
                    </button>
                    <button
                        className={`tri-btn ${stage === 'second' ? 'active' : ''}`}
                        onClick={() => setStage('second')}
                    >
                        <i className="fa-solid fa-2" /> Second Trimester (Wk 14–27)
                    </button>
                    <button
                        className={`tri-btn ${stage === 'third' ? 'active' : ''}`}
                        onClick={() => setStage('third')}
                    >
                        <i className="fa-solid fa-3" /> Third Trimester (Wk 28–40)
                    </button>
                </div>

                {/* Trimester Content */}
                <div className="womb-stage reveal">
                    <div className="womb-stage-wrap">
                        <div className="womb-canvas-wrap">
                            <WombCanvas stage={stage} />
                        </div>
                        <div className="trimester-info">
                            <h3 style={{ color: data.color }}>{data.title}</h3>
                            <p>{data.description}</p>
                            <div className="week-milestones">
                                {data.milestones.map((m, i) => (
                                    <div key={i} className="milestone">
                                        <i className={`fa-solid ${m.icon}`} /> {m.text}
                                    </div>
                                ))}
                            </div>
                            <div style={{ marginTop: '1.5rem', display: 'flex', gap: '.8rem', flexWrap: 'wrap' }}>
                                {data.actions.map((action, i) => (
                                    <a
                                        key={i}
                                        href={action.to}
                                        className={`btn-hero ${action.primary ? 'primary' : 'secondary'}`}
                                        style={{ fontSize: '.85rem', padding: '.55rem 1.3rem', textDecoration: 'none' }}
                                    >
                                        <i className={`fa-solid ${action.icon}`} /> {action.label}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Pregnancy Conditions */}
                <div style={{ marginTop: '3rem' }}>
                    <h4 style={{ fontSize: '1.1rem', marginBottom: '1.2rem', textAlign: 'center', fontFamily: "'Playfair Display',serif" }}>
                        Know Every Risk — <span style={{ color: 'var(--deep-pink)' }}>Stay Informed</span>
                    </h4>
                    <div className="conditions-row reveal">
                        <ConditionPill
                            to="/gestational-diabetes"
                            icon="fa-solid fa-candy-cane"
                            iconBg="linear-gradient(135deg,#fff3e0,#ffe0b2)"
                            iconColor="#f57c00"
                            title="Gestational Diabetes"
                            subtitle="Monitor, manage, protect"
                        />
                        <ConditionPill
                            to="/preeclampsia-education"
                            icon="fa-solid fa-heart-circle-exclamation"
                            iconBg="linear-gradient(135deg,#fce4ec,#f8bbd9)"
                            iconColor="#c2185b"
                            title="Preeclampsia"
                            subtitle="Signs, symptoms, safety"
                        />
                        <ConditionPill
                            to="/antenatal-care"
                            icon="fa-solid fa-stethoscope"
                            iconBg="linear-gradient(135deg,#e8f5e9,#c8e6c9)"
                            iconColor="#2e7d32"
                            title="Antenatal Care"
                            subtitle="Full schedule & checklist"
                        />
                        <ConditionPill
                            to="/screening"
                            icon="fa-solid fa-shield-heart"
                            iconBg="linear-gradient(135deg,#e3f2fd,#bbdefb)"
                            iconColor="#1565c0"
                            title="Prenatal Screening"
                            subtitle="Tests & timing guide"
                        />
                        <ConditionPill
                            to="/womens-health-simulations"
                            icon="fa-solid fa-vr-cardboard"
                            iconBg="linear-gradient(135deg,#f3e5f5,#e1bee7)"
                            iconColor="#7b1fa2"
                            title="Health Simulations"
                            subtitle="Interactive learning"
                        />
                        <ConditionPill
                            to="/loss-support"
                            icon="fa-solid fa-hands-holding-heart"
                            iconBg="linear-gradient(135deg,#fafafa,#f5f5f5)"
                            iconColor="#9e9e9e"
                            title="Loss Support"
                            subtitle="You are not alone"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};
