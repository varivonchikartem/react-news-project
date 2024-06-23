import { EntityAdapter, EntityState } from "@reduxjs/toolkit";
import { Article, ArticleType, ArticleView } from "../../../../entities/Article/modal/types/ArticleSchema";
import { ArticlesSortField, ArticlesSortOrder } from "../../../../entities/Article";

export interface ArticlesPageSchema extends EntityState<Article, string> {
  articleView: ArticleView;
  articlesSort: ArticlesSortField;
  articlesOrder: ArticlesSortOrder;
  articlesType: ArticleType;
  articlesSearch: string;

  isLoading: boolean;
  isError?: string;
}
