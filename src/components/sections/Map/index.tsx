"use client";

import "./styles.scss";
import DestinationNavigator from "./DestinationNavigator";

const lat = 37.519518;
const lng = 127.020056;
const name = "신사스퀘어";

//https://velog.io/@nagosu/React-Typescript%EB%A1%9C-%EB%84%A4%EC%9D%B4%EB%B2%84%EC%A7%80%EB%8F%84-API-%EC%A0%81%EC%9A%A9%ED%95%B4%EB%B3%B4%EA%B8%B0

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
