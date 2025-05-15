import Popup from "@/components/common/Popup";
import Form from "./Form";
import styles from "./styles.module.scss";

interface ContactPopupProps {
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    mode?: "write" | "view";
}

export default function ContactPopup({
    setIsOpen,
    mode = "write",
}: ContactPopupProps) {
    return (
        <Popup setIsOpen={setIsOpen}>
            <div className="popup-title">
                <h6>Guest Book</h6>
            </div>

            <div className={styles.typo}>
                {mode === "view" ? "내 쪽지" : "Thank You"}
            </div>
            <Form setIsOpen={setIsOpen} mode={mode} />
        </Popup>
    );
}
