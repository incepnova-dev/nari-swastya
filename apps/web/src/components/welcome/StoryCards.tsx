import React from 'react';
import { storyCardsData } from './welcomeData';

/**
 * StoryCards
 * ==========
 * Story cards that materialize with shimmer effects
 * Adapted from Welcome.html:1487-1545
 */

export const StoryCards: React.FC = () => {
  return (
    <div className="sna-cards-col">
      {storyCardsData.map((card, index) => (
        <div key={index} className="story-card" style={{ transitionDelay: card.transitionDelay }}>
          <div className="sc-glow-bar" />
          <div className={`sc-tag ${card.tag}`}>
            <i className={`fa-solid ${card.tagIcon}`} /> {card.tagLabel}
          </div>
          <h4>{card.title}</h4>
          <p>{card.description}</p>
          <div className="sc-meta">
            <div className="sc-avatar">{card.avatar}</div>
            <div>
              <div className="sc-author-name">{card.authorName}</div>
              <div className="sc-author-sub">{card.authorSub}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

