import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { initWelcomeHeroParticles, initHeroEcg } from '../../scripts/welcome';
import { HeroContent } from './HeroContent';
import { HeroVisual } from './HeroVisual';

export const Hero: React.FC = () => {
  const heroCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const ecgCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const cleanups: Array<() => void> = [];

    if (heroCanvasRef.current) {
      cleanups.push(initWelcomeHeroParticles(heroCanvasRef.current));
    }
    if (ecgCanvasRef.current) {
      cleanups.push(initHeroEcg(ecgCanvasRef.current));
    }

    return () => {
      cleanups.forEach((fn) => fn && fn());
    };
  }, []);

  const handleBeginJourney = () => {
    navigate('/services');
  };

  const handleExploreStories = () => {
    navigate('/stories');
  };

  const handleCoreClick = () => {
    navigate('/services');
  };

  return (
    <section id="hero" className="welcome-hero-section">
      <canvas id="heroParticleCanvas" ref={heroCanvasRef} />
      <div className="hero">
        <HeroContent onBeginJourney={handleBeginJourney} onExploreStories={handleExploreStories} />
        <HeroVisual onCoreClick={handleCoreClick} ecgCanvasRef={ecgCanvasRef} />
      </div>
    </section>
  );
};


