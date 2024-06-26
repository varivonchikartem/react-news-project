import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Article } from "../../types/ArticleSchema";
import { ThunkConfig } from "../../../../../app/providers/StoreProvider/config/types/ThunkConfigSchema/ThunkConfigSchema";

export const ArticleFetchByIdService = createAsyncThunk<Article, string, ThunkConfig<string>>(
  "Article/ArticleFetchByIdService",
  async (articleId, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi;

    try {
      const response = await extra.api.get<Article>(`articles/${articleId}`);
      if (!response.data) {
        throw new Error();
      }

      console.log(response.data);

      return response.data;
    } catch (e) {
      console.log(e);
      return rejectWithValue("Failed to fetch article");
    }
  }
);
