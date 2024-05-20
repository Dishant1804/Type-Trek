import useEngine from '../hooks/useEngine';
import CharactersMapping from './CharactersMapping';
import CountdownTimer from './CountdownTimer';
import Result from './Result';
import RestartButton from './RestartButton';


const TypingPage = () => {
    const {words,totalTyped , time , errorCount , setErrorCount} = useEngine();
    const {state} = useEngine();
    
    return (
        <div className='mt-60 grid place-content-center'>
            <div>
                <CountdownTimer time={time}/>
            </div>
            <div className='relative text-3xl w-auto h-[300px] leading-relaxed break-all'>
                <CharactersMapping words={words} setErrorCount={setErrorCount}/>
            </div>
            <div className='grid place-content-center w-[1260px]'>
                <RestartButton/>
            </div>
            <div className='mt-8 '>
                {state === 'finish' && (
                    <Result errorCount={errorCount} total={totalTyped}/>
                )}
            </div>
        </div> 
    )
};

export default TypingPage;
