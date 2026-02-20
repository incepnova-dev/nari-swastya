import React from 'react';

export interface HeroTitleProps {
  line1: string;
  emphasis: string;
  line3: string;
  className?: string;
}

export const HeroTitle: React.FC<HeroTitleProps> = ({
  line1,
  emphasis,
  line3,
  className = '',
}) => {
  return (
    <h1 className={`journeys-hero__title ${className}`.trim()}>
      {line1}
      <br />
      <span className="journeys-hero__title-emphasis">{emphasis}</span>
      <br />
      {line3}
    </h1>
  );
};

export default HeroTitle;

