"use client";

type NavigatorProps = {
    lat: number;
    lng: number;
    name: string;
};

export default function DestinationNavigator({
    lat,
    lng,
    name,
}: NavigatorProps) {
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
    let linkOpened = false;

    const openLink = (appUrl: string, fallbackUrl: string) => {
        if (!isMobile || linkOpened) return;

        linkOpened = true;

        const now = Date.now();
        window.location.href = appUrl;

        setTimeout(() => {
            const elapsed = Date.now() - now;
            if (document.visibilityState === "visible" && elapsed < 1500) {
                window.location.href = fallbackUrl;
            }
            linkOpened = false;
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

    const handleKakaoMap = () => {
        const appUrl = `kakaomap://route?ep=${lat},${lng}&by=CAR`;
        const fallbackUrl = isIOS
            ? "https://apps.apple.com/kr/app/id304608425" // 카카오맵 iOS
            : "https://play.google.com/store/apps/details?id=net.daum.android.map"; // 카카오맵 Android
        openLink(appUrl, fallbackUrl);
    };

    return (
        <div className="navigators">
            <button onClick={handleTmap}>티맵으로 길찾기</button>
            <button onClick={handleNaver}>네이버지도 길찾기</button>
            <button onClick={handleKakaoMap}>카카오맵으로 길찾기</button>
        </div>
    );
}
