import React from 'react';
import { FooterColumn } from './FooterColumn';
import { disclaimerContent } from '../../data';

export interface FooterDisclaimerProps {
  title?: string;
  text?: string;
}

export const FooterDisclaimer: React.FC<FooterDisclaimerProps> = ({
  title = disclaimerContent.title,
  text = disclaimerContent.text,
}) => {
  return (
    <FooterColumn title={title}>
      <p className="disclaimer-text">{text}</p>
    </FooterColumn>
  );
};

export default FooterDisclaimer;
