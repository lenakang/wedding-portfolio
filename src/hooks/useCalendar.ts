import { useEffect, useState } from "react";

function getTimeLeft(targetDate: Date) {
    const now = new Date().getTime();
    const distance = targetDate.getTime() - now;

    if (distance < 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((distance / (1000 * 60)) % 60),
        seconds: Math.floor((distance / 1000) % 60),
    };
}

export function useCountdown(targetDate: Date) {
    const [timeLeft, setTimeLeft] = useState(getTimeLeft(targetDate));

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(getTimeLeft(targetDate));
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return timeLeft;
}

export function parseWeddingDate(dateString: string) {
    const parts = dateString.match(/(\d+)년 (\d+)월 (\d+)일 (\d+)시/);
    if (!parts) {
        console.error("Invalid WEDDING_DATE format");
        return new Date();
    }
    const [, year, month, day, hour] = parts.map(Number);
    return new Date(year, month - 1, day, hour);
}
