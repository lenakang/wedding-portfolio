import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Pagination, Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";
import "./style.scss";
import "swiper/css";
import "swiper/css/effect-fade";
import Link from "next/link";

const images = ["/img_DM.jpg", "/img2_m.jpg"];
const images2 = [1, 2].map((each) => `/gallery_more_${each}.jpg`);

export default function MyGallery() {
    return (
        <div className="gallery">
            <span className="tag" data-aos="my-fade-up">
                past and present
            </span>
            <h3 data-aos="my-fade-up">Gallery</h3>
            <p data-aos="my-fade-up">
                This section traces the journey of the bride and groom— from
                their early years to the days leading up to their wedding.
                <span>1990년대, 신랑과 신부의 어린 시절 모습</span>
            </p>
            <div className="gallery__inner" data-aos="my-fade-up">
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
                        delay: 3000,
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
            <div className="gallery__present" data-aos="my-fade-up">
                <p>
                    The present /{" "}
                    <Link href="#" className="underline">
                        see all
                    </Link>
                </p>
                <span className="name">Narae & Daeseung</span>
                <Swiper
                    className="gallery__present_swiper"
                    modules={[EffectFade, Navigation, Autoplay]}
                    effect="fade"
                    fadeEffect={{ crossFade: false }}
                    slidesPerView={1}
                    navigation
                    allowTouchMove={false}
                    autoplay={{
                        delay: 1000,
                        disableOnInteraction: false,
                    }}
                >
                    {images2.map((src, idx) => (
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
            </div>
        </div>
    );
}
