"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import {
    EffectFade,
    Navigation,
    Autoplay,
    Pagination,
    Zoom,
} from "swiper/modules";
import Image from "next/image";
import "./style.scss";

const images2 = [1, 2].map((each) => `/gallery_${each}.jpg`);
const images = [1, 2, 3, 4, 5, 6, 7, 8].map(
    (img) => `/gallery_more_${img}.jpg`
);
const allImgs = images2.concat(images);

export default function Swiper2() {
    return (
        <>
            <Swiper
                className="gallery__present_swiper"
                modules={[EffectFade, Navigation, Autoplay, Pagination, Zoom]}
                effect="fade"
                fadeEffect={{ crossFade: false }}
                slidesPerView={1}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                zoom={{
                    maxRatio: 2, // 2배 확대
                }}
                loop
                allowTouchMove={true}
                pagination={{
                    type: "fraction",
                    el: ".swiper2-pagination",
                }}
                navigation={{
                    prevEl: ".prev",
                    nextEl: ".next",
                }}
            >
                {allImgs.map((src, idx) => (
                    <SwiperSlide key={`slide-${idx}`}>
                        <div className="img">
                            <Image src={src} alt={`Slide ${idx + 1}`} fill />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="swiper2-pagination" />
        </>
    );
}
