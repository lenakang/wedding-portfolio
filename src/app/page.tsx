"use client";

import "aos/dist/aos.css";
import "./page.scss";
import AOS from "aos";
import { useEffect } from "react";
import { About, Begin, Hero, People } from "@/components/sections";

export default function Home() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            offset: 10,
        });
    }, []);

    return (
        <main className="home">
            <header className="header">
                <div>
                    <h1>lena kang</h1>
                </div>
            </header>
            <Hero />
            <About />
            <Begin />
            <People />
        </main>
    );
}
