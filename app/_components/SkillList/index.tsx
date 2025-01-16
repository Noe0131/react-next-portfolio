import React from "react";
import styles from "./index.module.css";
import { Skill } from "@/app/_libs/microcms"; 

type SkillListProps = {
  skills: Skill[];
};

const SkillList: React.FC<SkillListProps> = ({ skills }) => (
  <div className={styles.skillListContainer}>
    {skills.map((skill) => (
      <div key={skill.id} className={styles.skillItem}>
        <img
          src={skill.imageUrl}
          alt={skill.language}
          className={styles.skillImage}
          width={350}
          height={250}
        />
        <h2 className={styles.skillLanguage}>{skill.language}</h2>
        <h3 className={styles.system}>グループ：{skill.category.system}</h3>
        <h3 className={styles.generalLevel}>難易度：{skill.category.generalLevel}</h3>
        <p className={styles.skillExplanation}>{skill.explanation}</p>
      </div>
    ))}
  </div>
);


export default SkillList;
