import React from 'react';
import { VoiceCanvasLayer } from './voices/VoiceCanvasLayer';
import { QuestionWall } from './voices/QuestionWall';
import { PeerNetwork } from './voices/PeerNetwork';
import { LiveTicker } from './voices/LiveTicker';
import { WomenBar } from './voices/WomenBar';

/**
 * VoicesSection
 * =============
 * SECTION NEW-B: The Voices That Unite Us (snb-section)
 * React version of Welcome.html:1564-1651
 */
export const VoicesSection: React.FC = () => {
  return (
    <section id="snb" className="snb-section">
      {/* Ember-like voice canvas background */}
      <VoiceCanvasLayer />

      <div className="snb-inner">
        <div className="snb-header">
          <div className="section-label reveal">
            <i className="fa-solid fa-comments" /> The Voices That Unite Us
          </div>
          <h2 className="snb-title reveal reveal-delay-1">
            The questions you were
            <br />
            afraid to ask. <span className="em">Someone already did.</span>
          </h2>
          <p className="snb-subtitle reveal reveal-delay-2">
            Women from 28 states. Different languages, different gods, different fears — the same silence. Here, every
            question is brave. Every voice matters.
          </p>
        </div>

        {/* Floating question bubbles */}
        <QuestionWall />

        {/* Peer network cards */}
        <PeerNetwork />

        {/* Live Activity Ticker */}
        <LiveTicker />

        {/* Women count bar */}
        <WomenBar />
      </div>
    </section>
  );
};

