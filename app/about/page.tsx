import AboutmePage from "@/app/_components/AboutmePage";
import Aboutme from "@/app/_components/Aboutme";
import { About } from "@/app/_libs/microcms";
import { My } from "@/app/_libs/microcms";
import PageTransition from "../_components/PageTransition";

const aboutData: About[] = [
  {
    name: "ボールドン ノエ",
    explanation: "京都デザイン＆テクノロジー専門学校在学中です。",
    imageUrl: "/About/rose.jpg"
  },
];

const mYData: My[] = [
  {
    imageUrl: "/About/No.png",
    about: "About me",
    aboutme: "僕について",
    explanation: `京都デザイン＆テクノロジー専門学校: スーパーITエンジニア専攻。
    現在、TypeScript と Vue.js を中心に学習を進めています。フロントエンド開発のスキルを磨きながら、効率的で拡張性の高いコードを書くことを目指しています。`
  },
];



export default function AboutPage() {
  return (
    <PageTransition>
      <AboutmePage about={aboutData[0]} /> 
      <Aboutme my={mYData[0]} />
    </PageTransition>
  );
}
