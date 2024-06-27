import { Comment } from "../../../../entities/Сomment";

export interface CommentFormSchema {
  comment: Comment;

  isLoading: boolean;
  isError?: string;
}
