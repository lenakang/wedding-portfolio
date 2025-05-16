"use client";

import { useState } from "react";
import { collection, getDocs, Timestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { query, orderBy } from "firebase/firestore";
import styles from "./styles.module.scss";
import { Button } from "@/components/form";
import { useForm } from "react-hook-form";

interface Note {
    id: string;
    name: string;
    content: string;
    createdAt: Timestamp;
}

export default function NotesPage() {
    const [authorized, setAuthorized] = useState(false);
    const [notes, setNotes] = useState<Note[]>([]);

    const {
        register,
        setError,
        clearErrors,
        handleSubmit,
        getValues,
        formState: { errors },
    } = useForm();

    const onSubmit = async () => {
        const password = getValues("password");

        try {
            const res = await fetch("/api/check-password", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ password }),
            });

            const data = await res.json();

            if (!data.success) {
                setError("password", {
                    message: data.message || "오류가 발생했습니다.",
                });
                return;
            }

            // 인증성공
            setAuthorized(true);
            clearErrors();

            const q = query(
                collection(db, "guest"),
                orderBy("createdAt", "desc")
            );
            const snapshots = await getDocs(q);

            const result: Note[] = snapshots.docs.map((doc) => ({
                id: doc.id,
                ...(doc.data() as Omit<Note, "id">),
            }));

            setNotes(result);
        } catch (e) {
            console.log(e);
            setError("password", { message: "서버 에러가 발생했습니다." });
        }
    };

    function formatTimestamp(ts: Timestamp): string {
        const date = ts.toDate();
        const yyyy = date.getFullYear();
        const mm = String(date.getMonth() + 1).padStart(2, "0");
        const dd = String(date.getDate()).padStart(2, "0");
        const hh = String(date.getHours()).padStart(2, "0");
        const mi = String(date.getMinutes()).padStart(2, "0");
        return `${yyyy}-${mm}-${dd} ${hh}:${mi}`;
    }

    return (
        <div className={styles.admin}>
            {!authorized ? (
                <>
                    <h2>비밀번호를 입력하세요</h2>

                    <div className={styles.admin__form}>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-input">
                                <input
                                    type="password"
                                    {...register("password")}
                                />
                            </div>
                            <Button type="submit">확인</Button>
                        </form>
                    </div>

                    {typeof errors.password?.message === "string" && (
                        <p className={styles.message}>
                            {errors.password.message}
                        </p>
                    )}
                </>
            ) : (
                <>
                    <h2>쪽지 목록</h2>
                    {notes.length === 0 ? (
                        <p>등록된 쪽지가 없습니다.</p>
                    ) : (
                        <ul>
                            {notes.map((note, i) => (
                                <li key={note.id}>
                                    <span className={styles.name}>
                                        {notes.length - i}. {note.name}
                                    </span>
                                    <span className={styles.createdAt}>
                                        {formatTimestamp(note.createdAt)}
                                    </span>
                                    <span className={styles.content}>
                                        {note.content}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    )}
                </>
            )}
        </div>
    );
}
