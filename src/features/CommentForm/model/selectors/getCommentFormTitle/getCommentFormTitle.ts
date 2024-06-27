import { StateSchema } from "../../../../../app/providers/StoreProvider";

export const getCommentFormTitle = (state: StateSchema) => state.commentForm?.comment.commentTitle ?? "";
