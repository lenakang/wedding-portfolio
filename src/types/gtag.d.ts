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
        | "navigation"
        | "guestbook";

    type ClickLocation = "main" | "popup" | "footer" | "header" | "form";

    interface GenericClickEventParams {
        event_category: ClickCategory;
        event_label: string;
        location: ClickLocation;
        page_location: string;
    }

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
        (
            command: "event",
            eventName: string,
            params?: Record<string, unknown>
        ): void;
    }
}
