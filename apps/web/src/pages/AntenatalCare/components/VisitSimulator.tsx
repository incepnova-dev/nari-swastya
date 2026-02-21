import React, { useState } from 'react';

interface VisitSimulatorProps {
    // Add props if needed, e.g., to share state
}

export const VisitSimulator: React.FC<VisitSimulatorProps> = () => {
    const [systolic, setSystolic] = useState(120);
    const [diastolic, setDiastolic] = useState(80);
    const [urineResult, setUrineResult] = useState('negative');
    const [weightGain, setWeightGain] = useState(0);

    const interpretBP = (s: number, d: number) => {
        if (s >= 160 || d >= 110) return { label: 'Emergency', class: 'emergency', advice: 'Immediate medical attention required! Seek emergency care.' };
        if (s >= 140 || d >= 90) return { label: 'Urgent', class: 'urgent', advice: 'Contact your healthcare provider immediately. This may be a sign of preeclampsia.' };
        if (s >= 130 || d >= 80) return { label: 'Monitor', class: 'monitor', advice: 'Elevated blood pressure. Rest and re-check in 4 hours. Inform your provider.' };
        return { label: 'Normal', class: 'normal', advice: 'Your blood pressure is within the healthy range for pregnancy.' };
    };

    const bpStatus = interpretBP(systolic, diastolic);

    return (
        <section id="visit-simulator" className="visit-sim">
            <div className="section-header">
                <h2 className="section-title-prominent">Visit <span className="title-highlight">Simulator</span></h2>
                <p className="section-subtitle-prominent">Understand what your numbers mean during a routine check-up.</p>
            </div>

            <div className="visit-sim-grid">
                <div className="visit-metrics">
                    <div className={`metric-card bp-card ${bpStatus.class}`}>
                        <h3>Blood Pressure</h3>
                        <div className="metric-display">
                            <span className="metric-value">{systolic}/{diastolic}</span>
                            <span className="metric-unit">mmHg</span>
                        </div>
                        <div className={`status-badge ${bpStatus.class}`}>{bpStatus.label}</div>
                        <div className="metric-controls">
                            <label>Systolic (Top)
                                <input type="range" min="90" max="200" value={systolic} onChange={(e) => setSystolic(parseInt(e.target.value))} />
                            </label>
                            <label>Diastolic (Bottom)
                                <input type="range" min="60" max="130" value={diastolic} onChange={(e) => setDiastolic(parseInt(e.target.value))} />
                            </label>
                        </div>
                        <p className="interpretation-text">{bpStatus.advice}</p>
                    </div>

                    <div className="metric-card">
                        <h3>Urine Protein</h3>
                        <div className="metric-display">
                            <span className="metric-value">{urineResult === 'negative' ? 'Negative' : urineResult === 'trace' ? 'Trace' : 'High'}</span>
                        </div>
                        <div className="metric-controls">
                            <select value={urineResult} onChange={(e) => setUrineResult(e.target.value)}>
                                <option value="negative">Negative</option>
                                <option value="trace">Trace (Notify Provider)</option>
                                <option value="high">High (Urgent Care)</option>
                            </select>
                        </div>
                    </div>

                    <div className="metric-card">
                        <h3>Weight Trend</h3>
                        <div className="metric-display">
                            <span className="metric-value">{weightGain >= 0 ? '+' : ''}{weightGain}</span>
                            <span className="metric-unit">kg this week</span>
                        </div>
                        <div className="metric-controls">
                            <input type="range" min="-2" max="5" step="0.5" value={weightGain} onChange={(e) => setWeightGain(parseFloat(e.target.value))} />
                        </div>
                    </div>
                </div>

                <div className="visit-checklist">
                    <h3>Checklist for your visit</h3>
                    <ul className="checklist">
                        <li className="check-item"><label><input type="checkbox" /> Bring your health record book</label></li>
                        <li className="check-item"><label><input type="checkbox" /> Note down any kicks or movements</label></li>
                        <li className="check-item"><label><input type="checkbox" /> Prepare questions for your doctor</label></li>
                        <li className="check-item"><label><input type="checkbox" /> Wear loose, comfortable clothing</label></li>
                    </ul>
                </div>
            </div>
        </section>
    );
};
