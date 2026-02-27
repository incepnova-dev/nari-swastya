import React from 'react';
import '../../../../../styles/journey/postpartum-care.css';

interface PostpartumCardProps {
    to: string;
    icon: string;
    iconBg: string;
    iconColor: string;
    title: string;
    description: string;
    badge: string;
    badgeType: 'warm' | 'care' | 'calm' | 'alert';
    delay: string;
    featured?: boolean;
}

const PostpartumCard: React.FC<PostpartumCardProps> = ({
    to,
    icon,
    iconBg,
    iconColor,
    title,
    description,
    badge,
    badgeType,
    delay,
    featured = false,
}) => (
    <a
        href={to}
        className="pp-card reveal"
        style={{
            transitionDelay: delay,
            textDecoration: 'none',
            color: 'inherit',
            border: featured ? '2px solid rgba(236, 64, 122, 0.2)' : undefined
        }}
    >
        <div
            className="pp-icon"
            style={{
                background: iconBg,
                color: iconColor
            }}
        >
            <i className={icon} />
        </div>
        <div className="pp-card-content">
            <h4>{title} {featured && '✦'}</h4>
            <p>{description}</p>
            <span className={`badge badge-${badgeType}`}>{badge}</span>
        </div>
    </a>
);

export const Section3: React.FC = () => {
    const supplyData = [
        { label: 'Wk1', height: '30%', delay: '.1s' },
        { label: 'Wk2', height: '55%', delay: '.2s' },
        { label: 'M1', height: '72%', delay: '.3s' },
        { label: 'M2', height: '88%', delay: '.4s' },
        { label: 'M3', height: '100%', delay: '.5s' },
        { label: 'M4', height: '95%', delay: '.6s' },
        { label: 'M5', height: '90%', delay: '.7s' },
        { label: 'M6', height: '82%', delay: '.8s', highlight: true },
    ];

    const cards: PostpartumCardProps[] = [
        {
            to: '/newborn_postpartum_care.html',
            icon: 'fa-solid fa-baby',
            iconBg: 'linear-gradient(135deg, #ec407a, #ad1457)',
            iconColor: 'white',
            title: 'Newborn & Postpartum Care',
            description: 'Complete guide to the fourth trimester — newborn milestones, recovery, mental health, and thriving as a new mother.',
            badge: 'Featured Guide',
            badgeType: 'warm',
            delay: '0s',
            featured: true,
        },
        {
            to: '/breastfeeding-journey.html',
            icon: 'fa-solid fa-heart',
            iconBg: 'linear-gradient(135deg, #fce4ec, #f8bbd9)',
            iconColor: '#c2185b',
            title: 'Breastfeeding Journey',
            description: 'Latch techniques, milk supply boosters, and pumping guides. Everything you need for a confident nursing journey.',
            badge: 'Breastfeeding',
            badgeType: 'warm',
            delay: '.1s',
        },
        {
            to: '/milk-supply-nutrition.html',
            icon: 'fa-solid fa-apple-whole',
            iconBg: 'linear-gradient(135deg, #e8f5e9, #c8e6c9)',
            iconColor: '#2e7d32',
            title: 'Postpartum Nutrition',
            description: 'Galactagogues, iron-rich foods, hydration goals, and recovery-focused meal plans for new mothers.',
            badge: 'Nutrition',
            badgeType: 'calm',
            delay: '.2s',
        },
        {
            to: '/depression.html',
            icon: 'fa-solid fa-brain',
            iconBg: 'linear-gradient(135deg, #f3e5f5, #e1bee7)',
            iconColor: '#7b1fa2',
            title: 'Perinatal Mental Health',
            description: 'Postpartum depression, anxiety, and "baby blues" — understand the difference and when to seek help.',
            badge: 'Mental Health',
            badgeType: 'care',
            delay: '.3s',
        },
        {
            to: '/perinatal_family_guide.html',
            icon: 'fa-solid fa-people-roof',
            iconBg: 'linear-gradient(135deg, #fff3e0, #ffe0b2)',
            iconColor: '#e65100',
            title: 'Family Transition Guide',
            description: 'Partner roles, sibling adjustment, grandparent support — navigate the whole family through new parenthood.',
            badge: 'Family Care',
            badgeType: 'alert',
            delay: '.4s',
        },
        {
            to: '/vaccination.html',
            icon: 'fa-solid fa-syringe',
            iconBg: 'linear-gradient(135deg, #e3f2fd, #bbdefb)',
            iconColor: '#1565c0',
            title: 'Neonatal Vaccination Schedule',
            description: 'Complete immunization timeline for your newborn — from BCG at birth to 18-month boosters.',
            badge: 'Vaccines',
            badgeType: 'calm',
            delay: '.5s',
        },
        {
            to: '/government-schemes.html',
            icon: 'fa-solid fa-landmark',
            iconBg: 'linear-gradient(135deg, #fce4ec, #f8bbd9)',
            iconColor: '#880e4f',
            title: 'Government Schemes',
            description: 'PMMVY, Janani Suraksha Yojana, Pradhan Mantri Matru Vandana — claim what\'s rightfully yours.',
            badge: 'Benefits',
            badgeType: 'warm',
            delay: '.6s',
        },
    ];

    return (
        <section className="section journey-s3-section" id="s3">
            <div className="section-inner">
                <div className="s3-layout">
                    {/* Visual Side */}
                    <div>
                        <div className="section-label reveal">
                            <i className="fa-solid fa-baby" /> Chapter Three
                        </div>
                        <h2 className="section-heading reveal reveal-delay-1">
                            Birth, Baby &<br />
                            <span className="em">Postpartum Care</span>
                        </h2>
                        <p className="section-sub reveal reveal-delay-2" style={{ marginBottom: '1.5rem' }}>
                            The fourth trimester is real. Your body just performed a miracle —
                            now it needs the same care and attention as your newborn.
                        </p>

                        <div className="pulse-wrap reveal" style={{ marginTop: '2rem' }}>
                            <div className="pulse-ring" style={{ width: '360px', height: '360px' }} />
                            <div className="pulse-ring" style={{ width: '280px', height: '280px' }} />
                            <div className="pulse-ring" style={{ width: '210px', height: '210px' }} />
                            <div className="pulse-ring" style={{ width: '150px', height: '150px' }} />
                            <div className="pulse-core">
                                <i className="fa-solid fa-baby" />
                                <span>Mother<br />& Baby<br />First</span>
                            </div>
                        </div>

                        {/* Breastfeeding Visual */}
                        <div className="bf-visual reveal reveal-delay-3" style={{ marginTop: '2.5rem' }}>
                            <h4 style={{ fontFamily: "'Playfair Display', serif" }}>
                                <i className="fa-solid fa-droplet" style={{ color: 'var(--deep-pink)', marginRight: '.5rem' }} />
                                Breastfeeding: Milk Supply by Month
                            </h4>
                            <div className="bf-timeline">
                                {supplyData.map((item, index) => (
                                    <div
                                        key={index}
                                        className="bf-bar"
                                        style={{
                                            height: item.height,
                                            animationDelay: item.delay,
                                            background: item.highlight ? 'linear-gradient(180deg, #ad1457, #ec407a)' : undefined
                                        }}
                                        data-label={item.label}
                                    />
                                ))}
                            </div>
                            <p style={{ fontSize: '.75rem', color: 'var(--text-soft)', marginTop: '1.5rem', textAlign: 'center' }}>
                                <a href="breastfeeding-journey.html" style={{ color: 'var(--deep-pink)', fontWeight: 700, textDecoration: 'none' }}>
                                    <i className="fa-solid fa-arrow-right" /> Full Breastfeeding Journey Guide
                                </a>
                            </p>
                        </div>
                    </div>

                    {/* Cards Side */}
                    <div className="postpartum-cards">
                        {cards.map((card, index) => (
                            <PostpartumCard key={index} {...card} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
