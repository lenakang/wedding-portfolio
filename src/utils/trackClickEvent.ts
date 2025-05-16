export type ClickCategory =
    | "share"
    | "account"
    | "contact"
    | "contact_detail"
    | "navigation";
export type ClickLocation = "main" | "popup" | "footer" | "header";

interface TrackClickEventParams {
    category: ClickCategory;
    label: string;
    location: ClickLocation;
}

export const trackClickEvent = ({
    category,
    label,
    location,
}: TrackClickEventParams) => {
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
        window.gtag("event", "click", {
            event_category: category,
            event_label: label,
            location,
            page_location: window.location.href,
        });
    }
};
