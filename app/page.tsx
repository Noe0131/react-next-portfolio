import styles from "./page.module.css";
import Image from "next/image";


import HobbyList from "@/app/_components/HobbyList";
import ButtonLink from "./_components/ButtonLink";
import Portfoliolink from "./_components/Portfoliolink";
import { Hobby } from "@/app/_libs/microcms";


const hobbies: Hobby[] = [
  {
    id: "1",
    title: "好きなスポーツについて",
    category: {
      name: "趣味",
    },
    publishedAt: "2023/05/19",
    createdAt: "2023/05/19",
  },
  {
    id: "2",
    title: "好きな食べ物について",
    category: {
      name: "好きなこと",
    },
    publishedAt: "2023/05/19",
    createdAt: "2023/05/19",
  },
  {
    id: "3",
    title: "ランニングについて",
    category: {
      name: "趣味",
    },
    publishedAt: "2023/05/19",
    createdAt: "2023/05/19",
  },
];

const links = [
  {
    id: "01",
    title: "自己紹介",
    explanation: "自己紹介のことが書いてあります。",
    button: "もっとみる",
    url: "/about",
  },
  {
    id: "02",
    title: "スキル",
    explanation: "プログラミングのスキルが書いてあります。",
    button: "もっとみる",
    url: "/skill",
  },
  {
    id: "03",
    title: "お問い合わせ",
    explanation: "お問い合わせです。",
    button: "もっとみる",
    url: "/contact",
  },
];


export default function Home() {
  return (
    <>
        <HobbyList hobbies={hobbies} />
        <div className={styles.hobbyLink}>
          <ButtonLink href="/hobby">もっとみる</ButtonLink>
        </div>
      <Portfoliolink links={links} />
    </>
  );
}
