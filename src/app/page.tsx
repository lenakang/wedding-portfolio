"use client";

import "aos/dist/aos.css";
import "./page.scss";
import AOS from "aos";
import { useEffect } from "react";
import {
  About,
  Invite,
  Hero,
  Calendar,
  People,
  Gallery,
  Map,
} from "@/components/sections";
import Script from "next/script";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 10,
    });
  }, []);

  return (
    <>
      <Script
        strategy="beforeInteractive"
        src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=${process.env.NEXT_PUBLIC_NAVER_MAP_CLIENT_ID}`}
      />
      <main className="home">
        <header className="header">
          <div>
            <h1>lena kang</h1>
          </div>
        </header>
        <Hero />
        <About />
        <Invite />
        <People />
        <Calendar />
        <Gallery />
        <Map />
      </main>
    </>
  );
}
