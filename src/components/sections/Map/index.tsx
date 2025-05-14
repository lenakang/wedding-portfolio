"use client";

import DestinationNavigator from "./DestinationNavigator";
import NaverMap from "./NaverMap";
import "./styles.scss";

const lat = 37.5194582292788;
const lng = 127.019118804537;
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
        <NaverMap lat={lat} lng={lng} label="더컨벤션 신사" />
        <DestinationNavigator lat={lat} lng={lng} name={name} />
      </div>
    </div>
  );
}
