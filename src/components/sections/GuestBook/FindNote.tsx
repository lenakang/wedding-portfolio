"use client";

import { useState } from "react";
import {
    collection,
    getDocs,
    query,
    where,
    orderBy,
    limit,
} from "firebase/firestore";
import { db } from "@/lib/firebase";
import styles from "./styles.module.scss";

interface Props {
    onClose: () => void;
}

export default function FindNote({ onClose }: Props) {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const handleFind = async () => {
        if (!name.trim() || !password.trim()) {
            alert("이름과 비밀번호를 모두 입력해주세요.");
            return;
        }

        const q = query(
            collection(db, "guest"),
            where("name", "==", name),
            where("password", "==", password),
            orderBy("createdAt", "desc"),
            limit(1)
        );

        const snapshot = await getDocs(q);
        if (snapshot.empty) {
            alert("일치하는 쪽지를 찾을 수 없습니다.");
            return;
        }

        const doc = snapshot.docs[0];
        localStorage.setItem("guest_id", doc.id);
        window.dispatchEvent(new Event("guest_written")); // 상태 갱신
        onClose();
    };

    return (
        <div className={styles.noteForm}>
            <input
                placeholder="이름"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                placeholder="비밀번호"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleFind}>확인</button>
            <button onClick={onClose}>닫기</button>
        </div>
    );
}
