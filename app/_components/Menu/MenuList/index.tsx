"use client";

import { useEffect } from "react";
import Link from "next/link";
import styles from "./index.module.css";

type Props = {
    isOpen: boolean;
    onClose: () => void; 
};

export default function MenuList({ isOpen, onClose }: Props) {
    return (
        <>
            {isOpen && (
                <div
                    className={styles.overlay}
                    onClick={onClose} 
                ></div>
            )}
            <div className={`${styles.menuList} ${isOpen ? styles.open : ""}`}>
                <ul className={styles.items}>
                    <li className={styles.item}>
                        <i className={styles.hobby}></i><Link href="/hobby">趣味</Link>
                    </li>
                    <li className={styles.item}>
                        <i className={styles.me}></i><Link href="/about">自己紹介</Link>
                    </li>
                    <li className={styles.item}>
                        <i className={styles.skill}></i><Link href="/skill">スキル</Link>
                    </li>
                    <li className={styles.contact}>
                        <Link href="/contact">お問い合わせ</Link>
                    </li>
                </ul>
            </div>
        </>
    );
}
