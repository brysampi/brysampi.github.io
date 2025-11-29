import React, { useEffect, useState } from 'react';
import { useGame, type ToastMessage } from '../context/GameContext';

const ToastItem: React.FC<{ notification: ToastMessage; onDismiss: (id: string) => void; index: number }> = ({ notification, onDismiss, index }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Trigger entrance animation
        const enterTimer = setTimeout(() => setIsVisible(true), 10);

        // Trigger exit animation and dismissal
        const exitTimer = setTimeout(() => {
            setIsVisible(false);
            setTimeout(() => onDismiss(notification.id), 300); // Wait for exit animation
        }, 3000);

        return () => {
            clearTimeout(enterTimer);
            clearTimeout(exitTimer);
        };
    }, [notification.id, onDismiss]);

    const getStyles = () => {
        switch (notification.type) {
            case 'success':
                return {
                    icon: '✅',
                    gradient: 'from-green-500/20 to-emerald-500/20',
                    border: 'border-green-500/50',
                    titleColor: 'text-green-400',
                    shadow: 'shadow-green-500/20'
                };
            case 'error':
                return {
                    icon: '❌',
                    gradient: 'from-red-500/20 to-rose-500/20',
                    border: 'border-red-500/50',
                    titleColor: 'text-red-400',
                    shadow: 'shadow-red-500/20'
                };
            case 'achievement':
            default:
                return {
                    icon: '🏆',
                    gradient: 'from-yellow-500/20 to-amber-500/20',
                    border: 'border-yellow-500/50',
                    titleColor: 'text-yellow-400',
                    shadow: 'shadow-yellow-500/20'
                };
        }
    };

    const styles = getStyles();

    return (
        <div
            className={`transition-all duration-300 transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}
            style={{ marginBottom: '1rem' }}
        >
            <div className={`
                relative overflow-hidden
                flex items-center gap-4 p-4 pr-6
                bg-black/40 backdrop-blur-xl
                border ${styles.border} rounded-xl
                shadow-lg ${styles.shadow}
                min-w-[300px]
            `}>
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${styles.gradient} opacity-50`} />

                {/* Icon Container */}
                <div className="relative z-10 flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-2xl">
                    {styles.icon}
                </div>

                {/* Content */}
                <div className="relative z-10 flex-1">
                    <h4 className={`font-bold text-sm uppercase tracking-wider mb-0.5 ${styles.titleColor}`}>
                        {notification.type === 'achievement' ? 'Achievement Unlocked!' : notification.type === 'error' ? 'Error' : 'Success'}
                    </h4>
                    <p className="text-white/90 font-medium text-sm leading-tight">
                        {notification.message}
                    </p>
                </div>

                {/* Progress Bar */}
                <div className="absolute bottom-0 left-0 h-0.5 bg-white/20 w-full">
                    <div className={`h-full ${styles.titleColor.replace('text-', 'bg-')} animate-[shrink_3s_linear_forwards]`} />
                </div>
            </div>
        </div>
    );
};

const Toast: React.FC = () => {
    const { notifications, clearNotification } = useGame();

    return (
        <div className="fixed top-6 right-6 z-[100] flex flex-col items-end pointer-events-none">
            {notifications.map((notification, index) => (
                <ToastItem
                    key={notification.id}
                    notification={notification}
                    onDismiss={clearNotification}
                    index={index}
                />
            ))}
        </div>
    );
};

export default Toast;
