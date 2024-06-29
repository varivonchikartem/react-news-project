import { EntityAdapter, EntityState } from "@reduxjs/toolkit";
import { Article, ArticleType, ArticleView } from "../../../../entities/Article/modal/types/ArticleSchema";
import { ArticlesSortField, ArticlesSortOrder } from "../../../../entities/Article";

export interface ArticlesPageSchema {
  articles: Article[];

  articleView: ArticleView;
  articlesSort: ArticlesSortField;
  articlesOrder: ArticlesSortOrder;
  articlesType: ArticleType;
  articlesSearch: string;

  _inited: boolean;

  isLoading: boolean;
  isError?: string;
}
