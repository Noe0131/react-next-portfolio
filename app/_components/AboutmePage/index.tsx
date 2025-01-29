import Image from "next/image";
import styles from  "./index.module.css"
import { About } from "@/app/_libs/microcms";


type Props = {
    about: About;
  };

  export default function AboutmePage({ about }: Props) {
    return (
      <div className={styles.aboutContainer}>
        <div className={styles.textSection}>
          <h1 className={styles.name}>{about.name}</h1>
          <p className={styles.explanation}>{about.explanation}</p>
        </div>
        <div className={styles.imageSection}>
          <Image
            src={about.imageUrl}
            alt={about.name}
            className={styles.aboutImage}
            width={550}
            height={450}
          />
        </div>
      </div>
    );
  }

  

