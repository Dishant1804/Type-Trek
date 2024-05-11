import cn from 'classnames'
interface UserTypingsProps {
    characters : string[]
    userInput : string
}

const UserTypings = ({userInput , characters}:UserTypingsProps) =>{
    const typedCharacters = userInput.split('');

    return <div className="absolute inset-0">
        {typedCharacters.map((char , index)=>{
            return <Character key={`${char}_${index}`} actual={char} expected={characters[index]}/>
        })}
    </div>  
}

const Character = ({actual , expected} : {actual : string , expected : string}) =>{
    const isCorrect = actual === expected;
    const isWhiteSpace = expected === " ";

    return <span className={cn({
        "text-red-500" : !isCorrect && !isWhiteSpace,
        "text-primary-text-yellow " : isCorrect && !isWhiteSpace,
        "text-red-500/50" : !isCorrect && isWhiteSpace,
    })}>{expected}</span>
}

export default UserTypings;