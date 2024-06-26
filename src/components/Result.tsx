import {motion} from 'framer-motion';


const Result = ({errorCount , total} : { errorCount : number , total : number}) =>{

    const initial = { opacity : 0};
    const animate = {opacity : 1};
    const duration = {duration : 0.3 };

    const accuracy = total > 0 ? (((total - errorCount) / total) * 100).toFixed(2) : '0.00';

    return <div className="text-primary-text-yellow flex flex-col items-center w-[1260px]">
        <motion.ul className="flex flex-col items-center space-y-3">
            <motion.li 
                initial={initial}
                animate={animate}
                className="text-xl font-semibold"
                transition={{...duration , delay : 0}}
            >
                Results
            </motion.li>
            <motion.li 
                initial={initial}
                animate={animate}
                className="text-lg"
                transition={{...duration , delay : 0.5}}
            >
                Accuracy : {accuracy}%
            </motion.li>
            <motion.li 
                initial={initial}
                animate={animate}
                className="text-lg text-red-500"
                transition={{...duration , delay : 1}}
            >
                Errors : {errorCount}
            </motion.li>
            <motion.li 
                initial={initial}
                animate={animate}
                className="text-lg"
                transition={{...duration , delay : 1.5}}
            >
                Typed : {total}
            </motion.li>
        </motion.ul>
    </div>

}

export default Result;