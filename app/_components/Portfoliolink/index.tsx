import styles from "./index.module.css";
import Image from "next/image";

type Link = {
  id: string;
  img: string;
  title: string;
  explanation: string;
  button: string;
  url: string;
};

type PortfoliolinkProps = {
  links: Link[];
};

export default function Portfoliolink({ links }: PortfoliolinkProps) {
  return (
    <>
      <h2 className={styles.portfolio}>ポートフォリオ</h2>
      <dl className={styles.container}>
        {links.map((link) => (
          <dd key={link.id} className={styles.linkItem}>
            <img className={styles.image} src={link.img}></img>
            <h3 className={styles.portfolioTitle}>{link.title}</h3>
            <p className={styles.portfolioExplanation}>{link.explanation}</p>
            <a
              className={styles.portfolioButton}
              href={link.url}
              target="_self"
              rel="noopener noreferrer"
            >
              {link.button}
            </a>
          </dd>
        ))}
      </dl>
    </>
  );
}
