import useEngine from '../hooks/useEngine';
import CharactersMapping from './CharactersMapping';
import CountdownTimer from './CountdownTimer';
import Result from './Result';
import RestartButton from './RestartButton';
import Options from './Options';
import { useState, useEffect } from 'react';


const TypingPage = () => {
    const { words, totalTyped, time, errorCount, setErrorCount, state, setInitialWords, typed, setTyped, restart } = useEngine();

    const [showAlert, setShowAlert] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 1024) {
                setShowAlert(true);
            } else {
                setShowAlert(false);
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className='mt-32 grid place-content-center'>
            {showAlert ?
                <div className='text-primary-text-yellow items-center h-[500px] flex '>
                    This is a Speed Typing application <br />
                    For a better experience, please use a Computer or Laptop
                </div> : <>
                <div>
                    <Options
                        setInitialWords={setInitialWords}
                        setTyped={setTyped}
                        state={state} />
                </div>
                <div className='mt-28'>
                    <CountdownTimer time={time} />
                </div>
                <div className='relative text-3xl w-auto h-[250px] leading-relaxed break-all'>
                    <CharactersMapping
                        words={words}
                        setErrorCount={setErrorCount}
                        typed={typed} />
                </div>
                <div className='grid place-content-center w-[1260px]'>
                    <RestartButton
                        restart={restart}
                    />
                </div>
                <div className='mt-8 '>
                    {state === 'finish' && (
                        <Result
                            errorCount={errorCount}
                            total={totalTyped} />
                    )}
                </div>
            </>}
        </div>
    )
};

export default TypingPage;
