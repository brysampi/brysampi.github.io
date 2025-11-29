import React, { useState, useEffect, useCallback } from 'react';
import { useGame } from '../context/GameContext';

const ClickCounter = () => {
    const [_counter, setCounter] = useState(0);
    const [_totalClicks, setTotalClicks] = useState(0);
    const inactivityTimer = React.useRef<number | undefined>(undefined);
    const { completeAchievement } = useGame();

    const FADE_OUT_DURATION_MS = 1000; // Duration for both fade and upward motion
    const RESET_INACTIVITY_MS = 1000; // Time after which the counter resets due to inactivity

    useEffect(() => {
        // Load totalClicks from local storage on component mount
        const storedTotalClicks = localStorage.getItem('totalClicks');
        if (storedTotalClicks) { setTotalClicks(parseInt(storedTotalClicks, 10)); }

        // Add event listener for local storage changes from other tabs
        const handleStorageChange = (event: StorageEvent) => {
            if (event.key === 'totalClicks' && event.newValue) {
                setTotalClicks(parseInt(event.newValue, 10));
            }
        };

        window.addEventListener('storage', handleStorageChange);

        return () => window.removeEventListener('storage', handleStorageChange); // Clean up the event listener
    }, []);

    const createNumberAnimation = useCallback((x: number, y: number, count: number) => {
        const numberEl = document.createElement('div');
        numberEl.textContent = `x${count}`;

        // Read the primary color from the CSS variable defined in index.css
        const textColor = getComputedStyle(document.documentElement).getPropertyValue('--color-primary').trim() || 'yellow';
        const textShadow = '1px 1px 2px black'; // Consistent shadow for yellow text

        Object.assign(numberEl.style, {
            position: 'absolute',
            left: `${x}px`,
            top: `${y}px`,
            pointerEvents: 'none',
            transform: 'translate(-50%, -50%)',
            color: textColor, // Apply yellow color
            textShadow: textShadow, // Apply black shadow
            fontSize: '1.5rem',
            transition: `opacity ${FADE_OUT_DURATION_MS}ms ease-out, transform ${FADE_OUT_DURATION_MS}ms ease-in-out`,
            opacity: '1',
        });

        document.body.appendChild(numberEl);

        // Trigger the animation
        requestAnimationFrame(() => {
            numberEl.style.opacity = '0';
            numberEl.style.transform = 'translate(-50%, -150%)';
        });

        // Remove the element after the animation completes
        setTimeout(() => {
            numberEl.remove();
        }, FADE_OUT_DURATION_MS);
    }, [FADE_OUT_DURATION_MS]);

    const handleClick = useCallback((e: MouseEvent) => {
        // Check if the click target is within the GameHUD
        const target = e.target as HTMLElement;
        if (target.closest('#game-hud')) {
            return;
        }

        // Clear and reset inactivity timer
        clearTimeout(inactivityTimer.current);
        inactivityTimer.current = window.setTimeout(() => setCounter(0), RESET_INACTIVITY_MS);

    // Update total persistent count
        setTotalClicks(prevTotal => {
            const newTotal = prevTotal + 1;
            localStorage.setItem('totalClicks', newTotal.toString());
            return newTotal;
        });

        // Update visible count and trigger animation
        setCounter(prevCounter => {
            const newCount = prevCounter + 1;
            createNumberAnimation(e.clientX + 20, e.clientY - 10, newCount);
            return newCount;
        });
    }, [RESET_INACTIVITY_MS, createNumberAnimation]);

    // Check for achievement (ID 2: Clicker - 10 clicks)
    useEffect(() => {
        if (_totalClicks >= 10) {
            completeAchievement(2);
        }
    }, [_totalClicks, completeAchievement]);

    useEffect(() => {
        document.addEventListener('click', handleClick);
        return () => {
            document.removeEventListener('click', handleClick);
            clearTimeout(inactivityTimer.current);
        };
    }, [handleClick]);

    return null; // This component now only handles logic and renders nothing itself.
};

export default ClickCounter;
