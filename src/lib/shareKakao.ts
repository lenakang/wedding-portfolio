import { WEDDING_DATE, WEDDING_TITLE, WEDDING_VENUE } from "@/constants/info";

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
            title: WEDDING_TITLE,
            description: `${WEDDING_DATE} / ${WEDDING_VENUE}`,
        },
    });
};

export default shareKakao;
