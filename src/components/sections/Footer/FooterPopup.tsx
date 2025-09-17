"use client";

import Popup from "@/components/common/Popup";
import Image from "next/image";
import { shareKakaoWithTracking } from "@/lib/shareKakaoWithTracking";
import { trackClickEvent } from "@/utils/trackClickEvent";
import { SITE_URL } from "@/constants/info";
import styles from "./styles.module.scss";

interface FooterPopup {
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function FooterPopup({ setIsOpen }: FooterPopup) {
    return (
        <Popup setIsOpen={setIsOpen}>
            <div className="popup-title">
                <h6>Share</h6>
            </div>

            <div className={styles.popup_content}>
                <button
                    onClick={() => shareKakaoWithTracking("footer")}
                    className={styles.share_kakao}
                >
                    <i>
                        <Image
                            src="/kakaotalk_sharing_btn_medium.png"
                            width={40}
                            height={40}
                            loading="eager"
                            priority
                            alt="카카오톡 공유"
                        />
                    </i>
                    카카오톡 <br />
                    공유하기
                </button>
                <button
                    className={styles.share_url}
                    onClick={() => {
                        navigator.clipboard.writeText(SITE_URL);
                        alert("URL이 복사되었습니다.");
                        trackClickEvent({
                            category: "share",
                            label: "URL 복사",
                            location: "footer",
                        });
                    }}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75"
                        />
                    </svg>
                    URL <br /> 복사하기
                </button>
            </div>
        </Popup>
    );
}
