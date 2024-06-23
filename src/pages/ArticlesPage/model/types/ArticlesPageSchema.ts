import { EntityAdapter, EntityState } from "@reduxjs/toolkit";
import { Article, ArticleView } from "../../../../entities/Article/modal/types/ArticleSchema";

export interface ArticlesPageSchema extends EntityState<Article, string> {
  articleView: ArticleView;

  isLoading: boolean;
  isError?: string;
}
