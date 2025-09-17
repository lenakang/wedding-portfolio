"use client";

import Image from "next/image";
import Popup from "./Popup";
import { useState } from "react";
import { Button } from "@/components/form";
import {
    BRIDE_FATHER,
    BRIDE_MOTHER,
    BRIDE_NAME,
    GROOM_FATHER,
    GROOM_MOTHER,
    GROOM_NAME,
} from "@/constants/info";
import { PEOPLE } from "@/constants/people";
import styles from "./styles.module.scss";

export default function Index() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <section className={styles.people}>
            <div className={styles.people__person}>
                <div className={styles.people__person_img}>
                    <Image
                        src="/people_bride.webp"
                        fill
                        alt="bride"
                        sizes="(max-width: 768px) 50vw, 768px"
                    />
                </div>
                <div className={styles.people__person_desc}>
                    <div
                        className={styles.people__person_inner}
                        data-aos="my-fade-up"
                    >
                        <div className={styles.people__person_desc_name}>
                            신부 <span>{BRIDE_NAME}</span>
                        </div>
                        <ul>
                            {PEOPLE.bride.self.description?.map((word, i) => (
                                <li key={i}>{word}</li>
                            ))}
                        </ul>
                        <div>
                            {BRIDE_FATHER} · {BRIDE_MOTHER}의 장녀
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${styles.people__person} ${styles.reverse}`}>
                <div className={styles.people__person_img}>
                    <Image
                        src="/people_groom.webp"
                        fill
                        alt="groom"
                        sizes="(max-width: 768px) 50vw, 768px"
                    />
                </div>
                <div className={styles.people__person_desc}>
                    <div
                        className={styles.people__person_inner}
                        data-aos="my-fade-up"
                    >
                        <div className={styles.people__person_desc_name}>
                            신랑 <span>{GROOM_NAME}</span>
                        </div>
                        <ul>
                            {PEOPLE.groom.self.description?.map((word, i) => (
                                <li key={i}>{word}</li>
                            ))}
                        </ul>
                        <div>
                            {GROOM_FATHER} · {GROOM_MOTHER}의 장남
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.contact} data-aos="my-fade-up">
                <Button onClick={() => setIsOpen(true)}>연락처 보기</Button>
            </div>

            {isOpen && <Popup setIsOpen={setIsOpen} />}
        </section>
    );
}
