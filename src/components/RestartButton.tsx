import { useRef } from "react";

const RestartButton = ({restart} : {restart : ()=>void}) =>{
    const buttonRef = useRef<HTMLButtonElement>(null);

    const handleClick = () => {
        buttonRef.current?.blur();
        restart();
    };

    return <button
        ref={buttonRef}
        tabIndex={-1}
        onClick={handleClick}
        className="text-primary-text-yellow text-xl hover:bg-slate-700/50 p-2">
        Restart
    </button>
}

export default RestartButton;