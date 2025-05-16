"use client";

import { useForm } from "react-hook-form";
import {
    collection,
    serverTimestamp,
    addDoc,
    getDoc,
    doc,
    updateDoc,
    deleteDoc,
} from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Button } from "@/components/form";
import styles from "./styles.module.scss";
import { useEffect, useState } from "react";
import Spinner from "@/components/common/Spinner";
import { trackClickEvent } from "@/utils/trackClickEvent";

type FormValues = {
    name: string;
    content: string;
};

interface FormProps {
    setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
    mode?: "write" | "view";
}

export default function Form({ setIsOpen, mode = "write" }: FormProps) {
    const [docId, setDocId] = useState<string | null>(null);
    const [loading, setLoading] = useState<"write" | "edit" | "delete" | null>(
        null
    );

    const { register, handleSubmit, reset, getValues } = useForm<FormValues>({
        defaultValues: {
            name: "",
            content: "",
        },
    });

    useEffect(() => {
        if (mode === "view") {
            const id = localStorage.getItem("guest_id");
            if (!id) return;

            const fetch = async () => {
                const snap = await getDoc(doc(db, "guest", id));
                if (snap.exists()) {
                    const data = snap.data() as FormValues;
                    setDocId(id);
                    reset(data);
                }
            };

            fetch();
        }
    }, [mode, reset]);

    const onSubmit = async (data: FormValues) => {
        if (!data.name.trim() || !data.content.trim()) return;

        try {
            setLoading("write");

            trackClickEvent({
                category: "guestbook",
                label: "submit",
                location: "form",
            });

            const guestRef = collection(db, "guest");
            const docRef = await addDoc(guestRef, {
                name: data.name,
                content: data.content.slice(0, 80),
                createdAt: serverTimestamp(),
            });

            localStorage.setItem("guest_id", docRef.id);
            window.dispatchEvent(new Event("guest_written"));
            alert("쪽지를 전달했습니다 ❤️");
            reset();
            setIsOpen?.(false);
        } catch (error) {
            alert(
                error instanceof Error
                    ? error.message
                    : "쪽지 저장 중 오류가 발생했습니다."
            );
        } finally {
            setLoading(null);
        }
    };

    const handleEdit = async () => {
        if (!docId) return;

        const data = getValues();

        const snap = await getDoc(doc(db, "guest", docId));
        if (!snap.exists()) return;

        const original = snap.data() as FormValues;
        const isSame = data.content === original.content;

        if (isSame) {
            alert("기존과 동일한 내용입니다. 내용을 변경해주세요.");
            return;
        }

        const confirmEdit = confirm("수정하시겠습니까?");
        if (!confirmEdit) return;

        try {
            setLoading("edit");

            trackClickEvent({
                category: "guestbook",
                label: "edit",
                location: "form",
            });

            const docRef = doc(db, "guest", docId);
            await updateDoc(docRef, {
                content: data.content.slice(0, 80),
            });

            window.dispatchEvent(new Event("guest_written"));
            alert("수정이 완료되었습니다.");
            setTimeout(() => setIsOpen?.(false), 100);
        } catch (error) {
            alert(
                error instanceof Error
                    ? error.message
                    : "수정 중 오류가 발생했습니다."
            );
        } finally {
            setLoading(null);
        }
    };

    const handleDelete = async () => {
        const confirmDelete = confirm("삭제하시겠습니까?");
        if (!confirmDelete || !docId) return;

        try {
            setLoading("delete");

            trackClickEvent({
                category: "guestbook",
                label: "delete",
                location: "form",
            });

            await deleteDoc(doc(db, "guest", docId));
            localStorage.removeItem("guest_id");
            window.dispatchEvent(new Event("guest_written"));

            alert("삭제되었습니다.");
            setIsOpen?.(false);
        } catch (error) {
            alert(
                error instanceof Error
                    ? error.message
                    : "삭제 중 오류가 발생했습니다."
            );
        } finally {
            setLoading(null);
        }
    };

    return (
        <form
            onSubmit={mode === "write" ? handleSubmit(onSubmit) : undefined}
            className={styles.form}
        >
            <div className="form-input">
                <input
                    {...register("name")}
                    placeholder="이름"
                    required
                    disabled={mode === "view"}
                />
            </div>

            <div className="form-input">
                <label htmlFor="notes">내용</label>
                <textarea
                    id="notes"
                    maxLength={80}
                    {...register("content", { maxLength: 80 })}
                    placeholder="신랑 신부에게 쪽지를 남겨주세요. (최대 80글자)"
                    required
                />
            </div>

            {mode === "write" ? (
                <>
                    <div className={styles.form__actions}>
                        <Button disabled={loading === "write"} type="submit">
                            {loading === "write" ? <Spinner /> : "전달하기"}
                        </Button>
                    </div>
                    <span className={styles.form__info}>
                        작성하신 쪽지는 <strong>같은 브라우저</strong>에서만
                        수정 및 삭제할 수 있습니다. <br />
                        브라우저를 변경하거나 기록을 삭제하면 다시 확인할 수
                        없습니다.
                    </span>
                </>
            ) : (
                <div className={styles.form__actions}>
                    <Button
                        disabled={loading === "edit"}
                        type="button"
                        onClick={handleEdit}
                    >
                        {loading === "edit" ? <Spinner /> : "수정하기"}
                    </Button>
                    <Button
                        disabled={loading === "delete"}
                        type="button"
                        onClick={handleDelete}
                    >
                        {loading === "delete" ? <Spinner /> : "삭제하기"}
                    </Button>
                </div>
            )}
        </form>
    );
}
