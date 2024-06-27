import { createEntityAdapter, createSlice, configureStore, PayloadAction } from "@reduxjs/toolkit";
import { StateSchema } from "../../../../app/providers/StoreProvider";
import { Comment, CommentSchema } from "../types/CommentSchema";

const initialState: CommentSchema = {
  comment: undefined,
  isLoading: false,
  isError: "",
};

const CommentSlice = createSlice({
  name: "Comment",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder;
    //   .addCase(ArticleService.pending, (state) => {
    //     state.isError = undefined;
    //     state.isLoading = true;
    //   })
    //   .addCase(ArticleService.fulfilled, (state, action: PayloadAction<Article[]>) => {
    //     state.isLoading = false;
    //     ArticleAdapter.setAll(state, action.payload);
    //   })
    //   .addCase(ArticleService.rejected, (state, action) => {
    //     state.isLoading = false;
    //     state.isError = action.payload;
    //   })
    //   .addCase(ArticleFetchByIdService.pending, (state) => {
    //     state.isError = undefined;
    //     state.isLoading = true;
    //   })
    //   .addCase(ArticleFetchByIdService.fulfilled, (state, action: PayloadAction<Article>) => {
    //     state.isLoading = false;
    //     ArticleAdapter.setOne(state, action.payload);
    //   })
    //   .addCase(ArticleFetchByIdService.rejected, (state, action) => {
    //     state.isLoading = false;
    //     state.isError = action.payload;
    //   });
  },
});

export const { actions: CommentActions, reducer: CommentReducers } = CommentSlice;
