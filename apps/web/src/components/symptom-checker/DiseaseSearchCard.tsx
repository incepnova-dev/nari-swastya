import React, { useState } from 'react';
import { DISEASE_SEARCH } from '../../data';

export const DiseaseSearchCard: React.FC = () => {
  const [value, setValue] = useState('');
  const [showClear, setShowClear] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = e.target.value;
    setValue(v);
    setShowClear(v.length > 0);
  };

  const handleClear = () => {
    setValue('');
    setShowClear(false);
  };

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
          value={value}
          onChange={handleChange}
          placeholder={DISEASE_SEARCH.inputPlaceholder}
          className="search-input"
          aria-label={DISEASE_SEARCH.headerLabel}
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
      <div className="search-results" id="diseaseResults" />
    </div>
  );
};
