import React, { useEffect } from 'react';
import { SiteHeader } from '../../SiteHeader';
import { Footer } from '../../Footer';
import { JourneysHero } from '../hero';
import { JourneyMap } from '../map';
import '../../../styles/journey/journeys.css';

export const Journeys: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <SiteHeader />
            <main className="journeys-page">
                <JourneysHero />
                <JourneyMap />

                {/* 
            Future Sections will be added here:
            - Section 1: Conception & Fertility
            - Section 2: Pregnancy Journey
            - Section 3: Newborn & Postpartum
            - Section 4: Body & Mind Health
            - Section 5: Prevention & Community
          */}
            </main>
            <Footer />
        </div>
    );
};

export default Journeys;
