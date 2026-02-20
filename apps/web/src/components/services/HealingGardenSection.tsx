import React from 'react';
import { HealingGardenHeader } from './healing-garden/HealingGardenHeader';
import { SanctuarySpace } from './healing-garden/SanctuarySpace';
import { GrowthPath } from './healing-garden/GrowthPath';

// =========================================
// MISCARRIAGE & LOSS SUPPORT (HEALING GARDEN)
// (from services.html)
// =========================================

export const HealingGardenSection: React.FC = () => {
  return (
    <section className="section healing-garden-section" id="loss">
      <HealingGardenHeader />

      <div className="garden-landscape">
        <SanctuarySpace />
        <GrowthPath />
      </div>
    </section>
  );
};

