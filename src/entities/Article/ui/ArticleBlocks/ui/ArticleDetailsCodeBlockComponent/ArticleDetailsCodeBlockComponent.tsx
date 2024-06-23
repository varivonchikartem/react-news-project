import React from "react";
import clx from "classnames";
import styles from "./ArticleDetailsCodeBlockComponent.module.scss";

interface ArticleDetailsCodeBlockComponentProps {
  className?: string;
}

export const ArticleDetailsCodeBlockComponent: React.FC<ArticleDetailsCodeBlockComponentProps> = (props) => {
  const { className } = props;

  const articledetailscodeblockcomponentClasses = clx(styles.ArticleDetailsCodeBlockComponent, {
    [className!]: className,
  });

  return <div className={articledetailscodeblockcomponentClasses}>ArticleDetailsCodeBlockComponent</div>;
};
