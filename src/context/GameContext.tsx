import React, { createContext, useContext, useState, useEffect, useCallback, useMemo, type ReactNode } from 'react';

export interface Achievement {
    id: number;
    title: string;
    description: string;
    completed: boolean;
}

export type ToastType = 'success' | 'error' | 'achievement';

export interface ToastMessage {
    id: string;
    message: string;
    type: ToastType;
}

interface GameContextType {
    achievements: Achievement[];
    notifications: ToastMessage[];
    completeAchievement: (id: number) => void;
    showToast: (message: string, type: ToastType) => void;
    clearNotification: (id: string) => void;
    visitSection: (sectionId: string, totalSections: number) => void;
}

const GameContext = createContext<GameContextType | undefined>(undefined);

const initialAchievements: Achievement[] = [
    { id: 1, title: "Explorer", description: "Visit all sections", completed: false },
    { id: 2, title: "Clicker", description: "Click 10 times", completed: false },
    { id: 3, title: "Speedster", description: "Navigate quickly between sections", completed: false },
];

export const GameProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [achievements, setAchievements] = useState<Achievement[]>(initialAchievements);
    const [notifications, setNotifications] = useState<ToastMessage[]>([]);
    const [visitedSections, setVisitedSections] = useState<Set<string>>(new Set());
    const [navigationHistory, setNavigationHistory] = useState<number[]>([]);

    // Load achievements from localStorage on mount
    useEffect(() => {
        const storedCompletedIds = localStorage.getItem('completedAchievements');
        if (storedCompletedIds) {
            const completedIds: number[] = JSON.parse(storedCompletedIds);
            setAchievements(prev => prev.map(ach => ({
                ...ach,
                completed: completedIds.includes(ach.id)
            })));
        }
    }, []);

    const showToast = useCallback((message: string, type: ToastType) => {
        const id = Date.now().toString() + Math.random().toString(36).substr(2, 9);
        setNotifications(prev => [...prev, { id, message, type }]);
    }, []);

    // Track previous achievements to detect changes
    const prevAchievementsRef = React.useRef<Achievement[]>(initialAchievements);

    // Check for newly completed achievements and show toast
    useEffect(() => {
        const prevAchievements = prevAchievementsRef.current;
        achievements.forEach(achievement => {
            const prevAchievement = prevAchievements.find(a => a.id === achievement.id);
            if (achievement.completed && prevAchievement && !prevAchievement.completed) {
                showToast(achievement.title, 'achievement');
            }
        });
        prevAchievementsRef.current = achievements;
    }, [achievements, showToast]);

    const completeAchievement = useCallback((id: number) => {
        setAchievements(prev => {
            const achievement = prev.find(a => a.id === id);
            if (achievement && !achievement.completed) {
                // Update persistence
                const updatedAchievements = prev.map(a => a.id === id ? { ...a, completed: true } : a);
                const completedIds = updatedAchievements.filter(a => a.completed).map(a => a.id);
                localStorage.setItem('completedAchievements', JSON.stringify(completedIds));

                return updatedAchievements;
            }
            return prev;
        });
    }, []);

    const visitSection = useCallback((sectionId: string, totalSections: number) => {
        // Explorer Achievement Logic
        setVisitedSections(prev => {
            const newSet = new Set(prev).add(sectionId);
            if (newSet.size >= totalSections) {
                completeAchievement(1); // Explorer
            }
            return newSet;
        });

        // Speedster Achievement Logic
        const now = Date.now();
        setNavigationHistory(prev => {
            const newHistory = [...prev, now].slice(-5); // Keep last 5 timestamps

            // Check if we have at least 4 visits (3 intervals)
            if (newHistory.length >= 4) {
                const timeSpan = newHistory[newHistory.length - 1] - newHistory[newHistory.length - 4];
                // If 3 transitions happened within 2 seconds (2000ms)
                if (timeSpan < 2000) {
                    completeAchievement(3); // Speedster
                }
            }
            return newHistory;
        });
    }, [completeAchievement]);

    const clearNotification = useCallback((id: string) => {
        setNotifications(prev => prev.filter(n => n.id !== id));
    }, []);

    const value = React.useMemo(() => ({
        achievements,
        notifications,
        completeAchievement,
        showToast,
        clearNotification,
        visitSection
    }), [achievements, notifications, completeAchievement, showToast, clearNotification, visitSection]);

    return (
        <GameContext.Provider value={value}>
            {children}
        </GameContext.Provider>
    );
};

export const useGame = () => {
    const context = useContext(GameContext);
    if (!context) {
        throw new Error('useGame must be used within a GameProvider');
    }
    return context;
};
