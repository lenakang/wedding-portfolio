"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";
import "./style.scss";

const images = Array.from(
    { length: 8 },
    (_, i) => `/gallery_swiper_${i + 1}.jpg`
);

export default function Swiper2() {
    return (
        <>
            <Swiper
                className="gallery__present_swiper"
                modules={[Navigation, Autoplay, Pagination]}
                slidesPerView={1}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
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
                        <div className="swiper-zoom-container">
                            <div className="zoom-wrapper">
                                <Image
                                    src={src}
                                    alt={`Slide ${idx + 1}`}
                                    fill
                                    sizes="100vw"
                                    loading={idx <= 2 ? "eager" : "lazy"}
                                    priority={idx <= 2}
                                />
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="swiper2-pagination" />
        </>
    );
}
