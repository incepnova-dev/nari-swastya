import React from 'react';

const TICKER_ITEMS: string[] = [
  '💬 Meena from Jaipur just asked her first question about endometriosis',
  '🎗️ Lakshmi from Chennai shared her 2-year cancer-free milestone',
  '🤝 Anita from Lucknow joined the postpartum support circle',
  '🔬 New research on thyroid & fertility just posted by our medical team',
  '💌 Prachi from Pune sent her first anonymous question — and got 47 replies',
  '🌟 Sunita from Bhopal just marked herself as "3 years postpartum anxiety-free"',
  '💬 Fatima from Hyderabad found her recovery circle after silent miscarriage',
  '🧬 AIIMS study on PCOS updated — 12,000 women reading it right now',
];

export const LiveTicker: React.FC = () => {
  return (
    <div className="live-ticker reveal" style={{ transitionDelay: '.4s' }}>
      <div className="ticker-dot" />
      <div className="ticker-label">Live</div>
      <div className="ticker-track">
        <div className="ticker-items" id="tickerItems">
          {TICKER_ITEMS.concat(TICKER_ITEMS).map((item, index) => (
            <span key={index} className="ticker-item">
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

