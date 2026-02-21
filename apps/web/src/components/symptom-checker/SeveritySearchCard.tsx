import React, { useState } from 'react';
import { SEVERITY_SEARCH, SEVERITY_PILLS } from '../../data';

type SeverityType = 'mild' | 'moderate' | 'severe' | 'critical';

export const SeveritySearchCard: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const [activeSeverity, setActiveSeverity] = useState<SeverityType | null>(null);
  const [showClear, setShowClear] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = e.target.value;
    setInputValue(v);
    setShowClear(v.length > 0);
  };

  const handleClear = () => {
    setInputValue('');
    setShowClear(false);
  };

  return (
    <div className="search-wrapper severity-search">
      <div className="search-header">
        <i className={`fas ${SEVERITY_SEARCH.headerIcon}`} />
        <span>{SEVERITY_SEARCH.headerLabel}</span>
      </div>
      <div className="search-box">
        <i className={`fas ${SEVERITY_SEARCH.inputIcon} search-icon`} />
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder={SEVERITY_SEARCH.inputPlaceholder}
          className="search-input"
          aria-label={SEVERITY_SEARCH.headerLabel}
        />
        {showClear && (
          <button
            type="button"
            className="search-clear"
            onClick={handleClear}
            aria-label="Clear search"
          >
            <i className="fas fa-times" />
          </button>
        )}
      </div>
      <div className="severity-pills" id="severityPills">
        {SEVERITY_PILLS.map(({ severity, icon, label }) => (
          <button
            key={severity}
            type="button"
            className={`severity-pill ${severity}${activeSeverity === severity ? ' active' : ''}`}
            data-severity={severity}
            onClick={() => setActiveSeverity(activeSeverity === severity ? null : severity)}
          >
            <i className={`fas ${icon}`} />
            {label}
          </button>
        ))}
      </div>
      <div className="search-results" id="severityResults" />
    </div>
  );
};
