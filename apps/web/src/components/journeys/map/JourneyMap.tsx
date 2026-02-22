import React from 'react';
import { Link } from 'react-router-dom';

export interface JourneyStep {
    to: string;
    icon: string;
    labelLine1: string;
    labelLine2: string;
}

const defaultSteps: JourneyStep[] = [
    {
        to: '/menstrual-hygiene',
        icon: 'fa-solid fa-droplet',
        labelLine1: 'Menstrual',
        labelLine2: 'Health',
    },
    {
        to: '/fertility',
        icon: 'fa-solid fa-seedling',
        labelLine1: 'Fertility &',
        labelLine2: 'Conceiving',
    },
    {
        to: '/pregnancy-journey',
        icon: 'fa-solid fa-baby',
        labelLine1: 'Pregnancy',
        labelLine2: 'Journey',
    },
    {
        to: '/breastfeeding-journey',
        icon: 'fa-solid fa-heart',
        labelLine1: 'Birth &',
        labelLine2: 'Postpartum',
    },
    {
        to: '/menopause',
        icon: 'fa-solid fa-sun',
        labelLine1: 'Midlife &',
        labelLine2: 'Menopause',
    },
    {
        to: '/bone-health',
        icon: 'fa-solid fa-spa',
        labelLine1: 'Golden Years',
        labelLine2: 'Wellness',
    },
];

export interface JourneyMapProps {
    steps?: JourneyStep[];
    className?: string;
}

export const JourneyMap: React.FC<JourneyMapProps> = ({
    steps = defaultSteps,
    className = '',
}) => {
    return (
        <div className={`jmap-section-inner ${className}`.trim()}>
            <div className="jmap-container reveal">
                <h3 className="jmap-heading">
                    Navigate Your{' '}
                    <span className="jmap-heading-accent">Life Chapters</span>
                </h3>

                <div className="jmap-steps">
                    {steps.map((step, index) => (
                        <React.Fragment key={step.to}>
                            <Link to={step.to} className="jmap-step">
                                <div className="jmap-dot">
                                    <i className={step.icon} />
                                </div>
                                <span className="jmap-step-label">
                                    {step.labelLine1}
                                    <br />
                                    {step.labelLine2}
                                </span>
                            </Link>

                            {/* Connector between steps (not after the last one) */}
                            {index < steps.length - 1 && (
                                <div className="jmap-connector" aria-hidden="true" />
                            )}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default JourneyMap;
