import AboutmePage from "@/app/_components/AboutmePage";
import Aboutme from "@/app/_components/Aboutme";
import { About } from "@/app/_libs/microcms";
import { My } from "@/app/_libs/microcms";
import PageTransition from "../_components/PageTransition";

const aboutData: About[] = [
  {
    name: "ボールドン ノエ",
    explanation: "今はタイプスクリプト、vue.jsを主に学んでいます。",
    imageUrl: "/About/rose.jpg"
  },
];

const mYData: My[] = [
  {
    imageUrl: "/about/No.png",
    about: "abotme",
    aboutme: "僕について",
    explanation: "ああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ",
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
