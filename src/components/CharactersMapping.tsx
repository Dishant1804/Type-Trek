import GeneratedCharacters from './GeneratedCharacters';
import useFetchWords from '../hooks/useFetchwords';


const CharactersMapping = () => {
    const { words } = useFetchWords();

    const characters = words.join(" ").split("");

    return <div>
        <GeneratedCharacters characters={characters} />
    </div>
}

export default CharactersMapping;