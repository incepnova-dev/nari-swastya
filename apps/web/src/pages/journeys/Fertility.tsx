import React, { useEffect } from 'react';
import { SiteHeader } from '../../components/SiteHeader';
import { Footer } from '../../components/Footer';
import { HeroConstellation } from '../../components/journeys/fertility/hero/HeroConstellation';
import { BodySimulator } from '../../components/journeys/fertility/BodySimulator';
import { FertilityTracking } from '../../components/journeys/fertility/FertilityTracking';
import { CycleTimeline } from '../../components/journeys/fertility/CycleTimeline';
import { FertilityTips } from '../../components/journeys/fertility/FertilityTips';
import { FertilityCompass } from '../../components/journeys/fertility/FertilityCompass';
import { TreatmentOptions } from '../../components/journeys/fertility/TreatmentOptions';
import { EmotionalSanctuary } from '../../components/journeys/fertility/EmotionalSanctuary';
import { FertilityCTA } from '../../components/journeys/fertility/FertilityCTA';

export const Fertility: React.FC = () => {
    useEffect(() => { window.scrollTo(0, 0); }, []);
    return (
        <div style={{ width: '100%', overflowX: 'hidden' }}>
            <SiteHeader />
            <main>
                <HeroConstellation />
                <BodySimulator />
                <FertilityTracking />
                <CycleTimeline />
                <FertilityTips />
                <FertilityCompass />
                <TreatmentOptions />
                <EmotionalSanctuary />
                <FertilityCTA />
            </main>
            <Footer />
        </div>
    );
};
