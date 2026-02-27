import React, { useEffect } from 'react';
import { useScrollReveal } from '../../../../hooks/useScrollReveal';
import { SiteHeader } from '../../../SiteHeader';
import { Footer } from '../../../Footer';
import { JourneysHero } from '../hero';
import { JourneyMap } from '../map';
import { ScrollProgress } from '../scroll-progress/ScrollProgress';
import { Section1 } from '../sections/section1-conception/Section1';
import { Section2 } from '../sections/section2-pregnancy/Section2';
import { Section3 } from '../sections/section3-newborn/Section3';
import { Section4 } from '../sections/section4-body-mind/Section4';
import { Section5 } from '../sections/section5-prevention/Section5';
import '../../../../styles/journey/journeys.css';

export const Journeys: React.FC = () => {
    useScrollReveal();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <SiteHeader />
            <ScrollProgress />
            <main className="journeys-page">
                <section id="hero">
                    <JourneysHero />
                </section>

                <JourneyMap />

                <Section1 />
                <Section2 />
                <Section3 />
                <Section4 />
                <Section5 />
            </main>
            <Footer />
        </div>
    );
};

export default Journeys;
