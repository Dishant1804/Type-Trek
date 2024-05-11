import { useState } from 'react'
import useTypings from './useTypings';


type State = "start" | "run" | "finish"


const useEngine = () => {
    const [state, setState] = useState<State>("start");
    const {typed} = useTypings(state !== 'finish');
    
    return { state , setState ,typed}
}

export default useEngine;