import React from 'react';
import { useAntenatalState } from '../hooks/useAntenatalState';

const FOOD_DB = {
    spinach: { id: 'spinach', name: 'Spinach', folic: 120, iron: 3, calcium: 100, protein: 3, icon: '🥬' },
    milk: { id: 'milk', name: 'Milk', folic: 12, iron: 0, calcium: 300, protein: 8, icon: '🥛' },
    eggs: { id: 'eggs', name: 'Eggs', folic: 25, iron: 1, calcium: 28, protein: 6, icon: '🥚' },
    lentils: { id: 'lentils', name: 'Lentils', folic: 180, iron: 3, calcium: 20, protein: 9, icon: '🥣' },
    orangejuice: { id: 'orangejuice', name: 'Fortified OJ', folic: 40, iron: 0, calcium: 200, protein: 1, icon: '🍊' },
    salmon: { id: 'salmon', name: 'Salmon', folic: 20, iron: 0.5, calcium: 15, protein: 22, icon: '🍣' }
};

const TARGETS = { folic: 600, iron: 27, calcium: 1000, protein: 71 };

export const Nutrition: React.FC = () => {
    const { state, addFood, resetNutrients } = useAntenatalState();

    const getPercent = (key: keyof typeof TARGETS) => {
        return Math.min(100, Math.round((state.nutrients[key] / TARGETS[key]) * 100));
    };

    const overallScore = Math.round(
        (getPercent('folic') + getPercent('iron') + getPercent('calcium') + getPercent('protein')) / 4
    );

    return (
        <section id="nutrition" className="nutrition-section">
            <div className="section-header">
                <div className="header-badge-prominent">
                    <span className="badge-pulse"></span>
                    <span className="badge-text">Fueling Two</span>
                </div>
                <h2 className="section-title-prominent">Nutrition <span className="title-highlight">Tracker</span></h2>
                <p className="section-subtitle-prominent">
                    Are you getting enough? Track key nutrients critical for your baby's development.
                </p>
            </div>

            <div className="nutrition-grid">
                <div className="nutrient-bars-card">
                    <h3>Daily Nutrient Progress</h3>
                    <div className="nutrient-list">
                        {(['folic', 'iron', 'calcium', 'protein'] as const).map((key) => {
                            const pct = getPercent(key);
                            return (
                                <div key={key} className="nutrient-item">
                                    <div className="ni-header">
                                        <span className="ni-name">{key.charAt(0).toUpperCase() + key.slice(1)}</span>
                                        <span className="ni-val">{Math.round(state.nutrients[key])} / {TARGETS[key]} <small>{key === 'protein' ? 'g' : 'mg'}</small></span>
                                    </div>
                                    <div className="ni-track">
                                        <div className="ni-fill" style={{ width: `${pct}%`, backgroundColor: pct >= 100 ? '#66bb6a' : '#ec407a' }}></div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <div className="overall-score-section">
                        <div className="score-viz">
                            <svg viewBox="0 0 120 120">
                                <circle className="score-bg" cx="60" cy="60" r="50"></circle>
                                <circle
                                    className="score-fill"
                                    cx="60"
                                    cy="60"
                                    r="50"
                                    style={{ strokeDasharray: 314, strokeDashoffset: 314 * (1 - overallScore / 100) }}
                                ></circle>
                                <text x="60" y="65" textAnchor="middle" className="score-text">{overallScore}%</text>
                            </svg>
                        </div>
                        <div className="score-fb">
                            <h4>Nutrition Score</h4>
                            <p>{overallScore >= 80 ? "Excellent balance!" : overallScore >= 50 ? "Doing well — add more variety." : "Add some power-foods below!"}</p>
                        </div>
                    </div>
                </div>

                <div className="food-selector-card">
                    <div className="fs-header">
                        <h3>Power Foods</h3>
                        <button className="btn-reset" onClick={resetNutrients}>Reset Daily</button>
                    </div>
                    <div className="food-grid">
                        {Object.values(FOOD_DB).map((food) => (
                            <button key={food.id} className="food-btn" onClick={() => addFood(food.name, food)}>
                                <span className="food-icon">{food.icon}</span>
                                <span className="food-name">{food.name}</span>
                            </button>
                        ))}
                    </div>
                    <div className="logged-foods">
                        <h4>Today's Plate</h4>
                        <div className="food-tags">
                            {state.foods.length > 0 ? state.foods.map((food, i) => (
                                <span key={i} className="food-tag">{food}</span>
                            )) : <p className="muted">No foods logged yet.</p>}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
