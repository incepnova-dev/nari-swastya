import React from 'react';
import '../../../styles/journey/fertility/emotional-sanctuary.css';

const SUPPORT_BUBBLES = [
    {
        icon: <i className="fa-solid fa-users si-icon-teal-lg"></i>,
        title: "Support Groups",
        text: "Connect with others. You are not alone in this journey."
    },
    {
        icon: <i className="fa-solid fa-user-md si-icon-lavender-lg"></i>,
        title: "Counseling",
        text: "Trained fertility counsellors are equipped to support the psychological and emotional dimensions of the conception journey — from diagnosis through treatment and beyond."
    },
    {
        icon: <i className="fa-solid fa-heart si-icon-red-lg"></i>,
        title: "Partner Talk",
        text: "Keep open dialogue. This journey affects both of you deeply."
    },
    {
        icon: <i className="fa-solid fa-spa si-icon-green-lg"></i>,
        title: "Self-Care",
        text: "Maintain hobbies & friendships beyond fertility focus."
    }
];

export const EmotionalSanctuary: React.FC = () => {
    return (
        <section className="sanctuary-section fade-in-up" id="sanctuary" aria-label="Emotional Sanctuary — Fertility Wellbeing and Support">
            <div className="center-text">
                <h2 className="section-title-lg">
                    <span className="title-black">Emotional</span> Sanctuary
                </h2>
                <p className="sub-head">Your mental health is just as vital as the physical journey.</p>
            </div>

            <div className="bubble-container">
                {SUPPORT_BUBBLES.map((bubble, idx) => (
                    <div key={idx} className="support-bubble">
                        {bubble.icon}
                        <h3>{bubble.title}</h3>
                        <p className="seo-support-text">{bubble.text}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};
