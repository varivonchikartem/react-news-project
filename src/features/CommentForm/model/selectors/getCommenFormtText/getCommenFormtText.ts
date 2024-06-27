import { StateSchema } from "../../../../../app/providers/StoreProvider";

export const getCommenFormtText = (state: StateSchema) => state.commentForm?.comment.commentText ?? "";
