import React from 'react';
import { DETECTOR_RESULTS_EMPTY } from '../../data/symptomCheckerDetectorData';

export const DetectorResultsCard: React.FC = () => (
  <div className="detector-results-card">
    <div className="results-empty" id="resultsEmpty">
      <i className={`fas ${DETECTOR_RESULTS_EMPTY.icon}`} />
      <h3>{DETECTOR_RESULTS_EMPTY.title}</h3>
      <p>{DETECTOR_RESULTS_EMPTY.description}</p>
    </div>
    <div className="results-content" id="resultsContent">
      {/* Populated by symptom_checker.ts displayDetectorResults */}
    </div>
  </div>
);
