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
    Account,
    GuestBook,
    Thanks,
} from "@/components/sections";
import Script from "next/script";
import Head from "next/head";

export default function Home() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            offset: 10,
        });
    }, []);

    return (
        <>
            {/* 네이버 지도 SDK */}
            <Script
                strategy="beforeInteractive"
                src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=${process.env.NEXT_PUBLIC_NAVER_MAP_CLIENT_ID}`}
            />

            {/* 카카오내비 SDK */}
            <Script
                strategy="afterInteractive"
                src="https://t1.kakaocdn.net/kakao_js_sdk/2.7.5/kakao.min.js"
                integrity="sha384-dok87au0gKqJdxs7msEdBPNnKSRT+/mhTVzq+qOhcL464zXwvcrpjeWvyj1kCdq6"
                crossOrigin="anonymous"
                onLoad={() => {
                    if (window.Kakao && !window.Kakao.isInitialized()) {
                        window.Kakao.init(
                            process.env.NEXT_PUBLIC_KAKAO_JS_KEY!
                        );
                    }
                }}
            />
            <Head>
                <title>나래❤️대승 결혼합니다.</title>
                <meta property="og:title" content="나래❤️대승 결혼합니다." />
                <meta
                    property="og:description"
                    content="6월 28일 (토) 오전 11시 / 더컨벤션 신사"
                />
                <meta property="og:image" content="/og_img.jpg" />
                <meta
                    property="og:url"
                    content="https://wedding-iota-seven.vercel.app/"
                />
                <meta property="og:type" content="website" />
            </Head>
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
                <Account />
                <GuestBook />
                <Thanks />
                <footer className="footer">
                    © 2025 Narae Kang. All rights reserved.
                </footer>
            </main>
        </>
    );
}
