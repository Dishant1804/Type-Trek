import { useCallback, useEffect, useState } from 'react'
import useTypings from './useTypings';
import useFetchWords from './useFetchwords';
import useCountdownTimer from './useCountdownTimer';


type State = "start" | "run" | "finish";

const INITIAL_TIME = 10;

const useEngine = () => {
  const [state, setState] = useState<State>("start");
  const [errorCount , setErrorCount] = useState<number>(0);
  const {time , startCountdown , resetCountdown} = useCountdownTimer(INITIAL_TIME);
  const isFinished = state === 'finish'
  const { typed, totalTyped, cursor , clearTyped , resetTotalTyped} = useTypings(isFinished);
  const { words , fetchData} = useFetchWords();

  useEffect(() => {
    if (state === 'start' && cursor > 0) {
      setState('run');
      startCountdown();
    }
  }, [state, cursor]);

  useEffect(() => {
    if (time === 0 && state === 'run') {
      setState('finish');
    }
  }, [time, state]);

  const restart = useCallback(()=>{
    resetCountdown();
    resetTotalTyped();
    setState('start');
    fetchData();
    clearTyped();
    setErrorCount(0);
  },[resetTotalTyped , clearTyped , resetCountdown , fetchData ])

  return { state, setState, typed, totalTyped, words, time , errorCount , setErrorCount , restart}
}

export default useEngine;
