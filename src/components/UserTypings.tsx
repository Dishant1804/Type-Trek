// import cn from 'classnames'
interface UserTypingsProps {
    characters: string[]
    userInput: string
}

const UserTypings = ({ userInput, characters }: UserTypingsProps) => {
    const typedCharacters = userInput.split("");

    return <div className="absolute inset-0">
        {typedCharacters.map((char, index) => {
            return <>
                <Character key={`${char}_${index}`} actual={char} expected={characters[index]} />
            </>
        })}
    </div>
}

const Character = ({ actual, expected }: { actual: string, expected: string }) => {
    const isCorrect = actual === expected;
    const isWhiteSpace = expected === " ";

    return <>
        {isCorrect && !isWhiteSpace && (
            <span className='text-primary-text-yellow'>{expected}</span>
        )}
        {!isCorrect && isWhiteSpace &&(
            <span className='text-red-500/55'>{actual}</span>
        )}
        {!isCorrect && !isWhiteSpace && (
            <span className="text-red-500">{expected}</span>
        )}
    </>
}   

export default UserTypings;