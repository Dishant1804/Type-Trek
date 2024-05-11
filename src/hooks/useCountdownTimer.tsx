import { useCallback, useEffect, useRef, useState } from 'react';
import useEngine from './useEngine';

const useCountdownTimer = (initialTime: number = 10) => {
    const [time, setTime] = useState<number>(initialTime);
    const intervalRef = useRef<number | null>(null);
    const {state , setState} = useEngine();

    const startCountdown = useCallback(() => {
        setState('run');
        console.log(state);
        if (!intervalRef.current) {
            intervalRef.current = setInterval(() => {
                setTime((prevCount) => prevCount - 1);
            }, 1000);
        }
        if(time === 0){
            setState('finish');
        }
    }, []);

    const resetCountdown = useCallback(() => {
        setState('start')
        console.log(state);
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
