import React from 'react';
import '../../../../../styles/journey/main/sections/body-mind.css';
import { DnaCanvas } from './DnaCanvas';
import { ConstellationCanvas } from './ConstellationCanvas';

interface HealthCardProps {
    to: string;
    icon: string;
    title: string;
    description: string;
    hcColor: string;
    hcLight: string;
    delay: string;
    iconBg: string;
    iconColor: string;
}

const HealthCard: React.FC<HealthCardProps> = ({
    to,
    icon,
    title,
    description,
    hcColor,
    hcLight,
    delay,
    iconBg,
    iconColor,
}) => (
    <a
        href={to}
        className="s4-hcard reveal"
        style={
            {
                '--hc-color': hcColor,
                '--hc-light': hcLight,
                transitionDelay: delay,
            } as React.CSSProperties
        }
    >
        <div
            className="s4-hcard-icon"
            style={{
                background: iconBg,
                color: iconColor,
            }}
        >
            <i className={`fa-solid ${icon}`} />
        </div>
        <div className="s4-hcard-body">
            <h4>{title}</h4>
            <p>{description}</p>
        </div>
        <div className="s4-hcard-arrow">
            <i className="fa-solid fa-arrow-right" />
        </div>
    </a>
);

export const Section4: React.FC = () => {
    const healthCards: HealthCardProps[] = [
        {
            to: '/menopause.html',
            icon: 'fa-fire-flame-curved',
            title: 'Menopause & Perimenopause',
            description: 'Hot flashes, hormonal shifts, HRT — navigating this powerful transition with science and grace.',
            hcColor: '#ec407a',
            hcLight: '#fce4ec',
            iconBg: 'linear-gradient(135deg, #fce4ec, #f8bbd9)',
            iconColor: '#c2185b',
            delay: '.06s',
        },
        {
            to: '/bone-health-women.html',
            icon: 'fa-bone',
            title: 'Bone Health',
            description: 'Calcium, Vitamin D, DEXA scans — protecting your skeleton against osteoporosis for life.',
            hcColor: '#9c27b0',
            hcLight: '#f3e5f5',
            iconBg: 'linear-gradient(135deg, #f3e5f5, #e1bee7)',
            iconColor: '#6a1b9a',
            delay: '.13s',
        },
        {
            to: '/autoimmune_health_journey.html',
            icon: 'fa-shield-virus',
            title: 'Autoimmune Health',
            description: "Lupus, Hashimoto's, RA — women are disproportionately affected. Know your immune story.",
            hcColor: '#00838f',
            hcLight: '#e0f7fa',
            iconBg: 'linear-gradient(135deg, #e0f7fa, #b2ebf2)',
            iconColor: '#00838f',
            delay: '.20s',
        },
        {
            to: '/depression.html',
            icon: 'fa-head-side-brain',
            title: 'Mental Wellness',
            description: 'Anxiety, depression, burnout — mental health is physical health. Find your calm and strength.',
            hcColor: '#f57c00',
            hcLight: '#fff8e1',
            iconBg: 'linear-gradient(135deg, #fff8e1, #ffecb3)',
            iconColor: '#e65100',
            delay: '.27s',
        },
        {
            to: '/screening.html',
            icon: 'fa-magnifying-glass-plus',
            title: 'Cancer Screening',
            description: 'Mammography, Pap smear, HPV testing — early detection saves lives, period.',
            hcColor: '#c62828',
            hcLight: '#ffebee',
            iconBg: 'linear-gradient(135deg, #ffebee, #ffcdd2)',
            iconColor: '#b71c1c',
            delay: '.34s',
        },
    ];

    return (
        <div className="s4-wrapper journey-s4-section" id="s4">
            <ConstellationCanvas />
            <div className="s4-blobs" aria-hidden="true">
                <div className="s4-blob s4-blob-1" />
                <div className="s4-blob s4-blob-2" />
                <div className="s4-blob s4-blob-3" />
            </div>

            <div className="section-inner">
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <div className="section-label reveal" style={{ display: 'inline-flex' }}>
                        <i className="fa-solid fa-heart-pulse" /> Chapter Four
                    </div>
                    <h2 className="section-heading reveal reveal-delay-1" style={{ textAlign: 'center' }}>
                        Body & Mind <span className="em">Health</span>
                    </h2>
                    <p className="section-sub reveal reveal-delay-2" style={{ margin: '0 auto', textAlign: 'center' }}>
                        Hormones, bones, immunity, and mental resilience — understanding your body's whole story across every decade.
                    </p>
                </div>

                <div className="s4-body-layout">
                    {/* DNA visual left */}
                    <div className="s4-visual-col reveal">
                        <div className="dna-scene">
                            <DnaCanvas />
                            <div className="dna-labels">
                                <div className="dna-tag dna-tag-1">
                                    <i className="fa-solid fa-fire-flame-curved" /> Hormones
                                </div>
                                <div className="dna-tag dna-tag-2">
                                    <i className="fa-solid fa-bone" /> Bone Density
                                </div>
                                <div className="dna-tag dna-tag-3">
                                    <i className="fa-solid fa-shield-virus" /> Immunity
                                </div>
                                <div className="dna-tag dna-tag-4">
                                    <i className="fa-solid fa-brain" /> Mental Health
                                </div>
                                <div className="dna-tag dna-tag-5">
                                    <i className="fa-solid fa-magnifying-glass-plus" /> Screening
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Cards right */}
                    <div className="s4-cards-col">
                        {healthCards.map((card, index) => (
                            <HealthCard key={index} {...card} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
