"use client";

import { useForm } from "react-hook-form";
import { collection, serverTimestamp, addDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Button } from "@/components/form";
import styles from "./styles.module.scss";

type FormValues = {
    name: string;
    password: string;
    content: string;
};

export default function Form() {
    const { register, handleSubmit, reset } = useForm<FormValues>();

    const onSubmit = async (data: FormValues) => {
        if (!data.name.trim() || !data.password.trim() || !data.content.trim())
            return;

        try {
            const guestRef = collection(db, "guest");
            const docRef = await addDoc(guestRef, {
                name: data.name,
                password: data.password,
                content: data.content.slice(0, 50),
                createdAt: serverTimestamp(),
            });

            localStorage.setItem("guest_id", docRef.id);
            window.dispatchEvent(new Event("guest_written"));

            reset();
        } catch (error) {
            if (error instanceof Error) {
                alert(error.message);
            } else {
                alert("쪽지 저장 중 오류가 발생했습니다.");
            }
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <input {...register("name")} placeholder="성함" required />
            <input
                {...register("password")}
                placeholder="비밀번호"
                required
                type="password"
            />
            <textarea
                {...register("content", { maxLength: 50 })}
                placeholder="신랑 신부에게 쪽지를 남겨주세요. (최대 50글자)"
                required
            />
            <Button type="submit">방명록 남기기</Button>
            <span>
                * 수정/삭제를 위해 <strong>이름</strong>과{" "}
                <strong>비밀번호</strong>를 기억해주세요.
            </span>
        </form>
    );
}
