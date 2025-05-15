"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination, Zoom } from "swiper/modules";
import Image from "next/image";
import "./style.scss";

const images = Array.from(
    { length: 7 },
    (_, i) => `/gallery_swiper_${i + 1}.jpg`
);

export default function Swiper2() {
    return (
        <>
            <Swiper
                className="gallery__present_swiper"
                modules={[Navigation, Autoplay, Pagination, Zoom]}
                slidesPerView={1}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                zoom={{
                    maxRatio: 2,
                }}
                speed={800}
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
                {images.map((src, idx) => (
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
