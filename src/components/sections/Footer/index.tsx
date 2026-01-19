"use client";

import { useEffect } from "react";
import { shareKakaoWithTracking } from "@/lib/shareKakaoWithTracking";
import styles from "./styles.module.scss";

export default function Footer() {
    useEffect(() => {
        const img = new Image();
        img.src = "/kakaotalk_sharing_btn_medium.png";
    }, []);

    return (
        <footer className={styles.footer}>
            <button
                className={styles.shareBtn}
                onClick={() => shareKakaoWithTracking("footer")}
            >
                카카오톡 공유하기
            </button>

            <div className={styles.copyright}>
                © 2025 Narae Kang. All rights reserved.
            </div>
        </footer>
    );
}
