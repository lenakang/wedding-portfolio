"use client";

import "./styles.scss";
import DestinationNavigator from "./DestinationNavigator";

const lat = 37.519518;
const lng = 127.020056;
const name = "신사스퀘어";

export default function Index() {
    return (
        <div className="map">
            <h3>오시는 길</h3>
            <div className="info">
                <h4>
                    더컨벤션 신사
                    <span>4층 그랜드볼룸홀</span>
                </h4>
                <p>서울 강남구 강남대로 652</p>
                <a href="tel:02-6081-5000" className="underline">
                    전화하기
                </a>
            </div>
            <div className="map-info">
                <DestinationNavigator lat={lat} lng={lng} name={name} />
            </div>
        </div>
    );
}
