import React from "react";
import styles from "./ArticleDetailsSection.module.scss";
import { AppImage } from "../../../../shared/ui/AppImage/AppImage";
import { Article } from "../../../../entities/Article/modal/types/ArticleSchema";
import { ArticleRating } from "../../../../features/ArticleRating/ui/ArticleRating/ArticleRating";

interface ArticleDetailsSectionProps {
  article?: Article;
  id: string;
}

const ArticleDetailsSection: React.FC<ArticleDetailsSectionProps> = ({ article, id }) => {
  return (
    <div className={styles.ArticleDetailsSection}>
      <div className={styles.Content}>
        <div className={styles.DescriptionInner}>
          <h2>{article?.title}</h2>
          <p className={styles.subtitle}>{article?.subtitle}</p>
          <ArticleRating className={styles.rating} articleId={id} />
        </div>
      </div>
    </div>
  );
};

export default ArticleDetailsSection;
