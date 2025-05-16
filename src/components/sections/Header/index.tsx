"use client";

import Link from "next/link";
import Nav from "./Nav";
import styles from "./styles.module.scss";
import { useState } from "react";

export default function Header() {
    const [open, setOpen] = useState(false);

    return (
        <header className={styles.header}>
            <div className={styles.header_title}>
                <Link href="/" className={styles.header_title__logo}>
                    <h1>lena kang</h1>
                </Link>
                <div
                    className={styles.header_title__trigger}
                    onClick={() => setOpen((prev) => !prev)}
                >
                    MENU
                </div>
            </div>

            {open && <Nav />}
        </header>
    );
}
