import { StateSchema } from "../../../../../app/providers/StoreProvider";

export const getArticleDetailsPageCommentsData = (state: StateSchema) =>
  state.articleDetailsPageComments?.comments;
