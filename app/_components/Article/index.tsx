import Image from "next/image";
import styles from './index.module.css';

import type { Hobby } from "@/app/_libs/microcms";
import Date from "../Date";
import Category from "../Category";

type Props = {
    data: Hobby;
}

export default function Article({data} : Props) {
    return (
        <main>
            <Image 
                src={data.thumbnail.url}
                alt="Thumbnail"
                className={styles.thumbnail}
                width={data.thumbnail.width} 
                height={data.thumbnail.height} 
            /> 
            <h1 className={styles.thumbnail}>{data.title}</h1>
            <div className={styles.mate}>
                <Category categories={data.category} />
                <Date date={data.publishedAt ?? data.createdAt}/>
            </div>
            <p className={styles.description}>{data.description}</p>
        </main>
    );
};