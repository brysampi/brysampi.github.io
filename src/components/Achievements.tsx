import React from 'react';
import { useGame } from '../context/GameContext';

interface AchievementsProps {
    isOpen: boolean;
    onClose: () => void;
}

const Achievements: React.FC<AchievementsProps> = ({ isOpen, onClose }) => {
    const { achievements } = useGame();

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 backdrop-blur-sm" onClick={onClose}>
            <div className="glass-pane w-full max-w-md p-6 relative" onClick={(e) => e.stopPropagation()}>
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
                >
                    ✕
                </button>
                <h2 className="text-2xl font-bold mb-4 text-primary">Achievements</h2>
                <div className="space-y-4 max-h-[60vh] overflow-y-auto no-scrollbar">
                    {achievements.map((achievement) => (
                        <div key={achievement.id} className={`p-4 rounded-lg border ${achievement.completed ? 'border-primary/50 bg-primary/10' : 'border-white/10 bg-white/5'}`}>
                            <div className="flex justify-between items-start">
                                <h3 className={`font-bold ${achievement.completed ? 'text-primary' : 'text-white/70'}`}>{achievement.title}</h3>
                                {achievement.completed && <span className="text-xs bg-primary text-black px-2 py-0.5 rounded-full">Completed</span>}
                            </div>
                            <p className="text-sm text-white/60 mt-1">{achievement.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Achievements;
