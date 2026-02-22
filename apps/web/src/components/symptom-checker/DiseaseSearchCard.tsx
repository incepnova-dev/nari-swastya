import React from 'react';
import { DISEASE_SEARCH } from '../../data';

/**
 * Disease search card. The input and clear button use IDs expected by
 * symptom_checker.ts setupSearchFunctionality(); init runs from SymptomChecker page.
 */
export const DiseaseSearchCard: React.FC = () => {
  return (
    <div className="search-wrapper primary-search">
      <div className="search-header">
        <i className={`fas ${DISEASE_SEARCH.headerIcon}`} />
        <span>{DISEASE_SEARCH.headerLabel}</span>
      </div>
      <div className="search-box">
        <i className={`fas ${DISEASE_SEARCH.inputIcon} search-icon`} />
        <input
          type="text"
          id="diseaseSearch"
          placeholder={DISEASE_SEARCH.inputPlaceholder}
          className="search-input"
          aria-label={DISEASE_SEARCH.headerLabel}
        />
        <button
          type="button"
          id="clearSearch"
          className="search-clear"
          aria-label="Clear search"
          style={{ display: 'none' }}
        >
          <i className="fas fa-times" />
        </button>
      </div>
      <div className="search-results" id="diseaseResults" />
    </div>
  );
};
