import React from 'react';
import { useAntenatalState } from '../hooks/useAntenatalState';
import { BODY_INSIGHTS } from '../data/bodyInsights';

export const BodyMap: React.FC = () => {
    const { state, updateWeek, updateState } = useAntenatalState();

    const openBodyInsight = (key: string) => {
        updateState({ currentInsight: key });
    };

    const insight = state.currentInsight ? BODY_INSIGHTS[state.currentInsight] : null;

    // Helper to calculate belly size based on week
    const getBellyScale = () => {
        const t = Math.max(0, Math.min(1, (state.week - 6) / 34));
        return {
            rx: 64 + t * 18,
            ry: 76 + t * 22,
        };
    };

    const bellySize = getBellyScale();

    return (
        <section id="care-control" className="control-section">
            <div className="section-header">
                <div className="header-badge-prominent">
                    <span className="badge-pulse"></span>
                    <span className="badge-text">Interactive Body Map</span>
                </div>
                <h2 className="section-title-prominent">Care <span className="title-highlight">Control Center</span></h2>
                <p className="section-subtitle-prominent">
                    Click body regions to reveal detailed insights about pregnancy changes, tests, and how your body adapts.
                </p>
            </div>

            <div className="control-grid">
                <div className="body-stage">
                    <div className="body-stage-top">
                        <div className="chip week-chip">Week {state.week} Overview</div>
                        <div className="week-slider-container">
                            <label className="slider-label">Explore Pregnancy Week</label>
                            <input
                                type="range"
                                min="1"
                                max="40"
                                value={state.week}
                                className="week-slider"
                                onChange={(e) => updateWeek(parseInt(e.target.value))}
                            />
                            <div className="slider-markers">
                                <span>1</span><span>10</span><span>20</span><span>30</span><span>40</span>
                            </div>
                        </div>
                    </div>

                    <div className="body-canvas">
                        <svg viewBox="0 0 320 600" className="body-svg-2" role="img" aria-label="Interactive pregnancy body map">
                            {/* Head */}
                            <ellipse cx="160" cy="62" rx="42" ry="48" fill="#f5c6a0" stroke="#e0a882" strokeWidth="2" />
                            <ellipse cx="160" cy="38" rx="44" ry="30" fill="#5c3d2e" />

                            {/* Torso */}
                            <path d="M100 134 Q100 128 130 128 L190 128 Q220 128 220 134 L220 280 Q220 285 215 285 L105 285 Q100 285 100 280 Z" fill="#e8a0b8" stroke="#d47a9a" strokeWidth="2" />

                            {/* Dynamic Belly */}
                            <ellipse cx="160" cy="305" rx={bellySize.rx} ry={bellySize.ry} fill="#e8a0b8" stroke="#d47a9a" strokeWidth="2" className="animated-belly" />

                            {/* Internal organ hotspots */}
                            <circle cx="160" cy="185" r="20" className="hot-organ" onClick={() => openBodyInsight('heart')} />
                            <circle cx="160" cy="305" r="35" className="hot-organ" onClick={() => openBodyInsight('uterus')} />
                            <circle cx="160" cy="360" r="12" className="hot-organ" onClick={() => openBodyInsight('bladder')} />
                            <circle cx="130" cy="265" r="14" className="hot-organ" onClick={() => openBodyInsight('kidney')} />
                            <circle cx="190" cy="265" r="14" className="hot-organ" onClick={() => openBodyInsight('kidney')} />

                            {/* Baby dot */}
                            <circle cx="160" cy="315" r={8 + (state.week / 4)} fill="rgba(216,27,96,0.5)" />

                            {/* Growth rings */}
                            <circle className="growth-ring" cx="160" cy="305" r="50" />
                            <circle className="growth-ring" cx="160" cy="305" r="70" />
                        </svg>

                        {/* Floating Hotspots */}
                        <div className="hotspot" style={{ top: '28%', left: '62%' }} onClick={() => openBodyInsight('blood')}>
                            <div className="hotspot-pulse"></div>
                            <div className="hotspot-icon">🩸</div>
                            <div className="hotspot-label">Blood Volume</div>
                        </div>
                        <div className="hotspot" style={{ top: '32%', left: '16%' }} onClick={() => openBodyInsight('bp')}>
                            <div className="hotspot-pulse"></div>
                            <div className="hotspot-icon">💓</div>
                            <div className="hotspot-label">Blood Pressure</div>
                        </div>
                        <div className="hotspot" style={{ top: '52%', left: '72%' }} onClick={() => openBodyInsight('baby')}>
                            <div className="hotspot-pulse"></div>
                            <div className="hotspot-icon">👶</div>
                            <div className="hotspot-label">Baby Growth</div>
                        </div>
                        <div className="hotspot" style={{ top: '72%', left: '32%' }} onClick={() => openBodyInsight('weight')}>
                            <div className="hotspot-pulse"></div>
                            <div className="hotspot-icon">⚖️</div>
                            <div className="hotspot-label">Weight Gain</div>
                        </div>
                        <div className="hotspot" style={{ top: '22%', left: '42%' }} onClick={() => openBodyInsight('hormones')}>
                            <div className="hotspot-pulse"></div>
                            <div className="hotspot-icon">⚗️</div>
                            <div className="hotspot-label">Hormones</div>
                        </div>
                    </div>
                </div>

                <aside className={`insight-panel-v2 ${state.currentInsight ? 'open' : ''}`}>
                    <div className="insight-panel-inner">
                        <div className="insight-header-v2">
                            <div className="insight-title-group">
                                <div className="insight-title-row" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <span style={{ fontSize: '2rem' }}>{insight?.icon || '💕'}</span>
                                    <h3 className="insight-title-v2">{insight?.title || 'Welcome'}</h3>
                                </div>
                                <div className="insight-week-badge-v2">Week {state.week}</div>
                            </div>
                            <button className="insight-close-v2" onClick={() => updateState({ currentInsight: null })}>×</button>
                        </div>
                        <div className="insight-content-scroll">
                            {insight ? (
                                <div className="insight-body" dangerouslySetInnerHTML={{ __html: insight.body }}></div>
                            ) : (
                                <div className="insight-welcome">
                                    <div className="welcome-icon">👆</div>
                                    <h4>Explore Your Body's Changes</h4>
                                    <p>Click any highlighted region on the body map to discover what's changing.</p>
                                </div>
                            )}
                        </div>
                        {insight && (
                            <div className="insight-actions-v2">
                                <button className="insight-btn secondary">📌 Pin This</button>
                                <button className="insight-btn primary">🎯 Quick Quiz</button>
                            </div>
                        )}
                    </div>
                </aside>
            </div>
        </section>
    );
};
