import React from 'react';
import { emotionWords, heroCore } from '../../data';

interface HeroVisualProps {
  onCoreClick: () => void;
  ecgCanvasRef: React.RefObject<HTMLCanvasElement>;
}

export const HeroVisual: React.FC<HeroVisualProps> = ({ onCoreClick, ecgCanvasRef }) => {
  return (
    <div className="hero-visual">
      <div className="heartbeat-scene">
        <div className="hb-rings-wrap">
          <div className="hb-ring" />
          <div className="hb-ring" />
          <div className="hb-ring" />
          <div className="hb-ring" />
        </div>
        <button type="button" className="hb-core" onClick={onCoreClick}>
          <div className="hb-core-icon">{heroCore.icon}</div>
          <div className="hb-core-text">
            {heroCore.line1}
            <br />
            {heroCore.line2}
          </div>
        </button>
        {emotionWords.map((word) => (
          <div key={word.id} className={`emotion-word ${word.className}`}>
            {word.icon && (
              <i
                className={`fa-solid ${word.icon}`}
                style={word.iconColor ? { color: word.iconColor } : undefined}
              />
            )}{' '}
            {word.text}
          </div>
        ))}
        <div className="ecg-wrap">
          <canvas id="ecgCanvas" ref={ecgCanvasRef} />
        </div>
      </div>
    </div>
  );
};


