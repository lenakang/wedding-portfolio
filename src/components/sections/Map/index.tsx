"use client";

import "./styles.scss";
import DestinationNavigator from "./DestinationNavigator";
import { useEffect } from "react";

const lat = 37.5194582292788;
const lng = 127.019118804537;
const name = "신사스퀘어";

export default function Index() {
  useEffect(() => {
    if (window.naver && window.naver.maps) {
      const center = new naver.maps.LatLng(lat, lng);

      const mapOptions = {
        center,
        zoom: 17,
      };

      const map = new naver.maps.Map("map", mapOptions);

      const marker = new naver.maps.Marker({
        position: center,
        map: map,
      });

      const infoWindow = new naver.maps.InfoWindow({
        content: `<div class="map__infowindow">더컨벤션 신사</div>`,
      });
      infoWindow.open(map, marker);
    }
  }, []);

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
        <div id="map" className="naverDynamicMap" />
        <div className="navigators">
          <DestinationNavigator lat={lat} lng={lng} name={name} />
        </div>
      </div>
    </div>
  );
}
