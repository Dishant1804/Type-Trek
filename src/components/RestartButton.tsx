
const RestartButton = () =>{

    const handleClick = () =>{
        window.location.reload();
    }

    return <button onClick={handleClick} className="text-primary-text-yellow text-xl">
        Restart
    </button>
}

export default RestartButton;