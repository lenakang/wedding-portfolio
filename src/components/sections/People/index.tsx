"use client";

import Image from "next/image";
import styles from "./styles.module.scss";
import Popup from "./Popup";
import { useState } from "react";
import { Button } from "@/components/form";

export default function Index() {
    const [isOpen, setIsOpen] = useState(false);

    const desc1 = [
        "1992",
        "INFP",
        "수다쟁이",
        "웃음이 많음",
        "크리에이터 드리머",
    ];
    const desc2 = [
        "1989",
        "ISTJ",
        "최선을 다해 쉬자",
        "잘 들어주는 사람",
        "차분한 직진러",
    ];

    return (
        <section className={styles.people}>
            <div className={styles.people__person}>
                <div className={styles.people__person_img}>
                    <Image src="/bride.jpg" fill alt="bride" sizes="50vw" />
                </div>
                <div className={styles.people__person_desc}>
                    <div
                        className={styles.people__person_inner}
                        data-aos="my-fade-up"
                    >
                        <div className={styles.people__person_desc_name}>
                            신부 <span>강나래</span>
                        </div>
                        <ul>
                            {desc1.map((word, i) => (
                                <li key={i}>{word}</li>
                            ))}
                        </ul>
                        <div>강인용 · 오미경의 장녀</div>
                    </div>
                </div>
            </div>
            <div className={`${styles.people__person} ${styles.reverse}`}>
                <div className={styles.people__person_img}>
                    <Image src="/groom.jpg" fill alt="groom" sizes="50vw" />
                </div>
                <div className={styles.people__person_desc}>
                    <div
                        className={styles.people__person_inner}
                        data-aos="my-fade-up"
                    >
                        <div className={styles.people__person_desc_name}>
                            신랑 <span>위대승</span>
                        </div>
                        <ul>
                            {desc2.map((word, i) => (
                                <li key={i}>{word}</li>
                            ))}
                        </ul>
                        <div>위재민 · 하선영의 장남</div>
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
