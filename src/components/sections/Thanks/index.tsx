import Image from "next/image";
import styles from "./styles.module.scss";

export default function index() {
    return (
        <div className={styles.thanks}>
            <p data-aos="my-fade-up">
                축복해 주시는 모든 분들께 깊이 감사드리며,
                <br />
                이 마음 잊지 않고 행복하게 살아가겠습니다.
                <br />
                <br />
                신랑 위대승 · 신부 강나래
            </p>
            <div className={styles.thanks__img}>
                <Image
                    src="/thanks_1.jpg"
                    fill
                    alt="couple"
                    className={styles.img}
                />
            </div>
        </div>
    );
}
