import type { Category } from "@/app/_libs/microcms";
import styles from "./index.module.css";

type Props= {
    categories: Category [];
};
export default function Category({ categories }: Props) {
    // 配列形式でmap
    return (
        <div>
            {categories.map((category, index) => (
            <span key={index}  className={styles.category}>
                {category.name}
            </span>
            ))}
        </div>
    );
}
