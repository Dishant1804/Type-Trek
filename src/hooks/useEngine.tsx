import { useCallback, useEffect, useState } from 'react'
import useTypings from './useTypings';
import useFetchWords from './useFetchwords';
import useCountdownTimer from './useCountdownTimer';


type State = "start" | "run" | "finish";

const useEngine = () => {
  const [state, setState] = useState<State>("start");
  const [errorCount , setErrorCount] = useState<number>(0);
  const {time , startCountdown ,resetCountdown } = useCountdownTimer();
  const isFinished = state === 'finish'
  const { typed, cursor , setTyped , setCursor} = useTypings(isFinished);
  let {totalTyped} = useTypings(isFinished);
  const { words , setInitialWords , fetchData} = useFetchWords();

  const areWordsFinished = cursor === words.join(' ').length;
  const restart = useCallback(()=>{
    setTyped("");
    fetchData();
    setCursor(0);
    setState('start');
    resetCountdown();
    totalTyped = 0;
  },[fetchData , setState , setTyped , resetCountdown , setCursor])


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

  useEffect(()=>{
    if(areWordsFinished && cursor > 0 && state === 'run'){
      setState('finish');
      resetCountdown();
    }
  },[cursor , areWordsFinished])

  return { state, setState, typed, totalTyped, words, time , errorCount , setErrorCount , setInitialWords , setTyped , restart}
}

export default useEngine;
