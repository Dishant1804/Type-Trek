import { useEffect, useState } from 'react'
import useTypings from './useTypings';
import useFetchWords from './useFetchwords';
import useCountdownTimer from './useCountdownTimer';


type State = "start" | "run" | "finish";

const INITIAL_TIME = 10;

const useEngine = () => {
  const [state, setState] = useState<State>("start");
  const [errorCount , setErrorCount] = useState<number>(0);
  const {time , startCountdown} = useCountdownTimer(INITIAL_TIME);
  const isFinished = state === 'finish'
  const { typed, totalTyped, cursor } = useTypings(isFinished);
  const { words} = useFetchWords();

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


  return { state, setState, typed, totalTyped, words, time , errorCount , setErrorCount}
}

export default useEngine;
