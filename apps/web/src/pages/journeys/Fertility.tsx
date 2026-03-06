import React, { useEffect } from 'react';
import { SiteHeader } from '../../components/SiteHeader';
import { Footer } from '../../components/Footer';
import { HeroConstellation } from '../../components/journeys/fertility/hero/HeroConstellation';

export const Fertility: React.FC = () => {
    useEffect(() => { window.scrollTo(0, 0); }, []);
    return (
        <div style={{ width: '100%', overflowX: 'hidden' }}>
            <SiteHeader />
            <main>
                <HeroConstellation />
            </main>
            <Footer />
        </div>
    );
};
