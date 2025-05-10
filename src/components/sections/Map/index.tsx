"use client";

import "./styles.scss";

export default function Index() {
    const lat = 37.519518;
    const lng = 127.020056;
    const name = "신사스퀘어";

    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

    const openLink = (url: string, label: string) => {
        if (!isMobile) {
            alert(`${label} 길찾기는 모바일 기기에서만 실행됩니다.`);
            return;
        }
        window.location.href = url;
    };

    const handleTmap = () => {
        const url = `tmap://route?goalx=${lng}&goaly=${lat}&goalname=${encodeURIComponent(
            name
        )}`;
        openLink(url, "티맵");
    };

    const handleKakao = () => {
        const name = "신사스퀘어";
        const x = 127.020056;
        const y = 37.519518;
        const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

        if (!isMobile) {
            alert("카카오내비는 모바일 기기에서만 사용 가능합니다.");
            return;
        }

        const url = `kakaonavi://navigate?name=${encodeURIComponent(
            name
        )}&x=${x}&y=${y}&coord_type=wgs84`;

        // 앱 없을 경우 대비 fallback
        const fallback = `https://play.google.com/store/apps/details?id=com.locnall.KimGiSa`;

        window.location.href = url;
        setTimeout(() => {
            window.location.href = fallback;
        }, 1500);
    };

    const handleNaver = () => {
        const url = `nmap://route/car?dlat=${lat}&dlng=${lng}&dname=${encodeURIComponent(
            name
        )}&appname=com.example.app`;
        openLink(url, "네이버지도");
    };

    return (
        <div className="map">
            <h3>오시는 길</h3>
            <div className="info">
                <h4>
                    더컨벤션 신사
                    <span>4층 그랜드볼룸홀</span>
                </h4>
                <p>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="size-6"
                    >
                        <path
                            fillRule="evenodd"
                            d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                            clipRule="evenodd"
                        />
                    </svg>
                    서울 강남구 강남대로 652
                </p>
                <a href="tel:02-6081-5000" className="underline">
                    전화하기
                </a>

                <div className="navigators">
                    <button onClick={handleTmap}>티맵으로 길찾기</button>
                    <button onClick={handleKakao}>카카오내비로 길찾기</button>
                    <button onClick={handleNaver}>네이버지도 길찾기</button>
                </div>
            </div>
        </div>
    );
}
