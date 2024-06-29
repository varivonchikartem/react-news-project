import { StateSchema } from "../../../../../app/providers/StoreProvider";

export const getArticleRatingData = (state: StateSchema) => state.ArticleRatingFeature?.ratings;
