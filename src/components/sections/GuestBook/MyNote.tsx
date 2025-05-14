"use client";

import { useState } from "react";
import {
    doc,
    getDoc,
    updateDoc,
    deleteDoc,
    Timestamp,
} from "firebase/firestore";
import { db } from "@/lib/firebase";
import styles from "./styles.module.scss";

interface GuestMessage {
    id: string;
    name: string;
    password: string;
    content: string;
    createdAt: Timestamp;
}

export default function MyNote() {
    const [step, setStep] = useState<"input" | "auth" | "edit">("input");
    const [inputName, setInputName] = useState("");
    const [inputPassword, setInputPassword] = useState("");
    const [note, setNote] = useState<GuestMessage | null>(null);
    const [content, setContent] = useState("");

    const handleCheck = async () => {
        const id = localStorage.getItem("guest_id");
        if (!id) return;

        const ref = doc(db, "guest", id);
        const snap = await getDoc(ref);

        if (!snap.exists()) return alert("쪽지를 찾을 수 없습니다.");

        const data = snap.data() as Omit<GuestMessage, "id">;
        if (data.name !== inputName || data.password !== inputPassword) {
            return alert("이름이나 비밀번호가 일치하지 않습니다.");
        }

        setNote({ id, ...data });
        setContent(data.content);
        setStep("edit");
    };

    const handleUpdate = async () => {
        if (!note) return;

        if (note.content === content.trim()) {
            alert("기존과 똑같으면 내용을 변경해주세요.");
            return;
        }

        await updateDoc(doc(db, "guest", note.id), { content: content.trim() });
        alert("수정되었습니다!");
        window.dispatchEvent(new Event("guest_written"));
    };

    const handleDelete = async () => {
        if (!note) return;
        await deleteDoc(doc(db, "guest", note.id));
        localStorage.removeItem("guest_id");
        alert("삭제되었습니다. 페이지를 새로고침합니다.");
        location.reload();
    };

    if (step === "input") {
        return (
            <div className={styles.noteForm}>
                <input
                    placeholder="이름"
                    value={inputName}
                    onChange={(e) => setInputName(e.target.value)}
                />
                <input
                    placeholder="비밀번호"
                    type="password"
                    value={inputPassword}
                    onChange={(e) => setInputPassword(e.target.value)}
                />
                <button onClick={handleCheck}>확인</button>
            </div>
        );
    }

    if (step === "edit") {
        return (
            <div className={styles.noteEdit}>
                <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    maxLength={50}
                />
                <button onClick={handleUpdate}>수정</button>
                <button onClick={handleDelete}>삭제</button>
            </div>
        );
    }

    return null;
}
