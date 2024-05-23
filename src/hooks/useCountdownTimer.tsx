import { useCallback, useEffect, useRef, useState } from 'react';

const useCountdownTimer = () => {
    const [time, setTime] = useState<number>(30);
    const intervalRef = useRef<number | null>(null);
    const isTimerEnded = time <= 0;
    const isRunning = intervalRef.current != null;


    const startCountdown = useCallback(() => {
        if (!isTimerEnded && !isRunning) {
            intervalRef.current = setInterval(() => {
                setTime((prevcount) =>  prevcount - 1);
            }, 1000);
        }
    }, [setTime , isTimerEnded , isRunning]);

    const resetCountdown = useCallback(() => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
        setTime(30);
    }, []);

    useEffect(()=>{
        if(isTimerEnded && intervalRef.current){
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    },[isTimerEnded]);

    useEffect(() => {
        return () => clearInterval(intervalRef.current!);
    }, []);
  

    return { time, startCountdown, resetCountdown};
};

export default useCountdownTimer;
