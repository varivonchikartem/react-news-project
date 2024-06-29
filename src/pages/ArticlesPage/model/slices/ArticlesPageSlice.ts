import { createEntityAdapter, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ArticlesPageSchema } from "../types/ArticlesPageSchema";
import { Article, ArticleType, ArticleView } from "../../../../entities/Article/modal/types/ArticleSchema";
import { ArticlesSortField, ArticlesSortOrder } from "../../../../entities/Article";
import { FetchArticleListService } from "../services/FetchArticleListService/FetchArticleListService";
import { ARTICLE_VIEW_LOCALSTORAGE_KEY } from "../../../../shared/const/localStorage/Article/ArticleViewKey/ArticleViewKey";

const initialState: ArticlesPageSchema = {
  articles: [],

  articleView: ArticleView.SMALL_CARD,
  articlesSort: ArticlesSortField.TITLE,
  articlesSearch: "",
  articlesOrder: "asc",
  articlesType: ArticleType.ALL,

  _inited: false,

  isLoading: false,
  isError: "",
};

const ArticlesPageSlice = createSlice({
  name: "ArticlesPage",
  initialState,
  reducers: {
    setArticleView: (state, action: PayloadAction<ArticleView>) => {
      state.articleView = action.payload;
      localStorage.setItem(ARTICLE_VIEW_LOCALSTORAGE_KEY, action.payload);
    },
    setArticleOrder: (state, action: PayloadAction<ArticlesSortOrder>) => {
      state.articlesOrder = action.payload;
    },
    setArticleSort: (state, action: PayloadAction<ArticlesSortField>) => {
      state.articlesSort = action.payload;
    },
    setArticleSearch: (state, action: PayloadAction<string>) => {
      state.articlesSearch = action.payload;
    },
    setArticleType: (state, action: PayloadAction<ArticleType>) => {
      state.articlesType = action.payload;
    },
    initState: (state) => {
      state.articleView = localStorage.getItem(ARTICLE_VIEW_LOCALSTORAGE_KEY) as ArticleView;
      state._inited = true;
    },
  },
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

export const { actions: ArticlesPageActions, reducer: ArticlesPageReducers } = ArticlesPageSlice;
