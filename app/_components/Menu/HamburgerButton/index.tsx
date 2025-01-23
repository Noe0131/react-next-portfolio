"use client";

import { useEffect } from "react";
import styles from "./index.module.css";

type Props = {
    isOpen: boolean;
    toggleMenu: () => void;
};

export default function HamburgerButton({ isOpen, toggleMenu }: Props) {
    return (
        <button
            className={`${styles.hamburger} ${isOpen ? styles.open : ""}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
        >
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
            <span className={styles.text}>{isOpen ? "閉じる" : "MENU"}</span>
        </button>
    );
}
