import { Comment } from "../../../../entities/Сomment";

export interface ArticleDetailsPageCommentsSchema {
  comments: Comment[];

  isLoading: boolean;
  isError?: string;
}
