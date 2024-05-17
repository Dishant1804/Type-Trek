import cn from 'classnames'
import Caret from './Caret';
import { useEffect, useRef, useState } from 'react';
interface UserTypingsProps {
    characters: string[]
    userInput: string
}

const UserTypings = ({ userInput, characters }: UserTypingsProps) => {
    const [typedCharacters, setTypedCharacters] = useState<string[]>([]);

    useEffect(() => {
        setTypedCharacters(userInput.split(''));
    }, [userInput]);

    return <div className="absolute inset-0">
        {typedCharacters.map((char, index) => (
            <Character key={`${char}_${index}`} actual={char} expected={characters[index]}/>
        ))}
        <Caret/>
    </div>  
}

interface CharacterProps {
    actual: string,
    expected: string,
}

const Character = ({ actual, expected }: CharacterProps ) => {

    const isCorrect = actual === expected;
    const isWhiteSpace = expected === " ";

    return <span className={cn({
        "text-red-500": !isCorrect && !isWhiteSpace,
        "text-primary-text-yellow ": isCorrect && !isWhiteSpace,
        "bg-red-500/50": !isCorrect && isWhiteSpace,
    })}>{expected}</span>
}


export default UserTypings ;