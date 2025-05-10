import "./styles.scss";

export default function index() {
    const handleTmapNavigation = () => {
        const startX = 127.027621; // 출발지 경도
        const startY = 37.497942; // 출발지 위도
        const endX = 127.035919; // 도착지 경도
        const endY = 37.511682; // 도착지 위도
        const endName = encodeURIComponent("강남역");

        const url = `tmap://route?startx=${startX}&starty=${startY}&endx=${endX}&endy=${endY}&endname=${endName}&appKey=당신의_APP_KEY`;
        window.location.href = url;
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

                <button onClick={handleTmapNavigation}>티맵으로 길찾기</button>
            </div>
        </div>
    );
}
