import { MENU_LIST } from "@/constants/menu";
import Link from "next/link";
import styles from "./styles.module.scss";

export default function Nav() {
    return (
        <div className={styles.nav}>
            <div className={styles.menu_fixed}>
                <div className={styles.menu}>
                    <Link href="/">
                        <h1>lena kang</h1>
                    </Link>
                    <div className={styles.menu__close}>CLOSE</div>
                </div>

                <ul>
                    {MENU_LIST.map((menu) => (
                        <li key={menu.id}>{menu.title}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
