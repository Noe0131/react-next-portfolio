import styles from "./index.module.css";
import Image from "next/image";

type Link = {
  id: string;
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
      <h2 className={styles.portfolio}>ポートフォリオリンク一覧</h2>
      <dl className={styles.container}>
        {links.map((link) => (
          <dd key={link.id} className={styles.linkItem}>
            <Image
              className={styles.img}
              src="/no-image.png"
              alt="no"
              width={400}
              height={300}
            />
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
