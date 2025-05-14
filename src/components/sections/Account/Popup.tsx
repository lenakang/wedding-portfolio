import Popup from "@/components/common/Popup";
import styles from "@/components/common/Popup/styles.module.scss";
import { IAccountList } from "@/data/contactList";

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
            <span className={styles.contact_title}>{person.title}</span>
            <span className={styles.contact_name}>{person.name}</span>
            <a
              href={`tel:${person.number}`}
              onClick={(e) => {
                e.preventDefault();
                navigator.clipboard.writeText(person.number);
                alert("계좌번호가 복사되었습니다.");
              }}
            >
              {person.number} 복사하기
            </a>
            <a
              href={person.kakaoLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              카카오페이 송금
            </a>
          </li>
        ))}
      </ul>
    </Popup>
  );
}
