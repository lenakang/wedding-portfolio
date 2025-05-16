"use client";

import { useEffect, useState } from "react";
import { doc, getDoc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import styles from "./styles.module.scss";

interface GuestMessage {
    id: string;
    name: string;
    content: string;
}

export default function MyNote() {
    const [note, setNote] = useState<GuestMessage | null>(null);
    const [content, setContent] = useState("");

    useEffect(() => {
        const load = async () => {
            const id = localStorage.getItem("guest_id");
            if (!id) return;

            const ref = doc(db, "guest", id);
            const snap = await getDoc(ref);
            if (!snap.exists()) return;

            const data = snap.data();
            setNote({ id, name: data.name, content: data.content });
            setContent(data.content);
        };
        load();
    }, []);

    const handleUpdate = async () => {
        if (!note) return;
        if (note.content === content.trim()) {
            alert("기존과 똑같습니다. 내용을 변경해주세요.");
            return;
        }

        await updateDoc(doc(db, "guest", note.id), { content: content.trim() });
        alert("수정되었습니다.");
        window.dispatchEvent(new Event("guest_written"));
    };

    const handleDelete = async () => {
        if (!note) return;
        await deleteDoc(doc(db, "guest", note.id));
        localStorage.removeItem("guest_id");
        alert("삭제되었습니다. 페이지를 새로고침합니다.");
        location.reload();
    };

    if (!note) {
        return <p className={styles.closed}>쪽지를 불러올 수 없습니다.</p>;
    }

    return (
        <div className={styles.noteEdit}>
            <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                maxLength={80}
            />
            <button onClick={handleUpdate}>수정</button>
            <button onClick={handleDelete}>삭제</button>
        </div>
    );
}
