import React, { useEffect, useState } from 'react';
import SiteHeader from '../../components/SiteHeader';
import Footer from '../../components/Footer';
import { Hero } from './components/Hero';
import { JourneyTimeline } from './components/JourneyTimeline';
import { VisitSimulator } from './components/VisitSimulator';
import { BodyMap } from './components/BodyMap';
import { AntibodyVisualization } from './components/AntibodyVisualization';
import { BirthPlanV2 } from './components/BirthPlanV2';
import { KickCounter } from './components/KickCounter';
import { PostpartumChecklist } from './components/PostpartumChecklist';
import { Nutrition } from './components/Nutrition';
import { HealthCheckers } from './components/HealthCheckers';
import { Modal } from './components/Modal';
import { useAntenatalState } from './hooks/useAntenatalState';
import './AntenatalCare.css';

export const AntenatalCare: React.FC = () => {
    const { state, updateWeek } = useAntenatalState();
    const [modal, setModal] = useState<{ isOpen: boolean; title: string; content: React.ReactNode }>({
        isOpen: false,
        title: '',
        content: null
    });

    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = "Antenatal Care | Nari Swasthya";

        // Expose a global modal function for sub-components that might need it (like in the legacy logic)
        (window as any).ANC_MODAL = (title: string, content: React.ReactNode) => {
            setModal({ isOpen: true, title, content });
        };
    }, []);

    const closeModal = () => setModal(prev => ({ ...prev, isOpen: false }));

    return (
        <div className="anc-root">
            <SiteHeader />

            <main className="anc-main page-shell">
                <Hero week={state.week} onWeekChange={updateWeek} />

                <JourneyTimeline currentWeek={state.week} />

                <VisitSimulator />

                <BodyMap />

                <HealthCheckers />

                <AntibodyVisualization />

                <Nutrition />

                <KickCounter />

                <BirthPlanV2 />

                <PostpartumChecklist />

                {/* Community Section */}
                <section className="community-section">
                    <div className="section-header">
                        <div className="header-badge-prominent">
                            <span className="badge-pulse"></span>
                            <span className="badge-text">Support Network</span>
                        </div>
                        <h2 className="section-title-prominent">You're <span className="title-highlight">Not Alone</span></h2>
                        <p className="section-subtitle-prominent">Connect with others, share stories, and find local support groups near you.</p>
                    </div>

                    <div className="community-grid">
                        <div className="comm-card success-stories" onClick={() => (window as any).ANC_MODAL('Success Stories',
                            <div className="stories-modal-content">
                                <p>Read inspiring journeys of mothers who've transitioned through antenatal care successfully.</p>
                                <div className="story-item">
                                    <h4>Priya, 32</h4>
                                    <p>"The journey timeline helped me stay on track with my tests. Now I have a healthy baby boy!"</p>
                                </div>
                                <div className="story-item">
                                    <h4>Anjali, 28</h4>
                                    <p>"I was worried about my BP, but the Visit Simulator explained the numbers and kept me calm."</p>
                                </div>
                            </div>
                        )}>
                            <div className="comm-icon">🌟</div>
                            <h3>Success Stories</h3>
                            <p>Read inspiring journeys of mothers who've transitioned through antenatal care successfully.</p>
                            <span className="comm-link">View Stories →</span>
                        </div>
                        <div className="comm-card local-groups" onClick={() => (window as any).ANC_MODAL('Local Support',
                            <div className="groups-modal-content">
                                <p>Find support groups, prenatal yoga, and clinical partners in your area.</p>
                                <div className="group-search">
                                    <input type="text" placeholder="Enter your city..." className="anc-input" />
                                    <button className="anc-btn primary">Search</button>
                                </div>
                                <div className="sim-results">
                                    <div className="result-item">📍 New Delhi - Mothers Support Circle</div>
                                    <div className="result-item">📍 Mumbai - Prenatal Yoga Hub</div>
                                </div>
                            </div>
                        )}>
                            <div className="comm-icon">📍</div>
                            <h3>Local Groups</h3>
                            <p>Find support groups, prenatal yoga, and clinical partners in your area.</p>
                            <span className="comm-link">Find Nearby →</span>
                        </div>
                    </div>
                </section>
            </main>

            <Modal
                isOpen={modal.isOpen}
                title={modal.title}
                content={modal.content}
                onClose={closeModal}
            />

            <Footer />
        </div>
    );
};
