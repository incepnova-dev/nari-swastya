import React from 'react';
import {
  SEARCH_SECTION_TITLE,
  SEARCH_SECTION_TITLE_HIGHLIGHT,
  SEARCH_SECTION_SUBTITLE,
} from '../../data';

export const SearchSectionHeader: React.FC = () => (
  <div className="section-header-modern">
    <h2 className="section-title-prominent">
      {SEARCH_SECTION_TITLE} <span className="title-highlight">{SEARCH_SECTION_TITLE_HIGHLIGHT}</span>
    </h2>
    <p className="section-subtitle-prominent">
      Search by <strong>disease category</strong>, <strong>individual conditions</strong>, or{' '}
      <strong>symptom severity</strong> to get accurate, evidence-based medical information
    </p>
  </div>
);
