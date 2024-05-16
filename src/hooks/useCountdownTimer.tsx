import { useCallback, useEffect, useRef, useState } from 'react';
import useEngine from './useEngine';

const useCountdownTimer = (initialTime: number = 10) => {
    const [time, setTime] = useState<number>(initialTime);
    const intervalRef = useRef<number | null>(null);
    const { state, setState } = useEngine();
    const stateRef = useRef(state);

    useEffect(() => {
        stateRef.current = state;
    }, [state]);

    const startCountdown = useCallback(() => {
        if (!intervalRef.current) {
            setState('run');
            intervalRef.current = setInterval(() => {
                setTime((prevCount) => {
                    if (prevCount === 0) {
                        if (intervalRef.current) {
                            clearInterval(intervalRef.current);
                            intervalRef.current = null;
                            setState(prevState => prevState === 'run' ? 'finish' : prevState);
                        }
                        return prevCount;
                    }
                    if(stateRef.current === 'run'){
                        return prevCount - 1;
                    }
                    return prevCount;
                });
            }, 1000);
        }
    }, []);

    const resetCountdown = useCallback(() => {
        setState('start')
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
        setTime(initialTime);
    }, [initialTime]);

    useEffect(() => {
        console.log(state);
    }, [state]);    

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.code && !intervalRef.current && stateRef.current === 'start') {
                startCountdown();
            }
        };
        

        if(stateRef.current !== 'finish'){
            document.addEventListener('keydown', handleKeyDown);
        }

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
