import React from "react";
import styles from "./ArticleBlocksSection.module.scss";
import { ArticleBlock, ArticleBlockType } from "../../../../entities/Article/modal/types/ArticleSchema";
import { ArticleDetailsTextBlockComponent } from "../../../../entities/Article/ui/ArticleBlocks/ui/ArticleDetailsTextBlockComponent/ArticleDetailsTextBlockComponent";
import { ArticleDetailsImageBlockComponent } from "../../../../entities/Article/ui/ArticleBlocks/ui/ArticleDetailsImageBlockComponent/ArticleDetailsImageBlockComponent";

interface ArticleBlocksSectionProps {
  blocks?: ArticleBlock[];
}

const ArticleBlocksSection: React.FC<ArticleBlocksSectionProps> = ({ blocks }) => {
  const renderBlock = React.useCallback((block: ArticleBlock) => {
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
  }, []);

  return <div className={styles.ContentInner}>{blocks?.map(renderBlock)}</div>;
};

export default ArticleBlocksSection;
