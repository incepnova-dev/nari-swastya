import React from 'react';
import '../../../../styles/journey/cycle-tracker.css';

export const CycleTracker: React.FC = () => {
    return (
        <div className="cycle-tracker">
            {/* Section Header */}
            <div className="section-header" style={{ marginTop: 0 }}>
                <div className="section-label-pill">
                    <i className="fa-solid fa-circle-nodes"></i> Cycle Science
                </div>
                <h2 className="section-heading-j">
                    📆 Understanding <span className="em">Your Cycle</span>
                </h2>
                <p className="section-subtitle">
                    Know your fertile window - the best time to conceive is 2 days before ovulation
                </p>
            </div>

            {/* Two-column visual */}
            <div className="cycle-visual">

                {/* Left: The Wheel */}
                <div className="cycle-wheel-container">
                    <div className="cycle-wheel">

                        {/* Center */}
                        <div className="cycle-center">
                            <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>📅</div>
                            <div style={{ fontWeight: 800, fontSize: '1.2rem', color: 'var(--primary)' }}>28-Day</div>
                            <div style={{ fontSize: '0.9rem', color: 'var(--text-soft)' }}>Average Cycle</div>
                        </div>

                        {/* Days distributed around the circle */}
                        <div className="cycle-day period" style={{ top: '10%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                            <span className="day-num">1</span>
                            <span className="day-label">Period</span>
                        </div>

                        <div className="cycle-day" style={{ top: '15%', left: '70%', transform: 'translate(-50%, -50%)' }}>
                            <span className="day-num">7</span>
                        </div>

                        <div className="cycle-day fertile" style={{ top: '30%', left: '85%', transform: 'translate(-50%, -50%)' }}>
                            <span className="day-num">10</span>
                            <span className="day-label">Fertile</span>
                        </div>

                        <div className="cycle-day fertile" style={{ top: '50%', left: '90%', transform: 'translate(-50%, -50%)' }}>
                            <span className="day-num">12</span>
                            <span className="day-label">Fertile</span>
                        </div>

                        <div className="cycle-day ovulation" style={{ top: '70%', left: '85%', transform: 'translate(-50%, -50%)' }}>
                            <span className="day-num">14</span>
                            <span className="day-label">Ovulate</span>
                        </div>

                        <div className="cycle-day" style={{ top: '85%', left: '70%', transform: 'translate(-50%, -50%)' }}>
                            <span className="day-num">21</span>
                        </div>

                        <div className="cycle-day" style={{ top: '90%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                            <span className="day-num">28</span>
                        </div>

                        <div className="cycle-day" style={{ top: '85%', left: '30%', transform: 'translate(-50%, -50%)' }}>
                            <span className="day-num">24</span>
                        </div>

                        <div className="cycle-day" style={{ top: '70%', left: '15%', transform: 'translate(-50%, -50%)' }}>
                            <span className="day-num">18</span>
                        </div>

                        <div className="cycle-day fertile" style={{ top: '50%', left: '10%', transform: 'translate(-50%, -50%)' }}>
                            <span className="day-num">11</span>
                            <span className="day-label">Fertile</span>
                        </div>

                        <div className="cycle-day" style={{ top: '30%', left: '15%', transform: 'translate(-50%, -50%)' }}>
                            <span className="day-num">5</span>
                        </div>

                        <div className="cycle-day period" style={{ top: '15%', left: '30%', transform: 'translate(-50%, -50%)' }}>
                            <span className="day-num">3</span>
                            <span className="day-label">Period</span>
                        </div>
                    </div>
                </div>

                {/* Right: Info panel */}
                <div className="cycle-info">
                    <div className="info-item">
                        <div className="info-icon red">🩸</div>
                        <div>
                            <div className="info-title">Menstruation (Days 1-5)</div>
                            <div className="info-desc">
                                Period starts. Uterine lining sheds. Low fertility. Track your flow - normal is 3-7 days.
                            </div>
                        </div>
                    </div>

                    <div className="info-item">
                        <div className="info-icon green">🌱</div>
                        <div>
                            <div className="info-title">Fertile Window (Days 10-14)</div>
                            <div className="info-desc">
                                BEST time to conceive! Egg-white cervical mucus appears. Have intercourse every 1-2 days.
                            </div>
                        </div>
                    </div>

                    <div className="info-item">
                        <div className="info-icon orange">🥚</div>
                        <div>
                            <div className="info-title">Ovulation (Day 14)</div>
                            <div className="info-desc">
                                Egg released! Peak fertility. Track with ovulation tests or basal body temperature.
                            </div>
                        </div>
                    </div>

                    {/* Pro Tip */}
                    <div className="pro-tip-box">
                        <div className="pro-tip-heading">💡 Pro Tip</div>
                        <div className="pro-tip-text">
                            Sperm can live up to 5 days, but egg only 12-24 hours! Start trying 2 days BEFORE ovulation.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CycleTracker;
