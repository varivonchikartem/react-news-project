import { createEntityAdapter, createSlice, configureStore, PayloadAction } from "@reduxjs/toolkit";
import { Article, ArticleSchema } from "../types/ArticleSchema";
import { StateSchema } from "../../../../app/providers/StoreProvider";
import { ArticleService } from "../service/Article/ArticleService";
import { ArticleFetchByIdService } from "../service/ArticleFetchByIdService/ArticleFetchByIdService";

const ArticleAdapter = createEntityAdapter<Article>();

export const getArticles = ArticleAdapter.getSelectors<StateSchema>(
  (state) => state.article || ArticleAdapter.getInitialState()
);

const initialState: ArticleSchema = {
  ids: [],
  entities: {},
  isLoading: false,
  isError: "",
};

const ArticleSlice = createSlice({
  name: "Article",
  initialState: ArticleAdapter.getInitialState(initialState),
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(ArticleService.pending, (state) => {
        state.isError = undefined;
        state.isLoading = true;
      })
      .addCase(ArticleService.fulfilled, (state, action: PayloadAction<Article[]>) => {
        state.isLoading = false;
        ArticleAdapter.setAll(state, action.payload);
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
        ArticleAdapter.setOne(state, action.payload);
      })
      .addCase(ArticleFetchByIdService.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload;
      });
  },
});

export const { actions: ArticleActions, reducer: ArticleReducers } = ArticleSlice;
