import React from 'react';

interface PeerCard {
  id: string;
  icon: string;
  iconBg: string;
  title: string;
  body: string;
  delay: string;
}

const PEER_CARDS: PeerCard[] = [
  {
    id: 'ask-without-fear',
    icon: '🌸',
    iconBg: 'linear-gradient(135deg,rgba(236,64,122,0.15),rgba(173,20,87,0.1))',
    title: 'Ask Without Fear',
    body:
      'A space where no question is too embarrassing. Anonymous or named — women ask about bleeding, pain, intimacy, and shame, and receive evidence-based answers alongside lived experience. Over 1.2 million questions answered.',
    delay: '.1s',
  },
  {
    id: 'circles-of-solidarity',
    icon: '🔗',
    iconBg: 'linear-gradient(135deg,rgba(124,58,237,0.15),rgba(99,38,202,0.1))',
    title: 'Circles of Solidarity',
    body:
      'From rural Rajasthan to urban Bengaluru — women in identical situations find each other. A woman who survived stage-4 ovarian cancer in Jaipur is holding hands (digitally) with someone newly diagnosed in Patna right now.',
    delay: '.22s',
  },
  {
    id: 'voices-across-india',
    icon: '🗺️',
    iconBg: 'linear-gradient(135deg,rgba(0,188,212,0.15),rgba(0,131,143,0.1))',
    title: 'Voices Across India',
    body:
      'Content in Hindi, Tamil, Telugu, Malayalam, Marathi, Bangla, Gujarati, and Odia. Health information that speaks her language, reflects her culture, and respects her reality — not a translated afterthought.',
    delay: '.34s',
  },
];

export const PeerNetwork: React.FC = () => {
  return (
    <div className="peer-network">
      {PEER_CARDS.map((card) => (
        <div key={card.id} className="peer-card reveal" style={{ transitionDelay: card.delay }}>
          <div className="peer-icon-wrap" style={{ background: card.iconBg }}>
            {card.icon}
          </div>
          <h3>{card.title}</h3>
          <p>{card.body}</p>
        </div>
      ))}
    </div>
  );
};

