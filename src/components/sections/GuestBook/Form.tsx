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

type FormValues = {
    name: string;
    password: string;
    content: string;
};

interface FormProps {
    setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
    mode?: "write" | "view";
}

export default function Form({ setIsOpen, mode = "write" }: FormProps) {
    const [docId, setDocId] = useState<string | null>(null);
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState<"write" | "edit" | "delete" | null>(
        null
    );

    const { register, handleSubmit, reset, getValues } = useForm<FormValues>({
        defaultValues: {
            name: "",
            password: "",
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
        if (!data.name.trim() || !data.password.trim() || !data.content.trim())
            return;

        try {
            setLoading("write");
            const guestRef = collection(db, "guest");
            const docRef = await addDoc(guestRef, {
                name: data.name,
                password: data.password,
                content: data.content.slice(0, 80),
                createdAt: serverTimestamp(),
            });

            localStorage.setItem("guest_id", docRef.id);
            window.dispatchEvent(new Event("guest_written"));

            alert("쪽지를 전달했습니다 🤍");
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
        const isSame =
            data.name === original.name &&
            data.password === original.password &&
            data.content === original.content;

        if (isSame) {
            alert("기존과 동일한 내용입니다. 내용을 변경해주세요.");
            return;
        }

        const confirmEdit = confirm("수정하시겠습니까?");
        if (!confirmEdit) return;

        try {
            setLoading("edit");
            const docRef = doc(db, "guest", docId);
            await updateDoc(docRef, {
                name: data.name,
                password: data.password,
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
                <input {...register("name")} placeholder="이름" required />
            </div>
            <div className="form-input">
                <input
                    {...register("password")}
                    placeholder="비밀번호"
                    required
                    type={showPassword ? "text" : "password"}
                />
                <button
                    className="form-eye"
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                >
                    {showPassword ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                            />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                            />
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                            />
                        </svg>
                    )}
                </button>
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
                    </div>{" "}
                    <span className={styles.form__info}>
                        * 수정/삭제를 위해 <strong>이름</strong>과{" "}
                        <strong>비밀번호</strong>를 기억해주세요.
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
