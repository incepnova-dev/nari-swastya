import React, { useEffect } from 'react';
import { SiteHeader } from '../components/SiteHeader';
import { Footer } from '../components/Footer';
import { ConceivingHero } from '../components/journeys/conceiving/hero/ConceivingHero';
import { CycleTracker } from '../components/journeys/conceiving/cycle-tracker/CycleTracker';

export const Conceiving: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div style={{ width: '100%', overflowX: 'hidden', margin: 0, padding: 0 }}>
            <SiteHeader />
            <main style={{ width: '100%', margin: 0, padding: 0 }}>
                <ConceivingHero />
                <div style={{ width: '100%', margin: '0 auto', padding: '0 2rem', boxSizing: 'border-box' }}>
                    <CycleTracker />
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Conceiving;
