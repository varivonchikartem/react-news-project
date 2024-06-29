import React from "react";
import clx from "classnames";
import styles from "./ArticleRating.module.scss";
import { RatingCard } from "../../../../entities/Rating";

interface ArticleRatingProps {
  className?: string;
  articleId: string;
}

export const ArticleRating: React.FC<ArticleRatingProps> = (props) => {
  const { className, articleId } = props;

  const articleratingClasses = clx(styles.ArticleRating, {
    [className!]: className,
  });

  return (
    <RatingCard
      className={articleratingClasses}
      title="Оцените статью"
      feedbackTitle="Оставьте свой отзыв о статье"
      hasFeedback={true}
    />
  );
};
