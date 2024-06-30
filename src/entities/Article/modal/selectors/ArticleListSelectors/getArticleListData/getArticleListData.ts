import { StateSchema } from "../../../../../../app/providers/StoreProvider";

export const getArticleListData = (state: StateSchema) => state.articleList?.articles ?? [];
