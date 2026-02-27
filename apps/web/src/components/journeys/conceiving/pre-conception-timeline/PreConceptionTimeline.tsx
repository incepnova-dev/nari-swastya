import React from 'react';
import { TIMELINE_ITEMS } from '../conception-data';

export const PreConceptionTimeline: React.FC = () => {
    return (
        <section className="timeline-section reveal">
            <div className="section-header centered">
                <div className="section-label-pill pink">
                    <i className="fa-solid fa-map-location-dot"></i> YOUR ROADMAP
                </div>
                <h2 className="section-heading-j">
                    <span className="icon-calendar">🗓️</span> Your 3-Month <span className="em">Pre-Conception Timeline</span>
                </h2>
                <p className="section-subtitle">Prepare your body step-by-step for the healthiest pregnancy</p>
            </div>

            <div className="timeline">
                {TIMELINE_ITEMS.map((item, idx) => {
                    // Following the exact HTML order: 
                    // odd rows: Content(1) -> Marker(2) -> Evidence(3)
                    // even rows: Evidence(1) -> Marker(2) -> Content(3)
                    // This allows the CSS nth-child(even) swap to work exactly like the original.
                    const isEven = idx % 2 !== 0;

                    if (isEven) {
                        return (
                            <div key={idx} className="timeline-item">
                                <div className="timeline-content ev-card">
                                    <div className="timeline-evidence">
                                        <div className="ev-badges">
                                            {item.evidence.badges.map((badge, bIdx) => (
                                                <span key={bIdx} className={`ev-badge ${badge.color}`}>{badge.text}</span>
                                            ))}
                                        </div>
                                        <p className="ev-fact">{item.evidence.fact}</p>
                                        <p className="ev-source">{item.evidence.source}</p>
                                    </div>
                                </div>

                                <div className="timeline-marker" style={{ '--timeline-color': item.color } as any}>
                                    <div className="timeline-icon">{item.icon}</div>
                                    <div className="timeline-label">{item.month}</div>
                                </div>

                                <div className="timeline-content">
                                    <div className="timeline-title" style={{ '--timeline-color': item.color } as any}>
                                        {item.title}
                                    </div>
                                    <div className="timeline-desc">{item.desc}</div>
                                </div>
                            </div>
                        );
                    } else {
                        return (
                            <div key={idx} className="timeline-item">
                                <div className="timeline-content">
                                    <div className="timeline-title" style={{ '--timeline-color': item.color } as any}>
                                        {item.title}
                                    </div>
                                    <div className="timeline-desc">{item.desc}</div>
                                </div>

                                <div className="timeline-marker" style={{ '--timeline-color': item.color } as any}>
                                    <div className="timeline-icon">{item.icon}</div>
                                    <div className="timeline-label">{item.month}</div>
                                </div>

                                <div className="timeline-content ev-card">
                                    <div className="timeline-evidence">
                                        <div className="ev-badges">
                                            {item.evidence.badges.map((badge, bIdx) => (
                                                <span key={bIdx} className={`ev-badge ${badge.color}`}>{badge.text}</span>
                                            ))}
                                        </div>
                                        <p className="ev-fact">{item.evidence.fact}</p>
                                        <p className="ev-source">{item.evidence.source}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    }
                })}
            </div>

            {/* CTA Section */}
            <div className="cta-section">
                <div className="cta-title">🌟 Ready to Start Your Journey?</div>
                <div className="cta-text">
                    You have all the knowledge you need. Trust your body, stay consistent with healthy habits, and be patient. Most couples conceive within 6-12 months. You've got this! 💕
                </div>
                <button
                    className="cta-button"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                    ↑ Back to Top
                </button>
            </div>
        </section>
    );
};
