import React, { useEffect, useRef } from 'react';
import { EVIDENCE_CARDS, NUTRIENTS } from '../conception-data';

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
            <div className="section-header centered">
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
            <div className="section-header centered">
                <div className="section-label-pill teal"><i className="fa-solid fa-person-running"></i> Movement & Wellness</div>
                <h2 className="section-heading-j">🏃‍♀️ Fertility-Friendly <span className="em">Exercises</span></h2>
                <p className="section-subtitle">Activities that boost circulation and support hormonal balance</p>
            </div>

            <div className="exercise-grid reveal">
                {[
                    { icon: '🧘‍♀️', title: 'Yoga', dur: '20-30 min daily', ben: 'Reduces stress hormones by 20-30%. Specific poses (legs-up-wall, reclining goddess) improve pelvic blood flow. Regulates menstrual cycles.', col: 'linear-gradient(135deg, #81c784 0%, #4caf50 100%)' },
                    { icon: '🚶‍♀️', title: 'Brisk Walking', dur: '30-45 min daily', ben: "Gentle cardio that doesn't stress body. Improves insulin sensitivity (good for PCOS). Maintains healthy BMI without disrupting hormones.", col: 'linear-gradient(135deg, #64b5f6 0%, #2196f3 100%)' },
                    { icon: '🏊‍♀️', title: 'Swimming', dur: '3-4 times/week', ben: 'Low-impact full-body workout. Reduces inflammation, improves circulation. Excellent for women with joint pain or overweight.', col: 'linear-gradient(135deg, #4dd0e1 0%, #00bcd4 100%)' },
                    { icon: '💪', title: 'Light Strength Training', dur: '2-3 times/week', ben: 'Builds lean muscle, improves insulin resistance. Use lighter weights, higher reps. Avoid excessive core exercises once pregnant.', col: 'linear-gradient(135deg, #ba68c8 0%, #9c27b0 100%)' },
                    { icon: '🌬️', title: 'Breathing Exercises', dur: '10 min, 2x daily', ben: 'Activates parasympathetic nervous system. Lowers cortisol fast. Box breathing: 4 counts in, hold 4, out 4, hold 4. Repeat 10 cycles.', col: 'linear-gradient(135deg, #ffb74d 0%, #ff9800 100%)' },
                    { icon: '🚫', title: 'AVOID: High Intensity', dur: 'Too strenuous', ben: 'CrossFit, marathon training, spin classes >5x/week can stop ovulation. If your period becomes irregular, reduce intensity immediately.', col: 'linear-gradient(135deg, #e57373 0%, #f44336 100%)' }
                ].map((ex, i) => (
                    <div key={i} className="exercise-card">
                        <div className="exercise-visual" style={{ background: ex.col }}>
                            <div className="exercise-icon">{ex.icon}</div>
                        </div>
                        <div className="exercise-content">
                            <div className="exercise-title">{ex.title}</div>
                            <div className="exercise-duration">
                                <i className="fas fa-clock"></i>
                                <span>{ex.dur}</span>
                            </div>
                            <div className="exercise-benefit">{ex.ben}</div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Pregnancy Loss Education */}
            <div className="section-header centered">
                <div className="section-label-pill red"><i className="fa-solid fa-circle-exclamation"></i> Awareness & Support</div>
                <h2 className="section-heading-j">💔 Understanding <span className="em">Pregnancy Loss</span> Types</h2>
                <p className="section-subtitle">Education for awareness - know the signs and when to seek immediate help</p>
            </div>

            <div className="loss-types reveal">
                <div className="loss-card" style={{ '--loss-color': '#f44336' } as any}>
                    <div className="loss-header">
                        <div className="loss-icon">🩸</div>
                        <div>
                            <div className="loss-name">Early Miscarriage</div>
                            <div style={{ fontSize: '0.85rem', color: '#666' }}>Before 12 weeks (10-20% of pregnancies)</div>
                        </div>
                    </div>
                    <div className="loss-description">
                        Most common loss type. Usually caused by chromosomal abnormalities (not your fault!). Body's natural selection process.
                    </div>
                    <div className="loss-signs">
                        <div className="loss-signs-title"><i className="fas fa-exclamation-circle"></i> Warning Signs:</div>
                        <ul className="loss-signs-list">
                            <li>Heavy bleeding with clots</li>
                            <li>Severe cramping worse than period</li>
                            <li>Loss of pregnancy symptoms suddenly</li>
                            <li>Tissue passing from vagina</li>
                        </ul>
                    </div>
                    <div className="loss-action">
                        <i className="fas fa-phone"></i>
                        <span>Call doctor immediately if bleeding heavily or severe pain</span>
                    </div>
                </div>

                <div className="loss-card" style={{ '--loss-color': '#ff9800' } as any}>
                    <div className="loss-header">
                        <div className="loss-icon">🫥</div>
                        <div>
                            <div className="loss-name">Chemical Pregnancy</div>
                            <div style={{ fontSize: '0.85rem', color: '#666' }}>Very early loss (50-75% of all miscarriages)</div>
                        </div>
                    </div>
                    <div className="loss-description">
                        Pregnancy ends shortly after implantation, before 5 weeks. Positive test, then period arrives. Often mistaken for late period.
                    </div>
                    <div className="loss-signs">
                        <div className="loss-signs-title"><i className="fas fa-exclamation-circle"></i> Signs:</div>
                        <ul className="loss-signs-list">
                            <li>Faint positive pregnancy test</li>
                            <li>Period arrives 1 week late</li>
                            <li>Heavier than usual period</li>
                            <li>HCG levels drop before rising</li>
                        </ul>
                    </div>
                    <div className="loss-action">
                        <i className="fas fa-heart"></i>
                        <span>Usually no treatment needed. Body completes naturally. Try again next cycle.</span>
                    </div>
                </div>

                <div className="loss-card" style={{ '--loss-color': '#9c27b0' } as any}>
                    <div className="loss-header">
                        <div className="loss-icon">⚠️</div>
                        <div>
                            <div className="loss-name">Molar Pregnancy</div>
                            <div style={{ fontSize: '0.85rem', color: '#666' }}>Rare: 1 in 1,000 pregnancies</div>
                        </div>
                    </div>
                    <div className="loss-description">
                        Abnormal tissue grows instead of baby. Caused by genetic error at conception. Two types: complete (no fetus) or partial (abnormal fetus).
                    </div>
                    <div className="loss-signs">
                        <div className="loss-signs-title"><i className="fas fa-exclamation-circle"></i> Warning Signs:</div>
                        <ul className="loss-signs-list">
                            <li>Very high HCG levels</li>
                            <li>Severe nausea/vomiting</li>
                            <li>Grape-like tissue passing</li>
                            <li>Uterus larger than expected</li>
                            <li>No fetal heartbeat on ultrasound</li>
                        </ul>
                    </div>
                    <div className="loss-action" style={{ background: '#fce4ec', border: '1px solid #f8bbd0', color: '#ad1457' }}>
                        <i className="fas fa-hospital-user"></i>
                        <span>URGENT: Requires D&C surgery + HCG monitoring for months. Can become cancerous.</span>
                    </div>
                </div>

                <div className="loss-card" style={{ '--loss-color': '#00bcd4' } as any}>
                    <div className="loss-header">
                        <div className="loss-icon">🏥</div>
                        <div>
                            <div className="loss-name">Ectopic Pregnancy</div>
                            <div style={{ fontSize: '0.85rem', color: '#666' }}>EMERGENCY: 1-2% of pregnancies</div>
                        </div>
                    </div>
                    <div className="loss-description">
                        Embryo implants outside uterus (usually fallopian tube). NOT viable - cannot become baby. Life-threatening if tube ruptures.
                    </div>
                    <div className="loss-signs">
                        <div className="loss-signs-title"><i className="fas fa-exclamation-circle"></i> EMERGENCY Signs:</div>
                        <ul className="loss-signs-list">
                            <li>Sharp, stabbing pelvic pain (one side)</li>
                            <li>Shoulder pain (internal bleeding)</li>
                            <li>Dizziness, fainting</li>
                            <li>Rectal pressure</li>
                            <li>Light bleeding + severe pain</li>
                        </ul>
                    </div>
                    <div className="loss-action" style={{ background: '#fdf2f2', border: '1px solid #ffcdd2', color: '#c62828' }}>
                        <i className="fas fa-truck-medical"></i>
                        <span>CALL 911 or GO TO ER! Needs immediate surgery or methotrexate injection.</span>
                    </div>
                </div>

                <div className="loss-card" style={{ '--loss-color': '#e91e63' } as any}>
                    <div className="loss-header">
                        <div className="loss-icon">💔</div>
                        <div>
                            <div className="loss-name">Missed Miscarriage</div>
                            <div style={{ fontSize: '0.85rem', color: '#666' }}>Silent loss (1-5% of pregnancies)</div>
                        </div>
                    </div>
                    <div className="loss-description">
                        Fetus stops developing but body doesn't recognize loss. No bleeding or cramping. Often discovered at routine ultrasound.
                    </div>
                    <div className="loss-signs">
                        <div className="loss-signs-title"><i className="fas fa-exclamation-circle"></i> Signs:</div>
                        <ul className="loss-signs-list">
                            <li>No fetal heartbeat on ultrasound</li>
                            <li>Pregnancy symptoms disappear</li>
                            <li>HCG levels plateau or drop</li>
                            <li>Uterus stops growing</li>
                        </ul>
                    </div>
                    <div className="loss-action">
                        <i className="fas fa-stethoscope"></i>
                        <span>Discuss Options: Natural, medication, or D&C procedure with your doctor.</span>
                    </div>
                </div>

                <div className="loss-card" style={{ '--loss-color': '#4caf50' } as any}>
                    <div className="loss-header">
                        <div className="loss-icon">🌱</div>
                        <div>
                            <div className="loss-name">Recurrent Loss</div>
                            <div style={{ fontSize: '0.85rem', color: '#666' }}>3+ consecutive miscarriages (1% of couples)</div>
                        </div>
                    </div>
                    <div className="loss-description">
                        Multiple losses indicate underlying issues (chromosomal, uterine, or blood clotting).
                    </div>
                    <div className="loss-signs">
                        <div className="loss-signs-title"><i className="fas fa-magnifying-glass"></i> Tests Needed:</div>
                        <ul className="loss-signs-list">
                            <li>Genetic karyotyping (both partners)</li>
                            <li>Thyroid & progesterone levels</li>
                            <li>Blood clotting disorders panel</li>
                            <li>Uterine imaging (HSG, sonogram)</li>
                        </ul>
                    </div>
                    <div className="loss-action">
                        <i className="fas fa-user-doctor"></i>
                        <span>See a fertility specialist after 2nd loss (over 35) or 3rd (under 35).</span>
                    </div>
                </div>
            </div>

            <div className="pl-btn-wrap reveal">
                <a href="#" className="pl-3d-btn">
                    <span className="pl-btn-icon">💔</span>
                    <span className="pl-btn-text">
                        <span className="pl-btn-label">Deep Dive: Pregnancy Loss Guide</span>
                        <span className="pl-btn-sub">Evidence-based · Support resources · Recovery</span>
                    </span>
                    <span className="pl-btn-arrow">→</span>
                </a>
            </div>

            <div className="doctor-section reveal">
                <div className="section-header centered">
                    <div className="section-label-pill purple">
                        <i className="fa-solid fa-stethoscope"></i> CLINICAL GUIDANCE
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1.2rem', marginBottom: '0.8rem' }}>
                        <i className="fa-solid fa-notes-medical" style={{ fontSize: '3rem', color: '#ad1457', filter: 'drop-shadow(0 4px 8px rgba(173, 20, 87, 0.2))' }}></i>
                        <h2 className="section-heading-j" style={{ margin: 0 }}>When to <span className="em">See a Doctor</span></h2>
                    </div>
                    <p className="section-subtitle">
                        Don't wait too long - early intervention improves success rates significantly
                    </p>
                </div>

                <div className="trigger-grid">
                    <div className="trigger-card" style={{ '--trigger-color': '#ff4d4d' } as any}>
                        <div className="trigger-icon"><i className="fa-solid fa-clock"></i></div>
                        <div className="trigger-text">
                            <strong>After 12 months</strong> of trying (under age 35) without conception
                        </div>
                    </div>

                    <div className="trigger-card" style={{ '--trigger-color': '#ff9800' } as any}>
                        <div className="trigger-icon"><i className="fa-solid fa-cake-candles"></i></div>
                        <div className="trigger-text">
                            <strong>After 6 months</strong> of trying if you're 35-40 years old
                        </div>
                    </div>

                    <div className="trigger-card" style={{ '--trigger-color': '#9c27b0' } as any}>
                        <div className="trigger-icon"><i className="fa-solid fa-calendar-check"></i></div>
                        <div className="trigger-text">
                            <strong>Immediately</strong> if you're over 40 and want to conceive
                        </div>
                    </div>

                    <div className="trigger-card" style={{ '--trigger-color': '#e91e63' } as any}>
                        <div className="trigger-icon"><i className="fa-solid fa-droplet"></i></div>
                        <div className="trigger-text">
                            <strong>Irregular periods</strong> or cycles shorter than 21 days or longer than 35 days
                        </div>
                    </div>

                    <div className="trigger-card" style={{ '--trigger-color': '#2196f3' } as any}>
                        <div className="trigger-icon"><i className="fa-solid fa-ban"></i></div>
                        <div className="trigger-text">
                            <strong>Absent periods</strong> for 3+ months (not pregnant) - could be PCOS or hormonal
                        </div>
                    </div>

                    <div className="trigger-card" style={{ '--trigger-color': '#4caf50' } as any}>
                        <div className="trigger-icon"><i className="fa-solid fa-heart-crack"></i></div>
                        <div className="trigger-text">
                            <strong>2+ miscarriages</strong> - testing can identify treatable causes
                        </div>
                    </div>

                    <div className="trigger-card" style={{ '--trigger-color': '#00bcd4' } as any}>
                        <div className="trigger-icon"><i className="fa-solid fa-triangle-exclamation"></i></div>
                        <div className="trigger-text">
                            <strong>Painful periods</strong> with heavy bleeding - could be endometriosis
                        </div>
                    </div>

                    <div className="trigger-card" style={{ '--trigger-color': '#ff5722' } as any}>
                        <div className="trigger-icon"><i className="fa-solid fa-stethoscope"></i></div>
                        <div className="trigger-text">
                            <strong>Known conditions</strong> like PCOS, endometriosis, thyroid disease, diabetes
                        </div>
                    </div>

                    <div className="trigger-card" style={{ '--trigger-color': '#607d8b' } as any}>
                        <div className="trigger-icon"><i className="fa-solid fa-dna"></i></div>
                        <div className="trigger-text">
                            <strong>Partner issues</strong> - low sperm count, erectile dysfunction, past vasectomy
                        </div>
                    </div>

                    <div className="trigger-card" style={{ '--trigger-color': '#795548' } as any}>
                        <div className="trigger-icon"><i className="fa-solid fa-hospital-user"></i></div>
                        <div className="trigger-text">
                            <strong>Past pelvic infections</strong>, STIs, or pelvic inflammatory disease
                        </div>
                    </div>

                    <div className="trigger-card" style={{ '--trigger-color': '#3f51b5' } as any}>
                        <div className="trigger-icon"><i className="fa-solid fa-pills"></i></div>
                        <div className="trigger-text">
                            <strong>Cancer treatment history</strong> - chemo/radiation may affect fertility
                        </div>
                    </div>

                    <div className="trigger-card" style={{ '--trigger-color': '#009688' } as any}>
                        <div className="trigger-icon"><i className="fa-solid fa-staff-snake"></i></div>
                        <div className="trigger-text">
                            <strong>Pre-conception checkup</strong> - recommended 3 months before trying
                        </div>
                    </div>
                </div>

                <div className="doctor-visit-box">
                    <div className="doctor-visit-inner">
                        <div className="doctor-visit-bulb">💡</div>
                        <div>
                            <div style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--sim-ink)' }}>
                                What to Expect at Fertility Doctor Visit
                            </div>
                            <div style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.7 }}>
                                <strong>Blood tests:</strong> Hormone levels (FSH, LH, AMH, thyroid, prolactin)<br />
                                <strong>Ultrasound:</strong> Check ovaries, uterus, antral follicle count<br />
                                <strong>Semen analysis:</strong> Partner's sperm count, motility, morphology<br />
                                <strong>HSG test:</strong> X-ray to check if fallopian tubes are open<br />
                                <strong>Treatment options:</strong> May include fertility meds, IUI, or IVF depending on diagnosis
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};
