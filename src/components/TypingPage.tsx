import CharactersMapping from './CharactersMapping';
import CountdownTimer from './CountdownTimer';


const TypingPage = () => {

    return (
        <div className='h-screen grid place-content-center'>
            <div>
                <CountdownTimer/>
            </div>
            <div className='relative text-3xl w-auto leading-relaxed break-all'>
                <CharactersMapping />
            </div>
        </div> 
    )
};

export default TypingPage;
