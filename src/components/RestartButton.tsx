import { useRef } from "react";

const RestartButton = ({onRestart : handleRestart } : {onRestart : ()=> void}) =>{
    const buttonRef = useRef<HTMLButtonElement>(null);

    const handleClick = () =>{
        buttonRef.current?.blur();
        handleRestart();
    }

    return <button ref={buttonRef} onClick={handleClick} className="text-primary-text-yellow text-xl">
        Restart
    </button>
}

export default RestartButton;