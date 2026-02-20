import React from 'react';
import { metaContent } from './footerData';

export interface FooterMetaProps {
  lastUpdated?: string;
  badges?: string[];
  tagline?: string;
  className?: string;
}

export const FooterMeta: React.FC<FooterMetaProps> = ({
  lastUpdated = metaContent.lastUpdated,
  badges = metaContent.badges,
  tagline = metaContent.tagline,
  className = '',
}) => {
  return (
    <div className={`footer-meta ${className}`.trim()}>
      <p className="meta-line">
        Last Updated: {lastUpdated}
        {badges.map((badge, index) => (
          <React.Fragment key={index}>
            <span className="sep">{index === 0 ? '|' : '•'}</span>
            {badge}
          </React.Fragment>
        ))}
      </p>
      <p className="tagline">
        <span className="heart">🩷</span>
        {tagline}
      </p>
    </div>
  );
};

export default FooterMeta;
