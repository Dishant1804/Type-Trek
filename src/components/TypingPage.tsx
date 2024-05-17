import useCountdownTimer from '../hooks/useCountdownTimer';
import CharactersMapping from './CharactersMapping';
import CountdownTimer from './CountdownTimer';
import Result from './Result';


const TypingPage = () => {
    const {state} = useCountdownTimer();

    return (
        <div className='mt-60 grid place-content-center'>
            <div>
                <CountdownTimer/>
            </div>
            <div className='relative text-3xl w-auto leading-relaxed break-all'>
                <CharactersMapping />
            </div>
            <div className='mt-16'>
                {state === 'finish' && (
                    <Result/>
                )}
            </div>
        </div> 
    )
};

export default TypingPage;
