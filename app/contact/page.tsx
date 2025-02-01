import exp from "constants";
import styles from "./page.module.css";
import ContactForm from "@/app/_components/ContactForm";
import PageTransition from "../_components/PageTransition";

export default function Page() {
    return (
        <PageTransition>
        <div className={styles.container}>
            <p className={styles.text}>
                ご質問、ご相談は下記フォームよりお問い合わせください。
            </p>
            <ContactForm />
        </div>
        </PageTransition>
    );
}