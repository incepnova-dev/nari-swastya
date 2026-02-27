import React, { useEffect } from 'react';
import { SiteHeader } from '../components/SiteHeader';
import { Footer } from '../components/Footer';
import { ConceivingHero } from '../components/journeys/conceiving/hero/ConceivingHero';
import { CycleTracker } from '../components/journeys/conceiving/cycle-tracker/CycleTracker';
import { ConceptionScience } from '../components/journeys/conceiving/conception-science/ConceptionScience';

export const Conceiving: React.FC = () => {
    useEffect(() => { window.scrollTo(0, 0); }, []);
    return (
        <div style={{ width: '100%', overflowX: 'hidden' }}>
            <SiteHeader />
            <main>
                <ConceivingHero />
                <div style={{ padding: '0 2rem' }}><CycleTracker /></div>
                <ConceptionScience />
            </main>
            <Footer />
        </div>
    );
};
