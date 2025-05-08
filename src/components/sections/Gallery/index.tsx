import Image from "next/image";
import styles from "./style.module.scss";

export default function index() {
    return (
        <div className={styles.gallery}>
            <h3>Gallery</h3>

            <div className={styles.inner}>
                <div className={styles.img}>
                    <Image src="/img1_m.jpg" fill alt="old pic" />
                </div>
                <div>1</div>
            </div>
        </div>
    );
}
