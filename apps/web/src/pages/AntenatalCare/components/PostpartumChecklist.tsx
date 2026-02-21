import React from 'react';
import { useAntenatalState } from '../hooks/useAntenatalState';

const CHECKLIST_ITEMS = [
    { id: "peri-bottles", icon: "🚿", title: "Peri-bottles & Healing", desc: "For gentle cleansing postpartum" },
    { id: "nursing-pads", icon: "🍼", title: "Nursing Pads & Support", desc: "If you plan to breastfeed" },
    { id: "pads-heavy", icon: "🧺", title: "Heavy Absorbency Pads", desc: "First 1-2 weeks of recovery" },
    { id: "frozen-pads", icon: "🧊", title: "Frozen Padsicles", desc: "Homemade comfort for relief" },
    { id: "stool-softeners", icon: "💊", title: "Stool Softeners", desc: "Crucial for initial comfort" },
    { id: "comfortable-clothes", icon: "👕", title: "Loose, Dark Clothing", desc: "Soft waistbands are best" },
    { id: "support-system", icon: "👥", title: "Support Rota", desc: "Plan for meals and nursery help" },
    { id: "mental-health", icon: "🧠", title: "Mental Health Check-in", desc: "Identify signs of baby blues vs PPD" }
];

export const PostpartumChecklist: React.FC = () => {
    const { state, togglePostpartumItem } = useAntenatalState();

    return (
        <section id="postpartum" className="postpartum-section">
            <div className="section-header">
                <div className="header-badge-prominent">
                    <span className="badge-pulse"></span>
                    <span className="badge-text">Healing & Recovery</span>
                </div>
                <h2 className="section-title-prominent">Postpartum <span className="title-highlight">Checklist</span></h2>
                <p className="section-subtitle-prominent">
                    Preparing for the "Fourth Trimester" is just as important as the birth. Here's what you'll need for those first weeks at home.
                </p>
            </div>

            <div className="checklist-container">
                <div className="checklist-grid">
                    {CHECKLIST_ITEMS.map((item) => {
                        const isDone = state.postpartumChecklist.includes(item.id);
                        return (
                            <div
                                key={item.id}
                                className={`checklist-card ${isDone ? 'checked' : ''}`}
                                onClick={() => togglePostpartumItem(item.id)}
                            >
                                <div className="check-box">
                                    {isDone && <span className="check-tick">✓</span>}
                                </div>
                                <div className="check-info">
                                    <span className="check-icon">{item.icon}</span>
                                    <div className="check-text">
                                        <h4>{item.title}</h4>
                                        <p>{item.desc}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="checklist-summary">
                    <div className="progress-bar-container">
                        <div
                            className="progress-bar-fill"
                            style={{ width: `${(state.postpartumChecklist.length / CHECKLIST_ITEMS.length) * 100}%` }}
                        ></div>
                    </div>
                    <div className="summary-text">
                        <span>{state.postpartumChecklist.length} of {CHECKLIST_ITEMS.length} items ready</span>
                        <button className="btn-add-custom" onClick={() => alert("Custom items coming soon!")}>+ Add Custom Item</button>
                    </div>
                </div>
            </div>
        </section>
    );
};
