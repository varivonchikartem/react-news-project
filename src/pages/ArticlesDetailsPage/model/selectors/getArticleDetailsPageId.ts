import { StateSchema } from "../../../../app/providers/StoreProvider";

export const getArticleDetailsPageId = (state: StateSchema) => state.articleDetailsPage?.article?.id ?? "";
