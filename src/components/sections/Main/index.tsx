"use client";

import { useEffect, useState } from "react";
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
import AOS from "aos";
import "aos/dist/aos.css";
import "./main.scss";
import Script from "next/script";
import { MENU } from "@/constants/menu";

const SECTION_IDS = [
    "about",
    "invite",
    "people",
    "calendar",
    "gallery",
    "map",
    "account",
    "guestbook",
    "thanks",
];

export default function Main() {
    const [isTop, setIsTop] = useState(true);
    useEffect(() => {
        AOS.init({
            duration: 1000,
            offset: 10,
        });
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setIsTop(window.scrollY <= 0);
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (typeof window === "undefined" || !window.gtag) return;

        SECTION_IDS.forEach((id) => {
            const el = document.getElementById(id);
            if (!el) return;

            let hasSent = false;

            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting && !hasSent) {
                        hasSent = true;
                        window.gtag("event", "section_view", {
                            section_name: id,
                            page_location: window.location.href,
                        });
                    }
                },
                { threshold: 0.5 }
            );

            observer.observe(el);
        });
    }, []);

    return (
        <>
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
            <main id={MENU.HOME} className={`home ${isTop ? "home_top" : ""}`}>
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
            </main>
        </>
    );
}
