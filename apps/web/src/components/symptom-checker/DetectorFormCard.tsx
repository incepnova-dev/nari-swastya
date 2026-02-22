import React from 'react';
import { DETECTOR_FORM } from '../../data/symptomCheckerDetectorData';
import { DetectorForm } from './DetectorForm';

export const DetectorFormCard: React.FC = () => (
  <div className="detector-form-card">
    <div className="form-card-icon">
      <i className={`fas ${DETECTOR_FORM.formCardIcon}`} />
    </div>
    <h3 className="form-card-title">{DETECTOR_FORM.formCardTitle}</h3>
    <p className="form-card-subtitle">{DETECTOR_FORM.formCardSubtitle}</p>
    <DetectorForm />
  </div>
);
