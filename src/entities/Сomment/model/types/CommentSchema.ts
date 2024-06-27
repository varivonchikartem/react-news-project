import { EntityState } from "@reduxjs/toolkit";
import { User } from "../../../User";

export interface Comment {
  id: string;
  user: User;
  commentTitle: string;
  commentText: string;
  commentCreatedAt?: string;
}

export interface CommentSchema {
  comment?: Comment[];
  isLoading: boolean;
  isError?: string;
}
