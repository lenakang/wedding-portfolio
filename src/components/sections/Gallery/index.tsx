"use client";
import "./style.scss";
import "swiper/css";
import "swiper/css/effect-fade";
import Swiper1 from "./Swiper1";
import Swiper2 from "./Swiper2";
import { MENU } from "@/constants/menu";

export default function Index() {
    return (
        <section id={MENU.GALLERY} className="gallery">
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
                    The present / <span>현재</span>
                </p>
                <div className="gallery__present__title">
                    <span className="name">Narae & Gildong</span>
                    <div className="controls">
                        <button className="prev" />
                        <button className="next" />
                    </div>
                </div>
                <Swiper2 />
            </div>
        </section>
    );
}
