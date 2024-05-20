import { useCallback, useEffect, useRef, useState } from 'react';

const useCountdownTimer = (INITIAL_TIME : number) => {
    const [time, setTime] = useState<number>(INITIAL_TIME);
    const intervalRef = useRef<number | null>(null);
    const isTimerEnded = time <= 0;
    const isRunning = intervalRef.current != null;


    const startCountdown = useCallback(() => {
        if (!isTimerEnded && !isRunning) {
            intervalRef.current = setInterval(() => {
                setTime((prevCount) =>  prevCount - 1);
            }, 1000);
        }
    }, [setTime , isTimerEnded , isRunning]);

    const resetCountdown = useCallback(() => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
        setTime(INITIAL_TIME);
    }, [INITIAL_TIME]);

    useEffect(()=>{
        if(isTimerEnded && intervalRef.current){
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    },[isTimerEnded]);

    useEffect(() => {
        return () => clearInterval(intervalRef.current!);
    }, []);
  

    return { time, startCountdown, resetCountdown };
};

export default useCountdownTimer;
