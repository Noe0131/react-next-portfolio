import React from "react";
import styles from "./index.module.css";
import { Later } from "@/app/_libs/microcms";

type Props = {
  After: Later[]; 
};

export default function AfterList({ After }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.skillListContainer}>
        {After.map((LaterSkill) => (
          <div key={LaterSkill.id} className={styles.skillItem}>
            <img
              src={LaterSkill.imageUrl.url}
              alt={LaterSkill.language}
              className={styles.skillImage}
              width={350}
              height={250}
            />
            <h2 className={styles.skillLanguage}>{LaterSkill.language}</h2>
            <h3 className={styles.system}>グループ：{LaterSkill.system}</h3>
            <h3 className={styles.generalLevel}>難易度：{LaterSkill.generalLevel}</h3>
            <p className={styles.explanation}>{LaterSkill.explanation}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

