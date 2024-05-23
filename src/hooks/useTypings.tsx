import { useCallback, useEffect, useState, useRef } from 'react';

const isKeyboardAllowed = (code: string) => {
    return (
        code.startsWith("Key") ||
        code.startsWith("Digit") ||
        code === "Backspace" ||
        code === "Space" ||
        code === "Minus"
    );
}

const useTypings = (isFinished : boolean) => {
    const [cursor, setCursor] = useState(0);
    const [typed, setTyped] = useState<string>("");
    let totalTyped = useRef(0);
    const isFinishedRef = useRef(isFinished);

    useEffect(() => {
        isFinishedRef.current = isFinished;
    }, [isFinished]);

    const keydownHandler = useCallback(({ key, code }: KeyboardEvent) => {
        if (isFinishedRef.current ||!isKeyboardAllowed(code)) {
            return;
        }
        switch (key) {
            case "Backspace":
                setTyped((prev) => prev.slice(0, -1));
                setCursor(cursor => cursor - 1);
                totalTyped.current = Math.max(0, totalTyped.current - 1);
                break;
            default:
                setTyped((prev) => prev.concat(key));
                setCursor(cursor => cursor + 1);
                totalTyped.current += 1;
        }
    }, [cursor]);

    useEffect(() => {
        window.addEventListener('keydown', keydownHandler);

        return () => {
            window.removeEventListener('keydown', keydownHandler);
        }
    }, [keydownHandler]);

    return {
        typed,
        cursor,
        setTyped,
        setCursor,
        totalTyped: totalTyped.current,
    }
}

export default useTypings;