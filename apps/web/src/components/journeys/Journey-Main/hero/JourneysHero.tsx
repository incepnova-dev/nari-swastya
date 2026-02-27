import React, { useEffect, useRef } from 'react';
import { initJourneysHeroAnimations } from '../../../../scripts/journeys';
import { HeroBackgrounds } from './HeroBackgrounds';
import { HeroContent } from './HeroContent';
import { LifecycleVisual } from './LifecycleVisual';
import { HeroBadgeProps } from './HeroBadge';
import { HeroTitleProps } from './HeroTitle';
import {
    StatItem,
    CTAButtonData,
    defaultBadge,
    defaultTitle,
    defaultSubtitle,
    defaultStats,
    defaultCTAButtons
} from '../../../../data';

export interface JourneysHeroProps {
    badge?: HeroBadgeProps;
    title?: Omit<HeroTitleProps, 'className'>;
    subtitle?: string;
    stats?: StatItem[];
    ctaButtons?: CTAButtonData[];
    className?: string;
}

export const JourneysHero: React.FC<JourneysHeroProps> = ({
    badge = defaultBadge,
    title = defaultTitle,
    subtitle = defaultSubtitle,
    stats = defaultStats,
    ctaButtons = defaultCTAButtons,
    className = '',
}) => {
    const particleCanvasRef = useRef<HTMLCanvasElement>(null);
    const petalLayerRef = useRef<HTMLDivElement>(null);
    const lifecycleCanvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const cleanup = initJourneysHeroAnimations(
            particleCanvasRef.current,
            petalLayerRef.current,
            lifecycleCanvasRef.current
        );

        return cleanup;
    }, []);

    return (
        <section id="hero" className={`journeys-hero-section ${className}`.trim()}>
            <div className="journeys-hero">
                <HeroBackgrounds
                    particleCanvasRef={particleCanvasRef}
                    petalLayerRef={petalLayerRef}
                />

                <HeroContent
                    badge={badge}
                    title={title}
                    subtitle={subtitle}
                    stats={stats}
                    ctaButtons={ctaButtons}
                />

                <LifecycleVisual ref={lifecycleCanvasRef} />
            </div>
        </section>
    );
};

export default JourneysHero;
