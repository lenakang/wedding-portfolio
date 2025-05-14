export type NavigatorProps = {
  lat: number;
  lng: number;
  name: string;
};

export const isMobileDevice = (): boolean =>
  /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

export const isIOSDevice = (): boolean =>
  /iPhone|iPad|iPod/i.test(navigator.userAgent);

export const openLink = (
  isMobile: boolean,
  appUrl: string,
  fallbackUrl: string
) => {
  if (!isMobile) {
    alert("이 기능은 모바일 기기에서만 사용할 수 있습니다.");
    return;
  }

  const now = Date.now();
  window.location.href = appUrl;

  setTimeout(() => {
    const elapsed = Date.now() - now;
    if (document.visibilityState === "visible" && elapsed < 1500) {
      window.location.href = fallbackUrl;
    }
  }, 1200);
};

export const handleTmap = (
  isMobile: boolean,
  isIOS: boolean,
  { lat, lng, name }: NavigatorProps
) => {
  const appUrl = `tmap://route?goalx=${lng}&goaly=${lat}&goalname=${encodeURIComponent(
    name
  )}`;
  const fallbackUrl = isIOS
    ? "https://apps.apple.com/kr/app/tmap-%ED%8B%B0%EB%A7%B5/id431589174"
    : "https://play.google.com/store/apps/details?id=com.skt.tmap.ku";
  openLink(isMobile, appUrl, fallbackUrl);
};

export const handleNaver = (
  isMobile: boolean,
  isIOS: boolean,
  { lat, lng, name }: NavigatorProps
) => {
  const appUrl = `nmap://route/car?dlat=${lat}&dlng=${lng}&dname=${encodeURIComponent(
    name
  )}&appname=com.example.app`;
  const fallbackUrl = isIOS
    ? "https://apps.apple.com/kr/app/id311867728"
    : "https://play.google.com/store/apps/details?id=com.nhn.android.nmap";
  openLink(isMobile, appUrl, fallbackUrl);
};

export const handleKakaoNavi = (
  isMobile: boolean,
  kakaoReady: boolean,
  { lat, lng, name }: NavigatorProps
) => {
  if (!isMobile) {
    alert("카카오네비는 모바일 기기에서만 실행됩니다.");
    return;
  }

  if (!kakaoReady || !window.Kakao?.Navi?.start) {
    alert("카카오네비를 실행할 수 없습니다.");
    return;
  }

  window.Kakao.Navi.start({
    name,
    x: lng,
    y: lat,
    coordType: "wgs84",
  });
};
