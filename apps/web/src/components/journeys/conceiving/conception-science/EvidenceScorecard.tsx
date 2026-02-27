import React, { useEffect, useRef } from 'react';
import { EVIDENCE_CARDS, NUTRIENTS } from './conception-data';

export const EvidenceScorecard: React.FC = () => {
    return (
        <div style={{ paddingBottom: '5rem' }}>
            <div className="sim-section-label teal"><i className="fa-solid fa-award"></i> Evidence Scorecard</div>
            <h3 className="sim-section-h">10 <span className="em">Science-Backed</span> Conception Boosters</h3>
            <p className="sim-section-sub">Each recommendation is graded by strength of evidence and potential impact, drawn from systematic reviews and randomised controlled trials.</p>
            <div className="evidence-grid">
                {EVIDENCE_CARDS.map((card, idx) => (
                    <Card key={idx} card={card} />
                ))}
            </div>
        </div>
    );
};

const Card: React.FC<{ card: any }> = ({ card }) => {
    const barRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(e => {
                if (e.isIntersecting && barRef.current) {
                    barRef.current.style.width = `${card.impact}%`;
                }
            });
        }, { threshold: 0.3 });

        if (barRef.current) observer.observe(barRef.current);
        return () => observer.disconnect();
    }, [card.impact]);

    return (
        <div className="evidence-card" data-rank={card.rank} style={{ background: card.color }}>
            <div className="ec-icon" style={{ background: card.iconBg }}>{card.icon}</div>
            <div className="ec-title">{card.title}</div>
            <div className="ec-body">{card.body}</div>
            <div className="ec-impact">
                <div className="ec-impact-bar-bg">
                    <div ref={barRef} className="ec-impact-bar" style={{ width: '0%' }}></div>
                </div>
                <span className="ec-impact-label">{card.impactLabel}</span>
            </div>
            <div className="ec-source">📚 {card.source}</div>
        </div>
    );
};

