import { trackClickEvent } from "@/utils/trackClickEvent";
import shareKakao from "./shareKakao";

export const shareKakaoWithTracking = (location: "header" | "footer") => {
    shareKakao();

    trackClickEvent({
        category: "share",
        label: "카카오",
        location,
    });
};
