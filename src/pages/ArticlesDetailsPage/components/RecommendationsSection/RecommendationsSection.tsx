import React from "react";
import { Article, ArticleView } from "../../../../entities/Article/modal/types/ArticleSchema";
import { ArticleList } from "../../../../entities/Article/ui/ArticleList/ui/ArticleList";

interface RecommendationsSectionProps {
  articleRecommendations: Article[];
}

const RecommendationsSection: React.FC<RecommendationsSectionProps> = ({ articleRecommendations }) => {
  return (
    <div>
      <ArticleList articles={articleRecommendations} articleView={ArticleView.SMALL_CARD} target="_blank" />
    </div>
  );
};

export default RecommendationsSection;
