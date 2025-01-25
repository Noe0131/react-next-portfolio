import Image from "next/image";
import Link from "next/link";
import Category from "../Category";
import Date from "../Date";
import styles from "./index.module.css";
import { Hobby } from "@/app/_libs/microcms";

type Props = {
  hobbies: Hobby[]; 
};

export default function Home({ hobbies }: Props) {
    if (hobbies.length === 0) {
        return <p>記事がありません</p>
    }
  return (
    <>
      <section className={styles.top}>
        <h1 className={styles.title}>ボールドンノエのポートフォリオ</h1>
        <p className={styles.description}>ぜひごゆっくりとご覧ください！</p>
        <Image
          className={styles.bgimg}
          src="/home.jpg"
          alt="Background Image"
          width={4000}
          height={1200}
        />
      </section>
      <section className={styles.hobby}>
        <h2 className={styles.hobbyTitle}>趣味</h2>
        <ul>
          {hobbies.map((article) => (
            <li key={article.id} className={styles.list}>
                <Link href={`/hobby/${article.id}`} className={styles.link}>
                  {article.thumbnail ? (
                  <Image
                    src={article.thumbnail.url}
                    alt=""
                    className={styles.image}
                    width={article.thumbnail.width}
                    height={article.thumbnail.height}
                  />
                ) : (
                  <Image
                    className={styles.image}
                    src="/no-image.png"
                    alt="no"
                    width={1200}
                    height={630}
                  />
                )}
                </Link>
                <Link href={`/hobby/${article.id}`} className={styles.link}>
                  <dt className={styles.hobbyItemTitle}>{article.title}</dt>
                    <Category categories={article.category} />
                    <Date date={article.publishedAt ?? article.createdAt} />
                </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
