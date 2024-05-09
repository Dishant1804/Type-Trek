import GeneratedCharacters from './GeneratedCharacters';
import useFetchWords from '../hooks/useFetchwords';
import UserTypings from './UserTypings';


const CharactersMapping = () => {
    const { words } = useFetchWords();

    const characters = words.join(" ").split("");

    return <div>
        <GeneratedCharacters characters={characters} />
        <UserTypings characters={characters} />
    </div>
}

export default CharactersMapping;