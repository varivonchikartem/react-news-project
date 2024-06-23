import { StateSchema } from "../../../../../app/providers/StoreProvider";
import { ArticleView } from "../../../../../entities/Article/modal/types/ArticleSchema";

export const getArticlesPageView = (state: StateSchema) =>
  state.articlesPage?.articleView ?? ArticleView.SMALL_CARD;
