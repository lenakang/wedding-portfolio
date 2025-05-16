"use client";

import { useEffect } from "react";

export default function InitKakao() {
    useEffect(() => {
        if (window.Kakao && !window.Kakao.isInitialized()) {
            window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_JS_KEY!);
        }
    }, []);

    return null;
}
