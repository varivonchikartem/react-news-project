import { createEntityAdapter, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ArticlesPageSchema } from "../types/ArticlesPageSchema";
import { Article, ArticleView } from "../../../../entities/Article/modal/types/ArticleSchema";

const initialState: ArticlesPageSchema = {
  ids: [],
  entities: {},

  articleView: ArticleView.SMALL_CARD,

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
  },
});

export const { actions: ArticlesPageActions, reducer: ArticlesPageReducers } = ArticlesPageSlice;
