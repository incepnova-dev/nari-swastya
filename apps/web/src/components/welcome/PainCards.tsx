import React from 'react';
import { painCardsData } from './welcomeData';

export const PainCards: React.FC = () => {
  return (
    <div className="pain-cards" style={{ marginTop: '2rem' }}>
      {painCardsData.map((card) => (
        <div
          key={card.id}
          className="pain-card reveal"
          style={{ transitionDelay: card.delay }}
        >
          <div
            className="pain-icon"
            style={{ background: card.iconBg, color: card.iconColor }}
          >
            {card.icon}
          </div>
          <div>
            <h4>{card.title}</h4>
            <p>{card.body}</p>
            <div className="pain-quote">{card.quote}</div>
          </div>
        </div>
      ))}
    </div>
  );
};


