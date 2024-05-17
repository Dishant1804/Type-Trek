import { useEffect, useState } from 'react';
import axios from 'axios';

const INITIAL_WORDS = 20;

const useFetchWords = () => {
    const [words, setWords] = useState<string[]>([]);

    const fetchData = async () => {
        try {
            const response = await axios.get(`https://random-word-api.vercel.app/api?words=${INITIAL_WORDS}`)
            setWords(response.data);
        }
        catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        fetchData();
    }, [])

    return { words }

}

export default useFetchWords;