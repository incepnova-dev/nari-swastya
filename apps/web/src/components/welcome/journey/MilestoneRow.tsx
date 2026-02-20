import React from 'react';
import { Milestone } from '../welcomeData';

interface MilestoneRowProps {
  milestone: Milestone;
}

/**
 * MilestoneRow
 * ------------
 * Individual milestone row with card and node
 */
export const MilestoneRow: React.FC<MilestoneRowProps> = ({ milestone }) => {
  return (
    <div className="milestone-row">
      <div className="milestone-card-wrap">
        <div className="milestone-card reveal">
          <div className="mc-week">{milestone.week}</div>
          <div className="mc-title">{milestone.title}</div>
          <div className="mc-desc">{milestone.description}</div>
          <div className="mc-stat">
            <i className={milestone.statIcon} /> {milestone.statText}
          </div>
        </div>
      </div>
      <div className="milestone-node" style={{ animationDelay: milestone.animationDelay }}>
        <i className={milestone.nodeIcon} />
      </div>
    </div>
  );
};

