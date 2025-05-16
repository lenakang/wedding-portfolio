import { MENU } from "@/constants/menu";
import styles from "./styles.module.scss";

export default function index() {
    return (
        <section id={MENU.INVITE} className={styles.begin}>
            <div className="title-korean" data-aos="my-fade-up">
                <span className="tag">invite you</span>
                <h3>초대합니다</h3>
            </div>
            <p data-aos="my-fade-up">
                눈부시게 찬란한 날, 저희 부부가 됩니다.
                <br />
                함께하던 작은 일상이 일생이 되는 날,
                <br />
                나란히 같은 곳을 보고 걸으며
                <br />
                지금처럼 예쁘게 살아가겠습니다.
                <br />
                우리의 설레는 첫걸음을 함께 빛내주세요.
            </p>
        </section>
    );
}
