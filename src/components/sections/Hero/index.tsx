import Image from "next/image";
import styles from "./styles.module.scss";

export default function index() {
    return (
        <section className={styles.hero}>
            <div className={styles.hero__box}>
                <Image
                    src="/hero.jpg"
                    sizes="(max-width: 768px) 100vw, 768px"
                    alt="Couple"
                    fill
                    priority
                />
            </div>
            <Image
                className={styles.hero__logo}
                src="/logo_dark.png"
                alt="logo"
                width={1024}
                height={1024}
                priority
            />
        </section>
    );
}
