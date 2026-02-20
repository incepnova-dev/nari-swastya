import React from 'react';

// =========================================
// 3D DASHBOARD PREVIEW
// (from PersonalTrackingHubSection)
// =========================================

export const DashboardPreview3D: React.FC = () => {
  return (
    <div className="dashboard-preview-3d">
      <div className="preview-frame">
        <div className="frame-glow" />
        <div className="preview-screen">
          <div className="screen-header">
            <span className="screen-dot" />
            <span className="screen-dot" />
            <span className="screen-dot" />
            <span className="screen-title">Your Dashboard Preview</span>
          </div>
          <div className="screen-content">
            <div className="preview-stat-row">
              <div className="preview-stat pulse-stat">
                <span className="stat-icon-preview">🎯</span>
                <span className="stat-value-preview">85%</span>
                <span className="stat-label-preview">Goals</span>
              </div>
              <div className="preview-stat pulse-stat" style={{ animationDelay: '0.2s' }}>
                <span className="stat-icon-preview">📊</span>
                <span className="stat-value-preview">12</span>
                <span className="stat-label-preview">Metrics</span>
              </div>
              <div className="preview-stat pulse-stat" style={{ animationDelay: '0.4s' }}>
                <span className="stat-icon-preview">🔔</span>
                <span className="stat-value-preview">3</span>
                <span className="stat-label-preview">Alerts</span>
              </div>
            </div>
            <div className="preview-chart">
              <div className="chart-bar" style={{ height: '60%', animationDelay: '0.1s' }} />
              <div className="chart-bar" style={{ height: '80%', animationDelay: '0.2s' }} />
              <div className="chart-bar" style={{ height: '45%', animationDelay: '0.3s' }} />
              <div className="chart-bar" style={{ height: '90%', animationDelay: '0.4s' }} />
              <div className="chart-bar" style={{ height: '70%', animationDelay: '0.5s' }} />
            </div>
            <div className="preview-journey">
              <div className="journey-icon-mini">🤰</div>
              <div className="journey-info-mini">
                <div className="journey-name-mini">Active Journey</div>
                <div className="journey-progress-mini">
                  <div className="journey-bar-fill" style={{ width: '65%' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

