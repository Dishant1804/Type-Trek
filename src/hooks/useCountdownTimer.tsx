import { useCallback, useEffect, useRef, useState } from 'react';
import useEngine from './useEngine';

//TODO- fix the setstate as it causes both start countdown and reset countdown to run due to dependency array 

const useCountdownTimer = (initialTime: number = 10) => {
    const [time, setTime] = useState<number>(initialTime);
    const intervalRef = useRef<number | null>(null);
    const { state, setState } = useEngine();

    const startCountdown = useCallback(() => {
        setState('run');
        console.log(state);
        if (!intervalRef.current) {
            intervalRef.current = setInterval(() => {
                setTime((prevCount) => {
                    if (prevCount === 0) {
                        if (intervalRef.current) {
                            clearInterval(intervalRef.current);
                            intervalRef.current = null;
                        }
                        setState('finish');
                        console.log(state);
                        return prevCount;
                    }
                    return prevCount - 1;
                });
            }, 1000);
        }
    }, []);

    const resetCountdown = useCallback(() => {
        setState('start')
        console.log(state);
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
        setTime(initialTime);
    }, [initialTime]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.code && !intervalRef.current) {
                startCountdown();
            }
        };

        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
                intervalRef.current = null;
            }
        };
    }, [startCountdown]);

    return { time, startCountdown, resetCountdown };
};

export default useCountdownTimer;
