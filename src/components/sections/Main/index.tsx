"use client";

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
import AOS from "aos";
import "aos/dist/aos.css";
import "./main.scss";
import KakaoShareButton from "@/components/form/KakaoShareButton";

export default function Main() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            offset: 10,
        });
    }, []);

    return (
        <>
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
                    <KakaoShareButton />© 2025 Narae Kang. All rights reserved.
                </footer>
            </main>
        </>
    );
}
