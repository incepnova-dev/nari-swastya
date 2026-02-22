import React from 'react';
import { DETECTOR_SECTION } from '../../data/symptomCheckerDetectorData';

export const DetectorSectionHeader: React.FC = () => (
  <div className="section-header-modern">
    <h2 className="section-title-prominent">
      {DETECTOR_SECTION.title} <span className="title-highlight">{DETECTOR_SECTION.titleHighlight}</span>
    </h2>
    <p className="section-subtitle-prominent">
      Answer a few questions to get <strong>personalized insights</strong> about your symptoms. Our intelligent
      system analyzes <strong>disease type</strong>, <strong>age group</strong>, and <strong>comorbidities</strong> to
      provide accurate results
    </p>
  </div>
);
