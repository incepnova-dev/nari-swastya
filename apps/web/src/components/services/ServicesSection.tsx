import React, { ReactNode } from 'react';

// =========================================
// SERVICES SECTION WRAPPER
// (based on SECTION CONTAINERS in services.html)
// <section class="section services-section" id="planning">
//   <h2>
//     <span class="section-icon">🌸</span>
//     <span>Planning Your <span class="gradient-text">Future</span></span>
//   </h2>
//   ...
// </section>
// =========================================

export interface ServicesSectionProps {
  id?: string;
  icon?: string;
  title: string;
  /** Optional gradient-emphasized part of the title */
  emphasis?: string;
  /** Optional custom subtitle/description below the H2 */
  subtitle?: ReactNode;
  children: ReactNode;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  id,
  icon,
  title,
  emphasis,
  subtitle,
  children
}) => {
  return (
    <section className="section services-section" id={id}>
      <h2>
        {icon && <span className="section-icon">{icon}</span>}
        <span>
          {title}{' '}
          {emphasis && <span className="gradient-text">{emphasis}</span>}
        </span>
      </h2>
      {subtitle}
      {children}
    </section>
  );
};



