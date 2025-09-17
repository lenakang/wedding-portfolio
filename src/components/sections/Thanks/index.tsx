import { BRIDE_NAME, GROOM_NAME } from "@/constants/info";
import styles from "./styles.module.scss";

export default function index() {
    return (
        <section className={styles.thanks}>
            <p data-aos="my-fade-up">
                축복해 주시는 모든 분들께 깊이 감사드리며,
                <br />
                이 마음 잊지 않고 행복하게 살아가겠습니다.
                <br />
                <br />
                <span>
                    신랑 {GROOM_NAME} · 신부 {BRIDE_NAME}
                </span>
            </p>
        </section>
    );
}
