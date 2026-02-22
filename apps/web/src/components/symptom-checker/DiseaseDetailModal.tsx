import React from 'react';

/**
 * Disease detail modal shell. The script (symptom_checker.ts) fills modalBody
 * and toggles the .active class. Structure and IDs must match what the script expects.
 */
export const DiseaseDetailModal: React.FC = () => (
  <div className="disease-modal" id="diseaseModal">
    <div className="modal-backdrop" id="modalBackdrop" />
    <div className="modal-content">
      <button type="button" className="modal-close" id="modalClose" aria-label="Close modal">
        <i className="fas fa-times" />
      </button>
      <div className="modal-body" id="modalBody">
        {/* Content injected by symptom_checker.ts showDiseaseDetailModal / showCategoryModal */}
      </div>
    </div>
  </div>
);
