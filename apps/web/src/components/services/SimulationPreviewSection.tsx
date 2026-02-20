import React from 'react';

// INTERACTIVE SIMULATION PREVIEW (from services.html)
export const SimulationPreviewSection: React.FC = () => {
  return (
    <section className="section">
      <div className="simulation-preview">
        <div className="simulation-content">
          <h3>🎮 Try Our Interactive Health Simulations</h3>
          <p>
            Experience labor contractions, understand fetal positioning, practice pelvic floor exercises,
            and visualize hormone changes—all through immersive 3D experiences.
          </p>
          <a href="#" className="simulation-btn">
            Launch Simulations
            <i className="fa-solid fa-arrow-right" />
          </a>
        </div>
      </div>
    </section>
  );
};


