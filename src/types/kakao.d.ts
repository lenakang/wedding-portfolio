export {};

declare global {
    interface Window {
        Kakao: {
            isInitialized(): boolean;
            init(key: string): void;
            Navi: {
                start: (config: {
                    name: string;
                    x: number;
                    y: number;
                    coordType: "wgs84" | "katec";
                }) => void;
            };
            Share: {
                createCustomButton(options: {
                    container: string;
                    templateId: number;
                    templateArgs?: Record<string, string>;
                }): void;
                sendCustom(options: {
                    templateId: number;
                    templateArgs?: Record<string, string>;
                }): void;
            };
        };
    }
}
