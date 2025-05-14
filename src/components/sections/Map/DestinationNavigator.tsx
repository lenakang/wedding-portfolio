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

declare global {
  interface Window {
    Kakao: {
      isInitialized: () => boolean;
      init: (key: string) => void;
      Navi: {
        start: (config: {
          name: string;
          x: number;
          y: number;
          coordType: "wgs84" | "katec";
        }) => void;
      };
    };
  }
}

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
        onClick={() => handleTmap(isMobile, isIOS, navigatorProps)}
      >
        <Image src="/icon_tmap.png" width={13} height={13} alt="티맵 아이콘" />
        티맵
      </Button>

      <Button
        size="small"
        className="kakao"
        onClick={() => handleKakaoNavi(isMobile, kakaoReady, navigatorProps)}
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
        onClick={() => handleNaver(isMobile, isIOS, navigatorProps)}
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
