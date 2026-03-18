import React from 'react';
import '../../../styles/journey/fertility/fertility-tracking.css';
import '../../../styles/journey/fertility/fertility-header.css';

const TRACKING_METHODS = [
    {
        icon: '📅',
        title: 'Calendar Method',
        description: 'Track cycle length for 6+ months. Fertile window typically days 10-17 of a 28-day cycle.',
        badge: '✅ Easy to Start'
    },
    {
        icon: '🌡️',
        title: 'Basal Body Temperature',
        description: 'Record your basal body temperature [BBT] immediately on waking, before any activity. A sustained rise of 0.5–1°F [~0.3–0.5°C] confirms that ovulation has taken place.',
        badge: '⭐ Most Accurate',
        ariaLabel: 'Thermometer — BBT tracking'
    },
    {
        icon: '💧',
        title: 'Cervical Mucus',
        description: 'Observe and note cervical mucus texture each day. A translucent, elastic [egg-white-like] consistency is the hallmark of your peak fertile window.',
        badge: '🔧 No Equipment',
        ariaLabel: 'Water drop — cervical mucus monitoring'
    },
    {
        icon: '🧪',
        title: 'Ovulation Predictor Kits',
        description: 'Urinary ovulation predictor kits [OPKs] identify the pre-ovulatory LH [luteinising hormone] surge, which typically precedes ovulation by 24–48 hours. Use them daily across your anticipated fertile window.',
        badge: '⚡ Most Convenient'
    },
    {
        icon: '📱',
        title: 'Fertility Apps',
        description: 'Digital tracking combines multiple methods. Predictions improve over time with your data.',
        badge: '🔄 Comprehensive',
        ariaLabel: 'Phone — fertility app tracking'
    },
    {
        icon: '🔬',
        title: 'Fertility Monitors',
        description: 'Advanced devices measure hormones or detect fertile saliva patterns for precise prediction.',
        badge: '💎 Premium',
        ariaLabel: 'Microscope — OPK testing'
    }
];

export const FertilityTracking: React.FC = () => {
    return (
        <section className="methods-section fade-in-up" id="methods" aria-label="Fertility Tracking Methods — BBT, OPK, Cervical Mucus">
            <div className="section-header">
                <h2 className="section-title"><span className="title-black">Fertility</span> Tracking Methods</h2>
                <p className="section-subtitle">Choose the approach that works best for you</p>
            </div>
            
            <div className="methods-grid">
                {TRACKING_METHODS.map((method, index) => (
                    <div key={index} className="method-card">
                        <div 
                            className="method-icon" 
                            role={method.ariaLabel ? "img" : undefined} 
                            aria-label={method.ariaLabel}
                        >
                            {method.icon}
                        </div>
                        <h3>{method.title}</h3>
                        <p>{method.description}</p>
                        <span className="method-badge">{method.badge}</span>
                    </div>
                ))}
            </div>
        </section>
    );
};
