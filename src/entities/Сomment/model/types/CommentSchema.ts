import { EntityState } from "@reduxjs/toolkit";
import { User } from "../../../User";

export interface Comment {
  id: string;
  user: User;
  commentText: string;
  commentCreatedAt?: string;
}

export interface CommentSchema extends EntityState<Comment, string> {
  isLoading: boolean;
  isError?: string;
}
