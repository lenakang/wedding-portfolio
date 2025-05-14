import { IAccountList } from "@/data/contactList";
import Popup from "@/components/common/Popup";
import styles from "@/components/common/Popup/styles.module.scss";
import { Button } from "@/components/form";

interface ContactPopupProps {
    setIsOpen: () => void;
    list: IAccountList[];
}

export default function ContactPopup({ setIsOpen, list }: ContactPopupProps) {
    return (
        <Popup setIsOpen={setIsOpen}>
            <div className="popup-title">
                <h6>ACCOUNT</h6>
            </div>

            <ul className={styles.contact}>
                {list.map((person) => (
                    <li key={person.name}>
                        <span className={styles.contact_title}>
                            {person.title}
                        </span>
                        <span className={styles.contact_name}>
                            {person.name}
                        </span>
                        <a
                            className={styles.contact_accountNumber}
                            href={`tel:${person.number}`}
                            onClick={(e) => {
                                e.preventDefault();
                                navigator.clipboard.writeText(person.number);
                                alert("계좌번호가 복사되었습니다.");
                            }}
                        >
                            {person.number}
                            <Button size="xs">복사하기</Button>
                        </a>
                        {person.kakaoLink && (
                            <a
                                href={person.kakaoLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.contact_kakaoPay}
                            >
                                <Button size="xs">카카오페이 송금하기</Button>
                            </a>
                        )}
                    </li>
                ))}
            </ul>
        </Popup>
    );
}
