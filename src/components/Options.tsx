import React from "react";

type State = 'run' | 'finish' | 'start';

const Options = ({
    setInitialWords , 
    setTyped ,
    state
    }: {  
    setInitialWords: React.Dispatch<React.SetStateAction<number>> , 
    setTyped : React.Dispatch<React.SetStateAction<string>> , 
    state : State
    }) => {

    const handleClickWords = (value: number) => {
        if(state !=='run'){
            setInitialWords(value);
            setTyped("");
        }
    }

    return <div className="flex text-primary-text-yellow">
        <div className="flex w-[1260px] justify-center">
            <div className="flex w-[250px] justify-evenly">
                Words : 
                <button onClick={() => handleClickWords(10)}>10</button>
                <button onClick={() => handleClickWords(20)}>20</button>
                <button onClick={() => handleClickWords(30)}>30</button>
            </div>
        </div>
    </div>

}

export default Options