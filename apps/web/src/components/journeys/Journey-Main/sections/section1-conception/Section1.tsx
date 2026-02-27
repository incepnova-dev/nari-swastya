import React from 'react';
import { OrbitCanvas } from './OrbitCanvas';
import '../../../../../styles/journey/conception-fertility.css';

interface FertilityCardProps {
    to: string;
    icon: string;
    iconColor: 'pink' | 'purple' | 'teal' | 'gold';
    title: string;
    description: string;
    tag: string;
    delay: string;
}

const FertilityCard: React.FC<FertilityCardProps> = ({
    to,
    icon,
    iconColor,
    title,
    description,
    tag,
    delay,
}) => (
    <a
        href={to}
        className="fert-card reveal"
        style={{ transitionDelay: delay }}
    >
        <div className={`fert-icon ${iconColor}`}>
            <i className={icon} />
        </div>
        <div>
            <h4>{title}</h4>
            <p>{description}</p>
            <span className="tag">{tag}</span>
        </div>
    </a>
);

export const Section1: React.FC = () => {
    const cards: FertilityCardProps[] = [
        {
            to: '/menstrual-hygiene',
            icon: 'fa-solid fa-droplet',
            iconColor: 'pink',
            title: 'Menstrual Cycle Tracking',
            description: 'Map your cycle phases, understand hormonal shifts, and predict your fertile days with precision.',
            tag: 'Cycle Tracking',
            delay: '.1s',
        },
        {
            to: '/fertility',
            icon: 'fa-solid fa-microscope',
            iconColor: 'purple',
            title: 'Fertility Assessment',
            description: 'AMH levels, ovarian reserve, hormonal profiles — understand your fertility landscape clearly.',
            tag: 'Diagnostics',
            delay: '.2s',
        },
        {
            to: '/conceiving',
            icon: 'fa-solid fa-dna',
            iconColor: 'teal',
            title: 'Conception Planning',
            description: 'Preconception nutrition, timing strategies, and lifestyle optimizations to boost your chances.',
            tag: 'Planning',
            delay: '.3s',
        },
        {
            to: '/depression',
            icon: 'fa-solid fa-brain',
            iconColor: 'gold',
            title: 'Emotional Support',
            description: 'Fertility journeys are emotional. Connect with counselors and community through every step.',
            tag: 'Mental Health',
            delay: '.4s',
        },
    ];

    return (
        <section className="journey-s1-section" id="s1">
            <div className="section-inner">
                <div className="s1-grid">
                    {/* Orbit Visualization */}
                    <div className="orbit-scene reveal">
                        <OrbitCanvas />
                    </div>

                    {/* Content */}
                    <div>
                        <div className="section-label reveal">
                            <i className="fa-solid fa-seedling" /> Chapter One
                        </div>
                        <h2 className="section-heading reveal reveal-delay-1">
                            Conception &<br />
                            <span className="em">Fertility Care</span>
                        </h2>
                        <p className="section-sub reveal reveal-delay-2" style={{ marginBottom: '1.8rem' }}>
                            Understand your cycle, optimize your fertile window, and get science-backed support
                            for every stage of your fertility journey.
                        </p>

                        <div className="fertility-cards">
                            {cards.map((card, index) => (
                                <FertilityCard key={index} {...card} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
