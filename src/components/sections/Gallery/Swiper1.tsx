import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import "./style.scss";

const images = ["/gallery_baby_b.jpg", "/gallery_baby_g.jpg"];

export default function Swiper1() {
    return (
        <div className="gallery__inner" data-aos="my-fade-up">
            <Swiper
                className="gallery__inner_swiper"
                modules={[EffectFade, Pagination, Autoplay]}
                loop
                effect="fade"
                fadeEffect={{ crossFade: false }}
                slidesPerView={1}
                allowTouchMove={true}
                pagination={{
                    clickable: true,
                    el: ".gallery__inner_pagination",
                    renderBullet: (index, className) =>
                        `<button class="${className}">${index + 1}</button>`,
                }}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
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

            <div className="gallery__inner_pagination" />
        </div>
    );
}
