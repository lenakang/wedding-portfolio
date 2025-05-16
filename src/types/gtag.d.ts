export {};

declare global {
    interface Window {
        gtag: Gtag;
    }

    // 사용 가능한 카테고리들
    type ClickCategory =
        | "share"
        | "account"
        | "contact"
        | "contact_detail"
        | "navigation";
    type ClickLocation = "main" | "popup" | "footer" | "header";

    // 일반 클릭 이벤트 파라미터 타입
    interface GenericClickEventParams {
        event_category: ClickCategory;
        event_label: string;
        location: ClickLocation;
        page_location: string;
    }

    // gtag 함수 타입 정의
    interface Gtag {
        (command: "js", config: Date): void;
        (
            command: "config",
            targetId: string,
            config?: { groups?: string }
        ): void;
        (
            command: "event",
            eventName: "click",
            params: GenericClickEventParams
        ): void;
    }
}
