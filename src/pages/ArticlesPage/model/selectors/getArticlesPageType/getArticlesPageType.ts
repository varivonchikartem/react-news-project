import { StateSchema } from "../../../../../app/providers/StoreProvider";
import { ArticleType } from "../../../../../entities/Article/modal/types/ArticleSchema";

export const getArticlesPageType = (state: StateSchema) =>
  state.articlesPage?.articlesType ?? ArticleType.ALL;
