import { useState } from 'react'


type State = "start" | "run" | "finish"

const useEngine = () => {
    const [state, setState] = useState<State>("start")
    
    return { state, setState }
}

export default useEngine;