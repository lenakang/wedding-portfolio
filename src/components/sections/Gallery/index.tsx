"use client";
import { useEffect } from "react";
import "./style.scss";
import "swiper/css";
import "swiper/css/effect-fade";
import Link from "next/link";
import Swiper1 from "./Swiper1";
import Swiper2 from "./Swiper2";
import { useSearchParams } from "next/navigation";

export default function Index() {
    const searchParams = useSearchParams();

    useEffect(() => {
        const target = searchParams?.get("scrollTo");
        if (target === "gallery") {
            const anchor = document.getElementById("gallery");
            if (anchor) {
                setTimeout(() => {
                    window.scrollTo({
                        top: anchor.offsetTop,
                    });
                }, 100);
            }
        }
    }, [searchParams]);

    return (
        <div className="gallery">
            <span className="tag" data-aos="my-fade-up">
                Then & Now
            </span>
            <h3 data-aos="my-fade-up">Gallery</h3>
            <p data-aos="my-fade-up">
                <span>1990년대, 신랑과 신부의 모습</span> — from their playful
                beginnings.
            </p>
            <Swiper1 />
            <div className="gallery__scroll-anchor" id="gallery" />
            <div className="gallery__present" data-aos="my-fade-up">
                <p>
                    The present /{" "}
                    <Link href="/gallery" className="underline">
                        View full gallery
                    </Link>
                </p>
                <div className="gallery__present__title">
                    <span className="name">Narae & Daeseung</span>
                    <div className="controls">
                        <button className="prev" />
                        <button className="next" />
                    </div>
                </div>
                <Swiper2 />
            </div>
        </div>
    );
}
