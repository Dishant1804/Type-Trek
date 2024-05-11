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

const useTypings = (enabled: boolean) => {
    const [cursor, setCursor] = useState(0);
    const [typed, setTyped] = useState<string>("");
    const totalTyped = useRef(0);

    const keydownHandler = useCallback(({ key, code }: KeyboardEvent) => {
        if ((!enabled) || !isKeyboardAllowed(code)) {
            return;
        }
        switch (key) {
            case "Backspace":
                setTyped((prev) => prev.slice(0, -1));
                setCursor(cursor - 1);
                totalTyped.current -= 1;
                break;
            default:
                setTyped((prev) => prev.concat(key));
                setCursor(cursor + 1);
                totalTyped.current += 1;
        }
    }, [cursor, enabled]);

    const clearTyped = useCallback(() => {
        setTyped("");
        setCursor(0);
    }, [])

    const resetTotalTyped = useCallback(() => {
        totalTyped.current = 0;
    }, [])

    useEffect(() => {
        window.addEventListener('keydown', keydownHandler);

        return () => {
            window.removeEventListener('keydown', keydownHandler);
        }
    }, [keydownHandler]);

    return {
        typed,
        cursor,
        clearTyped,
        resetTotalTyped,
        totalTyped: totalTyped.current,
    }
}

export default useTypings;