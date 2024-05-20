import GeneratedCharacters from './GeneratedCharacters';
import UserTypings from './UserTypings';
import useEngine from '../hooks/useEngine';


const CharactersMapping = ({words , setErrorCount} : {words : string[] , setErrorCount : React.Dispatch<React.SetStateAction<number>>}) => {
    const {typed} = useEngine();

    const characters = words.join(" ").split("");

    return <div className='relative text-3xl w-[1260px] content-center leading-relaxed break-all'>
        <GeneratedCharacters characters={characters} />
        <UserTypings characters={characters} userInput={typed} setErrorCount={setErrorCount} />
    </div>
}

export default CharactersMapping;