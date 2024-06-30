import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Article, ArticleListSchema } from "../types/ArticleSchema";
import { FetchArticleListService } from "../service/FetchArticleListService/FetchArticleListService";

const initialState: ArticleListSchema = {
  articles: [],
  isLoading: false,
  isError: "",
};

const ArticleListSlice = createSlice({
  name: "ArticleList",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(FetchArticleListService.pending, (state) => {
        state.isError = undefined;
        state.isLoading = true;
      })
      .addCase(FetchArticleListService.fulfilled, (state, action: PayloadAction<Article[]>) => {
        state.isLoading = false;
        state.articles = action.payload;
      })
      .addCase(FetchArticleListService.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload;
      });
  },
});

export const { actions: ArticleListActions, reducer: ArticleListReducers } = ArticleListSlice;
