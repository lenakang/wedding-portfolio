"use client";

import { useEffect, useMemo, useState } from "react";
import { DayPicker } from "react-day-picker";
import { ko } from "date-fns/locale";
import useCountdown from "@/utils/useCountdown";
import "react-day-picker/dist/style.css";
import styles from "./styles.module.scss";

export default function CountdownBlock() {
    // 날짜 고정
    const targetDate = useMemo(() => {
        const d = new Date(2025, 5, 28);
        d.setHours(0, 0, 0, 0);
        return d;
    }, []);

    // 클라이언트 전용 렌더링 플래그
    const [isClient, setIsClient] = useState(false);
    const [selectedMonth, setSelectedMonth] = useState("");

    useEffect(() => {
        setIsClient(true);
        // 날짜 포맷도 클라이언트에서만 계산
        const label = targetDate.toLocaleString("ko-KR", { month: "long" });
        setSelectedMonth(label);
    }, [targetDate]);

    // 날짜 계산 (조건문 밖에서 호출해야 함)
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
