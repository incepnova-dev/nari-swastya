import React, { useState, useMemo } from 'react';
import '../../../styles/journey/fertility/fertility-compass.css';

interface FactorCardProps {
    id: string;
    icon: React.ReactNode;
    title: string;
    sublabel: string;
    context: string;
    isActive: boolean;
    onToggle: () => void;
}

const FactorCard: React.FC<FactorCardProps> = ({ icon, title, sublabel, context, isActive, onToggle }) => {
    return (
        <div className={`factor-card ${isActive ? 'active' : ''}`} onClick={onToggle}>
            <div className="factor-header">
                <div className="factor-icon">{icon}</div>
                <div className="factor-label">
                    <strong>{title}</strong>
                    <span>{sublabel}</span>
                </div>
                <div className="check-circle">
                    {isActive && <i className="fa-solid fa-check"></i>}
                </div>
            </div>
            <div className="factor-context">
                <p><strong>Why this matters:</strong> {context}</p>
            </div>
        </div>
    );
};

const COMPASS_FACTORS = [
    {
        id: 'age_under_35',
        icon: <i className="fa-regular fa-clock"></i>,
        title: 'Age < 35',
        sublabel: 'Trying for 12+ months',
        context: 'Published clinical guidance [NICE CG156, ACOG] advises women under 35 to attempt natural conception for 12 months before seeking investigation — evidence shows approximately 85% of fertile couples will achieve pregnancy unaided within this period.',
        severity: 'urgent'
    },
    {
        id: 'age_over_35',
        icon: <i className="fa-solid fa-hourglass-half"></i>,
        title: 'Age > 35',
        sublabel: 'Trying for 6+ months',
        context: 'Both ovarian reserve [egg count] and oocyte quality deteriorate at an accelerated rate beyond age 35. Clinical guidance [ASRM, ACOG, FOGSI] therefore contracts the recommended evaluation window to just 6 months of unsuccessful trying, to preserve treatment options.',
        severity: 'high'
    },
    {
        id: 'irregular_cycles',
        icon: <i className="fa-solid fa-calendar-xmark"></i>,
        title: 'Irregular Cycles',
        sublabel: '<21 or >35 days',
        context: 'Cycle irregularity [cycles shorter than 21 or longer than 35 days] is frequently an indicator of anovulation [cycles where no egg is released], making it [inherently] hard to identify and act on the fertile window for natural conception.',
        severity: 'medium'
    },
    {
        id: 'medical_conditions',
        icon: <i className="fa-solid fa-notes-medical"></i>,
        title: 'Conditions',
        sublabel: 'PCOS, Endo, Thyroid',
        context: 'Endometriosis can compromise [or fully obstruct] the fallopian tubes and distort pelvic anatomy, whereas PCOS [polycystic ovary syndrome] primarily disrupts ovulation. Identifying and managing either condition [early] substantially improves conception prospects.',
        severity: 'high'
    },
    {
        id: 'medical_history',
        icon: <i className="fa-solid fa-person-dress-burst"></i>,
        title: 'Medical History',
        sublabel: 'Miscarriages / Surgery',
        context: 'A pattern of pregnancy loss [recurrent miscarriage] or a history of pelvic or uterine surgery may point to anatomical abnormalities or underlying endocrine [hormonal] dysfunction — both warrant targeted clinical evaluation and personalised management.',
        severity: 'high'
    }
];

