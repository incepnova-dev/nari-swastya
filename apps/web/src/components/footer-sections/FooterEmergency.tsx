import React from 'react';
import { FooterColumn } from './FooterColumn';
import { emergencyContent } from './footerData';

export interface FooterEmergencyProps {
  title?: string;
  text?: string;
  emphasis?: string;
}

export const FooterEmergency: React.FC<FooterEmergencyProps> = ({
  title = emergencyContent.title,
  text = emergencyContent.text,
  emphasis = emergencyContent.emphasis,
}) => {
  return (
    <FooterColumn title={title}>
      <p className="emergency-alert">
        {text} <strong>{emphasis}</strong>
      </p>
    </FooterColumn>
  );
};

export default FooterEmergency;
