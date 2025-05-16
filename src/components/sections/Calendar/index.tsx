"use client";

import { useEffect, useMemo, useState } from "react";
import { DayPicker } from "react-day-picker";
import { ko } from "date-fns/locale";
import useCountdown from "@/utils/useCountdown";
import "react-day-picker/dist/style.css";
import styles from "./styles.module.scss";

export default function CountdownBlock() {
    const targetDate = useMemo(() => {
        const d = new Date(2025, 5, 28);
        d.setHours(0, 0, 0, 0);
        return d;
    }, []);

    const [isClient, setIsClient] = useState(false);
    const [selectedMonth, setSelectedMonth] = useState("");

    useEffect(() => {
        setIsClient(true);
        const label = targetDate.toLocaleString("ko-KR", { month: "long" });
        setSelectedMonth(label);
    }, [targetDate]);

    const { days, hours, minutes, seconds } = useCountdown(targetDate);

    if (!isClient) return null;

    return (
        <div className={styles.calendar}>
            <h3 data-aos="my-fade-up">calendar</h3>

            <DayPicker
                locale={ko}
                mode="single"
                selected={targetDate}
                defaultMonth={targetDate}
                disableNavigation
                showOutsideDays={false}
                className="read-only-calendar"
                formatters={{ formatCaption: () => selectedMonth }}
                data-aos="my-fade-up"
            />

            <div className={styles.DDay} data-aos="my-fade-up">
                D-Day <span> : </span>
                <span className="underline">{days}일</span>{" "}
                <span>{hours}시간</span> <span>{minutes}분</span>{" "}
                <span>{seconds}초</span>
            </div>
        </div>
    );
}
