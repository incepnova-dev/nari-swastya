import React, { useState } from 'react';
import { useAntenatalState } from '../hooks/useAntenatalState';

const TRIAGE_DATA = {
    bleeding: { level: "EMERGENCY", what: "Bleeding can be serious.", doNow: ["Seek urgent care", "If heavy: emergency services"] },
    movement: { level: "EMERGENCY", what: "Reduced movement after 28w needs assessment.", doNow: ["Try kick count", "Seek urgent advice if reduced persists"] },
    fever: { level: "URGENT", what: "Fever >100.4°F may indicate infection.", doNow: ["Hydrate", "Contact clinician promptly"] },
    swelling: { level: "URGENT", what: "Sudden swelling can be a warning sign.", doNow: ["Check BP if possible", "Seek urgent advice"] },
    nausea: { level: "MONITOR", what: "Persistent vomiting can dehydrate.", doNow: ["Small sips", "Seek advice if can’t keep fluids"] },
    headache: { level: "EMERGENCY", what: "Severe headache + vision changes can be pre‑eclampsia warning.", doNow: ["Urgent assessment", "Don’t delay"] }
};

export const HealthCheckers: React.FC = () => {
    const [activeScenario, setActiveScenario] = useState<keyof typeof TRIAGE_DATA | null>(null);

    return (
        <section className="health-checkers-section">
            <div className="section-header">
                <div className="header-badge-prominent">
                    <span className="badge-pulse"></span>
                    <span className="badge-text">Clinical Guidance</span>
                </div>
                <h2 className="section-title-prominent">Health <span className="title-highlight">Triage</span></h2>
                <p className="section-subtitle-prominent">Interactive scenarios to help you understand urgency levels.</p>
            </div>

            <div className="triage-grid">
                <div className="triage-selector">
                    {Object.keys(TRIAGE_DATA).map((key) => (
                        <button
                            key={key}
                            className={`scenario-btn ${activeScenario === key ? 'active' : ''}`}
                            onClick={() => setActiveScenario(key as any)}
                        >
                            {key.toUpperCase()}
                        </button>
                    ))}
                </div>

                <div className="triage-display">
                    {activeScenario ? (
                        <div className={`triage-card ${TRIAGE_DATA[activeScenario].level.toLowerCase()}`}>
                            <div className="triage-header">
                                <span className={`urgency-chip ${TRIAGE_DATA[activeScenario].level.toLowerCase()}`}>
                                    {TRIAGE_DATA[activeScenario].level}
                                </span>
                                <h3>{activeScenario.toUpperCase()}</h3>
                            </div>
                            <p className="triage-intro">{TRIAGE_DATA[activeScenario].what}</p>
                            <div className="triage-actions-list">
                                <h4>Do Now:</h4>
                                <ul>
                                    {TRIAGE_DATA[activeScenario].doNow.map((step, i) => (
                                        <li key={i}>{step}</li>
                                    ))}
                                </ul>
                            </div>
                            <p className="triage-disclaimer">This is educational support only. In a medical emergency, always call emergency services immediately.</p>
                        </div>
                    ) : (
                        <div className="triage-welcome">
                            <div className="welcome-icon">🏥</div>
                            <h4>Select a Scenario</h4>
                            <p>Pick a symptom on the left to see the recommended clinical triage response.</p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};
