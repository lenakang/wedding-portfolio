import { db } from "@/lib/firebase";
import { getDoc, doc } from "firebase/firestore";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const inputPassword = body.password;

        if (typeof inputPassword !== "string") {
            return NextResponse.json({
                success: false,
                message: "비밀번호 누락",
            });
        }

        const secureSnap = await getDoc(doc(db, "notes", "secure"));
        if (!secureSnap.exists()) {
            return NextResponse.json({
                success: false,
                message: "보안 문서 없음",
            });
        }

        const correctPassword = secureSnap.data().password;
        const isMatch = inputPassword === correctPassword;

        return NextResponse.json({
            success: isMatch,
            message: isMatch ? "인증 성공" : "비밀번호가 틀렸습니다.",
        });
    } catch (e) {
        console.error("API 에러:", e);
        return NextResponse.json({
            success: false,
            message: "서버 오류",
        });
    }
}
