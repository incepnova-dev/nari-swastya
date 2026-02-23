import { useEffect } from 'react';

/**
 * Hook to initialize scroll reveal animations and section tracking.
 * Observes elements with the '.reveal' class and adds the '.visible' class.
 * Also tracks section intersections to update '.sp-dot' active states.
 */
export const useScrollReveal = () => {
    useEffect(() => {
        // 1. Reveal Observer
        const revealOptions = {
            threshold: 0.12,
            rootMargin: '0px 0px -50px 0px'
        };

        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    revealObserver.unobserve(entry.target);
                }
            });
        }, revealOptions);

        const revealElements = document.querySelectorAll('.reveal');
        revealElements.forEach((el) => revealObserver.observe(el));

        // 2. Section Observer for Progress Dots
        const sectionOptions = {
            threshold: 0.3
        };

        const sectionObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const id = entry.target.id;
                    // Reset all
                    document.querySelectorAll('.sp-dot').forEach((dot) => {
                        dot.classList.remove('active');
                    });
                    // Set active
                    const activeDot = document.querySelector(`.sp-dot[data-section="${id}"]`);
                    if (activeDot) {
                        activeDot.classList.add('active');
                    }
                }
            });
        }, sectionOptions);

        const sections = ['hero', 's1', 's2', 's3', 's4', 's5'];

        // Initial check and observation
        sections.forEach((id) => {
            const el = document.getElementById(id);
            if (el) {
                sectionObserver.observe(el);
            }
        });

        // Cleanup
        return () => {
            revealElements.forEach((el) => revealObserver.unobserve(el));
            revealObserver.disconnect();

            sections.forEach((id) => {
                const el = document.getElementById(id);
                if (el) sectionObserver.unobserve(el);
            });
            sectionObserver.disconnect();
        };
    }, []);
};
