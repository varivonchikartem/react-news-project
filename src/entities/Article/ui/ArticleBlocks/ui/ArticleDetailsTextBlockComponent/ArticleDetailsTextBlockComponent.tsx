import React from "react";
import clx from "classnames";
import styles from "./ArticleDetailsTextBlockComponent.module.scss";
import { ArticleTextBlock } from "../../../../modal/types/ArticleSchema";

interface ArticleDetailsTextBlockComponentProps {
  className?: string;

  block: ArticleTextBlock;
}

export const ArticleDetailsTextBlockComponent: React.FC<ArticleDetailsTextBlockComponentProps> = (props) => {
  const { className, block } = props;

  const articledetailstextblockcomponentClasses = clx(styles.ArticleDetailsTextBlockComponent, {
    [className!]: className,
  });

  return (
    <div className={articledetailstextblockcomponentClasses}>
      <h2 className={styles.title}>{block.title}</h2>
      {block.paragraphs.map((paragraph) => (
        <p>{paragraph}</p>
      ))}
    </div>
  );
};
