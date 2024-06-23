import React from "react";
import clx from "classnames";
import styles from "./ArticleDetailsImageBlockComponent.module.scss";

interface ArticleDetailsImageBlockComponentProps {
  className?: string;
}

export const ArticleDetailsImageBlockComponent: React.FC<ArticleDetailsImageBlockComponentProps> = (
  props
) => {
  const { className } = props;

  const articledetailsimageblockcomponentClasses = clx(styles.ArticleDetailsImageBlockComponent, {
    [className!]: className,
  });

  return <div className={articledetailsimageblockcomponentClasses}>ArticleDetailsImageBlockComponent</div>;
};
