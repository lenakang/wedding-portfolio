import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";
import "./style.scss";

const images2 = [1, 2, 3, 4].map((each) => `/gallery_${each}.jpg`);

export default function Swiper2() {
    return (
        <Swiper
            className="gallery__present_swiper"
            modules={[EffectFade, Navigation, Autoplay]}
            effect="fade"
            fadeEffect={{ crossFade: false }}
            slidesPerView={1}
            autoplay={{
                delay: 5000,
                disableOnInteraction: false,
            }}
            allowTouchMove={false}
            loop
            onBeforeInit={(swiper) => {
                if (typeof swiper.params.navigation === "object") {
                    Object.assign(swiper.params.navigation, {
                        prevEl: ".prev",
                        nextEl: ".next",
                    });
                }
            }}
        >
            {images2.map((src, idx) => (
                <SwiperSlide key={`slide-${idx}`}>
                    <div className="img">
                        <Image src={src} alt={`Slide ${idx + 1}`} fill />
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
