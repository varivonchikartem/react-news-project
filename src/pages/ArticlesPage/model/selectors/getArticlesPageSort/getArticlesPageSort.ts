import { StateSchema } from "../../../../../app/providers/StoreProvider";
import { ArticlesSortField } from "../../../../../entities/Article";

export const getArticlesPageSort = (state: StateSchema) =>
  state.articlesPage?.articlesSort ?? ArticlesSortField.TITLE;
