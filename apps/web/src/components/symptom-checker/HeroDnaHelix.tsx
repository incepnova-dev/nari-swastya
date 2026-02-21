import React from 'react';
import { HELIX_BASE_COUNT } from '../../data';

export const HeroDnaHelix: React.FC = () => (
  <div className="dna-helix">
    <div className="helix-strand strand-1" />
    <div className="helix-strand strand-2" />
    {Array.from({ length: HELIX_BASE_COUNT }, (_, i) => i + 1).map((n) => (
      <div key={n} className={`helix-base base-${n}`} />
    ))}
  </div>
);
