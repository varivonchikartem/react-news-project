import { createEntityAdapter, createSlice, configureStore, PayloadAction } from "@reduxjs/toolkit";
import { Article, ArticleSchema } from "../types/ArticleSchema";
import { StateSchema } from "../../../../app/providers/StoreProvider";
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
});

export const { actions: ArticleActions, reducer: ArticleReducers } = ArticleSlice;
