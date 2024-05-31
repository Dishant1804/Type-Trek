import cn from 'classnames'
import Caret from './Caret';
import { useEffect, useRef, useState } from 'react';
interface UserTypingsProps {
    characters: string[],
    userInput: string,
    setErrorCount: React.Dispatch<React.SetStateAction<number>>,
}

const UserTypings = ({ userInput, characters, setErrorCount }: UserTypingsProps) => {
    const [typedCharacters, setTypedCharacters] = useState<string[]>([]);
    const maxErrorRef = useRef<number>(0);

    useEffect(() => {
        setTypedCharacters(userInput.split(''));
    }, [userInput]);

    useEffect(() => {
        let errorCount = 0;
        for (let i = 0; i < userInput.length; i++) {
            if (userInput[i] !== characters[i]) {
                errorCount++;
                if (errorCount > maxErrorRef.current) {
                    maxErrorRef.current = errorCount;
                }
            }
        }
        setErrorCount(maxErrorRef.current);
    }, [userInput, characters])

    return <div className="absolute inset-0">
        {typedCharacters.map((char, index) => (
            <Character
                key={`${char}_${index}`}
                actual={char}
                expected={characters[index]} />
        ))}
        <Caret />
    </div>
}

interface CharacterProps {
    actual: string,
    expected: string,
}

const Character = ({ actual, expected }: CharacterProps) => {

    const isCorrect = actual === expected;
    const isWhiteSpace = expected === " ";

    return <span className={cn({
        "text-red-500": !isCorrect && !isWhiteSpace,
        "text-primary-text-yellow ": isCorrect && !isWhiteSpace,
        "bg-red-500/50": !isCorrect && isWhiteSpace,
    })}>{expected}</span>
}


export default UserTypings;