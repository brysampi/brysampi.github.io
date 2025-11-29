import { useState, useEffect } from 'react';
import Achievements from './Achievements';
import { useGame } from '../context/GameContext';

interface GameHUDProps {
    sectionIds: string[];
    scrollContainerId: string;
}

const GameHUD = ({ sectionIds, scrollContainerId }: GameHUDProps) => {
    const [activeSection, setActiveSection] = useState(sectionIds[0] || '');
    const [isAchievementsOpen, setIsAchievementsOpen] = useState(false);
    const { visitSection } = useGame();

    useEffect(() => {
        const container = document.getElementById(scrollContainerId);
        if (!container) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                        visitSection(entry.target.id, sectionIds.length);
                    }
                });
            },
            { root: container, threshold: 0.5 }
        );

        sectionIds.forEach((id) => {
            const element = document.getElementById(id);
            if (element) {
                observer.observe(element);
            }
        });

        return () => observer.disconnect();
    }, [sectionIds, scrollContainerId, visitSection]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            const key = parseInt(e.key, 10);
            if (!isNaN(key) && key >= 1 && key <= sectionIds.length) {
                e.preventDefault();
                const targetId = sectionIds[key - 1];
                const element = document.getElementById(targetId);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [sectionIds]);

    return (
        <>
            <nav id="game-hud" className="fixed bottom-2 left-1/2 z-50 flex -translate-x-1/2 gap-0.5 rounded p-0.5 sm:bottom-5 sm:gap-1 sm:p-1 items-center">
                {sectionIds.map((id, index) => (
                    <a
                        key={id}
                        href={`#${id}`}
                        onClick={(e) => {
                            e.preventDefault();
                            document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className={`relative flex h-[44px] w-[44px] items-center justify-center bg-black/50 font-mono text-xl text-white no-underline sm:h-[50px] sm:w-[50px] sm:text-2xl [image-rendering:pixelated] [text-shadow:2px_2px_#222] ${activeSection === id ? 'outline outline-2 outline-white' : ''}`}
                    >
                        {index + 1}
                    </a>
                ))}
                <button
                    onClick={() => setIsAchievementsOpen(true)}
                    className="relative flex h-[44px] w-[44px] items-center justify-center bg-black/50 font-mono text-xl text-white no-underline sm:h-[50px] sm:w-[50px] sm:text-2xl [image-rendering:pixelated] [text-shadow:2px_2px_#222] ml-2 hover:bg-black/70 transition-colors"
                    title="Achievements"
                >
                    🏆
                </button>
            </nav>
            <Achievements isOpen={isAchievementsOpen} onClose={() => setIsAchievementsOpen(false)} />
        </>
    );
};

export default GameHUD;
