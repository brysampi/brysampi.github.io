import { useState, useEffect } from 'react';

interface GameHUDProps {
    sectionIds: string[];
    scrollContainerId: string;
}

const GameHUD = ({ sectionIds, scrollContainerId }: GameHUDProps) => {
    const [activeSection, setActiveSection] = useState(sectionIds[0] || '');

    useEffect(() => {
        const container = document.getElementById(scrollContainerId);
        if (!container) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { root: container, threshold: 0.5 } // Use the container for intersection
        );

        sectionIds.forEach((id) => {
            const element = document.getElementById(id);
            if (element) {
                observer.observe(element);
            }
        });

        return () => observer.disconnect();
    }, [sectionIds, scrollContainerId]);

    return (
        <nav id="game-hud" className="fixed bottom-2 left-1/2 z-50 flex -translate-x-1/2 gap-0.5 rounded p-0.5 sm:bottom-5 sm:gap-1 sm:p-1">
            {sectionIds.map((id, index) => (
                <a
                    key={id}
                    href={`#${id}`}
                    className={`relative flex h-[44px] w-[44px] items-center justify-center bg-black/50 font-mono text-xl text-white no-underline sm:h-[50px] sm:w-[50px] sm:text-2xl [image-rendering:pixelated] [text-shadow:2px_2px_#222] ${activeSection === id ? 'outline outline-2 outline-white' : ''}`}
                >{index + 1}</a>
            ))}
        </nav>
    );
};

export default GameHUD;