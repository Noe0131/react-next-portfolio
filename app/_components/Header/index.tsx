import Image from "next/image";
import Link from "next/link";
import styles from "./index.module.css";

export default function Header() {
    return (
        <header className={styles.header}>
            <Link href="/" className={styles.logoLink}>
                <Image
                    src="/N.png"
                    alt="N"
                    className={styles.logo}
                    width={50} // 必要に応じてサイズを調整
                    height={50} // 必要に応じてサイズを調整
                    priority // ロゴなど重要な画像を優先的に読み込む
                />
            </Link>
            <nav>
                <ul className={styles.items}>
                    <li className={styles.item}>
                        <Link href="/hobby">趣味</Link>
                    </li>
                    <li className={styles.item}>
                        <Link href="/about">自己紹介</Link>
                    </li>
                    <li className={styles.item}>
                        <Link href="/skill">スキル</Link>
                    </li>
                    <li className={styles.contact}>
                        <Link href="/contact">お問い合わせ</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
