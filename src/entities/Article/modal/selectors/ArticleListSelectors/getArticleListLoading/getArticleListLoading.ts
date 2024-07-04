import { StateSchema } from "../../../../../../app/providers/StoreProvider";

export const getArticleListLoading = (state: StateSchema) => state.articleList?.isLoading ?? false;
