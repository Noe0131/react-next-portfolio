import styles from "./page.module.css";
import PageTransition from "../_components/PageTransition";
import SkillList from "../_components/SkillList"; 
import { Later } from "@/app/_libs/microcms";
import { Skill } from "@/app/_libs/microcms";
import { skillList } from "@/app/_libs/microcms";
import AfterList from "../_components/Later";
import { skillList_LIST_LIMIT } from "@/app/_constants"

const Skills: Skill[] = [
  {
    id: "1",
    imageUrl: "Skill/html.png",
    language: "HTML",
    category: {
      system: "プログラミング言語・ライブラリ",
      generalLevel: "★☆☆☆☆",
    },
    explanation: "Webページを作成するための基本的なマークアップ言語です。",
  },
  {
    id: "2",
    imageUrl: "Skill/CSS.png",
    language: "CSS",
    category: {
      system: "プログラミング言語・ライブラリ",
      generalLevel: "★☆☆☆☆",
    },
    explanation: "Webページのデザインやレイアウトを整えるスタイルシート言語です。",
  },
  {
    id: "3",
    imageUrl: "Skill/swiper.png",
    language: "Swiper",
    category: {
      system: "プログラミング言語・ライブラリ",
      generalLevel: "★☆☆☆☆",
    },
    explanation: "Webページでスライダーを実現するためのJavaScriptライブラリです。",
  },
  {
    id: "4",
    imageUrl: "Skill/TypeScript.png",
    language: "TypeScript",
    category: {
      system: "プログラミング言語・ライブラリ",
      generalLevel: "★★☆☆☆",
    },
    explanation: "型安全なJavaScriptを提供するスーパセットのプログラミング言語です。",
  },
  {
    id: "5",
    imageUrl: "Skill/Python.png",
    language: "Python",
    category: {
      system: "プログラミング言語・ライブラリ",
      generalLevel: "★★☆☆☆",
    },
    explanation: "汎用プログラミング言語で、機械学習やデータ分析などに広く使用されます。",
  },
  {
    id: "6",
    imageUrl: "Skill/v.png",
    language: "vue.js",
    category: {
      system: "プログラミング言語・ライブラリ",
      generalLevel: "★★☆☆☆",
    },
    explanation: "フロントエンド開発で使用されるJavaScriptフレームワークで、Reactの代替となることができます。",
  },
  {
    id: "7",
    imageUrl: "Skill/illustrator.png",
    language: "Illustrator",
    category: {
      system: "デザインツール",
      generalLevel: "★★☆☆☆",
    },
    explanation: "ベクターグラフィック作成に使用されるデザインツールです。",
  },
  {
    id: "8",
    imageUrl: "Skill/photoshop.png",
    language: "Photoshop",
    category: {
      system: "デザインツール",
      generalLevel: "★★☆☆☆",
    },
    explanation: "画像編集とデザイン作成に使用されるツールです。",
  },
  {
    id: "9",
    imageUrl: "Skill/excel.webp",
    language: "Excel",
    category: {
      system: "ビジネスツール",
      generalLevel: "★★☆☆☆",
    },
    explanation: "データ管理や分析、グラフ作成に使用されるツールです。",
  },
  {
    id: "10",
    imageUrl: "Skill/PPT.png",
    language: "PowerPoint",
    category: {
      system: "ビジネスツール",
      generalLevel: "★☆☆☆☆"
    },
    explanation: "プレゼンテーションを作成するためのツールです。",
  },
];



export default async function SkillPage() {
  const data = (await skillList({ limit: skillList_LIST_LIMIT })).contents;
  return (
    <PageTransition>
      <h1 className={styles.containerText}>学んでいるスキル</h1>
      <SkillList skills={Skills} />
      <h1 className={styles.containerText}>今後学びたいスキル</h1>
      <AfterList After={data} />
    </PageTransition>
  );
}

