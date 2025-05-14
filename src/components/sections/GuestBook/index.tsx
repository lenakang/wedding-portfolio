"use client";

import { useEffect, useState } from "react";
import List from "./List";
import Form from "./Form";
import MyNote from "./MyNote";
import FindNote from "./FindNote";
import { useGuests } from "@/utils/useGuests";
import { useGuestCount } from "@/utils/useGuestCount";
import { db } from "@/lib/firebase";
import { doc, getDoc } from "firebase/firestore";
import styles from "./styles.module.scss";

const MAX_GUESTS = 30;

export default function GuestBook() {
    const guests = useGuests();
    const guestCount = useGuestCount();
    const [hasWritten, setHasWritten] = useState<"loading" | true | false>(
        "loading"
    );
    const [showNote, setShowNote] = useState(false);
    const [showFind, setShowFind] = useState(false);

    useEffect(() => {
        const checkGuest = async () => {
            const id = localStorage.getItem("guest_id");
            if (!id) {
                setHasWritten(false);
                return;
            }

            const snap = await getDoc(doc(db, "guest", id));
            setHasWritten(snap.exists() ? true : false);
        };

        checkGuest();

        window.addEventListener("guest_written", checkGuest);
        return () => window.removeEventListener("guest_written", checkGuest);
    }, []);

    if (hasWritten === "loading" || guestCount === null) return null;

    return (
        <div className={styles.guestBook}>
            <h3>방명록</h3>

            {guests.length > 0 && !showFind && (
                <button
                    type="button"
                    onClick={() => setShowFind(true)}
                    className={styles.findNoteButton}
                >
                    내 쪽지 찾기
                </button>
            )}
            {showFind && <FindNote onClose={() => setShowFind(false)} />}

            <List />

            {hasWritten ? (
                <div className={styles.thankyou}>
                    <p>감사합니다 🤍</p>

                    {/* 내 쪽지 보기 버튼 */}
                    {!showNote && (
                        <button
                            className={styles.myNoteButton}
                            onClick={() => setShowNote(true)}
                        >
                            내 쪽지 확인하기
                        </button>
                    )}
                    {showNote && <MyNote />}

                    {/* ✅ 내가 마지막으로 썼고 방명록도 마감 상태면 같이 표시 */}
                    {guestCount >= MAX_GUESTS && (
                        <p className={styles.closed}>
                            방명록이 마감되었습니다 🤍
                        </p>
                    )}
                </div>
            ) : guestCount >= MAX_GUESTS ? (
                <p className={styles.closed}>방명록이 마감되었습니다 🤍</p>
            ) : (
                <Form />
            )}
        </div>
    );
}
