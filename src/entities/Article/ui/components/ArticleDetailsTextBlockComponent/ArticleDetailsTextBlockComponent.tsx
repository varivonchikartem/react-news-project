import React from "react";
import clx from "classnames";
import styles from "./ArticleDetailsTextBlockComponent.module.scss";

interface ArticleDetailsTextBlockComponentProps {
  className?: string;
}

export const ArticleDetailsTextBlockComponent: React.FC<ArticleDetailsTextBlockComponentProps> = (props) => {
  const { className } = props;

  const articledetailstextblockcomponentClasses = clx(styles.ArticleDetailsTextBlockComponent, {
    [className!]: className,
  });

  return <div className={articledetailstextblockcomponentClasses}>ArticleDetailsTextBlockComponent</div>;
};
