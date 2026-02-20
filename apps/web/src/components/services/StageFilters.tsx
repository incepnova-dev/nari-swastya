import React from 'react';
import { StageKey, stageFilters } from './servicesData';

// STAGE FILTER BUTTONS
// (from services.html)
// <!-- STAGE FILTER BUTTONS -->
// <div class="stage-filter-container">
//   <button class="filter-btn active" onclick="filterServices('all')">All Services</button>
//   <button class="filter-btn" onclick="filterServices('planning')">Planning</button>
//   <button class="filter-btn" onclick="filterServices('pregnancy')">Pregnancy</button>
//   <button class="filter-btn" onclick="filterServices('postpartum')">Postpartum</button>
//   <button class="filter-btn" onclick="filterServices('menopause')">Menopause</button>
//   <button class="filter-btn" onclick="filterServices('wellness')">Wellness</button>
// </div>

export interface StageFiltersProps {
  activeStage: StageKey;
  onChange: (stage: StageKey) => void;
}

export const StageFilters: React.FC<StageFiltersProps> = ({ activeStage, onChange }) => {
  const handleFilterClick = (stage: StageKey) => {
    onChange(stage);

    // Small delay to ensure state update completes
    setTimeout(() => {
      if (stage === 'all') {
        // Scroll to top of services sections wrapper
        const wrapper = document.querySelector('.services-sections-wrapper');
        if (wrapper) {
          const header = document.querySelector('.header');
          const headerHeight = header ? (header as HTMLElement).offsetHeight : 0;
          const wrapperTop = (wrapper as HTMLElement).offsetTop;
          const offsetPosition = wrapperTop - headerHeight - 20; // 20px extra padding

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      } else {
        // Scroll to the section with matching ID
        const section = document.getElementById(stage);
        if (section) {
          const header = document.querySelector('.header');
          const headerHeight = header ? (header as HTMLElement).offsetHeight : 0;
          const sectionTop = section.offsetTop;
          const offsetPosition = sectionTop - headerHeight - 20; // 20px extra padding

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
    }, 0);
  };

  return (
    <div className="stage-filter-container">
      {stageFilters.map((filter) => (
        <button
          key={filter.id}
          type="button"
          className={filter.id === activeStage ? 'filter-btn active' : 'filter-btn'}
          onClick={() => handleFilterClick(filter.id)}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
};


