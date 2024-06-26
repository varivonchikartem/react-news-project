import { createEntityAdapter, createSlice, configureStore, PayloadAction } from "@reduxjs/toolkit";
import { Article, ArticleSchema } from "../types/ArticleSchema";
import { StateSchema } from "../../../../app/providers/StoreProvider";
import { ArticleService } from "../service/Article/ArticleService";
import { ArticleFetchByIdService } from "../service/ArticleFetchByIdService/ArticleFetchByIdService";

const initialState: ArticleSchema = {
  articles: [],
  isLoading: false,
  isError: "",
};

const ArticleSlice = createSlice({
  name: "Article",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(ArticleService.pending, (state) => {
        state.isError = undefined;
        state.isLoading = true;
      })
      .addCase(ArticleService.fulfilled, (state, action: PayloadAction<Article[]>) => {
        state.isLoading = false;
        state.articles = action.payload;
      })
      .addCase(ArticleService.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload;
      })
      .addCase(ArticleFetchByIdService.pending, (state) => {
        state.isError = undefined;
        state.isLoading = true;
      })
      .addCase(ArticleFetchByIdService.fulfilled, (state, action: PayloadAction<Article>) => {
        state.isLoading = false;
      })
      .addCase(ArticleFetchByIdService.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload;
      });
  },
});

export const { actions: ArticleActions, reducer: ArticleReducers } = ArticleSlice;
