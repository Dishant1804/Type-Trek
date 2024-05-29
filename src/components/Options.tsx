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
        if(state === 'start'){
            setInitialWords(value);
            setTyped("");
        }
    }

    return <div className="flex text-primary-text-yellow">
        <div className="flex w-[1260px] justify-center bg-[]">
            <div className="flex w-[250px] justify-evenly p-1">
                Words : 
                <button className="hover:bg-slate-700 duration-200 h-6 w-6" onClick={() => handleClickWords(10)}>10</button>
                <button className="hover:bg-slate-700 duration-200" onClick={() => handleClickWords(20)}>20</button>
                <button className="hover:bg-slate-700 duration-200" onClick={() => handleClickWords(30)}>30</button>
                <button className="hover:bg-slate-700 duration-200" onClick={() => handleClickWords(50)}>50</button>
            </div>
        </div>
    </div>

}

export default Options