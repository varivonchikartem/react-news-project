import { StateSchema } from "../../../../../app/providers/StoreProvider";

export const getCommentFormCreatedAt = (state: StateSchema) =>
  state.commentForm?.comment.commentCreatedAt ?? "";
