import React from 'react';
import { FooterAbout } from './FooterAbout';
import { FooterEvidenceSources } from './FooterEvidenceSources';
import { FooterDisclaimer } from './FooterDisclaimer';
import { FooterEmergency } from './FooterEmergency';

export interface FooterMainProps {
  className?: string;
}

export const FooterMain: React.FC<FooterMainProps> = ({ className = '' }) => {
  return (
    <div className={`footer-main ${className}`.trim()}>
      <FooterAbout />
      <FooterEvidenceSources />
      <FooterDisclaimer />
      <FooterEmergency />
    </div>
  );
};

export default FooterMain;
