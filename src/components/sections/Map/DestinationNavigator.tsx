"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/form";
import Image from "next/image";

type NavigatorProps = {
  lat: number;
  lng: number;
  name: string;
};

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
  const [_, setIsMobile] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [kakaoReady, setKakaoReady] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent;
    const mobile = /Android|iPhone|iPad|iPod/i.test(userAgent);
    const ios = /iPhone|iPad|iPod/i.test(userAgent);

    setIsMobile(mobile);
    setIsIOS(ios);

    // ✅ SDK는 이미 Home.tsx에서 로드되므로 여기선 초기화만 확인
    if (window.Kakao?.isInitialized()) {
      setKakaoReady(true);
    }
  }, []);

  const handleKakaoNavi = () => {
    if (!kakaoReady || !window.Kakao?.Navi) {
      alert("카카오내비를 실행할 수 없습니다.");
      return;
    }

    window.Kakao.Navi.start({
      name,
      x: lng,
      y: lat,
      coordType: "wgs84",
    });
  };

  const openLink = (appUrl: string, fallbackUrl: string) => {
    const now = Date.now();
    window.location.href = appUrl;
    setTimeout(() => {
      const elapsed = Date.now() - now;
      if (document.visibilityState === "visible" && elapsed < 1500) {
        window.location.href = fallbackUrl;
      }
    }, 1200);
  };

  const handleTmap = () => {
    const appUrl = `tmap://route?goalx=${lng}&goaly=${lat}&goalname=${encodeURIComponent(
      name
    )}`;
    const fallbackUrl = isIOS
      ? "https://apps.apple.com/kr/app/tmap-%ED%8B%B0%EB%A7%B5/id431589174"
      : "https://play.google.com/store/apps/details?id=com.skt.tmap.ku";
    openLink(appUrl, fallbackUrl);
  };

  const handleNaver = () => {
    const appUrl = `nmap://route/car?dlat=${lat}&dlng=${lng}&dname=${encodeURIComponent(
      name
    )}&appname=com.example.app`;
    const fallbackUrl = isIOS
      ? "https://apps.apple.com/kr/app/id311867728"
      : "https://play.google.com/store/apps/details?id=com.nhn.android.nmap";
    openLink(appUrl, fallbackUrl);
  };

  return (
    <div className="navigators">
      <Button size="small" className="tmap" onClick={handleTmap}>
        <Image src="/icon_tmap.png" width={13} height={13} alt="icon" />
        티맵
      </Button>

      <Button size="small" className="kakao" onClick={handleKakaoNavi}>
        <Image src="/icon_kakao.png" width={15} height={15} alt="icon" />
        카카오내비
      </Button>

      <Button size="small" className="naver" onClick={handleNaver}>
        <Image src="/icon_naver.png" width={15} height={15} alt="icon" />
        네이버지도
      </Button>
    </div>
  );
}
