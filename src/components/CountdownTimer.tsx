import useCountdownTimer from '../hooks/useCountdownTimer';


const CountdownTimer = () => {
    const { time, startCountdown, resetCountdown } = useCountdownTimer();
    
    return <div className='text-primary-text-yellow text-lg mb-4'>
        Time: {time}s
    </div>
}

export default CountdownTimer;