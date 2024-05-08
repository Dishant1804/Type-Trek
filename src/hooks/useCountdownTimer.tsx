import { useCallback, useEffect, useRef, useState } from 'react';

const useCountdownTimer = (initialTime: number = 10) => {
    const [time, setTime] = useState<number>(initialTime);
    const intervalRef = useRef<number | null>(null);

    const startCountdown = useCallback(() => {
        if (!intervalRef.current) {
            intervalRef.current = setInterval(() => {
                setTime((prevCount) => prevCount - 1);
            }, 1000);
        }
    }, []);

    const resetCountdown = useCallback(() => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
            setTime(initialTime);
        }
    }, [initialTime]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.code == "space" && !intervalRef.current) {
                startCountdown();
            }
        };

        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, [startCountdown]);

    return { time, startCountdown, resetCountdown };
};

export default useCountdownTimer;
