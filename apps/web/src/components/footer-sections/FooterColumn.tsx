import React from 'react';

export interface FooterColumnProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export const FooterColumn: React.FC<FooterColumnProps> = ({
  title,
  children,
  className = '',
}) => {
  return (
    <div className={`footer-col ${className}`.trim()}>
      <h3>{title}</h3>
      {children}
    </div>
  );
};

export default FooterColumn;
