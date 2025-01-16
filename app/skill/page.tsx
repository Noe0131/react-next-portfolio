'use client';

import styles from "./page.module.css";
import PageTransition from "../_components/PageTransition";
import SkillList from "../_components/SkillList"; 
import { Skill } from "@/app/_libs/microcms";


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
    imageUrl: "Skill/Python-logo.png",
    language: "Python",
    category: {
      system: "プログラミング言語・ライブラリ",
      generalLevel: "★★☆☆☆",
    },
    explanation: "汎用プログラミング言語で、機械学習やデータ分析などに広く使用されます。",
  },
  {
    id: "6",
    imageUrl: "/no-image.png",
    language: "vue.js",
    category: {
      system: "プログラミング言語・ライブラリ",
      generalLevel: "★★☆☆☆",
    },
    explanation: "フロントエンド開発で使用されるJavaScriptフレームワークで、Reactの代替となることができます。",
  },
  {
    id: "7",
    imageUrl: "/no-image.png",
    language: "Illustrator",
    category: {
      system: "デザインツール",
      generalLevel: "★★☆☆☆",
    },
    explanation: "ベクターグラフィック作成に使用されるデザインツールです。",
  },
  {
    id: "8",
    imageUrl: "/no-image.png",
    language: "Photoshop",
    category: {
      system: "デザインツール",
      generalLevel: "★★☆☆☆",
    },
    explanation: "画像編集とデザイン作成に使用されるツールです。",
  },
  {
    id: "9",
    imageUrl: "/no-image.png",
    language: "Excel",
    category: {
      system: "ビジネスツール",
      generalLevel: "★★☆☆☆",
    },
    explanation: "データ管理や分析、グラフ作成に使用されるツールです。",
  },
  {
    id: "10",
    imageUrl: "/no-image.png",
    language: "Word",
    category: {
      system: "ビジネスツール",
      generalLevel: "★★☆☆☆",
    },
    explanation: "文書作成と編集に使用されるツールです。",
  },
  {
    id: "11",
    imageUrl: "/no-image.png",
    language: "PowerPoint",
    category: {
      system: "ビジネスツール",
      generalLevel: "★★☆☆☆",
    },
    explanation: "プレゼンテーションを作成するためのツールです。",
  },
];

export default function SkillPage() {
  return (
    <PageTransition>
      <h1 className={styles.containerText}>学んでいるスキル</h1>
      <SkillList skills={Skills} />
    </PageTransition>
  );
}

