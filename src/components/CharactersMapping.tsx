import GeneratedCharacters from './GeneratedCharacters';
import useFetchWords from '../hooks/useFetchwords';
import UserTypings from './UserTypings';
import useEngine from '../hooks/useEngine';


const CharactersMapping = () => {
    const { words } = useFetchWords();
    const {typed} = useEngine();

    const characters = words.join(" ").split("");

    return <div className='relative text-3xl w-[1260px] h-auto content-center leading-relaxed break-all'>
        <GeneratedCharacters characters={characters} />
        <UserTypings characters={characters} userInput={typed} />
    </div>
}

export default CharactersMapping;