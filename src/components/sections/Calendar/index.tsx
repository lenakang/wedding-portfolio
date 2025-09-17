"use client";

import { useEffect, useMemo, useState } from "react";
import { DayPicker } from "react-day-picker";
import { MENU } from "@/constants/menu";
import { ko } from "date-fns/locale";
import { WEDDING_DATE } from "@/constants/info";
import { parseWeddingDate, useCountdown } from "@/hooks/useCalendar";
import "react-day-picker/dist/style.css";
import styles from "./styles.module.scss";

export default function CountdownBlock() {
    const targetDate = useMemo(() => parseWeddingDate(WEDDING_DATE), []);

    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);

    const selectedMonth = useMemo(
        () =>
            targetDate.toLocaleString("ko-KR", {
                year: "numeric",
                month: "long",
            }),
        [targetDate]
    );

    useEffect(() => {
        if (!mounted) return;

        const selectedDayElement = document.querySelector(
            ".read-only-calendar .rdp-day.rdp-selected"
        );

        if (!selectedDayElement) return;

        const existingTimeSpan = selectedDayElement.querySelector(
            ".rdp-selected-hours"
        );
        if (existingTimeSpan) existingTimeSpan.remove();

        const hoursSpan = document.createElement("span");
        hoursSpan.textContent = `${targetDate.getHours()}시`;
        hoursSpan.className = "rdp-selected-hours";

        selectedDayElement.appendChild(hoursSpan);
    }, [mounted, targetDate]);

    const { days, hours, minutes, seconds } = useCountdown(targetDate);

    if (!mounted) return null;

    return (
        <section id={MENU.CALENDAR} className={styles.calendar}>
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
        </section>
    );
}
