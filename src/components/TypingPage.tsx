import { useState } from 'react';
import useCountdownTimer from '../hooks/useCountdownTimer';
import useEngine from '../hooks/useEngine';
import CharactersMapping from './CharactersMapping';
import CountdownTimer from './CountdownTimer';
import Result from './Result';


const TypingPage = () => {
    const {words,totalTyped } = useEngine();
    const {state} = useCountdownTimer();
    const [errorCount , setErrorCount] = useState<number>(0);
    return (
        <div className='mt-60 grid place-content-center'>
            <div>
                <CountdownTimer/>
            </div>
            <div className='relative text-3xl w-auto leading-relaxed break-all'>
                <CharactersMapping words={words} setErrorCount={setErrorCount}/>
            </div>
            <div className='mt-16'>
                {state === 'finish' && (
                    <Result errorCount={errorCount} total={totalTyped}/>
                )}
            </div>
        </div> 
    )
};

export default TypingPage;