export const FertilityCompass: React.FC = () => {
    const [selectedFactors, setSelectedFactors] = useState<Set<string>>(new Set());

    const toggleFactor = (id: string) => {
        const newSelected = new Set(selectedFactors);
        if (newSelected.has(id)) {
            newSelected.delete(id);
        } else {
            newSelected.add(id);
        }
        setSelectedFactors(newSelected);
    };

    const riskMetrics = useMemo(() => {
        const count = selectedFactors.size;
        let score = count * 25;
        if (score > 100) score = 100;

        if (count === 0) {
            return {
                score,
                color: "#4caf50",
                label: "Low Priority",
                icon: <i className="fa-solid fa-shield-halved" style={{ color: '#42a5f5', filter: 'drop-shadow(0 0 15px rgba(66, 165, 245, 0.3))', fontSize: '4rem' }}></i>,
                title: "Routine Monitoring",
                badgeText: "Standard Care",
                badgeBg: "#f5f5f5",
                badgeColor: "#777",
                desc: "Your profile looks standard. Keep tracking your cycle. Select factors on the left to see how your roadmap changes.",
                showAlert: false,
                showPlan: false
            };
        } else if (score <= 25) {
            return {
                score,
                color: "#ffb74d",
                label: "Attention Needed",
                icon: "🤔",
                title: "Keep an Eye On It",
                badgeText: "Monitor Closely",
                badgeBg: "#fff3e0",
                badgeColor: "#ef6c00",
                desc: "You have flagged a potential concern. It may not require immediate intervention, but track your symptoms for the next 2 months.",
                showAlert: false,
                showPlan: false
            };
        } else {
            return {
                score,
                color: "#ef5350",
                label: "Consult Recommended",
                icon: "👨‍⚕️",
                title: "Specialist Advised",
                badgeText: "Action Required",
                badgeBg: "#ffebee",
                badgeColor: "#c62828",
                desc: `You have identified ${count} significant risk factors. Early intervention significantly improves fertility outcomes.`,
                showAlert: true,
                showPlan: true
            };
        }
    }, [selectedFactors]);

    return (
        <section className="specialist-section fade-in-up" id="compass" aria-label="Fertility Compass — When to See a Specialist">
            <div className="center-text">
                <h2 className="section-title-lg">
                    <span className="title-black">Fertility</span> Compass
                </h2>
                <p className="sub-head">Map your reproductive health. Select factors that apply to you to generate a personalized roadmap.</p>
            </div>

            <div className="compass-grid">
                <div className="risk-factors-container">
                    <h3 className="panel-title"><i className="fa-solid fa-sliders"></i> Your Profile Indicators</h3>
                    <div className="factor-cards">
                        {COMPASS_FACTORS.map((factor) => (
                            <FactorCard
                                key={factor.id}
                                id={factor.id}
                                icon={factor.icon}
                                title={factor.title}
                                sublabel={factor.sublabel}
                                context={factor.context}
                                isActive={selectedFactors.has(factor.id)}
                                onToggle={() => toggleFactor(factor.id)}
                            />
                        ))}
                    </div>
                </div>

                <div className="result-monitor-wrapper">
                    <div className={`result-monitor ${riskMetrics.showAlert ? 'alert-mode' : ''}`}>
                        <div className="monitor-header">
                            <div className="urgency-meter">
                                <div 
                                    className="meter-bar" 
                                    style={{ 
                                        width: `${riskMetrics.score < 5 ? 5 : riskMetrics.score}%`,
                                        backgroundColor: riskMetrics.color
                                    }}
                                ></div>
                            </div>
                            <span className="urgency-label">{riskMetrics.label}</span>
                        </div>

                        <div className="status-display">
                            <div className="status-icon-glow">{riskMetrics.icon}</div>
                            <h3 id="riskTitle">{riskMetrics.title}</h3>
                            <span 
                                className="status-pill"
                                style={{
                                    background: riskMetrics.badgeBg,
                                    color: riskMetrics.badgeColor
                                }}
                            >
                                {riskMetrics.badgeText}
                            </span>
                        </div>

                        <p id="riskDesc">{riskMetrics.desc}</p>
                        
                        {riskMetrics.showPlan && (
                            <div className="action-plan">
                                <div className="plan-header">Recommended Action Plan:</div>
                                <div className="plan-steps">
                                    <div className="step-row">
                                        <div className="step-icon"><i className="fa-solid fa-user-doctor"></i></div>
                                        <div className="step-text">Book Specialist Consult</div>
                                    </div>
                                    <div className="step-row">
                                        <div className="step-icon"><i className="fa-solid fa-vial"></i></div>
                                        <div className="step-text">Day 3 Hormone Panel</div>
                                    </div>
                                    <div className="step-row">
                                        <div className="step-icon"><i className="fa-solid fa-wand-magic-sparkles"></i></div>
                                        <div className="step-text">Ultrasound Scan</div>
                                    </div>
                                </div>
                                <button className="btn-primary-3d si-btn-full">Find a Specialist Near Me</button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};