export const EducationalSections: React.FC = () => {
    return (
        <>
            {/* Essential Nutrients */}
            <div className="section-header">
                <div className="section-label-pill green"><i className="fa-solid fa-wheat-awn"></i> Evidence-Based Nutrition</div>
                <h2 className="section-heading-j">🥗 Essential <span className="em">Pre-Conception Nutrients</span></h2>
                <p className="section-subtitle">
                    These nutrients prepare your body for healthy conception and pregnancy
                </p>
            </div>

            <div className="nutrient-grid reveal">
                {NUTRIENTS.map((n, i) => (
                    <div key={i} className="nutrient-card" style={{ '--nutrient-color': n.color } as any}>
                        <div className="nutrient-header">
                            <div className="nutrient-icon">{n.icon}</div>
                            <div>
                                <div className="nutrient-name">{n.name}</div>
                            </div>
                        </div>
                        <div className="nutrient-benefit">
                            {n.benefit}
                        </div>
                        <div style={{ background: n.rgba, padding: '1rem', borderRadius: '12px', margin: '1rem 0' }}>
                            <strong style={{ color: n.color }}>Daily Need:</strong> {n.need}
                        </div>
                        <div className="food-list">
                            {n.foods.map((f, fi) => <span key={fi} className="food-item">{f}</span>)}
                        </div>
                    </div>
                ))}
            </div>

            {/* Daily Habits */}
            <div className="section-header">
                <div className="section-label-pill purple"><i className="fa-solid fa-list-check"></i> Daily Habits</div>
                <h2 className="section-heading-j">✅ Daily Habits: <span className="em">Do's & Don'ts</span></h2>
                <p className="section-subtitle">Simple lifestyle changes that significantly impact your fertility</p>
            </div>

            <div className="dos-donts reveal">
                <div className="do-card">
                    <div className="card-title"><span>✅</span><span>DEFINITELY DO</span></div>
                    {[
                        { icon: '💧', title: 'Stay Hydrated', desc: '8-10 glasses daily. Improves cervical mucus quality for sperm transport.' },
                        { icon: '😴', title: 'Sleep 7-9 Hours', desc: 'Regulates hormones (leptin, melatonin). Poor sleep disrupts ovulation.' },
                        { icon: '🧘', title: 'Manage Stress', desc: 'Yoga, meditation, therapy. High cortisol blocks ovulation hormones.' },
                        { icon: '🏃‍♀️', title: 'Moderate Exercise', desc: '30 min daily - walking, swimming, yoga. Maintains healthy weight.' },
                        { icon: '💊', title: 'Take Prenatal Vitamins', desc: 'Start 3 months before trying. Fills nutritional gaps.' },
                        { icon: '🩺', title: 'Get Pre-Conception Check', desc: 'Blood tests, vaccinations, chronic condition management.' },
                        { icon: '🦷', title: 'Visit Dentist', desc: 'Gum disease linked to infertility and pregnancy complications.' },
                        { icon: '📊', title: 'Track Your Cycle', desc: 'Apps, basal temp, ovulation tests. Know your fertile window!' }
                    ].map((item, i) => (
                        <div key={i} className="action-item">
                            <div className="action-icon">{item.icon}</div>
                            <div className="action-text">
                                <div className="action-title">{item.title}</div>
                                <div className="action-desc">{item.desc}</div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="dont-card">
                    <div className="card-title"><span>❌</span><span>ABSOLUTELY AVOID</span></div>
                    {[
                        { icon: '🚬', title: 'No Smoking', desc: 'Damages eggs permanently. Accelerates egg loss. Increases miscarriage 50%.' },
                        { icon: '🍷', title: 'Limit Alcohol', desc: 'Even moderate drinking (>4 drinks/week) reduces conception by 18%.' },
                        { icon: '☕', title: 'Reduce Caffeine', desc: 'Max 200mg/day (1 cup coffee). High intake delays conception.' },
                        { icon: '🍩', title: 'Avoid Trans Fats', desc: 'Fried foods, pastries. Cause inflammation, worsen ovulation.' },
                        { icon: '🏋️', title: 'No Extreme Exercise', desc: '>7 hrs/week vigorous exercise disrupts cycles. Moderate intensity only.' },
                        { icon: '🧴', title: 'Avoid Toxic Chemicals', desc: 'BPA plastics, pesticides, parabens. Disrupt endocrine system.' },
                        { icon: '🛁', title: 'No Hot Tubs/Saunas', desc: 'High heat affects egg quality. Warm baths OK, but not scalding.' },
                        { icon: '💊', title: 'Check Medications', desc: 'Some meds harm fertility. Ask doctor about safer alternatives.' }
                    ].map((item, i) => (
                        <div key={i} className="action-item">
                            <div className="action-icon">{item.icon}</div>
                            <div className="action-text">
                                <div className="action-title">{item.title}</div>
                                <div className="action-desc">{item.desc}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Exercise Recommendations */}
            <div className="section-header">
                <div className="section-label-pill teal"><i className="fa-solid fa-person-running"></i> Movement & Wellness</div>
                <h2 className="section-heading-j">🏃‍♀️ Fertility-Friendly <span className="em">Exercises</span></h2>
                <p className="section-subtitle">Activities that boost circulation and support hormonal balance</p>
            </div>

            <div className="exercise-grid">
                {[
                    { icon: '🧘‍♀️', title: 'Yoga', dur: '20-30 min daily', ben: 'Reduces cortisol. Specific poses improve pelvic blood flow.', col: '#4caf50' },
                    { icon: '🚶‍♀️', title: 'Brisk Walking', dur: '30-45 min daily', ben: 'Improves insulin sensitivity. Maintains healthy BMI.', col: '#2196f3' },
                    { icon: '🏊‍♀️', title: 'Swimming', dur: '3-4 times/week', ben: 'Low-impact. Reduces inflammation, improves circulation.', col: '#00bcd4' },
                    { icon: '🚫', title: 'AVOID: High Intensity', dur: 'Too strenuous', ben: 'CrossFit, marathon training can stop ovulation.', col: '#f44336' }
                ].map((ex, i) => (
                    <div key={i} className="exercise-card">
                        <div className="exercise-visual" style={{ background: ex.col }}>
                            <div className="exercise-icon">{ex.icon}</div>
                        </div>
                        <div className="exercise-content">
                            <div className="exercise-title">{ex.title}</div>
                            <div className="exercise-duration"><i className="fas fa-clock"></i> <span>{ex.dur}</span></div>
                            <div className="exercise-benefit">{ex.ben}</div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Pregnancy Loss Education */}
            <div className="section-header">
                <div className="section-label-pill red"><i className="fa-solid fa-circle-exclamation"></i> Awareness & Support</div>
                <h2 className="section-heading-j">💔 Understanding <span className="em">Pregnancy Loss</span> Types</h2>
                <p className="section-subtitle">Education for awareness - know the signs and when to seek help</p>
            </div>

            <div className="loss-types">
                <div className="loss-card" style={{ '--loss-color': '#f44336' } as any}>
                    <div className="loss-header">
                        <div className="loss-icon">🩸</div>
                        <div>
                            <div className="loss-name">Early Miscarriage</div>
                            <div style={{ fontSize: '0.85rem', color: '#666' }}>Before 12 weeks</div>
                        </div>
                    </div>
                    <div className="loss-description">Most common loss type. Usually chromosomal abnormalities.</div>
                    <div className="loss-action"><i className="fas fa-phone-alt"></i> <span>Call doctor if bleeding heavily</span></div>
                </div>
                <div className="loss-card" style={{ '--loss-color': '#ff9800' } as any}>
                    <div className="loss-header">
                        <div className="loss-icon">🫥</div>
                        <div>
                            <div className="loss-name">Chemical Pregnancy</div>
                            <div style={{ fontSize: '0.85rem', color: '#666' }}>Very early loss</div>
                        </div>
                    </div>
                    <div className="loss-description">Ends shortly after implantation. Often mistaken for late period.</div>
                    <div className="loss-action"><i className="fas fa-heart"></i> <span>Usually no treatment needed.</span></div>
                </div>
                <div className="loss-card" style={{ '--loss-color': '#00bcd4' } as any}>
                    <div className="loss-header">
                        <div className="loss-icon">🏥</div>
                        <div>
                            <div className="loss-name">Ectopic Pregnancy</div>
                            <div style={{ fontSize: '0.85rem', color: '#666' }}>EMERGENCY</div>
                        </div>
                    </div>
                    <div className="loss-description">Implants outside uterus. Life-threatening if tube ruptures.</div>
                    <div className="loss-action" style={{ background: '#ffebee', color: '#c62828' }}><i className="fas fa-hospital"></i> <span>Requires immediate medical care.</span></div>
                </div>
            </div>

            <div style={{ textAlign: 'center', padding: '4rem 1rem', borderTop: '1px solid #eee', marginTop: '4rem' }}>
                <p style={{ fontSize: '.85rem', color: '#888' }}>
                    © 2026 Nari Swastya · Clinical Validation: Dr. Rio's Gynecology Unit<br />
                    All simulations are for educational purposes based on population averages.
                </p>
            </div>
        </>
    );
};
