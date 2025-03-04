import Image from "next/image";
import Link from "next/link";
import styles from "./index.module.css";
import Menu from "../Menu";

export default function Header() {
    return (
        <header className={styles.header}>
            <Link href="/" className={styles.logoLink}>
                <Image
                    src="/About/No.png"
                    alt="N"
                    className={styles.logo}
                    width={50} 
                    height={50}
                    priority
                />
            </Link>
            <Menu />
        </header>
    );
}
