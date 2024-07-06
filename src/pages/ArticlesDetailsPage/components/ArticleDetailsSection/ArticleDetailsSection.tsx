import React from "react";
import styles from "./ArticleDetailsSection.module.scss";
import { AppImage } from "../../../../shared/ui/AppImage/AppImage";
import { Article } from "../../../../entities/Article/modal/types/ArticleSchema";
import { ArticleRating } from "../../../../features/ArticleRating/ui/ArticleRating/ArticleRating";
import Skeleton from "../../../../shared/ui/Skeleton/Skeleton";

interface ArticleDetailsSectionProps {
  article?: Article;
  id: string;
  isLoading?: boolean;
  className?: string;
}

const ArticleDetailsSection: React.FC<ArticleDetailsSectionProps> = ({
  article,
  id,
  isLoading = false,
  className,
}) => {
  const articleDetailsSectionClasses = `${styles.ArticleDetailsSection} ${className}`;

  if (isLoading) {
    return (
      <div className={articleDetailsSectionClasses}>
        <div className={styles.Content}>
          <div className={styles.DescriptionInner}>
            <Skeleton className={styles.titleSkeleton} />
            <Skeleton className={styles.subtitleSkeleton} />
            <Skeleton className={styles.ratingSkeleton} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={articleDetailsSectionClasses}>
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
