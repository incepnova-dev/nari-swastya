import React from 'react';
import { SEVERITY_SEARCH, SEVERITY_PILLS } from '../../data';

/**
 * Severity search card. Uses IDs expected by symptom_checker.ts setupSearchFunctionality();
 * init runs from SymptomChecker page.
 */
export const SeveritySearchCard: React.FC = () => {
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
          id="symptomSearch"
          placeholder={SEVERITY_SEARCH.inputPlaceholder}
          className="search-input"
          aria-label={SEVERITY_SEARCH.headerLabel}
        />
        <button
          type="button"
          id="clearSymptomSearch"
          className="search-clear"
          aria-label="Clear search"
          style={{ display: 'none' }}
        >
          <i className="fas fa-times" />
        </button>
      </div>
      <div className="severity-pills" id="severityPills">
        {SEVERITY_PILLS.map(({ severity, icon, label }) => (
          <button
            key={severity}
            type="button"
            className={`severity-pill ${severity}`}
            data-severity={severity}
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
