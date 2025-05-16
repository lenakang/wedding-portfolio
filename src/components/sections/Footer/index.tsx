"use client";

import { useState } from "react";
import FooterPopup from "./FooterPopup";
import styles from "./styles.module.scss";

export default function Footer() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <footer className={styles.footer}>
            <button className={styles.shareBtn} onClick={() => setIsOpen(true)}>
                공유하기
            </button>

            {isOpen && <FooterPopup setIsOpen={setIsOpen} />}

            <div className={styles.copyright}>
                © 2025 Narae Kang. All rights reserved.
            </div>
        </footer>
    );
}
