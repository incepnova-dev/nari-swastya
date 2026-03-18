import React from 'react';
import '../../../styles/journey/fertility/cycle-timeline.css';
import '../../../styles/journey/fertility/fertility-header.css';

const TIMELINE_PHASES = [
    {
        title: 'Menstrual Phase (Days 1-5)',
        description: 'Menstruation commences as oestrogen and progesterone fall to their monthly minimum. The endometrium [uterine lining] is shed — this is designated [cycle] Day 1, the conventional starting point of the menstrual cycle.',
        icon: '🩸',
        colorClass: 'si-tl-red',
        markerClass: 'si-tl-red-both'
    },
    {
        title: 'Follicular Phase (Days 1-13)',
        description: 'Several ovarian follicles begin their maturation process, with one typically becoming dominant. Rising oestrogen [estrogen] simultaneously stimulates the endometrium [uterine lining] to rebuild and thicken, readying it for possible implantation.',
        icon: '🌱',
        colorClass: 'si-tl-amber',
        markerClass: 'si-tl-amber-both'
    },
    {
        title: 'Ovulation (Day 14)',
        description: (
            <>
                <strong>🎯 Fertile Window!</strong> The dominant follicle ruptures, releasing a mature oocyte [egg] from the ovary. Fertility is at its highest — research consistently shows the greatest conception probability in the 2–3 days leading up to ovulation and on ovulation day itself.
            </>
        ),
        icon: '🌟',
        colorClass: 'si-tl-green',
        markerClass: 'si-tl-green-both'
    },
    {
        title: 'Luteal Phase (Days 15-28)',
        description: 'The corpus luteum [formed from the ruptured follicle] secretes progesterone, transforming the uterine environment to support a potential embryo. If fertilisation does not occur, the corpus luteum degenerates, progesterone and oestrogen fall, and menstruation — [and a new cycle] — is triggered.',
        icon: '🌙',
        colorClass: 'si-tl-blue',
        markerClass: 'si-tl-blue-both'
    }
];

export const CycleTimeline: React.FC = () => {
    return (
        <section className="timeline-section fade-in-up" id="cycle-phases" aria-label="Menstrual Cycle Phases and Fertile Window">
            <div className="section-header">
                <h2 className="section-title"><span className="title-black">Understanding Your</span> Menstrual Cycle</h2>
                <p className="section-subtitle">Knowledge is power when planning for conception</p>
            </div>
            
            <div className="timeline-container">
                <div className="timeline-line"></div>
                
                {TIMELINE_PHASES.map((phase, index) => (
                    <div key={index} className="timeline-item">
                        {/* On even indices, content comes first (left), on odd, it comes after visual (right) */}
                        {index % 2 === 0 ? (
                            <>
                                <div className={`timeline-content ${phase.colorClass}`}>
                                    <h3>{phase.title}</h3>
                                    <p>{phase.description}</p>
                                </div>
                                <div className="timeline-visual">
                                    <div className={`timeline-marker ${phase.markerClass}`}>{phase.icon}</div>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="timeline-visual">
                                    <div className={`timeline-marker ${phase.markerClass}`}>{phase.icon}</div>
                                </div>
                                <div className={`timeline-content ${phase.colorClass}`}>
                                    <h3>{phase.title}</h3>
                                    <p>{phase.description}</p>
                                </div>
                            </>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};
