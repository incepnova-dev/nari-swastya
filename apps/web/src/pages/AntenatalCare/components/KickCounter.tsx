import React, { useEffect, useState } from 'react';
import { useAntenatalState } from '../hooks/useAntenatalState';

export const KickCounter: React.FC = () => {
    const { state, addKick, finishKickSession, updateState } = useAntenatalState();
    const [elapsedTime, setElapsedTime] = useState(0);

    useEffect(() => {
        let timer: number;
        if (state.kickStartTime) {
            timer = window.setInterval(() => {
                setElapsedTime(Date.now() - (state.kickStartTime as number));
            }, 1000);
        }
        return () => clearInterval(timer);
    }, [state.kickStartTime]);

    const formatTime = (ms: number) => {
        const totalSeconds = Math.floor(ms / 1000);
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };

    const handleRecordKick = () => {
        if (state.week < 28) {
            alert("Kick counting practice typically starts around 28 weeks. Move the body-map week slider to 28+ to practice.");
            return;
        }
        addKick();
        if (state.currentKickCount + 1 >= 10) {
            alert(`Goal met! 10 movements in ${formatTime(elapsedTime)}.`);
            finishKickSession();
        }
    };

    return (
        <section id="kick-counter" className="kick-counter-section">
            <div className="section-header">
                <div className="header-badge-prominent">
                    <span className="badge-pulse"></span>
                    <span className="badge-text">Fetal Movement Monitor</span>
                </div>
                <h2 className="section-title-prominent">Movement <span className="title-highlight">Tracker</span></h2>
                <p className="section-subtitle-prominent">
                    A simple way to monitor your baby's wellbeing. Start counting from week 28.
                </p>
            </div>

            <div className="kick-grid">
                <div className="kick-main-card">
                    <div className="kick-display">
                        <div className="kick-circle">
                            <span className="kick-val">{state.currentKickCount}</span>
                            <span className="kick-lbl">Kicks</span>
                        </div>
                        <div className="kick-timer">
                            <span className="timer-icon">⏱️</span>
                            <span className="timer-val">{state.kickStartTime ? formatTime(elapsedTime) : "00:00"}</span>
                        </div>
                    </div>

                    <div className="kick-actions">
                        <button className="btn-kick-primary" onClick={handleRecordKick}>
                            <span className="btn-icon">👣</span>
                            <span className="btn-text">Record Movement</span>
                        </button>
                        <button
                            className="btn-kick-secondary"
                            disabled={!state.kickStartTime}
                            onClick={() => {
                                if (confirm("Are you sure you want to reset this session?")) {
                                    updateState({ currentKickCount: 0, kickStartTime: null });
                                }
                            }}
                        >
                            Reset Session
                        </button>
                    </div>

                    <div className="kick-guide">
                        <p><strong>Practice Goal:</strong> Tap for every movement. Common practice is to look for 10 movements within 2 hours.</p>
                        <p className="muted">This is an educational simulator only. Always follow your medical provider's specific instructions for kick counting.</p>
                    </div>
                </div>

                <div className="kick-history-card">
                    <h3>Recent Sessions</h3>
                    <div className="history-list">
                        {state.kicks.length > 0 ? (
                            state.kicks.map((session, idx) => (
                                <div key={idx} className="history-item">
                                    <div className="hi-info">
                                        <span className="hi-date">{new Date(session.timestamp).toLocaleDateString()}</span>
                                        <span className="hi-stats">{session.count} kicks • {session.duration}m</span>
                                    </div>
                                    <div className={`hi-status ${session.duration <= 120 ? 'met' : 'late'}`}>
                                        {session.duration <= 120 ? '✓ Goal Met' : 'Logged'}
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="empty-history">
                                <p>No sessions recorded yet.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};
