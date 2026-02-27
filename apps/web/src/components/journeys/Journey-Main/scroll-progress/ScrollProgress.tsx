import React from 'react';
import '../../../../styles/journey/scroll-progress.css';

const sections = [
    { id: 'hero', title: 'Home' },
    { id: 's1', title: 'Fertility' },
    { id: 's2', title: 'Pregnancy' },
    { id: 's3', title: 'Postpartum' },
    { id: 's4', title: 'Body & Mind' },
    { id: 's5', title: 'Prevention & Community' },
];

export const ScrollProgress: React.FC = () => {
    const handleClick = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <div className="scroll-progress" id="scrollProgress">
            {sections.map((section, index) => (
                <div
                    key={section.id}
                    className={`sp-dot ${index === 0 ? 'active' : ''}`}
                    data-section={section.id}
                    title={section.title}
                    onClick={() => handleClick(section.id)}
                />
            ))}
        </div>
    );
};
