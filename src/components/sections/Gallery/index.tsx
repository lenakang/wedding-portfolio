import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import "./style.scss";
import "swiper/css";
import "swiper/css/effect-fade";

const images = ["/img_DM.jpg", "/img2_m.jpg"];

export default function MyGallery() {
    return (
        <div className="gallery">
            <span className="tag">past and present</span>
            <h3>Gallery</h3>
            <p>Just a few moments from when it all was still ahead.</p>
            <div className="gallery__inner">
                <Swiper
                    className="gallery__inner_swiper"
                    modules={[EffectFade, Pagination, Autoplay]}
                    effect="fade"
                    fadeEffect={{ crossFade: false }}
                    slidesPerView={1}
                    allowTouchMove={false}
                    pagination={{
                        clickable: true,
                        el: ".gallery__inner_pagination",
                        renderBullet: (index, className) =>
                            `<button class="${className}">${
                                index + 1
                            }</button>`,
                    }}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                >
                    {images.map((src, idx) => (
                        <SwiperSlide key={`slide-${idx}`}>
                            <div className="img">
                                <Image
                                    src={src}
                                    alt={`Slide ${idx + 1}`}
                                    fill
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className="gallery__inner_pagination" />
            </div>
        </div>
    );
}
