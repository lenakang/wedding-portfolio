"use client";

import { useEffect, useState } from "react";
import List from "./List";
import { useGuests } from "@/hooks/useGuests";
import { useGuestCount } from "@/hooks/useGuestCount";
import { db } from "@/lib/firebase";
import { doc, getDoc } from "firebase/firestore";
import styles from "./styles.module.scss";
import { Button } from "@/components/form";
import ContactPopup from "./Popup";
import Marquee from "react-fast-marquee";
import { MENU } from "@/constants/menu";

const MAX_GUESTS = 50;

export default function GuestBook() {
    const [isOpen, setIsOpen] = useState(false);
    const [mode, setMode] = useState<"write" | "view">("write");
    const guests = useGuests();
    const guestCount = useGuestCount();
    const [hasWritten, setHasWritten] = useState<"loading" | true | false>(
        "loading"
    );
    const [showNote, setShowNote] = useState(false);

    useEffect(() => {
        const checkGuest = async () => {
            const id = localStorage.getItem("guest_id");
            if (!id) {
                setHasWritten(false);
                setShowNote(false);
                return;
            }

            const snap = await getDoc(doc(db, "guest", id));
            setHasWritten(snap.exists() ? true : false);
            if (!snap.exists()) {
                setShowNote(false);
            }
        };

        checkGuest();

        window.addEventListener("guest_written", checkGuest);
        return () => window.removeEventListener("guest_written", checkGuest);
    }, []);

    if (hasWritten === "loading" || guestCount === null) return null;

    return (
        <section id={MENU.GUEST} className={styles.guestBook}>
            <div className={styles.guestBook__title}>
                <Marquee
                    className={styles.guestBook__marquee}
                    gradient={false}
                    speed={30}
                >
                    <span> ALL THE LOVE ◝ TESTIMONIALS ◟ </span>
                </Marquee>
                <h3 data-aos="my-fade-up">비밀 방명록</h3>
                <p data-aos="my-fade-up">
                    따뜻한 마음이 담긴 축하의 글을 남겨주세요. <br />
                    여러분의 메시지는{" "}
                    <span className="underline">신랑 신부에게만</span>{" "}
                    전달됩니다. <br />
                    진심 어린 마음, 소중히 간직하겠습니다. <br />
                    <br />
                    <span>쪽지를 써서 우리의 벽을 함께 꾸며주세요. 🤍</span>
                </p>
            </div>
            <div className={styles.guestBook__content} data-aos="my-fade-up">
                <List />
                <span className={styles.noteCount}>
                    <strong>{guests.length}개</strong>의 쪽지가 붙어있습니다.
                </span>
                {hasWritten ? (
                    <div className={styles.contact}>
                        <p>작성해주셔서 감사합니다.</p>
                        {guestCount >= MAX_GUESTS && (
                            <p className={styles.closed}>
                                방명록이 마감되었습니다 🤍
                            </p>
                        )}

                        {!showNote && (
                            <Button
                                className={styles.myNoteButton}
                                onClick={() => {
                                    setMode("view");
                                    setIsOpen(true);
                                }}
                            >
                                내 쪽지 확인하기
                            </Button>
                        )}
                        {showNote && (
                            <ContactPopup setIsOpen={setShowNote} mode="view" />
                        )}
                    </div>
                ) : guestCount >= MAX_GUESTS ? (
                    <p className={styles.closed}>방명록이 마감되었습니다 🤍</p>
                ) : (
                    <div className={styles.contact}>
                        <Button
                            onClick={() => {
                                setShowNote(false);
                                setMode("write");
                                setIsOpen(true);
                            }}
                        >
                            방명록 남기기
                        </Button>
                    </div>
                )}
            </div>

            {isOpen && <ContactPopup setIsOpen={setIsOpen} mode={mode} />}
        </section>
    );
}
