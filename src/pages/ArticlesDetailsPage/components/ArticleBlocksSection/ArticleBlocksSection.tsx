import React from "react";
import styles from "./ArticleBlocksSection.module.scss";
import { ArticleBlock, ArticleBlockType } from "../../../../entities/Article/modal/types/ArticleSchema";
import { ArticleDetailsTextBlockComponent } from "../../../../entities/Article/ui/ArticleBlocks/ui/ArticleDetailsTextBlockComponent/ArticleDetailsTextBlockComponent";
import { ArticleDetailsImageBlockComponent } from "../../../../entities/Article/ui/ArticleBlocks/ui/ArticleDetailsImageBlockComponent/ArticleDetailsImageBlockComponent";
import Skeleton from "../../../../shared/ui/Skeleton/Skeleton";

interface ArticleBlocksSectionProps {
  blocks?: ArticleBlock[];
  isLoading?: boolean;
  className?: string;
}

const ArticleBlocksSection: React.FC<ArticleBlocksSectionProps> = ({
  blocks,
  isLoading = false,
  className,
}) => {
  const articleBlocksSectionClasses = `${styles.ContentInner} ${className}`;

  if (isLoading || !blocks) {
    return (
      <div className={articleBlocksSectionClasses}>
        <Skeleton className={styles.skeleton} width="100%" height="50vh" />
        <Skeleton className={styles.skeleton} width="100%" height="50vh" />
        <Skeleton className={styles.skeleton} width="100%" height="50vh" />
      </div>
    );
  }

  const renderBlock = (block: ArticleBlock) => {
    switch (block.type) {
      case ArticleBlockType.TEXT:
        return <ArticleDetailsTextBlockComponent block={block} key={block.id} />;
      case ArticleBlockType.IMAGE:
        return <ArticleDetailsImageBlockComponent block={block} key={block.id} />;
      case ArticleBlockType.CODE:
        return null; 
      default:
        return null;
    }
  };

  return <div className={articleBlocksSectionClasses}>{blocks.map(renderBlock)}</div>;
};

export default ArticleBlocksSection;
