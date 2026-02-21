import React from 'react';
import { SearchSectionHeader } from './SearchSectionHeader';
import { DiseaseSearchCard } from './DiseaseSearchCard';
import { SeveritySearchCard } from './SeveritySearchCard';
import { ComorbiditySearchCard } from './ComorbiditySearchCard';

export const SearchConditionsSection: React.FC = () => (
  <section className="search-conditions-section" id="search-section">
    <div className="container">
      <SearchSectionHeader />
      <div className="dual-search-container">
        <DiseaseSearchCard />
        <SeveritySearchCard />
        <ComorbiditySearchCard />
      </div>
    </div>
  </section>
);
