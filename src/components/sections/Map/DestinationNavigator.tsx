"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/form";
import Image from "next/image";
import {
    handleTmap,
    handleNaver,
    handleKakaoNavi,
    isMobileDevice,
    isIOSDevice,
    NavigatorProps,
} from "@/utils/navigationHandlers";
import { trackClickEvent } from "@/utils/trackClickEvent";

export default function DestinationNavigator({
    lat,
    lng,
    name,
}: NavigatorProps) {
    const [isMobile, setIsMobile] = useState(false);
    const [isIOS, setIsIOS] = useState(false);
    const [kakaoReady, setKakaoReady] = useState(false);

    useEffect(() => {
        setIsMobile(isMobileDevice());
        setIsIOS(isIOSDevice());

        const checkReady = setInterval(() => {
            if (!kakaoReady || !window.Kakao?.Navi?.start) {
                setKakaoReady(true);
                clearInterval(checkReady);
            }
        }, 300);

        return () => clearInterval(checkReady);
    }, []);

    const navigatorProps = { lat, lng, name };

    return (
        <div className="navigators">
            <Button
                size="small"
                className="tmap"
                onClick={() => {
                    trackClickEvent({
                        category: "navigation",
                        label: "tmap",
                        location: "main",
                    });
                    handleTmap(isMobile, isIOS, navigatorProps);
                }}
            >
                <Image
                    src="/icon_tmap.png"
                    width={13}
                    height={13}
                    alt="티맵 아이콘"
                />
                티맵
            </Button>

            <Button
                size="small"
                className="kakao"
                onClick={() => {
                    trackClickEvent({
                        category: "navigation",
                        label: "kakao_navi",
                        location: "main",
                    });
                    handleKakaoNavi(isMobile, kakaoReady, navigatorProps);
                }}
            >
                <Image
                    src="/icon_kakao.png"
                    width={12}
                    height={17}
                    alt="카카오네비 아이콘"
                />
                카카오네비
            </Button>

            <Button
                size="small"
                className="naver"
                onClick={() => {
                    trackClickEvent({
                        category: "navigation",
                        label: "naver_map",
                        location: "main",
                    });
                    handleNaver(isMobile, isIOS, navigatorProps);
                }}
            >
                <Image
                    src="/icon_naver.png"
                    width={15}
                    height={15}
                    alt="네이버지도 아이콘"
                />
                네이버지도
            </Button>
        </div>
    );
}
