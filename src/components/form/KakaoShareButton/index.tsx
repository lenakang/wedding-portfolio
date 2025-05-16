"use client";

import { useEffect } from "react";

export default function KakaoShareButton() {
    useEffect(() => {
        if (window.Kakao && !window.Kakao.isInitialized()) {
            window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_JS_KEY!);
        }
    }, []);

    const handleShare = () => {
        console.log("hi");
        if (!window.Kakao.Share) return;

        window.Kakao.Share.sendDefault({
            objectType: "feed",
            content: {
                title: "나래❤️대승 결혼합니다.",
                description: "6월 28일 (토) 오전 11시 / 더컨벤션 신사",
                imageUrl: "https://lena-code.site/og_img.jpg",
                link: {
                    mobileWebUrl: "https://lena-code.site/",
                    webUrl: "https://lena-code.site/",
                },
            },
            buttons: [
                {
                    title: "초대장 보기",
                    link: {
                        mobileWebUrl: "https://lena-code.site/",
                        webUrl: "https://lena-code.site/",
                    },
                },
            ],
        });
    };

    return (
        <button onClick={handleShare} className="kakao-share-button">
            공유하기
        </button>
    );
}
