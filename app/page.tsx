import styles from "./page.module.css";
import Image from "next/image";


import { hobbyList } from "@/app/_libs/microcms";
import { HobbyList_LIST_LIMIT } from "@/app/_constants/index";
import PageTransition from "./_components/PageTransition";
import Footer from "./_components/Footer";
import HobbyList from "@/app/_components/HobbyList";
import ButtonLink from "./_components/ButtonLink";
import Portfoliolink from "./_components/Portfoliolink";
import BirdIcon from "./_components/BirdIcon";
import { image } from "motion/react-client";

const links = [
  {
    id: "01",
    title: "自己紹介",
    img: "linkimg/me.png",
    explanation: "自己紹介のことが書いてあります。",
    button: "もっとみる",
    url: "/about",
  },
  {
    id: "02",
    title: "スキル",
    img: "linkimg/ts.jpg",
    explanation: "プログラミングのスキルが書いてあります。",
    button: "もっとみる",
    url: "/skill",
  },
  {
    id: "03",
    img: "linkimg/contact.jpg",
    title: "お問い合わせ",
    explanation: "お問い合わせです。",
    button: "もっとみる",
    url: "/contact",
  },
];


export default async function Home() {

  const data = await hobbyList({
    limit: HobbyList_LIST_LIMIT,
  });

  return (
    <>
      <PageTransition>
        <HobbyList hobbies={data.contents} />
        <div className={styles.hobbyLink}>
          <ButtonLink href="/hobby">もっとみる</ButtonLink>
          {/* <BirdIcon bird="" birdtype_2="" birdtype_3="" />いったん消す */}
        </div>
        <Portfoliolink links={links} />
      </PageTransition>
    </>
  );
}
