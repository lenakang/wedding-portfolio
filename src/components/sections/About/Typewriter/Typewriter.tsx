import React, { useEffect, useState } from "react";
import "./style.css";

interface ITypewriter {
    words: string[];
    typingSpeed?: number;
    displayTime?: number;
    pauseTime?: number;
    loop?: boolean;
}

const Typewriter = ({
    words,
    typingSpeed = 200,
    displayTime = 2000,
    pauseTime = 500,
    loop = true,
}: ITypewriter) => {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState("");
    const [isTyping, setIsTyping] = useState(true);

    useEffect(() => {
        let timeout: NodeJS.Timeout;

        if (isTyping) {
            const currentWord = words[currentWordIndex];
            if (displayedText.length < currentWord.length) {
                timeout = setTimeout(() => {
                    setDisplayedText(
                        currentWord.slice(0, displayedText.length + 1)
                    );
                }, typingSpeed);
            } else {
                timeout = setTimeout(() => {
                    setIsTyping(false);
                }, displayTime);
            }
        } else {
            timeout = setTimeout(() => {
                setDisplayedText("");
                setCurrentWordIndex((prev) =>
                    prev + 1 < words.length ? prev + 1 : loop ? 0 : prev
                );
                setIsTyping(true);
            }, pauseTime);
        }

        return () => clearTimeout(timeout);
    }, [
        displayedText,
        isTyping,
        currentWordIndex,
        words,
        typingSpeed,
        displayTime,
        pauseTime,
        loop,
    ]);

    return (
        <span className="typewriter">
            {displayedText}
            <span className="blinking-cursor">|</span>
        </span>
    );
};

export default Typewriter;
