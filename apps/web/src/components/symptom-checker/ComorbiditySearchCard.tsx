import React from 'react';
import { COMORBIDITY_SEARCH, COMORBIDITY_BUTTONS } from '../../data';

/**
 * Comorbidity search card. Uses IDs/classes expected by symptom_checker.ts setupSearchFunctionality();
 * init runs from SymptomChecker page and attaches click handlers.
 */
export const ComorbiditySearchCard: React.FC = () => {
  return (
    <div className="search-wrapper comorbidity-search">
      <div className="search-header">
        <i className={`fas ${COMORBIDITY_SEARCH.headerIcon}`} />
        <span>{COMORBIDITY_SEARCH.headerLabel}</span>
      </div>
      <p className="search-helper-text">{COMORBIDITY_SEARCH.helperText}</p>
      <div className="comorbidity-search-grid" id="comorbiditySearchGrid">
        {COMORBIDITY_BUTTONS.map(({ id, icon, label }) => (
          <button
            key={id}
            type="button"
            className="comorbidity-search-btn"
            data-comorbidity={id}
          >
            <i className={`fas ${icon}`} />
            <span>{label}</span>
          </button>
        ))}
        <button
          type="button"
          className="comorbidity-search-btn clear-btn"
          data-comorbidity="clear"
        >
          <i className="fas fa-times-circle" />
          <span>Clear All</span>
        </button>
      </div>
      <div className="search-results" id="comorbidityResults" />
    </div>
  );
};
