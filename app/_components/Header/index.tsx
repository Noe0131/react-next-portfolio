import Image from "next/image";
import styles from "./index.module.css";

export default function Header() {
    return (
        <header className={styles.header}>
            <a href="/" className={styles.logoLink}>
                <Image
                    src="/N.png"
                    alt="N"
                    className={styles.logo}
                    width={50} // 必要に応じてサイズを調整
                    height={50} // 必要に応じてサイズを調整
                    priority // ロゴなど重要な画像を優先的に読み込む
                />
            </a>
        </header>
    );
}
