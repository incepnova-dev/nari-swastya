import React, { useState } from 'react';
import { useAntenatalState } from '../hooks/useAntenatalState';

const BIRTH_PLAN_DATA = {
    labor: {
        title: "Labor Environment & Support",
        icon: "🌊",
        preferences: [
            { id: "move-freely", icon: "🚶‍♀️", title: "Move Freely During Labor", desc: "Walk, change positions as needed", info: "Movement can help labor progress and manage pain naturally" },
            { id: "dim-lights", icon: "💡", title: "Dim Lights & Calming Music", desc: "Create a peaceful atmosphere", info: "Reduces stress hormones and helps you focus inward" },
            { id: "water-therapy", icon: "🛁", title: "Water Therapy/Shower", desc: "Use water for comfort during labor", info: "Warm water can ease pain and help you relax" },
            { id: "minimal-interruptions", icon: "🚪", title: "Minimal Interruptions", desc: "Limit visitors and checks when possible", info: "Privacy helps maintain focus and oxytocin flow" },
            { id: "birth-partner", icon: "👥", title: "Continuous Partner Support", desc: "Have your support person always present", info: "Studies show continuous support reduces interventions" },
            { id: "photography", icon: "📸", title: "Photography/Video Welcome", desc: "Capture precious moments", info: "Some hospitals have policies - ask ahead" }
        ],
        sliders: [
            { id: "room-temp", label: "Preferred Room Temperature", min: 18, max: 26, default: 22, unit: "°C", emoji: "🌡️" }
        ]
    },
    pain: {
        title: "Pain Management Preferences",
        icon: "💊",
        preferences: [
            { id: "try-natural-first", icon: "🧘‍♀️", title: "Try Natural Methods First", desc: "Breathing, positions, massage", info: "Give yourself time before medical options" },
            { id: "open-epidural", icon: "💉", title: "Open to Epidural", desc: "Pain relief through spinal medication", info: "Very effective - can be given anytime during labor" },
            { id: "nitrous-oxide", icon: "😮‍💨", title: "Consider Nitrous Oxide (Gas)", desc: "Inhaled pain relief you control", info: "Takes edge off, doesn't eliminate pain completely" },
            { id: "discuss-options", icon: "💬", title: "Discuss All Options on Arrival", desc: "Review what's available at your facility", info: "Good to know your full menu of choices" },
            { id: "iv-pain-med", icon: "💊", title: "IV Pain Medication if Needed", desc: "Systemic pain relief through IV", info: "Can make you drowsy but helps take the edge off" },
            { id: "tens-unit", icon: "⚡", title: "TENS Unit for Early Labor", desc: "Electrical nerve stimulation", info: "Some women find it helpful in early labor" }
        ],
        sliders: [
            { id: "pain-tolerance", label: "Natural Pain Management Commitment", min: 1, max: 10, default: 5, unit: "", emoji: "💪", labels: ["Flexible", "Very Committed"] }
        ]
    },
    delivery: {
        title: "Delivery & First Moments",
        icon: "👶",
        preferences: [
            { id: "skin-to-skin", icon: "🤱", title: "Immediate Skin-to-Skin", desc: "Baby placed directly on your chest", info: "Helps bonding, warmth, and breastfeeding initiation" },
            { id: "delayed-cord", icon: "🩸", title: "Delayed Cord Clamping", desc: "Wait 1-3 minutes before cutting", info: "Allows extra blood transfer - recommended by WHO" },
            { id: "clear-liquids", icon: "💧", title: "Clear Liquids & Light Snacks", desc: "Energy for the marathon of birth", info: "Fueling your body can help maintain strength" },
            { id: "mirror-viewing", icon: "🪞", title: "Mirror for Viewing", desc: "See baby's head as it emerges", info: "Some women find it very motivating for pushing" },
            { id: "cutting-cord", icon: "✂️", title: "Partner Cutting Cord", desc: "Invite your support person to participate", info: "A symbolic moment of transition for your family" },
            { id: "breast-crawl", icon: "🍼", title: "Allow Breast Crawl", desc: "Let baby find the breast naturally", info: "Supports the first natural feeding instinct" }
        ],
        sliders: [
            { id: "pushing-pos", label: "Preferred Pushing Positions", min: 1, max: 10, default: 5, unit: "", emoji: "🤸", labels: ["Open", "Upright Focused"] }
        ]
    }
};

