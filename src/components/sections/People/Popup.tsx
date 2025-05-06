import styles from "./styles.module.scss";

interface PopupProps {
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Popup({ setIsOpen }: PopupProps) {
    const list = [
        {
            title: "신랑",
            name: "위대승",
            number: process.env.NEXT_PUBLIC_GROOM_PHONE,
        },
        {
            title: "신부",
            name: "강나래",
            number: process.env.NEXT_PUBLIC_BRIDE_PHONE,
        },

        {
            title: "신랑 아버지",
            name: "위재민",
            number: process.env.NEXT_PUBLIC_GROOM_DAD_PHONE,
        },
        {
            title: "신부 아버지",
            name: "강인용",
            number: process.env.NEXT_PUBLIC_BRIDE_DAD_PHONE,
        },

        {
            title: "신랑 어머니",
            name: "하선영",
            number: process.env.NEXT_PUBLIC_GROOM_MOM_PHONE,
        },
        {
            title: "신부 어머니",
            name: "오미경",
            number: process.env.NEXT_PUBLIC_BRIDE_MOM_PHONE,
        },
    ];

    return (
        <div className="popup-backdrop" onClick={() => setIsOpen(false)}>
            <div className="popup-content" onClick={(e) => e.stopPropagation()}>
                <div className="popup-title">
                    <h6>CONTACT</h6>
                    <button
                        className="popup-close"
                        onClick={() => setIsOpen(false)}
                    >
                        x
                    </button>
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
                            <a href={`tel:${person.number}`}>
                                <svg viewBox="0 0 512 512">
                                    <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
                                </svg>
                                전화하기
                            </a>
                            <a href={`sms:${person.number}`}>
                                <svg viewBox="0 0 512 512">
                                    <path d="M64 112c-8.8 0-16 7.2-16 16l0 22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1l0-22.1c0-8.8-7.2-16-16-16L64 112zM48 212.2L48 384c0 8.8 7.2 16 16 16l384 0c8.8 0 16-7.2 16-16l0-171.8L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64l384 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128z" />
                                </svg>
                                문자하기
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
