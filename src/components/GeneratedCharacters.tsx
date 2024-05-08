
interface GeneratedCharactersProps {
    characters: string[] 
}

const GeneratedCharacters: React.FC<GeneratedCharactersProps> = ({characters}) => {
    
    return <div className='text-slate-600 text-3xl w-[1080px] h-auto content-center'>
        {characters.map((char, index) => (
            <span key={index}>{char}</span>
        ))}
    </div>
}

export default GeneratedCharacters