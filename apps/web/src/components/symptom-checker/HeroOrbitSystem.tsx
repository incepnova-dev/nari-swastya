import React from 'react';
import { ORBIT_ITEMS } from '../../data';

export const HeroOrbitSystem: React.FC = () => (
  <div className="orbit-system">
    {ORBIT_ITEMS.map(({ icon, className }) => (
      <div key={className} className={`orbit ${className}`}>
        <div className="orbit-item">
          <i className={`fas ${icon}`} />
        </div>
      </div>
    ))}
  </div>
);
