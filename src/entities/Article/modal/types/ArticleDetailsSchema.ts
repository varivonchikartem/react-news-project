import { Article } from "./ArticleSchema";

export interface ArticleDetailsSchema {
  article?: Article;

  isLoading: boolean;
  isError?: string;
}
