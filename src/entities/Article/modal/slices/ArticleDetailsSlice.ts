import { createEntityAdapter, createSlice, configureStore, PayloadAction } from "@reduxjs/toolkit";
import { StateSchema } from "../../../../app/providers/StoreProvider";
import { ArticleFetchByIdService } from "../../../../entities/Article/modal/service/ArticleFetchByIdService/ArticleFetchByIdService";
import { Article } from "../../../../entities/Article/modal/types/ArticleSchema";
import { ArticleDetailsSchema } from "../types/ArticleDetailsSchema";

const initialState: ArticleDetailsSchema = {
  article: undefined,

  isLoading: false,
  isError: "",
};

const ArticleDetailsSlice = createSlice({
  name: "ArticleDetails",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(ArticleFetchByIdService.pending, (state) => {
        state.isError = undefined;
        state.isLoading = true;
      })
      .addCase(ArticleFetchByIdService.fulfilled, (state, action: PayloadAction<Article>) => {
        state.isLoading = false;
        state.article = action.payload;
      })
      .addCase(ArticleFetchByIdService.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload;
      });
  },
});

export const { actions: ArticleDetailsActions, reducer: ArticleDetailsReducers } = ArticleDetailsSlice;
