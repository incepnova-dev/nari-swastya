import React, { useState } from 'react';
import { COMORBIDITY_SEARCH, COMORBIDITY_BUTTONS } from '../../data';

export const ComorbiditySearchCard: React.FC = () => {
  const [activeIds, setActiveIds] = useState<Set<string>>(new Set());

  const toggle = (id: string) => {
    if (id === 'clear') {
      setActiveIds(new Set());
      return;
    }
    setActiveIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

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
            className={`comorbidity-search-btn${activeIds.has(id) ? ' active' : ''}`}
            data-comorbidity={id}
            onClick={() => toggle(id)}
          >
            <i className={`fas ${icon}`} />
            <span>{label}</span>
          </button>
        ))}
        <button
          type="button"
          className="comorbidity-search-btn clear-btn"
          data-comorbidity="clear"
          onClick={() => toggle('clear')}
        >
          <i className="fas fa-times-circle" />
          <span>Clear All</span>
        </button>
      </div>
      <div className="search-results" id="comorbidityResults" />
    </div>
  );
};
