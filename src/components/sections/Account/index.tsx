"use client";

import { useState } from "react";
import styles from "./styles.module.scss";
import { Button } from "@/components/form";
import Popup from "./Popup";
import { groomAccountList, brideAccountList } from "@/data/contactList";

export default function Index() {
    const [openType, setOpenType] = useState<"groom" | "bride" | null>(null);

    return (
        <section className={styles.account}>
            <div className={styles.account__person}>
                <h3 data-aos="my-fade-up">마음 전하실 곳</h3>
                <p data-aos="my-fade-up">
                    축하의 마음을 전하고 싶지만 <br />
                    직접 찾아오시기 어려운 분들을 위해, <br />
                    마음을 전하실 수 있는 계좌 정보를 안내드립니다. <br />
                    <br />
                    보내주시는 따뜻한 마음 진심으로 감사드리며,
                    <br /> 그 정성을 오래도록 간직하겠습니다.
                </p>
            </div>

            <div className={styles.contact} data-aos="my-fade-up">
                <Button onClick={() => setOpenType("groom")}>
                    신랑측 보기
                </Button>
                <Button onClick={() => setOpenType("bride")}>
                    신부측 보기
                </Button>
            </div>

            {openType && (
                <Popup
                    setIsOpen={() => setOpenType(null)}
                    list={
                        openType === "groom"
                            ? groomAccountList
                            : brideAccountList
                    }
                />
            )}
        </section>
    );
}
