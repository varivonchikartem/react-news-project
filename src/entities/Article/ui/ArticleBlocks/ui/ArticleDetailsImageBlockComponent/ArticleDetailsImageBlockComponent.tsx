import React from "react";
import clx from "classnames";
import styles from "./ArticleDetailsImageBlockComponent.module.scss";
import { ArticleImageBlock } from "../../../../modal/types/ArticleSchema";
import { AppImage } from "../../../../../../shared/ui/AppImage/AppImage";

interface ArticleDetailsImageBlockComponentProps {
  className?: string;

  block: ArticleImageBlock;
}

export const ArticleDetailsImageBlockComponent: React.FC<ArticleDetailsImageBlockComponentProps> = (
  props
) => {
  const { className, block } = props;

  const articledetailsimageblockcomponentClasses = clx(styles.ArticleDetailsImageBlockComponent, {
    [className!]: className,
  });

  console.log("Rendering image block with data:", block);
  return (
    <div className={articledetailsimageblockcomponentClasses}>
      <AppImage minHeight="50vh" src={block?.imageUrl} />
      <div className={styles.caption}>{block?.caption}</div>
    </div>
  );
};
