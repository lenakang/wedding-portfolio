import { ko } from "date-fns/locale";
import { DayPicker } from "react-day-picker";
import styles from "./styles.module.scss";
import "react-day-picker/dist/style.css";

export default function index() {
    const selectedDate = new Date(2025, 5, 28);
    selectedDate.setHours(0, 0, 0, 0);

    return (
        <div className={styles.information}>
            <h3 className="underline">calendar</h3>

            <DayPicker
                locale={ko}
                mode="single"
                selected={selectedDate}
                defaultMonth={selectedDate}
                disableNavigation
                showOutsideDays={false}
                className="read-only-calendar"
            />
        </div>
    );
}
