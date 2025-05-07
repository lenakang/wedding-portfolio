"use client";

import { ko } from "date-fns/locale";
import { DayPicker } from "react-day-picker";
import styles from "./styles.module.scss";
import "react-day-picker/dist/style.css";
import useCountdown from "@/utils/useCountdown";

export default function Index() {
    const selectedDate = new Date(2025, 5, 28);
    const selectedMonth = selectedDate.toLocaleString("ko-KR", {
        month: "long",
    });
    selectedDate.setHours(0, 0, 0, 0);

    const { days, hours, minutes, seconds } = useCountdown(selectedDate);

    return (
        <div className={styles.information}>
            <h3 data-aos="my-fade-up">calendar</h3>

            <DayPicker
                locale={ko}
                mode="single"
                selected={selectedDate}
                defaultMonth={selectedDate}
                disableNavigation
                showOutsideDays={false}
                className="read-only-calendar"
                formatters={{ formatCaption: () => selectedMonth }}
                data-aos="my-fade-up"
            />

            <div className={styles.DDay} data-aos="my-fade-up">
                D-Day
                <span> : </span>
                <span className="underline">{days}일</span>{" "}
                <span>{hours}분</span>
                <span>{minutes}시</span> <span>{seconds}초</span>
            </div>
        </div>
    );
}
