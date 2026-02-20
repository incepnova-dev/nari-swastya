import React from 'react';
import { communityFloatCards } from '../../../data';

// =========================================
// FLOATING COMMUNITY CARDS
// (from CommunityPortalSection)
// =========================================

export const FloatingCommunityCards: React.FC = () => {
  return (
    <div className="community-cards-float">
      {communityFloatCards.map((card) => (
        <div key={card.id} className={`community-float-card ${card.cardClass}`}>
          <div className="card-header-mini">
            <span className="card-icon-mini">{card.icon}</span>
            <span
              className={`card-badge-mini ${card.badgeClass || ''}`}
              style={card.badgeClass ? {} : { background: 'var(--pink)' }}
            >
              {card.badge}
            </span>
          </div>
          <h4>{card.title}</h4>
          <p className="card-stat">{card.memberCount}</p>
        </div>
      ))}
    </div>
  );
};

