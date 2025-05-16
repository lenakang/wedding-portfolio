import classNames from "classnames";
import styles from "./styles.module.scss";

export default function Menu() {
    return (
        <div
            className={classNames(styles.menu, {
                [styles.menu__open]: open,
                [styles.menu__closed]: !open,
            })}
        ></div>
    );
}
