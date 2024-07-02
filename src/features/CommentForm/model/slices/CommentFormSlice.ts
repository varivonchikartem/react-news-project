import { createEntityAdapter, createSlice, configureStore, PayloadAction } from "@reduxjs/toolkit";
import { CommentFormSchema } from "../types/CommentFormSchema";
import { User } from "../../../../entities/User";

const initialUser: User = {
  id: "",
  username: "",
  avatar: ""
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
  },
  extraReducers: (builder) => {},
});

export const { actions: CommentFormActions, reducer: CommentFormReducers } = CommentFormSlice;
