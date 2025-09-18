"use client";

import { MENU } from "@/constants/menu";
import { WEDDING_HALL, WEDDING_VENUE } from "@/constants/info";
import CopyToClipboardButton from "./CopyToClipboardButton";
import DestinationNavigator from "./DestinationNavigator";
import NaverMap from "./NaverMap";
import "./styles.scss";

const lat = 37.54051;
const lng = 126.99683;
const name = WEDDING_VENUE;

export default function Index() {
    return (
        <section id={MENU.MAP} className="map">
            <div className="title-korean" data-aos="my-fade-up">
                <span className="tag">Map</span>
                <h3>오시는 길</h3>
            </div>
            <div className="info" data-aos="my-fade-up">
                <h4>
                    {WEDDING_VENUE}
                    <span>{WEDDING_HALL}</span>
                </h4>
                <p>서울 용산구 소월로 322</p>
                <div className="actions">
                    <CopyToClipboardButton address="서울 용산구 소월로 322" />
                    <a href="tel:02-6081-5000" className="underline">
                        전화하기
                    </a>
                </div>
            </div>
            <div className="map-info" data-aos="my-fade-up">
                <NaverMap lat={lat} lng={lng} label={WEDDING_VENUE} />
                <DestinationNavigator lat={lat} lng={lng} name={name} />
            </div>
            <div className="transportation" data-aos="my-fade-up">
                <dl>
                    <dt>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                        >
                            <path d="M224 0C348.8 0 448 35.2 448 80l0 16 0 320c0 17.7-14.3 32-32 32l0 32c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-32-192 0 0 32c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-32c-17.7 0-32-14.3-32-32L0 96 0 80C0 35.2 99.2 0 224 0zM64 128l0 128c0 17.7 14.3 32 32 32l256 0c17.7 0 32-14.3 32-32l0-128c0-17.7-14.3-32-32-32L96 96c-17.7 0-32 14.3-32 32zM80 400a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm288 0a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />
                        </svg>
                        버스
                    </dt>
                    <dd>하얏트호텔 하차 (도보 3분)</dd>
                </dl>
                <dl>
                    <dt>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                        >
                            <path d="M96 0C43 0 0 43 0 96L0 352c0 48 35.2 87.7 81.1 94.9l-46 46C28.1 499.9 33.1 512 43 512l39.7 0c8.5 0 16.6-3.4 22.6-9.4L160 448l128 0 54.6 54.6c6 6 14.1 9.4 22.6 9.4l39.7 0c10 0 15-12.1 7.9-19.1l-46-46c46-7.1 81.1-46.9 81.1-94.9l0-256c0-53-43-96-96-96L96 0zM64 128c0-17.7 14.3-32 32-32l80 0c17.7 0 32 14.3 32 32l0 96c0 17.7-14.3 32-32 32l-80 0c-17.7 0-32-14.3-32-32l0-96zM272 96l80 0c17.7 0 32 14.3 32 32l0 96c0 17.7-14.3 32-32 32l-80 0c-17.7 0-32-14.3-32-32l0-96c0-17.7 14.3-32 32-32zM64 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm288-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
                        </svg>
                        지하철
                    </dt>
                    <dd>6호선 한강진역 1번 출구 (도보 13분)</dd>
                </dl>
                <dl>
                    <dt>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                        >
                            <path d="M135.2 117.4L109.1 192l293.8 0-26.1-74.6C372.3 104.6 360.2 96 346.6 96L165.4 96c-13.6 0-25.7 8.6-30.2 21.4zM39.6 196.8L74.8 96.3C88.3 57.8 124.6 32 165.4 32l181.2 0c40.8 0 77.1 25.8 90.6 64.3l35.2 100.5c23.2 9.6 39.6 32.5 39.6 59.2l0 144 0 48c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-48L96 400l0 48c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-48L0 256c0-26.7 16.4-49.6 39.6-59.2zM128 288a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm288 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />
                        </svg>
                        자차
                    </dt>
                    <dd>서울 용산구 소월로 322 그랜드 하얏트 서울</dd>
                </dl>
            </div>
        </section>
    );
}