export const BirthPlanV2: React.FC = () => {
    const { state, toggleBirthPreference, updateBirthSlider } = useAntenatalState();
    const [activeTab, setActiveTab] = useState<keyof typeof BIRTH_PLAN_DATA>('labor');

    return (
        <section id="birth-plan" className="birth-plan-v2">
            <div className="section-header">
                <div className="header-badge-prominent">
                    <span className="badge-pulse"></span>
                    <span className="badge-text">Interactive Planner</span>
                </div>
                <h2 className="section-title-prominent">Birth Plan <span className="title-highlight">V2</span></h2>
                <p className="section-subtitle-prominent">
                    A revolutionary way to communicate your preferences. Medically reviewed options to help you prepare for the big day.
                </p>
            </div>

            <div className="planner-container">
                <div className="planner-tabs">
                    {Object.entries(BIRTH_PLAN_DATA).map(([key, data]) => (
                        <button
                            key={key}
                            className={`tab-btn ${activeTab === key ? 'active' : ''}`}
                            onClick={() => setActiveTab(key as any)}
                        >
                            <span className="tab-icon">{data.icon}</span>
                            <span className="tab-label">{data.title}</span>
                        </button>
                    ))}
                </div>

                <div className="planner-content">
                    <div className="pref-grid">
                        {BIRTH_PLAN_DATA[activeTab].preferences.map((pref) => {
                            const isSelected = state.birthPlanV2[activeTab].preferences.includes(pref.id);
                            return (
                                <div
                                    key={pref.id}
                                    className={`pref-card ${isSelected ? 'selected' : ''}`}
                                    onClick={() => toggleBirthPreference(activeTab, pref.id)}
                                >
                                    <div className="pref-check">
                                        {isSelected && <span className="check-icon">✓</span>}
                                    </div>
                                    <div className="pref-main">
                                        <div className="pref-icon-row">
                                            <span className="pref-icon">{pref.icon}</span>
                                            <button className="info-trigger" onClick={(e) => {
                                                e.stopPropagation();
                                                alert(pref.info);
                                            }}>ℹ️</button>
                                        </div>
                                        <h4 className="pref-title">{pref.title}</h4>
                                        <p className="pref-desc">{pref.desc}</p>
                                    </div>
                                    <div className="pref-status-line"></div>
                                </div>
                            );
                        })}
                    </div>

                    <div className="slider-section">
                        {BIRTH_PLAN_DATA[activeTab].sliders.map((slider) => (
                            <div key={slider.id} className="planner-slider-card">
                                <div className="slider-header">
                                    <span className="slider-emoji">{slider.emoji}</span>
                                    <span className="slider-title">{slider.label}</span>
                                    <span className="slider-val">{state.birthPlanV2[activeTab].sliders[slider.id] || slider.default}{slider.unit}</span>
                                </div>
                                <input
                                    type="range"
                                    min={slider.min}
                                    max={slider.max}
                                    value={state.birthPlanV2[activeTab].sliders[slider.id] || slider.default}
                                    className="planner-range"
                                    onChange={(e) => updateBirthSlider(activeTab, slider.id, parseInt(e.target.value))}
                                />
                                {(slider as any).labels && (
                                    <div className="slider-labels">
                                        <span>{(slider as any).labels[0]}</span>
                                        <span>{(slider as any).labels[1]}</span>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="planner-footer">
                    <div className="planner-stats">
                        <div className="stat-circle">
                            <span className="val">{state.birthPlanV2.labor.preferences.length + state.birthPlanV2.pain.preferences.length + state.birthPlanV2.delivery.preferences.length}</span>
                            <span className="lbl">Choices Made</span>
                        </div>
                    </div>
                    <div className="action-row">
                        <button className="btn-print" onClick={() => window.print()}>🖨️ Download PDF</button>
                        <button className="btn-share" onClick={() => alert("Share feature coming soon!")}>✉️ Share with Provider</button>
                    </div>
                </div>
            </div>
        </section>
    );
};
