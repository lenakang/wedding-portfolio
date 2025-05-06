import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import styles from "./styles.module.scss";

export default function index() {
    return (
        <div className={styles.information}>
            <h3 className="underline">calendar</h3>

            <div className={styles.month}>6월</div>
            <DayPicker
                mode="single"
                selected={new Date(2025, 5, 28)}
                month={new Date(2025, 5)}
                fromMonth={new Date(2025, 5)}
                toMonth={new Date(2025, 5)}
                captionLayout="label"
                className="read-only-calendar"
            />
        </div>
    );
}
