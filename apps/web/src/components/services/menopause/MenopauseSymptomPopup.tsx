import React from 'react';
import { MenopauseSymptom } from '../../../data';

interface MenopauseSymptomPopupProps {
  symptom: MenopauseSymptom | null;
  isOpen: boolean;
  onClose: () => void;
}

// Symptom popup overlay for Menopause section
// Mirrors the markup under <!-- Symptom Popup --> in services.html
export const MenopauseSymptomPopup: React.FC<MenopauseSymptomPopupProps> = ({
  symptom,
  isOpen,
  onClose
}) => {
  if (!isOpen || !symptom) return null;

  return (
    <>
      <div
        className={isOpen ? 'symptom-popup-overlay active' : 'symptom-popup-overlay'}
        onClick={onClose}
      />
      <div className={isOpen ? 'symptom-popup active' : 'symptom-popup'}>
        <button
          className="close-btn"
          type="button"
          onClick={onClose}
          aria-label="Close symptom details"
        >
          ×
        </button>
        <div className="popup-header">
          <div className="popup-icon">{symptom.icon}</div>
          <h3 className="symptom-detail-title">{symptom.label}</h3>
        </div>
        <div className="popup-body">
          <p className="symptom-detail-description">
            More detailed education and personalized tips for {symptom.label.toLowerCase()} will
            appear here as we connect this experience to live clinical content.
          </p>
          <div className="popup-tip-box">
            <strong>✨ Quick Tip:</strong>{' '}
            <span>
              Start by tracking when and how often you notice {symptom.label.toLowerCase()} so you
              can discuss clear patterns with your doctor.
            </span>
          </div>
          <button className="popup-action" type="button" onClick={onClose}>
            View Treatment Options →
          </button>
        </div>
      </div>
    </>
  );
};

