import React from 'react';
import '../../../styles/journey/fertility/fertility-tips.css';
import '../../../styles/journey/fertility/fertility-header.css';

const LIFESTYLE_TIPS = [
    {
        title: 'Nutrition',
        icon: '🥗',
        tips: [
            'Folic acid: 400-800 mcg daily',
            'Antioxidants: berries, nuts, leafy greens',
            'Healthy fats: avocado, olive oil, fish',
            'Limit processed foods and trans fats'
        ]
    },
    {
        title: 'Healthy Weight',
        icon: '⚖️',
        tips: [
            'BMI 18.5-24.9 optimal for fertility',
            'Under/overweight affects ovulation',
            'Gradual, sustainable changes best',
            'Focus on overall health, not just numbers'
        ]
    },
    {
        title: 'Exercise',
        icon: '🏃‍♀️',
        tips: [
            'Moderate activity 30 min most days',
            'Improves circulation and hormone balance',
            'Avoid excessive intense exercise',
            'Yoga and walking are excellent choices'
        ]
    },
    {
        title: 'Avoid Toxins',
        icon: '🚭',
        tips: [
            'No smoking or secondhand smoke',
            'Limit alcohol consumption',
            'Reduce caffeine (under 200mg/day)',
            'Minimize environmental toxins'
        ]
    },
    {
        title: 'Stress Management',
        icon: '🧘‍♀️',
        tips: [
            'Chronic or acute [high] psychological stress [can] disrupt ovulation through the HPA axis',
            'Practice meditation or mindfulness',
            'Adequate sleep (7-9 hours nightly)',
            'Consider counseling or support groups'
        ]
    },
    {
        title: 'Supplements',
        icon: '💊',
        tips: [
            'Prenatal vitamin before conception',
            'CoQ10 may improve egg quality',
            'Vitamin D if deficient',
            'Always consult doctor first'
        ]
    }
];

export const FertilityTips: React.FC = () => {
    return (
        <section className="tips-section fade-in-up" id="fertility-tips" aria-label="Fertility Optimisation Tips — Lifestyle and Nutrition">
            <div className="section-header">
                <h2 className="section-title"><span className="title-black">Optimizing</span> Your Fertility</h2>
                <p className="section-subtitle">Lifestyle factors that support conception</p>
            </div>
            
            <div className="tips-grid">
                {LIFESTYLE_TIPS.map((item, index) => (
                    <div key={index} className="tip-card">
                        <div className="tip-icon">{item.icon}</div>
                        <h3>{item.title}</h3>
                        <ul>
                            {item.tips.map((tip, i) => (
                                <li key={i}>{tip}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
};
