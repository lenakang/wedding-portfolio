"use client";

import { useEffect } from "react";

interface NaverMapProps {
  lat: number;
  lng: number;
  label: string;
}

export default function NaverMap({ lat, lng, label }: NaverMapProps) {
  useEffect(() => {
    if (window.naver && window.naver.maps) {
      const center = new naver.maps.LatLng(lat, lng);

      const map = new naver.maps.Map("map", {
        center,
        zoom: 17,
      });

      const marker = new naver.maps.Marker({
        position: center,
        map,
      });

      const infoWindow = new naver.maps.InfoWindow({
        content: `<div class="map__infowindow">${label}</div>`,
      });

      infoWindow.open(map, marker);

      // 지도 중심을 아래로 이동
      naver.maps.Event.once(map, "idle", () => {
        map.panBy({ x: 0, y: -100 });
      });
    }
  }, [lat, lng, label]);

  return <div id="map" className="naverDynamicMap" />;
}
