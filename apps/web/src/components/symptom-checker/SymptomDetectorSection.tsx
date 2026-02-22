import React from 'react';
import { DetectorSectionHeader } from './DetectorSectionHeader';
import { DetectorFormCard } from './DetectorFormCard';
import { DetectorResultsCard } from './DetectorResultsCard';

export const SymptomDetectorSection: React.FC = () => (
  <section className="symptom-detector-section" id="symptom-detector">
    <div className="container-detector">
      <DetectorSectionHeader />
      <div className="detector-grid">
        <DetectorFormCard />
        <DetectorResultsCard />
      </div>
    </div>
  </section>
);
