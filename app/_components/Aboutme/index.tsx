import Image from "next/image";
import styles from "./index.module.css";

import { My } from "@/app/_libs/microcms";

type Props = {
    my: My;
};

export default function About({ my }: Props) {
    return (
        <div className={styles.container}>
            <Image
            src={my.imageUrl}
            alt={my.imageUrl}
            width={400}
            height={350}
            className={styles.myimage}
            />
            <div className={styles.box}>
                <h2 className={styles.about}>{my.about}</h2>
                <h3 className={styles.aboutme}>{my.aboutme}</h3>
                <p className={styles. explanation}>{my.explanation}</p>
            </div>
        </div>
    );
}
