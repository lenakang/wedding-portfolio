export const shareKakao = () => {
    if (typeof window === "undefined" || !window.Kakao) {
        console.warn("⚠️ Kakao SDK not loaded.");
        return;
    }

    const kakao = window.Kakao;

    if (!kakao.isInitialized()) {
        kakao.init(process.env.NEXT_PUBLIC_KAKAO_JS_KEY || "");
    }

    kakao.Share.sendCustom({
        templateId: 120713,
        templateArgs: {
            title: "나래❤️대승 결혼합니다.",
            description: "6월 28일 (토) 오전 11시 / 더컨벤션 신사",
        },
    });
};

export default shareKakao;
