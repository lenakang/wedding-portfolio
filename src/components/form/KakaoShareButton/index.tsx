"use client";

import { useEffect } from "react";

export default function KakaoShareButton() {
    useEffect(() => {
        // Kakao SDK 로드 확인
        if (typeof window !== "undefined" && window.Kakao) {
            const kakao = window.Kakao;

            if (!kakao.isInitialized()) {
                kakao.init(process.env.NEXT_PUBLIC_KAKAO_JS_KEY || "");
            }

            kakao.Share.createCustomButton({
                container: "#kakao-link-btn",
                templateId: 120713,
                templateArgs: {
                    title: "나래❤️대승 결혼합니다.",
                    description: "6월 28일 (토) 오전 11시 / 더컨벤션 신사",
                },
            });
        } else {
            console.warn("⚠️ Kakao SDK not loaded yet.");
        }
    }, []);

    return <button id="kakao-link-btn"> 카카오톡 공유</button>;
}
