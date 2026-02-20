import React, { RefObject } from 'react';
import { MilestoneRow } from './MilestoneRow';
import { milestoneData } from '../welcomeData';

interface MilestoneTimelineProps {
  threadGlowRef: RefObject<HTMLDivElement>;
}

/**
 * MilestoneTimeline
 * -----------------
 * Timeline with thread line, glow, and milestone rows
 */
export const MilestoneTimeline: React.FC<MilestoneTimelineProps> = ({ threadGlowRef }) => {
  return (
    <div className="s3-timeline" id="s3Timeline">
      <div className="thread-line" />
      <div className="thread-glow" id="threadGlow" ref={threadGlowRef} />

      {milestoneData.map((milestone) => (
        <MilestoneRow key={milestone.id} milestone={milestone} />
      ))}
    </div>
  );
};

