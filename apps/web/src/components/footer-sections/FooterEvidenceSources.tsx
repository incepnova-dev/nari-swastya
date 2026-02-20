import React from 'react';
import { FooterColumn } from './FooterColumn';
import { evidenceSources } from '../../data';

export interface FooterEvidenceSourcesProps {
  title?: string;
  sources?: string[];
}

export const FooterEvidenceSources: React.FC<FooterEvidenceSourcesProps> = ({
  title = evidenceSources.title,
  sources = evidenceSources.sources,
}) => {
  return (
    <FooterColumn title={title}>
      <ul>
        {sources.map((source, index) => (
          <li key={index}>{source}</li>
        ))}
      </ul>
    </FooterColumn>
  );
};

export default FooterEvidenceSources;
