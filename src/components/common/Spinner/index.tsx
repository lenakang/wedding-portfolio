import styles from "./styles.module.scss";

export default function Spinner() {
    return (
        <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={styles.spinner}
        >
            <circle cx="12" cy="12" r="10" strokeOpacity="0.25" />
            <path d="M22 12a10 10 0 0 1-10 10" />
        </svg>
    );
}
