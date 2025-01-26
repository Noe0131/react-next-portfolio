import { getHobbyDetail } from "@/app/_libs/microcms";
import Article from "@/app/_components/Article";
import ButtonLink from "@/app/_components/ButtonLink";
import PageTransition from "@/app/_components/PageTransition";
import styles from "./page.module.css";

type Props = {
  params: {
    slug: string;
  };
};

export default async function DetailPage(props: Props) {
  const data = await getHobbyDetail(props.params.slug);

  return (
    <>
      <PageTransition>
      <Article data={data} />
      <ButtonLink href="/hobby">一覧へ戻る</ButtonLink>
      </PageTransition>
    </>
  );
};
