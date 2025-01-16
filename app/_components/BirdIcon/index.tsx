import styles from "./index.module.css";

type Props = {
  bird: string;
  birdtype_2: string;
  birdtype_3: string;
};

export default function BirdIcon({ bird, birdtype_2, birdtype_3 }: Props) {
  return (
    <>
      <div className={styles.bird}>{bird}</div> 
      <div className={styles.birdtype_2}>{birdtype_2}</div>
      <div className={styles.birdtype_3}>{birdtype_3}</div>
    </>
  );
}
