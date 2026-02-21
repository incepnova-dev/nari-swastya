import React from 'react';

interface JourneyTimelineProps {
    currentWeek: number;
}

const STAGES = [
    { id: 'first', title: 'First Trimester', weeks: 'Weeks 1-12', desc: 'Laying the foundation', icon: '🌱' },
    { id: 'second', title: 'Second Trimester', weeks: 'Weeks 13-26', desc: 'The golden period', icon: '🦋' },
    { id: 'third', title: 'Third Trimester', weeks: 'Weeks 27-40', desc: 'Preparation for birth', icon: '⏳' },
    { id: 'fourth', title: 'Fourth Trimester', weeks: 'Post-delivery', desc: 'Healing & Bonding', icon: '🤱' },
];

export const JourneyTimeline: React.FC<JourneyTimelineProps> = ({ currentWeek }) => {
    return (
        <section className="journey-section">
            <div className="section-header">
                <div className="header-badge-prominent">
                    <span className="badge-pulse"></span>
                    <span className="badge-text">Interactive Roadmap</span>
                </div>
                <h2 className="section-title-prominent">
                    Your <span className="title-highlight">Antenatal Timeline</span>
                </h2>
                <p className="section-subtitle-prominent">
                    A trimester-by-trimester guide to your baby's development and essential health milestones.
                </p>
            </div>

            <div className="timeline-container">
                <div className="timeline-rail"></div>
                {STAGES.map((stage) => {
                    const isCurrent = (stage.id === 'first' && currentWeek <= 12) ||
                        (stage.id === 'second' && currentWeek >= 13 && currentWeek <= 26) ||
                        (stage.id === 'third' && currentWeek >= 27);
                    return (
                        <button key={stage.id} className={`timeline-stage ${isCurrent ? 'active' : ''}`}>
                            <div className="stage-marker">
                                <div className="marker-dot">{stage.icon}</div>
                                {isCurrent && <div className="marker-pulse"></div>}
                            </div>
                            <h3 className="stage-title">{stage.title}</h3>
                            <p className="stage-weeks">{stage.weeks}</p>
                            <p className="stage-desc">{stage.desc}</p>
                        </button>
                    );
                })}
            </div>
        </section>
    );
};
