import { useEffect, useState } from 'react';
import axios from 'axios';

const useFetchWords = () => {
    const [words, setWords] = useState<string[]>([]);
    const [initialWords , setInitialWords] = useState<number>(20);

    const fetchData = async () => {
        try {
            const response = await axios.get(`https://random-word-api.vercel.app/api?words=${initialWords}`)
            setWords(response.data);
        }
        catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        fetchData();
    }, [setInitialWords , initialWords])

    return { words , fetchData , setInitialWords }

}

export default useFetchWords;