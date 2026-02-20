import React from 'react';
import { FooterColumn } from './FooterColumn';
import { aboutContent } from '../../data';

export interface FooterAboutProps {
  title?: string;
  description?: string;
}

export const FooterAbout: React.FC<FooterAboutProps> = ({
  title = aboutContent.title,
  description = aboutContent.description,
}) => {
  return (
    <FooterColumn title={title}>
      <p>{description}</p>
    </FooterColumn>
  );
};

export default FooterAbout;
