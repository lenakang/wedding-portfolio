export {};

declare global {
    interface Window {
        Kakao: KakaoNamespace;
    }

    interface KakaoNamespace {
        isInitialized: () => boolean;
        init: (key: string) => void;
        Navi?: {
            start: (config: {
                name: string;
                x: number;
                y: number;
                coordType: "wgs84" | "katec";
            }) => void;
        };
        Share?: {
            sendDefault: (config: {
                objectType: "feed";
                content: {
                    title: string;
                    description: string;
                    imageUrl: string;
                    link: {
                        mobileWebUrl: string;
                        webUrl: string;
                    };
                };
                buttons?: {
                    title: string;
                    link: {
                        mobileWebUrl: string;
                        webUrl: string;
                    };
                }[];
            }) => void;
        };
    }
}
