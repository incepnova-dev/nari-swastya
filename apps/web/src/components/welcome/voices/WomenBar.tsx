import React from 'react';

interface WomenStat {
  id: string;
  value: string;
  label: string;
}

const WOMEN_STATS: WomenStat[] = [
  { id: 'women', value: '2.4M+', label: 'women asking questions' },
  { id: 'states', value: '28', label: 'Indian states represented' },
  { id: 'languages', value: '8', label: 'regional languages' },
  { id: 'anonymous', value: '100%', label: 'anonymous, always' },
];

export const WomenBar: React.FC = () => {
  return (
    <div className="women-bar reveal" style={{ transitionDelay: '.5s' }}>
      {WOMEN_STATS.map((stat, index) => (
        <React.Fragment key={stat.id}>
          <div className="wb-item">
            <strong>{stat.value}</strong> {stat.label}
          </div>
          {index < WOMEN_STATS.length - 1 && <div className="wb-divider">·</div>}
        </React.Fragment>
      ))}
    </div>
  );
};

