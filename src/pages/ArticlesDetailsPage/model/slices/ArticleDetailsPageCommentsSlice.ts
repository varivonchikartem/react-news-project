import { createEntityAdapter, createSlice, configureStore, PayloadAction } from "@reduxjs/toolkit";
import { StateSchema } from "../../../../app/providers/StoreProvider";
import { FetchCommentsByArticleIdService } from "../service/FetchCommentsByArticleIdService/FetchCommentsByArticleIdService";
import { Comment, CommentSchema } from "../../../../entities/Сomment";
import { ArticleDetailsPageCommentsSchema } from "../types/ArticleDetailsPageCommentsSchema";

const initialState: ArticleDetailsPageCommentsSchema = {
  comments: [],
  isLoading: false,
  isError: "",
};

const ArticleDetailsPageCommentsSlice = createSlice({
  name: "ArticleDetailsPageComments",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(FetchCommentsByArticleIdService.pending, (state) => {
        state.isError = undefined;
        state.isLoading = true;
      })
      .addCase(FetchCommentsByArticleIdService.fulfilled, (state, action: PayloadAction<Comment[]>) => {
        state.isLoading = false;
        state.comments = action.payload;
      })
      .addCase(FetchCommentsByArticleIdService.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload;
      });
  },
});

export const { actions: ArticleDetailsPageCommentsActions, reducer: ArticleDetailsPageCommentsReducers } =
  ArticleDetailsPageCommentsSlice;
