import { createEntityAdapter, createSlice, configureStore, PayloadAction } from "@reduxjs/toolkit";
import { CommentFormSchema } from "../types/CommentFormSchema";
import { User } from "../../../../entities/User";

const initialUser: User = {
  id: "",
  username: "",
  avatar: "",
};

const initialState: CommentFormSchema = {
  comment: {
    id: "",
    user: initialUser,
    commentText: "",
    commentTitle: "",
    commentCreatedAt: "",
  },

  isLoading: false,
  isError: "",
};

const CommentFormSlice = createSlice({
  name: "CommentForm",
  initialState: initialState,
  reducers: {
    setCommentFormTitle: (state, action: PayloadAction<string>) => {
      state.comment.commentTitle = action.payload;
    },
    setCommentFormText: (state, action: PayloadAction<string>) => {
      state.comment.commentText = action.payload;
    },
    setCommentCreatedAt: (state) => {
      const currentDate = new Date();
      const day = String(currentDate.getDate()).padStart(2, "0");
      const month = String(currentDate.getMonth() + 1).padStart(2, "0");
      const year = currentDate.getFullYear();
      const hours = String(currentDate.getHours()).padStart(2, "0");
      const minutes = String(currentDate.getMinutes()).padStart(2, "0");
      state.comment.commentCreatedAt = `${day}.${month}.${year} ${hours}:${minutes}`;
    },
  },
  extraReducers: (builder) => {},
});

export const { actions: CommentFormActions, reducer: CommentFormReducers } = CommentFormSlice;
