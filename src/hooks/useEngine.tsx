import { useEffect, useState } from 'react'
import useTypings from './useTypings';
import useFetchWords from './useFetchwords';
import useCountdownTimer from './useCountdownTimer';


type State = "start" | "run" | "finish";

const useEngine = () => {
  const [state, setState] = useState<State>("start");
  const [errorCount , setErrorCount] = useState<number>(0);
  const {time , startCountdown ,resetCountdown } = useCountdownTimer();
  const isFinished = state === 'finish'
  const { typed, totalTyped, cursor , setTyped } = useTypings(isFinished);
  const { words , setInitialWords } = useFetchWords();

  const arewordsFinished = cursor === words.join(' ').length;
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
    if(arewordsFinished && cursor > 0 && state === 'run'){
      setState('finish');
      resetCountdown();
    }
  },[cursor , arewordsFinished])


  return { state, setState, typed, totalTyped, words, time , errorCount , setErrorCount , setInitialWords , setTyped}
}

export default useEngine;
