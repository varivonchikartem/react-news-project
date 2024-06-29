import { StateSchema } from "../../../../../app/providers/StoreProvider";

export const getArticlesPageData = (state: StateSchema) => state.articlesPage?.articles ?? [];
