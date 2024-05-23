
const RestartButton = () =>{

    const handleClick = () => {
        window.location.reload();
    };

    return <button tabIndex={-1} onClick={handleClick} className="text-primary-text-yellow text-xl hover:bg-slate-700/50 p-2">
        Restart
    </button>
}

export default RestartButton;