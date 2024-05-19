import { useState } from 'react'
import useTypings from './useTypings';
import useFetchWords from './useFetchwords';


type State = "start" | "run" | "finish";


const useEngine = () => {
    const [state, setState] = useState<State>("start");
    const {typed , totalTyped} = useTypings(state !== 'finish');
    const {words} = useFetchWords();


    return { state , setState , typed , totalTyped ,words}
}

export default useEngine;