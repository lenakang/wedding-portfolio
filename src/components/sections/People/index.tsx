import Image from "next/image";
import styles from "./styles.module.scss";

export default function index() {
    const desc1 = ["INFP", "수다쟁이", "웃음이 많음", "크리에이터 드리머"];
    const desc2 = [
        "ISTJ",
        "최선을 다해 쉬자",
        "잘 들어주는 사람",
        "차분한 직진러",
    ];

    return (
        <section className={styles.people}>
            <div className={styles.people__person}>
                <div className={styles.people__person_img}>
                    <Image src="/bride.jpg" fill alt="bride" />
                </div>
                <div className={styles.people__person_desc}>
                    <div>
                        <span>신부</span> 강나래
                    </div>
                    <div> 1992, 프론트엔드 개발자</div>
                    <ul>
                        {desc1.map((word, i) => (
                            <li key={i}>{word}</li>
                        ))}
                    </ul>
                    <div>강인용 · 오미경의 장녀</div>
                </div>
            </div>
            <div className={styles.people__line}>
                <div></div>
                <div>
                    신부 강나래
                    <br /> 1992, 프론트엔드 개발자
                    <ul>
                        {desc2.map((word, i) => (
                            <li key={i}>{word}</li>
                        ))}
                    </ul>
                    강인용 · 오미경의 장녀
                </div>
            </div>
        </section>
    );
}
