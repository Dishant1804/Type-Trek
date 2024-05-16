
interface GeneratedCharactersProps {
    characters: string[] 
}

const GeneratedCharacters = ({characters} : GeneratedCharactersProps) => {
    
    return <div className='text-slate-600'>
        {characters.map((char, index) => (
            <span key={index}>{char}</span>
        ))}
    </div>
}

export default GeneratedCharacters