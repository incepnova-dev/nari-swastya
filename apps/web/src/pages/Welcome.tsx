import React, { useEffect } from 'react';
import { WelcomeHeader } from '../components/welcome/WelcomeHeader';
import { Hero } from '../components/welcome/Hero';
import { PainSection } from '../components/welcome/PainSection';
import { StoriesSection } from '../components/welcome/StoriesSection';
import { VoicesSection } from '../components/welcome/VoicesSection';
import { ReachSection } from '../components/welcome/ReachSection';
import { JourneySection } from '../components/welcome/JourneySection';
import { CTASection } from '../components/welcome/CTASection';
import { ScrollProgressDots } from '../components/welcome/ScrollProgressDots';
import { WelcomeFooter } from '../components/welcome/WelcomeFooter';
import { initWelcomeScrollEffects } from '../scripts/welcome';

export const Welcome: React.FC = () => {
  useEffect(() => {
    const cleanup = initWelcomeScrollEffects();
    return cleanup;
  }, []);

  return (
    <div className="welcome-page">
      <WelcomeHeader />
      <main className="welcome-main">
        <Hero />
        <PainSection />
        <StoriesSection />
        <VoicesSection />
        <ReachSection />
        <JourneySection />
        <CTASection />
      </main>
      <ScrollProgressDots />
      <WelcomeFooter />
    </div>
  );
};

