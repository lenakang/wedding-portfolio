"use client";

import { useEffect } from "react";

interface NaverMapProps {
    lat: number;
    lng: number;
    label: string;
}

export default function NaverMap({ lat, lng, label }: NaverMapProps) {
    useEffect(() => {
        if (!window.naver || !window.naver.maps) return;

        const center = new window.naver.maps.LatLng(lat, lng);

        const map = new window.naver.maps.Map("map", {
            center,
            zoom: 17,
            scrollWheel: false,
            zoomControl: true,
            zoomControlOptions: {
                style: window.naver.maps.ZoomControlStyle.SMALL,
                position: window.naver.maps.Position.TOP_RIGHT,
            },
        });

        const marker = new window.naver.maps.Marker({ position: center, map });
        const infoWindow = new window.naver.maps.InfoWindow({
            content: `<div class="map__infowindow">${label}</div>`,
        });
        infoWindow.open(map, marker);

        const handleResize = () => {
            map.setCenter(center);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [lat, lng, label]);

    return <div id="map" className="naverDynamicMap" />;
}
