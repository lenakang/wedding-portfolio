"use client";

import { useEffect, useState } from "react";
import { MENU_LIST } from "@/constants/menu";
import { shareKakaoWithTracking } from "@/lib/shareKakaoWithTracking";
import Link from "next/link";
import classNames from "classnames";
import scroll from "@/utils/scroll";
import Image from "next/image";
import styles from "./styles.module.scss";

export default function Header() {
    const [open, setOpen] = useState(false);
    const [isTop, setIsTop] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            setIsTop(window.scrollY <= 0);
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={classNames(styles.header, {
                [styles.header__open]: open,
                [styles.header__closed]: !open,
                [styles.header__top]: isTop,
            })}
        >
            <div className={styles.title}>
                <h1>
                    <Link
                        href="/"
                        className={styles.title__logo}
                        onClick={() => {
                            if (open) setOpen(false);
                        }}
                    >
                        lena kang
                    </Link>
                </h1>
                <div
                    className={styles.title__trigger}
                    onClick={() => setOpen((prev) => !prev)}
                >
                    MENU
                </div>
            </div>

            <nav className={styles.menu}>
                <ul>
                    {MENU_LIST.map((menu) => (
                        <li key={menu.id}>
                            <button
                                onClick={() => {
                                    setOpen(false);
                                    setTimeout(() => scroll(menu.id), 0);
                                }}
                            >
                                {menu.title}
                            </button>
                        </li>
                    ))}
                    <li>
                        <button
                            onClick={() => shareKakaoWithTracking("header")}
                        >
                            카카오톡 공유하기
                        </button>
                    </li>
                </ul>
                <div className={styles.menu_footer}>
                    <Image
                        src="/logo_dark.png"
                        width={65}
                        height={65}
                        alt="logo"
                    />
                    <p>
                        <span>Thank you for being here with us — </span>
                        in this quiet moment of joy, our hearts remember you.
                    </p>
                </div>
            </nav>
        </header>
    );
}
