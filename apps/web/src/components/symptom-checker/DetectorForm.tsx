import React, { useState, useEffect } from 'react';
import {
  DETECTOR_CONDITION_CATEGORY,
  DETECTOR_SPECIFIC_DISEASE,
  DETECTOR_AGE_GROUP,
  DETECTOR_SEVERITY,
  DETECTOR_COMORBIDITIES,
  DETECTOR_ACTIONS,
} from '../../data/symptomCheckerDetectorData';

const RESET_COMORBIDITIES_EVENT = 'symptom-checker-reset-comorbidities';

export const DetectorForm: React.FC = () => {
  const [selectedComorbidities, setSelectedComorbidities] = useState<Set<string>>(new Set());

  useEffect(() => {
    const onReset = () => setSelectedComorbidities(new Set());
    window.addEventListener(RESET_COMORBIDITIES_EVENT, onReset);
    return () => window.removeEventListener(RESET_COMORBIDITIES_EVENT, onReset);
  }, []);

  const handleComorbidityClick = (value: string) => {
    setSelectedComorbidities((prev) => {
      const next = new Set(prev);
      if (value === 'none') {
        return new Set(['none']);
      }
      next.delete('none');
      if (next.has(value)) next.delete(value);
      else next.add(value);
      return next;
    });
  };

  return (
  <div className="detector-form">
    <div className="form-field">
      <label className="field-label">
        <i className={`fas ${DETECTOR_CONDITION_CATEGORY.labelIcon}`} />
        <span>{DETECTOR_CONDITION_CATEGORY.label}</span>
      </label>
      <div className="custom-select-wrapper">
        <select id="conditionCategory" className="custom-select">
          <option value="">{DETECTOR_CONDITION_CATEGORY.placeholder}</option>
        </select>
        <i className="fas fa-chevron-down select-icon" />
      </div>
    </div>

    <div className="form-field">
      <label className="field-label">
        <span>{DETECTOR_SPECIFIC_DISEASE.label}</span>
      </label>
      <div className="custom-select-wrapper">
        <select id="specificDisease" className="custom-select" disabled>
          <option value="">{DETECTOR_SPECIFIC_DISEASE.placeholder}</option>
        </select>
        <i className="fas fa-chevron-down select-icon" />
      </div>
    </div>

    <div className="form-field">
      <label className="field-label">
        <i className={`fas ${DETECTOR_AGE_GROUP.labelIcon}`} />
        <span>{DETECTOR_AGE_GROUP.label}</span>
      </label>
      <div className="custom-select-wrapper">
        <select id="ageGroup" className="custom-select">
          <option value="">{DETECTOR_AGE_GROUP.placeholder}</option>
          {DETECTOR_AGE_GROUP.options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <i className="fas fa-chevron-down select-icon" />
      </div>
    </div>

    <div className="form-field">
      <label className="field-label">
        <i className={`fas ${DETECTOR_SEVERITY.labelIcon}`} />
        <span>{DETECTOR_SEVERITY.label}</span>
      </label>
      <div className="custom-select-wrapper">
        <select id="severityLevel" className="custom-select">
          <option value="">{DETECTOR_SEVERITY.placeholder}</option>
          {DETECTOR_SEVERITY.options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <i className="fas fa-chevron-down select-icon" />
      </div>
    </div>

    <div className="form-field full-width">
      <label className="field-label">
        <i className={`fas ${DETECTOR_COMORBIDITIES.labelIcon}`} />
        <span>{DETECTOR_COMORBIDITIES.label}</span>
      </label>
      <div className="comorbidity-grid">
        {DETECTOR_COMORBIDITIES.buttons.map((btn) => (
          <button
            key={btn.value}
            type="button"
            className={`comorbidity-btn${selectedComorbidities.has(btn.value) ? ' active' : ''}`}
            data-value={btn.value}
            onClick={() => handleComorbidityClick(btn.value)}
          >
            <i className={`fas ${btn.icon}`} />
            <span>{btn.label}</span>
          </button>
        ))}
      </div>
    </div>

    <div className="form-actions">
      <button type="button" id="analyzeBtn" className="btn-analyze">
        <i className={`fas ${DETECTOR_ACTIONS.analyzeIcon}`} />
        <span>{DETECTOR_ACTIONS.analyzeLabel}</span>
        <i className={`fas ${DETECTOR_ACTIONS.analyzeIconEnd}`} />
      </button>
      <button type="button" id="resetBtn" className="btn-reset">
        <i className={`fas ${DETECTOR_ACTIONS.resetIcon}`} />
        <span>{DETECTOR_ACTIONS.resetLabel}</span>
      </button>
    </div>
  </div>
  );
};
