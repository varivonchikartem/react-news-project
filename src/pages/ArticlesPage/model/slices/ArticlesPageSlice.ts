import { createEntityAdapter, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ArticlesPageSchema } from "../types/ArticlesPageSchema";
import { ArticleType, ArticleView } from "../../../../entities/Article/modal/types/ArticleSchema";
import { ArticlesSortField, ArticlesSortOrder } from "../../../../entities/Article";

const initialState: ArticlesPageSchema = {
  ids: [],
  entities: {},

  articleView: ArticleView.SMALL_CARD,
  articlesSort: ArticlesSortField.TITLE,
  articlesSearch: "",
  articlesOrder: "asc",
  articlesType: ArticleType.ALL,

  isLoading: false,
  isError: "",
};

const ArticlesPageSlice = createSlice({
  name: "ArticlesPage",
  initialState,
  reducers: {
    setArticleView: (state, action: PayloadAction<ArticleView>) => {
      state.articleView = action.payload;
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
  },
});

export const { actions: ArticlesPageActions, reducer: ArticlesPageReducers } = ArticlesPageSlice;
