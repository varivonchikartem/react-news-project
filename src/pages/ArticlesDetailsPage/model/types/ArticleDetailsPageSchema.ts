import { Article } from "../../../../entities/Article/modal/types/ArticleSchema";

export interface ArticleDetailsPageSchema {
  article?: Article;

  isLoading: boolean;
  isError?: string;
}
