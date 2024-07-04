import React from "react";
import { Article, ArticleView } from "../../../../entities/Article/modal/types/ArticleSchema";
import { ArticleList } from "../../../../entities/Article/ui/ArticleList/ui/ArticleList";
import styles from "./RecommendationsSection.module.scss";

interface RecommendationsSectionProps {
  articleRecommendations: Article[];
}

const RecommendationsSection: React.FC<RecommendationsSectionProps> = ({ articleRecommendations }) => {
  return (
    <div>
      <h2 className={styles.title}>Рекомендации</h2>
      <ArticleList articles={articleRecommendations} articleView={ArticleView.SMALL_CARD} target="_blank" />
    </div>
  );
};

export default RecommendationsSection;
