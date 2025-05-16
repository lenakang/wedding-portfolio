import Script from "next/script";

export default function AppScript() {
    return (
        <>
            {/* 네이버 지도 SDK (즉시 실행) */}
            <Script
                strategy="beforeInteractive"
                src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=${process.env.NEXT_PUBLIC_NAVER_MAP_CLIENT_ID}`}
            />
            {/* 카카오네비 SDK (로드만, init은 따로 클라이언트에서) */}
            <Script
                strategy="afterInteractive"
                src="https://t1.kakaocdn.net/kakao_js_sdk/2.7.5/kakao.min.js"
                integrity="sha384-dok87au0gKqJdxs7msEdBPNnKSRT+/mhTVzq+qOhcL464zXwvcrpjeWvyj1kCdq6"
                crossOrigin="anonymous"
            />
            {/* 카카오내비 공유하기 */}
            <Script
                strategy="beforeInteractive"
                src="https://t1.kakaocdn.net/kakao_js_sdk/2.7.5/kakao.min.js"
                crossOrigin="anonymous"
            />
        </>
    );
}
