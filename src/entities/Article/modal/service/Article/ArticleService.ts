import { createAsyncThunk } from "@reduxjs/toolkit";
import { User, UserActions } from "../../../../../entities/User";
import { ThunkConfig } from "../../../../../app/providers/StoreProvider/config/types/ThunkConfigSchema/ThunkConfigSchema";
import { USER_LOCALSTORAGE_KEY } from "../../../../../shared/const/localStorage/User/UserKey/UserKey";
import { Article } from "../../types/ArticleSchema";

export const ArticleService = createAsyncThunk<Article[], void, ThunkConfig<string>>(
  "Article/ArticleService",
  async (_, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi;

    try {
      const response = await extra.api.get<Article[]>("/articles");
      if (!response.data) {
        throw new Error();
      }

      console.log(response.data);

      return response.data;
    } catch (e) {
      console.log(e);
      return rejectWithValue("error");
    }
  }
);
